'use client';

import React, { useState } from 'react';
import { Nav, Navbar, Drawer } from 'rsuite';
import Link from 'next/link';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !mobileOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'About Us', href: '#about' },
    { label: 'Impact', href: '#stats' },
  ];

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled || mobileOpen ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6 py-2">
          <Navbar appearance="subtle" className="bg-transparent! flex items-center">
            <div className="flex-1">
              <Navbar.Brand as={Link} href="/" className="p-0!">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-xl text-white">
                    A
                  </div>
                  <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                    {mockData.company.name}
                  </span>
                </div>
              </Navbar.Brand>
            </div>
            
            <div className="hidden md:flex justify-center flex-2">
              <Nav className="flex items-center">
                <Nav.Item as={Link} href="#services">Services</Nav.Item>
                <Nav.Item as={Link} href="#portfolio">Projects</Nav.Item>
                <Nav.Item as={Link} href="#team">Team</Nav.Item>
                <Nav.Menu title="Company">
                  <Nav.Item as={Link} href="#about">About Us</Nav.Item>
                  <Nav.Item as={Link} href="#stats">Impact</Nav.Item>
                </Nav.Menu>
              </Nav>
            </div>
            
            <div className="flex-1 flex justify-end items-center gap-4">
              <div className="hidden md:block">
                <Link href="#contact" className="rs-btn rs-btn-primary rs-btn-md font-bold px-6 rounded-full transition-transform active:scale-95">
                  Get Started
                </Link>
              </div>
              <button 
                className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </Navbar>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <Drawer 
        placement="right" 
        open={mobileOpen} 
        onClose={() => setMobileOpen(false)} 
        className="bg-bg-dark! text-white! md:hidden"
        size="full"
      >
        <Drawer.Header className="border-b border-white/5! p-6!">
          <Drawer.Title className="text-white! font-display font-bold">Menu</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="p-6! bg-bg-dark">
          <div className="flex flex-col gap-6 mt-8">
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-2xl font-display font-medium text-text-muted hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-white/5">
              <Link 
                href="#contact" 
                className="rs-btn rs-btn-primary rs-btn-lg w-full font-bold rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default Header;
