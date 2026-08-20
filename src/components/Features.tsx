import React from 'react';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Workflow, Cpu, Database, Split, Activity } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    tag: "Core Engine",
    title: "Actor 模型状态机分片",
    desc: "采用 RunShard / SessionShard / MetaShard 三级 Actor 分片架构，支持高并发隔离与无锁状态安全流转，吞吐与吞吐弹性跃升。",
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-400" />,
    tag: "Delivery Protocol",
    title: "可验证目标体系 (Goal DAG)",
    desc: "内置 Executor、Verifier 与 Summarizer 自动化交付闭环。未通过质检的代码绝不流入最终产物，保障交付精度与工程稳定性。",
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    tag: "Context System",
    title: "智能上下文压缩与持久账本",
    desc: "多级 Context Compaction 与不可篡改的 Run Ledger 审计流水，在极端超长上下文中维持零幻觉与记忆精准回溯。",
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    tag: "Dual Surface",
    title: "TUI 与 Desktop 纯原生同构",
    desc: "基于 packages/core 统一 NDJSON 协议分发，极客级终端 Fast-Ink 与沉浸式 Electron 桌面端随时无缝同步热切换。",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    tag: "Safety Runtime",
    title: "多维 OS 级安全沙箱与拦截",
    desc: "对文件写操作、进程派生与外部通信实施零信任防护，搭配 Human-in-the-loop 审批机制，安全与效率兼备。",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    tag: "Extensibility",
    title: "L0 Engine SPI 开放架构",
    desc: "零修改解耦接入 DSH / DeepSeek / 本地私有模型等定制扩展运行时，SPI 插件式组装让异构引擎自由进化。",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-xs uppercase tracking-widest text-blue-500 font-mono mb-3">
          ENGINEERING FIRST
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          专为高强度研发场景构建的底层矩阵
        </p>
        <p className="text-neutral-400 text-base sm:text-lg">
          告别散乱的脚本组装，FAST 提供生产级系统韧性、严谨的工程边界与丝滑的开发者交互。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="apple-card h-full p-6 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl hover:border-neutral-600 transition-all duration-300">
              <div className="flex flex-col items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-800/60 border border-neutral-700/50">
                  {item.icon}
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>
              <div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
