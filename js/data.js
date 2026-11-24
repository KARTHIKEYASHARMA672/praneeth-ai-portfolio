/* ============ PERSON (from CV: A. Praneeth Karthikeya Sharma, 4th-year B.Tech ECE) ============ */
window.DATA = {
  name: "A. Praneeth Karthikeya Sharma",
  title: "B.Tech Student · Electronics & Communication Engineering (4th Year) · AI / IoT Engineer",
  tagline: "Building AI & IoT systems — AI Agents, LLM Automation, Edge Intelligence, and AI-powered Developer Tools",
  email: "karthikeyasharma299@gmail.com",
  phone: "+91 949 262 3987",
  location: "Kadapa, Andhra Pradesh, India",
  github: "https://github.com/KARTHIKEYASHARMA672",
  oldSite: "https://praneethsportfolio.lovable.app/",
  education: [
    { role: "B.Tech in Electronics & Communication Engineering", from: "Lovely Professional University", period: "2023 – Present", note: "4th Year | Focus on IoT, Smart Systems, Intelligent Automation" },
    { role: "Class 12: Physics, Mathematics & Chemistry", from: "Sri Chaitanya College", period: "2021 – 2023", note: "Distinction in Science stream" },
  ],
  skills: [
    { id: "ai-agents", name: "AI Agents & Automation", detail: "Autonomous agents, AI workflows, RAG, function calling, MCP" },
    { id: "prompt", name: "Prompt Engineering & MCP", detail: "LLM orchestration, tool calls, MCP servers, structured prompts" },
    { id: "llm-apis", name: "LLM APIs", detail: "Gemini / OpenAI style APIs — embeddings, chat, function calling" },
    { id: "ai-iot", name: "AI + Edge IoT", detail: "TinyML / TFLite load forecasting, OTA-style edge logic, AI for IoT systems" },
    { id: "sensors", name: "Smart Sensors & Hardware", detail: "MQ-135, DHT22, LDR, BMP280, Arduino, ESP32, NodeMCU, Raspberry Pi" },
    { id: "traffic", name: "AI for Smart Traffic & Env.", detail: "Predictive signal automation, air-quality monitoring" },
    { id: "cv", name: "Computer Vision", detail: "Object & scene understanding for smart systems" },
    { id: "fullstack", name: "Full Stack + Dashboard", detail: "HTML/CSS/JS, React, TypeScript, Chart.js & analytics dashboards" },
    { id: "net", name: "Networking & Cloud", detail: "VLAN, routing, subnetting, Firebase, ThingSpeak, Edge platforms" }
  ],
  experience: [
    { t: "2023–2026", title: "4th-Year B.Tech ECE (LPU)", tag: "Education", body: "B.Tech in Electronics & Communication Engineering with IoT specialization — designing smart, connected systems and AI-integrated hardware/software solutions." },
    { t: "2024–2026", title: "AI Engineering Practitioner", tag: "AI / IoT", body: "Built AI agents (ownJarvis/Koda class tools), AI automation pipelines with Gemini/OpenAI SDKs, RAG-based knowledge systems, and 15+ production-grade AI & IoT systems — all tracked in GitHub." },
    { t: "2026", title: "AI-First Software Team", tag: "Full Stack", body: "Developed Python-based AI agents, SQLite memory stores, FastAPI services and web interfaces integrating AI models with business logic." },
    { t: "2025–2026", title: "AI Automation Builder", tag: "Workflow", body: "Prompt-engineered n8n/GitHub Automation pipelines: Telegram bots, RSS feeds, Gmail APIs, Google Sheets, structured parsers for real business workflows." }
  ],
  certs: [
    { title: "NextGen Networking — LPU", org: "Lovely Professional University", date: "14 Aug 2025", detail: "Advanced networking skill-development program — strong hands-on knowledge of modern computer networks and infrastructure." },
    { title: "NPTEL — Database Management System", org: "NPTEL / IIT Kharagpur", date: "Jul–Sep 2025", detail: "8-week course: SQL, normalization, core DBMS concepts; strengthened data management & backend fundamentals." },
    { title: "Six Sigma Yellow Belt Certification", org: "6sigmastudy", date: "18 Feb 2025", detail: "Practical process-improvement & quality-management fundamentals; strong analytical thinking." },
    { title: "Responsive Web Design", org: "freeCodeCamp", date: "24 Sep 2023", detail: "Hands-on training in HTML, CSS, Flexbox, Grid, modern responsive web development — professional, mobile-friendly interfaces." },
    { title: "GitHub Deployment + Version Control", org: "GitHub (per CV)", date: "2026", detail: "Version control fundamentals for AI/IoT projects — widely used in all showcased repos." }
  ],
  achievements: [
    { n: "01", title: "15+ AI & IoT Production-Grade Systems Deployed", body: "AI automation workflows, IoT monitoring systems, ATS resume analyzers, news-intelligence engines, smart ordering systems — full-stack product development capability." },
    { n: "02", title: "AI Automation Infrastructure", body: "Scalable pipelines integrating Telegram bots, Google Sheets, Gmail APIs, RSS, AI agents (Gemini), structured parsers and real-time databases." },
    { n: "03", title: "Data-Driven System Designer", body: "Real-time data processing, automated logging, AI evaluation models and analytics dashboards for actionable decision-making." }
  ],
  /* AI-first project showcase (selected from GitHub — KARTHIKEYASHARMA672) */
  projects: [
    {
      id: "artisan-ai-picasso", name: "ARTISAN AI — Picasso", tag: "Evidence-Grounded AI",
      desc: "Interactive, evidence-grounded reconstruction of Pablo Picasso: observe his documented chronology, regimes, and a Bull-state scrubber. Citations linked, verified archive — a simulation, not a reproduction of the real artist.",
      hosted: "https://artisan-ai-picasso.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/artisan-ai-picasso",
      lang: "TypeScript", color: "#9d6c47", featured: true, grid: [1, 1, 0]
    },
    {
      id: "blackbox", name: "BLACKBOX — AI Reverse Engineering Lab", tag: "Code Analysis",
      desc: "Upload a codebase and get a complete engineering dossier: structure analysis, Mermaid architecture diagrams, dependency & vulnerability detection, API mapping and security scanning — 100% client-side with your own LLM.",
      hosted: "https://blackbox-nine-psi.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/blackbox",
      lang: "React/TS", color: "#c88b44", featured: true, grid: [2, 0, 0]
    },
    {
      id: "reality-engine", name: "REALITY ENGINE — Virtual Lab", tag: "Physics Sim",
      desc: "Interactive physics-based virtual laboratory: 3D WebGL2, KaTeX live telemetry, 6 multidomain numerical solvers and a 120-concept academic compendium.",
      hosted: "https://reality-engine-orpin.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/reality-engine",
      lang: "React/TS", color: "#76283b", featured: true, grid: [1, 0, 0]
    },
    {
      id: "neurospace", name: "NEUROSPACE — Neural Atlas", tag: "3D Anatomy",
      desc: "Enterprise-grade 3D WebGL medical atlas & neural architecture simulator: all six human systems, 4 radiological modes, live Hodgkin–Huxley action potentials and neuropathologies.",
      hosted: "https://neurospace-3d.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/neurospace",
      lang: "TypeScript", color: "#0f5e6b", featured: true, grid: [1, 0, 0]
    },
    {
      id: "archon", name: "ARCHON — AI Architecture Studio", tag: "AI + 3D Design",
      desc: "AI Architecture Design Intelligence Studio: brief → conceptual designs, generative 2D blueprints, real-time 3D spatial models, solar shadow studies, material customization and parametric cost estimation.",
      hosted: "https://archon-ai-architecture.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/archon",
      lang: "React/TS", color: "#5a4a31", grid: [0, 1, 0]
    },
    {
      id: "nexus-factory", name: "NEXUS FACTORY — AI Company Simulator", tag: "Multi-Agent Sim",
      desc: "Enterprise multi-agent virtual company: autonomous AI execs (CEO, CMO, CFO, COO) debate and run a company against cohorts, while you watch live timelines.",
      hosted: "https://nexus-factory-rho.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/nexus-factory",
      lang: "TypeScript", color: "#1e3a5a", grid: [0, 0, 1]
    },
    {
      id: "aitube", name: "AITube — India's YouTube", tag: "Media Engine",
      desc: "YouTube-style app watching 1,326 curated channels across 13 genres — AI-curated, legal YouTube embedding, no account needed.",
      hosted: "https://ai-tube-one.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/aitube",
      lang: "Next.js/TS", color: "#a038a0", grid: [0, 1, 0]
    },
    {
      id: "smart-grid-platform", name: "SMART GRID PLATFORM", tag: "Energy + AI",
      desc: "Contrasts localized edge substation TFLite load forecasting (<3 ms) against cloud WAN telemetry across 5,000 synthetic grid records — Academic-grade edge-computing simulator.",
      hosted: "https://smart-grid-platform-seven.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/smart-grid-platform",
      lang: "Jupyter", color: "#31724c", grid: [1, 1, 0]
    },
    {
      id: "praneeth-3d-portfolio", name: "Praneeth's Own 3D Portfolio", tag: "Personal 3D Showcase",
      desc: "Interactive 3D WebGL personal portfolio of AI/Automation engineering, IoT systems, computer vision models and spatial scenes — Three.js, Web Audio, HDRI.",
      hosted: "https://praneethkarthikeyaportfolio.vercel.app", repo: "https://github.com/KARTHIKEYASHARMA672/praneeth-3d-portfolio",
      lang: "Vanilla JS", color: "#4a2f70", grid: [0, 1, 0]
    },
    {
      id: "ownbot-gpt", name: "OWNBOT GPT — AI Workspace", tag: "Voice AI",
      desc: "Full conversational AI workspace supporting Gemini + news search with function calling, plus a Python speech-to-speech companion — local, unhosted, open-source quality.",
      hosted: "", repo: "https://github.com/KARTHIKEYASHARMA672/ownbot-gpt",
      lang: "React/TS", color: "#4a7db5", grid: [0, 0, 1]
    },
    {
      id: "viral-reel-studio-style", name: "Viral Reel Studio Style", tag: "Video Tools",
      desc: "Master style sheet + video engine setup for AI/video pipelines — analysis of a style, HyperFrames skills, ffmpeg/whisper/edge-tts toolchain.",
      hosted: "", repo: "https://github.com/KARTHIKEYASHARMA672/viral-reel-studio-style",
      lang: "Markdown + JS", color: "#9e7a4a", grid: [1, 0, 0]
    },
    {
      id: "open-code-find-skills", name: "OpenCode Find Skills", tag: "AI-First Tooling",
      desc: "1,000 unique OpenCode skills (coding/automation/AI/ops) generated for AI-first engineering, synced to memory and pushed with automation PDFs + project ideas.",
      hosted: "", repo: "https://github.com/KARTHIKEYASHARMA672/open-code-find-skills",
      lang: "Python", color: "#35646a", grid: [0, 1, 0]
    },
    {
      id: "koda", name: "KODA — Zero-Cost AI OS", tag: "Local AI OS",
      desc: "Zero-cost Jarvis-class personal AI OS for Windows — 100% of LLM reasoning via free OpenCode models, auto failover on quota/rate limits, SQLite memory, full-duplex voice, 4-tier safety tools.",
      hosted: "", repo: "https://github.com/KARTHIKEYASHARMA672/koda",
      lang: "Python/FastAPI", color: "#5d4a9a", grid: [0, 1, 0]
    }
  ]
};
