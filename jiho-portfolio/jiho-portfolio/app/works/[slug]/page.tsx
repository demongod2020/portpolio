import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <RevealObserver />
      <main>
        <section className="detail-hero section">
          <Nav />
          <Link className="back-link" href="/works">← BACK TO WORKS</Link>

          <div className="detail-head reveal visible">
            <div>
              <p className="eyebrow">{project.category} · {project.period}</p>
              <h1>{project.title}</h1>
              <p className="detail-subtitle">{project.description}</p>
            </div>
            <div className="detail-mark">{project.accent ?? "WORK"}</div>
          </div>
        </section>

        <section className="section detail-grid">
          <aside className="detail-meta reveal">
            <div>
              <p className="meta-label">CATEGORY</p>
              <strong>{project.category}</strong>
            </div>
            <div>
              <p className="meta-label">PERIOD</p>
              <strong>{project.period}</strong>
            </div>
            <div>
              <p className="meta-label">STACK</p>
              <div className="tag-row">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
            {(project.github || project.demo) && (
              <div className="detail-links">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}
              </div>
            )}
          </aside>

          <article className="detail-content">
            <section className="detail-block reveal">
              <p className="eyebrow">OVERVIEW</p>
              <h2>{project.summary}</h2>
            </section>

            <section className="detail-block reveal">
              <p className="eyebrow">MY ROLE</p>
              <ul className="detail-list">
                {project.role.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="detail-block reveal">
              <p className="eyebrow">HIGHLIGHTS</p>
              <div className="highlight-grid">
                {project.highlights.map((item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-block case-study reveal">
              <p className="eyebrow">PROBLEM → SOLUTION → OUTCOME</p>
              <div className="case-row">
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div className="case-row">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </div>
              <div className="case-row">
                <h3>Outcome</h3>
                <p>{project.outcome}</p>
              </div>
            </section>
          </article>
        </section>

        <section className="section next-project">
          <Link href="/works">
            <span>EXPLORE MORE</span>
            <strong>View all works ↗</strong>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
