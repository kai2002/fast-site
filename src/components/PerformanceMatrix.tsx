import React from 'react';
import { Card, Chip } from '@heroui/react';
import { Check, X, Minus } from 'lucide-react';

export const PerformanceMatrix: React.FC = () => {
  const comparison = [
    {
      feature: '运行核心架构',
      fast: 'Actor 模型三级分片 (Engine / Shard)',
      traditional: '单一进程循环 / 无序回调',
      advantage: true,
    },
    {
      feature: '交付可验证性 (Goal Protocol)',
      fast: '内置 Executor-Verifier-Summarizer 刚性闭环',
      traditional: '仅依赖 Prompt 自我审查',
      advantage: true,
    },
    {
      feature: '状态持久化与审计',
      fast: '不可篡改 Run Ledger & 多级压缩',
      traditional: '简单内存或文本追加',
      advantage: true,
    },
    {
      feature: '协议与双端体验',
      fast: '统一 NDJSON 驱动 TUI / Desktop',
      traditional: '终端与桌面功能割裂',
      advantage: true,
    },
    {
      feature: '扩展模型',
      fast: 'L0 SPI 开放架构 (支持 DSH / 异构引擎)',
      traditional: '强绑定特定供应商 API',
      advantage: true,
    },
    {
      feature: '冷启动与内存开销',
      fast: '< 100ms 启动 / ~40MB 基础常驻',
      traditional: '重度依赖 Node 环境 / 300MB+',
      advantage: true,
    },
  ];

  return (
    <section id="matrix" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-3">
          PERFORMANCE & BENCHMARKS
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          硬核指标对比
        </p>
        <p className="text-neutral-400 text-base sm:text-lg">
          用工程系统的标准审视 Agent 工具。FAST 为严苛质量与极致效能而生。
        </p>
      </div>

      <div className="apple-card rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950/60 p-2 sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="py-4 px-6 text-xs uppercase font-mono text-neutral-400">能力维度</th>
                <th className="py-4 px-6 text-xs uppercase font-mono text-blue-400 font-semibold bg-blue-500/5 rounded-t-xl">
                  FAST Engine 2.0
                </th>
                <th className="py-4 px-6 text-xs uppercase font-mono text-neutral-500">传统 Agent 工具</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-sm">
              {comparison.map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-900/30 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">{item.feature}</td>
                  <td className="py-4 px-6 text-blue-200 font-medium bg-blue-500/5">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item.fast}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="flex items-center gap-2">
                      <Minus className="w-4 h-4 text-neutral-600 shrink-0" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
