# FAST 产品定位、核心价值体系与官网内容全景规划

> **文档版本**：v2.1 Enterprise Architecture, Open Source & Team Collaboration Blueprint  
> **归档路径**：`/Users/kai/iwork/code/work/quant/agent_work/site/docs/PRODUCT_POSITIONING_AND_CONTENT_SPEC.md`  
> **适用范围**：FAST 官网内容体系重构、产品架构白皮书、开源社区与商业化传播

---

## 一、产品全新战略定位与品牌愿景

### 1.1 一句话定位 (Core Statement)
> **FAST 是开源、原生的分布式双模（Coding + Work）智能体操作系统（Agent OS），以多智能体协同与自研记忆系统，打造企业自主进化大脑。**

*(注：更简短的副标/Slogan 可选：`开源分布式双模（Coding + Work）Agent OS，让多智能体协同构筑企业大脑。`)*

### 1.2 核心设计哲学与价值主张 (Core Values)
1. **开源开放，生态共建 (Open Source & Community First)**：
   - 坚持 Apache-2.0 友好的开源协议，代码透明、架构解耦、协议开放，彻底拒绝商业黑盒与厂商绑架。
   - 繁荣的全球开发者社区，提供丰富的官方 SPI 插件、智能体技能库与企业落地模版。
2. **双模（Coding + Work）融通 (Dual-Mode Intelligence)**：
   - 打破传统工具“纯代码补全”或“纯对话助理”的狭隘边界，向下深潜源码工程（Coding），向上统摄企业业务交付与复杂工作流（Work）。
3. **多智能体协作与虚拟团队 (Multi-Agent Virtual Team & Goal DAG)**：
   - 告别单打独斗的 Prompt 交互，支持按需动态编排「分析师 + 架构师 + 质检员 + 总结者」等专属虚拟团队。
   - 以目标驱动交付（Goal-Driven Delivery），内置刚性验收、形式化验证与不可篡改交付账本。
4. **异构开放，全引擎纳管 (Poly-Engine Agility)**：
   - 向下解耦模型与运行时，原生纳管自研引擎、DeepSeek Harness、π-Engine、Codex、Claude Code 等异构引擎，实现任务级智能路由。
5. **原生分布式 Agent 分片内核 (Native Distributed Agent Sharding)**：
   - 基于 RunShard / SessionShard / MetaShard 三级 Agent 分片拓扑，生于分布式，天生具备超大并发无锁隔离、水平弹性伸缩与毫秒级容灾自愈。
6. **全阶接触点 (Multi-Tier Surface)**：
   - 极客终端 Fast-Ink TUI + 沉浸式 Desktop GUI + 企业级嵌入式 SDK / SPI，适配从独立工程师到大型平台研发的全场景。
7. **企业级大脑底座 (Enterprise Brain & Ontology Engine)**：
   - 不可篡改 Run Ledger 审计流水 + 自研长程多级 Memory 系统 + 基于**业务本体论 (Ontology)** 构建的企业知识引擎。
   - 告别孤立冷冰的数据堆叠，通过统一本体建模将底层多源异构数据映射为现实业务概念（客户、资产、订单、设备等）及其动态因果关系，构建高精度企业数字孪生，赋能 AI 做出符合业务逻辑的高阶决策。

---

## 二、六大核心支柱与技术解构 (The 6 Core Pillars)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              FAST NEXT-GEN AGENT OS                                    │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│ 1. 编程智能体 + Work 智能体 (双模融通)     │ 2. 多智能体协作 + 虚拟团队 + Goal DAG 闭环  │
├───────────────────────────────────────────┼────────────────────────────────────────────┤
│ 3. 多引擎开放接入 (自研/DeepSeek/Claude)   │ 4. 原生分布式 Agent 分片集群               │
├───────────────────────────────────────────┼────────────────────────────────────────────┤
│ 5. 全阶接入矩阵 (GUI + TUI + SDK)         │ 6. 自研 Memory 系统 + 知识引擎 (企业大脑)  │
└───────────────────────────────────────────┴────────────────────────────────────────────┘
```

### 支柱 1：编程智能体 + Work 智能体（双模态智能矩阵）
- **编程智能体 (Engineering & Coding Agent)**
  - 源码级 AST/CFG 图谱深度探索与并发锁机制分析；
  - 形式化验证与压力测试自动生成、内存争用与死锁数学证明；
  - 严谨的编译诊断、自动化修复与测试套件执行。
- **Work 工作流智能体 (Business & Workflow Agent)**
  - 跨部门协同任务自动展开（需求分析 ➔ 方案立项 ➔ 研发跟进 ➔ 交付总结）；
  - 预算管控（Budget Shield）与决策树升级拦截（Human-in-the-loop）；
  - 自动生成合规证据链、发布清单与知识资产卡片。

### 支柱 2：多智能体协作、虚拟团队与 Goal DAG 体系 (Virtual Team & Goal DAG)
- **虚拟团队机制 (Virtual Team Ecosystem)**：
  - 预设或自定义复合团队角色（如 `@team/quant-core`、`@team/devsecops`）；
  - 涵盖 **Executor (执行架构师)**、**Verifier (严苛质检员)**、**Summarizer (交付总结者)** 多工种精密分工。
- **目标驱动的可验证交付 (Goal Protocol)**：
  - 声明式验收标准（Acceptance Criteria），未通过质检的代码绝不流入最终产物；
  - 状态流转刚性约束：`DRAFT ➔ RUNNING ➔ VERIFYING ➔ PASS / REJECT ➔ TERMINAL_PASS`。
- **任务审计流水 (Task Trail & Run Ledger)**：
  - 每一个子智能体的思考、工具调用、产物 Diff 和质检报告全程上链存证，可回溯、可追责。

### 支柱 3：开放异构的多引擎纳管架构 (Poly-Engine Runtime)
- **零修改引擎热插拔**：基于 L0 Engine SPI 开放标准，提供统一协议通道与驱动抽象层。
- **全谱系引擎支持**：
  - **自研原生引擎 (FAST Native Engine)**：针对 Actor 分布式调度与极低延时分发深度调优；
  - **DeepSeek Harness**：原生适配 DeepSeek-V3 / R1 推理加速与长上下文流水线；
  - **π-Engine (Pi Engine)**：支持高并发算力调度与异构算力分流；
  - **Codex / Code Engine**：专业代码理解与生成引擎；
  - **Claude Code & Agentic Runtime**：兼容业界顶尖的 Agentic Workflow 协议；
  - **私有化与本地模型 (vLLM / Ollama / Local Private LLM)**。
- **动态智能路由器 (Smart Engine Router)**：根据任务特性自动分发至最优模型，兼顾质量、速度与 Token 成本。

### 支柱 4：原生分布式 Agent 分片集群 (Native Distributed Sharding)
- **分布式 Agent 分片拓扑**：
  - **RunShard**：任务运行时隔离沙箱，管理单次运行生命周期与 OS 级权限控制；
  - **SessionShard**：会话状态无锁流转与上下文热维护，支持数万长连接并发；
  - **MetaShard**：全局路由管理、集群健康探活与故障自愈（Auto-Healing）。
- **高韧性容灾**：节点宕机注入 0 数据丢失，基于持久化 Checkpoint 实现毫秒级无损重拉。
- **算力横向弹性伸缩**：支持单机多核、私有云 VPC 部署及 Hybrid 混合云调度。

### 支柱 5：全阶接触点：GUI + TUI + SDK
- **Fast-Ink TUI (Terminal)**：面向极客工程师的纯字符终端，毫秒级冷启动，原生 NDJSON 字符流驱动。
- **Desktop GUI App**：面向架构师与研发负责人的沉浸式桌面工作台，集成多智能体拓扑监控、实时 Canvas、可视化 Diff 审查与审计账本。
- **Enterprise SDK / SPI**：提供 TypeScript / Python / Go / Rust / Java 语言绑定，一行代码将 FAST 双模引擎嵌入企业内部 DevSecOps、CI/CD 与业务中台。

### 支柱 6：自研多级 Memory 系统与自主学习进化（赋能企业构建自主大脑）
- **自研多级 Memory 记忆与自主学习闭环**：
  - **Episodic Memory (事件与行为记忆)**：全量 Run Ledger 不可篡改时间线，精准记录智能体每一次工具调用、调试轨迹、失败教训与反思复盘；
  - **Semantic Memory (概念与语义记忆)**：自动从海量交互与代码重构中提炼领域概念与规范，完成从感知到认知的升维；
  - **Procedural Memory (技能与规程记忆)**：沉淀经过实战检验的高效工作流、Goal DAG 拓扑模版与团队 SOP，形成智能体肌肉记忆；
  - **自主反思与终身学习 (Autonomous Learning & Self-Evolution)**：
    - **从“静态模型”到“活体智能”**：告别每次启动都是“白纸”的传统 LLM 工具。FAST 智能体在每次任务结束后自动触发**反思提炼（Reflection & Distillation）**；
    - **自我纠错与技能泛化**：成功经验转化为可复用技能，失败教训转化为负向先验拦截，实现“越用越聪明、越用越懂业务”的闭环自主进化。
- **基于本体论的企业知识引擎 (Ontology-driven Knowledge Engine)**：
  - **从“数据存储”跃升为“业务概念”**：
    - 单纯的原始数据（代码库、Git Commits、Jira 任务、MySQL 数据表）只是冷冰冰的散乱信息；
    - 知识引擎通过构建**企业级业务本体 (Enterprise Ontology)**，将数据转化为现实世界的实体概念（如「客户」、「订单」、「微服务拓扑」、「金融资产」、「工厂设备」及其动态关联因果网）；
  - **企业级数字孪生 (Enterprise Digital Twin)**：
    - 结合 GraphRAG 与多源动态图谱，让 Agent 不仅理解代码语法，更深度理解背后的商业契约与系统架构；
    - 支撑复杂推理与高可靠决策，帮助企业构建永不流失、持续进化的自主大脑。

---

## 三、官网落地内容架构与页面文案规约 (Website Blueprint)

### 3.1 导航栏 (Navbar)
- **品牌标**：`FAST ENGINE` • v2.1 (Open Source)
- **主导航**：
  - 核心架构 (`#features`)
  - 双模智能 (`#dual-mode`)
  - 虚拟团队与 Goal (`#virtual-teams`)
  - 异构引擎 (`#engines`)
  - 双端预览 (`#cli`)
  - 企业大脑 (`#enterprise-brain`)
  - 快速安装 (`#install`)
- **操作项**：`GitHub ⭐ (Apache-2.0)`、`curl -fsSL fast.ai/install`、`免费体验 / 获取企业版`

### 3.2 首屏 (Hero Section)
- **微标 (Pill)**：`开源分布式双模（Coding + Work）Agent OS • Apache-2.0 许可`
- **主标题**：
  - `编程智能体 (Coding) × 业务智能体 (Work)。`
  - `多智能体协同，构筑企业自主大脑。`
- **副标题**：
  - `开源、原生分布式 Agent 内核，纳管自研、DeepSeek、π、Codex、Claude 等全谱系引擎。支持虚拟团队动态协作、Goal DAG 可验证闭环，结合自研 Memory 与知识引擎，定义下一代工程级智能体系统。`
- **四大核心指标 (2x2 Grid)**：
  1. `Dual-Mode`：Coding + Work 双模融通
  2. `Virtual Team`：多智能体协作与 Goal DAG 闭环
  3. `Agent Sharding`：原生分布式 Run / Session 分片集群
  4. `Enterprise Brain`：自研 Memory + 知识引擎持久进化

### 3.3 多智能体协作与虚拟团队专区 (Virtual Team & Goal DAG)
- **协同机制图解**：
  - `@team/quant-core`：
    - `[Executor]` WorkspaceCodingAgent ➔ 编写 Disruptor 撮合代码
    - `[Verifier]` BenchmarkVerifier ➔ 运行沙箱 100k TPS 压力验证
    - `[Summarizer]` AuditSummarizer ➔ 签署发布证据与存证
- **刚性交付承诺**：未通过 Verifier 验证的代码绝不流入最终产物，0 幻觉、0 妥协。

### 3.4 异构多引擎矩阵 (Poly-Engine Ecosystem)
- **统一 SPI 总线展示**：
  - `FAST Native Engine` (极速内核)
  - `DeepSeek Harness` (V3 / R1)
  - `π-Engine` (异构算力调度)
  - `OpenAI Codex` (专业代码生成)
  - `Claude Code` (Agentic 协议)
  - `Private LLM / vLLM` (本地私有化)

### 3.5 交互式交付模拟器 (Interactive Simulator)
- **预设场景更新**：
  1. `[虚拟团队] 量化高频订单簿与并发死锁证明 (@team/quant-core)`
  2. `[Work 协同] 企业端到端发布流水线与多 Agent 协同 (@team/devsecops)`
  3. `[分布式自愈] SessionShard 宕机注入与无损自愈 (@team/infra-chaos)`
  4. `[企业大脑] 知识引擎索引代码库与历史经验检索 (@team/brain-memory)`

### 3.6 企业大脑：自研 Memory 自主进化与本体知识引擎 (Enterprise Brain)
- **三层 Memory 自主进化闭环**：
  - **Episodic (事件行为反思)** + **Semantic (概念提炼升维)** + **Procedural (SOP 技能内化)**；
  - 具备**终身学习 (Lifelong Learning)** 机制，任务交付后自动提炼成功经验并沉淀失败教训，越用越聪明。
- **本体论建模与数字孪生**：超越简单文档存储与向量检索，将企业异构多源数据结构化为**实体与因果关联网络**（客户/资产/设备/拓扑），构建高保真数字孪生，驱动高阶业务智能决策。

---

## 四、实施与升级落地规约

1. **开源属性贯穿**：全站显性强化 **Open Source (Apache-2.0)** 徽章与 GitHub 链接。
2. **术语与概念统一**：
   - 强化 **Actor 分布式**、**编程智能体 + Work 智能体 (双模)**、**多智能体协作 (Multi-Agent)**、**虚拟团队 (Virtual Team)**、**Goal 可验证闭环**、**自研 Memory**、**企业知识引擎**。
3. **视觉与交互延续**：
   - 保持 Apple Pro 极简暗黑美学、WCAG AA 对比度、Spotlight 鼠标流光、平滑 Tab 变形与流式打字输出。
