import { LuxeHero }           from '../components/sections/luxe/LuxeHero';
import { LuxeAbout }          from '../components/sections/luxe/LuxeAbout';
import { LuxeServicesTeaser } from '../components/sections/luxe/LuxeServicesTeaser';
import { LuxeTeam }           from '../components/sections/luxe/LuxeTeam';
import { LuxeGallery }        from '../components/sections/luxe/LuxeGallery';
import { LuxeBooking }        from '../components/sections/luxe/LuxeBooking';
import { LuxeContact }        from '../components/sections/luxe/LuxeContact';
import { Footer }             from '../components/layout/Footer';

export const LuxeHomePage = () => (
  <>
    <LuxeHero />
    <LuxeAbout />
    <LuxeServicesTeaser />
    <LuxeTeam />
    <LuxeGallery />
    <LuxeBooking />
    <LuxeContact />
    <Footer />
  </>
);
