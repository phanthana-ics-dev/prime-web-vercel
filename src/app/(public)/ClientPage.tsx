'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';

interface ClientPageProps {
  translations: {
    en: Record<string, string>;
    th: Record<string, string>;
  };
}

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

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

// Component for animated sections
function AnimatedSection({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ClientPage({ translations }: ClientPageProps) {
  const [count144, setCount144] = useState(0);
  const [count70, setCount70] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [locale, setLocale] = useState<'en' | 'th'>('en');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
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

  // Handle navigation visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <div className="bg-[#fdfcfa] text-[#000000] min-h-screen scroll-smooth">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcfa]/80 backdrop-blur-xl border-b border-[#000000]/10"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[68px]">
          <motion.a 
            className="flex items-center gap-3 group" 
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold tracking-[0.25em] text-[#000000] hover:text-[#4a7c59] transition-all duration-300">
              PRIME
            </span>
          </motion.a>
          <div className="hidden md:flex items-center gap-8 text-lg font-normal text-[#000000] uppercase tracking-wide">
            {[
              { href: '#value', text: t.Benefits },
              { href: '#courses', text: t.Courses },
              { href: '#pricing', text: t.Pricing },
              { href: '#contact', text: t.Contact }
            ].map((link, idx) => (
              <motion.a 
                key={idx}
                href={link.href} 
                className="hover:text-[#4a7c59] transition-colors cursor-pointer relative"
                whileHover={{ y: -2 }}
              >
                {link.text}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a7c59]"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <div className="ml-4 flex items-center gap-0 border border-[#000000]/20 rounded-lg overflow-hidden">
              {['en', 'th'].map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setLocale(lang as 'en' | 'th')}
                  className={`px-4 py-2 text-xs md:text-sm uppercase font-medium transition-all ${
                    locale === lang 
                      ? 'bg-[#4a7c59] text-white' 
                      : 'bg-white text-[#000000] hover:bg-[#f4f5ef]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'Thai'}`}
                >
                  {lang.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
              className="text-7xl md:text-[12rem] font-bold text-[#000000] tracking-[0.3em] mb-4 -mr-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t.PRIME}
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg uppercase tracking-[0.3em] text-[#000000]/70 font-normal -mr-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t["Corporate Golf Membership"]}
            </motion.p>
          </motion.div>
          
          <motion.p 
          className="text-base md:text-xl text-[#000000]/80 mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed"
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
                className="text-6xl md:text-8xl font-normal text-[#000000] mb-2 tracking-tight"
                key={item.isText ? textIndex : `${item.value}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.value}{item.suffix}
              </motion.div>
              <div className="text-sm md:text-base text-[#000000]/70 uppercase tracking-[0.15em] text-center whitespace-nowrap group-hover:text-[#4a7c59] transition-colors">
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
            className="px-10 py-4 bg-[#4a7c59] hover:bg-[#4a7c59]/90 text-white text-sm md:text-lg transition-all duration-300 uppercase tracking-[0.2em] font-medium rounded-sm shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t["Membership Kit"]}
            </motion.button>
            <motion.button 
            className="px-10 py-4 bg-transparent hover:bg-[#000000]/5 text-[#000000] border border-[#000000]/10 hover:border-[#4a7c59]/60 transition-all duration-300 text-sm md:text-lg uppercase tracking-[0.2em] font-medium rounded-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t["Course Network"]}
            </motion.button>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-[#000000]/60 tracking-[0.35em] uppercase"
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

      {/* Value Section */}
      <section id="value" className="min-h-screen py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f4f5ef]/30 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <AnimatedSection className="text-center mb-14">
            <motion.h2 
              className="text-4xl md:text-6xl font-normal text-[#000000] mb-3 tracking-tight py-8 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t["The PRIME Advantage"]}
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-[#000000]/70 max-w-xl mx-auto leading-relaxed tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t["A comprehensive corporate golf solution for Thailand's leading businesses"]}
            </motion.p>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-3 gap-10 mb-14 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '144', title: t["Rounds Annually"], desc: 'Generous allocation for client entertainment, team building, and executive networking' },
              { number: '70+', title: t["Premium Courses"], desc: 'Championship venues to exclusive private clubs across Thailand\'s premier regions' },
              { number: '1', title: t["Annual Fee"], desc: 'All-inclusive pricing with Personal Concierge handling all arrangements' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-6xl md:text-8xl font-extralight text-[#000000] mb-4 tracking-tighter group-hover:text-[#4a7c59] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.number}
                </motion.div>
                <h3 className="text-lg md:text-xl font-medium text-[#000000] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-lg md:text-xl text-[#000000]/70 leading-relaxed tracking-wide px-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto pt-8 md:pt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Flexible Guest Policy', desc: 'Two registered users, up to 6 guests when both present' },
              { title: 'Personal Concierge', desc: 'Dedicated service for all bookings and logistics' },
              { title: 'Predictable Budgeting', desc: 'Fixed annual fee, no hidden charges or surprises' },
              { title: 'Corporate-Specific', desc: 'Professional service standards across all courses' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center md:text-left group"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
              >
              <h4 className="text-base md:text-lg font-medium text-[#000000] mb-1.5 tracking-tight group-hover:text-[#4a7c59] transition-colors">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-[#000000]/70 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="min-h-screen bg-gradient-to-br from-[#f4f5ef] to-[#fdfcfa] pt-24 pb-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4a7c59]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4a7c59]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <AnimatedSection className="text-center mb-8">
            <motion.h2 
              className="text-3xl md:text-5xl font-normal text-[#000000] mb-3 tracking-tight py-8 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t["Course Network"]}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl font-light text-[#000000]/70 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              20 Premium Championship • 54 Quality Courses
            </motion.p>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-2 gap-24 mb-12 max-w-4xl mx-auto text-center md:text-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-lg md:text-xl font-medium text-[#000000] uppercase tracking-[0.25em] mb-6">Premium Championship</h3>
              <ul className="space-y-3">
                {['Thai Country Club • Bangkok', 'Siam Country Club • Pattaya', 'Black Mountain • Hua Hin', 'Blue Canyon • Phuket', 'Alpine Golf Resort • Chiang Mai'].map((course, idx) => (
                  <motion.li 
                    key={idx} 
                    className="text-lg md:text-xl font-light text-[#000000]/60 tracking-wide hover:text-[#4a7c59] hover:translate-x-2 transition-all cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {course}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-lg md:text-xl font-medium text-[#000000] uppercase tracking-[0.25em] mb-6">Regional Coverage</h3>
              <div className="space-y-3">
                {[
                  { region: 'Bangkok & Central', count: '34' },
                  { region: 'Pattaya & Eastern', count: '18' },
                  { region: 'Hua Hin & West', count: '7' },
                  { region: 'Phuket & South', count: '7' },
                  { region: 'Khao Yai', count: '5' },
                  { region: 'Chiang Mai & North', count: '3' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex justify-between items-center max-w-[280px] mx-auto md:mx-0 hover:translate-x-2 transition-transform cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-lg md:text-xl text-[#000000]/60 tracking-wide group-hover:text-[#4a7c59] transition-colors">{item.region}</span>
                    <span className="text-lg md:text-xl font-light text-[#000000]/40 group-hover:text-[#4a7c59] transition-colors">{item.count}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.a 
              href="#" 
              className="inline-block text-[#000000]/60 hover:text-[#4a7c59] text-lg md:text-xl font-medium uppercase tracking-[0.25em] transition-colors underline decoration-[#000000]/20 hover:decoration-[#4a7c59]/40 underline-offset-4"
              whileHover={{ y: -2 }}
            >
              Complete Directory
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen py-16 md:py-20 bg-white flex items-center relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#f4f5ef]/40 to-transparent pointer-events-none" />
        
        <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-5xl font-normal text-[#000000] mb-3 tracking-tight py-8 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t.Investment}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl font-light text-[#000000]/70 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t["One annual fee • Complete access"]}
            </motion.p>
          </AnimatedSection>

          <motion.div 
            className="bg-white border-2 border-[#000000]/10 p-10 md:p-14 mx-auto rounded-lg shadow-2xl hover:shadow-3xl hover:border-[#4a7c59]/30 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center mb-10">
              <motion.div 
                className="text-[#000000]/80 text-lg uppercase tracking-[0.3em] mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t["Annual Membership"]}
              </motion.div>
              <motion.div 
                className="mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-6xl md:text-7xl font-normal text-[#000000] tracking-tighter">฿949,000</span>
              </motion.div>
              <motion.div 
                className="text-[#000000]/70 text-lg md:text-xl tracking-wide mb-1 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {t["excluding VAT"]}
              </motion.div>
              <motion.div 
                className="text-[#000000]/70 text-lg md:text-xl tracking-wide text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                ฿1,015,430 {t["including 7% VAT"]}
              </motion.div>
            </div>

            <div className="border-t border-[#000000]/10 pt-10 mb-10">
              <h4 className="text-lg font-medium text-[#000000] uppercase tracking-[0.25em] mb-8 text-center">{t["Complete Package"]}</h4>
              <motion.div 
                className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg max-w-md mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  '144 rounds per year', '70+ partner courses', 'Green fees included', 'Caddy service included',
                  'Golf cart per round', 'Two registered users', 'Up to 6 guest privileges', 'Personal Concierge service'
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-2 group"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#4a7c59] mt-0.5 text-lg">✓</span>
                    <span className="text-[#000000]/60 tracking-wide group-hover:text-[#000000] transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="flex-1 text-center bg-[#4a7c59] hover:bg-[#4a7c59]/90 text-white py-3.5 font-medium transition-all text-lg uppercase tracking-[0.2em] cursor-pointer rounded-sm shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t["Request Information"]}
              </motion.a>
              <motion.button 
                className="flex-1 text-center bg-transparent hover:bg-[#000000]/5 text-[#000000] py-3.5 font-medium transition-all text-lg border border-[#000000]/20 hover:border-[#4a7c59]/60 uppercase tracking-[0.2em] rounded-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t["Download Details"]}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How PRIME Works Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#f4f5ef] to-[#fdfcfa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#4a7c59]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-normal text-[#000000] mb-3 tracking-tight pt-8 md:pt-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t["How PRIME Works"]}
            </motion.h2>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: '1', title: 'Apply & Schedule', desc: 'Complete your membership application and schedule an introductory consultation' },
              { num: '2', title: 'Book Through Concierge', desc: 'Contact your dedicated concierge to plan and book tee times at any partner course' },
              { num: '3', title: 'Play & Manage', desc: 'Arrive at each course ready to play, with all logistics managed for your convenience' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-4xl font-extralight text-[#000000] mb-6 inline-block border-2 border-[#000000]/10 group-hover:border-[#4a7c59] px-8 py-4 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.num}
                </motion.div>
                <h3 className="text-lg font-medium text-[#000000] mb-3 tracking-tight group-hover:text-[#4a7c59] transition-colors">{item.title}</h3>
                <p className="text-lg text-[#000000]/60 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ready to Join Section */}
      <section id="contact" className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4a7c59]/30 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 w-full text-center relative z-10">
          <AnimatedSection>
            <motion.h2 
              className="text-5xl md:text-6xl font-normal text-[#000000] mb-4 tracking-tight pb-6 md:pb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t["Ready to Join?"]}
            </motion.h2>
            <motion.p 
              className="text-lg text-[#000000]/60 mb-12 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t["Contact our membership team to learn more"]}
            </motion.p>
          </AnimatedSection>

          <motion.div 
            className="border-2 border-[#000000]/10 p-8 mb-12 space-y-4 max-w-xl mx-auto rounded-lg shadow-xl hover:shadow-2xl hover:border-[#4a7c59]/30 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {[
              { icon: '📧', label: 'Email', value: 'membership@primegolf.th' },
              { icon: '📞', label: 'Phone', value: '+66 2 XXX XXXX' },
              { icon: '📍', label: 'Office', value: 'Bangkok, Thailand' }
            ].map((contact, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-row justify-center items-center gap-2 text-center group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">{contact.icon}</span>
                <div className="text-left">
                  <p className="text-[10px] text-[#000000]/50 uppercase tracking-wide">{contact.label}</p>
                  <p className="text-[14px] text-[#000000] group-hover:text-[#4a7c59] transition-colors">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-[#000000]/60 tracking-[0.35em] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t["Launching March 1, 2026"]}
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] text-[#fdfcfa] py-16 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-10 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Column 1: PRIME */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold tracking-[0.2em] mb-4 text-[#fdfcfa]">PRIME</h3>
              <p className="text-sm text-[#fdfcfa]/70 tracking-wide leading-relaxed">
                Corporate Golf Membership<br /><br />
                Welcome to a new standard in corporate benefits, where golf and business meet
              </p>
            </motion.div>

            {/* Column 2: Membership */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-[#fdfcfa]">Membership</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Benefits', href: '#value' },
                  { label: 'Courses', href: '#courses' },
                  { label: 'Pricing', href: '#pricing' }
                ].map((link, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }}>
                    <a href={link.href} className="text-sm text-[#fdfcfa]/50 hover:text-[#4a7c59] transition-colors tracking-wide">{link.label}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Resources */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-[#fdfcfa]">Resources</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Fact Sheet', href: `/${locale}/fact-sheet` },
                  { label: 'Course Directory', href: `/${locale}/course-directory` },
                  { label: 'Member Agreement', href: `/${locale}/membership-agreement` },
                  { label: 'Terms & Conditions', href: `/${locale}/terms-and-conditions` },
                  { label: 'Privacy Policy', href: `/${locale}/privacy-policy` }
                ].map((link, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }}>
                    <a href={link.href} className="text-sm text-[#fdfcfa]/50 hover:text-[#4a7c59] transition-colors tracking-wide">{link.label}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-[#fdfcfa]">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:membership@primegolf.in.th" className="text-sm text-[#fdfcfa]/70 hover:text-[#4a7c59] transition-colors tracking-wide">
                    membership@primegolf.in.th
                  </a>
                </li>
                <li>
                  <a href="tel:+66625625456" className="text-sm text-[#fdfcfa]/70 hover:text-[#4a7c59] transition-colors tracking-wide">
                    +66 (0) 62 562 5456
                  </a>
                </li>
                <li>
                  <a href="https://line.me/ti/p/@primegolf" target="_blank" rel="noopener noreferrer" className="text-sm text-[#fdfcfa]/70 hover:text-[#4a7c59] transition-colors tracking-wide">
                    LINE: @primegolf
                  </a>
                </li>
                <li className="pt-4">
                  <p className="text-xs text-[#fdfcfa]/50 tracking-wide">
                    Launching March 1, 2026
                  </p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <div className="border-t border-[#fdfcfa]/10 pt-6 text-center">
            <p className="text-xs text-[#fdfcfa]/20 tracking-[0.25em] uppercase">© 2025 PRIME Corporate Golf Membership. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-[#4a7c59] text-white p-4 rounded-full shadow-2xl z-50 hover:bg-[#4a7c59]/90 transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollY > 500 ? 1 : 0, scale: scrollY > 500 ? 1 : 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
