import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Cpu, Bot, Brain } from "lucide-react";

import heroRobot from "@/assets/hero-robot.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    id: "01",
    title: "Dexterous Manipulation",
    tag: "Reinforcement Learning · ROS2",
    year: "2025",
    img: project1,
    blurb:
      "Sim-to-real policy for a 7-DoF arm performing sub-millimeter assembly tasks under partial observability.",
  },
  {
    id: "02",
    title: "Quadruped Autonomy",
    tag: "SLAM · Perception · Control",
    year: "2024",
    img: project2,
    blurb:
      "Onboard perception + terrain-aware locomotion stack for a legged robot navigating unstructured warehouses.",
  },
  {
    id: "03",
    title: "Neural World Models",
    tag: "PyTorch · Diffusion · JAX",
    year: "2024",
    img: project3,
    blurb:
      "Latent world model that predicts contact-rich dynamics, enabling planning inside a learned physics engine.",
  },
];

const experience = [
  { year: "2025 —", role: "Robotics Researcher", org: "Autonomous Systems Lab" },
  { year: "2024", role: "AI Engineer, Manipulation", org: "Frontier Robotics" },
  { year: "2023", role: "ML Engineer Intern", org: "Applied Intelligence Group" },
  { year: "2022", role: "B.S. Robotics Engineering", org: "Institute of Technology" },
];

const skills = [
  "PyTorch",
  "JAX",
  "ROS 2",
  "C++ / CUDA",
  "Isaac Sim",
  "MoveIt",
  "Reinforcement Learning",
  "SLAM",
  "Computer Vision",
  "Control Theory",
  "Rust",
  "Onboard Compute",
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          BLAKE<span className="text-primary">.</span>CHANG
        </a>
        <nav className="hidden gap-8 font-mono-caption text-white/80 md:flex">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="font-mono-caption text-white hover:text-primary transition-colors"
        >
          Say Hi →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  const lines = ["DREAM BIG.", "WORK BIG.", "BREAK THE LIMIT."];

  return (
    <section id="top" ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroRobot}
          alt="Robotic arm in dark lab"
          width={1600}
          height={1808}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-64" style={{ background: "var(--gradient-fade)" }} />
      </motion.div>

      {/* Corner captions */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-24 left-6 md:left-10 font-mono-caption text-primary/80">
          [ 01 / INDEX ]
        </div>
        <div className="absolute top-24 right-6 md:right-10 flex items-center gap-4 font-mono-caption text-white/60">
          <span className="hidden md:inline">PROFILE_IMG</span>
          <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-[3px] border-primary/50 bg-card/50 shadow-[0_0_32px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <img
              src={heroRobot}
              alt="Blake Chang — profile photo placeholder"
              className="h-full w-full object-cover opacity-70"
            />
          </div>
        </div>
        <div className="absolute bottom-10 left-6 md:left-10 font-mono-caption text-white/60">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          SYSTEM ONLINE
        </div>
        <div className="absolute bottom-10 right-6 md:right-10 font-mono-caption text-white/60">
          SCROLL ↓
        </div>
      </div>

      {/* Headline */}
      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-center px-6 md:px-10">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="mb-8 font-mono-caption text-primary">
            Blake Chang — Welcome to my world
          </div>
          {lines.map((line, i) => (
            <motion.h1
              key={line}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[14vw] font-bold uppercase leading-[0.9] tracking-tighter text-white md:text-[10vw]"
            >
              {line.split("").map((ch, j) => (
                <span key={j} className={ch === "." ? "text-primary text-glow" : ""}>
                  {ch}
                </span>
              ))}
            </motion.h1>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 max-w-md font-mono text-sm text-white/60"
          >
            AI &amp; Robotics engineer. Building autonomous systems that see, decide, and move — from the policy net down to the joint torque.
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const words = ["ROBOTICS", "AI", "AUTONOMY", "PERCEPTION", "CONTROL", "LEARNING"];
  const row = [...words, ...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-8">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-6xl font-bold uppercase text-white/10 md:text-8xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-16">
            {w}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-baseline justify-between border-b border-border pb-6">
          <span className="font-mono-caption text-primary">[ 02 / ABOUT ]</span>
          <span className="font-mono-caption text-muted-foreground">WHO / WHAT / WHY</span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="mb-6 h-px w-24 bg-primary" />
              <h2 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
                I build machines that <span className="text-primary">think</span> and <span className="text-primary">move</span>.
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-7">
            <div className="space-y-8 text-lg leading-relaxed text-white/80">
              <p>
                I'm Blake — an AI and robotics engineer obsessed with the point where <span className="text-primary">bits meet actuators</span>. My work lives between the deep-learning stack and the physical world: perception, planning, control, and the fragile handshake between them.
              </p>
              <p>
                From dexterous manipulation to legged autonomy, I chase problems where a policy has to survive contact with reality. I care about elegant abstractions and about the messy, humbling nature of a robot doing the wrong thing at 3am.
              </p>
              <p className="font-mono-caption text-primary">— Dream big. Work big. Break the limit.</p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { icon: Brain, label: "Learning" },
                { icon: Cpu, label: "Compute" },
                { icon: Bot, label: "Embodiment" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="border border-border bg-card/40 p-6 backdrop-blur-sm">
                  <Icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.5} />
                  <div className="font-mono-caption text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <div className="mb-4 font-mono-caption text-muted-foreground">// Stack</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-3 py-1.5 font-mono text-xs text-white/80 hover:border-primary hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-baseline justify-between border-b border-border pb-6">
          <span className="font-mono-caption text-primary">[ 03 / SELECTED WORK ]</span>
          <span className="font-mono-caption text-muted-foreground">2023 — 2025</span>
        </div>

        <div className="space-y-32">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  reverse,
}: {
  project: (typeof projects)[number];
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid gap-8 md:grid-cols-12 ${reverse ? "md:[direction:rtl]" : ""}`}
    >
      <div className="relative aspect-[7/5] overflow-hidden bg-card md:col-span-7 md:[direction:ltr]">
        <motion.img
          style={{ y }}
          src={project.img}
          alt={project.title}
          width={1400}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-[120%] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 border border-white/5" />
        <div className="absolute top-4 left-4 font-mono-caption text-primary">
          / {project.id}
        </div>
      </div>

      <div className="flex flex-col justify-end md:col-span-4 md:col-start-9 md:[direction:ltr]">
        <div className="mb-3 font-mono-caption text-muted-foreground">
          {project.tag} · {project.year}
        </div>
        <h3 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h3>
        <p className="mb-6 text-white/70">{project.blurb}</p>
        <a
          href="#"
          className="group inline-flex items-center gap-2 self-start border-b border-primary pb-1 font-mono-caption text-primary"
        >
          Case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-baseline justify-between border-b border-border pb-6">
          <span className="font-mono-caption text-primary">[ 04 / TIMELINE ]</span>
          <span className="font-mono-caption text-muted-foreground">RUNTIME LOG</span>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-5xl font-bold leading-none text-white md:text-6xl">
              A path across
              <br />
              <span className="text-primary">labs &amp; teams.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ol className="relative border-l border-border">
              {experience.map((e, i) => (
                <motion.li
                  key={e.year + e.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative pl-8 pb-10"
                >
                  <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-background ring-2 ring-primary transition-all group-hover:scale-125 group-hover:bg-primary" />
                  <div className="font-mono-caption text-primary">{e.year}</div>
                  <div className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                    {e.role}
                  </div>
                  <div className="mt-1 text-white/60">{e.org}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-background px-6 py-32 md:px-10 md:py-48">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-baseline justify-between border-b border-border pb-6">
          <span className="font-mono-caption text-primary">[ 05 / TRANSMIT ]</span>
          <span className="font-mono-caption text-muted-foreground">END OF INDEX</span>
        </div>

        <div className="max-w-4xl">
          <div className="font-mono-caption text-primary mb-6">Let's build something</div>
          <h2 className="font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-[9vw]">
            Say hello<span className="text-primary">.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/70">
            Collaborations, research chats, or a robot that's misbehaving — my inbox is open.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:hello@blakechang.dev"
              className="group inline-flex items-center gap-3 border border-primary bg-primary/10 px-6 py-4 font-mono-caption text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              hello@blakechang.dev
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono-caption text-white/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" /> Github
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono-caption text-white/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 font-mono-caption text-muted-foreground md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} Blake Chang</div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          All systems nominal
        </div>
        <div>Built with intent.</div>
      </div>
    </footer>
  );
}
