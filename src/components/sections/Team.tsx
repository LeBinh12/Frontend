'use client';

import React from 'react';
import { Grid, Row, Col, Panel } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  
  // Categorize members (For demo purposes, overriding roles or using distinct data)
  const technicalLeaders = [
    { ...mockData.team[1], role: "Technical Leader", key: "sarah" } // Sarah (CTO)
  ];
  
  const leaders = [
    { ...mockData.team[0], role: "Leader", key: "leo" } // Leo (CEO)
  ];
  
  const devs = [
    { ...mockData.team[2], role: "Senior Dev", key: "marcus" }, // Marcus
    { ...mockData.team[1], role: "Backend Dev", key: "sarah", name: "David Kim" }, // Dummy
    { ...mockData.team[0], role: "Frontend Dev", key: "leo", name: "Alex Chen" }, // Dummy
    { ...mockData.team[2], role: "Fullstack Dev", key: "marcus", name: "Emily Wang" } // Dummy
  ];

  const renderMemberCard = (member: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className="group relative aspect-square bg-bg-card border border-white/10 hover:border-primary/50 transition-colors duration-300">
        {/* Corner Borders (Decoration) */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />

        <div className="h-full w-full p-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Image */}
          <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden border-2 border-white/5 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110">
            <img 
              src={member.avatar} 
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info */}
          <div className="text-center z-10">
            <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-text-muted group-hover:text-white transition-colors">
              {member.role}
            </p>
          </div>

          {/* Hover Overlay Background */}
          <div className="absolute inset-0 bg-bg-dark/90 opacity-0 group-hover:opacity-10 translate-y-4 group-hover:translate-y-0 transition-all duration-300 -z-0" />
          
          {/* Social Icons (Appear on Hover) */}
          <div className="absolute bottom-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
               <span className="text-[10px] font-bold">TW</span>
             </div>
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
               <span className="text-[10px] font-bold">LI</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-bg-dark" id="team">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-display font-bold">
            {t('team.title')} <span className="text-primary">{t('team.highlight')}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Technical Leaders */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
             <span className="px-4 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest bg-primary/5">
               Technical Leaders
             </span>
          </div>
          <div className="flex justify-center flex-wrap gap-8 max-w-4xl mx-auto">
             {technicalLeaders.map((member, i) => (
                <div key={i} className="w-64">
                   {renderMemberCard(member, i)}
                </div>
             ))}
          </div>
        </div>

        {/* Leaders */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
             <span className="px-4 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest bg-white/5">
               Leadership
             </span>
          </div>
           <div className="flex justify-center flex-wrap gap-8 max-w-4xl mx-auto">
             {leaders.map((member, i) => (
                <div key={i} className="w-64">
                   {renderMemberCard(member, i)}
                </div>
             ))}
          </div>
        </div>

        {/* Devs */}
        <div>
          <div className="flex justify-center mb-8">
             <span className="px-4 py-1 rounded-full border border-white/20 text-text-muted text-xs font-bold uppercase tracking-widest bg-white/5">
               Development Team
             </span>
          </div>
          <div className="flex justify-center flex-wrap gap-6 max-w-5xl mx-auto">
             {devs.map((member, i) => (
                <div key={i} className="w-56"> 
                   {renderMemberCard(member, i)}
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
