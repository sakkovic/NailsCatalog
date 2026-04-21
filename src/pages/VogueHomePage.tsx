import { VogueHero }           from '../components/sections/vogue/VogueHero';
import { VogueAbout }          from '../components/sections/vogue/VogueAbout';
import { VogueServicesTeaser } from '../components/sections/vogue/VogueServicesTeaser';
import { VogueTeam }           from '../components/sections/vogue/VogueTeam';
import { VogueGallery }        from '../components/sections/vogue/VogueGallery';
import { VogueBooking }        from '../components/sections/vogue/VogueBooking';
import { VogueContact }        from '../components/sections/vogue/VogueContact';
import { Footer }              from '../components/layout/Footer';

export const VogueHomePage = () => (
  <>
    <VogueHero />
    <VogueAbout />
    <VogueServicesTeaser />
    <VogueTeam />
    <VogueGallery />
    <VogueBooking />
    <VogueContact />
    <Footer />
  </>
);
