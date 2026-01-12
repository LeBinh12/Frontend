'use client';

import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section className="py-24 bg-bg-dark" id="about">
      <div className="container mx-auto px-6">
        <Grid fluid className="p-0!">
          <Row gutter={60} className="items-center">
            <Col xs={24} lg={12} className="mb-12 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 overflow-hidden flex items-center justify-center">
                  {/* Decorative Abstract Shape */}
                  <div className="w-2/3 h-2/3 bg-primary/30 rounded-full blur-[60px] animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-8xl font-display font-bold text-white/10">AETHER</span>
                  </div>
                </div>
                {/* Floating Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 md:right-0 bg-bg-card border border-white/10 p-6 rounded-xl shadow-2xl backdrop-blur-md max-w-[240px] animate-bounce-slow"
                >
                  <p className="text-primary font-bold text-2xl mb-1">120+</p>
                  <p className="text-text-muted text-sm uppercase tracking-wider">Successful Projects Delivered Globally</p>
                </motion.div>
              </motion.div>
            </Col>
            
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                  Pioneering the <span className="text-primary">Digital Frontier</span>
                </h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  At {mockData.company.name}, we don't just follow trends—we set them. Our team of expert engineers and designers collaborate to build solutions that are as robust as they are beautiful.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  {mockData.company.stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.3 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="border-l-2 border-primary/30 pl-6"
                    >
                      <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-sm text-text-muted uppercase tracking-widest">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
};

export default Overview;
