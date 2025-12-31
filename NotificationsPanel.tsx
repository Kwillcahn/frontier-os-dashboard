
import React, { useState, useMemo } from 'react';
import { MOCK_NOTIFICATIONS } from '../constants';
import { SystemNotification } from '../types';

type PriorityFilter = 'all' | SystemNotification['priority'];

const NotificationsPanel: React.FC = () => {
  const [filter, setFilter] = useState<PriorityFilter>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredNotifications = useMemo(() => {
    if (filter === 'all') return MOCK_NOTIFICATIONS;
    return MOCK_NOTIFICATIONS.filter(n => n.priority === filter);
  }, [filter]);

  const filterOptions: { label: string; value: PriorityFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Critical', value: 'critical' },
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-3xl p-6 flex flex-col h-full overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-teal-500/20">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">Priority Alerts</h3>
          <button className="text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase hover:underline active:opacity-50 h-8 px-2 flex items-center transition-opacity">Clear All</button>
        </div>
        
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 no-scrollbar touch-pan-x">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={(e) => {
                e.stopPropagation();
                setFilter(opt.value);
              }}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tight transition-all border shadow-sm active:scale-90 flex-shrink-0 ${
                filter === opt.value
                  ? 'bg-teal-500/10 border-teal-500/50 text-teal-600 dark:text-teal-400 shadow-teal-500/20'
                  : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1 touch-pan-y">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => (
            <div 
              key={notif.id} 
              onClick={() => toggleExpand(notif.id)}
              className={`
                p-4 rounded-2xl transition-all duration-500 cursor-pointer border border-transparent 
                ${expandedId === notif.id 
                  ? 'bg-slate-50 dark:bg-slate-800/60 border-teal-500/30 dark:border-teal-500/20 shadow-[0_10px_25px_-10px_rgba(20,184,166,0.15)] scale-[1.02]' 
                  : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/30'}
                active:scale-[0.98] group select-none relative overflow-hidden
              `}
            >
              {/* Bubble Expansion Visual Background Effect */}
              <div className={`
                absolute inset-0 bg-teal-500/5 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                ${expandedId === notif.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `} />

              <div className="flex gap-4 relative z-10">
                <div className="flex flex-col items-center">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-950 z-10 transition-transform duration-500 group-hover:scale-125 ${
                    notif.priority === 'critical' ? 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]' :
                    notif.priority === 'high' ? 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]' :
                    notif.priority === 'medium' ? 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]' :
                    'bg-slate-400 shadow-[0_0_12px_rgba(148,163,184,0.6)]'
                  }`} />
                  <div className={`w-px h-full mt-1 transition-colors duration-500 ${expandedId === notif.id ? 'bg-teal-500/20' : 'bg-slate-100 dark:bg-slate-800'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{new Date(notif.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      {!notif.read && (
                        <span className="text-[8px] font-extrabold text-white bg-teal-500 px-1.5 py-0.5 rounded-full shadow-[0_0_8px_#14b8a6]">NEW</span>
                      )}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-tighter ${
                      notif.priority === 'critical' ? 'text-rose-500' :
                      notif.priority === 'high' ? 'text-amber-500' :
                      notif.priority === 'medium' ? 'text-blue-500' :
                      'text-slate-500'
                    }`}>{notif.priority}</span>
                  </div>
                  
                  <h4 className={`text-xs font-bold transition-colors duration-300 ${expandedId === notif.id ? 'text-teal-600 dark:text-teal-400' : 'text-slate-800 dark:text-slate-200 group-hover:text-teal-500'}`}>
                    {notif.title}
                  </h4>
                  
                  <p className={`text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed transition-all duration-300 ${expandedId === notif.id ? 'opacity-100' : 'line-clamp-1 opacity-80'}`}>
                    {notif.message}
                  </p>

                  <div className={`
                    grid transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${expandedId === notif.id ? 'grid-rows-[1fr] mt-4 opacity-100 scale-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 scale-95 -translate-y-2'}
                  `}>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-3">
                        <button className="flex-1 py-2 bg-teal-500 hover:bg-teal-600 text-white text-[10px] font-bold uppercase rounded-xl shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
                          Resolve Issue
                        </button>
                        <button className="flex-1 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-[10px] font-bold uppercase rounded-xl shadow-sm active:scale-95 transition-all">
                          Diagnostic View
                        </button>
                      </div>
                      <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-xl text-[10px] text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 leading-normal italic">
                        Node affinity check: PASS. Impact analysis: MEDIUM. Recommend immediate audit of secondary cluster connections.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-48 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-[10px] font-bold uppercase tracking-widest text-center px-6">System state clear. No notifications matching the current priority filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel;
