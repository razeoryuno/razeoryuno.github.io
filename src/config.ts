export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Portfolio website",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "",
    github: "https://github.com/razeoryuno",
  },
  aboutMe: "Tell the world about yourself here.",
  skills: ["Unity", "C#", "Game Development"],
  projects: [
    {
      name: "CardPotion",
      description:
        "A card game built with Unity. Click to play it in the browser via Unity WebGL.",
      link: "https://razeoryuno.github.io/git-hub-page-test",
      skills: ["Unity", "C#", "WebGL"],
    },
  ],
  experience: [] as Array<{
    company: string;
    title: string;
    dateRange: string;
    bullets: string[];
  }>,
  education: [] as Array<{
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
  }>,
};
