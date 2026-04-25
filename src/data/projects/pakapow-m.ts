import type { Project } from "./types";

// STATUS: Done
export const pakapowM: Project = {
  name: "Pakapow M",
  description: "Online board RPG inspired by Dokapon. Navigate a tile-based map with turn-based combat, monster encounters, treasure events.",
  icon: "/images/projects/icon/pakapow_m_icon.jpg",
  images: ["/images/projects/pakapow-m.png"],
  imageLayout: "landscape",
  frontendStack: [{ engine: "Unity", lang: "C#" }],
  backendStack: [{ engine: "MagicOnion", lang: "C#" }, { engine: "Live Service", lang: "Go" }],
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
    "Real-time Distributed Save System",
  ],
  devLog: {
    title: "Zero-Loss State Synchronization",
    challenge: "Ensuring 100% data integrity for every player action. The system required zero progress loss during unexpected disconnects while maintaining synchronized state across a distributed server-client environment.",
    solution: "Architected a full server-authoritative pipeline using gRPC for low-latency, strongly-typed communication. Implemented a transaction-based persistence layer that validates every action server-side before updating the client, ensuring a consistent 'Source of Truth'.",
  },
  distribution: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.varisoft.pakapowmobile&pcampaignid=web_share",
    appStore: "https://apps.apple.com/th/app/pakapow-m/id6745856227?l=th",
  },
};
