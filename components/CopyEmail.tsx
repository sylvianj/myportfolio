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
    <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-violet-100 hover:underline md:text-base"
      >
        {siteConfig.email}
      </a>
      <span className="h-4 w-px bg-white/25" />
      <button
        onClick={handleCopy}
        className="text-sm font-medium text-violet-100 transition-colors hover:text-white"
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}