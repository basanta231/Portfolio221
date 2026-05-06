import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar";
import profilePhoto from "@/assets/basanta.png";

const projects = [
  {
    name: "SignAsure",
    description:
      "A signature verification system built in Python that uses image processing and machine learning to detect forged signatures. Developed as a college project.",
    stack: "Python · OpenCV · scikit-learn · Tkinter",
  },
  {
    name: "Finledger",
    description:
      "A ledger system for tracking all financial records — transactions, balances, and reports — built during my internship to streamline bookkeeping.",
    stack: "React · Node.js · PostgreSQL · TypeScript",
  },
];

const tech = [
  { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "React", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Vite", url: "https://vitejs.dev/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "Radix UI", url: "https://www.radix-ui.com/" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
  { name: "Redux", url: "https://redux.js.org/" },
  { name: "React Query", url: "https://tanstack.com/query/latest" },
  { name: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
  { name: "Figma", url: "https://www.figma.com/" },
  { name: "Git", url: "https://git-scm.com/" },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Gautam Software Developer",
    date: "Present",
    bullets: [
      "Building modern frontends for software products tailored to cooperative societies — member portals, accounting modules, and reporting dashboards.",
      "Developing responsive, accessible UI in React, TypeScript, and Tailwind CSS, integrated with internal REST APIs.",
      "Contributing to a wide range of other client projects, from internal tools to customer-facing web apps.",
      "Collaborating closely with backend developers and designers to ship clean, maintainable interfaces.",
    ],
  },
];

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 pt-24">

        {/* HERO */}
        <section id="home" className="pt-2 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <Reveal delay={80}>
              <div className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 shrink-0">
                <div className="absolute -inset-2 rounded-full bg-gradient-accent opacity-50 blur-2xl" aria-hidden />
                <img
                  src={profilePhoto}
                  alt="Portrait of Basanta Adhikari"
                  width={512}
                  height={512}
                  className="relative h-full w-full rounded-full object-cover border border-border/60"
                />
              </div>
            </Reveal>

            <div className="flex-1 min-w-0">
              <Reveal delay={160}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tightest leading-[1.05]">
                  Basanta <span className="text-gradient">Adhikari</span>.
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-3 text-base sm:text-lg text-muted-foreground font-light">
                  Frontend Developer · React & TypeScript
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://github.com/basanta231"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-secondary/40 text-foreground/80 hover:text-foreground hover:border-accent/50 transition-smooth"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/basanta-adhikari-070566280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-secondary/40 text-foreground/80 hover:text-foreground hover:border-accent/50 transition-smooth"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              About
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/85 font-light">
              I craft fast, accessible, and beautifully animated web interfaces with
              React, TypeScript, and Tailwind CSS. I love clean design systems, smooth
              motion, and turning Figma files into pixel-perfect products.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo("projects")}
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 hover:shadow-glow transition-smooth h-10 px-5 rounded-full font-medium border-0"
              >
                View Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="h-10 px-5 rounded-full font-medium bg-transparent border-border hover:bg-secondary hover:text-foreground transition-smooth"
              >
                Contact
              </Button>
            </div>
          </Reveal>

        </section>

        {/* TECH STACK */}
        <section id="stack" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              Skills
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-2.5">
              {tech.map((t) => (
                <li key={t.name}>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/60 hover:border-accent/50 hover:text-foreground transition-smooth"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              Projects
            </h2>
          </Reveal>
          <div className="space-y-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <a
                  href="#"
                  className="group block border-t border-border/60 pt-8 transition-smooth hover:border-accent/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-smooth" />
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.stack}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              Experience
            </h2>
          </Reveal>

          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 80}>
                <article className="border-t border-border/60 pt-8">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {job.company} · {job.date}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-base leading-relaxed text-foreground/75 pl-5 relative before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              Education
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={160}>
              <div className="border-t border-border/60 pt-8">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  BSc. CSIT
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Mount Annapurna Campus · Tribhuvan University Affiliated
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              Certifications
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={160}>
              <div className="border-t border-border/60 pt-8">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Responsive Web Design
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">freeCodeCamp</p>
                <a
                  href="https://www.freecodecamp.org/certification/fcc3d26d7f8-7cc1-41ba-9ca4-53559de7f6c2/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gradient hover:opacity-80 transition-smooth"
                >
                  View certificate
                  <ArrowUpRight className="h-3.5 w-3.5 text-foreground/70" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="border-t border-border/60 pt-8">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  AWS Academy Cloud Foundations
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  AWS Academy · Graduate Badge
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT (anchor for hero button) */}
        <section id="contact" className="py-6 sm:py-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              Contact
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-foreground/85 font-light">
              Always open to interesting conversations and collaborations. The fastest
              way to reach me is by email.
            </p>

            <div className="mt-10 border-t border-border/60 pt-8">
              <p className="text-sm font-bold tracking-widest text-foreground uppercase">
                Email
              </p>
              <a
                href="mailto:mukuladk1234@gmail.com"
                className="mt-2 inline-flex items-center gap-1.5 text-sm sm:text-base font-medium tracking-tight text-gradient hover:opacity-80 transition-smooth"
              >
                mukuladk1234@gmail.com
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/70" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border/60 py-12 mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © 2026 Basanta Adhikari. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/basanta231"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/basanta-adhikari-070566280/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
