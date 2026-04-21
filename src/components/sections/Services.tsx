import { motion } from 'framer-motion';

const serviceCategories = [
  {
    title: "POSE D'ONGLES / FULL SET",
    emoji: '💅',
    image: '/images/nails4.jpg',
    items: [
      { name: 'Gel',     price: '$55 +' },
      { name: 'Bio Gel', price: '$65 +' },
    ],
  },
  {
    title: 'REMPLISSAGE',
    emoji: '✨',
    image: '/images/nails.jpg',
    items: [
      { name: 'Remplissage Gel',      price: '$45 +' },
      { name: 'Remplissage Bio Gel',  price: '$55 +' },
      { name: 'Enlever La Pose',      price: '$20'   },
      { name: 'Réparer 1 Ongle',      price: '$5'    },
      { name: 'Design / French',      price: '$10 +' },
    ],
  },
  {
    title: 'MANUCURE / PÉDICURE',
    emoji: '💆',
    image: '/images/nails1.jpg',
    items: [
      { name: 'Manicure Régulier',  price: '$25'   },
      { name: 'Manicure Gel',       price: '$40 +' },
      { name: 'Pédicure Régulier',  price: '$45'   },
      { name: 'Pédicure Gel',       price: '$55'   },
      { name: 'Changer Mani Rég',   price: '$20'   },
      { name: 'Changer Mani Gel',   price: '$30'   },
      { name: 'Changer Pédi Rég',   price: '$25'   },
      { name: 'Changer Pédi Gel',   price: '$35'   },
    ],
  },
  {
    title: 'ÉPILATION À LA CIRE',
    emoji: '🌸',
    image: '/images/nails6.jpg',
    items: [
      { name: 'Sourcils',      price: '$15'   },
      { name: 'Lèvre',         price: '$13'   },
      { name: 'Aisselles',     price: '$15'   },
      { name: 'Menton',        price: '$13'   },
      { name: 'Visage',        price: '$30 +' },
      { name: 'Dos Complet',   price: '$35 +' },
      { name: 'Demi-bras',     price: '$30 +' },
      { name: 'Bras Complets', price: '$40 +' },
      { name: 'Demi-jambes',   price: '$30 +' },
      { name: 'Jambes Comp.',  price: '$45 +' },
      { name: 'Bikini *',      price: '$35 +' },
      { name: 'Brésilien *',   price: '$50 +' },
    ],
  },
];

export const Services = ({ showHeader = true }: { showHeader?: boolean }) => {
  return (
    <section className="services" id="services">
      {showHeader && (
        <motion.div
          className="header-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Our Menu</span>
          <h2>Services &amp; Pricing</h2>
          <p className="services-subtitle">
            Discover our full range of nail care and beauty treatments
          </p>
        </motion.div>
      )}

      <div className="menu-container">
        {serviceCategories.map((category, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={category.title}
              className={`menu-category ${isEven ? 'menu-category-reverse' : ''}`}
              initial={{ opacity: 0, x: isEven ? 70 : -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Circular image with gradient ring */}
              <div className="menu-image-container">
                <div className="menu-image-ring">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="menu-image"
                  />
                </div>
              </div>

              {/* Price list */}
              <div className="menu-list">
                <h3 className="menu-category-title">
                  <span className="menu-emoji">{category.emoji}</span>
                  {category.title}
                </h3>

                <div className="menu-items">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="menu-item-row"
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + 0.15, duration: 0.35 }}
                    >
                      <span className="menu-item-name">{item.name}</span>
                      <div className="menu-item-dots" />
                      <span className="menu-item-price">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="services-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        * Prices may vary. Contact us for a personalized quote.
      </motion.p>
    </section>
  );
};
