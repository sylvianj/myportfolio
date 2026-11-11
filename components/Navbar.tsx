"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-[#1e1e24]">
      
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 md:px-8 md:py-6">
        
        
        <a href="#home" className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold tracking-widest text-white uppercase">
          <img 
            src="/profile.jpg" 
            alt="Sylvia" 
            className="h-11 w-11 md:h-12 md:w-12 rounded-full border-2 border-zinc-700 object-cover shadow-lg" 
          />
          Sylvia
        </a>

        
        <div className="hidden items-center gap-6 md:gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs lg:text-sm font-semibold tracking-wider text-zinc-300 uppercase transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      
      {open && (
        <div className="border-t border-zinc-800 bg-[#1e1e24] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}