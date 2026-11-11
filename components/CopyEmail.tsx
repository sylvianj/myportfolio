"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this email:", siteConfig.email);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl sm:rounded-full border border-white/25 bg-white/10 px-4 py-2.5 backdrop-blur-sm max-w-full">
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-violet-100 hover:underline break-all text-center"
      >
        {siteConfig.email}
      </a>
      <span className="hidden sm:block h-4 w-px bg-white/25" />
      <button
        onClick={handleCopy}
        className="text-sm font-semibold text-fuchsia-300 transition-colors hover:text-white"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}