import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Monitor, Code2, GitCommit, FileCode, CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';

interface StreamCommit {
  id: string;
  hash: string;
  title: string;
  shard: string;
  diffCode: string[];
}

const COMMITS: StreamCommit[] = [
  {
    id: 'c-1',
    hash: '0x8fa1',
    title: 'RingBuffer.scala - 注入内存屏障',
    shard: 'RunShard #401',
    diffCode: [
      '+ final class LockFreeOrderBook(capacity: Int) extends RingBuffer {',
      '+   private val head = new AtomicLong(0L)',
      '+   private val tail = new AtomicLong(0L)',
      '    // Zero-copy event dispatching & memory fence',
      '+   @inline def offer(order: Order): Boolean = {',
      '+     VarHandle.releaseFence()',
      '+     true',
      '+   }',
      '  }',
    ],
  },
  {
    id: 'c-2',
    hash: '0x9be2',
    title: 'DisruptorTopology.scala - Actor 状态机分片',
    shard: 'SessionShard #12',
    diffCode: [
      '+ trait EngineActorShard extends Actor {',
      '+   override def receive: Receive = {',
      '+     case Exec(goal) => persistRunLedger(goal)',
      '+     case Checkpoint => stateSnapshot.flush()',
      '+   }',
      '+ }',
    ],
  },
  {
    id: 'c-3',
    hash: '0x4cd3',
    title: 'BenchmarkVerifier.scala - 形式化验证与压力证明',
    shard: 'MetaShard #01',
    diffCode: [
      '+ object BenchmarkVerifier extends Suite {',
      '+   test("verify 100k TPS latency bounds") {',
      '+     assert(histogram.getP99 <= 1.2.micros)',
      '+     assert(sanitizer.dataRaces == 0)',
      '+   }',
      '+ }',
    ],
  },
];

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tui' | 'desktop'>('tui');
  const [selectedCommit, setSelectedCommit] = useState<StreamCommit>(COMMITS[0]);

  return (
    <section id="cli" className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="cli-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="cli-heading" className="text-xs uppercase tracking-wider text-emerald-400 font-mono mb-3 font-semibold">
          UNIFIED EXPERIENCE
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          极客终端与现代桌面，随心所欲
        </p>
        <p className="text-[#A1A1A6] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          同一套核心引擎，双重极致形态。在字符流与图形化之间自由穿梭。
        </p>
      </div>

      <div className="apple-card rounded-3xl overflow-hidden border border-neutral-800 bg-[#09090b] shadow-2xl">
        {/* Top Window Bar with Layout Transitions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" aria-hidden="true" />
            <span className="text-xs text-[#A1A1A6] font-mono ml-2">
              {activeTab === 'tui' ? 'fast-tui — zsh — 120x35' : 'FAST Desktop — Native GUI Workstation'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-xl border border-neutral-800" role="tablist" aria-label="界面视图模式">
            <button
              role="tab"
              id="tab-tui"
              aria-selected={activeTab === 'tui'}
              aria-controls="panel-tui"
              onClick={() => setActiveTab('tui')}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none ${
                activeTab === 'tui' ? 'text-white' : 'text-[#A1A1A6] hover:text-white'
              }`}
            >
              {activeTab === 'tui' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-neutral-800 rounded-lg shadow-sm"
                  transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Fast-Ink TUI</span>
              </span>
            </button>
            <button
              role="tab"
              id="tab-desktop"
              aria-selected={activeTab === 'desktop'}
              aria-controls="panel-desktop"
              onClick={() => setActiveTab('desktop')}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none ${
                activeTab === 'desktop' ? 'text-white' : 'text-[#A1A1A6] hover:text-white'
              }`}
            >
              {activeTab === 'desktop' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-neutral-800 rounded-lg shadow-sm"
                  transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Desktop GUI</span>
              </span>
            </button>
          </div>
        </div>

        {/* Content Body with Animated Switch */}
        <div className="p-6 sm:p-10 font-mono text-sm min-h-[380px]">
          <AnimatePresence mode="wait">
            {activeTab === 'tui' ? (
              <motion.div
                key="tui-panel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                role="tabpanel"
                id="panel-tui"
                aria-labelledby="tab-tui"
                className="space-y-4 text-[#D1D1D6] leading-relaxed"
              >
                <div className="text-[#A1A1A6]">$ fast goal --name &quot;HFT Order Book&quot; --acceptance &quot;latency &lt; 2us&quot;</div>
                <div className="text-blue-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Initialized GoalRun [ID: g-8f92a10] using @team/quant-core</span>
                </div>
                
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#A1A1A6] border-b border-neutral-900 pb-2">
                    <span className="font-semibold">DAG WORKFLOW PIPELINE</span>
                    <span className="text-emerald-400">3 NODES REGISTERED</span>
                  </div>
                  <div className="text-xs text-[#D1D1D6]">
                    <span className="text-indigo-400 font-bold">1. [Executor]</span> WorkspaceCodingAgent ➔ 生成 lock-free RingBuffer.scala
                  </div>
                  <div className="text-xs text-[#D1D1D6]">
                    <span className="text-purple-400 font-bold">2. [Verifier]</span> BenchmarkVerificationAgent ➔ 运行 JMH 基准测试
                  </div>
                  <div className="text-xs text-[#D1D1D6]">
                    <span className="text-amber-400 font-bold">3. [Summarizer]</span> AuditSummarizer ➔ 生成发布证据与签名
                  </div>
                </div>

                <div className="text-emerald-400 flex items-center gap-2 font-medium">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verifier Verdict: [PASS] - Benchmark completed with 1.42μs avg latency.</span>
                </div>
                <div className="text-[#A1A1A6]">
                  ✨ Summary delivered to docs/reports/orderbook-v1.md. Goal completed in 4.2s.
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="desktop-panel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                role="tabpanel"
                id="panel-desktop"
                aria-labelledby="tab-desktop"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Left Shard Stream selector */}
                <div className="col-span-1 bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-3">
                  <div className="text-xs font-bold text-[#A1A1A6] uppercase tracking-wider font-mono flex items-center justify-between">
                    <span>Session Stream</span>
                    <span className="text-emerald-400 text-[11px] font-normal">Active</span>
                  </div>
                  <div className="space-y-2">
                    {COMMITS.map((c) => {
                      const isSelected = selectedCommit.id === c.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCommit(c)}
                          className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all ${
                            isSelected
                              ? 'bg-blue-500/10 border-blue-500/40 text-blue-200 shadow-sm'
                              : 'bg-neutral-900/60 border-neutral-800 text-[#A1A1A6] hover:text-white hover:border-neutral-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[11px] text-blue-400">{c.hash}</span>
                            <span className="text-[10px] text-neutral-500">{c.shard}</span>
                          </div>
                          <div className="truncate font-medium">{c.title}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Diff & AST Inspector */}
                <div className="col-span-2 bg-neutral-950 p-5 rounded-xl border border-neutral-800 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#A1A1A6] mb-3 uppercase tracking-wider font-mono flex items-center justify-between border-b border-neutral-900 pb-2">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-3.5 h-3.5 text-blue-400" />
                        <span>Canvas & Diff Inspector</span>
                      </div>
                      <span className="text-neutral-500 text-[11px] font-mono">{selectedCommit.shard}</span>
                    </div>
                    <div className="text-xs space-y-1.5 font-mono overflow-x-auto py-2">
                      {selectedCommit.diffCode.map((line, idx) => (
                        <div
                          key={idx}
                          className={
                            line.startsWith('+')
                              ? 'text-emerald-400'
                              : line.startsWith('-')
                              ? 'text-red-400'
                              : 'text-neutral-500'
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-neutral-900 text-xs text-neutral-400 flex items-center justify-between">
                    <span>Deterministic AST Verification: Passed</span>
                    <span className="text-blue-400">Ledger Sign: OK</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
