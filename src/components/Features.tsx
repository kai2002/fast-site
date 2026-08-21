import React, { useRef, useState } from 'react';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Users, Cpu, Layers, BrainCircuit, ShieldCheck, Sparkles, Network } from 'lucide-react';

const pillars = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    tag: "Pillar 01 • Dual-Mode",
    title: "编程智能体 + Work 智能体双模融通",
    desc: "向下深潜源码工程（AST 图谱探索、Disruptor 高并发、ThreadSanitizer 死锁证明），向上统摄企业业务交付（跨部门协同、长程规划、合规审计）。",
    badge: "Coding × Work",
    takeaway: "告别 90% 的幻觉与重试，每次交付附带形式化验证证据",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" aria-hidden="true" />,
    tag: "Pillar 02 • Team & Goal",
    title: "多智能体协作与虚拟团队 (Virtual Team)",
    desc: "告别单打独斗的 Prompt 交互。按需编排「执行架构师 ➔ 严苛质检员 ➔ 交付总结者」虚拟团队，以可验证 Goal DAG 驱动刚性交付闭环。",
    badge: "Executor-Verifier-Summarizer",
    takeaway: "未通过质检的代码绝不流入生产产物，刚性验收闭环",
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" aria-hidden="true" />,
    tag: "Pillar 03 • Poly-Engine",
    title: "开放异构多引擎纳管与任务路由",
    desc: "基于 L0 SPI 开放标准解耦模型层。原生纳管自研极速引擎、DeepSeek Harness (V3/R1)、π-Engine、Codex、Claude Code 及本地私有化模型。",
    badge: "零厂商锁定",
    takeaway: "动态按需路由至最优模型，兼顾质量、速度与 Token 成本",
  },
  {
    icon: <Network className="w-6 h-6 text-cyan-400" aria-hidden="true" />,
    tag: "Pillar 04 • Distributed",
    title: "原生分布式 Agent 分片集群",
    desc: "采用 RunShard / SessionShard / MetaShard 三级分片拓扑。天然具备海量长连接并发无锁隔离、水平弹性伸缩与宕机毫秒级自愈能力。",
    badge: "Native Sharding",
    takeaway: "单节点宕机零数据丢失，高并发无锁隔离与毫秒级容灾",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" aria-hidden="true" />,
    tag: "Pillar 05 • Surface Matrix",
    title: "全阶接触点：GUI + TUI + SDK",
    desc: "极客终端 Fast-Ink TUI 毫秒级冷启动，桌面 GUI 沉浸式拓扑与可视化 Diff 审查，企业级 SDK 一行代码嵌入内部 DevSecOps / CI/CD 平台。",
    badge: "Multi-Tier Surface",
    takeaway: "从极客命令行到企业级架构中台，全生命周期无缝适配",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-amber-400" aria-hidden="true" />,
    tag: "Pillar 06 • Enterprise Brain",
    title: "自研 Memory 自主进化与本体知识引擎",
    desc: "三层 Memory（事件反思 / 概念提炼 / SOP 内化）实现终身学习闭环；结合业务本体论（Ontology）将冷数据转化为业务实体因果网络，构建数字孪生企业大脑。",
    badge: "Ontology & Self-Evolution",
    takeaway: "越用越懂业务，企业智力资产永不流失并自主进化",
  },
];

const FeatureCard: React.FC<{ item: typeof pillars[0]; idx: number }> = ({ item, idx }) => {
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

  const isHighlighted = idx === 0 || idx === 5;

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
        className={`apple-card h-full p-6 sm:p-7 bg-neutral-900/50 border rounded-3xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
          isHighlighted ? 'border-blue-500/30' : 'border-neutral-800'
        }`}
      >
        {/* Dynamic Border Beam for Highlighted Cards */}
        {isHighlighted && (
          <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-60 animate-[pulse_4s_ease-in-out_infinite]" />
          </div>
        )}

        {/* Spotlight dynamic radial glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
          style={{
            opacity: mousePos.opacity,
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(41, 151, 255, 0.12), transparent 80%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="p-2.5 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 group-hover:border-blue-500/40 group-hover:bg-neutral-800 transition-colors">
              {item.icon}
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {item.badge}
            </span>
          </div>

          <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1A6] mb-1">
            {item.tag}
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight mb-2.5">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#D1D1D6] leading-relaxed mb-4">
            {item.desc}
          </p>
        </div>

        <div className="relative z-10 pt-3.5 border-t border-neutral-800/60 mt-2 flex flex-col gap-1.5">
          <div className="text-[11px] text-emerald-400/90 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">{item.takeaway}</span>
          </div>
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
          SYSTEM ARCHITECTURE
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          支撑下一代智能工程的六大核心支柱
        </p>
        <p className="text-[#A1A1A6] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          告别散乱的脚本组装与脆弱的 Prompt，FAST 以企业级分布式韧性、双模融通与本体知识引擎，定义全新标准。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {pillars.map((item, idx) => (
          <FeatureCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};
