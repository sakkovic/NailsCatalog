export type Lang = 'fr' | 'en';

export interface QuickReply { label: string; value: string }
export interface BotResponse {
  text: string;
  quickReplies?: QuickReply[];
  action?: 'booking';
}

/* ── Quick reply sets ── */
export const QR_MAIN: Record<Lang, QuickReply[]> = {
  fr: [
    { label: '📅 Réserver',  value: 'book'     },
    { label: '💰 Prix',      value: 'prices'   },
    { label: '📍 Adresse',   value: 'location' },
    { label: '🕐 Horaires',  value: 'hours'    },
  ],
  en: [
    { label: '📅 Book Now',  value: 'book'     },
    { label: '💰 Prices',    value: 'prices'   },
    { label: '📍 Location',  value: 'location' },
    { label: '🕐 Hours',     value: 'hours'    },
  ],
};

export const QR_SERVICES: Record<Lang, QuickReply[]> = {
  fr: [
    { label: '💅 Pose d\'ongles', value: 'pose'     },
    { label: '✨ Manucure',       value: 'manicure' },
    { label: '💆 Pédicure',       value: 'pedicure' },
    { label: '🌸 Épilation',      value: 'waxing'   },
  ],
  en: [
    { label: '💅 Nail Extensions', value: 'pose'     },
    { label: '✨ Manicure',        value: 'manicure' },
    { label: '💆 Pedicure',        value: 'pedicure' },
    { label: '🌸 Waxing',          value: 'waxing'   },
  ],
};

export const QR_BACK: Record<Lang, QuickReply[]> = {
  fr: [{ label: '← Retour au menu', value: 'menu' }],
  en: [{ label: '← Back to menu',   value: 'menu' }],
};

/* ── Intent definitions ── */
export interface Intent {
  id: string;
  keywords: { fr: string[]; en: string[] };
  response: (lang: Lang) => BotResponse;
}

export const INTENTS: Intent[] = [
  /* Greeting */
  {
    id: 'greeting',
    keywords: {
      fr: ['bonjour', 'bonsoir', 'salut', 'allo', 'allô', 'coucou', 'bonne', 'hey'],
      en: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'howdy', 'greetings'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Bonjour et bienvenue chez **HadilNails**! 💅\nComment puis-je vous aider aujourd\'hui? Je suis là pour vos réservations, tarifs ou toute autre question.'
        : 'Hello and welcome to **HadilNails**! 💅\nHow can I assist you today? I\'m here for bookings, pricing, or any questions you may have.',
      quickReplies: QR_MAIN[lang],
    }),
  },

  /* Booking */
  {
    id: 'booking',
    keywords: {
      fr: ['réserver', 'reservation', 'rendez-vous', 'rdv', 'appointment', 'bookings', 'disponible', 'prendre', 'agenda', 'créneaux', 'disponibilité'],
      en: ['book', 'booking', 'appointment', 'reserve', 'schedule', 'slot', 'available', 'availability'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Parfait! 📅 Vous pouvez réserver en ligne en quelques secondes. Cliquez sur le bouton ci-dessous pour choisir votre créneau:'
        : 'Great! 📅 You can book online in just a few seconds. Click the button below to choose your time slot:',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Ouvrir le calendrier', value: '__booking__' }
          : { label: '📅 Open booking calendar', value: '__booking__' },
        ...QR_BACK[lang],
      ],
      action: 'booking',
    }),
  },

  /* Prices — general */
  {
    id: 'prices',
    keywords: {
      fr: ['prix', 'tarif', 'coût', 'combien', 'coûte', 'cher', 'gratuit', 'tarification', 'budget'],
      en: ['price', 'prices', 'cost', 'how much', 'expensive', 'cheap', 'fee', 'rate', 'budget'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Voici un aperçu de nos tarifs 💰:\n\n💅 Pose gel : dès **$55**\n💅 Bio gel : dès **$65**\n✨ Remplissage gel : dès **$45**\n✨ Manucure régulier : **$25**\n✨ Manucure gel : dès **$40**\n💆 Pédicure régulier : **$45**\n💆 Pédicure gel : **$55**\n🌸 Épilation sourcils : **$15**\n\nPour la liste complète, consultez notre page Services.'
        : 'Here\'s an overview of our pricing 💰:\n\n💅 Gel extensions: from **$55**\n💅 Bio gel: from **$65**\n✨ Gel refill: from **$45**\n✨ Regular manicure: **$25**\n✨ Gel manicure: from **$40**\n💆 Regular pedicure: **$45**\n💆 Gel pedicure: **$55**\n🌸 Eyebrow wax: **$15**\n\nFor the full list, check our Services page.',
      quickReplies: [
        ...QR_SERVICES[lang],
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Nail extensions / full set */
  {
    id: 'pose',
    keywords: {
      fr: ['pose', 'extension', 'ongles', 'full set', 'gel', 'biogel', 'bio gel', 'acrylique', 'faux ongles', 'nail art', 'french'],
      en: ['nail extensions', 'full set', 'gel nails', 'bio gel', 'acrylic', 'fake nails', 'nail art', 'french tips'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💅 Nos services d\'ongles:\n\n• **Pose Gel** : dès $55\n• **Pose Bio Gel** : dès $65\n• **Remplissage Gel** : dès $45\n• **Remplissage Bio Gel** : dès $55\n• **Enlever la pose** : $20\n• **Réparer 1 ongle** : $5\n• **Design / French** : dès $10\n\n💡 Le bio gel est plus souple et plus naturel que le gel classique!'
        : '💅 Our nail services:\n\n• **Gel Full Set**: from $55\n• **Bio Gel Full Set**: from $65\n• **Gel Refill**: from $45\n• **Bio Gel Refill**: from $55\n• **Remove extensions**: $20\n• **Repair 1 nail**: $5\n• **Design / French**: from $10\n\n💡 Bio gel is more flexible and natural-looking than regular gel!',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver maintenant', value: '__booking__' }
          : { label: '📅 Book now', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Manicure */
  {
    id: 'manicure',
    keywords: {
      fr: ['manucure', 'mains', 'ongles mains', 'changer vernis mains'],
      en: ['manicure', 'mani', 'hand nails', 'nail polish change hands'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '✨ Nos services manucure:\n\n• **Manucure Régulier** : $25\n• **Manucure Gel** : dès $40\n• **Changer Mani Rég** : $20\n• **Changer Mani Gel** : $30'
        : '✨ Our manicure services:\n\n• **Regular Manicure**: $25\n• **Gel Manicure**: from $40\n• **Change Regular Polish**: $20\n• **Change Gel Polish**: $30',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Pedicure */
  {
    id: 'pedicure',
    keywords: {
      fr: ['pédicure', 'pieds', 'ongles pieds', 'pied'],
      en: ['pedicure', 'pedi', 'foot', 'feet', 'toe nails'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💆 Nos services pédicure:\n\n• **Pédicure Régulier** : $45\n• **Pédicure Gel** : $55\n• **Changer Pédi Rég** : $25\n• **Changer Pédi Gel** : $35'
        : '💆 Our pedicure services:\n\n• **Regular Pedicure**: $45\n• **Gel Pedicure**: $55\n• **Change Regular Polish**: $25\n• **Change Gel Polish**: $35',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Waxing */
  {
    id: 'waxing',
    keywords: {
      fr: ['épilation', 'cire', 'sourcils', 'lèvre', 'aisselles', 'jambes', 'bikini', 'brésilien', 'visage', 'dos'],
      en: ['waxing', 'wax', 'eyebrows', 'lip', 'underarm', 'legs', 'bikini', 'brazilian', 'face', 'back'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🌸 Épilation à la cire:\n\n• **Sourcils** : $15\n• **Lèvre** : $13\n• **Menton** : $13\n• **Aisselles** : $15\n• **Visage** : dès $30\n• **Demi-bras** : dès $30\n• **Bras complets** : dès $40\n• **Demi-jambes** : dès $30\n• **Jambes complètes** : dès $45\n• **Bikini** : dès $35\n• **Brésilien** : dès $50'
        : '🌸 Waxing services:\n\n• **Eyebrows**: $15\n• **Lip**: $13\n• **Chin**: $13\n• **Underarms**: $15\n• **Face**: from $30\n• **Half arms**: from $30\n• **Full arms**: from $40\n• **Half legs**: from $30\n• **Full legs**: from $45\n• **Bikini**: from $35\n• **Brazilian**: from $50',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Location */
  {
    id: 'location',
    keywords: {
      fr: ['adresse', 'où', 'situé', 'quartier', 'monkland', 'ndg', 'notre-dame-de-grâce', 'trouver', 'emplacement', 'localisation'],
      en: ['address', 'where', 'location', 'located', 'neighborhood', 'monkland', 'ndg', 'find', 'directions'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '📍 Nous sommes situés au:\n\n**5999 Av de Monkland**\nMontréal, QC H4A 1H1\n\nDans le quartier NDG (Notre-Dame-de-Grâce). Stationnement dans la rue disponible sur l\'Avenue Monkland.'
        : '📍 We are located at:\n\n**5999 Av de Monkland**\nMontréal, QC H4A 1H1\n\nIn the NDG (Notre-Dame-de-Grâce) neighbourhood. Street parking is available on Monkland Ave.',
      quickReplies: QR_BACK[lang],
    }),
  },

  /* Hours */
  {
    id: 'hours',
    keywords: {
      fr: ['horaire', 'heures', 'ouvert', 'fermé', 'quand', 'heure', 'ouvre', 'ferme', 'dimanche', 'lundi', 'samedi'],
      en: ['hours', 'open', 'closed', 'when', 'schedule', 'time', 'sunday', 'monday', 'saturday', 'close'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🕐 Nos horaires d\'ouverture:\n\n• **Lundi – Samedi** : 9h00 – 19h00\n• **Dimanche** : 10h00 – 17h00\n\nNous sommes ouverts 7 jours sur 7! 🎉'
        : '🕐 Our opening hours:\n\n• **Monday – Saturday**: 9:00 AM – 7:00 PM\n• **Sunday**: 10:00 AM – 5:00 PM\n\nWe\'re open 7 days a week! 🎉',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book Now', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Contact */
  {
    id: 'contact',
    keywords: {
      fr: ['contact', 'téléphone', 'appeler', 'email', 'courriel', 'joindre', 'numéro', 'message'],
      en: ['contact', 'phone', 'call', 'email', 'message', 'number', 'reach', 'telephone'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '📞 Nos coordonnées:\n\n• **Téléphone** : (514) 000-0000\n• **Email** : hadilnails@gmail.com\n\nOu réservez directement en ligne 👇'
        : '📞 Get in touch:\n\n• **Phone**: (514) 000-0000\n• **Email**: hadilnails@gmail.com\n\nOr book directly online 👇',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver en ligne', value: '__booking__' }
          : { label: '📅 Book Online', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Payment */
  {
    id: 'payment',
    keywords: {
      fr: ['paiement', 'payer', 'carte', 'cash', 'espèces', 'visa', 'mastercard', 'interac', 'virement'],
      en: ['payment', 'pay', 'card', 'cash', 'visa', 'mastercard', 'interac', 'credit', 'debit'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💳 Nous acceptons les paiements par:\n\n• Carte de crédit (Visa, Mastercard)\n• Carte de débit / Interac\n• Espèces\n\nToutes les transactions sont sécurisées.'
        : '💳 We accept the following payment methods:\n\n• Credit card (Visa, Mastercard)\n• Debit card / Interac\n• Cash\n\nAll transactions are secure.',
      quickReplies: QR_BACK[lang],
    }),
  },

  /* Cancellation */
  {
    id: 'cancellation',
    keywords: {
      fr: ['annulation', 'annuler', 'modifier', 'changer', 'reporter', 'politique', 'remboursement'],
      en: ['cancel', 'cancellation', 'change', 'reschedule', 'refund', 'policy', 'modify'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '❌ Politique d\'annulation:\n\n• Annulation **gratuite** jusqu\'à **24h avant** le rendez-vous\n• En dessous de 24h : des frais peuvent s\'appliquer\n• Pour modifier ou annuler, contactez-nous par téléphone ou email.'
        : '❌ Cancellation policy:\n\n• **Free** cancellation up to **24 hours before** your appointment\n• Under 24h: fees may apply\n• To change or cancel, contact us by phone or email.',
      quickReplies: [
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Parking */
  {
    id: 'parking',
    keywords: {
      fr: ['stationnement', 'stationner', 'parking', 'voiture', 'garer'],
      en: ['parking', 'park', 'car', 'drive'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🚗 Stationnement:\n\nDu stationnement de rue est disponible sur l\'Avenue Monkland et les rues adjacentes. Il est généralement facile de trouver une place à proximité du salon.'
        : '🚗 Parking:\n\nStreet parking is available on Monkland Avenue and surrounding streets. It\'s generally easy to find a spot close to the salon.',
      quickReplies: [
        { label: '📍 Voir l\'adresse', value: 'location' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* Products */
  {
    id: 'products',
    keywords: {
      fr: ['produits', 'marque', 'qualité', 'hygiène', 'matériel', 'outils', 'stérilisé'],
      en: ['products', 'brand', 'quality', 'hygiene', 'tools', 'sterilized', 'safe'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '✅ Nous utilisons uniquement des **produits professionnels de qualité supérieure**. Tous nos outils sont stérilisés entre chaque client pour garantir votre sécurité et hygiène.'
        : '✅ We use only **high-quality professional products**. All our tools are sterilized between each client to ensure your safety and hygiene.',
      quickReplies: QR_BACK[lang],
    }),
  },

  /* Thanks */
  {
    id: 'thanks',
    keywords: {
      fr: ['merci', 'parfait', 'super', 'excellent', 'génial', 'top', 'nickel', 'cool', 'ok merci'],
      en: ['thanks', 'thank you', 'great', 'perfect', 'awesome', 'cool', 'nice', 'ok thanks'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Avec plaisir! 😊 N\'hésitez pas si vous avez d\'autres questions. À bientôt chez HadilNails! 💅'
        : 'You\'re welcome! 😊 Don\'t hesitate if you have any other questions. See you soon at HadilNails! 💅',
      quickReplies: QR_MAIN[lang],
    }),
  },

  /* Goodbye */
  {
    id: 'goodbye',
    keywords: {
      fr: ['au revoir', 'bye', 'à bientôt', 'bonne journée', 'bonne soirée', 'ciao', 'tchao'],
      en: ['goodbye', 'bye', 'see you', 'good bye', 'ciao', 'take care', 'later'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Au revoir! 👋 À bientôt chez HadilNails! Prenez soin de vous 💅'
        : 'Goodbye! 👋 See you soon at HadilNails! Take care 💅',
    }),
  },

  /* Menu / back */
  {
    id: 'menu',
    keywords: {
      fr: ['menu', 'retour', 'aide', 'help'],
      en: ['menu', 'back', 'help', 'start'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Comment puis-je vous aider? 😊'
        : 'How can I help you? 😊',
      quickReplies: QR_MAIN[lang],
    }),
  },
];

/* Fallback response */
export const FALLBACK = (lang: Lang): BotResponse => ({
  text: lang === 'fr'
    ? 'Hmm, je ne suis pas certaine de comprendre 😊 Voici ce sur quoi je peux vous renseigner :'
    : 'Hmm, I\'m not quite sure I follow 😊 Here\'s what I can help you with:',
  quickReplies: QR_MAIN[lang],
});

/* Welcome message (shown on first open) */
export const WELCOME = (lang: Lang): BotResponse => ({
  text: lang === 'fr'
    ? 'Bonjour et bienvenue chez **HadilNails**! 💅\nJe suis votre réceptionniste virtuelle — je peux vous aider à prendre rendez-vous, vous informer sur nos services et nos tarifs, ou répondre à toutes vos questions.\n\nComment puis-je vous aider aujourd\'hui?'
    : 'Hello and welcome to **HadilNails**! 💅\nI\'m your virtual receptionist — I can help you book an appointment, share information about our services and pricing, or answer any questions you may have.\n\nHow can I help you today?',
  quickReplies: QR_MAIN[lang],
});

/* Peek teaser message */
export const PEEK_MSG: Record<Lang, string> = {
  fr: '💅 Bonjour! Je peux vous aider?',
  en: '💅 Hello! How can I help you?',
};
