'use client';

import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t } = useTranslation();
  
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 overflow-hidden group">
                  <img 
                    src={mockData.company.images.office} 
                    alt="Lucidtech Office" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                     <span className="text-2xl font-display font-bold text-white">{t('overview.innovationHub')}</span>
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
                  <p className="text-primary font-bold text-2xl mb-1">{mockData.company.stats[2].value}</p>
                  <p className="text-text-muted text-sm uppercase tracking-wider">{t('stats.delivered')}</p>
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
                  {t('overview.title')} <span className="text-primary">{t('overview.highlight')}</span>
                </h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  {t('overview.description')}
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
