import React, { useState } from 'react';
import { Check, Minus, Sparkles, ShieldCheck, Brain, Cpu, Layers } from 'lucide-react';

export const PerformanceMatrix: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparison = [
    {
      feature: '智能体业务模态',
      fast: '双模融通 (Coding 源码级工程 + Work 企业业务协同)',
      traditional: '单一代码补全 或 纯文本对话助理，无法兼顾工程与业务',
    },
    {
      feature: '协同与交付机制',
      fast: '虚拟团队 (Executor-Verifier-Summarizer) + Goal DAG 刚性质检',
      traditional: '单智能体单打独斗 / 无验收标准，依靠 Prompt 猜测与幻觉重试',
    },
    {
      feature: '模型运行时架构',
      fast: 'L0 SPI 开放解耦 (自研/DeepSeek/π/Codex/Claude/私有化)',
      traditional: '强绑定特定商业闭源 API / 无法热插拔与私有化替换',
    },
    {
      feature: '底层分布式拓扑',
      fast: '原生分布式 Agent 分片集群 (Run / Session / Meta)',
      traditional: '单机进程循环 / 单点崩溃导致上下文与事务全部丢失',
    },
    {
      feature: '记忆与知识底座',
      fast: '自研三层 Memory 终身学习 + 业务本体论 (Ontology) 数字孪生',
      traditional: '简单向量 RAG 检索 / 每次启动皆为白纸，缺乏概念与规程沉淀',
    },
    {
      feature: '开源与接入形态',
      fast: 'Apache-2.0 开源 + TUI / GUI / 企业 SDK 全阶支持',
      traditional: '黑盒 SaaS 封装 / 无法内嵌企业内部 DevSecOps 流水线',
    },
  ];

  return (
    <section id="matrix" className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="matrix-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="matrix-heading" className="text-xs uppercase tracking-wider text-indigo-400 font-mono mb-3 font-semibold">
          SYSTEM MATRIX & COMPARISON
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          硬核系统全景对比
        </p>
        <p className="text-[#A1A1A6] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          用现代分布式工程系统的严苛标准，审视智能体操作系统。FAST 为工业级交付确定性而生。
        </p>
      </div>

      {/* Desktop Table View (md and above) */}
      <div className="hidden md:block apple-card rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950/70 p-6 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">FAST 引擎与传统 Agent 工具特性指标全景对比表</caption>
          <thead>
            <tr className="border-b border-neutral-800">
              <th scope="col" className="py-3.5 px-6 text-xs uppercase font-mono text-[#A1A1A6]">核心维度</th>
              <th
                scope="col"
                className="py-3.5 px-6 text-xs uppercase font-mono text-blue-400 font-semibold bg-blue-500/10 rounded-t-2xl border-t border-x border-blue-500/20"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FAST Agent OS (Open Source)</span>
                </div>
              </th>
              <th scope="col" className="py-3.5 px-6 text-xs uppercase font-mono text-[#A1A1A6]">传统 Agent / AI 工具</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-900 text-xs sm:text-sm">
            {comparison.map((item, idx) => {
              const isHovered = hoveredRow === idx;
              return (
                <tr
                  key={idx}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`transition-colors ${
                    isHovered ? 'bg-neutral-900/40' : ''
                  }`}
                >
                  <th scope="row" className="py-4 px-6 font-medium text-white font-sans">{item.feature}</th>
                  <td className="py-4 px-6 text-blue-100 font-medium bg-blue-500/10 border-x border-blue-500/20">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                      </div>
                      <span>{item.fast}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#A1A1A6]">
                    <div className="flex items-center gap-2">
                      <Minus className="w-4 h-4 text-neutral-500 shrink-0" aria-hidden="true" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Flow View (below md) */}
      <div className="md:hidden space-y-4">
        {comparison.map((item, idx) => (
          <div key={idx} className="apple-card p-5 rounded-2xl border border-neutral-800 bg-neutral-900/50">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center justify-between border-b border-neutral-800/80 pb-2">
              <span>{item.feature}</span>
              <span className="text-[11px] font-mono text-blue-400">#0{idx + 1}</span>
            </h3>
            
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/30">
                <div className="text-blue-400 font-mono font-semibold mb-1 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>FAST Agent OS</span>
                </div>
                <div className="text-neutral-100 font-medium leading-relaxed pl-5">
                  {item.fast}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-850">
                <div className="text-[#A1A1A6] font-mono font-medium mb-1 flex items-center gap-1.5">
                  <Minus className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
                  <span>传统工具</span>
                </div>
                <div className="text-[#A1A1A6] leading-relaxed pl-5">
                  {item.traditional}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
