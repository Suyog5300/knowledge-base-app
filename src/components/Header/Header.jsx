/* File: src/components/Header/Header.jsx */

import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-14 bg-sidebar-bg flex items-center px-4 border-b border-indigo-900/30">
      {/* Logo area */}
      <div className="flex items-center gap-2 min-w-[170px]">
        {/* Swoosh/Wave Logo */}
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="#E8465A" opacity="0.9"/>
          <path d="M10 20C12 14 15 12 17 12C19 12 20 14 20 16C20 18 21 19 22 18C23 17 23 15 22 13" 
                stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        </svg>
        <span className="text-white font-semibold text-base">Worcespace</span>
        <span className="text-xs text-white bg-green-600 px-2 py-0.5 rounded-full ml-1 whitespace-nowrap flex items-center gap-1">
          Worcespace 1
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      {/* Search bar - centered */}
      <div className="flex-1 flex justify-center px-8">
        <div className="relative w-full max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-indigo-900/40 text-indigo-100 placeholder-indigo-400 text-sm rounded-lg pl-9 pr-12 py-2 border border-indigo-700/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-indigo-400 bg-indigo-800/60 px-1.5 py-0.5 rounded border border-indigo-700/40">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button className="text-indigo-300 hover:text-white transition-colors relative">
          <Bell size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-semibold">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;