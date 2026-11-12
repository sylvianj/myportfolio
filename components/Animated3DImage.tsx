"use client";

import { useState, useRef } from "react";

export default function Animated3DImage({ src, alt }: { src: string; alt: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  
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

  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const touch = e.touches[0];
    const mouseX = touch.clientX - rect.left - width / 2;
    const mouseY = touch.clientY - rect.top - height / 2;
    
    const rY = (mouseX / (width / 2)) * 15;
    const rX = -(mouseY / (height / 2)) * 15;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
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
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={src} 
          alt={alt}
          className="h-[380px] w-[300px] lg:h-[480px] lg:w-[380px] rounded-2xl object-cover object-top shadow-[0_20px_50px_rgba(217,70,239,0.3)] border-2 border-zinc-700/50"
          style={{ transform: "translateZ(40px)" }}
        />
      </div>
    </div>
  );
}