import React from 'react';
import { Sparkles, Terminal, GitBranch, Heart, ShieldCheck, Cpu, BrainCircuit } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black/90 py-16 px-6 relative z-10" aria-label="页脚信息">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-wider text-white font-mono">FAST AGENT OS</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Open Source (Apache-2.0)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1A6] max-w-md leading-relaxed">
            开源分布式双模（Coding + Work）智能体操作系统。以多智能体协同、自研记忆终身学习与业务本体知识引擎，赋能企业构筑自主进化的数字大脑。
          </p>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-12 text-xs sm:text-sm text-[#A1A1A6]">
          <div className="flex flex-col gap-2.5">
            <span className="text-white font-semibold font-mono uppercase tracking-wider text-xs">Architecture</span>
            <a href="#features" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none">六大支柱</a>
            <a href="#brain" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none">企业大脑与本体论</a>
            <a href="#matrix" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none">系统指标对比</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-white font-semibold font-mono uppercase tracking-wider text-xs">Workflows</span>
            <a href="#interactive" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none">虚拟团队演练</a>
            <a href="#cli" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none">Fast-Ink TUI & GUI</a>
            <a href="#install" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none">快速安装</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-white font-semibold font-mono uppercase tracking-wider text-xs">Community</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 rounded outline-none"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>GitHub (Apache-2.0)</span>
            </a>
            <span className="text-neutral-500 text-xs">SPI Plugin Ecosystem</span>
            <span className="text-neutral-500 text-xs">Discord & Matrix</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <p>© 2025 FAST Open Source Community. Released under Apache-2.0 License.</p>
        <p className="flex items-center gap-1.5">
          <span>Engineered for Deterministic Enterprise Delivery</span>
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
        </p>
      </div>
    </footer>
  );
};
