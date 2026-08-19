import fs from "fs";
import path from "path";
import { jsPDF } from "jspdf";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "pt",
  format: "a4",
});

const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
const margin = 40;
const contentWidth = pageWidth - margin * 2;
let y = 45;

const addHeading = (text) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(20, 20, 20);
  doc.text(text.toUpperCase(), margin, y);
  y += 4;
  doc.setLineWidth(0.75);
  doc.setDrawColor(40, 40, 40);
  doc.line(margin, y, pageWidth - margin, y);
  y += 12;
};

const addSubHeading = (leftText, rightText = "") => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  doc.text(leftText, margin, y);
  if (rightText) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9.5);
    doc.setTextColor(80, 80, 80);
    doc.text(rightText, pageWidth - margin, y, { align: "right" });
  }
  y += 13;
};

const addParagraph = (text, isItalic = false) => {
  doc.setFont("helvetica", isItalic ? "italic" : "normal");
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  const lines = doc.splitTextToSize(text, contentWidth);
  doc.text(lines, margin, y);
  y += lines.length * 11.5 + 4;
};

const addBulletPoint = (text) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  const bulletIndent = 12;
  const lines = doc.splitTextToSize(text, contentWidth - bulletIndent);
  doc.text("•", margin, y);
  doc.text(lines, margin + bulletIndent, y);
  y += lines.length * 11.5 + 2.5;
};

// --- HEADER ---
doc.setFont("helvetica", "bold");
doc.setFontSize(18);
doc.setTextColor(10, 10, 10);
doc.text("HARSH MURUSKAR", pageWidth / 2, y, { align: "center" });
y += 16;

doc.setFont("helvetica", "normal");
doc.setFontSize(11);
doc.setTextColor(50, 50, 50);
doc.text("Java Full Stack Developer (AI)", pageWidth / 2, y, { align: "center" });
y += 14;

doc.setFontSize(9);
doc.setTextColor(70, 70, 70);
doc.text(
  "Nagpur, Maharashtra, India  |  +91-9325260228  |  harshmuruskar786@gmail.com  |  github.com/Harshmuruskar",
  pageWidth / 2,
  y,
  { align: "center" }
);
y += 20;

// --- PROFESSIONAL SUMMARY ---
addHeading("Professional Summary");
addParagraph(
  "Java Full Stack Developer with hands-on experience building AI-integrated full-stack web applications using Java, Spring Boot, React, and PostgreSQL/MySQL. Skilled in designing REST APIs, integrating AI tools (Spring AI, Gemini API) into production workflows, and implementing secure authentication with Spring Security, JWT, and OAuth 2. Comfortable working across the stack from database schema design to responsive UI, with a focus on clean, maintainable, production-ready code."
);
y += 4;

// --- TECHNICAL SKILLS ---
addHeading("Technical Skills");
const skills = [
  "Backend: Java, Spring Boot, Hibernate, REST APIs, Spring Data JPA, Spring Security, Spring AI, Swagger, JWT, Microservices",
  "Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap",
  "Databases: MySQL, PostgreSQL, MongoDB, H2 Database, Cloud Databases (MongoDB Atlas, NeonDB)",
  "Tools & Platforms: Docker, Claude Code, Prompt Engineering & Vibe Coding, Git, GitHub, Maven, Postman, IntelliJ, Visual Studio Code, Google Antigravity, Lovable, Google Stitch, Google AI Studio, Bolt",
];
skills.forEach((s) => {
  const parts = s.split(":");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);
  doc.text(`${parts[0]}:`, margin, y);
  const labelWidth = doc.getTextWidth(`${parts[0]}: `);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50, 50, 50);
  const lines = doc.splitTextToSize(parts[1].trim(), contentWidth - labelWidth);
  doc.text(lines[0], margin + labelWidth, y);
  if (lines.length > 1) {
    for (let i = 1; i < lines.length; i++) {
      y += 11.5;
      doc.text(lines[i], margin, y);
    }
  }
  y += 13.5;
});
y += 2;

// --- PROFESSIONAL EXPERIENCE ---
addHeading("Professional Experience");

addSubHeading("Java Full Stack Developer — Koderz Technology", "Mar 2026 – Present");
addBulletPoint(
  "Developed and maintained 10+ full-stack features using React on the frontend and Spring Boot (Java 21) on the backend, delivering consistently on 2-week Agile sprint cycles."
);
addBulletPoint(
  "Designed and implemented 15+ RESTful API endpoints consumed by React clients, cutting frontend-backend integration time by an estimated 30% through consistent request/response conventions."
);
addBulletPoint(
  "Implemented authentication and authorization using Spring Security and JWT across all user-facing endpoints, eliminating unauthorized access incidents in production."
);
addBulletPoint(
  "Built and optimized data access layers with Spring Data JPA and MySQL, improving average response time on key endpoints by up to 40%."
);
addBulletPoint(
  "Containerized services with Docker, reducing local environment setup time from hours to under 15 minutes for new team members."
);
y += 4;

addSubHeading("Software Development Intern — Greateway Solution Pvt. Ltd.", "Feb 2024 – Aug 2024");
addBulletPoint(
  "Contributed to 5+ web application modules under senior developer guidance across a 6-month internship, gaining hands-on exposure to the full software development lifecycle."
);
addBulletPoint(
  "Wrote and debugged Java-based backend logic, resolving 20+ bug tickets and contributing to frontend UI updates."
);
addBulletPoint(
  "Participated in code reviews and daily stand-ups within a 2-week Agile sprint cadence, learning production-grade development practices."
);
y += 4;

// --- PROJECTS ---
addHeading("Projects");

addSubHeading("Job Portal Application | React, Spring Boot, Java 21, JWT, OAuth 2, PostgreSQL, Elasticsearch, Flyway");
addBulletPoint(
  "Developed a full-stack Job Application Management System for a consultancy owner, enabling admins to create and manage job listings while applicants explore and submit applications."
);
addBulletPoint(
  "Secured the platform with JWT and OAuth 2 authentication, supporting role-based access for admins and applicants across 2 distinct portals."
);
addBulletPoint(
  "Integrated Elasticsearch for job search, cutting search response time to under 500ms across 1,000+ listings."
);
addBulletPoint(
  "Managed schema versioning with Flyway migrations across PostgreSQL, enabling 10+ zero-downtime database releases."
);
addBulletPoint(
  "Built a responsive frontend with React, Vite, React Router DOM, Tailwind CSS, and Axios, and implemented server-side pagination to handle large applicant datasets efficiently."
);
y += 4;

addSubHeading(
  "AI-Powered Smart Email Generator | Java, Spring Boot, REST API, WebClient, Gemini API, React.js, Material UI, Axios"
);
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(80, 80, 80);
doc.text("GitHub: github.com/Harshmuruskar/AI-Powered-Smart-Email-Generator", margin, y);
y += 12;
addBulletPoint(
  "Built a full-stack web application that reads email content and generates AI-based replies in 3 tone styles (Friendly, Casual, Professional) using Google's Gemini API."
);
addBulletPoint(
  "Designed and integrated a REST API layer with Spring WebClient to handle asynchronous calls to the Gemini API, reducing average reply generation time to under 3 seconds."
);
addBulletPoint(
  "Built a responsive React.js frontend with Material UI and Axios, cutting manual email drafting time by an estimated 70% for repetitive replies."
);
addBulletPoint(
  "Implemented error handling and retry logic for external API calls, achieving 99%+ successful response delivery during testing across 50+ sample emails."
);
y += 4;

// --- EDUCATION ---
addHeading("Education");
addSubHeading("Bachelor of Technology (B.Tech) — G.H. Raisoni College of Engineering");
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(60, 60, 60);
doc.text("Graduated 2023  |  Nagpur, Maharashtra, India", margin, y);

// Output paths
const publicPath = path.join(process.cwd(), "public", "Harsh_Muruskar_Resume.pdf");
const buffer = doc.output("arraybuffer");
fs.writeFileSync(publicPath, Buffer.from(buffer));
console.log("Successfully generated PDF at:", publicPath);
