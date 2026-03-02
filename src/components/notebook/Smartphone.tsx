"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScreenContent from './ScreenContent';

const Smartphone = () => {
  const [bootStatus, setBootStatus] = useState<'off' | 'booting' | 'on'>('off');

  useEffect(() => {
    // Sequência de boot rápida
    const timer1 = setTimeout(() => setBootStatus('booting'), 500);
    const timer2 = setTimeout(() => setBootStatus('on'), 2200); // Boot dura 1.7s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] transition-transform duration-500">
      {/* Phone Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full bg-[#1e293b] rounded-[2.5rem] md:rounded-[3rem] border-[4px] md:border-[6px] border-[#334155] shadow-2xl overflow-hidden"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-4 md:h-6 bg-black rounded-full z-40 flex items-center justify-center">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#1e293b] rounded-full ml-auto mr-2 md:mr-4" />
        </div>

        {/* Screen Content Area */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            {bootStatus === 'off' && (
              <motion.div 
                key="off"
                className="absolute inset-0 bg-black z-30"
              />
            )}

            {bootStatus === 'booting' && (
              <motion.div 
                key="booting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black z-30 flex flex-col items-center justify-center gap-4 md:gap-6"
              >
                {/* Boot Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 md:w-16 md:h-16 border-2 border-blue-500/50 rounded-full flex items-center justify-center"
                >
                  <span className="text-sm md:text-xl font-black text-blue-500 tracking-tighter">DEV</span>
                </motion.div>
                
                <div className="w-24 md:w-32 h-1 bg-slate-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                  />
                </div>
                <motion.span 
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-[8px] md:text-[10px] text-slate-500 font-mono tracking-widest uppercase"
                >
                  System Loading...
                </motion.span>
              </motion.div>
            )}

            {bootStatus === 'on' && (
              <motion.div 
                key="on"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full pt-8 md:pt-12"
              >
                <ScreenContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Side Buttons (Visual only) */}
        <div className="absolute -left-[4px] top-16 w-[2px] h-8 bg-[#334155] rounded-l-md" />
        <div className="absolute -right-[4px] top-24 w-[2px] h-12 bg-[#334155] rounded-r-md" />
      </motion.div>

      {/* Reflection/Shadow */}
      <div className="absolute -bottom-6 w-[110%] h-6 bg-black/40 blur-2xl rounded-full -z-10" />
    </div>
  );
};

export default Smartphone;