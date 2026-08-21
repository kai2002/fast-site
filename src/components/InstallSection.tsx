import React, { useState } from 'react';
import { Button } from '@heroui/react';
import { Copy, Check, Terminal, Apple, Monitor, Box, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlatformInstall {
  id: string;
  label: string;
  cmd: string;
  tip: string;
}

const PLATFORMS: PlatformInstall[] = [
  {
    id: 'macos',
    label: 'macOS (Apple / Intel)',
    cmd: 'curl -fsSL https://get.fast-agent.dev/install.sh | bash',
    tip: '原生支持 Apple Silicon M1-M4 及 Intel 芯片，附带 DMG 官方代码签名。',
  },
  {
    id: 'linux',
    label: 'Linux (CLI / CI)',
    cmd: 'curl -fsSL https://get.fast-agent.dev/linux.sh | sh',
    tip: '独立二进制分发，零第三方运行时依赖，兼容 Ubuntu / Debian / RHEL。',
  },
  {
    id: 'brew',
    label: 'Homebrew',
    cmd: 'brew install fast-agent-labs/tap/fast',
    tip: '通过官方 Tap 快速安装与版本升级，开箱即用。',
  },
  {
    id: 'docker',
    label: 'Docker Container',
    cmd: 'docker run -it --rm -v $(pwd):/workspace ghcr.io/fast/engine:latest',
    tip: '沙箱隔离容器镜像，自带完整形式化验证与基准测试工具链。',
  },
];

export const InstallSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformInstall>(PLATFORMS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(selectedPlatform.cmd);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = selectedPlatform.cmd;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="install" className="py-20 px-6 max-w-7xl mx-auto text-center relative" aria-labelledby="install-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 id="install-heading" className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          即刻开启。<span className="text-gradient-blue">赋能你的工程团队。</span>
        </h2>
        <p className="text-[#A1A1A6] text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          极简多端安装生态，原生适配 macOS、主流 Linux 服务器与 Docker 容器环境。
        </p>

        {/* Platform Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6" role="tablist" aria-label="安装平台选择">
          {PLATFORMS.map((p) => {
            const isSelected = selectedPlatform.id === p.id;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedPlatform(p);
                  setCopied(false);
                }}
                className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-blue-500 outline-none ${
                  isSelected
                    ? 'bg-neutral-800 text-white border border-neutral-700 shadow-md'
                    : 'bg-neutral-900/60 text-[#A1A1A6] border border-neutral-800/80 hover:text-white'
                }`}
              >
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Command Box with Border Beam Feedback */}
        <div
          className={`max-w-3xl mx-auto bg-neutral-900/90 border rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 backdrop-blur-xl mb-6 shadow-2xl transition-all duration-300 relative overflow-hidden ${
            copied
              ? 'border-blue-500/80 ring-2 ring-blue-500/30'
              : 'border-neutral-800 hover:border-neutral-700'
          }`}
        >
          {copied && (
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
          )}

          <div className="flex-1 flex items-center gap-3 font-mono text-sm text-neutral-200 overflow-x-auto py-1.5 px-3 bg-black/50 rounded-xl border border-neutral-800/60">
            <span className="text-blue-400 select-none font-bold" aria-hidden="true">$</span>
            <code className="whitespace-nowrap font-medium text-[#F5F5F7] text-left">{selectedPlatform.cmd}</code>
          </div>

          <Button
            size="sm"
            onClick={handleCopy}
            className={`font-semibold rounded-xl px-5 py-2 shrink-0 transition-all active:scale-95 flex items-center justify-center gap-1.5 h-10 ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/10'
            }`}
            aria-label={copied ? '安装命令已复制到剪贴板' : '复制安装命令'}
          >
            {copied ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs">已复制到剪贴板</span>
              </motion.div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs">复制命令</span>
              </div>
            )}
          </Button>
        </div>

        <p className="text-xs text-[#A1A1A6] font-mono mb-12">
          {selectedPlatform.tip}
        </p>

        {/* Platform support cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          <div className="apple-card p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <div className="flex items-center gap-3 mb-2.5">
              <Apple className="w-5 h-5 text-neutral-200" aria-hidden="true" />
              <div className="font-semibold text-white text-base">macOS Universal</div>
            </div>
            <div className="text-xs text-[#A1A1A6] leading-relaxed">
              原生适配 M1/M2/M3/M4 系列芯片及 Intel 架构，附带 DMG 官方代码签名。
            </div>
          </div>

          <div className="apple-card p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <div className="flex items-center gap-3 mb-2.5">
              <Terminal className="w-5 h-5 text-blue-400" aria-hidden="true" />
              <div className="font-semibold text-white text-base">Linux CLI / Server</div>
            </div>
            <div className="text-xs text-[#A1A1A6] leading-relaxed">
              提供独立二进制发行包，零额外环境依赖，无缝集成 CI/CD 流水线。
            </div>
          </div>

          <div className="apple-card p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <div className="flex items-center gap-3 mb-2.5">
              <Monitor className="w-5 h-5 text-emerald-400" aria-hidden="true" />
              <div className="font-semibold text-white text-base">Desktop GUI App</div>
            </div>
            <div className="text-xs text-[#A1A1A6] leading-relaxed">
              极简沉浸式窗口，内置实时状态分片查看器与可视化 Diff 审查。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
