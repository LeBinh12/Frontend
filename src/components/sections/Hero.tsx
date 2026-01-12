'use client';

import React from 'react';
import { Button, Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import HeroScene from '../canvas/HeroScene';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <HeroScene />
      
      <div className="container mx-auto px-6 relative z-10">
        <Grid fluid className="p-0!">
          <Row>
            <Col xs={24} lg={16}>
              <div className="max-w-3xl">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm tracking-wide animate-fade-in">
                  NEXT GENERATION TECHNOLOGY
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight text-white">
                  {mockData.company.tagline.split('.')[0]}.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {mockData.company.tagline.split('.')[1]}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-text-muted mb-10 leading-relaxed max-w-2xl">
                  {mockData.company.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button appearance="primary" size="lg" className="px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25!">
                    Get Started
                  </Button>
                  <Button appearance="subtle" size="lg" className="px-8 py-3 rounded-full font-bold text-lg border border-white/10! hover:bg-white/5! transition-all">
                    View Portfolio
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
