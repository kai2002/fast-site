import React, { useRef, useState } from 'react';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Workflow, Cpu, Database, Activity } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    tag: "Core Engine",
    title: "Actor 模型状态机分片",
    desc: "采用 RunShard / SessionShard / MetaShard 三级 Actor 分片架构，支持高并发隔离与无锁状态安全流转，吞吐与弹性跃升。",
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-400" aria-hidden="true" />,
    tag: "Delivery Protocol",
    title: "可验证目标体系 (Goal DAG)",
    desc: "内置 Executor、Verifier 与 Summarizer 自动化交付闭环。未通过质检的代码绝不流入最终产物，保障交付精度与工程稳定性。",
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-400" aria-hidden="true" />,
    tag: "Context System",
    title: "智能上下文压缩与持久账本",
    desc: "多级 Context Compaction 与不可篡改的 Run Ledger 审计流水，在极端超长上下文中维持零幻觉与记忆精准回溯。",
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-400" aria-hidden="true" />,
    tag: "Dual Surface",
    title: "TUI 与 Desktop 纯原生同构",
    desc: "基于 packages/core 统一 NDJSON 协议分发，极客级终端 Fast-Ink 与沉浸式 Electron 桌面端随时无缝同步热切换。",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" aria-hidden="true" />,
    tag: "Safety Runtime",
    title: "多维 OS 级安全沙箱与拦截",
    desc: "对文件写操作、进程派生与外部通信实施零信任防护，搭配 Human-in-the-loop 审批机制，安全与效率兼备。",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-400" aria-hidden="true" />,
    tag: "Extensibility",
    title: "L0 Engine SPI 开放架构",
    desc: "零修改解耦接入 DSH / DeepSeek / 本地私有模型等定制扩展运行时，SPI 插件式组装让异构引擎自由进化。",
  },
];

const FeatureCard: React.FC<{ item: typeof features[0]; idx: number }> = ({ item, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="apple-card h-full p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all duration-300 relative overflow-hidden group"
      >
        {/* Spotlight dynamic radial glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: mousePos.opacity,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(41, 151, 255, 0.12), transparent 80%)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-start gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 group-hover:border-blue-500/40 group-hover:bg-neutral-800 transition-colors">
            {item.icon}
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1A6]">
              {item.tag}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight">
            {item.title}
          </h3>
        </div>
        <div className="relative z-10">
          <p className="text-sm text-[#D1D1D6] leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto relative" aria-labelledby="features-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="features-heading" className="text-xs uppercase tracking-wider text-blue-400 font-mono mb-3 font-semibold">
          ENGINEERING FIRST
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          专为高强度研发场景构建的底层矩阵
        </p>
        <p className="text-[#A1A1A6] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          告别散乱的脚本组装，FAST 提供生产级系统韧性、严谨的工程边界与丝滑的开发者交互。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <FeatureCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};
