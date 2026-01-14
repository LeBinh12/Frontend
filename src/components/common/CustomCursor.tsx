'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for the outer ring (trailing effect)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Small dot (follows mouse exactly) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing ring (smooth spring animation) */}
      <motion.div
        className="fixed top-0 left-0 border border-primary rounded-full bg-primary/5"
        animate={{
          width: isHovered ? 60 : 30,
          height: isHovered ? 60 : 30,
        }}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      />
    </div>
  );
};

export default CustomCursor;
