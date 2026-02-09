'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedNavProps {
  translations: {
    en: Record<string, string>;
    th: Record<string, string>;
  };
}

export default function AnimatedNav({ translations }: AnimatedNavProps) {
  const [locale, setLocale] = useState<'en' | 'th'>('en');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const t = locale === 'en' ? translations.en : translations.th;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
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
        <div className="hidden md:flex items-center gap-8 text-[11px] font-normal text-[#000000] uppercase tracking-wide">
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
                className={`px-3 py-1.5 text-[10px] uppercase font-medium transition-all ${
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
  );
}
