import React, { useState } from 'react';
import { Card, Button, Progress, Chip } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle2, ShieldAlert, Cpu, Terminal, GitBranch, ArrowRight, Activity, Sparkles } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  role: 'executor' | 'verifier' | 'summarizer';
  status: 'pending' | 'running' | 'completed' | 'rejected';
  logs: string[];
}

export const InteractiveDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [simulatedPrompt, setSimulatedPrompt] = useState('构建一个高性能订单撮合引擎的内存拓扑，并自动化执行压力测试与死锁证明');

  const stages: Stage[] = [
    {
      id: 'step-1',
      name: '架构师与编码 Agent',
      role: 'executor',
      status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'running' : 'pending',
      logs: [
        '⚡ [ActorAgentChannel] 收到 Goal 初始化请求...',
        '🔍 [Explore] 扫描 workspace/quant/engine 拓扑与并发锁机制',
        '📝 [WorkspaceCoding] 采用无锁环形队列 (Disruptor 模式) 编写撮合流水线',
        '✨ 生成 4 个核心源文件并注入内存屏障',
      ],
    },
    {
      id: 'step-2',
      name: '严苛质检与形式化验证',
      role: 'verifier',
      status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'running' : 'pending',
      logs: [
        '🛡️ [GoalVerifier] 进入沙箱执行 100,000 TPS 并发压力测试',
        '🔬 [Check] 运行 ThreadSanitizer 内存争用检测... 无数据竞争',
        '✅ [Acceptance] 延迟指标 P99 < 1.2μs，验收标准 100% 达成',
      ],
    },
    {
      id: 'step-3',
      name: '智能总结与产物交付',
      role: 'summarizer',
      status: currentStep >= 3 ? 'completed' : currentStep === 3 ? 'running' : 'pending',
      logs: [
        '📊 [Summarizer] 汇总基准测试报告与可信审计日志',
        '📦 [Release] 生成生产级部署清单与架构拓扑文档',
        '🚀 目标状态转为 TERMINAL_PASS，完成交付',
      ],
    },
  ];

  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(1);

    setTimeout(() => {
      setCurrentStep(2);
    }, 1800);

    setTimeout(() => {
      setCurrentStep(3);
    }, 3600);

    setTimeout(() => {
      setIsRunning(false);
    }, 4800);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
  };

  return (
    <section id="interactive" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-3">
          LIVE WORKFLOW SIMULATOR
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          亲身体验 FAST 闭环交付引擎
        </p>
        <p className="text-neutral-400 text-base sm:text-lg">
          点击下方运行，观察 FAST 如何以分布式状态机驱动三维智能体流水线协同推进。
        </p>
      </div>

      <div className="bg-neutral-950/80 border border-neutral-800/90 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 border-b border-neutral-900">
          <div className="flex-1 flex items-center gap-3 bg-neutral-900/90 px-4 py-3 rounded-2xl border border-neutral-800">
            <Terminal className="w-5 h-5 text-blue-400 shrink-0" />
            <input
              type="text"
              value={simulatedPrompt}
              onChange={(e) => setSimulatedPrompt(e.target.value)}
              className="bg-transparent text-sm text-neutral-200 outline-none w-full font-mono placeholder:text-neutral-600"
              placeholder="输入目标任务描述..."
            />
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handleRun}
              disabled={isRunning}
              className={`font-semibold px-6 rounded-xl transition-all shadow-lg ${
                isRunning
                  ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20 active:scale-95'
              }`}
              startContent={isRunning ? <Activity className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
            >
              {isRunning ? '引擎计算中...' : '启动可验证流水线'}
            </Button>
            <Button
              onClick={handleReset}
              variant="flat"
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-xl"
              isIconOnly
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Workflow Stages Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`p-5 rounded-2xl border transition-all duration-500 ${
                stage.status === 'running'
                  ? 'bg-blue-950/20 border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : stage.status === 'completed'
                  ? 'bg-emerald-950/15 border-emerald-500/30'
                  : 'bg-neutral-900/30 border-neutral-900/60 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  STAGE 0{idx + 1} • {stage.role}
                </span>
                {stage.status === 'completed' && (
                  <Chip size="sm" color="success" variant="flat" className="text-xs h-5">
                    已通过
                  </Chip>
                )}
                {stage.status === 'running' && (
                  <Chip size="sm" color="primary" variant="dot" className="text-xs h-5">
                    运行中
                  </Chip>
                )}
                {stage.status === 'pending' && (
                  <Chip size="sm" variant="flat" className="text-xs h-5 bg-neutral-800 text-neutral-400">
                    等待依赖
                  </Chip>
                )}
              </div>

              <h4 className="text-base font-medium text-white mb-4 flex items-center gap-2">
                {stage.name}
              </h4>

              {/* Console log outputs */}
              <div className="space-y-2 min-h-[140px] bg-black/60 p-3.5 rounded-xl border border-neutral-900 font-mono text-xs text-neutral-400">
                {stage.status === 'pending' && (
                  <span className="text-neutral-600 italic">等待上游节点完成状态封存...</span>
                )}
                {stage.status !== 'pending' &&
                  stage.logs.map((log, lIdx) => (
                    <motion.div
                      key={lIdx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: lIdx * 0.1 }}
                      className="leading-relaxed"
                    >
                      {log}
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>Actor System: Shard Cluster Online</span>
            <span className="text-neutral-700">|</span>
            <span>Memory Consumption: 42MB</span>
          </div>
          <div className="text-blue-400 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Deterministic Verified Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
