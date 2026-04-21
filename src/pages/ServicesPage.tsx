import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Services } from '../components/sections/Services';
import { Footer }   from '../components/layout/Footer';
import { useDesign } from '../context/DesignContext';
import { LuxeServicesPage }   from './LuxeServicesPage';
import { VogueServicesPage }  from './VogueServicesPage';
import { AuroraServicesPage } from './AuroraServicesPage';

const RoseServicesPage = () => (
  <>
    <div className="sp-hero">
      <motion.div
        className="sp-hero-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="sp-back">← Back to Home</Link>
        <span className="section-label">Our Menu</span>
        <h1 className="sp-title">Services &amp; Pricing</h1>
        <p className="sp-subtitle">All our treatments, crafted with care.</p>
      </motion.div>
    </div>
    <Services showHeader={false} />
    <Footer />
  </>
);

export const ServicesPage = () => {
  const { design } = useDesign();
  if (design === 'luxe')   return <LuxeServicesPage />;
  if (design === 'vogue')  return <VogueServicesPage />;
  if (design === 'aurora') return <AuroraServicesPage />;
  return <RoseServicesPage />;
};
