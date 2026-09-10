import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";

import heroRobot from "@/assets/hero-robot.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blake Chang — Robot Learning, NYU CILVR Group" },
      {
        name: "description",
        content:
          "Blake Chang is an NYU Math & CS undergrad working with Lerrel Pinto at the NYU CILVR Group on robot learning, reinforcement learning, and world models.",
      },
      { property: "og:title", content: "Blake Chang — Robot Learning, NYU CILVR Group" },
      {
        property: "og:description",
        content:
          "Research in robot learning, reinforcement learning, and world models at the NYU CILVR Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    id: "01",
    title: "releasing soon",
    tag: "TBA",
    year: "2026",
    img: project1,
    blurb: "TBA",
  },
];

const experience = [
  {
    year: "Current",
    role: "Undergraduate Researcher",
    org: "NYU CILVR Group, advised by Lerrel Pinto",
  },
  {
    year: "2022-2024",
    role: "Team vice president + driver",
    org: "VEX robotics - ranked 31th in 20000+ teams, 7th in Asia  ",
  },
];

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
};

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-lines opacity-35" />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[34rem]"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 py-10 sm:px-8 md:py-16">
        <ProfileHeader />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

function ProfileHeader() {
  return (
    <header className="mb-20 border-b border-border pb-14">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase text-primary">
            AI · Robotics · Autonomous Systems
          </p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Blake Chang<span className="text-primary">.</span>
          </h1>
          <p className="mt-2 text-base font-medium text-muted-foreground">
            NYU Math &amp; CS · member of GRAIL
          </p>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
            I&apos;m a Math and CS undergrad at NYU, working with{" "}
            <a
              href="https://www.lerrelpinto.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Lerrel Pinto
            </a>{" "}
            at the{" "}
            <a
              href="https://wp.nyu.edu/cilvr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              NYU CILVR Group
            </a>
            . My research spans full-system robot learning, reinforcement learning, and world
            models, with a growing interest in multimodal robots—I aim to bring robotics from
            fiction into the real world.
          </p>

          <nav aria-label="Profile links" className="mt-7 flex flex-wrap gap-2">
            <ProfileLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=blakeyuhao@gmail.com"
              label="Email"
              icon={Mail}
              external
            />
            <ProfileLink
              href="https://github.com/blakechang1313"
              label="GitHub"
              icon={Github}
              external
            />
            <ProfileLink
              href="https://www.linkedin.com/in/blake-chang1313/"
              label="LinkedIn"
              icon={Linkedin}
              external
            />
            {/* <ProfileLink href="#experience" label="Resume" icon={FileText} /> */}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-2 border-primary/60 bg-card shadow-[var(--shadow-glow)] sm:h-40 sm:w-40"
        >
          <img
            src={heroRobot}
            alt="Blake Chang profile photo placeholder"
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2 right-2 h-3 w-3 rounded-full border-2 border-background bg-primary" />
        </motion.div>
      </div>

      <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_2fr]">
        <p className="font-mono text-xs font-medium uppercase text-muted-foreground">
          Research focus
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["01", "Robot learning"],
            ["02", "Reinforcement learning"],
            ["03", "World models"],
          ].map(([number, label]) => (
            <div key={number}>
              <span className="font-mono text-xs text-primary">{number}</span>
              <p className="mt-2 font-display text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function ProfileLink({
  href,
  label,
  icon: Icon,
  external,
}: {
  href: string;
  label: string;
  icon: typeof Mail;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card/70 px-3 font-mono text-xs font-medium uppercase text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      title={label}
    >
      <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
      {label}
    </a>
  );
}

function SectionHeading({ number, children }: { number: string; children: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs text-primary">{number}</span>
      <h2 className="font-mono text-xs font-semibold uppercase text-muted-foreground">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Projects() {
  return (
    <section id="work" className="scroll-mt-12">
      <SectionHeading number="01">Selected work</SectionHeading>
      <div className="space-y-12">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            {...reveal}
            className="group grid gap-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)] sm:items-start"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-card">
              <img
                src={project.img}
                alt={project.title}
                width={640}
                height={480}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-1">
              <div className="font-mono text-xs text-primary">
                {project.tag} · {project.year}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.blurb}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                Case study
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-12 py-20">
      <SectionHeading number="02">Experience &amp; toolkit</SectionHeading>
      <div>
        {experience.map((item, index) => (
          <motion.div
            key={item.year + item.role}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.05 }}
            className="grid grid-cols-[5rem_1fr] gap-4 border-b border-border py-5 first:pt-0"
          >
            <span className="font-mono text-xs text-primary">{item.year}</span>
            <div>
              <h3 className="font-display font-semibold">{item.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="scroll-mt-12 border-t border-border pt-10">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-medium uppercase text-primary">
            Open to collaboration
          </p>
          <h3 className="mt-3 max-w-lg font-display text-lg font-semibold text-foreground">
            If you find my research interesting or want to discuss it further, feel free to connect.
          </h3>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=blakeyuhao@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Mail aria-hidden="true" className="h-4 w-4" />
          Email me
        </a>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-2 border-t border-border py-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Blake Chang</span>
        <span>Dream big. Work big. Break the limit.</span>
      </div>
    </footer>
  );
}
