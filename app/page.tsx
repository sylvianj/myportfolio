import Navbar from "@/components/Navbar";
import CopyEmail from "@/components/CopyEmail";
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
        <Stats />
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

/* ---------------- Icons ---------------- */

function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M12 17.5h.01" />
    </svg>
  );
}

function IconWeb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" />
      <path d="M9 13l-2 2 2 2" />
      <path d="M15 13l2 2-2 2" />
      <path d="M13 12l-2 6" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M5 5l1.5 1.5" />
      <path d="M17.5 17.5L19 19" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M5 19l1.5-1.5" />
      <path d="M17.5 6.5L19 5" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M12 17.5h.01" />
    </svg>
  );
}

function IconBrowser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4z" />
      <path d="M14.7 6.3L18 3a4 4 0 0 1 3 3l-3.3 3.3" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

const serviceIcons = [<IconMobile key="m" />, <IconWeb key="w" />, <IconAI key="a" />];
const skillIcons = [
  <IconCode key="code" />,
  <IconPhone key="phone" />,
  <IconBrowser key="browser" />,
  <IconSparkle key="sparkle" />,
  <IconServer key="server" />,
  <IconWrench key="wrench" />,
];

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pb-16 pt-24 md:pb-28 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_70%)] dot-grid" />

      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
        <div className="order-1 justify-self-center md:order-2 md:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-400 via-fuchsia-300 to-violet-500 opacity-40 blur-2xl" />
            <img
              src="/profile.jpg"
              alt="Sylvia Njoki"
              className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-2xl shadow-violet-300 ring-2 ring-violet-300 md:h-72 md:w-72"
            />
          </div>
        </div>

        <div className="order-2 animate-fadeUp md:order-1">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-white px-3 py-1 text-[11px] font-medium text-violet-800 md:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-600" />
              Open to work &amp; freelance
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1 text-[11px] font-medium text-zinc-700 md:text-xs">
              <span className="text-violet-600">
                <IconRocket />
              </span>
              GDG Mobile Track Lead
            </div>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 md:mt-6 md:text-6xl">
            Hi, I&apos;m Sylvia Njoki.
            <br />
            <span className="gradient-text">
              I build Android apps with AI built in.
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-zinc-700 md:mt-6 md:max-w-2xl md:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
            <a
              href="#work"
              className="rounded-full bg-violet-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-300/50 transition-all hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-xl hover:shadow-violet-400/50 md:px-5 md:py-2.5"
            >
              View Work
            </a>
            <a
              href={siteConfig.resumeUrl}
              className="rounded-full border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-violet-400 hover:bg-violet-50 hover:text-violet-800 md:px-5 md:py-2.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-violet-400 hover:bg-violet-50 hover:text-violet-800 md:px-5 md:py-2.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "4", label: "Projects shipped" },
    { value: "6+", label: "Technologies" },
    { value: "1", label: "Leadership role" },
    { value: "3mo", label: "Industry attachment" },
  ];
  return (
    <section className="border-y border-violet-200 bg-white/50 py-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-semibold text-violet-700 md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-600 md:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="scroll-mt-24 py-14 md:py-24">
      <SectionHeader eyebrow="Services" title="What I do" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-violet-200 bg-white p-6 shadow-sm shadow-violet-200/60 transition-all hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-300/60"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-300/50">
                {serviceIcons[i]}
              </div>
              <h3 className="mt-5 text-base font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const gradients = [
    "from-violet-700 via-violet-600 to-fuchsia-600",
    "from-violet-600 via-violet-500 to-fuchsia-500",
    "from-violet-700 via-indigo-600 to-violet-600",
    "from-fuchsia-600 via-violet-600 to-violet-700",
  ];

  return (
    <section id="work" className="scroll-mt-24 border-t border-violet-200 py-14 md:py-24">
      <SectionHeader eyebrow="Selected Work" title="Projects & case studies" />
      <div className="mt-10 space-y-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
              p.featured
                ? "border-violet-400 shadow-lg shadow-violet-300/60 hover:shadow-xl hover:shadow-violet-400/60"
                : "border-violet-200 shadow-violet-200/60 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-300/60"
            }`}
          >
            <div className={`relative h-28 bg-gradient-to-br ${gradients[i % gradients.length]} md:h-32`}>
              <div className="absolute inset-0 opacity-20 dot-grid" />
              <div className="relative flex h-full items-center justify-between px-6 md:px-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl font-bold text-white backdrop-blur-sm ring-1 ring-white/30">
                    {p.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {p.title}
                    </h3>
                    <p className="text-xs font-medium text-white/85 md:text-sm">
                      {p.subtitle}
                    </p>
                  </div>
                </div>
                {p.featured && (
                  <span className="hidden items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ring-1 ring-white/30 md:inline-flex">
                    <IconStar />
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 md:p-8">
              {p.screenshots && p.screenshots.length > 0 && (
                <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
                  {p.screenshots.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${p.title} screenshot ${idx + 1}`}
                      className="h-44 w-auto flex-shrink-0 rounded-xl border border-violet-200 object-cover shadow-sm"
                    />
                  ))}
                </div>
              )}

              <p className="text-sm leading-relaxed text-zinc-700">
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
                    className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    className="inline-flex items-center gap-1.5 font-semibold text-violet-700 underline-offset-4 hover:text-violet-900 hover:underline"
                  >
                    GitHub
                    <IconArrow />
                  </a>
                )}
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    className="inline-flex items-center gap-1.5 font-semibold text-violet-700 underline-offset-4 hover:text-violet-900 hover:underline"
                  >
                    Live Demo
                    <IconArrow />
                  </a>
                )}
                {p.links.video && (
                  <a
                    href={p.links.video}
                    className="inline-flex items-center gap-1.5 font-semibold text-violet-700 underline-offset-4 hover:text-violet-900 hover:underline"
                  >
                    Demo Video
                    <IconArrow />
                  </a>
                )}
              </div>
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
      <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
        {label}
      </p>
      <p className="mt-1 text-sm text-zinc-700">{value}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-violet-200 py-14 md:py-24">
      <SectionHeader eyebrow="Toolbox" title="Skills & technologies" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <div
            key={g.label}
            className="group relative overflow-hidden rounded-2xl border border-violet-200 bg-white p-6 shadow-sm shadow-violet-200/60 transition-all hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-300/60"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-300/50">
                  {skillIcons[i % skillIcons.length]}
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-violet-800">
                  {g.label}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800 transition-colors hover:border-violet-400 hover:bg-violet-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-violet-200 py-14 md:py-24">
      <SectionHeader eyebrow="Background" title="Experience & education" />
      <div className="mt-10 space-y-8">
        {experience.map((e, i) => (
          <div key={e.role + e.company} className="relative pl-8">
            <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-violet-500">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            </div>
            {i < experience.length - 1 && (
              <div className="absolute left-[7px] top-6 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-violet-400 to-transparent" />
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-zinc-900">{e.role}</h3>
              <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-violet-800 shadow-sm">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-violet-700">{e.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
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
    <section id="about" className="scroll-mt-24 border-t border-violet-200 py-14 md:py-24">
      <SectionHeader eyebrow="About" title="A little about me" />
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-zinc-700">
          <p>
            I&apos;m Sylvia Njoki, a mobile and full-stack developer based in
            Kasarani, Nairobi. My strongest work is Android - Kotlin apps with
            backend integrations and AI features woven in.
          </p>
          <p>
            My flagship project, SheLoans, gives women access to credit without
            land collateral by combining bank APIs, M-Pesa, and an internal
            credit-scoring engine. I&apos;ve also built web dashboards, an ML
            churn model, and a community site for SheCode Africa.
          </p>
          <p>
            Currently open to{" "}
            <span className="font-semibold text-zinc-900">freelance projects</span>,{" "}
            <span className="font-semibold text-zinc-900">full-time roles</span>, and{" "}
            <span className="font-semibold text-zinc-900">internships</span> -
            especially in fintech, mobile, or AI.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-violet-300 bg-white p-6 shadow-sm shadow-violet-200">
          <div className="absolute inset-0 opacity-30 dot-grid" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-800">
              Quick facts
            </p>
            <ul className="mt-4 space-y-3 text-sm font-medium text-zinc-800">
              <li className="flex items-center gap-2">
                <span className="text-violet-600">
                  <IconMapPin />
                </span>
                {siteConfig.location}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-600">
                  <IconBriefcase />
                </span>
                Open to work
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-600">
                  <IconGlobe />
                </span>
                Remote-friendly
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-600">
                  <IconMobile />
                </span>
                Android - Web - AI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-violet-200 py-14 md:py-24"
    >
      <div className="relative overflow-hidden rounded-3xl border border-violet-300 bg-gradient-to-br from-violet-700 via-violet-800 to-fuchsia-800 px-6 py-12 shadow-2xl shadow-violet-400/50 md:px-12 md:py-16">
        <div className="absolute inset-0 opacity-20 dot-grid" />
        <div className="relative">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-200">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-3 max-w-xl text-violet-100">
            Have a project, a role, or an internship in mind? I reply within 24 hours.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CopyEmail />
            <a
              href={siteConfig.linkedin}
              className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-violet-200 bg-white/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs font-medium text-zinc-700 md:flex-row">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind.</p>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}