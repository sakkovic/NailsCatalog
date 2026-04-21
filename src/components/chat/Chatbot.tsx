import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Lang, WELCOME, PEEK_MSG, type BotResponse } from './chatKnowledge';
import { detectLanguage, processMessage, resolveQuickReply } from './chatEngine';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  quickReplies?: { label: string; value: string }[];
}

type ChatState = 'closed' | 'peek' | 'open';

let msgId = 0;
const uid = () => String(++msgId);

/* Render bot text: **bold** and newlines */
function renderText(text: string) {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((p, j) =>
          j % 2 === 1 ? <strong key={j}>{p}</strong> : p
        )}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    );
  });
}

/* ── Cute animated robot SVG ── */
const RobotSVG = () => (
  <svg className="robot-svg" viewBox="0 0 48 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Antenna stem */}
    <line className="robot-antenna-stem" x1="24" y1="9" x2="24" y2="14" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Antenna ball */}
    <circle className="robot-antenna-ball" cx="24" cy="5.5" r="4.5"/>
    {/* Head */}
    <rect className="robot-head" x="6" y="14" width="36" height="28" rx="11"/>
    {/* Left eye */}
    <circle className="robot-eye-ring" cx="17" cy="26" r="6.5"/>
    <circle className="robot-pupil" cx="17" cy="26" r="3.2"/>
    <circle className="robot-shine" cx="18.8" cy="24.2" r="1.3"/>
    {/* Right eye */}
    <circle className="robot-eye-ring" cx="31" cy="26" r="6.5"/>
    <circle className="robot-pupil" cx="31" cy="26" r="3.2"/>
    <circle className="robot-shine" cx="32.8" cy="24.2" r="1.3"/>
    {/* Smile */}
    <path className="robot-mouth" d="M 16 35 Q 24 42 32 35" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Body */}
    <rect className="robot-body" x="10" y="44" width="28" height="17" rx="8"/>
    {/* Chest buttons */}
    <circle className="robot-chest-dot" cx="19" cy="50.5" r="2.5"/>
    <circle className="robot-chest-dot" cx="29" cy="50.5" r="2.5"/>
    {/* Panel */}
    <rect className="robot-panel" x="14" y="55" width="20" height="4" rx="2"/>
  </svg>
);

export const Chatbot = () => {
  const [state, setState]           = useState<ChatState>('closed');
  const [messages, setMessages]     = useState<Message[]>([]);
  const [input, setInput]           = useState('');
  const [isTyping, setIsTyping]     = useState(false);
  const [lang, setLang]             = useState<Lang>('fr');
  const [hasOpened, setHasOpened]   = useState(false);
  const [unread, setUnread]         = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLInputElement>(null);

  /* Auto-scroll to newest message */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  /* Show peek after 3.5s */
  useEffect(() => {
    const t = setTimeout(() => {
      setState('peek');
      setUnread(1);
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  /* Auto-hide peek after 8s if not interacted */
  useEffect(() => {
    if (state !== 'peek') return;
    const t = setTimeout(() => {
      setState('closed');
      setUnread(0);
    }, 8000);
    return () => clearTimeout(t);
  }, [state]);

  /* Add a bot message with fake typing delay */
  const addBotMessage = useCallback((response: BotResponse, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: 'bot',
          text: response.text,
          quickReplies: response.quickReplies,
        },
      ]);
    }, delay);
  }, []);

  /* Open chat */
  const openChat = useCallback(() => {
    setState('open');
    setUnread(0);
    if (!hasOpened) {
      setHasOpened(true);
      addBotMessage(WELCOME(lang), 400);
    }
    setTimeout(() => inputRef.current?.focus(), 350);
  }, [hasOpened, lang, addBotMessage]);

  /* Close chat */
  const closeChat = () => setState('closed');

  /* Send a message */
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    // Detect language from user input
    const detectedLang = detectLanguage(text);
    setLang(detectedLang);

    // Add user message
    setMessages((prev) => [...prev, { id: uid(), role: 'user', text }]);
    setInput('');

    // Get bot response
    const response = processMessage(text, detectedLang);
    addBotMessage(response);
  }, [addBotMessage]);

  /* Handle quick reply tap */
  const handleQuickReply = useCallback((value: string) => {
    if (value === '__booking__') {
      // Trigger Cal.com popup
      // @ts-ignore
      window.Cal?.('ui', { styles: { branding: { brandColor: '#e8a0ad' } } });
      const btn = document.querySelector('[data-cal-link]') as HTMLElement | null;
      btn?.click();
      addBotMessage({
        text: lang === 'fr'
          ? '📅 Le calendrier de réservation s\'est ouvert! Choisissez votre créneau.'
          : '📅 The booking calendar has opened! Choose your time slot.',
      }, 400);
      return;
    }

    const response = resolveQuickReply(value, lang);
    if (response) {
      setMessages((prev) => [...prev, { id: uid(), role: 'user', text: '' }]);
      addBotMessage(response, 500);
    }
  }, [lang, addBotMessage]);

  /* Submit on Enter */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="chatbot-root">
      {/* Peek bubble */}
      <AnimatePresence>
        {state === 'peek' && (
          <motion.button
            className="chatbot-peek"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={openChat}
          >
            {PEEK_MSG[lang]}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {state === 'open' && (
          <motion.div
            className="chatbot-panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <span>💅</span>
                  <div className="chatbot-status-dot" />
                </div>
                <div>
                  <span className="chatbot-name">HadilNails</span>
                  <span className="chatbot-status">
                    {lang === 'fr' ? 'En ligne' : 'Online'}
                  </span>
                </div>
              </div>
              <button className="chatbot-close" onClick={closeChat} aria-label="Close">
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  msg.role === 'user' && !msg.text ? null : (
                    <motion.div
                      key={msg.id}
                      className={`chatbot-msg chatbot-msg-${msg.role}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      {msg.role === 'bot' && (
                        <div className="chatbot-msg-avatar">💅</div>
                      )}
                      <div className="chatbot-msg-content">
                        <div className="chatbot-bubble">
                          {renderText(msg.text)}
                        </div>
                        {/* Quick replies below the message */}
                        {msg.quickReplies && msg.id === messages[messages.length - 1]?.id && (
                          <div className="chatbot-qr">
                            {msg.quickReplies.map((qr) => (
                              <button
                                key={qr.value}
                                className="chatbot-qr-btn"
                                onClick={() => handleQuickReply(qr.value)}
                              >
                                {qr.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    key="typing"
                    className="chatbot-msg chatbot-msg-bot"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="chatbot-msg-avatar">💅</div>
                    <div className="chatbot-bubble chatbot-typing">
                      <span /><span /><span />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input-area">
              <input
                ref={inputRef}
                className="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={lang === 'fr' ? 'Écrivez votre message…' : 'Type your message…'}
                maxLength={200}
              />
              <button
                className="chatbot-send"
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                aria-label="Send"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => state === 'open' ? closeChat() : openChat()}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat"
      >
        <AnimatePresence mode="wait">
          {state === 'open' ? (
            <motion.span
              key="close"
              className="chatbot-toggle-x"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="robot"
              initial={{ opacity: 0, scale: 0.6, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 6 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <RobotSVG />
            </motion.span>
          )}
        </AnimatePresence>
        {unread > 0 && state !== 'open' && (
          <span className="chatbot-badge">{unread}</span>
        )}
      </motion.button>
    </div>
  );
};
