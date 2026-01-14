'use client';

import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Stats = () => {  
  const { t } = useTranslation();

  const lStats = [
    { key: 'assets', val: mockData.bigStats[0].value },
    { key: 'nodes', val: mockData.bigStats[1].value },
    { key: 'speed', val: mockData.bigStats[2].value },
    { key: 'uptime', val: mockData.bigStats[3].value },
  ];

  const detailKeys = ['moM', 'distributed', 'industryLeading', 'enterpriseGrade'];

  return (
    <section className="py-24 bg-gradient-to-b from-bg-dark to-bg-card/20 relative overflow-hidden" id="stats">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Grid fluid className="p-0!">
          <Row gutter={40}>
            {lStats.map((stat, i) => (
              <Col key={i} xs={24} sm={12} lg={6} className="mb-12 lg:mb-0">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="text-center group"
                >
                  <div className="mb-4 inline-block w-12 h-[2px] bg-primary group-hover:w-20 transition-all duration-500" />
                  <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter">
                    {stat.val}
                  </h3>
                  <p className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">
                    {t(`stats.${stat.key}`)}
                  </p>
                  <p className="text-sm text-text-muted uppercase tracking-[0.2em]">
                    {t(`stats.${detailKeys[i]}`)}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </section>
  );
};

export default Stats;
