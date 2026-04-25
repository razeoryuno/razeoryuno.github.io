export type Project = {
  name: string;
  description: string;
  icon?: string;
  link?: string;
  images?: string[];
  videos?: string[];
  imageLayout?: "portrait" | "landscape";
  frontendStack: Array<{ engine: string; lang?: string }>;
  backendStack?: Array<{ engine: string; lang?: string }>;
  relateTool?: string[];
  role?: string;
  engine?: string;
  genre?: string;
  year?: string;
  devTime?: string;
  status?: string;
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
};
