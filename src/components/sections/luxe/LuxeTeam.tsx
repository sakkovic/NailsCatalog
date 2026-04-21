import { motion } from 'framer-motion';

const team = [
  {
    name: 'Hadil',
    role: 'Fondatrice & Nail Artist',
    img: '/images/nails5.webp',
    bio: '10+ ans d\'expérience, spécialiste gel & bio gel.',
  },
  {
    name: 'Sofia Benali',
    role: 'Nail Artist Senior',
    img: '/images/nails1.jpg',
    bio: 'Experte en nail art et designs personnalisés.',
  },
  {
    name: 'Lina Tremblay',
    role: 'Spécialiste Pédicure',
    img: '/images/nails2.jpg',
    bio: 'Certifiée soins des pieds et manucure de luxe.',
  },
  {
    name: 'Camille Ouellet',
    role: 'Spécialiste Épilation',
    img: '/images/nails9.jpg',
    bio: 'Maîtrise complète de toutes les techniques cire.',
  },
];

export const LuxeTeam = () => (
  <section className="lx-team" id="team">
    <motion.div
      className="lx-team-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="lx-eyebrow">Notre Équipe</span>
      <h2 className="lx-section-title">Les Expertes</h2>
    </motion.div>

    <div className="lx-team-grid">
      {team.map((m, i) => (
        <motion.div
          key={m.name}
          className="lx-team-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="lx-team-photo">
            <img src={m.img} alt={m.name} />
          </div>
          <div className="lx-team-info">
            <h3 className="lx-team-name">{m.name}</h3>
            <span className="lx-team-role">{m.role}</span>
            <p className="lx-team-bio">{m.bio}</p>
          </div>
          <div className="lx-team-bar" />
        </motion.div>
      ))}
    </div>
  </section>
);
