import './index.css';
import { useEffect } from 'react';
import { useScroll, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCalApi } from '@calcom/embed-react';

import { Navbar }          from './components/layout/Navbar';
import { CatalogBar }      from './components/layout/CatalogBar';
import { ScrollToTop }     from './components/ui/ScrollToTop';
import { ThemeSwitcher }   from './components/ui/ThemeSwitcher';
import { Chatbot }         from './components/chat/Chatbot';
import { DesignProvider }  from './context/DesignContext';
import { HomePage }        from './pages/HomePage';
import { ServicesPage }    from './pages/ServicesPage';

function App() {
  const { scrollYProgress } = useScroll();

  /* Initialise Cal.com once globally so every Book Now button works */
  useEffect(() => {
    getCalApi({ namespace: 'hadil-nails' }).then((cal) => {
      cal('ui', {
        styles: { branding: { brandColor: '#e8a0ad' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    });
  }, []);

  return (
    <DesignProvider>
      <BrowserRouter>
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
        />
        <CatalogBar />
        <ScrollToTop />
        <Navbar />
        <ThemeSwitcher />
        <Chatbot />
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </DesignProvider>
  );
}

export default App;
