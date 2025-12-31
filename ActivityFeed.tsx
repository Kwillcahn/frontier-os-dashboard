
import React from 'react';
import { RECENT_EVENTS } from '../constants';

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 flex flex-col h-full overflow-hidden shadow-sm transition-colors hover:shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">Active Logs</h3>
        <button className="text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase hover:underline active:opacity-50">View All</button>
      </div>

      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1 touch-pan-y">
        {RECENT_EVENTS.map((event) => (
          <div 
            key={event.id} 
            className="flex gap-4 group p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-default select-none active:scale-[0.99]"
          >
            <div className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-950 z-10 ${
                event.type === 'success' ? 'bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.4)]' :
                event.type === 'warning' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' :
                event.type === 'error' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' :
                'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]'
              }`} />
              <div className="w-px h-full bg-slate-100 dark:bg-slate-800 mt-1" />
            </div>
            <div className="pb-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded transition-colors">{event.source}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{event.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
