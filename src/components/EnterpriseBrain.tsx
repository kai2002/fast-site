import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Database, Network, Sparkles, RefreshCw, Layers, ArrowRight, ShieldCheck, Cpu, CheckCircle2, GitCommit, Search, BookOpen, Key } from 'lucide-react';

export const EnterpriseBrain: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ontology' | 'memory'>('ontology');
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);

  const memoryTiers = [
    {
      id: 'episodic',
      title: '1. Episodic Memory (事件与行为记忆)',
      desc: '基于全量不可篡改 Run Ledger 审计流水，完整记录工具调用、调试轨迹、失败反思与状态转移。',
      detail: '实时事件复盘 • 行为溯源 • 零幻觉证据链',
      icon: <GitCommit className="w-4 h-4 text-cyan-400" />,
      tag: 'LEDGER-BACKED',
    },
    {
      id: 'semantic',
      title: '2. Semantic Memory (概念与领域认知)',
      desc: '从海量历史会话与代码重构中自动提炼领域概念、架构约束与代码规范，完成感知到认知的升维。',
      detail: '领域知识提炼 • 自动规范归纳 • 跨项目经验复用',
      icon: <Search className="w-4 h-4 text-purple-400" />,
      tag: 'GRAPH-LINKED',
    },
    {
      id: 'procedural',
      title: '3. Procedural Memory (规程与技能内化)',
      desc: '沉淀经过高阶压测与验证检验的 Goal DAG 流程模版、故障处置 SOP 与发布交付规约，内化为智能体肌肉记忆。',
      detail: 'SOP 自动化 • 交付拓扑演进 • 最佳实践固化',
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
      tag: 'SELF-EVOLVING',
    },
  ];

  const ontologyEntities = [
    { name: '客户 (Customer)', type: '核心业务主体', link: '绑定 32 个微服务合同', metrics: '高合规 • 权限隔离' },
    { name: '撮合引擎 (MatchEngine)', type: '高频核心资产', link: 'Disruptor 无锁队列拓扑', metrics: '100k TPS • 0.82μs' },
    { name: '订单 (OrderBook)', type: '分布式状态流', link: '毫秒级因果时序与对账', metrics: '零丢单 • 幂等重放' },
    { name: '风控合规 (RiskPolicy)', type: '刚性约束规则', link: 'OS 沙箱零信任拦截', metrics: '形式化验证通过' },
  ];

  const handleTriggerSynthesis = () => {
    setIsSynthesizing(true);
    setTimeout(() => setIsSynthesizing(false), 2000);
  };

  return (
    <section id="brain" className="py-20 px-6 max-w-7xl mx-auto relative" aria-labelledby="brain-heading">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-blue-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 id="brain-heading" className="text-xs uppercase tracking-wider text-purple-400 font-mono mb-3 font-semibold">
          AUTONOMOUS ENTERPRISE BRAIN
        </h2>
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          自研记忆进化 × 业务本体数字孪生
        </p>
        <p className="text-[#A1A1A6] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          原始数据只是冷冰冰的数字。FAST 通过构建「企业业务本体 (Ontology)」与「终身学习 Memory 闭环」，让 AI 深度理解业务契约，赋能企业构建自主进化的大脑。
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
        <div className="p-1.5 bg-neutral-900/90 rounded-2xl border border-neutral-800 flex items-center gap-2 backdrop-blur-md shadow-lg">
          <button
            onClick={() => setActiveTab('ontology')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'ontology'
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Network className="w-4 h-4 text-purple-400" />
            <span>业务本体论 (Ontology) 与数字孪生</span>
          </button>
          <button
            onClick={() => setActiveTab('memory')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'memory'
                ? 'bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-lg shadow-blue-500/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <BrainCircuit className="w-4 h-4 text-blue-400" />
            <span>自研多级 Memory 终身学习闭环</span>
          </button>
        </div>
      </div>

      {/* Main Feature Container */}
      <div className="apple-card rounded-3xl p-6 sm:p-10 border border-neutral-800 bg-[#09090b]/90 shadow-2xl relative overflow-hidden z-10">
        {activeTab === 'ontology' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>从原始数据到高阶商业决策</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                将异构冷数据转化为现实业务实体与因果关联网络
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D1D6] leading-relaxed">
                数据库表、Git 提交记录、Jira 需求只是零散的数据孤岛。FAST 知识引擎构建统一本体（Ontology），将数据映射为「客户、订单、工厂、微服务」及其相互因果关系，形成企业高精度数字孪生。
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-mono">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>支持 GraphRAG 动态图谱推理与因果链回溯</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-mono">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>跨多源（MySQL / Git / 飞书 / 向量库）实时同构映射</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-mono">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Agent 具备系统级商业契约认知，做出严谨可信决策</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Topology Simulator */}
            <div className="lg:col-span-7 bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4 relative">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A6] border-b border-neutral-900 pb-3">
                <span className="font-semibold text-purple-300 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-purple-400" />
                  ENTERPRISE ONTOLOGY TWIN GRAPH
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE SYNCED
                </span>
              </div>

              {/* Dynamic Radar Beam Animation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative">
                {ontologyEntities.map((item, idx) => {
                  const isSelected = activeNode === idx;
                  return (
                    <motion.div
                      key={idx}
                      onClick={() => setActiveNode(idx)}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-left relative overflow-hidden ${
                        isSelected
                          ? 'bg-purple-950/30 border-purple-500/70 shadow-lg shadow-purple-500/10 ring-1 ring-purple-500/40'
                          : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-xs text-[#A1A1A6] font-mono flex items-center gap-1.5 mb-2">
                        <ArrowRight className="w-3 h-3 text-neutral-500" />
                        <span>{item.link}</span>
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400/90 pt-1 border-t border-neutral-850">
                        {item.metrics}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Ontology Inference Live Banner */}
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center justify-between">
                <span>Ontology Inference: 智能体已理解「{ontologyEntities[activeNode].name}」因果拓扑</span>
                <span className="text-emerald-400">Zero-Hallucination</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative for Memory */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>从静态白纸到终身学习活体智能</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                任务交付即学习：反思、提炼与自我进化的三层记忆闭环
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D1D6] leading-relaxed">
                告别传统大模型“每次启动皆为白纸”的缺陷。FAST 智能体在每次 Goal 交付后自动触发反思提炼（Reflection & Distillation），将成功经验转化为复用规程，失败教训转化为负向先验拦截。
              </p>
              
              <div className="pt-2">
                <button
                  onClick={handleTriggerSynthesis}
                  disabled={isSynthesizing}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 active:scale-95"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSynthesizing ? 'animate-spin' : ''}`} />
                  <span>{isSynthesizing ? '正在提炼跨任务反思先验...' : '模拟执行 Memory 记忆提炼'}</span>
                </button>
              </div>
            </div>

            {/* Right Memory Cards */}
            <div className="lg:col-span-7 space-y-3.5">
              {memoryTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="p-4.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                        {tier.icon}
                      </div>
                      <h4 className="text-sm font-bold text-white">{tier.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tier.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed pl-8 mb-1.5">{tier.desc}</p>
                  <div className="text-[11px] font-mono text-emerald-400/90 pl-8">
                    ✦ {tier.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
