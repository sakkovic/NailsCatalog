import { AuroraHero }           from '../components/sections/aurora/AuroraHero';
import { AuroraAbout }          from '../components/sections/aurora/AuroraAbout';
import { AuroraServicesTeaser } from '../components/sections/aurora/AuroraServicesTeaser';
import { AuroraTeam }           from '../components/sections/aurora/AuroraTeam';
import { AuroraGallery }        from '../components/sections/aurora/AuroraGallery';
import { AuroraBooking }        from '../components/sections/aurora/AuroraBooking';
import { AuroraContact }        from '../components/sections/aurora/AuroraContact';
import { Footer }               from '../components/layout/Footer';

export const AuroraHomePage = () => (
  <>
    <AuroraHero />
    <AuroraAbout />
    <AuroraServicesTeaser />
    <AuroraTeam />
    <AuroraGallery />
    <AuroraBooking />
    <AuroraContact />
    <Footer />
  </>
);
