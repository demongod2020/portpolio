import Reveal from "../components/Reveal";
import MouseGlow from "../components/MouseGlow";

const projects = [
  {
    no: "01",
    type: "GAME DEVELOPMENT",
    title: "Neural Backup",
    description:
      "뇌 백업과 해킹을 소재로 한 액션 퍼즐 게임 프로젝트. 분신, 대시, 벽차기, 레이저와 카메라 기믹을 단계적으로 확장하며 플레이 흐름을 설계했습니다.",
    tags: ["Unity", "C#", "Game Design", "GitHub"],
    link: "https://github.com/demongod2020/yearproject",
    accent: "violet",
  },
  {
    no: "02",
    type: "AI / NLP",
    title: "AI Ethics Simulator",
    description:
      "효율만 보는 의사결정이 아니라 문맥·도덕·문화 요소를 함께 고려하도록 설계한 AI 윤리 판단 시뮬레이터입니다. 키워드와 가중치 기반 문맥 점수화를 구현했습니다.",
    tags: ["Python", "BERT", "KoNLPy", "Flask"],
    link: "#contact",
    accent: "cyan",
  },
  {
    no: "03",
    type: "DATA / MACHINE LEARNING",
    title: "LoL Meta Analyzer",
    description:
      "리그 오브 레전드 메타 데이터를 수집하고 승률·밴률·룬·코어 아이템 흐름을 분석하는 프로젝트입니다. Playwright 기반 데이터 수집과 ML 모델링을 진행했습니다.",
    tags: ["Python", "Playwright", "HGB", "Data"],
    link: "#contact",
    accent: "lime",
  },
];

const skillGroups = [
  ["GAME DEVELOPMENT", "Unity · C# · Gameplay Logic · Level Design"],
  ["SOFTWARE", "C · C++ · Java · Python · Data Structures"],
  ["WEB & DATA", "Next.js · React · Flask · Playwright · ML"],
  ["SYSTEMS", "Linux · Networking · UDP · RTOS · DPDK"],
];

export default function Home() {
  return (
    <main>
      <MouseGlow />
      <div className="noise" aria-hidden="true" />

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Home">
          JH<span>.</span>
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span /> SHIN JIHO · PORTFOLIO 2026</p>
          <h1>
            GAME <span>&</span><br />
            SOFTWARE<br />
            DEVELOPER.
          </h1>
          <p className="hero-text">
            게임의 재미를 설계하고, 소프트웨어로 구현합니다.<br />
            시스템부터 웹·AI까지 직접 만들어 보며 문제를 해결해 왔습니다.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View projects <span>↘</span></a>
            <a className="btn ghost" href="https://github.com/demongod2020" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </Reveal>

        <Reveal className="code-card" delay={120}>
          <div className="code-top"><span /><span /><span /><p>developer.ts</p></div>
          <pre>{`const developer = {\n  name: \"Shin Jiho\",\n  focus: [\n    \"Game Development\",\n    \"Software Engineering\",\n    \"AI & Data\",\n    \"Systems\"\n  ],\n  state: \"building\"\n};`}</pre>
          <div className="terminal-line"><span>~/portfolio</span> git status <b>● ready to ship</b></div>
        </Reveal>

        <div className="scroll-hint">SCROLL <span>↓</span></div>
      </section>

      <section id="projects" className="section shell">
        <Reveal>
          <div className="section-head">
            <div><p className="eyebrow"><span /> SELECTED WORK</p><h2>PROJECTS</h2></div>
            <p>기획부터 구현까지 직접 다뤄본 프로젝트를 중심으로 정리했습니다.</p>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <a className={`project-card ${project.accent}`} href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <div className="project-no">{project.no}</div>
                <div className="project-main">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-arrow">↗</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section shell about-grid">
        <Reveal>
          <p className="eyebrow"><span /> ABOUT</p>
          <h2>BUILD.<br />TEST.<br /><span>IMPROVE.</span></h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="about-copy">
            <p className="about-lead">게임 개발을 중심으로 시작했지만, 좋은 결과물을 만들기 위해 필요한 기술이라면 영역을 가리지 않고 직접 부딪혀 왔습니다.</p>
            <p>임베디드·네트워크 실습부터 웹, 데이터 수집, 머신러닝까지 경험하면서 “기능이 돌아가는 것”을 넘어 구조와 효율을 생각하는 개발을 지향하고 있습니다.</p>
          </div>
          <div className="skill-list">
            {skillGroups.map(([title, text], i) => (
              <div className="skill-row" key={title}>
                <span>0{i + 1}</span><strong>{title}</strong><p>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="contact shell">
        <Reveal>
          <p className="eyebrow light"><span /> CONTACT</p>
          <h2>LET&apos;S BUILD<br />SOMETHING <em>GOOD.</em></h2>
          <div className="contact-row">
            <p>프로젝트, 협업, 개발 이야기는 언제든 환영합니다.</p>
            <div>
              <a href="mailto:jiho.etri@gmail.com">jiho.etri@gmail.com ↗</a>
              <a href="https://github.com/demongod2020" target="_blank" rel="noreferrer">github.com/demongod2020 ↗</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer shell">
        <p>© 2026 SHIN JIHO</p><p>GAME & SOFTWARE DEVELOPER</p><a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
