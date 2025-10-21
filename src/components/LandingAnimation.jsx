import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingAnimation.css';

const LandingAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState('initial');

  useEffect(() => {
    // Start zoom out animation
    const timer1 = setTimeout(() => {
      setAnimationStage('zoomOut');
    }, 500);

    // Split panels
    const timer2 = setTimeout(() => {
      setAnimationStage('split');
    }, 2500);

    // Complete animation
    const timer3 = setTimeout(() => {
      setAnimationStage('complete');
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (animationStage === 'complete') {
    return null;
  }

  return (
    <AnimatePresence>
      <div className="landing-animation">
        <motion.div
          className="panel panel-top"
          initial={{ y: 0 }}
          animate={{
            y: animationStage === 'split' ? '-100%' : 0,
          }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.h1
            className="landing-text"
            initial={{ fontSize: '15vw', opacity: 1 }}
            animate={{
              fontSize: animationStage === 'zoomOut' ? '5vw' : '15vw',
              opacity: animationStage === 'split' ? 0 : 1,
            }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            ARAVIND
          </motion.h1>
        </motion.div>

        <motion.div
          className="panel panel-bottom"
          initial={{ y: 0 }}
          animate={{
            y: animationStage === 'split' ? '100%' : 0,
          }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
      </div>
    </AnimatePresence>
  );
};

export default LandingAnimation;

