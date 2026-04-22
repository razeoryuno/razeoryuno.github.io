export const siteConfig = {
  name: "Ittiwat Tuntithavorn",
  title: "Game Developer Programmer",
  description: "Portfolio of Ittiwat Tuntithavorn — Game Developer with 10+ years of experience in Unity and C#",
  accentColor: "#1d4ed8",
  social: {
    email: "Ittiwat_tun@live.com",
    linkedin: "",
    twitter: "",
    github: "https://github.com/razeoryuno",
  },
  aboutMe:
    "Senior Game Developer with 10+ years of experience shipping games across mobile, PC, WebGL, and Telegram Mini Apps. Specializing in Unity (C#) with full-stack capability — building game clients, Go backend APIs, real-time multiplayer servers, and deployment pipelines. Comfortable across the entire production lifecycle from architecture to store submission.",
  skills: [
    "Unity Engine",
    "C# / .NET",
    "Go (Golang)",
    "MagicOnion / gRPC",
    "Real-time Multiplayer",
    "PostgreSQL",
    "Redis",
    "Docker / Kubernetes",
    "Google Sheets API",
    "TON Blockchain",
    "PlayFab / Nakama",
    "Spine2D / Live2D",
  ],
  projects: [
    {
      name: "CardPotion",
      description:
        "A card game built with Unity. Click to play it in the browser via Unity WebGL.",
      link: "https://razeoryuno.github.io/git-hub-page-test",
      skills: ["Unity", "C#", "WebGL"],
    },
  ],
  experience: [
    {
      company: "Varisoft CO., Ltd",
      title: "Game Developer Programmer",
      dateRange: "2019 - Present",
      bullets: [
        "Shipped 14+ games and apps across iOS, Android, WebGL, and Telegram Mini Apps",
        "Built full-stack architecture with Unity/C# clients and Go backend APIs connected via gRPC and MagicOnion for real-time multiplayer",
        "Developed shared live-service libraries (C# and Go) reused across all projects to standardize auth, IAP, and data pipelines",
        "Designed a Google Sheets–driven master data pipeline enabling designers to manage game balance without code changes",
        "Integrated Web3/TON blockchain and Telegram Mini App SDK for Catbomb, a browser-based game with on-chain item ownership",
        "Set up PostgreSQL + ClickHouse + Redis backends with Docker/Kubernetes deployment and CI/CD via GitHub Actions",
        "Handled full store deployment pipeline for Google Play, App Store, and WebGL (AWS S3) including IAP via Omise payment gateway",
      ],
    },
    {
      company: "Crosstales Studio CO., Ltd",
      title: "Game Developer Programmer",
      dateRange: "2017 - 2019",
      bullets: [
        "Developed gameplay systems and UI for multiple Unity game projects",
        "Contributed to Agile development workflows using Git and Scrum",
      ],
    },
    {
      company: "MIRYN INNOVATION",
      title: "Game Developer Programmer",
      dateRange: "2015 - 2017",
      bullets: [
        "Built game mechanics, UI systems, and mobile optimization in Unity",
        "Handled Google Play and App Store deployment and monetization integration",
      ],
    },
    {
      company: "CGMatic CO., Ltd",
      title: "Game Developer Programmer",
      dateRange: "2013 - 2015",
      bullets: [
        "Built game features and tooling in Unity as part of a small development team",
        "Gained foundational experience in C#, game production pipelines, and Agile workflows",
      ],
    },
    {
      company: "ISS Consulting Thailand",
      title: "SAP Consultant Trainee",
      dateRange: "2013",
      bullets: [
        "Trained in SAP enterprise consulting before transitioning fully into game development",
      ],
    },
  ],
  education: [
    {
      school: "Rangsit University",
      degree: "Bachelor of Technology in Computer Game Multimedia (B.Tech. CGM)",
      dateRange: "2009 - 2013",
      achievements: [
        "Thesis project: \"Bullet Blossom\" — Game Designer & Programmer",
      ],
    },
    {
      school: "Sarasas Witade Bangbon School",
      degree: "Bilingual Program",
      dateRange: "2004 - 2009",
      achievements: [],
    },
  ],
};
