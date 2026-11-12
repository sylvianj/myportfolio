"use client";

import { useState, useEffect, useRef } from "react";

export default function ProjectCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [images.length]);

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rY = (mouseX / (width / 2)) * 15;
    const rX = -(mouseY / (height / 2)) * 15;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

 
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const touch = e.touches[0];
    const touchX = touch.clientX - rect.left - width / 2;
    const touchY = touch.clientY - rect.top - height / 2;
    
    const rY = (touchX / (width / 2)) * 15;
    const rX = -(touchY / (height / 2)) * 15;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleTouchEnd = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      className="flex items-center justify-center animate-float"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-[160px] md:w-[200px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-zinc-100 bg-zinc-50 shadow-xl overflow-hidden shrink-0 transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
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
    </div>
  );
}