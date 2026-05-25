import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ქმნის "სმუზ" Fade-in + Slide-up ანიმაციას სათითაოდ (Stagger)
      gsap.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      // ფონის ბადის ნელი შემოსვლა
      gsap.from(".bg-grid", {
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert(); // გასუფთავება
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[calc(100vh-80px)] flex justify-center items-center text-center bg-[#0a0b0d] px-4 py-16 overflow-hidden">
      {/* კიბერპანკ ბადის ეფექტი */}
      <div 
        className="bg-grid absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)'
        }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#0a0b0d_80%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <div className="animate-item text-[10px] md:text-xs font-black tracking-[4px] text-[#00f0ff] uppercase mb-4 bg-[#00f0ff]/5 border border-[#00f0ff]/20 px-3 py-1 rounded-md drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
          PROJECT: FOX RIVER OPERATIONS
        </div>
        
        <h1 className="animate-item text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[4px] sm:tracking-[8px] md:tracking-[12px] text-white uppercase mb-6 leading-tight">
          PRISON <br className="sm:hidden" /> BREAK
        </h1>
        
        <p className="animate-item text-sm sm:text-base md:text-lg italic text-slate-400 font-medium max-w-xl mb-6 leading-relaxed px-2">
          "Preparation can only take you so far. After that, you have to take a leap of faith."
        </p>
        
        <p className="animate-item text-xs sm:text-sm text-slate-500 font-normal max-w-xl mb-10 leading-relaxed px-4">
          Fox River is an inescapable fortress, but its blueprints are hidden in plain sight. 
          Michael Scofield infiltrates the maximum-security facility with a brilliant structural map 
          tattooed on his body, executing a flawless protocol to break his innocent brother out.
        </p>
        
        <div className="animate-item w-full sm:w-auto flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
          <a 
            href="#facilities" 
            className="w-full sm:w-auto text-center border-2 border-[#00f0ff] text-[#00f0ff] px-8 py-3 rounded text-xs font-black uppercase tracking-widest bg-transparent shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300 hover:bg-[#00f0ff] hover:text-[#0a0b0d] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
          >
            Access Plan
          </a>
          <a 
            href="#timeline" 
            className="w-full sm:w-auto text-center border-2 border-slate-800 text-slate-300 px-8 py-3 rounded text-xs font-black uppercase tracking-widest bg-transparent transition-all duration-300 hover:border-slate-400 hover:text-white hover:bg-white/5"
          >
            Inmate Files
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;