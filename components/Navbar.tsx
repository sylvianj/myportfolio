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
 
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-[#1e1e24]">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 md:px-8 md:py-6">
          
         
          <div className="flex items-center gap-3 md:gap-4">
           
            <button 
              onClick={() => setIsImageOpen(true)}
              className="group relative outline-none"
              aria-label="View full profile picture"
            >
              <img 
                src="/profile.jpg" 
                alt="Sylvia" 
                className="h-11 w-11 md:h-12 md:w-12 rounded-full border-2 border-zinc-700 object-cover shadow-lg transition-all group-hover:border-fuchsia-500 group-hover:opacity-80" 
              />
             
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="h-5 w-5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
            </button>

            <a href="#home" className="text-base md:text-lg font-bold tracking-widest text-white uppercase">
              Sylvia
            </a>
          </div>

         
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

      
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity"
          onClick={() => setIsImageOpen(false)}
        >
         
          <button 
            onClick={() => setIsImageOpen(false)}
            className="absolute top-6 right-6 rounded-full bg-zinc-800/50 p-3 text-white transition-colors hover:bg-zinc-700/80"
            aria-label="Close image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          
          <img
            src="/sylvia-main.jpg"
            alt="Sylvia Njoki"
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}