"use client";

import { useEffect, useRef } from "react";

export default function ParticleText({ 
  text, 
  className = "", 
  fontSize = "48",
  color = "#e879f9" 
}: { 
  text: string; 
  className?: string; 
  fontSize?: string;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; baseX: number; baseY: number; color: string }[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const offCanvas = document.createElement("canvas");
      offCanvas.width = width * dpr;
      offCanvas.height = height * dpr;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;
      offCtx.scale(dpr, dpr);

     
      offCtx.font = `bold ${fontSize}px Inter, sans-serif`;
      offCtx.fillStyle = "white";
      offCtx.textAlign = "left";
      offCtx.textBaseline = "middle";
      
      offCtx.fillText(text, 0, height / 2);

      const imageData = offCtx.getImageData(0, 0, width * dpr, height * dpr);
      const data = imageData.data;
      particles = [];

      const gap = 4; 
      
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (Math.floor(y * dpr) * Math.floor(width * dpr) + Math.floor(x * dpr)) * 4;
          const alpha = data[index + 3];
          
          if (alpha > 128) {
            particles.push({
              x: x,
              y: y,
              baseX: x,
              baseY: y,
              color: color
            });
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      particles.forEach((p) => {
        const dx = mouse.x - p.baseX;
        const dy = mouse.y - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 100; 
        
        let targetX = p.baseX;
        let targetY = p.baseY;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          targetX -= Math.cos(angle) * force * 50;
          targetY -= Math.sin(angle) * force * 50;
        }

        p.x += (targetX - p.x) * 0.1;
        p.y += (targetY - p.y) * 0.1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    
    const resizeObserver = new ResizeObserver(() => {
      init();
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, fontSize, color]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}