import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorksClient from "@/components/WorksClient";
import RevealObserver from "@/components/RevealObserver";

export const metadata = {
  title: "Works | Shin Jiho"
};

export default function WorksPage() {
  return (
    <>
      <RevealObserver />
      <main>
        <section className="works-hero section">
          <Nav />
          <div className="works-intro reveal visible">
            <p className="eyebrow">WORK ARCHIVE</p>
            <h1>Selected &<br />ongoing works.</h1>
            <p>
              게임, AI / Data, Web, System 프로젝트를 한곳에 모았습니다.
              각 작업을 선택하면 구현 내용과 문제 해결 과정을 확인할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="section works-list-section">
          <WorksClient />
        </section>
      </main>
      <Footer />
    </>
  );
}
