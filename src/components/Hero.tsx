import React from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Play, Sparkles, Layers, ShieldCheck, Users, Brain, Cpu } from 'lucide-react';
import { DimensionalHeroBackground } from './DimensionalHeroBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[auto] lg:min-h-[88vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-14 overflow-hidden" aria-labelledby="hero-title">
      {/* 1. Multi-dimensional Quantum Fluid & Light Wave Animated Background */}
      <DimensionalHeroBackground />

      {/* 2. Secondary Atmospheric Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 blur-[140px] pointer-events-none rounded-full" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[240px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />

      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md hover:border-neutral-700 transition-colors shadow-lg relative z-10"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
        <span className="text-xs text-[#D1D1D6] font-medium tracking-wide font-sans">
          开源分布式双模（Coding + Work）Agent OS • Apache-2.0
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
      </motion.div>

      {/* Main Apple-Style Typography with Tight Tracking */}
      <motion.h1
        id="hero-title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl text-gradient-hero mb-5 leading-[1.15] relative z-10"
      >
        用AI+知识重塑复杂业务<br className="hidden sm:inline" />
        <span className="text-gradient-blue">下一代企业级自主进化大脑</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="text-base sm:text-lg lg:text-xl text-[#D1D1D6] max-w-3xl font-normal leading-relaxed mb-8 tracking-normal relative z-10"
      >
        FAST 是开源、原生的分布式双模（Coding + Work）智能体操作系统（Agent OS），以多智能体协同与自研记忆系统，打造企业自主进化大脑。
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 mb-10 w-full max-w-md sm:max-w-none relative z-10"
      >
        <Button
          as="a"
          href="#install"
          size="lg"
          className="btn-primary-glow bg-white text-black font-semibold px-8 h-11 rounded-full hover:bg-neutral-100 transition-all text-sm active:scale-95 flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 fill-black" aria-hidden="true" />
          <span>立即安装体验</span>
        </Button>
        <Button
          as="a"
          href="#interactive"
          size="lg"
          variant="bordered"
          className="border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-900/80 text-neutral-200 px-7 h-11 rounded-full backdrop-blur-md text-sm active:scale-95 flex items-center justify-center gap-2 transition-all"
        >
          <Play className="w-3.5 h-3.5 fill-current text-blue-400" aria-hidden="true" />
          <span>查看虚拟团队演练</span>
        </Button>
      </motion.div>

      {/* Key Metric Highlights with Tabular Figures */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-4xl w-full border-t border-neutral-900/80 pt-6 text-left relative z-10"
      >
        <div className="flex flex-col p-3.5 sm:p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Dual-Mode</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight tabular-nums">Coding + Work</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-0.5">代码与业务双模融通</div>
        </div>

        <div className="flex flex-col p-3.5 sm:p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Virtual Team</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight tabular-nums">Goal DAG 闭环</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-0.5">多智能体刚性交付</div>
        </div>

        <div className="flex flex-col p-3.5 sm:p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-mono mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Agent Sharding</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight tabular-nums">Run / Session</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-0.5">原生分布式分片集群</div>
        </div>

        <div className="flex flex-col p-3.5 sm:p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs text-purple-400 font-mono mb-1">
            <Brain className="w-3.5 h-3.5" />
            <span>Enterprise Brain</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight tabular-nums">Memory + 本体论</div>
          <div className="text-xs text-[#A1A1A6] font-mono mt-0.5">自主进化与数字孪生</div>
        </div>
      </motion.div>
    </section>
  );
};
