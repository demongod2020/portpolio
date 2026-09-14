export type ProjectCategory = "Game" | "AI / Data" | "Web" | "System";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  period: string;
  description: string;
  summary: string;
  tech: string[];
  role: string[];
  highlights: string[];
  problem: string;
  solution: string;
  outcome: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "year-project",
    title: "YEAR PROJECT",
    subtitle: "2D Platform Game",
    category: "Game",
    period: "2026.05 - Present",
    description: "분신, 대쉬, 레이저와 카메라 기믹을 활용하는 2D 플랫폼 게임 프로젝트입니다.",
    summary: "게임 플레이 감각과 기믹 확장성을 중심으로 직접 설계하고 구현한 장기 프로젝트.",
    tech: ["Unity", "C#", "GitHub", "Game Design"],
    role: [
      "플레이어 이동 및 상태 제어",
      "분신 시스템과 대쉬 기믹 구현",
      "레이저·카메라 스테이지 기믹 설계",
      "챕터별 난이도 및 진행 구조 기획"
    ],
    highlights: [
      "챕터마다 새로운 이동 기믹을 단계적으로 학습시키는 구조",
      "복수의 플레이어 상태를 연결하는 분신 메커니즘",
      "플레이 영상 기반으로 반복적인 조작감 튜닝"
    ],
    problem: "기믹이 늘어나면서 플레이어 상태 전이가 복잡해지고, 입력 처리와 애니메이션 상태가 서로 충돌하는 문제가 생겼습니다.",
    solution: "이동 상태와 기믹 상태를 분리하고, 각 기능이 공통 플레이어 인터페이스를 통해 상태를 확인하도록 구조를 단순화했습니다.",
    outcome: "기믹 추가 시 기존 이동 코드 수정 범위를 줄였고, 챕터별 기능 확장이 쉬워졌습니다.",
    github: "https://github.com/demongod2020/yearproject",
    featured: true,
    accent: "GAME"
  },
  {
    slug: "ai-ethics-simulator",
    title: "AI ETHICS SIMULATOR",
    subtitle: "Context-aware AI Decision Simulator",
    category: "AI / Data",
    period: "2025.05 - 2025.06",
    description: "효율만이 아니라 문맥, 도덕, 문화 요소를 함께 고려하는 AI 판단 시뮬레이터입니다.",
    summary: "키워드·가중치·문맥 분석을 결합해 판단 근거를 시각적으로 설명하는 팀 프로젝트.",
    tech: ["Python", "Flask", "BERT", "KoNLPy"],
    role: [
      "문맥 인식 알고리즘 설계",
      "키워드 가중치 및 점수화 로직 구현",
      "문화 프로파일 반영 로직 설계",
      "Flask 기반 시뮬레이션 UI 연동"
    ],
    highlights: [
      "단순 분류 대신 판단 근거 점수를 함께 노출",
      "사용자 조건에 따라 문화 프로파일을 다르게 적용",
      "윤리 판단 과정을 단계적으로 확인 가능한 UI"
    ],
    problem: "동일한 문장이더라도 맥락과 문화적 기준에 따라 해석이 달라질 수 있어 단순 키워드 매칭만으로는 판단이 불안정했습니다.",
    solution: "문장 특징, 핵심 키워드, 문맥 임베딩을 분리해 점수화하고 최종 판단 시 가중 합산하도록 구성했습니다.",
    outcome: "판단 결과뿐 아니라 어떤 요소가 결과에 영향을 주었는지 설명 가능한 구조를 만들었습니다.",
    featured: true,
    accent: "AI"
  },
  {
    slug: "lol-meta-analysis",
    title: "LOL META ANALYSIS",
    subtitle: "Champion Meta Data Pipeline",
    category: "AI / Data",
    period: "2026.05",
    description: "챔피언 메타 데이터를 수집하고 전처리해 승률·밴률·빌드 데이터를 분석하는 프로젝트입니다.",
    summary: "Playwright 기반 수집부터 머신러닝 분석까지 연결한 데이터 프로젝트.",
    tech: ["Python", "Playwright", "Pandas", "HistGradientBoosting"],
    role: [
      "메타 데이터 크롤링 구조 설계",
      "룬·아이템·스킬 데이터 정규화",
      "머신러닝 입력 데이터셋 구성",
      "지표 비교 및 모델 평가"
    ],
    highlights: [
      "동적 웹 페이지 자동 수집",
      "챔피언별 소프트 속성 구조화",
      "DL 접근에서 ML 모델로 전환하며 복잡도 축소"
    ],
    problem: "동적 렌더링으로 인해 단순 HTTP 요청만으로 필요한 데이터를 안정적으로 얻기 어려웠습니다.",
    solution: "Playwright로 실제 브라우저 렌더링을 거친 뒤 필요한 필드를 구조화해 저장하도록 수집 파이프라인을 만들었습니다.",
    outcome: "데이터 수집 과정을 재사용 가능하게 만들고 모델 비교가 가능한 형태로 정리했습니다.",
    featured: true,
    accent: "DATA"
  },
  {
    slug: "vr-pneumatic-glove",
    title: "VR PNEUMATIC GLOVE",
    subtitle: "VR Interaction Prototype",
    category: "System",
    period: "2026.06",
    description: "공압 장갑과 VR 환경을 연결해 손 동작 기반 상호작용을 구현하는 프로토타입입니다.",
    summary: "하드웨어 입력과 VR 인터랙션을 결합한 실습형 프로젝트.",
    tech: ["VR", "Sensors", "Interaction", "Prototype"],
    role: [
      "상호작용 시나리오 정리",
      "입력-반응 흐름 설계",
      "작업 명세 및 테스트 항목 작성"
    ],
    highlights: [
      "장갑 입력과 가상 객체 반응 연결",
      "사용자 동작 중심 시나리오 설계",
      "실험 단계별 체크리스트 구성"
    ],
    problem: "물리 장치의 입력과 가상 환경의 반응 사이에 지연과 불일치가 발생할 수 있었습니다.",
    solution: "입력 이벤트를 단순화하고 상호작용 단위를 분리해 단계별로 검증할 수 있도록 설계했습니다.",
    outcome: "기능별 테스트가 가능한 프로토타입 구조를 만들었습니다.",
    accent: "VR"
  },
  {
    slug: "portfolio-web",
    title: "PORTFOLIO WEB",
    subtitle: "Personal Portfolio Platform",
    category: "Web",
    period: "2026.09",
    description: "프로젝트를 쉽게 추가하고 관리할 수 있도록 설계한 Next.js 기반 개인 포트폴리오 사이트입니다.",
    summary: "Home / Works / Detail 구조와 데이터 중심 관리 방식으로 만든 포트폴리오.",
    tech: ["Next.js", "TypeScript", "Vercel", "CSS"],
    role: [
      "정보 구조 설계",
      "반응형 UI 구현",
      "프로젝트 데이터 모델 설계",
      "Vercel 배포"
    ],
    highlights: [
      "프로젝트 데이터 한 파일에서 관리",
      "동적 상세 페이지 자동 생성",
      "카테고리 필터와 대표 프로젝트 분리"
    ],
    problem: "프로젝트가 늘어날수록 메인 페이지 코드가 복잡해지고 새로운 작업물을 추가할 때마다 UI 코드를 수정해야 했습니다.",
    solution: "프로젝트 정보를 data/projects.ts로 분리하고 slug 기반 동적 라우팅을 사용했습니다.",
    outcome: "새 프로젝트 추가 시 데이터 객체 하나만 추가하면 목록과 상세 페이지에 자동 반영됩니다.",
    github: "https://github.com/demongod2020/portpolio",
    accent: "WEB"
  }
];

export const categories = ["All", "Game", "AI / Data", "Web", "System"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
