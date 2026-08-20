import React, { useState } from 'react';
import { Button, Card } from '@heroui/react';
import { Copy, Check, Terminal, Apple, Monitor, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InstallSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = 'curl -fsSL https://get.fast-agent.dev/install.sh | bash';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2997ff', '#bf5af2', '#30d158'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 px-6 max-w-7xl mx-auto text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          即刻开启。<span className="text-gradient-blue">赋能你的工程团队。</span>
        </h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
          一条指令完成安装，支持 macOS (Apple Silicon & Intel) 以及主流 Linux 发行版。
        </p>

        {/* Command Box */}
        <div className="max-w-2xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-4 backdrop-blur-xl mb-12 shadow-2xl">
          <div className="flex items-center gap-3 font-mono text-sm text-neutral-200 overflow-x-auto py-1">
            <span className="text-blue-400 select-none">$</span>
            <span className="whitespace-nowrap">{installCmd}</span>
          </div>
          <Button
            size="sm"
            onClick={handleCopy}
            className="bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl px-4 shrink-0 transition-transform active:scale-95 flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>已复制</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>复制安装命令</span>
              </>
            )}
          </Button>
        </div>

        {/* Platform support cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          <div className="apple-card p-5 rounded-2xl border border-neutral-800">
            <div className="flex items-center gap-3 mb-2">
              <Apple className="w-5 h-5 text-neutral-300" />
              <div className="font-semibold text-white">macOS Universal</div>
            </div>
            <div className="text-xs text-neutral-400">
              原生适配 M1/M2/M3/M4 系列芯片及 Intel 架构，附带 DMG 签名。
            </div>
          </div>

          <div className="apple-card p-5 rounded-2xl border border-neutral-800">
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-5 h-5 text-blue-400" />
              <div className="font-semibold text-white">Linux CLI / Server</div>
            </div>
            <div className="text-xs text-neutral-400">
              提供独立二进制发行包，零额外运行库依赖，无缝集成 CI/CD 流水线。
            </div>
          </div>

          <div className="apple-card p-5 rounded-2xl border border-neutral-800">
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-5 h-5 text-emerald-400" />
              <div className="font-semibold text-white">Desktop GUI App</div>
            </div>
            <div className="text-xs text-neutral-400">
              极简沉浸式窗口，内置实时状态分片查看器与可视化 Diff 审查。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
