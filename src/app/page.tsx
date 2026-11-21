import About from "@/components/About";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import CVDownload from "@/components/CVDownload";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Extracurriculars from "@/components/Extracurriculars";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import {
  certifications,
  education,
  experience,
  extracurriculars,
  projects,
  tools,
} from "@/data/portfolio";

// Sections render in this order; empty ones are skipped and the
// numbering (01, 02 …) adjusts automatically.
const sections = [
  { key: "about", show: true, C: About },
  { key: "experience", show: experience.length > 0, C: Experience },
  { key: "projects", show: projects.length > 0, C: Projects },
  { key: "tools", show: tools.length > 0, C: Tools },
  { key: "education", show: education.length > 0, C: Education },
  { key: "certifications", show: certifications.length > 0, C: Certifications },
  { key: "activities", show: extracurriculars.length > 0, C: Extracurriculars },
].filter((s) => s.show);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {sections.map(({ key, C }, i) => (
          <C key={key} n={String(i + 1).padStart(2, "0")} />
        ))}
        <CVDownload />
        <Contact n={String(sections.length + 1).padStart(2, "0")} />
      </main>
      <Footer />
    </>
  );
}
