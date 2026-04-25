import type { Project } from "./types";

// ─── DUMMY — remove before deploy ─────────────────────────────────────────────
export const demo: Project = {
  name: "DEMO — All Fields Enabled",
  description: "Dummy card exercising every rendered slot: gallery, icon, all distribution buttons, locked source, responsibilities, core systems, dev log, metadata bar, and both stack tag variants.",
  icon: "/images/projects/icon/pakapow_m_icon.jpg",
  images: ["/images/projects/pakapow-m.png", "/images/projects/world-of-runner.jpg"],
  videos: ["https://www.youtube.com/watch?v=OkD7sQVFtrk"],
  imageLayout: "landscape",
  frontendStack: [{ engine: "Unity", lang: "C#" }, { engine: "Live2D", lang: "" }],
  backendStack: [{ engine: "MagicOnion", lang: "C#" }, { engine: "Go", lang: "" }],
  relateTool: ["Live2D", "Spine2D"],
  role: "Full Stack Developer",
  engine: "Unity",
  genre: "Demo / Review",
  year: "2000",
  devTime: "~0 months",
  status: "Live",
  responsibilities: "Dummy responsibilities paragraph. Exercises the Role & Responsibility block inside the expandable panel.",
  coreSystems: [
    "Dummy Core System A",
    "Dummy Core System B",
    "Dummy Core System C",
  ],
  devLog: {
    title: "Dummy Dev Log Entry",
    challenge: "CHALLENGE text — rendered in the warning accent color (--accent-warning).",
    solution: "SOLUTION text — rendered in the main accent color (--accent).",
  },
  distribution: {
    webgl: "https://example.com",
    googlePlay: "https://example.com",
    appStore: "https://example.com",
    steam: "https://example.com",
    itchio: "https://example.com",
    epic: "https://example.com",
  },
  sourceCode: "proprietary",
};
