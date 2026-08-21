import React from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Play, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[auto] sm:min-h-[88vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 overflow-hidden" aria-labelledby="hero-title">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-blue-600/12 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[220px] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" aria-hidden="true" />

      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md hover:border-neutral-700 transition-colors shadow-lg"
      >
        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
        <span className="text-xs text-[#D1D1D6] font-medium tracking-wide">FAST 2.0 Engine • 重新定义工程级智能体</span>
        <ArrowRight className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
      </motion.div>

      {/* Main Apple-Style Typography */}
      <motion.h1
        id="hero-title"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl text-gradient-hero mb-6"
      >
        极致迅捷。<br className="hidden sm:inline" />
        <span className="text-gradient-blue">为极限工程而生。</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-xl text-[#A1A1A6] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 tracking-tight"
      >
        具备分布式 Actor 状态分片、可验证 Goal DAG 闭环与原生双轨 (CLI / GUI) 的下一代智能工程系统。
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none"
      >
        <Button
          as="a"
          href="#install"
          size="lg"
          className="bg-white text-black font-semibold px-8 h-12 rounded-full hover:bg-neutral-200 transition-all shadow-xl shadow-white/10 text-sm active:scale-95 flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 fill-black" aria-hidden="true" />
          <span>立即下载体验</span>
        </Button>
        <Button
          as="a"
          href="#interactive"
          size="lg"
          variant="bordered"
          className="border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 text-neutral-200 px-8 h-12 rounded-full backdrop-blur-md text-sm active:scale-95 flex items-center justify-center gap-2"
        >
          <Play className="w-3.5 h-3.5 fill-current text-blue-400" aria-hidden="true" />
          <span>查看交互式 Demo</span>
        </Button>
      </motion.div>

      {/* Key Metric Highlights with tnum monospace typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl w-full border-t border-neutral-900/90 pt-8"
      >
        <div className="flex flex-col items-center p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
          <div className="text-2xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">0.8ms</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-1">内核分发延时</div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
          <div className="text-2xl sm:text-4xl font-bold font-mono text-blue-400 tracking-tight tabular-nums">100%</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-1">沙箱闭环验证</div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
          <div className="text-2xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">3-Tier</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-1">Team/Agent/Tool</div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
          <div className="text-2xl sm:text-4xl font-bold font-mono text-emerald-400 tracking-tight tabular-nums">Native</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-1">TUI/GUI 双轨同构</div>
        </div>
      </motion.div>
    </section>
  );
};
