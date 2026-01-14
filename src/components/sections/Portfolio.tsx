'use client';

import React from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const projectKeys = ['nebula', 'vortex', 'titan'];

  return (
    <section className="py-24 bg-bg-card/30" id="portfolio">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-6">{t('portfolio.title')} <span className="text-primary">{t('portfolio.highlight')}</span></h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>
        <Link href="/portfolio">
          <Button appearance="ghost" size="lg" className="rounded-full border-primary! text-primary! font-bold hover:bg-primary! hover:text-white!">
            {t('portfolio.viewAll')}
          </Button>
        </Link>
      </motion.div>

      <div className="container mx-auto px-6">
        <Grid fluid className="p-0!">
          <Row gutter={40}>
            {mockData.portfolio.map((project, i) => (
              <Col key={project.id} xs={24} md={12} lg={8} className="mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/portfolio/${project.id}`} className="block">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-bg-card border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/20">
                      <img 
                        src={project.image} 
                        alt={t(`portfolio.${projectKeys[i]}.title`)}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Modern Overlay */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }} // Only for initial render if needed, but for hover we rely on CSS/group
                          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                        >
                          <ArrowUpRight className="text-white w-8 h-8" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>

                  <div className="px-2">
                    <div className="flex items-center justify-between mb-3">
                       <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs uppercase font-bold tracking-wider">{project.category}</span>
                    </div>
                    <Link href={`/portfolio/${project.id}`}>
                      <h3 className="text-2xl font-display font-medium mb-3 text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        {t(`portfolio.${projectKeys[i]}.title`)}
                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                    </Link>
                    <p className="text-text-muted leading-relaxed line-clamp-2">
                      {t(`portfolio.${projectKeys[i]}.description`)}
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </section>
  );
};

export default Portfolio;
