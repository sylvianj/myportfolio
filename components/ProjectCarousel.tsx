"use client";

import { useState, useEffect } from "react";

export default function ProjectCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[160px] md:w-[200px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-zinc-100 bg-zinc-50 shadow-xl overflow-hidden shrink-0">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`${title} screenshot ${idx + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      
      
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "w-4 bg-violet-600" : "w-1.5 bg-violet-300/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}