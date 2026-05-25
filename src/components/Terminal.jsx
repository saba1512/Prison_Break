import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Terminal() {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState([
    "CONNECTING TO FOX_RIVER_MAINFRAME...",
    "ACCESS DENIED. ENCRYPTED PROTOCOL DETECTED.",
    "ENTER DECRYPTION KEY TO ACCESS BLUEPRINTS (Try: scofield, allen, 94941)"
  ]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const terminalRef = useRef(null);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (!cmd) return;

    let newLogs = [...logs, `> ${input}`];

    if (cmd === 'scofield' || cmd === 'allen' || cmd === '94941') {
      setIsUnlocked(true);
      newLogs.push(
        "STATUS: DECRYPTION SUCCESSFUL!",
        "====================================",
        "FACILITY: Fox River State Penitentiary",
        "ESCAPE ROUTE: Cell 40 -> Break Room -> Infirmary -> Outer Wall",
        "CURRENT WINDOW: 24-Hour Blackout Active",
        "===================================="
      );
      
      // წარმატებული ნათების ანიმაცია
      gsap.fromTo(terminalRef.current, 
        { borderColor: '#00f0ff', boxShadow: '0 0 10px rgba(0,240,255,0.2)' },
        { borderColor: '#10b981', boxShadow: '0 0 30px rgba(16,185,129,0.4)', duration: 0.5 }
      );
    } else {
      newLogs.push("ERROR: INVALID DECRYPTION KEY. ACCESS DENIED.");
      
      // შეცდომის დროს ტერმინალის გაწითლება და გაჯანჯღარება (Shake ე表ექტი)
      const tl = gsap.timeline();
      tl.to(terminalRef.current, { borderColor: '#ef4444', boxShadow: '0 0 20px rgba(239,68,68,0.4)', x: -10, duration: 0.05 })
        .to(terminalRef.current, { x: 10, duration: 0.05 })
        .to(terminalRef.current, { x: -10, duration: 0.05 })
        .to(terminalRef.current, { x: 0, duration: 0.05 })
        .to(terminalRef.current, { borderColor: 'rgba(51,65,85,0.6)', boxShadow: 'none', duration: 0.4 });
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <section id="terminal-game" className="py-24 px-6 md:px-[8%] bg-[#08090c] border-t border-slate-900/60">
      <div className="text-center mb-12">
        <div className="text-[10px] font-mono font-black tracking-[4px] text-[#00f0ff] uppercase mb-3">
          INTERACTIVE: ACCESS INTERFACE
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
          Mainframe Terminal
        </h2>
        <div className="w-16 h-1 bg-[#00f0ff] mx-auto mt-4 shadow-[0_0_12px_#00f0ff]"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* ტერმინალის ფანჯარა */}
        <div 
          ref={terminalRef}
          className="bg-[#0c0e12] border border-slate-800/60 rounded-xl overflow-hidden font-mono shadow-2xl"
        >
          {/* ტერმინალის ჰედერი */}
          <div className="bg-[#11141a] px-4 py-3 border-b border-slate-900 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">root@fox_river_bypass:~</span>
            <div className="w-10"></div>
          </div>

          {/* ტერმინალის კონტენტი */}
          <div className="p-6 h-80 overflow-y-auto space-y-2 text-xs sm:text-sm custom-scrollbar">
            {logs.map((log, i) => (
              <p 
                key={i} 
                className={`${
                  log.startsWith('>') ? 'text-slate-400' :
                  log.includes('SUCCESSFUL') || log.startsWith('FACILITY') || log.startsWith('ESCAPE') || log.startsWith('CURRENT') ? 'text-emerald-400 font-bold' :
                  log.includes('DENIED') || log.includes('ERROR') ? 'text-rose-400' : 'text-[#00f0ff]/90'
                }`}
              >
                {log}
              </p>
            ))}
            
            {/* თუ გატეხილია, გამოვაჩენთ სქემატურ ნახაზს */}
            {isUnlocked && (
              <pre className="text-[10px] sm:text-xs text-emerald-500/70 leading-tight mt-4 select-none animate-pulse">
{`   [CELL 40] ---------> [UTILITY CORRIDOR]
       |                       |
       v                       v
 [SECRET HOLE]           [INFIRMARY PIPE]
                               |
                               v
                         [OUTER WALL] ---> OUT!`}
              </pre>
            )}
          </div>

          {/* ინპუტის ფორმა */}
          <form onSubmit={handleCommand} className="flex border-t border-slate-900 bg-[#0e1116]">
            <span className="pl-6 py-4 text-[#00f0ff] font-bold select-none">&gt;</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isUnlocked}
              placeholder={isUnlocked ? "ACCESS GRANTED. TERMINAL LOCKED." : "Type decryption key here..."}
              className="w-full bg-transparent text-white px-3 py-4 focus:outline-none placeholder-slate-600 font-mono text-sm disabled:text-emerald-500 disabled:cursor-not-allowed"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Terminal;