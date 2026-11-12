import Navbar from "@/components/Navbar";
import CopyEmail from "@/components/CopyEmail";
import Typewriter from "@/components/Typewriter";
import ProjectCarousel from "@/components/ProjectCarousel";
import TestimonialSlider from "@/components/TestimonialSlider";
import ScrollToTop from "@/components/ScrollToTop";
import Animated3DImage from "@/components/Animated3DImage";
import DotGrid from "@/components/DotGrid";
import ParticleText from "@/components/ParticleText";
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
      
      <Hero />

      <main className="mx-auto max-w-[1440px] px-4 md:px-8">
        <About />
        <Services />
      </main>

      <Stats />

      <main className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Projects />
        <Skills />
      </main>

      <TestimonialSlider />

      <main className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Experience />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
}



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



function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#1e1e24] pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      
      <DotGrid />

      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" />
      
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-4 md:px-8 md:flex-row md:gap-16">
        
        <div className="w-full md:w-1/2 text-center md:text-left pointer-events-auto">
          
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            Welcome to my world
          </p>

          <div className="mt-4 md:mt-6 flex flex-col items-center md:items-start w-full gap-2 md:gap-4">
            <ParticleText 
              text="Hi, I'm" 
              className="h-16 md:h-28 w-full" 
              fontSize="72"
              color="#ffffff"
            />
            
            <ParticleText 
              text="Sylvia Njoki" 
              className="h-16 md:h-28 w-full" 
              fontSize="72"
              color="#e879f9"
            />
          </div>

          <div className="mt-4 flex justify-center md:justify-start text-xl font-semibold md:text-3xl">
            <Typewriter />
          </div>
          
          <p className="mt-6 text-sm leading-relaxed text-zinc-400 md:mt-8 md:text-base max-w-lg mx-auto md:mx-0 text-left md:text-left">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex justify-center gap-4 md:justify-start md:mt-10">
           
            <a
              href="#work"
              className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all hover:-translate-y-0.5 hover:bg-fuchsia-700"
            >
              View My Work
            </a>
            <a
              href={siteConfig.resumeUrl}
              className="rounded-full border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex relative w-full md:w-1/2 justify-center md:justify-center items-center pointer-events-auto">
          <Animated3DImage 
            src="/sylvia-main.jpg" 
            alt="Sylvia Njoki" 
          />
        </div>

      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "4", label: "Projects Shipped" },
    { value: "6+", label: "Technologies" },
    { value: "2", label: "Leadership Roles" },
    { value: "3", label: "Months Industry Exp." },
  ];
  return (
    <section 
      className="relative w-full bg-[#1e1e24] bg-cover bg-center py-10 md:py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
    >
      <div className="absolute inset-0 bg-violet-900/85 mix-blend-multiply" />
      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="mb-1 text-3xl font-bold text-white md:text-6xl">
                {s.value}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-violet-200 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-10 md:py-24">
      <SectionHeader eyebrow="About" title="A little about me" />
      <div className="mt-6 grid gap-6 md:mt-10 md:gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-zinc-700">
          <p className="text-sm md:text-base leading-relaxed">
            I&apos;m Sylvia Njoki, a mobile and full-stack developer based in
            Kasarani, Nairobi. My strongest work is Android - Kotlin apps with
            backend integrations and AI features woven in.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            My flagship project, SheLoans, gives women access to credit without
            land collateral by combining bank APIs, M-Pesa, and an internal
            credit-scoring engine. I&apos;ve also built web dashboards, an ML
            churn model, and a community site for SheCode Africa.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Currently open to{" "}
            <span className="font-semibold text-zinc-900">freelance projects</span>,{" "}
            <span className="font-semibold text-zinc-900">full-time roles</span>, and{" "}
            <span className="font-semibold text-zinc-900">internships</span> -
            especially in fintech, mobile, or AI.
          </p>
        </div>
        
      
        <div className="relative overflow-hidden rounded-2xl border border-violet-200 bg-white p-6 shadow-sm shadow-violet-200/50">
          <div className="absolute inset-0 opacity-30 dot-grid" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-800">
              Quick facts
            </p>
            <ul className="mt-4 space-y-3 text-sm font-medium text-zinc-800">
              <li className="flex items-center gap-2">
                <div className="[perspective:1000px]">
                  <span className="text-violet-600 animate-flip-loop block" style={{ animationDelay: "0s" }}>
                    <IconMapPin />
                  </span>
                </div>
                {siteConfig.location}
              </li>
              <li className="flex items-center gap-2">
                <div className="[perspective:1000px]">
                  <span className="text-violet-600 animate-flip-loop block" style={{ animationDelay: "0.4s" }}>
                    <IconBriefcase />
                  </span>
                </div>
                Open to work
              </li>
              <li className="flex items-center gap-2">
                <div className="[perspective:1000px]">
                  <span className="text-violet-600 animate-flip-loop block" style={{ animationDelay: "0.8s" }}>
                    <IconGlobe />
                  </span>
                </div>
                Remote-friendly
              </li>
              <li className="flex items-center gap-2">
                <div className="[perspective:1000px]">
                  <span className="text-violet-600 animate-flip-loop block" style={{ animationDelay: "1.2s" }}>
                    <IconMobile />
                  </span>
                </div>
                Android - Web - AI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-zinc-200 py-10 md:py-24">
      <SectionHeader eyebrow="Services" title="What I do" />
      
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {services.map((s, i) => (
          <div key={s.title} className="relative pl-6 md:pl-8">
           
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-violet-500" />
           
            <div className="absolute left-[-6px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-violet-500 bg-white" />
            
            <div className="[perspective:1000px] mb-4">
              <div 
                className="inline-flex h-10 w-10 items-center justify-center bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-300/50 animate-flip-loop"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                {serviceIcons[i]}
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-zinc-700">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 italic">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  
  const uniformGradient = "from-violet-600 via-violet-500 to-fuchsia-500";

  return (
    <section id="work" className="scroll-mt-24 py-10 md:py-24">
      <SectionHeader eyebrow="Selected Work" title="Projects & case studies" />
      <div className="mt-6 space-y-8 md:mt-10 md:space-y-12">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all ${
              p.featured
                ? "border-violet-400 shadow-lg shadow-violet-200/60 hover:shadow-xl hover:shadow-violet-300/60"
                : "border-zinc-200 shadow-zinc-200/60 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/60"
            }`}
          >
           
            <div className={`relative h-24 md:h-32 bg-gradient-to-br ${uniformGradient} overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 dot-grid" />
              
              <div className="relative flex h-full items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-white/20 text-xl md:text-2xl font-bold text-white backdrop-blur-sm ring-1 ring-white/30">
                    {p.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="text-[10px] md:text-sm font-medium text-white/85">
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

            <div className="p-4 md:p-8">
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                
                {p.screenshots && p.screenshots.length > 0 && (
                  <div className="w-full md:w-[220px] shrink-0 flex justify-center md:justify-start">
                    <ProjectCarousel images={p.screenshots} title={p.title} />
                  </div>
                )}

                <div className="flex-1 w-full">
                  <p className="text-sm md:text-base leading-relaxed text-zinc-700">
                    {p.description}
                  </p>

                  <div className="mt-5 grid gap-4 md:mt-6 md:gap-6 md:grid-cols-3">
                    <Field label="Role" value={p.role} />
                    <Field label="Problem" value={p.problem} />
                    <Field label="Result" value={p.result} />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 md:mt-8">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] md:text-xs font-semibold text-violet-800 md:px-3"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm md:mt-8 md:gap-6">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-violet-700 underline-offset-4 hover:text-violet-900 hover:underline"
                      >
                        GitHub
                        <IconArrow />
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-violet-700 underline-offset-4 hover:text-violet-900 hover:underline"
                      >
                        Live Demo
                        <IconArrow />
                      </a>
                    )}
                  </div>
                </div>

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
      <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-violet-700">
        {label}
      </p>
      <p className="mt-1 text-xs md:text-sm text-zinc-700">{value}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-zinc-200 py-10 md:py-24">
      <SectionHeader eyebrow="Toolbox" title="Skills & technologies" />
      
     
      <div className="mt-6 grid gap-4 md:mt-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <div
            key={g.label}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 md:p-6 shadow-sm shadow-zinc-200/60 transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/50"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-center gap-3">
                
                <div className="[perspective:1000px]">
                  <div 
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-300/50 animate-flip-loop"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {skillIcons[i % skillIcons.length]}
                  </div>
                </div>
                
                <h3 className="text-xs font-semibold uppercase tracking-wider text-violet-800">
                  {g.label}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] md:text-xs font-semibold text-zinc-700 transition-colors hover:border-violet-400 hover:bg-violet-50 hover:text-violet-800 md:px-3"
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
    <section id="experience" className="scroll-mt-24 border-t border-zinc-200 py-10 md:py-24">
      <SectionHeader eyebrow="Background" title="Experience & education" />
      <div className="mt-6 space-y-6 md:mt-10 md:space-y-8">
        {experience.map((e, i) => (
          <div key={e.role + e.company} className="relative pl-6 md:pl-8">
            <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-violet-500">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            </div>
            {i < experience.length - 1 && (
              <div className="absolute left-[7px] top-6 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-violet-400 to-transparent" />
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm md:text-base font-semibold text-zinc-900">{e.role}</h3>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] md:text-xs font-medium text-violet-800 shadow-sm md:px-2.5">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-xs md:text-sm font-semibold text-violet-700">{e.company}</p>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-zinc-700">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200 py-10 md:py-24"
    >
      <div className="relative overflow-hidden rounded-3xl border border-violet-300 bg-gradient-to-br from-violet-700 via-violet-800 to-fuchsia-800 px-5 py-10 md:px-12 md:py-16 shadow-2xl shadow-violet-400/50">
        <div className="absolute inset-0 opacity-20 dot-grid" />
        <div className="relative text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-widest text-violet-200">
            Contact
          </p>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            Let&apos;s build something together.
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-violet-100">
            Have a project, a role, or an internship in mind? I reply within 24 hours.
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            <CopyEmail />
            <div className="flex gap-3 w-full md:w-auto">
              <a
                href={siteConfig.linkedin}
                className="flex-1 md:flex-none text-center rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                className="flex-1 md:flex-none text-center rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#1e1e24] bg-cover bg-center border-t border-white/10">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
      />
      <div className="absolute inset-0 z-0 bg-violet-950/90 mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-start">
          
          <div className="max-w-sm text-center md:text-left">
            <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {siteConfig.name}
            </a>
            <p className="mt-3 text-xs md:text-sm leading-relaxed text-violet-200">
              Building mobile apps with AI built in. Focused on fintech, financial inclusion, and creating real impact.
            </p>
          </div>

          <div className="flex gap-12 md:gap-16 text-center md:text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-violet-400">Navigation</span>
              <a href="#home" className="text-xs md:text-sm text-white hover:text-violet-400 transition-colors">Home</a>
              <a href="#about" className="text-xs md:text-sm text-white hover:text-violet-400 transition-colors">About</a>
              <a href="#work" className="text-xs md:text-sm text-white hover:text-violet-400 transition-colors">Work</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-violet-400">Connect</span>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-xs md:text-sm text-white hover:text-violet-400 transition-colors">LinkedIn</a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-xs md:text-sm text-white hover:text-violet-400 transition-colors">GitHub</a>
              <a href={`mailto:${siteConfig.email}`} className="text-xs md:text-sm text-white hover:text-violet-400 transition-colors">Email</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-[10px] md:text-xs font-medium text-violet-300">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-widest text-violet-700">
        {eyebrow}
      </p>
      <h2 className="mt-1 md:mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
    </div>
  );
}