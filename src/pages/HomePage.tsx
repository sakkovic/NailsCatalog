import { motion, type TargetAndTransition } from 'framer-motion';
import type { ReactNode } from 'react';

import { useDesign }      from '../context/DesignContext';
import { LuxeHomePage }   from './LuxeHomePage';
import { VogueHomePage }  from './VogueHomePage';
import { AuroraHomePage } from './AuroraHomePage';

import { Hero }           from '../components/sections/Hero';
import { About }          from '../components/sections/About';
import { ServicesTeaser } from '../components/sections/ServicesTeaser';
import { Team }           from '../components/sections/Team';
import { Gallery }        from '../components/sections/Gallery';
import { Booking }        from '../components/sections/Booking';
import { Contact }        from '../components/sections/Contact';
import { Footer }         from '../components/layout/Footer';

type Dir = 'up' | 'left' | 'right' | 'zoom';

const hidden: Record<Dir, TargetAndTransition> = {
  up:    { opacity: 0, y: 70 },
  left:  { opacity: 0, x: -70 },
  right: { opacity: 0, x: 70 },
  zoom:  { opacity: 0, scale: 0.93 },
};

const visible: Record<Dir, TargetAndTransition> = {
  up:    { opacity: 1, y: 0 },
  left:  { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  zoom:  { opacity: 1, scale: 1 },
};

const Reveal = ({ children, dir = 'up' }: { children: ReactNode; dir?: Dir }) => (
  <motion.div
    initial={hidden[dir]}
    whileInView={visible[dir]}
    viewport={{ once: true, margin: '-60px 0px' }}
    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const RoseHomePage = () => (
  <>
    <Hero />
    <Reveal dir="up">    <About />          </Reveal>
    <Reveal dir="right"> <ServicesTeaser /> </Reveal>
    <Reveal dir="up">    <Team />           </Reveal>
    <Reveal dir="left">  <Gallery />        </Reveal>
    <Reveal dir="zoom">  <Booking />        </Reveal>
    <Reveal dir="right"> <Contact />        </Reveal>
    <Footer />
  </>
);

export const HomePage = () => {
  const { design } = useDesign();
  if (design === 'luxe')   return <LuxeHomePage />;
  if (design === 'vogue')  return <VogueHomePage />;
  if (design === 'aurora') return <AuroraHomePage />;
  return <RoseHomePage />;
};
