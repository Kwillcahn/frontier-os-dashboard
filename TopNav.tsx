
import React from 'react';

interface TopNavProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center glow-teal">
          <div className="w-4 h-4 border-2 border-white dark:border-slate-950 rounded-sm rotate-45" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tighter text-slate-900 dark:text-slate-100 uppercase leading-tight">Frontier OS</span>
          <span className="text-[10px] text-teal-600 dark:text-teal-500 font-mono tracking-widest uppercase leading-none opacity-80">v2.5.0-ALPHA</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 uppercase font-medium">System Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide">Secure / Operational</span>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 uppercase font-medium">Uptime</span>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-300">32d 14h 22m</span>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-white hover:border-teal-200 dark:hover:border-slate-700 transition-all"
            title="Toggle Theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-white hover:border-teal-200 dark:hover:border-slate-700 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden ml-2 shadow-sm">
             <img src="https://picsum.photos/32/32" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
