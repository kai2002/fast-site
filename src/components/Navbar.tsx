import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react';
import { Terminal, Cpu, Sparkles, Layers, Download, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-wider text-white font-mono">FAST</span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            v0.1.0
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
          <a href="#features" className="hover:text-white transition-colors">核心架构</a>
          <a href="#interactive" className="hover:text-white transition-colors">Live 体验</a>
          <a href="#matrix" className="hover:text-white transition-colors">全景性能</a>
          <a href="#cli" className="hover:text-white transition-colors">双轨界面</a>
          <a href="#docs" className="hover:text-white transition-colors">开发者生态</a>
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
            className="bg-white text-black font-medium hover:bg-neutral-200 shadow-lg shadow-white/10 text-xs px-4 rounded-full transition-transform active:scale-95"
            endContent={<ChevronRight className="w-3.5 h-3.5" />}
          >
            免费获取
          </Button>
        </div>
      </div>
    </header>
  );
};
