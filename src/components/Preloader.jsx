import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if preloader has already run in this session
    const hasRun = sessionStorage.getItem('preloaderRun');
    
    if (hasRun) {
      setIsVisible(false);
      return;
    }

    // Mark as run
    sessionStorage.setItem('preloaderRun', 'true');

    // Simulate loading progress
    const duration = 2000; // 2 seconds total loading time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const easeProgress = Math.min(100, Math.round((currentStep / steps) * 100));
      
      // Add slight randomness to make it feel "real"
      if (Math.random() > 0.3) {
        setProgress(easeProgress);
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
        }, 400); // Wait a bit at 100% before fading out
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center text-white"
        >
          <div className="w-full max-w-md px-8">
            <div className="flex justify-between items-end mb-2 font-mono text-sm text-indigo-light tracking-widest">
              <span>SYSTEM_BOOT</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 w-full bg-navy-2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-orange"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <div className="mt-8 text-center">
              <span className="font-display font-bold text-3xl tracking-tight">Code<span className="text-orange">Path</span></span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
