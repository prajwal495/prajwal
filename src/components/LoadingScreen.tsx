import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Initializing environment...",
    "Loading modules...",
    "Compiling assets...",
    "Establishing connection...",
    "System ready."
  ];

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total loading
    const interval = 20; // update every 20ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      // Update text based on progress
      if (newProgress < 20) setTextIndex(0);
      else if (newProgress < 40) setTextIndex(1);
      else if (newProgress < 60) setTextIndex(2);
      else if (newProgress < 80) setTextIndex(3);
      else setTextIndex(4);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // Wait a bit at 100% before completing
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-cyan-400 font-mono"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.2, 
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      <div className="w-full max-w-md px-8">
        {/* Terminal Window */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-800/50 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="ml-2 text-zinc-500 text-xs">terminal ~ root</span>
          </div>

          {/* Loading Text */}
          <div className="h-8 mb-4 flex items-center text-sm sm:text-base">
            <span className="text-cyan-400 mr-2">{'>'}</span>
            <span className="text-zinc-300">{loadingTexts[textIndex]}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 sm:h-5 bg-cyan-400 ml-1"
            />
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden mt-6 relative border border-zinc-800/50">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage and Status */}
          <div className="mt-3 flex justify-between items-center text-xs text-zinc-500">
            <span>{progress === 100 ? 'SUCCESS' : 'LOADING'}</span>
            <span className="text-cyan-400/80">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
