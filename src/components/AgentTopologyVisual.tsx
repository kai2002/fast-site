import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Brain, Layers, GitBranch, Database, Zap, Activity, CheckCircle2 } from 'lucide-react';

export const AgentTopologyVisual: React.FC = () => {
  const [activeShard, setActiveShard] = useState<'run' | 'session' | 'meta'>('run');
  const [isSimulatingTraffic, setIsSimulatingTraffic] = useState(true);

  // Shard details
  const shards = [
    {
      id: 'run',
      name: 'RunShard #8F92',
      role: 'Executor & Worker Pool',
      tps: '128,400 msg/s',
      latency: '0.82μs',
      status: 'HEALTHY',
      color: '#2997ff',
      details: 'L0 Disruptor 无锁队列 • VarHandle 内存栅栏 • 零拷贝',
    },
    {
      id: 'session',
      name: 'SessionShard #04B1',
      role: 'Goal DAG State & Replay',
      tps: '45,200 txn/s',
      latency: '1.14μs',
      status: 'SYNCED',
      color: '#818cf8',
      details: 'Checkpointed Ledger • 事务原子性保证 • 毫秒级自愈',
    },
    {
      id: 'meta',
      name: 'MetaShard #Consensus',
      role: 'Cluster Gossip & Routing',
      tps: '99.999% SLA',
      latency: '0.12ms',
      status: 'LEADER',
      color: '#34d399',
      details: '无中心分布式拓扑 • 自动探活剔除 • 弹性路由分发',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-8 rounded-3xl bg-neutral-950/80 border border-neutral-800 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
      {/* Dynamic Background Mesh & Rotating Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-blue-500/10 pointer-events-none animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed border-indigo-500/15 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-radial from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-900 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              LIVE AGENT SHARDING TOPOLOGY
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            原生分布式 Agent 分片拓扑集群与无锁状态机
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSimulatingTraffic(!isSimulatingTraffic)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all flex items-center gap-1.5 ${
              isSimulatingTraffic
                ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400'
            }`}
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{isSimulatingTraffic ? '高频压测流模拟中' : '压测已暂停'}</span>
          </button>
        </div>
      </div>

      {/* Interactive 3-Tier Shard Topology Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 relative z-10">
        {shards.map((shard) => {
          const isActive = activeShard === shard.id;
          return (
            <motion.div
              key={shard.id}
              onClick={() => setActiveShard(shard.id as any)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'bg-neutral-900/90 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/50'
                  : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Active Glow Accent */}
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: shard.color }}
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-neutral-400">{shard.role}</span>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold"
                  style={{
                    backgroundColor: `${shard.color}15`,
                    borderColor: `${shard.color}40`,
                    color: shard.color,
                  }}
                >
                  {shard.status}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-2 font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4" style={{ color: shard.color }} />
                <span>{shard.name}</span>
              </h4>

              <div className="grid grid-cols-2 gap-2 my-3 p-2.5 rounded-xl bg-black/60 border border-neutral-850 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-neutral-500 block">THROUGHPUT</span>
                  <span className="text-white font-bold">{shard.tps}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block">LATENCY (P99)</span>
                  <span className="text-emerald-400 font-bold">{shard.latency}</span>
                </div>
              </div>

              <p className="text-xs text-[#A1A1A6] leading-relaxed">
                {shard.details}
              </p>

              {/* Data packet flow indicator */}
              {isSimulatingTraffic && (
                <div className="mt-3 flex items-center gap-1.5">
                  <div className="h-1 flex-1 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: shard.color }}
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: shard.id === 'run' ? 0.8 : shard.id === 'session' ? 1.4 : 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* SVG Interconnect Flow Animation */}
      <div className="hidden md:block relative h-10 -mt-3 mb-2 z-0 opacity-70">
        <svg className="w-full h-full" viewBox="0 0 800 40" fill="none">
          <path
            d="M 150 20 L 400 20 L 650 20"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {isSimulatingTraffic && (
            <>
              <circle r="3" fill="#2997ff">
                <animateMotion path="M 150 20 L 400 20 L 650 20" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#818cf8">
                <animateMotion path="M 650 20 L 400 20 L 150 20" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>
      </div>

      {/* Shard Diagnostic Audit Panel */}
      <div className="p-4 rounded-2xl bg-black/80 border border-neutral-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono relative z-10">
        <div className="flex items-center gap-2.5 text-[#D1D1D6]">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            <strong>高可用韧性保障：</strong>单节点瞬态宕机由 MetaShard 毫秒级拉起，长连接与上下文 0 丢失
          </span>
        </div>
        <div className="text-blue-400 flex items-center gap-1 font-semibold shrink-0">
          <span>99.999% SLA Verified</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
        </div>
      </div>
    </div>
  );
};
