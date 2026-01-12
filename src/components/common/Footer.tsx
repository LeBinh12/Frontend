'use client';

import React from 'react';
import { Grid, Row, Col, Divider, Button } from 'rsuite';
import Link from 'next/link';
import { mockData } from '@/data/mockData';

const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <Grid fluid className="p-0!">
          <Row gutter={30}>
            <Col xs={24} md={8} className="mb-10 md:mb-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center font-bold text-lg text-white">
                  A
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  {mockData.company.name}
                </span>
              </div>
              <p className="text-text-muted max-w-xs leading-relaxed">
                {mockData.company.description}
              </p>
            </Col>
            
            <Col xs={12} md={4} className="mb-8 md:mb-0">
              <h4 className="text-sm uppercase tracking-widest text-text-muted mb-6">Explore</h4>
              <ul className="space-y-4 text-text-muted">
                <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="#portfolio" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#team" className="hover:text-primary transition-colors">Team</Link></li>
              </ul>
            </Col>
            
            <Col xs={12} md={4} className="mb-8 md:mb-0">
              <h4 className="text-sm uppercase tracking-widest text-text-muted mb-6">Resources</h4>
              <ul className="space-y-4 text-text-muted">
                <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </Col>
            
            <Col xs={24} md={8}>
              <h4 className="text-sm uppercase tracking-widest text-text-muted mb-6">Stay Updated</h4>
              <p className="text-text-muted mb-4">Join our newsletter for the latest tech insights.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="bg-bg-card border border-white/10 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:border-primary transition-colors"
                />
                <Button appearance="primary" className="rounded-lg px-6 font-bold">Join</Button>
              </div>
            </Col>
          </Row>
        </Grid>
        
        <Divider className="my-10 bg-white/5!" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-sm">
          <p>© {new Date().getFullYear()} {mockData.company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
