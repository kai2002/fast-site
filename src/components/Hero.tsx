import React from 'react';
import { Button, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { Terminal, Zap, ShieldCheck, ArrowRight, Play, Sparkles, Cpu, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[250px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md"
      >
        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
        <span className="text-xs text-neutral-300 font-medium tracking-wide">FAST 2.0 Engine • 重新定义工程级智能体</span>
        <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
      </motion.div>

      {/* Main Apple-Style Typography */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl text-gradient-hero mb-6"
      >
        极致迅捷。<br className="hidden sm:inline" />
        <span className="text-gradient-blue">为极限工程而生。</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-2xl text-neutral-400 max-w-3xl font-normal leading-relaxed mb-10 tracking-tight"
      >
        不仅是 LLM 交互工具。FAST 是具备分布式状态分片、确定性闭环编排与原生双轨 (CLI / GUI) 架构的下一代工程智能系统。
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
      >
        <Button
          as="a"
          href="#install"
          size="lg"
          className="bg-white text-black font-semibold px-8 h-12 rounded-full hover:bg-neutral-200 transition-all shadow-xl shadow-white/10 text-sm active:scale-95 flex items-center gap-2"
        >
          <Zap className="w-4 h-4 fill-black" />
          立即下载 macOS / Linux 版
        </Button>
        <Button
          as="a"
          href="#interactive"
          size="lg"
          variant="bordered"
          className="border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 text-neutral-200 px-8 h-12 rounded-full backdrop-blur-md text-sm active:scale-95 flex items-center gap-2"
        >
          <Play className="w-3.5 h-3.5 fill-current text-blue-400" />
          查看交互式 Demo
        </Button>
      </motion.div>

      {/* Key Metric Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl w-full border-t border-neutral-900/80 pt-10"
      >
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">0.8ms</div>
          <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1 font-mono">内核事件分发延时</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold font-mono text-blue-400 tracking-tight">100%</div>
          <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1 font-mono">确定性沙箱闭环</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">3-Tier</div>
          <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1 font-mono">Team/Agent/Tool 体系</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-400 tracking-tight">Native</div>
          <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1 font-mono">TUI & Desktop 无缝同构</div>
        </div>
      </motion.div>
    </section>
  );
};
