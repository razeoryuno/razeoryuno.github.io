import type { Project } from "./types";

// STATUS: TODO
export const omgReindeer: Project = {
  name: "OMG REINDEER OMG",
  description: "Mobile casual idle-evolution game. Tap to evolve reindeer through multiple upgrade tiers with unlockable story chapters.",
  icon: "/images/projects/icon/omg_reindeer_icon.png",
  images: [
    "/images/projects/omg_reindeer_1.jpg",
    "/images/projects/omg_reindeer_2.jpg",
  ],
  imageLayout: "portrait",
  frontendStack: [{ engine: "Unity", lang: "C#" }],
  role: "Solo Developer",
  engine: "Unity",
  genre: "Casual / Idle",
  devTime: "~2 months",
  status: "Out of Service",
  responsibilities: "Develop gameplay and ads monetize system.",
  coreSystems: [
    "queue action point and click",
    "mobile ads sdk",
  ]
};
