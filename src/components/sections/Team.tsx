'use client';

import React from 'react';
import { Grid, Row, Col, Panel } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section className="py-24 bg-bg-dark" id="team">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl mb-6">Meet the <span className="text-primary">Visionaries</span></h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Our diverse team combines decades of experience in software engineering, 3D design, and decentralized systems.
        </p>
      </motion.div>

      <div className="container mx-auto px-6">
        <Grid fluid className="p-0!">
          <Row gutter={40}>
            {mockData.team.map((member, i) => (
              <Col key={i} xs={24} sm={12} lg={8} className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Panel shaded className="bg-bg-card border border-white/5! p-0! overflow-hidden group">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-display font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-primary font-bold text-sm uppercase tracking-widest">{member.role}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-text-muted leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="mt-6 flex gap-4 text-text-muted">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                      </div>
                    </div>
                  </Panel>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </section>
  );
};

export default Team;
