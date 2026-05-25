import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    // გვერდზე გადასვლისას სქროლი ავა თავში
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. ზედა ბლოკის (ტექსტები + მატრიცა) ანიმაცია
      const tl = gsap.timeline();
      tl.fromTo(".about-animate", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
      );
      tl.fromTo(".about-matrix", 
        { opacity: 0, scale: 0.95, x: 20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      // 2. ქვედა არქივისა და სეზონების ამოტივტივება
      gsap.fromTo(".archive-item", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const tattooCodes = [
    {
      title: "1. Allen 111-A",
      meaning: "The bolt signature required to unscrew the cell toilet, opening the gateway to the facility's internal pipes."
    },
    {
      title: "2. Cute Poison",
      meaning: "A chemical acronym mixed to dissolve the iron grates beneath the infirmary."
    },
    {
      title: "3. English, Fitz, Percy",
      meaning: "The three escape streets outside Fox River. Michael triggered a false alarm to see which street the police cruisers would avoid."
    },
    {
      title: "4. Christ In Rose",
      meaning: "The image of Jesus hidden on his arm, containing the exact blueprint coordinates of the underground gas and water valves."
    }
  ];

  const seasons = [
    {
      num: "S01",
      title: "The Structural Breach",
      desc: "Infiltration of Fox River, recruiting the crew, and executing the primary exfiltration through the infirmary window."
    },
    {
      num: "S02",
      title: "Manhunt Protocol",
      desc: "Fugitives on the run across America. Racing for Westmoreland's hidden 5 million dollars while being hunted by FBI Agent Alex Mahone."
    },
    {
      num: "S03",
      title: "Sona Lawless Grid",
      desc: "Trapped in a lawless Panamanian prison. Michael must break out a high-value target from the inside with zero external blueprints."
    },
    {
      num: "S04",
      title: "Scylla Decryption",
      desc: "The crew unites as black-ops agents to infiltrate 'The Company' and steal Scylla—a high-tech digital data module."
    },
    {
      num: "S05",
      title: "Ogygia Resurrection",
      desc: "Years later, Michael is found alive in a terrorist-controlled prison in Yemen. Executing a global blackout escape strategy."
    }
  ];

  return (
    <div ref={containerRef} className="about-page bg-[#0a0b0d] min-h-[calc(100vh-80px)] pb-24 w-full">
      
      {/* ================= PART 1: MASTER PLAN & MATRIX ================= */}
      <section className="py-24 px-6 md:px-[8%] bg-[#0a0b0d] overflow-hidden w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* მარცხენა მხარე: ტექსტი */}
          <div className="space-y-6">
            <div className="about-animate text-[10px] font-mono font-black tracking-[4px] text-[#00f0ff] uppercase bg-[#00f0ff]/5 border border-[#00f0ff]/10 px-3 py-1 rounded inline-block opacity-0">
              INTELLIGENCE: THE BLUEPRINT CONCEPT
            </div>
            <h2 className="about-animate text-3xl md:text-4xl font-black text-white uppercase tracking-wide leading-tight opacity-0">
              The Master Plan <br /> Behind The Ink
            </h2>
            <div className="about-animate w-12 h-1 bg-[#00f0ff] shadow-[0_0_10px_#00f0ff] opacity-0"></div>
            <p className="about-animate text-sm text-slate-400 leading-relaxed font-sans font-normal pt-2 opacity-0">
              When standard infiltration methods are impossible, the entire architecture must be memorized. Michael Scofield disguised the complete structural blueprints of Fox River State Penitentiary inside an elaborate, full-body tattoo.
            </p>
            <p className="about-animate text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-normal opacity-0">
              Every line, gothic angel, and numerical sequence hidden on his skin represents specific dimensions, secure corridors, air ducts, and underground water pipes.
            </p>
          </div>

          {/* მარჯვენა მხარე: კიბერპანკ დაფა */}
          <div className="about-matrix bg-[#111317] border border-slate-800/60 p-6 sm:p-8 rounded-xl relative overflow-hidden opacity-0 shadow-2xl">
            <div className="absolute top-0 right-0 bg-[#00f0ff]/10 text-[#00f0ff] text-[9px] font-mono px-3 py-1 rounded-bl-lg font-bold tracking-widest border-l border-b border-slate-800/40">
              TATTOO_DATA_DECRYPTED
            </div>
            <div className="space-y-6 font-mono text-xs">
              <div className="border-b border-slate-900 pb-3">
                <span className="text-slate-600 block mb-1">PROJECT_NAME:</span>
                <span className="text-white font-bold tracking-wide">SCHEMATIC INTEGRATION PROTOCOL</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-600 block mb-1">LATITUDE / LONGITUDE:</span>
                  <span className="text-[#00f0ff]">41.6238° N, 88.0664° W</span>
                </div>
                <div>
                  <span className="text-slate-600 block mb-1">ENCRYPTION TYPE:</span>
                  <span className="text-amber-400">STEGANOGRAPHY // VISUAL</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PART 2: TATTOO ARCHIVE ================= */}
      <section className="px-6 md:px-[8%] max-w-6xl mx-auto w-full">
        <div className="archive-item mb-12 border-l-2 border-[#00f0ff] pl-4 opacity-0">
          <div className="text-[10px] font-mono text-[#00f0ff] tracking-[3px] uppercase">// ARTIFACT ANALYSIS</div>
          <h3 className="text-xl font-black text-white uppercase tracking-wider mt-1">Tattoo Decryption Ledger</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tattooCodes.map((item, index) => (
            <div key={index} className="archive-item bg-[#111317] border border-slate-800/60 p-6 rounded-xl relative overflow-hidden group hover:border-[#00f0ff]/30 transition-colors duration-300 opacity-0">
              <h4 className="text-white font-mono font-bold text-sm mb-2 text-[#00f0ff]/90">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PART 3: SEASONS ================= */}
      <section className="mt-24 px-6 md:px-[8%] max-w-6xl mx-auto w-full">
        <div className="archive-item mb-12 border-l-2 border-rose-500 pl-4 opacity-0">
          <div className="text-[10px] font-mono text-rose-500 tracking-[3px] uppercase">// HISTORICAL ARCHIVE</div>
          <h3 className="text-xl font-black text-white uppercase tracking-wider mt-1">Seasonal Operation Logs</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {seasons.map((season, index) => (
            <div key={index} className="archive-item bg-[#0c0e12] border border-slate-900 p-5 rounded-xl flex flex-col justify-between hover:border-slate-800 transition-colors duration-300 opacity-0">
              <div>
                <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 block w-max mb-4">
                  {season.num}
                </span>
                <h4 className="text-sm font-bold text-white mb-2 tracking-wide font-sans">{season.title}</h4>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{season.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default AboutPage;