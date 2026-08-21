import React, { useState } from 'react';
import { Check, Minus, Sparkles } from 'lucide-react';

export const PerformanceMatrix: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparison = [
    {
      feature: '运行核心架构',
      fast: 'Actor 模型三级分片 (Run / Session / Meta)',
      traditional: '单一进程循环 / 无序回调',
    },
    {
      feature: '交付可验证性 (Goal DAG)',
      fast: '内置 Executor-Verifier-Summarizer 刚性闭环',
      traditional: '仅依赖 Prompt 自我审查',
    },
    {
      feature: '状态持久化与审计',
      fast: '不可篡改 Run Ledger & 多级压缩',
      traditional: '简单内存或文本追加',
    },
    {
      feature: '协议与双端体验',
      fast: '统一 NDJSON 驱动 TUI / Desktop 纯同构',
      traditional: '终端与桌面功能割裂',
    },
    {
      feature: '扩展模型',
      fast: 'L0 SPI 开放架构 (支持 DSH / 异构引擎)',
      traditional: '强绑定特定供应商 API',
    },
    {
      feature: '冷启动与常驻开销',
      fast: '< 100ms 启动 / ~40MB 基础常驻',
      traditional: '重度依赖 Node 环境 / 300MB+',
    },
  ];

  return (
    <section id="matrix" className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="matrix-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="matrix-heading" className="text-xs uppercase tracking-wider text-indigo-400 font-mono mb-3 font-semibold">
          PERFORMANCE & BENCHMARKS
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          硬核系统指标对比
        </p>
        <p className="text-[#A1A1A6] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          用工程系统的严苛标准审视 Agent 工具。FAST 为交付确定性与极致效能而生。
        </p>
      </div>

      {/* Desktop Table View (md and above) */}
      <div className="hidden md:block apple-card rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950/70 p-6 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">FAST 引擎与传统 Agent 工具特性指标全景对比表</caption>
          <thead>
            <tr className="border-b border-neutral-800">
              <th scope="col" className="py-4 px-6 text-xs uppercase font-mono text-[#A1A1A6]">能力维度</th>
              <th
                scope="col"
                className="py-4 px-6 text-xs uppercase font-mono text-blue-400 font-semibold bg-blue-500/10 rounded-t-2xl border-t border-x border-blue-500/20"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FAST Engine 2.0</span>
                </div>
              </th>
              <th scope="col" className="py-4 px-6 text-xs uppercase font-mono text-[#A1A1A6]">传统 Agent 工具</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-900 text-sm">
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
                  <span>FAST Engine 2.0</span>
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
