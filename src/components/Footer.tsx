import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black text-[#A1A1A6] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white tracking-wider font-mono">FAST ENGINE</span>
          </div>
          <p className="text-sm text-[#A1A1A6] max-w-sm leading-relaxed">
            专为高强度工程任务打造的下一代智能体运行引擎与协作环境。确定性、高吞吐、零妥协。
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm font-medium">
          <div className="space-y-3">
            <div className="text-white font-semibold uppercase tracking-wider text-xs font-mono">产品体系</div>
            <div className="space-y-2">
              <div><a href="#features" className="hover:text-white transition-colors">Actor 架构</a></div>
              <div><a href="#interactive" className="hover:text-white transition-colors">Goal 闭环协议</a></div>
              <div><a href="#cli" className="hover:text-white transition-colors">Fast-Ink 终端</a></div>
              <div><a href="#matrix" className="hover:text-white transition-colors">性能矩阵</a></div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-white font-semibold uppercase tracking-wider text-xs font-mono">开发者资源</div>
            <div className="space-y-2">
              <div><a href="#features" className="hover:text-white transition-colors">API & SPI 架构</a></div>
              <div><a href="#features" className="hover:text-white transition-colors">DSH 扩展指南</a></div>
              <div><a href="#cli" className="hover:text-white transition-colors">NDJSON 协议规约</a></div>
              <div><a href="#install" className="hover:text-white transition-colors">发行版本清单</a></div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-white font-semibold uppercase tracking-wider text-xs font-mono">社区与生态</div>
            <div className="space-y-2">
              <div><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></div>
              <div><a href="#install" className="hover:text-white transition-colors">开发者社区</a></div>
              <div><a href="#install" className="hover:text-white transition-colors">技术研讨</a></div>
              <div><span className="text-neutral-500">开源许可 (Apache-2.0)</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1A6]">
        <div>
          © {new Date().getFullYear()} FAST Engine Labs. 保留所有权利。设计融合 Apple 极简科技美学。
        </div>
        <div className="flex items-center gap-6">
          <a href="#install" className="hover:text-white transition-colors">隐私策略</a>
          <a href="#install" className="hover:text-white transition-colors">服务条款</a>
          <a href="#install" className="hover:text-white transition-colors">安全声明</a>
        </div>
      </div>
    </footer>
  );
};
