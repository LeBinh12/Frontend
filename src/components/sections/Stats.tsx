'use client';

import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';

const Stats = () => {
  // Enhanced stats for dedicated section
  const bigStats = [
    { label: "Total Assets Managed", value: "$4.2B+", detail: "Growing 15% MoM" },
    { label: "Active Network Nodes", value: "25k+", detail: "Globally Distributed" },
    { label: "Transaction Speed", value: "< 2.5s", detail: "Industry Leading" },
    { label: "Uptime SLA", value: "99.99%", detail: "Enterprise Grade" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-bg-dark to-bg-card/20 relative overflow-hidden" id="stats">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Grid fluid className="p-0!">
          <Row gutter={40}>
            {bigStats.map((stat, i) => (
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
                    {stat.value}
                  </h3>
                  <p className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-sm text-text-muted uppercase tracking-[0.2em]">
                    {stat.detail}
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
