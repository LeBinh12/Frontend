'use client';

import React from 'react';
import { Button, Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY, scrollYProgress } = useScroll(); // Added scrollYProgress
  
  // Parallax Transforms
  const yText = useTransform(scrollY, [0, 500], [0, 150]); // Text moves slower than scroll
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]); // Reduced from -200
  const yFloating1 = useTransform(scrollYProgress, [0, 1], [0, -60]); // Reduced from -120
  const yFloating2 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Reduced from -300
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      
      <div className="container mx-auto px-6 relative z-10">
        <Grid fluid className="p-0!">
          <Row>
            <Col xs={24} lg={12}>
              <motion.div 
                style={{ y: yText, opacity: opacityHero }}
                className="max-w-3xl relative z-10"
              >
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm tracking-wide">
                  {t('hero.badge')}
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight text-white">
                  {t('hero.title')}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {t('hero.highlight')}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-text-muted mb-10 leading-relaxed max-w-2xl">
                  {t('hero.description')}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rs-btn rs-btn-primary rs-btn-lg px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25!">
                    {t('nav.contact')}
                  </Link>
                  <Button as={Link} href="/portfolio" appearance="subtle" size="lg" className="px-8 py-3 rounded-full font-bold text-lg border border-white/10! hover:bg-white/5! transition-all">
                    {t('hero.viewWork')}
                  </Button>
                </div>
                
                <div className="mt-16 flex items-center gap-8 text-text-muted">
                  {mockData.company.stats.slice(0, 3).map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-3xl font-display font-bold text-white">{stat.value}</span>
                      <span className="text-sm uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Right Side Image Composition */}
            <Col xs={0} lg={12} className="relative !flex items-center justify-center">
              <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none select-none">
                
                {/* Main Large Image */}
                <motion.div
                  style={{ 
                    y: yImage, 
                    opacity: opacityHero, 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                  className="relative z-20 w-[400px] h-[500px] rounded-[32px] overflow-hidden border-8 border-white/5 shadow-2xl shadow-primary/20 rotate-[-3deg]"
                >
                  <img 
                    src={mockData.portfolio[0].image} 
                    alt="Main Feature" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                     <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">Featured</span>
                     <h3 className="text-white font-display font-bold text-2xl">{mockData.portfolio[0].title}</h3>
                  </div>
                </motion.div>

                {/* Floating Top Right */}
                <motion.div
                  style={{ 
                    y: yFloating1, 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                  className="absolute top-10 right-10 z-10 w-[220px] h-[160px] rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl rotate-[6deg]"
                >
                  <img 
                    src={mockData.portfolio[1].image} 
                    alt="Floating 1" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Floating Bottom Left */}
                <motion.div
                  style={{ 
                    y: yFloating2, 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                  className="absolute bottom-20 left-10 z-30 w-[180px] h-[180px] rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl rotate-[-6deg]"
                >
                   <img 
                    src={mockData.portfolio[2].image} 
                    alt="Floating 2" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                 {/* Decorative Circle Elements - Parallaxed slightly */}
                 <motion.div style={{ y: yFloating2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
                 <motion.div style={{ y: yFloating1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full -z-10 animate-[spin_40s_linear_infinite_reverse]" />

              </div>
            </Col>
          </Row>
        </Grid>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Hero;
