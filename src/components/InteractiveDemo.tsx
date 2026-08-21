import React, { useState, useEffect, useRef } from 'react';
import { Button, Chip } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Activity, Sparkles, CheckCircle2, Terminal, ArrowRight, Pause, FastForward, ShieldCheck } from 'lucide-react';

interface StagePreset {
  id: string;
  name: string;
  role: 'executor' | 'verifier' | 'summarizer';
  logs: string[];
}

interface Scenario {
  id: string;
  label: string;
  prompt: string;
  stages: StagePreset[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'quant-engine',
    label: '量化高频撮合引擎',
    prompt: '构建高性能订单撮合引擎的内存拓扑，并自动化执行压力测试与死锁证明',
    stages: [
      {
        id: 'stage-1',
        name: '架构与编码 Agent',
        role: 'executor',
        logs: [
          '⚡ [ActorAgentChannel] 收到 Goal 初始化请求: goal_id=g-8f92a10',
          '🔍 [Explore] 扫描 workspace/quant/engine 拓扑与并发锁机制',
          '📝 [WorkspaceCoding] 采用无锁环形队列 (Disruptor 模式) 编写撮合流水线',
          '✨ 生成 4 个核心源文件并注入内存屏障 (Memory Fence)',
        ],
      },
      {
        id: 'stage-2',
        name: '沙箱压力与验证 Agent',
        role: 'verifier',
        logs: [
          '🛡️ [GoalVerifier] 进入 OS 隔离沙箱执行 100,000 TPS 并发压力测试',
          '🔬 [Sanitizer] 运行 ThreadSanitizer 内存争用检测... 无数据竞争',
          '✅ [Acceptance] 延迟指标 P99 < 1.2μs，验收标准 100% 达成',
        ],
      },
      {
        id: 'stage-3',
        name: '总结与账本封存 Agent',
        role: 'summarizer',
        logs: [
          '📊 [Summarizer] 汇总基准测试报告与可信审计日志',
          '📦 [Release] 生成生产级部署清单与架构拓扑文档',
          '🚀 目标状态转为 TERMINAL_PASS，完成交付',
        ],
      },
    ],
  },
  {
    id: 'actor-heal',
    label: '分布式 Actor 崩溃自愈',
    prompt: '模拟 SessionShard 节点宕机注入，验证 MetaShard 的心跳探活与无损状态拉起',
    stages: [
      {
        id: 'stage-1',
        name: '故障注入与拓扑编排',
        role: 'executor',
        logs: [
          '⚡ [ChaosMesh] 向 SessionShard#3 注入 SIGKILL 终止信号',
          '🔍 [ShardMonitor] 检测到心跳丢失，开始执行拓扑隔离',
          '📝 [ActorSupervisor] 锁定全局路由并提取 Checkpoint #1042 快照',
        ],
      },
      {
        id: 'stage-2',
        name: '一致性核对与重放验证',
        role: 'verifier',
        logs: [
          '🛡️ [LedgerAudit] 比对持久化 Run Ledger 事务日志流',
          '🔬 [ReplayEngine] 重放未提交事务队列，校验 0 数据丢失',
          '✅ [HealVerdict] 新实例在 14ms 内就绪，无缝恢复会话',
        ],
      },
      {
        id: 'stage-3',
        name: '自愈报告与可观测归档',
        role: 'summarizer',
        logs: [
          '📊 [IncidentSummarizer] 生成 RTO/RPO 达标自愈报告',
          '📦 [Metrics] 导出 Prometheus 探针记录与 Grafana 拓扑',
          '🚀 集群恢复全绿状态，达成高可用性 SLA 目标',
        ],
      },
    ],
  },
  {
    id: 'sandbox-intercept',
    label: 'OS 级沙箱越界拦截',
    prompt: '执行不受信第三方扩展插件，防御任意文件篡改与未授权网络反弹',
    stages: [
      {
        id: 'stage-1',
        name: '插件加载与行为探针',
        role: 'executor',
        logs: [
          '⚡ [PluginLoader] 尝试在独立命名空间挂载 untrusted-plugin.wasm',
          '🔍 [SyscallHook] 捕获试图读取 /etc/passwd 与非工作区文件的行为',
          '📝 [PolicyEngine] 触发安全策略拦截级联 (Zero-Trust L0)',
        ],
      },
      {
        id: 'stage-2',
        name: '拦截审计与形式化证明',
        role: 'verifier',
        logs: [
          '🛡️ [SandboxGuard] 阻断非法系统调用，隔离对应 Worker 线程',
          '🔬 [SecurityAudit] 生成入侵证据签名 SHA256: e3b0c44298fc...',
          '✅ [SecurityVerdict] 越界操作 100% 拦截，工作区无污染',
        ],
      },
      {
        id: 'stage-3',
        name: '安全审计与告警处置',
        role: 'summarizer',
        logs: [
          '📊 [SecOpsSummary] 写入安全审计日志与阻断遥测流水',
          '📦 [SecurityNotice] 触发 Human-in-the-loop 告警处置建议',
          '🚀 安全策略有效阻断恶意行为，流水线安全闭环',
        ],
      },
    ],
  },
];

export const InteractiveDemo: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState<{ [key: string]: string[] }>({
    'stage-1': [],
    'stage-2': [],
    'stage-3': [],
  });
  const [statusMessage, setStatusMessage] = useState('就绪：选择场景或直接启动可验证流水线');
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimers = () => {
    timerRef.current.forEach((t) => clearTimeout(t));
    timerRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleSelectScenario = (sc: Scenario) => {
    clearTimers();
    setIsRunning(false);
    setCurrentStep(0);
    setSelectedScenario(sc);
    setDisplayedLogs({
      'stage-1': [],
      'stage-2': [],
      'stage-3': [],
    });
    setStatusMessage(`已切换至预设场景「${sc.label}」`);
  };

  const streamLogs = (stageId: string, fullLogs: string[], callback?: () => void) => {
    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < fullLogs.length) {
        const item = fullLogs[logIdx];
        setDisplayedLogs((prev) => ({
          ...prev,
          [stageId]: [...(prev[stageId] || []), item],
        }));
        logIdx++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 400);
  };

  const runStage = (step: number) => {
    if (step === 1) {
      setCurrentStep(1);
      setStatusMessage(`阶段 1: ${selectedScenario.stages[0].name} 正在执行...`);
      streamLogs('stage-1', selectedScenario.stages[0].logs, () => {
        const t = setTimeout(() => runStage(2), 500);
        timerRef.current.push(t);
      });
    } else if (step === 2) {
      setCurrentStep(2);
      setStatusMessage(`阶段 2: ${selectedScenario.stages[1].name} 正在严苛核验...`);
      streamLogs('stage-2', selectedScenario.stages[1].logs, () => {
        const t = setTimeout(() => runStage(3), 500);
        timerRef.current.push(t);
      });
    } else if (step === 3) {
      setCurrentStep(3);
      setStatusMessage(`阶段 3: ${selectedScenario.stages[2].name} 已生成最终交付证据与报告。`);
      streamLogs('stage-3', selectedScenario.stages[2].logs, () => {
        setIsRunning(false);
      });
    }
  };

  const handleRun = () => {
    if (isRunning) return;
    clearTimers();
    setIsRunning(true);
    setDisplayedLogs({ 'stage-1': [], 'stage-2': [], 'stage-3': [] });
    runStage(1);
  };

  const handleStepForward = () => {
    if (isRunning) return;
    if (currentStep === 0) {
      setCurrentStep(1);
      setStatusMessage(`单步执行: 阶段 1 ${selectedScenario.stages[0].name}`);
      setDisplayedLogs((prev) => ({ ...prev, 'stage-1': selectedScenario.stages[0].logs }));
    } else if (currentStep === 1) {
      setCurrentStep(2);
      setStatusMessage(`单步执行: 阶段 2 ${selectedScenario.stages[1].name}`);
      setDisplayedLogs((prev) => ({ ...prev, 'stage-2': selectedScenario.stages[1].logs }));
    } else if (currentStep === 2) {
      setCurrentStep(3);
      setStatusMessage(`单步执行: 阶段 3 ${selectedScenario.stages[2].name}`);
      setDisplayedLogs((prev) => ({ ...prev, 'stage-3': selectedScenario.stages[2].logs }));
    }
  };

  const handleReset = () => {
    clearTimers();
    setIsRunning(false);
    setCurrentStep(0);
    setDisplayedLogs({ 'stage-1': [], 'stage-2': [], 'stage-3': [] });
    setStatusMessage('已重置：等待启动目标验证流水线');
  };

  return (
    <section id="interactive" className="py-20 px-6 max-w-7xl mx-auto relative" aria-labelledby="demo-heading">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 id="demo-heading" className="text-xs uppercase tracking-wider text-cyan-400 font-mono mb-3 font-semibold">
          LIVE WORKFLOW SIMULATOR
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          亲身体验 FAST 闭环交付引擎
        </p>
        <p className="text-[#A1A1A6] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          选择不同工程场景，观察 FAST 如何以分布式状态机与 Token 流式输出驱动三维智能体流水线。
        </p>
      </div>

      {/* Scenario Pill Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8" role="group" aria-label="工程场景预设">
        {SCENARIOS.map((sc) => {
          const isSelected = selectedScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-blue-500/15 border-blue-500/50 text-blue-300 shadow-lg shadow-blue-500/10'
                  : 'bg-neutral-900/60 border-neutral-800 text-[#A1A1A6] hover:text-white hover:border-neutral-700'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-400 animate-pulse' : 'bg-neutral-600'}`} />
              <span>{sc.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-neutral-950/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 border-b border-neutral-900">
          <div className="flex-1 flex items-center gap-3 bg-neutral-900/90 px-4 py-3 rounded-2xl border border-neutral-800">
            <label htmlFor="goal-prompt-input" className="sr-only">流水线目标描述</label>
            <Terminal className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
            <input
              id="goal-prompt-input"
              type="text"
              readOnly
              value={selectedScenario.prompt}
              aria-label="流水线目标描述"
              className="bg-transparent text-sm text-[#F5F5F7] outline-none w-full font-mono placeholder:text-neutral-500"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              onClick={handleRun}
              disabled={isRunning}
              className={`font-semibold px-5 rounded-xl transition-all shadow-lg h-11 ${
                isRunning
                  ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20 active:scale-95'
              }`}
              startContent={isRunning ? <Activity className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Play className="w-4 h-4 fill-white" aria-hidden="true" />}
              aria-label={isRunning ? '流水线正在执行计算' : '启动可验证流水线'}
            >
              {isRunning ? '流式演练中...' : '启动闭环流水线'}
            </Button>
            <Button
              onClick={handleStepForward}
              disabled={isRunning || currentStep >= 3}
              variant="flat"
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-xl h-11 px-3 border border-neutral-800 text-xs font-mono flex items-center gap-1.5"
              aria-label="单步推进下一阶段"
            >
              <FastForward className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">单步调试</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="flat"
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-xl h-11 w-11 flex items-center justify-center border border-neutral-800"
              aria-label="重置流水线演示"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Workflow Stages Matrix with Dynamic Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 relative">
          {selectedScenario.stages.map((stage, idx) => {
            const isCompleted = currentStep > idx + 1 || (currentStep === 3 && idx === 2);
            const isCurrent = currentStep === idx + 1;
            const stageId = `stage-${idx + 1}`;
            const logs = displayedLogs[stageId] || [];

            return (
              <div
                key={stage.id}
                className={`p-5 rounded-2xl border transition-all duration-400 relative ${
                  isCurrent
                    ? 'bg-blue-950/30 border-blue-500/60 shadow-lg shadow-blue-500/10'
                    : isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-neutral-900/30 border-neutral-800/80 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1A6]">
                    STAGE 0{idx + 1} • {stage.role}
                  </span>
                  {isCompleted && (
                    <Chip size="sm" color="success" variant="flat" className="text-xs h-6 font-medium text-emerald-300">
                      已通过验收
                    </Chip>
                  )}
                  {isCurrent && (
                    <Chip size="sm" color="primary" variant="dot" className="text-xs h-6 font-medium text-blue-300">
                      运行中
                    </Chip>
                  )}
                  {!isCompleted && !isCurrent && (
                    <Chip size="sm" variant="flat" className="text-xs h-6 bg-neutral-800 text-neutral-400">
                      等待依赖
                    </Chip>
                  )}
                </div>

                <h3 className="text-base font-semibold text-white mb-4">
                  {stage.name}
                </h3>

                {/* Console log outputs with Stream Typing */}
                <div
                  className="space-y-2 h-[155px] overflow-y-auto bg-black/70 p-3.5 rounded-xl border border-neutral-800 font-mono text-xs text-[#D1D1D6] break-words flex flex-col justify-start"
                  tabIndex={0}
                  aria-label={`${stage.name} 控制台流式输出`}
                >
                  {logs.length === 0 && (
                    <span className="text-neutral-500 italic">等待上游节点完成状态封存...</span>
                  )}
                  {logs.map((log, lIdx) => (
                    <motion.div
                      key={lIdx}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="leading-relaxed"
                    >
                      {log}
                    </motion.div>
                  ))}
                  {isCurrent && (
                    <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Bar & Live Announcer */}
        <div
          className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 text-[#A1A1A6]">
            <span
              className={`flex h-2.5 w-2.5 rounded-full ${
                isRunning ? 'bg-blue-400 animate-pulse' : 'bg-emerald-500'
              }`}
              aria-hidden="true"
            />
            <span className="text-[#F5F5F7] font-medium">{statusMessage}</span>
          </div>
          <div className="text-blue-400 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Deterministic Verified Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
