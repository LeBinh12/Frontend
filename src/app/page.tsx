'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/sections/Hero';
import Overview from '@/components/sections/Overview';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import Stats from '@/components/sections/Stats';
import { motion } from 'framer-motion';
import GlobalScene from '@/components/canvas/GlobalScene';

import SmoothScroll from '@/components/common/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen w-full"
      >
        <GlobalScene />
        <Header />
        <main className="flex-grow w-full overflow-x-hidden">
          <Hero />
          <Overview />
          <Services />
          <Stats />
          <Portfolio />
          <Technologies />
          <Team />
        </main>
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
}
