import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 flex sm:flex-row justify-between items-center px-6 md:px-[8%] py-4 bg-[#0a0b0d]/90 border-b border-slate-800/60 backdrop-blur-md gap-4">
      <div className="text-xl md:text-2xl font-black tracking-widest text-white select-none">
        FOX <span className="text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">RIVER</span>
      </div>
      <nav>
        <ul className="flex gap-6 md:gap-8 list-none m-0 p-0">
          <li>
            <Link to="/" className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 no-underline transition-all duration-300 hover:text-[#00f0ff]">
              Home
            </Link>
          </li>
          <li>
            <a href="/about" className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 no-underline transition-all duration-300 hover:text-[#00f0ff]">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;