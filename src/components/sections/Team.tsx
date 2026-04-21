import { motion } from 'framer-motion';

const IgIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const team = [
  {
    img:  'https://placehold.co/240x240/fce8ec/c97283?text=Hadil',
    name: 'Hadil',
    role: 'Owner & Head Artist',
    bio:  'Founder of HadilNails with over 8 years of experience. Hadil is passionate about precision, creativity, and making every client feel their absolute best.',
    ig:   '#',
  },
  {
    img:  'https://placehold.co/240x240/f3e5f5/b07cba?text=Sofia',
    name: 'Sofia Benali',
    role: 'Senior Nail Technician',
    bio:  'Specialising in gel and bio gel extensions, Sofia brings artistry and flawless technique to every appointment — clients keep coming back for her.',
    ig:   '#',
  },
  {
    img:  'https://placehold.co/240x240/fff3e0/c9a96e?text=Lina',
    name: 'Lina Tremblay',
    role: 'Nail Artist & Designer',
    bio:  'Our nail art expert, known for intricate hand-painted designs, floral patterns, and a gentle touch that turns nails into true works of art.',
    ig:   '#',
  },
  {
    img:  'https://placehold.co/240x240/e8f5e9/7aab8a?text=Camille',
    name: 'Camille Ouellet',
    role: 'Client Coordinator',
    bio:  'Camille makes sure every visit runs seamlessly — from the moment you book to the moment you leave, she is here to make you feel right at home.',
    ig:   '#',
  },
];

export const Team = () => {
  return (
    <section className="team" id="team">
      <motion.div
        className="header-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">The People Behind Your Nails</span>
        <h2>Meet Our Team</h2>
        <p className="team-intro">
          Skilled, passionate professionals dedicated to making you look and feel amazing — every single visit.
        </p>
      </motion.div>

      <div className="team-grid">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, type: 'spring', stiffness: 80 }}
            whileHover={{ y: -8 }}
          >
            <div className="team-card-bar" />

            <div className="team-photo">
              <img src={member.img} alt={member.name} />
            </div>

            <h3 className="team-name">{member.name}</h3>
            <span className="team-role">{member.role}</span>
            <div className="team-divider" />
            <p className="team-bio">{member.bio}</p>

            <motion.a
              href={member.ig}
              className="team-ig-link"
              aria-label="Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <IgIcon />
              <span>Portfolio</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
