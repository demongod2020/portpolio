import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const gestureFlow = [
  "왼손으로 Grid UI에서 사전 정의 제스처 선택",
  "선택된 제스처에 대응하는 손가락 굽힘 preset 로드",
  "UDP 기반 장갑 API 호출",
  "오른손 장갑에서 목표 제스처 재현",
  "VR 화면에서 목표/현재 제스처 결과 확인"
];

const objectFlow = [
  "왼손으로 여러 물체 중 하나를 포인팅",
  "선택 물체를 오른손 근처로 이동",
  "오른손 grab 상태로 전환",
  "물체 크기/분류에 맞는 굽힘 preset 선택",
  "장갑 API를 통해 목표 그립 상태 재현"
];

const objects = [
  { id: "03", name: "Cracker Box", type: "Box Grip", note: "직육면체 형상에 맞춘 손가락 굽힘 preset" },
  { id: "06", name: "Mustard Bottle", type: "Bottle Grip", note: "원통형 물체를 감싸는 형태의 grip preset" },
  { id: "53", name: "Mini Soccer Ball", type: "Spherical Grip", note: "구형 물체에 맞춘 분산형 손가락 굽힘 preset" }
];

export const metadata = {
  title: "VR Pneumatic Glove | Shin Jiho",
  description: "Meta Quest 3, Manus Quantum Metaglove, UDP glove API 기반 VR 인터랙션 프로토타입."
};

export default function VRPneumaticGlovePage() {
  return (
    <>
      <RevealObserver />
      <main>
        <section className="detail-hero section">
          <Nav />
          <Link className="back-link" href="/works">← BACK TO WORKS</Link>

          <div className="detail-head vr-detail-head reveal visible">
            <div>
              <p className="eyebrow">SYSTEM · VR INTERACTION PROTOTYPE</p>
              <h1>VR PNEUMATIC<br />GLOVE</h1>
              <p className="detail-subtitle">
                모션캡처 장갑의 손 자세를 VR 손 스켈레톤에 실시간 반영하고,
                인터랙션 상황에 따라 UDP 기반 장갑 API로 손가락 굽힘값을 전달하는
                VR 인터랙션 프로토타입입니다.
              </p>
            </div>
            <div className="detail-mark">VR</div>
          </div>
        </section>

        <section className="section vr-summary-grid">
          <div className="vr-kpi reveal">
            <span>01</span>
            <p>DEVICE</p>
            <strong>Meta Quest 3</strong>
          </div>
          <div className="vr-kpi reveal">
            <span>02</span>
            <p>MOTION INPUT</p>
            <strong>Manus Quantum Metaglove</strong>
          </div>
          <div className="vr-kpi reveal">
            <span>03</span>
            <p>ENGINE</p>
            <strong>Unity Main</strong>
          </div>
          <div className="vr-kpi reveal">
            <span>04</span>
            <p>GLOVE CONTROL</p>
            <strong>UDP API</strong>
          </div>
        </section>

        <section className="section vr-overview">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / PROJECT OBJECTIVE</p>
              <h2>Motion capture<br />meets haptic control.</h2>
            </div>
          </div>

          <div className="vr-two-col">
            <div className="vr-copy reveal">
              <h3>프로젝트 목적</h3>
              <p>
                햅틱장갑 시스템의 모션캡처 입력과 장갑 동작 API를 함께 활용하여,
                VR 핸드 트래킹/컨트롤러 인터페이스 기반의 두 가지 인터랙션 시나리오를
                실제로 시연 가능한 수준의 프로토타입으로 구현하는 것이 목표입니다.
              </p>
            </div>

            <div className="vr-copy reveal">
              <h3>요구 산출물</h3>
              <ul className="vr-bullet-list">
                <li>실행 가능한 VR 프로젝트 또는 빌드</li>
                <li>실행 및 설정 README</li>
                <li>시나리오별 데모 영상</li>
                <li>시나리오별 스크린샷</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section vr-system-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">02 / SYSTEM ARCHITECTURE</p>
              <h2>Input → VR →<br />Glove feedback.</h2>
            </div>
          </div>

          <div className="vr-architecture reveal">
            <div className="architecture-node">
              <span>LEFT HAND</span>
              <strong>Controller / Hand Tracking</strong>
              <p>UI 선택과 물체 포인팅 입력</p>
            </div>
            <div className="architecture-arrow">→</div>
            <div className="architecture-node featured">
              <span>VR APPLICATION</span>
              <strong>Unity + Meta Quest 3</strong>
              <p>인터랙션 판정, preset 선택, 시각 피드백</p>
            </div>
            <div className="architecture-arrow">→</div>
            <div className="architecture-node">
              <span>RIGHT HAND</span>
              <strong>Manus Motion Capture</strong>
              <p>오른손 자세를 VR 손 스켈레톤에 실시간 반영</p>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node api">
              <span>CONTROL</span>
              <strong>UDP Glove API</strong>
              <p>timestamp + 4 finger bend floats</p>
            </div>
          </div>

          <div className="vr-api-card reveal">
            <div>
              <p className="eyebrow">UDP PAYLOAD</p>
              <h3>Finger bend command</h3>
            </div>
            <code>
              {"{ timestamp, finger_1, finger_2, finger_3, finger_4 }"}
            </code>
            <p>
              손가락 채널별 굽힘값은 <strong>0 = 펴짐</strong>, <strong>1 = 굽힘</strong> 범위의
              float 값으로 전달합니다. 세부 packet 형식이 확정되기 전에는 dummy server에
              dump하는 방식으로 시뮬레이션할 수 있도록 정의되어 있습니다.
            </p>
          </div>
        </section>

        <section className="section vr-scenario-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">03 / SCENARIO 01 · PRIORITY 1</p>
              <h2>Gesture selection<br />& reproduction.</h2>
            </div>
          </div>

          <div className="scenario-layout">
            <div className="scenario-intro reveal">
              <p className="scenario-number">01</p>
              <h3>제스처 선택 및 재현</h3>
              <p>
                사전 정의된 손 제스처를 Grid UI에서 선택하면,
                해당 제스처의 손가락 굽힘 preset을 불러와 오른손 장갑 동작으로 재현합니다.
              </p>
            </div>

            <ol className="flow-list">
              {gestureFlow.map((step, index) => (
                <li className="reveal" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="acceptance-card reveal">
            <div>
              <p className="eyebrow">PASS CRITERIA</p>
              <h3>시나리오 1 검수 조건</h3>
            </div>
            <ul>
              <li>Grid UI의 정의된 제스처가 모두 선택 가능해야 함</li>
              <li>선택 후 1초 이내 올바른 제스처용 장갑 API 송신이 발생해야 함</li>
              <li>3회 연속 테스트에서 오매핑이 없어야 함</li>
            </ul>
          </div>
        </section>

        <section className="section vr-scenario-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">04 / SCENARIO 02 · PRIORITY 2</p>
              <h2>Object selection<br />& grip reproduction.</h2>
            </div>
          </div>

          <div className="scenario-layout">
            <div className="scenario-intro reveal">
              <p className="scenario-number">02</p>
              <h3>물체 선택 및 그립 재현</h3>
              <p>
                왼손으로 물체를 선택하면 물체가 오른손으로 이동해 grab 상태가 되고,
                물체의 크기와 형상에 맞는 preset을 선택해 오른손 장갑의 손 자세를 재현합니다.
              </p>
            </div>

            <ol className="flow-list">
              {objectFlow.map((step, index) => (
                <li className="reveal" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="object-grid">
            {objects.map((object) => (
              <article className="object-card reveal" key={object.id}>
                <span className="object-id">YCB {object.id}</span>
                <div className="object-symbol">{object.id}</div>
                <p className="eyebrow">{object.type}</p>
                <h3>{object.name}</h3>
                <p>{object.note}</p>
              </article>
            ))}
          </div>

          <div className="acceptance-card reveal">
            <div>
              <p className="eyebrow">PASS CRITERIA</p>
              <h3>시나리오 2 검수 조건</h3>
            </div>
            <ul>
              <li>물체 선택 후 오른손에서 해당 물체가 grab 상태로 전환되어야 함</li>
              <li>서로 다른 물체에 대해 장갑 송신값이 다르게 설정되어야 함</li>
              <li>README 절차만으로 동일한 동작을 재현할 수 있어야 함</li>
            </ul>
          </div>
        </section>

        <section className="section vr-validation">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">05 / VALIDATION</p>
              <h2>What counts<br />as complete.</h2>
            </div>
          </div>

          <div className="validation-grid">
            <div className="validation-card reveal">
              <span>COMMON</span>
              <h3>실환경 데모 우선</h3>
              <p>제공된 모션 캡처 및 장갑 API 연동 환경에서의 실환경 데모를 기본 검수 방식으로 사용합니다.</p>
            </div>
            <div className="validation-card reveal">
              <span>FALLBACK</span>
              <h3>Build + Video</h3>
              <p>실환경 검수가 어려운 경우 실행 빌드와 시나리오 영상을 제출하는 방식으로 대체할 수 있습니다.</p>
            </div>
            <div className="validation-card reveal">
              <span>RELIABILITY</span>
              <h3>3 consecutive passes</h3>
              <p>각 시나리오는 연속 3회 성공을 기준으로 입력, preset, API 호출, VR 결과를 확인합니다.</p>
            </div>
          </div>

          <div className="deliverable-table reveal">
            <div className="deliverable-row head">
              <span>SCENARIO</span>
              <span>EVIDENCE</span>
            </div>
            <div className="deliverable-row">
              <strong>Gesture</strong>
              <p>시나리오 영상 1개 이상 · 제스처별 매핑표</p>
            </div>
            <div className="deliverable-row">
              <strong>Object / Grip</strong>
              <p>시나리오 영상 1개 이상 · 물체별 송신값 표 또는 캡처</p>
            </div>
          </div>
        </section>

        <section className="section vr-stack-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">06 / DEVELOPMENT ENVIRONMENT</p>
              <h2>Built around<br />real hardware.</h2>
            </div>
          </div>

          <div className="stack-cloud reveal">
            <span>Windows PC</span>
            <span>Unity</span>
            <span>Meta Quest 3</span>
            <span>Air Link / Wired Link</span>
            <span>Manus Quantum Metaglove</span>
            <span>Manus SDK</span>
            <span>UDP</span>
            <span>VR Hand Tracking</span>
            <span>Controller Input</span>
            <span>YCB Object Set</span>
          </div>
        </section>

        <section className="section next-project">
          <Link href="/works">
            <span>BACK TO ARCHIVE</span>
            <strong>Explore other works ↗</strong>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
