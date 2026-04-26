import type { Project } from "./types";

// STATUS: Done
export const cripleBat: Project = {
  name: "Crippled Bat",
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
  devTime: "~7 days",
  status: "Out of Service",
  responsibilities: "Managed full-cycle development from initial concept to store deployment. Engineered gameplay mechanics, social integration.",
  coreSystems: [
    "Procedural Level Generation",
    "Social Leaderboard Integration",
    "In-game Currency & Economy Shop",
    "Physics-based Character Controller",
  ]
};
