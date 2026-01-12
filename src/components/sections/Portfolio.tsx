'use client';

import React from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';

const Portfolio = () => {
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
          <h2 className="text-4xl md:text-5xl mb-6">Our <span className="text-primary">Stellar Portfolio</span></h2>
          <p className="text-lg text-text-muted leading-relaxed">
            A selection of projects where technical excellence meets business impact. We take pride in every line of code.
          </p>
        </div>
        <Button appearance="ghost" size="lg" className="rounded-full border-primary! text-primary! font-bold hover:bg-primary! hover:text-white!">
          View All Work
        </Button>
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
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-bg-card border border-white/5 transition-all group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                       <Button appearance="primary" className="rounded-full font-bold">View Case Study</Button>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary text-xs uppercase font-bold tracking-[0.2em]">{project.category}</span>
                    </div>
                    <h3 className="text-2xl mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-text-muted leading-relaxed">
                      {project.description}
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
