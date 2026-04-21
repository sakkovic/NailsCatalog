import { motion } from 'framer-motion';

const team = [
  { name: 'Hadil',           role: 'Fondatrice & Nail Artist', img: '/images/nails5.webp', bio: '10+ ans d\'expérience.' },
  { name: 'Sofia Benali',    role: 'Nail Artist Senior',       img: '/images/nails1.jpg',  bio: 'Experte en nail art.' },
  { name: 'Lina Tremblay',   role: 'Spécialiste Pédicure',     img: '/images/nails2.jpg',  bio: 'Soins des pieds premium.' },
  { name: 'Camille Ouellet', role: 'Spécialiste Épilation',    img: '/images/nails9.jpg',  bio: 'Maîtrise toutes techniques.' },
];

export const AuroraTeam = () => (
  <section className="ar-team" id="team">
    <div className="ar-section-orb ar-section-orb-left" />

    <motion.div
      className="ar-team-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="ar-eyebrow">✦ Notre Équipe</span>
      <h2 className="ar-section-title">Les Expertes</h2>
    </motion.div>

    <div className="ar-team-grid">
      {team.map((m, i) => (
        <motion.div
          key={m.name}
          className="ar-team-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.65, delay: i * 0.1 }}
          whileHover={{ y: -6 }}
        >
          {/* Circular photo with glow ring */}
          <div className="ar-team-photo-wrap">
            <div className="ar-team-glow-ring" />
            <div className="ar-team-photo">
              <img src={m.img} alt={m.name} />
            </div>
          </div>
          <h3 className="ar-team-name">{m.name}</h3>
          <span className="ar-team-role">{m.role}</span>
          <p className="ar-team-bio">{m.bio}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
