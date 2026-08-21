# FAST 官网首页实现校验与顶级体验优化建议报告

> **目标对象**：`/Users/kai/iwork/code/work/quant/agent_work/site`  
> **审查维度**：顶级视觉（Visual & Aesthetic）、布局架构（Layout & Hierarchy）、文字内容（Copywriting & Messaging）、排版与字体系统（Typography & Typesetting）

---

## 1. 现状评估总览

当前 FAST 官网首页基于 React 19 + HeroUI + Tailwind CSS + Framer Motion 构建，主视觉基调为 Apple 风格深色系（纯黑 `#000000` + 微发光与玻璃拟态）。产品定位于 **“开源分布式双模（Coding + Work）智能体操作系统与企业大脑”**。

### 核心亮点
- **设计风格统合度高**：深黑背景搭配高精细度的半透明边框与环境光渐变，具备强烈的工业极客与现代科技质感。
- **叙事逻辑完整**：从首屏价值主张、架构六大支柱、企业大脑（Ontology + Memory）、双轨界面演示到硬核系统矩阵与多端安装，递进层级清晰。
- **强交互演示体验**：内置了虚拟团队 3-Stage DAG 流水线模拟器，支持单步调试与场景切换，生动传达产品机制。

---

## 2. 顶级视觉（Visual & Aesthetic）优化建议

### 2.1 动态光晕与深度景深分层（Depth & Lighting Hierarchy）
- **现状**：背景仅有一处固定顶部模糊渐变，多模块滚动时底部略显平淡。
- **优化点**：
  1. **流动光追背景（Ambient Radial Mesh）**：在 Enterprise Brain 和 InteractiveDemo 区域引入视差（Parallax）或柔和呼吸动画的次级多色散斑（Indigo `#4F46E5` / Violet `#7C3AED` / Cyan `#06B6D4`）。
  2. **高阶卡片边框光流（Border Beam / Spotlight）**：当前 Features 虽有鼠标跟随径向发光，但卡片静态边框略显均质。建议为核心高亮卡片（如 Dual-Mode 与 Enterprise Brain）加入微弱的边框动态光巡边效果（`border-beam` 动效），强化关键层级。

### 2.2 拟物微细节与工程纹理（Subtle Textures）
- **现状**：界面容器以纯色块为主，工业精密感仍有提升空间。
- **优化点**：
  1. 在 Terminal 与 DAG 模拟器背景中引入 5% 不透明度的超微网格（Dot Matrix / Blueprint Grid），强化“工程操作系统”的硬核感。
  2. 针对 Mac 窗口控制按钮（红黄绿小圆点）增加内部内阴影（`inset 0 1px 1px rgba(255,255,255,0.3)`），提升拟物细节精细度。

---

## 3. 布局与流线（Layout & Hierarchy）优化建议

### 3.1 首屏视口聚焦与呼吸感（Hero Section Viewport Optimization）
- **现状**：Hero 区域同时容纳了 Pill Badge、大标题、两段说明、两个 CTA 按钮以及下方 4 列数据指标卡片，在小屏幕或 1080p 笔记本屏幕下首屏内容密度偏高，底部指标卡片容易被截断。
- **优化点**：
  1. **首屏组件垂直间距紧凑化**：微调 Hero 标题与说明文案的下边距（`mb-6` 替代 `mb-10`），使 4 个关键指标卡片在标准 1440×900 视口中 100% 完整可见。
  2. **双 CTA 强弱对比再强化**：主按钮（白色填充）增加 Subtle Pulse Glow（微发光光环），次按钮（黑色透明边框）增强 Hover 状态下的白/蓝边框反馈。

### 3.2 虚拟团队演练区（Interactive Demo）视觉动线增强
- **现状**：上方输入框与下方 3 个 Stage 卡片目前为并列排列，Stage 之间的因果推导连接线不够显性。
- **优化点**：
  1. 在 3 个 Stage 卡片之间增加 **动态数据流动箭头（Animated SVG Flow Connector）**，在 Stage 1 执行完毕推向 Stage 2 时，连接线上有光点流过，直观体现 DAG 的状态机跃迁。
  2. 增加“执行中”卡片的呼吸高亮边框（Border Glow Pulsing），使用户视线自然聚焦在当前活跃的 Agent 阶段。

---

## 4. 文字内容与叙事（Copywriting & Messaging）优化建议

### 4.1 核心价值主张（Value Proposition）提纯
- **现状**：Hero 副标题信息量很大，包含了全谱系引擎、虚拟团队、Memory、本体论等较多专业名词，初次访客阅读负担较重。
- **优化点**：
  - **建议优化前**：
    > “开源、原生分布式 Agent 内核，纳管自研、DeepSeek、π、Codex、Claude 等全谱系引擎。支持虚拟团队动态协作与 Goal DAG 可验证闭环，结合自研 Memory 终身学习与本体知识引擎，赋能企业构建自主进化的智力资产。”
  - **建议优化后**（分行点睛，主干突出）：
    > **从深潜源码工程，到统摄企业业务交付。**  
    > 原生分布式双模 Agent OS，以 Executor-Verifier-Summarizer 刚性闭环与本体知识引擎，让智能体具备终身学习能力与确定性交付结果。

### 4.2 特性文案标签化与场景感强化
- **现状**：六大支柱中的部分文案偏学术化与纯底层概念。
- **优化点**：
  1. 为每个特性卡片增加直观的一句话场景结论（如：*“告别 90% 的幻觉与重试，每次交付附带形式化验证证据”*）。
  2. 在系统对比矩阵（PerformanceMatrix）中，将“传统 Agent”的劣势以更具共鸣的工程痛点描述（如 *“黑盒脚本拼接”、“单点崩溃导致上下文全部丢失”*）。

---

## 5. 排版与字体系统（Typography & Typesetting）优化建议

### 5.1 中西文混排与微排版规范（Micro-Typography）
- **优化点**：
  1. **Pangu 间距（盤古之白）**：全面核对中英文、数字与代码符号混排，确保中英文之间保留 `0.25em` 的标准视觉呼吸间隙（例如 `Goal DAG 闭环`、`100k TPS 吞吐`）。
  2. **数字等宽特性（Tabular Figures）**：在代码行号、TPS 统计、延迟指标（如 `1.42μs`）、倒计时等场景中，在 CSS 中显式启用 `font-feature-settings: 'tnum' 1, 'ss01' 1`，防止数字跳动时产生界面抖动。

### 5.2 字阶与行高精细化（Type Scale & Leading）
- **优化点**：
  1. **大标题行距压缩（Tight Tracking & Leading）**：Hero 标题字号在 `text-5xl` 到 `text-7xl` 时，设置 `leading-[1.08]` 与 `tracking-[-0.03em]`，营造现代科技大厂发布会海报式的紧凑张力。
  2. **正文段落行高优化**：中文技术性正文段落统一采用 `leading-[1.75]`，配合文本灰度 `#A1A1A6`，在深色背景下大幅降低阅读疲劳感。
  3. **代码字体回退链增强**：在 `tailwind.config.cjs` 的 `mono` 字体族中将 `'JetBrains Mono', 'SF Mono', 'Fira Code'` 置于前列，并开启代码连字（Ligatures）支持。

---

## 6. 实施路线建议（Actionable Next Steps）

1. **第一阶段（视觉与排版微调）**：
   - 优化 `index.css` 与 `tailwind.config.cjs`，配置 `tnum` 数字等宽与微排版字阶。
   - 调整 Hero 区域组件间距与首屏垂直高度占比。
2. **第二阶段（组件动效与连接器升级）**：
   - 为 `InteractiveDemo` 增加 Stage 间的动态 SVG 数据流连线与高亮流动光效。
   - 为 `Features` 卡片增加边框微光环巡效果（Border Beam）。
3. **第三阶段（文案与多端体验打磨）**：
   - 提纯首屏副标题与对比矩阵说明文案，使其更加凝练、直击工程痛点。
