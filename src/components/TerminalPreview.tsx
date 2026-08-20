import React, { useState } from 'react';
import { Card, Button, Tabs, Tab } from '@heroui/react';
import { Terminal, Monitor, Sparkles, Check, Copy, Code2 } from 'lucide-react';

export const TerminalPreview: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('tui');

  const copyCommand = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cli" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-3">
          UNIFIED EXPERIENCE
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          极客终端与现代桌面，随心所欲
        </p>
        <p className="text-neutral-400 text-base sm:text-lg">
          同一套核心引擎，双重极致形态。在字符流与图形化之间自由穿梭。
        </p>
      </div>

      <div className="apple-card rounded-3xl overflow-hidden border border-neutral-800 bg-[#09090b] shadow-2xl">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-neutral-500 font-mono ml-2">fast-terminal — zsh — 120x35</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('tui')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'tui'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Fast-Ink TUI
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'desktop'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              Desktop GUI
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 font-mono text-sm">
          {activeTab === 'tui' ? (
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <div className="text-neutral-500">$ fast goal --name &quot;HFT Order Book&quot; --acceptance &quot;latency &lt; 2us&quot;</div>
              <div className="text-blue-400 font-semibold">
                ✔ Initialized GoalRun [ID: g-8f92a10] using @team/quant-core
              </div>
              
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-850 space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-900 pb-2">
                  <span>DAG WORKFLOW PLAN</span>
                  <span className="text-emerald-400">3 NODES REGISTERED</span>
                </div>
                <div className="text-xs text-neutral-300">
                  <span className="text-indigo-400 font-bold">1. [Executor]</span> WorkspaceCodingAgent ➔ 生成 lock-free RingBuffer.scala
                </div>
                <div className="text-xs text-neutral-300">
                  <span className="text-purple-400 font-bold">2. [Verifier]</span> BenchmarkVerificationAgent ➔ 运行 JMH 基准测试
                </div>
                <div className="text-xs text-neutral-300">
                  <span className="text-amber-400 font-bold">3. [Summarizer]</span> AuditSummarizer ➔ 生成发布证据与签名
                </div>
              </div>

              <div className="text-emerald-400">
                ⚡ Verifier Verdict: [PASS] - Benchmark completed with 1.42μs avg latency.
              </div>
              <div className="text-neutral-400">
                ✨ Summary delivered to docs/reports/orderbook-v1.md. Goal completed in 4.2s.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 bg-neutral-950 p-4 rounded-xl border border-neutral-850">
                <div className="text-xs font-bold text-neutral-400 mb-3 uppercase tracking-wider">Session Stream</div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                    Active Run #401 (Auto-compaction on)
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                    Memory Ledger: 24 commits
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                    Live Diagnostics: 0 warnings
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-neutral-950 p-4 rounded-xl border border-neutral-850">
                <div className="text-xs font-bold text-neutral-400 mb-3 uppercase tracking-wider">Canvas & Diff Inspector</div>
                <div className="text-xs text-neutral-400 space-y-1 font-mono">
                  <div className="text-emerald-400">+ final class LockFreeOrderBook(capacity: Int) extends RingBuffer &#123;</div>
                  <div className="text-emerald-400">+   private val head = new AtomicLong(0L)</div>
                  <div className="text-emerald-400">+   private val tail = new AtomicLong(0L)</div>
                  <div className="text-neutral-600">    // Zero-copy event dispatching</div>
                  <div className="text-emerald-400">+   @inline def offer(order: Order): Boolean = ...</div>
                  <div className="text-neutral-500">  &#125;</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
