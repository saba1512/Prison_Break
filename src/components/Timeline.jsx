import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// აუცილებელია ScrollTrigger-ის დარეგისტრირება
gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. ცენტრალური ხაზის ანიმაცია, რომელიც სქროლს მიყვება (Scrub ეფექტი)
      gsap.fromTo(".timeline-line", 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: "#timeline-container", // კონტეინერი, სადაც ხაზი იწყება
            start: "top 60%", // იწყებს ზრდას, როცა სექცია ეკრანის 60%-ზეა
            end: "bottom 80%", // მთავრდება, როცა სექციის ბოლო 80%-ზეა
            scrub: 1 // ციფრი ნიშნავს, რომ ხაზი სქროლს 1-წამიანი "სმუზ" დაგვიანებით მიჰყვება
          }
        }
      );

      // 2. თითოეული პუნქტის (წერტილი + ქარდი) ანიმაცია, როცა სქროლით ჩაუვლი
      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
        const isEven = index % 2 === 0;
        const dot = item.querySelector(".timeline-dot");
        const card = item.querySelector(".timeline-card-wrapper");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 75%", // ჩაირთვება, როგორც კი კონკრეტული პუნქტი ეკრანის 75%-ზე ამოვა
            toggleActions: "play none none none"
          }
        });

        // ჯერ წერტილი ფეთქდება
        tl.fromTo(dot, 
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" }
        );

        // მერე ქარდი შემოდის გვერდიდან
        tl.fromTo(card, 
          { opacity: 0, x: isEven ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      phase: "PHASE 01",
      title: "The Infiltration",
      time: "Month 1 - 2",
      desc: "Deliberate incarceration at Fox River. Establish connections with key inmates, secure the cell block layout, and test guard rotation frequencies."
    },
    {
      phase: "PHASE 02",
      title: "Underground Route",
      time: "Month 3",
      desc: "Breach the cell walls behind the sink. Infiltrate the break room floor, dig through the primary utility lines, and create a stealth pathway to the infirmary."
    },
    {
      phase: "PHASE 03",
      title: "Final Exfiltration",
      time: "Count-down: 24 Hours",
      desc: "Initiate system blackout. Cross the psych ward grid, reach the final medical room window, and scale the outer walls before the morning headcount."
    }
  ];

  return (
    <section ref={sectionRef} id="timeline" className="py-24 px-6 md:px-[8%] bg-[#08090c] border-t border-slate-900/60 overflow-hidden">
      <div className="text-center mb-20">
        <div className="text-[10px] font-mono font-black tracking-[4px] text-[#00f0ff] uppercase mb-3">
          STRATEGY: CHRONOLOGICAL SEQUENCE
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
          Escape Timeline
        </h2>
        <div className="w-16 h-1 bg-[#00f0ff] mx-auto mt-4 shadow-[0_0_12px_#00f0ff]"></div>
      </div>

      {/* დავამატე ID კოდისთვის, რომ სქროლერმა ზუსტად გაზომოს სიმაღლე */}
      <div id="timeline-container" className="max-w-4xl mx-auto relative">
        
        {/* ვერტიკალური ხაზი შუაში — ფონი (მუქი) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 -translate-x-1/2 rounded"></div>
        
        {/* აქტიური ნეონის ხაზი, რომელიც სქროლვასთან ერთად იზრდება */}
        <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#00f0ff] -translate-x-1/2 shadow-[0_0_8px_#00f0ff] rounded opacity-100"></div>

        <div className="space-y-12 md:space-y-16">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              /* დავამატე კლასი timeline-item, რომ GSAP-მა სათითაოდ მართოს თითოეული ბლოკი */
              <div key={index} className="timeline-item relative flex flex-col md:flex-row items-start id-block">
                <div className={`w-full flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* ნეონის წერტილი ხაზზე */}
                  <div className="timeline-dot absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#00f0ff] -translate-x-1/2 top-1.5 z-10 shadow-[0_0_10px_#00f0ff] opacity-0"></div>

                  {/* კონტენტის ბლოკი */}
                  <div className="timeline-card-wrapper w-full md:w-[45%] pl-10 md:pl-0 opacity-0">
                    <div className={`bg-[#111317] border border-slate-800/60 p-6 rounded-xl relative transition-all duration-300 hover:border-[#00f0ff]/40 ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className={`flex items-center gap-3 text-[10px] font-mono font-black text-[#00f0ff]/80 uppercase mb-2 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <span>{event.phase}</span>
                        <span className="text-slate-600">//</span>
                        <span className="text-slate-500">{event.time}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white tracking-wide mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {event.desc}
                      </p>
                    </div>
                  </div>

                  {/* ცარიელი სივრცე მეორე მხარეს დესკტოპისთვის */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;