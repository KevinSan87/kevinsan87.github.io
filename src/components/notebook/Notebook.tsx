"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScreenContent from './ScreenContent';

const Notebook = () => {
  const [bootStatus, setBootStatus] = useState<'off' | 'booting' | 'on'>('off');

  useEffect(() => {
    // Inicia o boot após a tampa começar a abrir (delay de 1s)
    const timer1 = setTimeout(() => setBootStatus('booting'), 1000);
    // Finaliza o boot após 2.5s de carregamento
    const timer2 = setTimeout(() => setBootStatus('on'), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-5xl aspect-[16/10] perspective-1000 scale-[0.85] sm:scale-100 transition-transform duration-500">
      {/* Notebook Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Lid (Top Part) */}
        <motion.div 
          initial={{ rotateX: -95 }}
          animate={{ rotateX: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5, 
            ease: [0.23, 1, 0.32, 1] 
          }}
          style={{ transformOrigin: 'bottom', transformStyle: 'preserve-3d' }}
          className="relative w-[92%] h-[85%] bg-[#1e293b] rounded-t-xl border-[3px] md:border-4 border-[#334155] shadow-2xl z-20"
        >
          {/* Outer Lid Logo (Visible when closed/opening) */}
          <div className="absolute inset-0 flex items-center justify-center backface-hidden pointer-events-none opacity-10">
             <div className="w-12 h-12 md:w-20 md:h-20 border-2 md:border-4 border-slate-400 rounded-full flex items-center justify-center">
                <span className="text-xs md:text-2xl font-bold text-slate-400">DEV</span>
             </div>
          </div>

          {/* Screen Content Area */}
          <div className="absolute inset-1 md:inset-2 bg-black rounded-sm overflow-hidden">
            <AnimatePresence mode="wait">
              {bootStatus === 'off' && (
                <motion.div key="off" className="absolute inset-0 bg-black z-30" />
              )}

              {bootStatus === 'booting' && (
                <motion.div 
                  key="booting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black z-30 flex flex-col items-center justify-center gap-4 md:gap-8"
                >
                  {/* Boot Logo */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-blue-500/50 rounded-full flex items-center justify-center"
                  >
                    <span className="text-lg md:text-3xl font-black text-blue-500 tracking-tighter">DEV</span>
                  </motion.div>
                  
                  {/* Progress Bar */}
                  <div className="w-32 md:w-48 h-1 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient-x"
                    />
                  </div>
                  
                  <motion.span 
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-[8px] md:text-xs text-slate-500 font-mono tracking-[0.2em] uppercase"
                  >
                    Initializing OS...
                  </motion.span>
                </motion.div>
              )}

              {bootStatus === 'on' && (
                <motion.div 
                  key="on"
                  initial={{ opacity: 0, scale: 1.05, filter: "brightness(1.5)" }}
                  animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <ScreenContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Base (Bottom Part) */}
        <div className="relative w-full h-[8%] md:h-[10%] bg-[#334155] rounded-b-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col items-center">
          {/* Keyboard/Trackpad area (simplified) */}
          <div className="w-[95%] h-0.5 md:h-1 bg-[#1e293b] mt-1 rounded-full opacity-50" />
          
          {/* Front Notch */}
          <div className="w-16 md:w-24 h-1 md:h-2 bg-[#1e293b] rounded-b-lg mt-auto mb-1" />
        </div>

        {/* Reflection/Shadow on the "table" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-6 md:-bottom-10 w-[110%] h-12 md:h-20 bg-black/40 blur-2xl md:blur-3xl rounded-full -z-10"
        />
      </div>
    </div>
  );
};

export default Notebook;