'use client';

import React from 'react';
import { Grid, Row, Col, Tag, TagGroup } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';

const Technologies = () => {
  const categories = Array.from(new Set(mockData.technologies.map(t => t.category)));

  return (
    <section className="py-24 bg-bg-dark" id="technologies">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Built with the <span className="text-primary">Best-in-Class</span> Stack</h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Our technology choices are driven by performance, scalability, and developer experience. We stay ahead of the curve so you don't have to.
          </p>
        </motion.div>

        <Grid fluid className="p-0!">
          <Row gutter={40}>
            {categories.map((category, i) => (
              <Col key={category} xs={24} md={12} lg={8} className="mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-bg-card/50 border border-white/5 rounded-2xl p-8 h-full transition-colors hover:border-primary/20"
                >
                  <h3 className="text-xl font-display font-bold text-primary mb-6 uppercase tracking-widest text-sm">{category}</h3>
                  <TagGroup className="flex flex-wrap gap-3">
                    {mockData.technologies
                      .filter(t => t.category === category)
                      .map((tech, i) => (
                        <Tag 
                          key={i} 
                          size="lg" 
                          className="bg-white/5! text-white! border border-white/10! px-4 py-2 rounded-lg font-medium"
                        >
                          {tech.name}
                        </Tag>
                      ))}
                  </TagGroup>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Grid>

        {/* Marquee-like tech logos placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 py-10 border-t border-white/5 flex flex-wrap justify-between items-center opacity-30 grayscale gap-8"
        >
           {['REACT', 'NODE.JS', 'TYPESCRIPT', 'AWS', 'DOCKER', 'KUBERNETES'].map(logo => (
             <span key={logo} className="text-2xl font-black font-display tracking-tighter">{logo}</span>
           ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
