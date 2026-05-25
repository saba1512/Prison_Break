import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060709] border-t border-slate-900 px-6 md:px-[8%] py-12 relative overflow-hidden">
      {/* ზედა თხელი ნეონის ზოლი მთელ სიგრძეზე */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 font-mono text-xs text-slate-500">
        
        {/* მარცხენა ბლოკი: დეველოპერის ინფო */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
            <span className="text-white font-black text-sm tracking-wider">FOX RIVER PROJECT</span>
          </div>
          <p className="text-slate-400 leading-relaxed font-sans text-sm font-normal">
            Passionate Front-end Developer crafting immersive digital experiences with modern web technologies.
          </p>
          <div className="text-[11px] text-slate-500 pt-1">
            📍 khashuri, Georgia
          </div>
        </div>

        {/* შუა ბლოკი: ნავიგაცია */}
        <div className="md:justify-self-center space-y-3">
          <div className="text-white font-bold tracking-widest text-[11px] uppercase">// Navigation</div>
          <ul className="space-y-2 text-slate-400 font-sans text-sm">
            <li>
              <a href="#facilities" className="hover:text-[#00f0ff] transition-colors duration-200">Infiltration Map</a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-[#00f0ff] transition-colors duration-200">Escape Timeline</a>
            </li>
            <li>
              <a href="#terminal-game" className="hover:text-[#00f0ff] transition-colors duration-200">Terminal Mainframe</a>
            </li>
          </ul>
        </div>

        {/* მარჯვენა ბლოკი: სისტემური მონაცემები */}
        <div className="md:justify-self-end space-y-2 w-full md:w-auto">
          <div className="text-white font-bold tracking-widest text-[11px] uppercase mb-3">// System Status</div>
          <div className="bg-black/30 border border-slate-900/60 p-3 rounded-lg space-y-1.5 text-[11px]">
            <div className="flex justify-between gap-6">
              <span className="text-slate-600">CORE_NET:</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-slate-600">ENCRYPTION:</span>
              <span className="text-[#00f0ff]">AES_256</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-slate-600">PORT:</span>
              <span className="text-slate-400">localhost:5173</span>
            </div>
          </div>
        </div>

      </div>

      {/* ქვედა ზოლი: Copyright */}
      <div className="max-w-6xl mx-auto border-t border-slate-900/60 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-wider">
        <p>© {currentYear} FOX RIVER BYPASS. ALL RIGHTS RESERVED.</p>
        <p className="text-slate-600">DESIGN_BY_SABA // V1.0.0</p>
      </div>
    </footer>
  );
}

export default Footer;