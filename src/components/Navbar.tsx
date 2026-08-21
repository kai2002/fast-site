import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react';
import { Sparkles, Terminal, ChevronRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#features', label: '核心架构' },
    { href: '#interactive', label: 'Live 体验' },
    { href: '#matrix', label: '全景性能' },
    { href: '#cli', label: '双轨界面' },
    { href: '#install', label: '快速安装' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}
    >
      {/* Top subtle progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-900 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with Apple Holographic Glow */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/60 group-hover:scale-105 transition-all duration-300 relative">
            <Sparkles className="w-4 h-4 text-white relative z-10" />
            <div className="absolute inset-0 rounded-lg bg-blue-400 blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          <span className="font-semibold text-lg tracking-wider text-white font-mono">FAST</span>
          <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            v0.1.0
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#A1A1A6] font-medium" aria-label="主导航">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 outline-none relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-1 right-1 h-[1.5px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            as="a"
            href="#install"
            size="sm"
            variant="flat"
            className="hidden sm:inline-flex bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-xs font-mono"
            startContent={<Terminal className="w-3.5 h-3.5 text-blue-400" />}
          >
            curl -fsSL fast.ai/install
          </Button>
          <Button
            as="a"
            href="#install"
            size="sm"
            className="hidden sm:inline-flex bg-white text-black font-medium hover:bg-neutral-200 shadow-lg shadow-white/10 text-xs px-4 rounded-full transition-transform active:scale-95"
            endContent={<ChevronRight className="w-3.5 h-3.5" />}
          >
            免费获取
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
            aria-label={mobileMenuOpen ? '关闭主菜单' : '打开主菜单'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-neutral-800/80 overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4 text-base font-medium text-[#D1D1D6]" aria-label="移动端导航">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-2 hover:text-white border-b border-neutral-900 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button
                  as="a"
                  href="#install"
                  onClick={handleLinkClick}
                  size="md"
                  className="w-full bg-white text-black font-semibold rounded-full justify-center"
                >
                  立即体验 FAST
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
