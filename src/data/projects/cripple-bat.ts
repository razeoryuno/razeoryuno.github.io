import type { Project } from "./types";

// STATUS: Done
export const cripleBat: Project = {
  name: "Cripple Bat",
  description: "Mobile endless flappy bird-style platformer where players guide a bat through procedurally placed obstacle columns.",
  icon: "/images/projects/icon/crippled_bat_icon.png",
  images: [
    "/images/projects/crippled_bat_1.jpg",
    "/images/projects/crippled_bat_2.jpg",
  ],
  imageLayout: "portrait",
  frontendStack: [{ engine: "Unity", lang: "C#" }],
  role: "Solo Developer",
  engine: "Unity",
  genre: "Endless Runner",
  devTime: "~1 month",
  status: "Out of Service",
  responsibilities: "Managed full-cycle development from initial concept to store deployment. Engineered gameplay mechanics, social integration, and monetization systems.",
  coreSystems: [
    "Procedural Level Generation",
    "Social Leaderboard Integration",
    "In-game Currency & Economy Shop",
    "Physics-based Character Controller",
  ],
  devLog: {
    title: "Rapid Prototyping & Social Growth",
    challenge: "Developing and shipping a polished, feature-complete mobile title within a tight 30-day window while ensuring high player retention through social competition.",
    solution: "Leveraged a modular 'Object Pooling' system for procedural obstacles to maintain 60FPS on legacy mobile devices. Integrated Facebook SDK to create a frictionless competitive environment with real-time friend leaderboards.",
  },
};
