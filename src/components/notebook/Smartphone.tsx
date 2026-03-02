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
    <div className="relative flex items-center justify-center w-full max-w-[320px] aspect-[9/19] perspective-1000 scale-110 sm:scale-100 transition-transform duration-500">
      {/* Phone Container */}
      <motion.div 
        initial={{ rotateY: -10, rotateX: 5, opacity: 0, scale: 0.9 }}
        animate={{ rotateY: 0, rotateX: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-full bg-[#1e293b] rounded-[2.5rem] md:rounded-[3rem] border-[5px] md:border-[6px] border-[#334155] shadow-2xl overflow-hidden"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-full z-40 flex items-center justify-center">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1e293b] rounded-full ml-auto mr-3 md:mr-4" />
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
                className="absolute inset-0 bg-black z-30 flex flex-col items-center justify-center gap-6"
              >
                {/* Boot Logo - Matched with Notebook */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 border-2 border-blue-500/50 rounded-full flex items-center justify-center"
                >
                  <span className="text-xl font-black text-blue-500 tracking-tighter">DEV</span>
                </motion.div>
                
                <div className="w-32 h-1 bg-slate-900 rounded-full overflow-hidden">
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
                  className="text-[10px] text-slate-500 font-mono tracking-widest uppercase"
                >
                  System Loading...
                </motion.span>
              </motion.div>
            )}

            {bootStatus === 'on' && (
              <motion.div 
                key="on"
                initial={{ opacity: 0, filter: "brightness(2) blur(10px)" }}
                animate={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Notch Spacer */}
                <div className="h-10 md:h-12 shrink-0" />
                
                {/* Content Container */}
                <div className="flex-1 overflow-hidden">
                  <ScreenContent />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Side Buttons (Visual only) */}
        <div className="absolute -left-[6px] top-20 w-[2px] h-10 bg-[#334155] rounded-l-md" />
        <div className="absolute -right-[6px] top-28 w-[2px] h-14 bg-[#334155] rounded-r-md" />
      </motion.div>

      {/* Reflection/Shadow */}
      <div className="absolute -bottom-10 w-[120%] h-10 bg-black/40 blur-3xl rounded-full -z-10" />
    </div>
  );
};

export default Smartphone;