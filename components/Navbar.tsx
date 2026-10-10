"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-tight text-zinc-100">
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-zinc-300"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-400 hover:text-zinc-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              className="w-fit rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-900"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}