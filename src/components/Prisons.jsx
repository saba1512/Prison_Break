import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Prisons() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // დამკვირვებელი, რომელიც ამოწმებს ეკრანზე გამოჩნდა თუ არა სექცია
    const observer = new IntersectionObserver(
      ([entry]) => {
        // როგორც კი სექცია ეკრანზე შემოვა (თუნდაც 15%)
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. ქარდების გამოჩენა
            tl.fromTo(".prison-card", 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
            );

            // 2. ციფრების ატივტივება 0-იდან
            tl.from(".percent-num", {
              textContent: 0,
              duration: 1.2,
              ease: "power1.out",
              snap: { textContent: 1 },
              stagger: 0.15
            }, "-=0.4");

          }, sectionRef);

          // ანიმაციის ერთხელ გაშვების შემდეგ დამკვირვებელს ვთიშავთ
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // ეკრანის 15%-ზე რომ შემოვა, მაშინვე ჩაირთვება
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const zones = [
    {
      name: "The Infirmary",
      tag: "Zone 01 // Key Asset",
      chance: 85,
      color: "#00f0ff",
      desc: "The weakest point in Fox River's perimeter. Requires regular access to the drainage system through chemical pipe corrosion."
    },
    {
      name: "The Yard",
      tag: "Zone 02 // High Risk",
      chance: 35,
      color: "#f43f5e",
      desc: "Heavy guard presence, sniper towers, and open spotlight grids. Infiltration during daylight hours results in 99% failure rate."
    },
    {
      name: "The Sewers",
      tag: "Zone 03 // Underpass",
      chance: 60,
      color: "#a855f7",
      desc: "Confined maze beneath the facility. Structural blueprints reveal structural blocks that must be removed manually from Cell 40."
    }
  ];

  return (
    <section ref={sectionRef} id="facilities" className="py-24 px-6 md:px-[8%] bg-[#08090c] border-t border-slate-900/60">
      <div className="text-center mb-16">
        <div className="text-[10px] font-mono font-black tracking-[4px] text-[#00f0ff] uppercase mb-3">
          CRITICAL BREAKOUT ZONES
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
          Infiltration Map
        </h2>
        <div className="w-16 h-1 bg-[#00f0ff] mx-auto mt-4 shadow-[0_0_12px_#00f0ff]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {zones.map((zone, index) => (
          <div 
            key={index} 
            className="prison-card group bg-[#111317] border border-slate-800/60 p-8 rounded-xl relative transition-all duration-300 hover:border-slate-700 opacity-0"
          >
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">
              {zone.tag}
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span 
                className="percent-num text-5xl font-black tracking-tight"
                style={{ color: zone.color, textShadow: `0 0 20px ${zone.color}40` }}
              >
                {zone.chance}
              </span>
              <span className="text-xl font-bold text-slate-500">%</span>
              <span className="text-xs font-mono text-slate-400 ml-3 uppercase tracking-wider block">Success Rate</span>
            </div>

            <h3 className="text-xl font-extrabold text-white mb-3 tracking-wide group-hover:text-[#00f0ff] transition-colors duration-300">
              {zone.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal border-t border-slate-800/60 pt-4">
              {zone.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prisons;