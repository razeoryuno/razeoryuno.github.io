export const siteConfig = {
  name: "Ittiwat Tuntithavorn",
  title: "Game Developer Programmer",
  description: "Portfolio of Ittiwat Tuntithavorn — Game Developer with 10+ years of experience in Unity and C#",
  accentColor: "#00D4FF",
  social: {
    email: "Ittiwat_tun@live.com",
    linkedin: "",
    twitter: "",
    github: "",
  },
  aboutMe:
    "Senior Game Developer with 10+ years of experience shipping games across mobile, PC, WebGL, and Telegram Mini Apps. Specializing in Unity and C#, with deep expertise in game systems, real-time multiplayer, monetization, and full store deployment pipelines. Comfortable across the entire production lifecycle from architecture to store submission.",
  expertise: {
    technical: [
      "Unity",
      "C#",
      ".NET",
      "MagicOnion",
      "gRPC",
      "Live Service",
    ],
    domain: [
      "Server-authoritative architecture",
      "Turn-based combat systems",
      "Real-time state synchronization",
      "Mobile store deployment",
    ],
  } as { technical: string[]; domain: string[] },
  projects: [
    // {
    //   name: "CardPotion",
    //   description: "A card game built with Unity. Click to play it in the browser via Unity WebGL.",
    //   link: "https://razeoryuno.github.io/git-hub-page-test",
    //   skills: ["Unity", "C#", "WebGL"],
    //   role: "Solo Dev",
    //   engine: "Unity",
    //   genre: "Card Game",
    //   devTime: "~2 months",
    //   status: "Live",
    // },
    {
      name: "Pakapow M",
      description: "Online board RPG inspired by Dokapon. Navigate a tile-based map with turn-based combat, monster encounters, treasure events.",
      images: ["/images/projects/pakapow-m.png"],
      imageLayout: "landscape",
      skills: ["Unity", "C#"],
      backendSkills: ["MagicOnion", "Live Service"],
      role: "Lead Developer",
      engine: "Unity",
      genre: "Board RPG",
      devTime: "~12 months",
      status: "Live",
      responsibilities: "Spearheaded technical direction and team leadership. Designed the core game architecture and engineered the high-performance turn-based combat system.",
      coreSystems: [
        "Full Server-Authoritative Architecture",
        "Turn-Based Combat Engine",
        "Dynamic Monster Encounter & Map Logic",
        "Event-Driven Quest & World Progression",
        "Real-time Distributed Save System"
      ],
      devLog: {
        title: "Zero-Loss State Synchronization",
        challenge: "Ensuring 100% data integrity for every player action. The system required zero progress loss during unexpected disconnects while maintaining synchronized state across a distributed server-client environment.",
        solution: "Architected a full server-authoritative pipeline using gRPC for low-latency, strongly-typed communication. Implemented a transaction-based persistence layer that validates every action server-side before updating the client, ensuring a consistent 'Source of Truth'.",
      },
      distribution: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.varisoft.pakapowmobile&pcampaignid=web_share",
        appStore: "https://apps.apple.com/th/app/pakapow-m/id6745856227?l=th",
      }
    },
    {
      name: "World of Runner",
      description: "Mobile fantasy racing game where players guide customizable runners through obstacle-filled courses, competing against others in real-time across fantasy-themed stages.",
      images: ["/images/projects/world-of-runner.jpg"],
      imageLayout: "landscape",
      skills: ["Unity", "C#"],
      role: "Developer",
      engine: "Unity",
      genre: "Racing",
      devTime: "~12 months",
      status: "Out of Service",
    },
    {
      name: "Neokami God Challenger",
      description: "Action RPG with isometric world exploration, real-time combat, and character progression.",
      images: ["/images/projects/neokami.jpg"],
      videos: ["https://www.youtube.com/watch?v=OkD7sQVFtrk"],
      imageLayout: "landscape",
      skills: ["Unity", "C#"],
      role: "Lead Developer",
      engine: "Unity",
      genre: "Action RPG",
      devTime: "~2 years",
      status: "Out of Service",
    },
    {
      name: "Zabb World Secret Stories",
      description: "Community-driven social game featuring isometric town exploration, avatar customization, and interactive NPC-driven storylines.",
      images: [
        "/images/projects/zabb-world.jpg",
        "/images/projects/zabb_1.png",
        "/images/projects/zabb_2.png",
        "/images/projects/zabb_3.png",
      ],
      imageLayout: "landscape",
      skills: ["Unity", "C#"],
      role: "Front-end Developer",
      engine: "Unity",
      genre: "Community / Social",
      devTime: "~18 months",
      status: "Live",
    },
    {
      name: "Commandeer Armament",
      description: "Tactical Collectible Card Game where units occupy board positions and attack in directional patterns.",
      images: [
        "/images/projects/commandeer_0.jpg",
        "/images/projects/commandeer_2.jpg",
      ],
      videos: ["https://www.youtube.com/watch?v=Hof6qAx2U98"],
      imageLayout: "landscape",
      skills: ["Unity", "C#"],
      role: "Full Stack Developer",
      engine: "Unity",
      genre: "Collectible Card Game",
      devTime: "~1 year",
      status: "Unreleased",
    },
    {
      name: "Ever After Rebellion",
      description: "Visual novel featuring animated Live2D characters, fully voiced scenes, and branching story routes.",
      images: [
        "/images/projects/everafter_1.png",
        "/images/projects/everafter_2.png",
      ],
      imageLayout: "landscape",
      skills: ["Unity", "C#", "Live2D"],
      role: "Solo Developer",
      engine: "Unity / Live2D",
      genre: "Visual Novel",
      devTime: "~8 months",
      status: "Unreleased",
    },
    {
      name: "Puzzle Guardian",
      description: "Mobile puzzle RPG with match-3 combat, collectible characters, and wave-based boss encounters.",
      images: [
        "/images/projects/puzzle_guardian_1.jpg",
        "/images/projects/puzzle_guardian_2.jpg",
      ],
      videos: ["https://www.youtube.com/watch?v=mD0TRdb4AM0"],
      imageLayout: "portrait",
      skills: ["Unity", "C#"],
      role: "Back-end Developer",
      engine: "Unity",
      genre: "Puzzle RPG",
      devTime: "~1 year",
      status: "Out of Service",
    },
    {
      name: "Godji Runner",
      description: "3D mobile endless runner based on the Godji IP.",
      images: [
        "/images/projects/godji_1.jpg",
        "/images/projects/godji_2.jpg",
      ],
      videos: ["https://www.youtube.com/watch?v=Oo5oDDVpF10"],
      imageLayout: "portrait",
      skills: ["Unity", "C#"],
      role: "Front-end Developer",
      engine: "Unity",
      genre: "Endless Runner",
      devTime: "~6 months",
      status: "Out of Service",
    },
    {
      name: "MAD MISSION",
      description: "Mobile base-building strategy game.",
      images: [
        "/images/projects/mad_mission_1.jpg",
        "/images/projects/mad_mission_2.jpg",
        "/images/projects/mad_mission_3.jpg",
      ],
      imageLayout: "landscape",
      skills: ["Unity", "C#"],
      role: "Front-end Developer",
      engine: "Unity",
      genre: "Strategy",
      devTime: "~8 months",
      status: "Out of Service",
    },
    {
      name: "Blackjack Dash",
      description: "Mobile card game fusing Blackjack hand-scoring with time-attack Solitaire mechanics.",
      images: [
        "/images/projects/blackjack_dash_1.jpg",
        "/images/projects/blackjack_dash_2.jpg",
        "/images/projects/blackjack_dash_3.jpg",
      ],
      imageLayout: "portrait",
      skills: ["Unity", "C#"],
      role: "Solo Developer",
      engine: "Unity",
      genre: "Card Game",
      devTime: "~3 months",
      status: "Out of Service",
    },
    {
      name: "OMG REINDEER OMG",
      description: "Mobile casual idle-evolution game. Tap to evolve reindeer through multiple upgrade tiers with unlockable story chapters.",
      images: [
        "/images/projects/omg_reindeer_1.jpg",
        "/images/projects/omg_reindeer_2.jpg",
      ],
      imageLayout: "portrait",
      skills: ["Unity", "C#"],
      role: "Solo Developer",
      engine: "Unity",
      genre: "Casual / Idle",
      devTime: "~2 months",
      status: "Out of Service",
    },
    {
      name: "Cripple Bat",
      description: "Mobile endless flap-style platformer where players guide a bat through procedurally placed obstacle columns.",
      images: [
        "/images/projects/crippled_bat_1.jpg",
        "/images/projects/crippled_bat_2.jpg",
      ],
      imageLayout: "portrait",
      skills: ["Unity", "C#"],
      role: "Solo Developer",
      engine: "Unity",
      genre: "Endless Runner",
      devTime: "~1 month",
      status: "Out of Service",
    },
    {
      name: "Bullet Blossom",
      description: "Thesis project — side-scrolling bullet hell built with XNA. Features a weapon-wheel system with multiple elemental projectile sets across multiple stages.",
      imageLayout: "landscape",
      skills: ["XNA", "C#"],
      role: "Solo Programmer",
      engine: "XNA",
      genre: "Bullet Hell",
      devTime: "~6 months",
      status: "Thesis",
    },
  ] as Array<{
    name: string;
    description: string;
    link?: string;
    images?: string[];
    videos?: string[];
    imageLayout?: "portrait" | "landscape";
    skills: string[];
    backendSkills?: string[];
    role?: string;
    engine?: string;
    genre?: string;
    devTime?: string;
    status?: string;
    /* --- Inspector fields (progressive) --- */
    responsibilities?: string;
    coreSystems?: string[];
    devLog?: {
      title?: string;
      challenge: string;
      solution: string;
    };
    distribution?: {
      webgl?: string;
      googlePlay?: string;
      appStore?: string;
      steam?: string;
      itchio?: string;
      epic?: string;
    };
    videoDemo?: string;
    sourceCode?: string | "proprietary";
  }>,
  experience: [
    {
      company: "Varisoft CO., Ltd",
      title: "Game Developer Programmer",
      dateRange: "2019 - Present",
      bullets: [
        "Shipped 14+ games and apps across iOS, Android, WebGL, and Telegram Mini Apps",
        "Implemented real-time multiplayer game clients using MagicOnion and gRPC for low-latency synchronization",
        "Developed shared C# live-service libraries reused across all projects to standardize auth, IAP, and data pipelines",
        "Designed a Google Sheets–driven master data pipeline enabling designers to manage game balance without code changes",
        "Integrated Telegram Mini App SDK for a browser-based game with custom in-game economy",
        "Handled full store deployment pipeline for Google Play, App Store, and WebGL (AWS S3) including IAP via Omise payment gateway",
      ],
    },
    {
      company: "Crosstales Studio CO., Ltd",
      title: "Game Developer Programmer",
      dateRange: "2017 - 2019",
      bullets: [
        "Shipped gameplay systems and client-side UI across multiple Unity titles",
        "Operated within Agile sprint cycles using Git version control and Scrum workflows",
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
        "Established foundational practice in C#, Unity production pipelines, and team-based Agile workflows",
      ],
    },
    {
      company: "ISS Consulting Thailand",
      title: "SAP Consultant Trainee",
      dateRange: "2013",
      bullets: [
        "Completed SAP enterprise consulting training before pivoting fully to game development",
      ],
    },
  ],
  education: [
    {
      school: "Rangsit University",
      degree: "Bachelor of Technology in Computer Game Multimedia (B.Tech. CGM)",
      dateRange: "2009 - 2013",
    },
    {
      school: "Sarasas Witade Bangbon School",
      degree: "Bilingual Program",
      dateRange: "2004 - 2009",
    },
  ],
};
