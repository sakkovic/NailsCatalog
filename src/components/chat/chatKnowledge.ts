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
    { label: '📅 Réserver',   value: 'booking'  },
    { label: '💰 Prix',       value: 'prices'   },
    { label: '📍 Adresse',    value: 'location' },
    { label: '🕐 Horaires',   value: 'hours'    },
  ],
  en: [
    { label: '📅 Book Now',   value: 'booking'  },
    { label: '💰 Prices',     value: 'prices'   },
    { label: '📍 Location',   value: 'location' },
    { label: '🕐 Hours',      value: 'hours'    },
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

  /* ── Greeting ── */
  {
    id: 'greeting',
    keywords: {
      fr: ['bonjour', 'bonsoir', 'salut', 'allo', 'allô', 'coucou', 'hey', 'bonne journée', 'bonne soirée', 'bonne nuit', 'hello', 'slt'],
      en: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'sup', 'what\'s up'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Bonjour et bienvenue chez **HadilNails**! 💅\nComment puis-je vous aider aujourd\'hui? Je suis là pour vos réservations, tarifs ou toute autre question.'
        : 'Hello and welcome to **HadilNails**! 💅\nHow can I assist you today? I\'m here for bookings, pricing, or any questions you may have.',
      quickReplies: QR_MAIN[lang],
    }),
  },

  /* ── Booking ── */
  {
    id: 'booking',
    keywords: {
      fr: ['réserver', 'réservation', 'rendez-vous', 'rdv', 'prendre rendez', 'fixer un rendez', 'planifier', 'disponible', 'disponibilité', 'créneau', 'agenda', 'appointment', 'je voudrais réserver', 'je veux réserver', 'booker', 'booking', 'prendre un rdv', 'avoir un rdv', 'quand pouvez', 'quand peut'],
      en: ['book', 'booking', 'appointment', 'reserve', 'schedule', 'slot', 'available', 'availability', 'i want to book', 'i\'d like to book', 'make an appointment', 'set up appointment', 'can i book', 'how to book', 'next appointment', 'earliest', 'soonest'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '📅 Parfait! Vous pouvez réserver votre rendez-vous en ligne en quelques secondes.\nChoisissez votre service et votre créneau directement dans notre calendrier:'
        : '📅 Great! You can book your appointment online in just a few seconds.\nChoose your service and time slot directly in our calendar:',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Ouvrir le calendrier', value: '__booking__' }
          : { label: '📅 Open booking calendar', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Prices — general ── */
  {
    id: 'prices',
    keywords: {
      fr: ['prix', 'tarif', 'tarifs', 'coût', 'combien', 'coûte', 'cher', 'pas cher', 'abordable', 'budget', 'combien ça coûte', 'c\'est combien', 'ça coûte combien', 'grille', 'liste des prix', 'tarification', 'forfait', 'package'],
      en: ['price', 'prices', 'cost', 'how much', 'expensive', 'cheap', 'affordable', 'fee', 'rate', 'rates', 'budget', 'pricing', 'how much does', 'how much is', 'what does it cost', 'package', 'deal'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💰 Voici nos tarifs:\n\n💅 **Pose gel** : dès $55\n💅 **Bio gel** : dès $65\n✨ **Remplissage gel** : dès $45\n✨ **Manucure régulier** : $25\n✨ **Manucure gel** : dès $40\n💆 **Pédicure régulier** : $45\n💆 **Pédicure gel** : $55\n🌸 **Épilation sourcils** : $15\n\nQuel service vous intéresse?'
        : '💰 Here\'s our pricing:\n\n💅 **Gel extensions**: from $55\n💅 **Bio gel**: from $65\n✨ **Gel refill**: from $45\n✨ **Regular manicure**: $25\n✨ **Gel manicure**: from $40\n💆 **Regular pedicure**: $45\n💆 **Gel pedicure**: $55\n🌸 **Eyebrow wax**: $15\n\nWhich service interests you?',
      quickReplies: [
        ...QR_SERVICES[lang],
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Nail extensions / full set ── */
  {
    id: 'pose',
    keywords: {
      fr: ['pose', 'extension', 'extensions', 'ongles', 'full set', 'gel', 'biogel', 'bio gel', 'acrylique', 'faux ongles', 'capsules', 'tips', 'résine', 'rallonger', 'rallongement', 'remplissage', 'infill', 'fill', 'enlever', 'retirer la pose', 'réparer'],
      en: ['nail extension', 'nail extensions', 'full set', 'gel nails', 'bio gel', 'acrylic', 'fake nails', 'nail tips', 'capsules', 'lengthen', 'fill', 'infill', 'refill', 'removal', 'remove extensions', 'repair nail'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💅 Nos services d\'ongles:\n\n• **Pose Gel** : dès $55\n• **Pose Bio Gel** : dès $65\n• **Remplissage Gel** : dès $45\n• **Remplissage Bio Gel** : dès $55\n• **Enlever la pose** : $20\n• **Réparer 1 ongle** : $5\n• **Design / French** : dès $10\n\n💡 Le bio gel est plus souple et plus naturel — idéal si vos ongles sont fragiles!'
        : '💅 Our nail extension services:\n\n• **Gel Full Set**: from $55\n• **Bio Gel Full Set**: from $65\n• **Gel Refill**: from $45\n• **Bio Gel Refill**: from $55\n• **Remove extensions**: $20\n• **Repair 1 nail**: $5\n• **Design / French**: from $10\n\n💡 Bio gel is more flexible and natural — perfect for fragile nails!',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver maintenant', value: '__booking__' }
          : { label: '📅 Book now', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Manicure ── */
  {
    id: 'manicure',
    keywords: {
      fr: ['manucure', 'mani', 'mains', 'ongles mains', 'vernis mains', 'changer vernis', 'vernis semi', 'semi-permanent', 'shellac', 'polish', 'couleur mains'],
      en: ['manicure', 'mani', 'hand nails', 'nail polish', 'polish change', 'gel polish', 'semi permanent', 'shellac', 'color nails', 'colour nails'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '✨ Nos services manucure:\n\n• **Manucure Régulier** : $25\n• **Manucure Gel** : dès $40\n• **Changer vernis régulier** : $20\n• **Changer vernis gel** : $30\n\n💡 La manucure gel dure en moyenne 3 à 4 semaines!'
        : '✨ Our manicure services:\n\n• **Regular Manicure**: $25\n• **Gel Manicure**: from $40\n• **Change Regular Polish**: $20\n• **Change Gel Polish**: $30\n\n💡 Gel manicure lasts an average of 3 to 4 weeks!',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Pedicure ── */
  {
    id: 'pedicure',
    keywords: {
      fr: ['pédicure', 'pédi', 'pieds', 'ongles pieds', 'pied', 'vernis pieds', 'soins pieds', 'changer pédi', 'polish pieds'],
      en: ['pedicure', 'pedi', 'foot', 'feet', 'toe nails', 'toenails', 'foot care', 'foot nails', 'polish feet', 'change pedi'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💆 Nos services pédicure:\n\n• **Pédicure Régulier** : $45\n• **Pédicure Gel** : $55\n• **Changer vernis pédi régulier** : $25\n• **Changer vernis pédi gel** : $35\n\n💡 Comprend bain de pieds, soin des cuticules et massage!'
        : '💆 Our pedicure services:\n\n• **Regular Pedicure**: $45\n• **Gel Pedicure**: $55\n• **Change Regular Polish**: $25\n• **Change Gel Polish**: $35\n\n💡 Includes foot bath, cuticle care, and massage!',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Waxing ── */
  {
    id: 'waxing',
    keywords: {
      fr: ['épilation', 'épiler', 'cire', 'sourcils', 'lèvre', 'lèvres', 'moustache', 'aisselles', 'aisselle', 'jambes', 'jambe', 'bikini', 'brésilien', 'brésilienne', 'visage', 'dos', 'bras', 'menton', 'poils', 'dépilation'],
      en: ['waxing', 'wax', 'hair removal', 'eyebrows', 'lip', 'upper lip', 'mustache', 'underarm', 'underarms', 'armpits', 'legs', 'bikini', 'brazilian', 'face', 'back', 'arms', 'chin', 'body hair', 'depilation'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🌸 Épilation à la cire:\n\n• **Sourcils** : $15\n• **Lèvre / Menton** : $13\n• **Aisselles** : $15\n• **Visage complet** : dès $30\n• **Demi-bras** : dès $30\n• **Bras complets** : dès $40\n• **Demi-jambes** : dès $30\n• **Jambes complètes** : dès $45\n• **Bikini** : dès $35\n• **Brésilien** : dès $50'
        : '🌸 Waxing services:\n\n• **Eyebrows**: $15\n• **Lip / Chin**: $13\n• **Underarms**: $15\n• **Full face**: from $30\n• **Half arms**: from $30\n• **Full arms**: from $40\n• **Half legs**: from $30\n• **Full legs**: from $45\n• **Bikini**: from $35\n• **Brazilian**: from $50',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Location ── */
  {
    id: 'location',
    keywords: {
      fr: ['adresse', 'où', 'situé', 'situation', 'quartier', 'monkland', 'ndg', 'notre-dame-de-grâce', 'notre dame de grace', 'trouver', 'emplacement', 'localisation', 'comment venir', 'comment y aller', 'itinéraire', 'près de', 'proche', 'métro', 'bus', 'transport en commun'],
      en: ['address', 'where', 'location', 'located', 'neighborhood', 'monkland', 'ndg', 'notre dame de grace', 'find', 'directions', 'how to get', 'near', 'close to', 'subway', 'metro', 'bus', 'transit', 'get there'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '📍 Nous sommes situés au:\n\n**5999 Av de Monkland**\nMontréal, QC H4A 1H1\n\nQuartier NDG (Notre-Dame-de-Grâce)\n\n🚌 Accessible en transport en commun\n🚗 Stationnement de rue disponible sur l\'Avenue Monkland'
        : '📍 We are located at:\n\n**5999 Av de Monkland**\nMontréal, QC H4A 1H1\n\nNDG (Notre-Dame-de-Grâce) neighbourhood\n\n🚌 Accessible by public transit\n🚗 Street parking available on Monkland Ave',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Hours ── */
  {
    id: 'hours',
    keywords: {
      fr: ['horaire', 'horaires', 'heures', 'heure', 'ouvert', 'ouverte', 'ouverture', 'fermé', 'fermeture', 'quand', 'ouvre', 'ferme', 'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'week-end', 'weekend', 'aujourd\'hui', 'ce soir', 'maintenant', 'encore ouvert'],
      en: ['hours', 'hour', 'open', 'opening', 'closed', 'close', 'closing', 'when', 'schedule', 'time', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'weekend', 'today', 'tonight', 'still open', 'what time'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🕐 Nos horaires d\'ouverture:\n\n• **Lundi – Samedi** : 9h00 – 19h00\n• **Dimanche** : 10h00 – 17h00\n\nNous sommes ouverts 7 jours sur 7! 🎉\nNous vous recommandons de réserver à l\'avance pour garantir votre créneau.'
        : '🕐 Our opening hours:\n\n• **Monday – Saturday**: 9:00 AM – 7:00 PM\n• **Sunday**: 10:00 AM – 5:00 PM\n\nWe\'re open 7 days a week! 🎉\nWe recommend booking in advance to secure your spot.',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book Now', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Contact ── */
  {
    id: 'contact',
    keywords: {
      fr: ['contact', 'téléphone', 'appeler', 'appel', 'email', 'courriel', 'joindre', 'numéro', 'message', 'écrire', 'envoyer un message', 'whatsapp', 'texto', 'sms'],
      en: ['contact', 'phone', 'call', 'email', 'message', 'number', 'reach', 'telephone', 'text', 'sms', 'whatsapp', 'write to', 'get in touch'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '📞 Nos coordonnées:\n\n• **Téléphone** : (514) 000-0000\n• **Email** : hadilnails@gmail.com\n\nOu réservez directement en ligne — c\'est plus rapide! 👇'
        : '📞 Get in touch:\n\n• **Phone**: (514) 000-0000\n• **Email**: hadilnails@gmail.com\n\nOr book directly online — it\'s faster! 👇',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver en ligne', value: '__booking__' }
          : { label: '📅 Book Online', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Payment ── */
  {
    id: 'payment',
    keywords: {
      fr: ['paiement', 'payer', 'carte', 'cash', 'espèces', 'liquide', 'visa', 'mastercard', 'interac', 'virement', 'débit', 'crédit', 'tap', 'paypass', 'apple pay', 'google pay', 'moyen de paiement', 'acceptez-vous'],
      en: ['payment', 'pay', 'card', 'cash', 'visa', 'mastercard', 'interac', 'credit', 'debit', 'tap', 'contactless', 'apple pay', 'google pay', 'do you accept', 'payment method', 'how to pay'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💳 Modes de paiement acceptés:\n\n• Carte de crédit (Visa, Mastercard)\n• Carte de débit / Interac\n• Paiement sans contact (tap)\n• Espèces\n\nToutes les transactions sont sécurisées. ✅'
        : '💳 Accepted payment methods:\n\n• Credit card (Visa, Mastercard)\n• Debit card / Interac\n• Contactless payment (tap)\n• Cash\n\nAll transactions are secure. ✅',
      quickReplies: QR_BACK[lang],
    }),
  },

  /* ── Cancellation / Modification ── */
  {
    id: 'cancellation',
    keywords: {
      fr: ['annulation', 'annuler', 'annulé', 'modifier', 'changer', 'reporter', 'déplacer', 'politique', 'remboursement', 'rembourser', 'no show', 'ne pas venir', 'empêché', 'absent'],
      en: ['cancel', 'cancellation', 'cancelled', 'change', 'reschedule', 'move appointment', 'refund', 'policy', 'no show', 'can\'t make it', 'miss appointment', 'late cancellation'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '❌ Politique d\'annulation:\n\n• Annulation **gratuite** jusqu\'à **24h avant** le rendez-vous\n• En dessous de 24h : des frais peuvent s\'appliquer\n• No-show : le rendez-vous peut être facturé\n\nPour modifier ou annuler, contactez-nous par téléphone ou email dès que possible.'
        : '❌ Cancellation policy:\n\n• **Free** cancellation up to **24 hours before** your appointment\n• Under 24h: fees may apply\n• No-show: appointment may be charged\n\nTo change or cancel, contact us by phone or email as soon as possible.',
      quickReplies: [
        lang === 'fr'
          ? { label: '📞 Nous contacter', value: 'contact' }
          : { label: '📞 Contact us', value: 'contact' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Parking ── */
  {
    id: 'parking',
    keywords: {
      fr: ['stationnement', 'stationner', 'parking', 'voiture', 'auto', 'garer', 'se garer', 'place de parking', 'payant', 'gratuit stationnement'],
      en: ['parking', 'park', 'car', 'drive', 'park my car', 'parking lot', 'street parking', 'free parking', 'paid parking'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🚗 Stationnement:\n\nDu stationnement de rue est disponible sur l\'**Avenue Monkland** et les rues adjacentes. Il est généralement facile de trouver une place à proximité du salon.\n\nConsultez les panneaux locaux pour les restrictions horaires.'
        : '🚗 Parking:\n\nStreet parking is available on **Monkland Avenue** and surrounding streets. It\'s generally easy to find a spot close to the salon.\n\nCheck local signs for time restrictions.',
      quickReplies: [
        lang === 'fr'
          ? { label: '📍 Voir l\'adresse', value: 'location' }
          : { label: '📍 See address', value: 'location' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Products & Hygiene ── */
  {
    id: 'products',
    keywords: {
      fr: ['produits', 'marque', 'qualité', 'hygiène', 'hygiénique', 'matériel', 'outils', 'stérilisé', 'stérilisation', 'désinfection', 'propre', 'sécurité', 'allergie', 'allergique', 'réaction', 'sensitif', 'sensible'],
      en: ['products', 'brand', 'quality', 'hygiene', 'hygienic', 'tools', 'sterilized', 'sterilization', 'disinfection', 'clean', 'safety', 'allergy', 'allergic', 'reaction', 'sensitive', 'sensitivity'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '✅ Qualité & Hygiène:\n\nNous utilisons uniquement des **produits professionnels de qualité supérieure**.\n\n• Tous les outils sont stérilisés entre chaque cliente\n• Matériel à usage unique lorsque nécessaire\n• Produits sans substances nocives\n\nSi vous avez des allergies connues, merci de nous en informer lors de la prise de rendez-vous.'
        : '✅ Quality & Hygiene:\n\nWe use only **high-quality professional products**.\n\n• All tools are sterilized between each client\n• Single-use materials when needed\n• Products free of harmful substances\n\nIf you have known allergies, please let us know when booking.',
      quickReplies: QR_BACK[lang],
    }),
  },

  /* ── Team / Staff ── */
  {
    id: 'team',
    keywords: {
      fr: ['équipe', 'equipe', 'staff', 'technicienne', 'techniciennes', 'technicien', 'esthéticienne', 'estheticienne', 'personnel', 'qui', 'hadil', 'employé', 'employées', 'spécialiste', 'spécialistes', 'expérience', 'formation', 'professionnelle'],
      en: ['team', 'staff', 'technician', 'technicians', 'esthetician', 'nail artist', 'nail tech', 'who', 'hadil', 'employee', 'employees', 'specialist', 'experience', 'training', 'professional', 'certified'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '👩‍🎨 Notre équipe:\n\n💅 **Hadil** — Fondatrice & Head Artist\n8 ans d\'expérience, passionnée de précision et de créativité.\n\n✨ **Sofia Benali** — Technicienne Senior\nSpécialiste gel & bio gel, technique impeccable.\n\n🎨 **Lina Tremblay** — Nail Artist & Designer\nExperte en nail art, motifs floraux et designs sur mesure.\n\n🌸 **Camille Ouellet** — Coordinatrice Clientèle\nElle veille à ce que chaque visite soit parfaite, du rdv à la sortie.\n\nToute l\'équipe vous attend avec le sourire! 💕'
        : '👩‍🎨 Our team:\n\n💅 **Hadil** — Founder & Head Artist\n8 years of experience, passionate about precision and creativity.\n\n✨ **Sofia Benali** — Senior Nail Technician\nGel & bio gel specialist, flawless technique.\n\n🎨 **Lina Tremblay** — Nail Artist & Designer\nExpert in nail art, floral patterns, and custom designs.\n\n🌸 **Camille Ouellet** — Client Coordinator\nShe makes sure every visit runs perfectly, from booking to goodbye.\n\nThe whole team can\'t wait to welcome you! 💕',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Prendre rendez-vous', value: '__booking__' }
          : { label: '📅 Book an appointment', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Nail Art & Designs ── */
  {
    id: 'nail_art',
    keywords: {
      fr: ['nail art', 'design', 'dessin', 'motif', 'déco', 'décoration', 'french', 'french manucure', 'ombre', 'dégradé', 'paillettes', 'glitter', 'strass', 'cristaux', 'baby boomer', 'nude', 'couleur', 'couleurs', 'quelle couleur', 'catalogue', 'inspiration', 'tendance'],
      en: ['nail art', 'design', 'designs', 'pattern', 'decal', 'decoration', 'french manicure', 'french tips', 'ombre', 'gradient', 'glitter', 'rhinestones', 'crystals', 'baby boomer', 'nude', 'color', 'colours', 'what color', 'inspiration', 'trending', 'styles'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🎨 Nail Art & Designs:\n\nNous proposons une large gamme de designs:\n\n• **French manucure** classique ou moderne\n• **Ombre / Dégradé** — effet fondu naturel\n• **Baby Boomer** — tendance et élégant\n• **Nail Art** — motifs, fleurs, géométrique\n• **Paillettes & Strass** — pour plus de glamour\n• **Nude & Minimaliste** — discret et chic\n\nApportez vos inspirations (photos, Pinterest) et nos techniciennes feront leur magie! ✨'
        : '🎨 Nail Art & Designs:\n\nWe offer a wide range of designs:\n\n• **French manicure** — classic or modern\n• **Ombre / Gradient** — natural blended effect\n• **Baby Boomer** — trendy and elegant\n• **Nail Art** — patterns, flowers, geometric\n• **Glitter & Rhinestones** — for extra glamour\n• **Nude & Minimalist** — subtle and chic\n\nBring your inspiration (photos, Pinterest) and our technicians will work their magic! ✨',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        { label: '💰 Prix designs', value: 'pose' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Duration / How long ── */
  {
    id: 'duration',
    keywords: {
      fr: ['combien de temps', 'durée', 'temps', 'long', 'longtemps', 'minutes', 'heures', 'ça prend', 'combien ça prend', 'rapide', 'vite', 'dure combien', 'séance'],
      en: ['how long', 'duration', 'time', 'minutes', 'hours', 'how much time', 'takes long', 'quick', 'fast', 'length of appointment', 'session', 'how long does it take'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '⏱️ Durée approximative des services:\n\n• **Pose gel** : 1h30 – 2h\n• **Remplissage** : 1h – 1h30\n• **Manucure régulier** : 30 – 45 min\n• **Manucure gel** : 45 min – 1h\n• **Pédicure** : 45 min – 1h15\n• **Épilation sourcils** : 10 – 15 min\n\nLes durées peuvent varier selon le design choisi. Prévoyez un peu de marge! 😊'
        : '⏱️ Approximate service durations:\n\n• **Gel extensions**: 1h30 – 2h\n• **Refill**: 1h – 1h30\n• **Regular manicure**: 30 – 45 min\n• **Gel manicure**: 45 min – 1h\n• **Pedicure**: 45 min – 1h15\n• **Eyebrow wax**: 10 – 15 min\n\nDurations may vary depending on the design chosen. Allow a little extra time! 😊',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Walk-ins / Sans rendez-vous ── */
  {
    id: 'walkin',
    keywords: {
      fr: ['sans rendez-vous', 'sans rdv', 'walk-in', 'walk in', 'directement', 'se présenter', 'venir directement', 'est-ce que je peux venir', 'place disponible', 'disponible maintenant', 'aujourd\'hui même', 'last minute', 'urgent'],
      en: ['walk in', 'walk-in', 'without appointment', 'no appointment', 'drop in', 'come directly', 'can i just come', 'available now', 'same day', 'last minute', 'urgent', 'right now'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🚶‍♀️ Walk-in / Sans rendez-vous:\n\nNous acceptons les clientes sans rendez-vous **selon disponibilité**.\n\nCependant, pour garantir votre place et éviter l\'attente, nous vous recommandons fortement de **réserver à l\'avance** — surtout le week-end!\n\nVous pouvez aussi nous appeler pour vérifier la disponibilité du moment. 📞'
        : '🚶‍♀️ Walk-ins:\n\nWe do accept walk-in clients **based on availability**.\n\nHowever, to guarantee your spot and avoid waiting, we strongly recommend **booking in advance** — especially on weekends!\n\nYou can also call us to check current availability. 📞',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver en ligne', value: '__booking__' }
          : { label: '📅 Book Online', value: '__booking__' },
        lang === 'fr'
          ? { label: '📞 Nous appeler', value: 'contact' }
          : { label: '📞 Call us', value: 'contact' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── First visit / New client ── */
  {
    id: 'first_visit',
    keywords: {
      fr: ['première fois', 'première visite', 'nouveau client', 'nouvelle cliente', 'jamais venu', 'jamais venue', 'débutante', 'je ne sais pas quoi choisir', 'conseils', 'recommandation', 'que me conseillez', 'pour commencer', 'nouveau', 'nouvelle'],
      en: ['first time', 'first visit', 'new client', 'never been', 'beginner', 'don\'t know what to choose', 'advice', 'recommendation', 'what do you recommend', 'to start', 'new here', 'first appointment'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🌸 Bienvenue pour votre première visite!\n\nVoici ce que nous recommandons pour commencer:\n\n1. **Manucure gel** — durable, brillant, longue tenue (3-4 semaines)\n2. **Pose bio gel** — ongles rallongés, aspect naturel et souple\n3. **Pédicure régulier** — parfait pour découvrir le salon!\n\nN\'hésitez pas à nous dire vos envies et nous vous guiderons avec plaisir. Chaque nouvelle cliente reçoit toute notre attention 💕'
        : '🌸 Welcome for your first visit!\n\nHere\'s what we recommend to start:\n\n1. **Gel manicure** — durable, shiny, long-lasting (3-4 weeks)\n2. **Bio gel extensions** — lengthened nails, natural and flexible look\n3. **Regular pedicure** — perfect to discover the salon!\n\nFeel free to tell us what you\'re looking for and we\'ll guide you with pleasure. Every new client gets our full attention 💕',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver ma 1ère visite', value: '__booking__' }
          : { label: '📅 Book my first visit', value: '__booking__' },
        lang === 'fr'
          ? { label: '💰 Voir les prix', value: 'prices' }
          : { label: '💰 See prices', value: 'prices' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Aftercare / Longevity tips ── */
  {
    id: 'aftercare',
    keywords: {
      fr: ['entretien', 'après', 'dure combien de temps', 'tient combien', 'longévité', 'longévité des ongles', 'conseils entretien', 'soins après', 'comment faire durer', 'tenir', 'casse', 'cassé', 'abîmé', 'protéger', 'huile cuticules', 'cuticules', 'semaines'],
      en: ['aftercare', 'how long does it last', 'how long will it last', 'longevity', 'tips', 'maintenance', 'after care', 'how to make last', 'chipping', 'lifting', 'broken', 'protect nails', 'cuticle oil', 'cuticles', 'weeks', 'care tips'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '💡 Conseils entretien de vos ongles:\n\n• Évitez l\'eau chaude les **24h** suivant la pose\n• Utilisez de l\'**huile à cuticules** quotidiennement\n• Portez des **gants** pour la vaisselle et le ménage\n• Évitez d\'utiliser vos ongles comme outils!\n• En cas de casse, contactez-nous — on répare à $5/ongle 😊\n\n⏱️ Durée moyenne:\n• Gel / Bio gel : **3 à 4 semaines**\n• Manucure gel : **2 à 3 semaines**'
        : '💡 Nail care tips:\n\n• Avoid hot water for **24h** after your appointment\n• Use **cuticle oil** daily\n• Wear **gloves** for dishes and cleaning\n• Avoid using your nails as tools!\n• If a nail breaks, contact us — we repair for $5/nail 😊\n\n⏱️ Average longevity:\n• Gel / Bio gel: **3 to 4 weeks**\n• Gel manicure: **2 to 3 weeks**',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Prendre rendez-vous', value: '__booking__' }
          : { label: '📅 Book appointment', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Gift cards ── */
  {
    id: 'gift',
    keywords: {
      fr: ['carte cadeau', 'cadeau', 'offrir', 'bon cadeau', 'gift card', 'gift', 'chèque cadeau', 'coffret', 'offrir un soin', 'anniversaire', 'fête', 'surprise', 'pour quelqu\'un', 'pour ma amie', 'pour ma mère', 'pour ma sœur'],
      en: ['gift card', 'gift', 'gift certificate', 'voucher', 'present', 'treat someone', 'birthday', 'surprise', 'for a friend', 'for my mom', 'for my sister', 'buy as gift', 'offer a treatment'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '🎁 Cartes cadeaux:\n\nOffrez à vos proches une expérience beauté chez **HadilNails**!\n\nNos cartes cadeaux sont disponibles pour tous les montants et tous les services.\n\nContactez-nous directement pour en obtenir une — c\'est le cadeau idéal pour un anniversaire, une fête ou juste pour faire plaisir! 💕'
        : '🎁 Gift cards:\n\nGive your loved ones a beauty experience at **HadilNails**!\n\nOur gift cards are available for any amount and any service.\n\nContact us directly to get one — it\'s the perfect gift for a birthday, celebration, or just to treat someone special! 💕',
      quickReplies: [
        lang === 'fr'
          ? { label: '📞 Nous contacter', value: 'contact' }
          : { label: '📞 Contact us', value: 'contact' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Social media ── */
  {
    id: 'social',
    keywords: {
      fr: ['instagram', 'facebook', 'réseaux sociaux', 'réseau social', 'tiktok', 'photos', 'galerie', 'portfolio', 'voir vos réalisations', 'voir vos travaux', 'exemples', 'avant après', 'feed', 'compte', 'suivre', 'abonner'],
      en: ['instagram', 'facebook', 'social media', 'tiktok', 'photos', 'gallery', 'portfolio', 'see your work', 'examples', 'before after', 'feed', 'account', 'follow', 'social'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? '📸 Retrouvez-nous sur les réseaux sociaux!\n\nConsultez notre **galerie** sur le site pour voir nos réalisations, ou suivez-nous sur Instagram pour les dernières tendances et inspirations nail art.\n\nVous pouvez aussi apporter vos photos préférées lors de votre rendez-vous — nos techniciennes s\'en inspireront avec plaisir! 💅'
        : '📸 Find us on social media!\n\nCheck out our **gallery** on the website to see our work, or follow us on Instagram for the latest nail art trends and inspiration.\n\nYou can also bring your favourite photos to your appointment — our technicians will love using them as reference! 💅',
      quickReplies: [
        lang === 'fr'
          ? { label: '📅 Réserver', value: '__booking__' }
          : { label: '📅 Book', value: '__booking__' },
        ...QR_BACK[lang],
      ],
    }),
  },

  /* ── Thanks ── */
  {
    id: 'thanks',
    keywords: {
      fr: ['merci', 'merci beaucoup', 'parfait', 'super', 'excellent', 'génial', 'top', 'nickel', 'cool', 'ok merci', 'c\'est bon', 'impeccable', 'formidable', 'magnifique', 'bravo', 'très bien'],
      en: ['thanks', 'thank you', 'thank you so much', 'great', 'perfect', 'awesome', 'cool', 'nice', 'ok thanks', 'that\'s great', 'wonderful', 'excellent', 'brilliant', 'well done'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Avec plaisir! 😊 N\'hésitez pas si vous avez d\'autres questions. Au plaisir de vous accueillir chez **HadilNails**! 💅'
        : 'You\'re welcome! 😊 Don\'t hesitate if you have any other questions. We look forward to welcoming you at **HadilNails**! 💅',
      quickReplies: QR_MAIN[lang],
    }),
  },

  /* ── Goodbye ── */
  {
    id: 'goodbye',
    keywords: {
      fr: ['au revoir', 'bye', 'à bientôt', 'bonne journée', 'bonne soirée', 'bonne nuit', 'ciao', 'tchao', 'à plus', 'à plus tard', 'à tout à l\'heure', 'on se revoit', 'à la prochaine'],
      en: ['goodbye', 'bye', 'see you', 'good bye', 'ciao', 'take care', 'later', 'bye bye', 'see you soon', 'have a good day', 'have a nice day', 'ttyl', 'talk later'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Au revoir et à bientôt! 👋 Toute l\'équipe de **HadilNails** sera ravie de vous accueillir. Prenez soin de vous! 💅'
        : 'Goodbye and see you soon! 👋 The whole **HadilNails** team will be happy to welcome you. Take care! 💅',
    }),
  },

  /* ── Menu / back ── */
  {
    id: 'menu',
    keywords: {
      fr: ['menu', 'retour', 'aide', 'help', 'autres questions', 'quoi d\'autre', 'autre chose'],
      en: ['menu', 'back', 'help', 'start', 'other questions', 'what else', 'something else'],
    },
    response: (lang) => ({
      text: lang === 'fr'
        ? 'Comment puis-je vous aider? 😊'
        : 'How can I help you? 😊',
      quickReplies: QR_MAIN[lang],
    }),
  },
];

/* ── Fallback ── */
export const FALLBACK = (lang: Lang): BotResponse => ({
  text: lang === 'fr'
    ? 'Hmm, je ne suis pas certaine de comprendre 😊 Voici ce sur quoi je peux vous renseigner :'
    : 'Hmm, I\'m not quite sure I follow 😊 Here\'s what I can help you with:',
  quickReplies: QR_MAIN[lang],
});

/* ── Welcome (first open) ── */
export const WELCOME = (lang: Lang): BotResponse => ({
  text: lang === 'fr'
    ? 'Bonjour et bienvenue chez **HadilNails**! 💅\nJe suis votre réceptionniste virtuelle — je peux vous aider à prendre rendez-vous, vous informer sur nos services et nos tarifs, ou répondre à toutes vos questions.\n\nComment puis-je vous aider aujourd\'hui?'
    : 'Hello and welcome to **HadilNails**! 💅\nI\'m your virtual receptionist — I can help you book an appointment, share information about our services and pricing, or answer any questions you may have.\n\nHow can I help you today?',
  quickReplies: QR_MAIN[lang],
});

/* ── Peek teaser ── */
export const PEEK_MSG: Record<Lang, string> = {
  fr: '💅 Bonjour! Je peux vous aider?',
  en: '💅 Hello! How can I help you?',
};
