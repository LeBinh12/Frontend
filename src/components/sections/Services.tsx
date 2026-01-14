'use client';

import React from 'react';
import { Grid, Row, Col, Panel } from 'rsuite';
import { mockData } from '@/data/mockData';
import { Code, Cpu, Cloud, Palette } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, any> = {
  Code: <Code className="w-10 h-10 text-primary" />,
  Mind: <Cpu className="w-10 h-10 text-primary" />,
  Cloud: <Cloud className="w-10 h-10 text-primary" />,
  Design: <Palette className="w-10 h-10 text-primary" />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services = () => {
  const { t } = useTranslation();
  const serviceKeys = ['blockchain', 'ai', 'cloud', 'design'];

  return (
    <section className="py-24 bg-bg-card/30" id="services">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl mb-6">{t('services.title')} <span className="text-primary">{t('services.highlight')}</span></h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          {t('services.description')}
        </p>
      </motion.div>

      <div className="container mx-auto px-6">
        <Grid fluid className="p-0!">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
          >
            <Row gutter={30}>
              {mockData.services.map((service, i) => (
                <Col key={service.id} xs={24} md={12} lg={6} className="mb-8">
                  <motion.div variants={itemVariants}>
                    <Panel 
                      shaded 
                      className="h-full bg-bg-card border border-white/5! transition-all duration-300 hover:-translate-y-2 hover:border-primary/50! group cursor-default"
                    >
                      <div className="mb-6 p-4 inline-block bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                        {iconMap[service.icon] || <Code className="w-10 h-10 text-primary" />}
                      </div>
                      <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{t(`services.${serviceKeys[i]}.title`)}</h3>
                      <p className="text-text-muted leading-relaxed">
                        {t(`services.${serviceKeys[i]}.description`)}
                      </p>
                    </Panel>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Grid>
      </div>
    </section>
  );
};

export default Services;
