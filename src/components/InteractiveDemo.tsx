import React, { useState, useEffect, useRef } from 'react';
import { Button, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Activity, Sparkles, Terminal, FastForward, Users, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface StagePreset {
  id: string;
  name: string;
  role: 'executor' | 'verifier' | 'summarizer';
  agentTitle: string;
  logs: string[];
}

interface Scenario {
  id: string;
  label: string;
  teamTag: string;
  prompt: string;
  stages: StagePreset[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'quant-engine',
    label: '量化撮合与死锁证明 (Coding)',
    teamTag: '@team/quant-core',
    prompt: '构建高频撮合引擎环形无锁队列，并在沙箱中完成 100k TPS 压力与并发死锁证明',
    stages: [
      {
        id: 'stage-1',
        name: '无锁架构与并发编码',
        role: 'executor',
        agentTitle: 'WorkspaceCodingAgent',
        logs: [
          '⚡ [Channel] 接收 Goal 初始化请求: goal_id=g-8f92a10, team=@team/quant-core',
          '🔍 [AST-Explorer] 解析 quant/engine 拓扑与并发内存栅栏 (Memory Barrier)',
          '📝 [Coding] 基于 Disruptor 环形队列重构 LockFreeOrderBook.scala',
          '✨ 注入 VarHandle.releaseFence() 保证零拷贝与严格有序写入',
        ],
      },
      {
        id: 'stage-2',
        name: '沙箱压力与形式化验证',
        role: 'verifier',
        agentTitle: 'BenchmarkVerifierAgent',
        logs: [
          '🛡️ [OS-Sandbox] 进入隔离沙箱启动 100,000 TPS 并发压力吞吐测试',
          '🔬 [Sanitizer] 运行 ThreadSanitizer 内存争用检测... 0 Data Race',
          '✅ [Acceptance] P99 延迟指标 1.18μs，刚性验收条件 100% 达成',
        ],
      },
      {
        id: 'stage-3',
        name: '不可篡改审计与交付归档',
        role: 'summarizer',
        agentTitle: 'AuditSummarizerAgent',
        logs: [
          '📊 [Ledger] 生成 Run Ledger 审计流水与形式化验证签名 SHA256: 9b2e04...',
          '📦 [Distill] 沉淀 Disruptor 最佳实践模版至 Procedural Memory',
          '🚀 目标状态流转为 TERMINAL_PASS，完成工程级闭环交付',
        ],
      },
    ],
  },
  {
    id: 'devsecops-workflow',
    label: '端到端发布协同 (Work 智能体)',
    teamTag: '@team/devsecops',
    prompt: '跨部门自动化协同：从需求立项、安全合规审查到 Canary 灰度发布与业务报表生成',
    stages: [
      {
        id: 'stage-1',
        name: '跨角色协同编排与立项',
        role: 'executor',
        agentTitle: 'ReleaseOrchestratorAgent',
        logs: [
          '⚡ [WorkPlanner] 解析 Jira 需求与变更影响拓扑，初始化发布 Goal',
          '🔍 [BudgetShield] 校验 Token 预算与安全权限级别 (L0 Policy)',
          '📝 [Workflow] 自动生成 4 个微服务变更清单与跨系统依赖 DAG',
        ],
      },
      {
        id: 'stage-2',
        name: '合规准入与安全静态审计',
        role: 'verifier',
        agentTitle: 'SecOpsVerifierAgent',
        logs: [
          '🛡️ [SecurityAudit] 扫描 CVE 漏洞库与依赖签名，0 高危违规',
          '🔬 [CanaryCheck] 模拟 5% 流量灰度金丝雀探针，响应错误率 0.00%',
          '✅ [Compliance] 满足 ISO27001 研发合规门禁，签署放行证明',
        ],
      },
      {
        id: 'stage-3',
        name: '业务成稿与经验沉淀',
        role: 'summarizer',
        agentTitle: 'BusinessSummarizerAgent',
        logs: [
          '📊 [Report] 自动输出发布说明 (Release Notes) 与架构变更拓扑图',
          '📦 [Memory] 将本次灰度策略与回滚规程同步至企业知识引擎',
          '🚀 完成全流程业务闭环，通知飞书/Slack 交付频道',
        ],
      },
    ],
  },
  {
    id: 'actor-chaos',
    label: '分布式 Agent 分片自愈',
    teamTag: '@team/infra-chaos',
    prompt: '向 SessionShard#3 注入宕机故障，验证 MetaShard 的探活与毫秒级无损拉起',
    stages: [
      {
        id: 'stage-1',
        name: '故障注入与拓扑隔离',
        role: 'executor',
        agentTitle: 'ChaosInjectorAgent',
        logs: [
          '⚡ [ChaosMesh] 向 SessionShard#3 发送 SIGKILL 进程终止信号',
          '🔍 [ShardMonitor] 检测到心跳丢失，MetaShard 立即执行网络隔离',
          '📝 [Supervisor] 锁定全局路由并提取持久化 Checkpoint #1042',
        ],
      },
      {
        id: 'stage-2',
        name: '一致性核对与状态重放',
        role: 'verifier',
        agentTitle: 'ConsensusVerifierAgent',
        logs: [
          '🛡️ [LedgerAudit] 比对未提交事务队列，校验 0 数据丢失',
          '🔬 [ReplayEngine] 重放事务流水，新实例在 12ms 内恢复就绪',
          '✅ [Verdict] 集群拓扑完全恢复，会话长连接无缝平移',
        ],
      },
      {
        id: 'stage-3',
        name: '自愈报告与可观测归档',
        role: 'summarizer',
        agentTitle: 'SREJournalAgent',
        logs: [
          '📊 [Incident] 生成 RTO/RPO 达标自愈报告与 Prometheus 探针记录',
          '📦 [Evolution] 沉淀高可用混沌实验先验至企业大脑',
          '🚀 全集群恢复全绿状态，达成 99.999% SLA 保障',
        ],
      },
    ],
  },
  {
    id: 'brain-ontology',
    label: '企业大脑：本体推理与记忆提炼',
    teamTag: '@team/brain-memory',
    prompt: '通过业务本体论（Ontology）映射异构数据，并执行 Episodic Memory 反思提炼',
    stages: [
      {
        id: 'stage-1',
        name: '多源异构数据与本体映射',
        role: 'executor',
        agentTitle: 'OntologyMappingAgent',
        logs: [
          '⚡ [GraphEngine] 提取 MySQL 订单表与 Git 源码建立实体概念拓扑',
          '🔍 [Ontology] 将 12,000 条底层记录转化为「客户-订单-风控」因果网络',
          '📝 [GraphRAG] 构建企业高保真数字孪生认知上下文',
        ],
      },
      {
        id: 'stage-2',
        name: '反思提炼与先验去噪',
        role: 'verifier',
        agentTitle: 'MemoryReflectorAgent',
        logs: [
          '🛡️ [Distill] 提取近 30 次任务执行流水，剔除无效重试噪声',
          '🔬 [NegativePriors] 提取 2 条高频错误路径并注入负向拦截规则',
          '✅ [CognitiveAudit] 提炼后的新技能包通过一致性验证',
        ],
      },
      {
        id: 'stage-3',
        name: '企业智力资产固化',
        role: 'summarizer',
        agentTitle: 'KnowledgeSynthesizerAgent',
        logs: [
          '📊 [BrainUpdate] 将沉淀的业务规程写入 Semantic & Procedural Memory',
          '📦 [Sync] 企业全量智能体实例自动同步最新进化权重',
          '🚀 企业大脑完成自主学习与知识资产进化',
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
  const [statusMessage, setStatusMessage] = useState('就绪：选择场景体验虚拟团队协作与 Goal DAG 交付');
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
    setStatusMessage(`已切换至预设场景「${sc.label}」(${sc.teamTag})`);
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
    }, 360);
  };

  const runStage = (step: number) => {
    if (step === 1) {
      setCurrentStep(1);
      setStatusMessage(`[${selectedScenario.stages[0].agentTitle}] 正在执行编码与拓扑构建...`);
      streamLogs('stage-1', selectedScenario.stages[0].logs, () => {
        const t = setTimeout(() => runStage(2), 450);
        timerRef.current.push(t);
      });
    } else if (step === 2) {
      setCurrentStep(2);
      setStatusMessage(`[${selectedScenario.stages[1].agentTitle}] 正在执行严苛质检与形式化验证...`);
      streamLogs('stage-2', selectedScenario.stages[1].logs, () => {
        const t = setTimeout(() => runStage(3), 450);
        timerRef.current.push(t);
      });
    } else if (step === 3) {
      setCurrentStep(3);
      setStatusMessage(`[${selectedScenario.stages[2].agentTitle}] 质检通过，已生成不可篡改交付账本。`);
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
      setStatusMessage(`单步执行: [${selectedScenario.stages[0].agentTitle}]`);
      setDisplayedLogs((prev) => ({ ...prev, 'stage-1': selectedScenario.stages[0].logs }));
    } else if (currentStep === 1) {
      setCurrentStep(2);
      setStatusMessage(`单步执行: [${selectedScenario.stages[1].agentTitle}]`);
      setDisplayedLogs((prev) => ({ ...prev, 'stage-2': selectedScenario.stages[1].logs }));
    } else if (currentStep === 2) {
      setCurrentStep(3);
      setStatusMessage(`单步执行: [${selectedScenario.stages[2].agentTitle}]`);
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
          VIRTUAL TEAM & GOAL DAG SIMULATOR
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          多智能体虚拟团队协同演练
        </p>
        <p className="text-[#A1A1A6] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          观察 FAST 虚拟团队（Executor ➔ Verifier ➔ Summarizer）如何以分布式状态机与 Token 流式输出驱动刚性交付闭环。
        </p>
      </div>

      {/* Scenario Pill Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="group" aria-label="工程场景预设">
        {SCENARIOS.map((sc) => {
          const isSelected = selectedScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-blue-500/15 border-blue-500/50 text-blue-300 shadow-lg shadow-blue-500/10'
                  : 'bg-neutral-900/60 border-neutral-800 text-[#A1A1A6] hover:text-white hover:border-neutral-700'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-400 animate-pulse' : 'bg-neutral-600'}`} />
              <span className="font-semibold">{sc.label}</span>
              <span className="text-[10px] font-mono text-neutral-400">{sc.teamTag}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-neutral-950/90 border border-neutral-800 bg-blueprint-grid rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-neutral-900">
          <div className="flex-1 flex items-center gap-3 bg-neutral-900/90 px-4 py-2.5 rounded-2xl border border-neutral-800">
            <label htmlFor="goal-prompt-input" className="sr-only">流水线目标描述</label>
            <Terminal className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-2 w-full font-mono text-xs sm:text-sm">
              <span className="text-emerald-400 font-bold hidden sm:inline">{selectedScenario.teamTag} $</span>
              <input
                id="goal-prompt-input"
                type="text"
                readOnly
                value={selectedScenario.prompt}
                aria-label="流水线目标描述"
                className="bg-transparent text-[#F5F5F7] outline-none w-full placeholder:text-neutral-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={handleRun}
              disabled={isRunning}
              className={`font-semibold px-5 rounded-xl transition-all shadow-lg h-10 text-xs sm:text-sm ${
                isRunning
                  ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20 active:scale-95'
              }`}
              startContent={isRunning ? <Activity className="w-3.5 h-3.5 animate-spin" aria-hidden="true" /> : <Play className="w-3.5 h-3.5 fill-white" aria-hidden="true" />}
              aria-label={isRunning ? '虚拟团队正在协同计算' : '启动虚拟团队流水线'}
            >
              {isRunning ? '流式演练中...' : '启动虚拟团队'}
            </Button>
            <Button
              onClick={handleStepForward}
              disabled={isRunning || currentStep >= 3}
              variant="flat"
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-xl h-10 px-3 border border-neutral-800 text-xs font-mono flex items-center gap-1.5"
              aria-label="单步推进下一阶段"
            >
              <FastForward className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">单步调试</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="flat"
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-xl h-10 w-10 flex items-center justify-center border border-neutral-800"
              aria-label="重置流水线演示"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Workflow Stages Matrix with Dynamic Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6 relative">
          {selectedScenario.stages.map((stage, idx) => {
            const isCompleted = currentStep > idx + 1 || (currentStep === 3 && idx === 2);
            const isCurrent = currentStep === idx + 1;
            const stageId = `stage-${idx + 1}`;
            const logs = displayedLogs[stageId] || [];

            return (
              <div
                key={stage.id}
                className={`p-4.5 rounded-2xl border transition-all duration-300 relative ${
                  isCurrent
                    ? 'bg-blue-950/40 border-blue-500/80 shadow-lg shadow-blue-500/15 ring-1 ring-blue-500/40'
                    : isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-neutral-900/40 border-neutral-800/80 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    STAGE 0{idx + 1} • {stage.role}
                  </span>
                  {isCompleted && (
                    <Chip size="sm" color="success" variant="flat" className="text-[11px] h-5 font-medium text-emerald-300">
                      已通过质检
                    </Chip>
                  )}
                  {isCurrent && (
                    <Chip size="sm" color="primary" variant="dot" className="text-[11px] h-5 font-medium text-blue-300">
                      运行中
                    </Chip>
                  )}
                  {!isCompleted && !isCurrent && (
                    <Chip size="sm" variant="flat" className="text-[11px] h-5 bg-neutral-800 text-neutral-400">
                      等待依赖
                    </Chip>
                  )}
                </div>

                <div className="text-[11px] font-mono text-blue-400 mb-1">
                  {stage.agentTitle}
                </div>
                <h3 className="text-sm font-semibold text-white mb-3">
                  {stage.name}
                </h3>

                {/* Console log outputs with Stream Typing */}
                <div
                  className="space-y-1.5 h-[145px] overflow-y-auto bg-black/80 p-3 rounded-xl border border-neutral-850 font-mono text-xs text-[#D1D1D6] break-words flex flex-col justify-start"
                  tabIndex={0}
                  aria-label={`${stage.name} 控制台流式输出`}
                >
                  {logs.length === 0 && (
                    <span className="text-neutral-500 italic text-[11px]">等待上游节点完成状态封存...</span>
                  )}
                  {logs.map((log, lIdx) => (
                    <motion.div
                      key={lIdx}
                      initial={{ opacity: 0, x: -3 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className="leading-relaxed text-[11px] sm:text-xs"
                    >
                      {log}
                    </motion.div>
                  ))}
                  {isCurrent && (
                    <span className="inline-block w-1.5 h-3.5 bg-blue-400 animate-pulse ml-0.5" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Bar & Live Announcer */}
        <div
          className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2.5 text-[#A1A1A6]">
            <span
              className={`flex h-2 w-2 rounded-full ${
                isRunning ? 'bg-blue-400 animate-pulse' : 'bg-emerald-500'
              }`}
              aria-hidden="true"
            />
            <span className="text-[#F5F5F7] font-medium text-[11px] sm:text-xs">{statusMessage}</span>
          </div>
          <div className="text-blue-400 flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Goal-Driven Deterministic Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
