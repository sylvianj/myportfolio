"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Osborn Nyakaru",
    title: "Ai/ML Lead",
    quote: "As our Mobile Track Lead, Sylvia broke down Kotlin and Jetpack concepts in a way that finally made them click. She's an incredible mentor and community leader.",
    image: "testimonial-1.jpg",
  },
  {
    name: "Nelly Bonareri",
    title: "Team Lead, Branch HR System",
    quote: "Working with Sylvia on the HR platform was seamless. She handled the React frontend with incredible attention to detail and ensured the Python API integration was flawless.",
    image: "testimonial-2.jpg",
  },
  
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#1e1e24] bg-cover bg-center py-24">
      
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
      />
      <div className="absolute inset-0 z-0 bg-violet-950/85 mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        
        <img
          src={current.image}
          alt={current.name}
          className="mx-auto block aspect-square h-24 w-24 shrink-0 rounded-full border-4 border-white object-cover shadow-xl transition-all duration-500"
          
        />
        
        
        <h3 className="mt-6 text-xl font-bold text-white">{current.name}</h3>
        <p className="text-sm text-violet-200">{current.title}</p>

        
        <div className="mt-4 flex justify-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

       
        <blockquote className="mt-8 text-lg md:text-xl text-white italic leading-relaxed">
          "{current.quote}"
        </blockquote>

        
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}