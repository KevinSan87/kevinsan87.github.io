"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Notebook from '@/components/notebook/Notebook';
import Smartphone from '@/components/notebook/Smartphone';
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden relative">
      {/* Background Dynamic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
      </div>

      {/* Header Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8 md:mb-16 z-10 w-full"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase"
        >
          Disponível para novos desafios
        </motion.div>
        
        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-none">
          SOFTWARE <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-500">
            ENGINEER
          </span>
        </h1>
        
        <p className="text-slate-400 text-xs md:text-lg max-w-xs md:max-w-xl mx-auto font-mono leading-relaxed px-4">
          <span className="text-emerald-400">{" > "}</span> Explorando o futuro do desenvolvimento web através de código limpo e inovação.
        </p>
      </motion.div>

      {/* The Interactive Device (Notebook or Smartphone) */}
      <div className="w-full max-w-6xl z-10 flex justify-center mb-8 md:mb-12">
        {isMobile ? <Smartphone /> : <Notebook />}
      </div>

      {/* Footer Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="text-slate-500 text-[10px] md:text-xs font-mono flex flex-col items-center gap-6 z-10 w-full"
      >
        <div className="flex gap-6 md:gap-20">
          <div className="flex flex-col items-center group">
            <span className="text-blue-400 font-black text-base md:text-xl group-hover:scale-110 transition-transform">100%</span>
            <span className="tracking-widest opacity-60 text-[8px] md:text-[10px]">DEDICATION</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-emerald-400 font-black text-base md:text-xl group-hover:scale-110 transition-transform">GROWTH</span>
            <span className="tracking-widest opacity-60 text-[8px] md:text-[10px]">MINDSET</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-purple-400 font-black text-base md:text-xl group-hover:scale-110 transition-transform">CLEAN</span>
            <span className="tracking-widest opacity-60 text-[8px] md:text-[10px]">CODE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <p className="opacity-70 text-[9px] md:text-xs">Role o conteúdo dentro do {isMobile ? 'celular' : 'notebook'}</p>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 {
          perspective: 1200px;
        }
        @media (min-width: 768px) {
          .perspective-1000 {
            perspective: 2000px;
          }
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}} />
    </div>
  );
};

export default Index;