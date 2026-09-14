import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import RevealObserver from "@/components/RevealObserver";
import { projects } from "@/data/projects";

const featured = projects.filter((project) => project.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <RevealObserver />
      <main>
        <section className="hero section">
          <Nav />
          <div className="hero-grid">
            <div className="hero-copy reveal visible">
              <p className="eyebrow">SHIN JIHO · PORTFOLIO 2026</p>
              <h1>
                GAME <span>&</span><br />
                SOFTWARE<br />
                DEVELOPER.
              </h1>
              <p className="hero-description">
                게임을 중심으로 AI, 데이터, 시스템까지 직접 설계하고 구현합니다.
                기능을 만드는 것보다 왜 이렇게 만들어야 하는지를 고민하는 개발자를 목표로 합니다.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/works">VIEW WORKS <span>↗</span></Link>
                <a className="button ghost" href="#about">ABOUT ME <span>↓</span></a>
              </div>
            </div>

            <div className="hero-panel reveal visible">
              <div className="terminal-bar">
                <span></span><span></span><span></span>
                <p>profile.ts</p>
              </div>
              <pre>{`const developer = {
  name: "Shin Jiho",
  focus: [
    "Game Development",
    "Software",
    "AI / Data",
    "Systems"
  ],
  status: "building..."
};`}</pre>
              <div className="status-line">
                <span className="status-dot"></span>
                Available for new projects
              </div>
            </div>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="section selected-works">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / SELECTED WORKS</p>
              <h2>Projects that<br />show how I build.</h2>
            </div>
            <Link className="text-link" href="/works">VIEW ALL WORKS <span>↗</span></Link>
          </div>
          <div className="featured-grid">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section about-grid" id="about">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">02 / ABOUT</p>
              <h2>I like making<br />ideas executable.</h2>
            </div>
          </div>

          <div className="about-copy reveal">
            <p className="large-copy">
              기획에서 끝나는 아이디어보다 직접 실행되는 결과물을 좋아합니다.
            </p>
            <p>
              게임 콘텐츠를 중심으로 공부하면서 웹, AI, 임베디드, 네트워크 프로젝트까지
              폭넓게 경험하고 있습니다. 서로 다른 분야를 연결해 실제로 동작하는 구조를 만드는
              과정에 관심이 많습니다.
            </p>
            <p>
              팀 프로젝트에서는 맡은 기능만 구현하는 것보다 전체 흐름을 이해하고,
              다른 기능과 충돌하지 않는 구조를 만드는 것을 중요하게 생각합니다.
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">03 / SKILLS</p>
              <h2>What I work with.</h2>
            </div>
          </div>

          <div className="skill-grid">
            {[
              ["Game Development", "Unity · C# · Gameplay Systems · Level Design"],
              ["Software", "C/C++ · Java · Python · Data Structures"],
              ["Web & Data", "Next.js · TypeScript · Flask · Playwright · ML"],
              ["Systems", "Linux · UDP · RTOS · DPDK · Multithreading"]
            ].map(([title, detail], index) => (
              <article className="skill-card reveal" key={title} style={{ ["--delay" as string]: `${index * 70}ms` }}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-box reveal">
            <p className="eyebrow">04 / CONTACT</p>
            <h2>Have an idea?<br />Let&apos;s build it.</h2>
            <div className="contact-links">
              <a href="mailto:jiho.etri@gmail.com">EMAIL ↗</a>
              <a href="https://github.com/demongod2020" target="_blank" rel="noreferrer">GITHUB ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
