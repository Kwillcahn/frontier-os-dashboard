
import React from 'react';
import { NavigationItem } from '../types';

interface SidebarProps {
  activeItem: NavigationItem;
  setActiveItem: (item: NavigationItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  const items: { label: NavigationItem; icon: React.ReactNode }[] = [
    { 
      label: 'Overview', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> 
    },
    { 
      label: 'Notifications', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> 
    },
    { 
      label: 'Systems', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> 
    },
    { 
      label: 'Analytics', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> 
    },
    { 
      label: 'Activity Logs', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg> 
    },
    { 
      label: 'Settings', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> 
    },
  ];

  return (
    <nav className="w-64 border-r border-slate-200 dark:border-slate-800/50 hidden lg:flex flex-col bg-white dark:bg-slate-950 h-[calc(100vh-64px)] overflow-y-auto transition-colors">
      <div className="flex-1 py-6 space-y-1">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`
              w-full flex items-center gap-3 px-6 py-4 transition-all relative group select-none 
              active:scale-95 active:bg-slate-50 dark:active:bg-slate-900/50
              ${activeItem === item.label 
                ? 'text-teal-600 dark:text-teal-400' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}
            `}
          >
            {activeItem === item.label && (
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-teal-500 rounded-r shadow-[0_0_10px_#2dd4bf]" />
            )}
            <span className={`transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 ${activeItem === item.label ? 'drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]' : ''}`}>
              {item.icon}
            </span>
            <span className="text-sm font-bold tracking-wide uppercase">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-slate-200 dark:border-slate-800/50">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-inner group transition-all hover:bg-white dark:hover:bg-slate-900">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2 group-hover:text-teal-500">Storage Usage</p>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
            <div className="h-full w-[65%] bg-teal-500 shadow-[0_0_10px_#2dd4bf]" />
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 font-mono">
            <span>6.5TB</span>
            <span>10TB</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
