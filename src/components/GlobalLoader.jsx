import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlobalLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading sequence with progressive milestones
    const stages = [
      { target: 30, duration: 400 },
      { target: 60, duration: 600 },
      { target: 80, duration: 800 },
      { target: 95, duration: 1000 },
      { target: 100, duration: 400 },
    ];

    let currentStage = 0;
    let currentProgress = 0;

    const runStage = () => {
      if (currentStage >= stages.length) {
        setTimeout(() => onFinish(), 300);
        return;
      }

      const { target, duration } = stages[currentStage];
      const increment = (target - currentProgress) / (duration / 16);

      const interval = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= target) {
          currentProgress = target;
          clearInterval(interval);
          currentStage++;
          setTimeout(runStage, 80);
        }
        setProgress(Math.floor(currentProgress));
      }, 16);
    };

    runStage();
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
    >
      {/* Logo / Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-black text-white tracking-wider">
          BHARATH <span className="text-[#915EFF]">V</span>
        </h1>
        <p className="text-secondary text-sm mt-2 tracking-widest uppercase">
          Portfolio
        </p>
      </motion.div>

      {/* Animated spinner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative w-24 h-24 mb-10"
      >
        {/* Outer ring */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: "2s" }}
          viewBox="0 0 96 96"
        >
          <circle
            cx="48" cy="48" r="44"
            fill="none"
            stroke="rgba(145, 94, 255, 0.2)"
            strokeWidth="4"
          />
          <circle
            cx="48" cy="48" r="44"
            fill="none"
            stroke="#915EFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="80 200"
          />
        </svg>
        {/* Inner ring (opposite spin) */}
        <svg
          className="absolute inset-[12px] animate-spin"
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
          viewBox="0 0 72 72"
        >
          <circle
            cx="36" cy="36" r="32"
            fill="none"
            stroke="rgba(145, 94, 255, 0.15)"
            strokeWidth="3"
          />
          <circle
            cx="36" cy="36" r="32"
            fill="none"
            stroke="#c084fc"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="40 160"
          />
        </svg>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#915EFF] shadow-[0_0_16px_#915EFF]" />
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="w-64 sm:w-80"
      >
        <div className="flex justify-between mb-2">
          <span className="text-secondary text-xs tracking-widest uppercase">Loading</span>
          <span className="text-[#915EFF] text-xs font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #7c3aed, #915EFF, #c084fc)",
              boxShadow: "0 0 10px rgba(145, 94, 255, 0.6)",
            }}
            transition={{ ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Initializing label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="mt-8 text-secondary text-xs tracking-widest uppercase"
      >
        Initializing 3D Experience...
      </motion.p>
    </motion.div>
  );
};

export default GlobalLoader;
