import { motion } from 'framer-motion';

const team = [
  { name: 'Hadil',          role: 'Fondatrice & Nail Artist', img: '/images/nails5.webp' },
  { name: 'Sofia Benali',   role: 'Nail Artist Senior',       img: '/images/nails1.jpg'  },
  { name: 'Lina Tremblay',  role: 'Spécialiste Pédicure',     img: '/images/nails2.jpg'  },
  { name: 'Camille Ouellet',role: 'Spécialiste Épilation',    img: '/images/nails9.jpg'  },
];

export const VogueTeam = () => (
  <section className="vg-team" id="team">
    <motion.div
      className="vg-team-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="vg-label">Équipe</span>
      <h2 className="vg-section-title">Les Expertes</h2>
    </motion.div>

    <div className="vg-team-grid">
      {team.map((m, i) => (
        <motion.div
          key={m.name}
          className="vg-team-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.65, delay: i * 0.1 }}
        >
          <div className="vg-team-photo">
            <img src={m.img} alt={m.name} />
            <div className="vg-team-photo-overlay" />
          </div>
          <div className="vg-team-info">
            <span className="vg-team-num">0{i + 1}</span>
            <h3 className="vg-team-name">{m.name}</h3>
            <span className="vg-team-role">{m.role}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
