import {
  siApachemaven,
  siAxios,
  siBootstrap,
  siClaude,
  siCss,
  siDocker,
  siElasticsearch,
  siFlyway,
  siGit,
  siGithub,
  siGooglecloud,
  siGooglegemini,
  siHibernate,
  siHtml5,
  siIntellijidea,
  siJavascript,
  siJsonwebtokens,
  siMongodb,
  siMui,
  siMysql,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siReact,
  siRedis,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";
import { Boxes, Code2, Sparkles, Wand2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Brand = { path: string; hex: string };

const BRANDS: Record<string, Brand> = {
  Java: siOpenjdk,
  "Spring Boot": siSpringboot,
  "Spring AI": siSpring,
  "Spring Data JPA": siSpring,
  "Spring Security": siSpringsecurity,
  Hibernate: siHibernate,
  Swagger: siSwagger,
  JWT: siJsonwebtokens,
  "OAuth 2": siJsonwebtokens,
  "React.js": siReact,
  React: siReact,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  HTML5: siHtml5,
  CSS3: siCss,
  "Tailwind CSS": siTailwindcss,
  Bootstrap: siBootstrap,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  NeonDB: siPostgresql,
  Redis: siRedis,
  Elasticsearch: siElasticsearch,
  Flyway: siFlyway,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Maven: siApachemaven,
  Postman: siPostman,
  IntelliJ: siIntellijidea,
  "Claude Code": siClaude,
  "Gemini API": siGooglegemini,
  "Google AI Studio": siGooglegemini,
  "Google Antigravity": siGooglecloud,
  "Material UI": siMui,
  Axios: siAxios,
  Vite: siVite,
};

const FALLBACKS: Record<string, LucideIcon> = {
  Microservices: Boxes,
  "REST APIs": Code2,
  Lovable: Sparkles,
  Bolt: Zap,
  "Google Stitch": Wand2,
  "Prompt Engineering": Sparkles,
};

export function BrandIcon({
  name,
  size = 16,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const brand = BRANDS[name];
  if (brand) {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={`#${brand.hex}`}
        className={className}
      >
        <path d={brand.path} />
      </svg>
    );
  }
  const Fallback = FALLBACKS[name] ?? Code2;
  return <Fallback size={size} aria-label={name} className={className} />;
}
