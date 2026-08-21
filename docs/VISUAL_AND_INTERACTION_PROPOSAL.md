# FAST 官方产品站顶级视觉与交互优化建议方案

> 评估目标：`/Users/kai/iwork/code/work/quant/agent_work/site`
> 视觉与交互定位：工业级工程质感、Apple Pro 级暗黑极简科技美学、高信噪比与确定性交互

---

## 1. 核心现状诊断与差距分析

当前页面具备较清晰的结构骨架与暗黑风格基础，但在**空间节奏感、微交互物理质感、数据与流程的可视化张力、响应式细节**上，距离 Linear / Apple / Vercel 顶尖水准仍有提升空间：

| 维度 | 当前现状 | 顶尖标准差距 |
| :--- | :--- | :--- |
| **视觉层深 (Visual Depth)** | 依赖静态 `blur-[100px]` 与普通边框，缺少层次级联 | 缺少动态光追感（Spotlight / Radial Border Glow）与细致噪点材质 |
| **排版与层次 (Hierarchy)** | 标题与正文字阶跨度稍平，字重对比度偏常规 | 缺少 Apple 级超大 display 标题（Tight tracking, 梯度削光）与微标 (Micro-label) 反差 |
| **交互动效 (Micro-interactions)** | 基础 hover 变色与单调定时器播放 | 缺少鼠标跟随流光、可暂停/可快进的交互步进、拟真打字机流式字符反馈 |
| **组件反馈 (Component Feedback)** | 复制命令依赖全屏 confetti，粒度过重 | 缺少原位细腻状态变换与触觉级弹簧动效 (Spring Transition) |

---

## 2. 顶级视觉系统优化（Top-tier Visual Design）

### 2.1 材质与层深系统 (Atmosphere & Materials)
1. **微质感噪点与全局暗部梯度**
   - 在底层叠加 2% 透明度的 SVG 细粒度噪点图层（Film Grain），打破纯黑 `#000000` 与纯 CSS 渐变的数码塑料感。
   - 采用多层级暗黑梯度：Canvas (`#000000`) ➔ Surface Low (`#09090b`) ➔ Surface Mid (`#121215`) ➔ Border Glow (`rgba(255,255,255,0.08~0.18)`).
2. **Apple 级鼠标跟随流光 (Cursor-following Spotlight)**
   - 在 Card 容器与 Demo 区域引入跟随鼠标坐标 `(x, y)` 的动态径向高光（`radial-gradient(400px circle at ${x}px ${y}px, rgba(41,151,255,0.08), transparent 80%)`）。
   - 边框采用 `mask-composite` 结合鼠标位置做单边高亮流动。

### 2.2 字体与数据排版 (Typographic Rhythm & Monospace Accent)
1. **数值看板与技术参数强化**
   - 关键指标（`0.8ms`、`100%`、`3-Tier`）引入大字号 `font-feature-settings: 'tnum' on, 'cv02' on`（等宽数字对齐），避免数字跳动。
   - 在技术标签（Tag/Pill）中严格统一微标尺寸（11px/12px，0.08em tracking），与正文形成精巧对比。
2. **多层级文本梯度削光**
   - 主标采用双层渐变：自上而下从纯白 `#FFFFFF` 渐变为浅钛灰 `#A1A1A6`，在光影上模拟金属反光质感。

---

## 3. 顶级交互系统优化（Dynamic Interaction & Flow）

### 3.1 闭环交付流水线模拟器（InteractiveDemo）升级
1. **全链路可控交互机制**
   - **单步调试模式 (Step-by-Step / Scrubbing)**：除“一键运行”外，提供 `[Next Stage]`、`[Pause]` 与滑块拖拽时间轴，允许用户精确观察每一个状态分片（RunShard）的生命周期。
   - **多场景预设切换器**：在输入框上方提供场景 Pill，例如 `[量化高频订单簿]`、`[分布式 Actor 崩溃自愈]`、`[OS 级沙箱越界拦截]`，点击直接注入真实工程 Prompts 与对应 DAG 图。
2. **终端流式拟真渲染 (Simulated Stream Output)**
   - 日志由静态一次性吐出改为基于字符时序的 Token 流式输出（搭配绿色/蓝色呼吸光标），真实再现 TUI 原生 NDJSON 吞吐速度。
   - DAG 节点连线引入流动粒子光效，展示从 Executor ➔ Verifier ➔ Summarizer 的真实数据流动方向。

### 3.2 极客终端与桌面双轨预览（TerminalPreview）增强
1. **真动态双轨切换过渡 (Morphing Transition)**
   - TUI 与 Desktop 切换时，利用 `framer-motion` 的 `layoutId` 实现窗口结构平滑变形，而非粗暴的 `v-if/display: none`。
2. **可交互式 Diff 展开与 Inspect 工具**
   - 在 Desktop 视图中，允许用户点击左侧 Session Stream 任意节点，右侧即时联动高亮对应的 Diff 行与 AST 验证证据。

### 3.3 触觉级复制与极简反馈（InstallSection）
1. **原位微交互替代屏幕级纸屑**
   - 复制按钮去掉全屏 confetti，改为按钮内部图标与文案的弹性翻转（`Scale & Check Pop`），并在代码框外圈激发一道蓝绿色的顺时针 Border Beam 扫光。
2. **多包管理器/系统一键 Tab 切换**
   - 增加 `macOS (Homebrew / DMG)`、`Linux (Bash / Snap)`、`Docker`、`Cargo` 的单行快速 Tab，贴合不同系统工程师的直觉需求。

---

## 4. 各模块具体改造优先级与落地清单

```
┌────────────────────────────┐     ┌────────────────────────────┐     ┌────────────────────────────┐
│   P0: 核心质感与可玩性     │ ──> │   P1: 视觉深度与流光系统   │ ──> │   P2: 性能与极致细节打磨   │
├────────────────────────────┤     ├────────────────────────────┤     ├────────────────────────────┤
│ • 场景化 Demo 预设与流式   │     │ • 鼠标跟随 Spotlight 边框  │     │ • 等宽数字与微排版对齐     │
│ • TUI/GUI 平滑 Layout 变形 │     │ • 噪点材质与多层级暗黑梯度 │     │ • 统一快捷键与无障碍 Focus │
│ • 原位 Border Beam 复制反馈│     │ • 节点间粒子连线流动动效   │     │ • 移动端手势与抽屉动效微调 │
└────────────────────────────┘     └────────────────────────────┘     └────────────────────────────┘
```

1. **Navbar**：滚动增加进度指示（Scroll Progress Indicator），品牌 Logo hover 时触发细微全息光晕。
2. **Hero**：主副标题间距紧凑化，指标卡片加入鼠标移入时的微幅 3D 视差（Tilt Effect）。
3. **Features**：卡片增加高亮边界探照灯效果，Icon 背景加入 Subtle Glow。
4. **InteractiveDemo**：增加节点间的动态连线与流式打字输出，提供场景切换 Tabs。
5. **TerminalPreview**：增加真实语法高亮、可折叠代码块、与 TUI/Desktop 双模状态机动效。
6. **PerformanceMatrix**：表头增加固定悬浮与对比列的高光聚焦（Focus Highlight）。
7. **InstallSection**：集成平台 Tab 切换（macOS / Linux / Docker）与 Border Beam 交互。
