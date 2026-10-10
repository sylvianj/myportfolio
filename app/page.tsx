import Navbar from "@/components/Navbar";
import {
  siteConfig,
  services,
  projects,
  skillGroups,
  experience,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="animate-fadeUp">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to work &amp; freelance
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
            🚀 GDG Mobile Track Lead
          </div>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
          Hi, I&apos;m Sylvia Njoki.
          <br />
          <span className="text-zinc-500">
            I build mobile apps &amp; AI-powered products.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          {siteConfig.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
          >
            View Work
          </a>
          <a
            href={siteConfig.resumeUrl}
            className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            Download Resume
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="scroll-mt-24 border-t border-zinc-900 py-20">
      <SectionHeader eyebrow="Services" title="What I do" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
          >
            <h3 className="text-base font-semibold text-zinc-100">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-zinc-900 py-20">
      <SectionHeader eyebrow="Selected Work" title="Projects & case studies" />
      <div className="mt-10 space-y-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group rounded-2xl border bg-zinc-900/40 p-6 transition-colors md:p-8 ${
              p.featured ? "border-emerald-400/30 hover:border-emerald-400/60" : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
              </div>
              {p.featured && (
                <span className="rounded-full border border-emerald-400/40 px-3 py-1 text-xs text-emerald-300">
                  Featured
                </span>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {p.description}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Field label="Role" value={p.role} />
              <Field label="Problem" value={p.problem} />
              <Field label="Result" value={p.result} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {p.links.github && (
                <a
                  href={p.links.github}
                  className="text-zinc-300 underline-offset-4 hover:text-emerald-300 hover:underline"
                >
                  GitHub →
                </a>
              )}
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  className="text-zinc-300 underline-offset-4 hover:text-emerald-300 hover:underline"
                >
                  Live Demo →
                </a>
              )}
              {p.links.video && (
                <a
                  href={p.links.video}
                  className="text-zinc-300 underline-offset-4 hover:text-emerald-300 hover:underline"
                >
                  Demo Video →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-1 text-sm text-zinc-300">{value}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-zinc-900 py-20">
      <SectionHeader eyebrow="Toolbox" title="Skills & technologies" />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {g.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-zinc-900 py-20">
      <SectionHeader eyebrow="Background" title="Experience & education" />
      <div className="mt-10 space-y-8">
        {experience.map((e) => (
          <div key={e.role + e.company} className="border-l border-zinc-800 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-zinc-100">{e.role}</h3>
              <span className="text-xs text-zinc-500">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-zinc-500">{e.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-zinc-900 py-20">
      <SectionHeader eyebrow="About" title="A little about me" />
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-zinc-400">
          <p>
            I&apos;m Sylvia Njoki, a software developer based in Kasarani, Nairobi. I
            build mobile and web applications with a focus on fintech, financial
            inclusion, and AI-powered features.
          </p>
          <p>
            My work sits at the intersection of technology and real impact — like an
            Android app that helps women access loans without land collateral, or a
            multi-branch HR platform used across an organization.
          </p>
          <p>
            I&apos;m currently open to{" "}
            <span className="text-zinc-200">freelance projects</span>,{" "}
            <span className="text-zinc-200">full-time roles</span>, and{" "}
            <span className="text-zinc-200">internships</span> — especially in
            fintech, mobile development, or AI/ML.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-xs uppercase tracking-wider text-zinc-500">Quick facts</p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>📍 {siteConfig.location}</li>
            <li>💼 Open to work</li>
            <li>🌍 Remote-friendly</li>
            <li>📱 Android · Web · AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-zinc-900 py-20">
      <SectionHeader eyebrow="Contact" title="Let's build something" />
      <p className="mt-4 max-w-xl text-zinc-400">
        Have a project, a role, or an internship in mind? I reply within 24 hours.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
        >
          Email me
        </a>
        <a
          href={siteConfig.linkedin}
          className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.github}
          className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind.</p>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}