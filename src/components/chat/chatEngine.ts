import { type Lang, type BotResponse, INTENTS, FALLBACK } from './chatKnowledge';

/* ── Language detection ── */
const FR_MARKERS = [
  'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles',
  'le', 'la', 'les', 'de', 'du', 'un', 'une', 'des', 'mon', 'ma', 'mes',
  'et', 'ou', 'où', 'est', 'sont', 'avec', 'pour', 'dans', 'sur', 'par',
  'bonjour', 'bonsoir', 'salut', 'merci', 'oui', 'non', 'aussi', 'mais',
  'comment', 'combien', 'quand', 'quel', 'quelle', 'quels', 'quelles',
  'prix', 'ongles', 'réserver', 'horaire', 'adresse', 'téléphone',
  'qu\'est', 'c\'est', 'j\'ai', 'je veux', 'je voudrais', 'je cherche',
  'pouvez', 'puis-je', 'est-ce', 'avez-vous', 'faites-vous', 'acceptez',
  'première', 'nouveau', 'nouvelle', 'votre', 'vos', 'notre', 'nos',
  'très', 'bien', 'beaucoup', 'maintenant', 'aujourd', 'demain', 'semaine',
];

const EN_MARKERS = [
  'i', 'you', 'he', 'she', 'we', 'they', 'my', 'your', 'our',
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'have', 'has',
  'and', 'or', 'but', 'with', 'for', 'in', 'on', 'at', 'by',
  'hello', 'hi', 'hey', 'thanks', 'please', 'yes', 'no', 'also',
  'what', 'where', 'when', 'how', 'which', 'who', 'do', 'can', 'could',
  'price', 'nail', 'nails', 'book', 'hours', 'address', 'phone',
  'do you', 'can i', 'i want', 'i would', 'i need', 'i\'d like',
  'would you', 'could you', 'do you have', 'is there', 'are you',
  'first', 'new', 'time', 'today', 'tomorrow', 'week', 'appointment',
];

export function detectLanguage(text: string): Lang {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);

  let frScore = 0;
  let enScore = 0;

  for (const word of words) {
    if (FR_MARKERS.includes(word)) frScore++;
    if (EN_MARKERS.includes(word)) enScore++;
  }

  // Also check for accented characters common in French
  if (/[àâäéèêëîïôùûüç]/i.test(text)) frScore += 2;

  return enScore > frScore ? 'en' : 'fr';
}

/* ── Intent matching ── */
function scoreIntent(input: string, keywords: string[]): number {
  const lower = input.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (lower.includes(kw.toLowerCase())) {
      // Longer keyword match = higher score
      score += kw.length;
    }
  }
  return score;
}

export function processMessage(input: string, lang: Lang): BotResponse {
  const trimmed = input.trim();
  if (!trimmed) return FALLBACK(lang);

  let bestScore = 0;
  let bestIntent = null;

  for (const intent of INTENTS) {
    const keywords = [...intent.keywords.fr, ...intent.keywords.en];
    const score = scoreIntent(trimmed, keywords);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  const MIN_SCORE = 2;
  if (bestIntent && bestScore >= MIN_SCORE) {
    return bestIntent.response(lang);
  }

  return FALLBACK(lang);
}

/* ── Quick reply value resolver ── */
export function resolveQuickReply(value: string, lang: Lang): BotResponse | null {
  if (value === '__booking__') return null; // handled separately as action
  const intent = INTENTS.find((i) => i.id === value);
  return intent ? intent.response(lang) : null;
}
