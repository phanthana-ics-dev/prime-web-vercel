'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface HeroSectionProps {
  translations: {
    en: Record<string, string>;
    th: Record<string, string>;
  };
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function HeroSection({ translations }: HeroSectionProps) {
  const [count144, setCount144] = useState(0);
  const [count70, setCount70] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [locale] = useState<'en' | 'th'>('en');
  const textArray = ['Green', 'Fee', 'Caddy', 'Cart', 'All-In'];
  const textArrayLength = textArray.length;
  
  const t = locale === 'en' ? translations.en : translations.th;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    // Animate 144
    const duration144 = 2000;
    const steps144 = 60;
    const increment144 = 144 / steps144;
    let current144 = 0;

    const timer144 = setInterval(() => {
      current144 += increment144;
      if (current144 >= 144) {
        setCount144(144);
        clearInterval(timer144);
      } else {
        setCount144(Math.floor(current144));
      }
    }, duration144 / steps144);

    // Animate 70
    const duration70 = 2000;
    const steps70 = 60;
    const increment70 = 70 / steps70;
    let current70 = 0;

    const timer70 = setInterval(() => {
      current70 += increment70;
      if (current70 >= 70) {
        setCount70(70);
        clearInterval(timer70);
      } else {
        setCount70(Math.floor(current70));
      }
    }, duration70 / steps70);

    // Cycle through text array
    const textTimer = setInterval(() => {
      setTextIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= textArrayLength - 1) {
          clearInterval(textTimer);
          return textArrayLength - 1;
        }
        return nextIndex;
      });
    }, 800);

    return () => {
      clearInterval(timer144);
      clearInterval(timer70);
      clearInterval(textTimer);
    };
  }, [textArrayLength]);

  return (
    <section 
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f4f5ef] via-[#fdfcfa] to-[#f4f5ef] overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4a7c59]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4a7c59]/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div 
        className="w-full max-w-3xl mx-auto text-center relative z-10"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-10xl font-bold text-[#000000] tracking-[0.3em] mb-4 -mr-[0.3em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t.PRIME}
          </motion.h1>
          <motion.p 
            className="text-[13px] md:text-sm uppercase tracking-[0.3em] text-[#000000]/70 font-normal -mr-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t["Corporate Golf Membership"]}
          </motion.p>
        </motion.div>
        
        <motion.p 
          className="text-sm md:text-base text-[#000000]/80 mb-12 tracking-wide max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t["Flexible access to 70+ championship courses throughout Thailand with dedicated concierge service"]}
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mb-12 py-4 md:py-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: count144, label: t["Annual Rounds"], suffix: '' },
            { value: count70, label: t["Premium Courses"], suffix: '+' },
            { value: textArray[textIndex], label: t["One Annual Fee"], suffix: '', isText: true }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center group"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-5xl md:text-6xl font-normal text-[#000000] mb-2 tracking-tight"
                key={item.isText ? textIndex : `${item.value}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.value}{item.suffix}
              </motion.div>
              <div className="text-[10px] md:text-[12px] text-[#000000]/70 uppercase tracking-[0.15em] text-center whitespace-nowrap group-hover:text-[#4a7c59] transition-colors">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="px-9 py-3 bg-[#4a7c59] hover:bg-[#4a7c59]/90 text-white text-[12px] md:text-[14px] transition-all duration-300 uppercase tracking-[0.2em] font-medium rounded-sm shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t["Membership Kit"]}
          </motion.button>
          <motion.button 
            className="px-9 py-3 bg-transparent hover:bg-[#000000]/5 text-[#000000] border border-[#000000]/10 hover:border-[#4a7c59]/60 transition-all duration-300 text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium rounded-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t["Course Network"]}
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-[10px] md:text-[12px] text-[#000000]/60 tracking-[0.35em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t["Launching March 1, 2026"]}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-[#000000]/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-[#000000]/40 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
