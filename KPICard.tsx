
import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { KPIMetric } from '../types';

const KPICard: React.FC<KPIMetric> = ({ label, value, unit, trend, trendValue, sparkline, status }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'warning': return 'text-amber-500 dark:text-amber-400';
      case 'critical': return 'text-rose-600 dark:text-rose-500';
      default: return 'text-teal-600 dark:text-teal-400';
    }
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-teal-600 dark:text-teal-400';
    if (trend === 'down') return 'text-rose-600 dark:text-rose-400';
    return 'text-slate-400 dark:text-slate-400';
  };

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-5 
        hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-500 cursor-pointer 
        group overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] 
        touch-none select-none
        ${isExpanded ? 'ring-2 ring-teal-500/30 shadow-teal-500/10' : ''}
      `}
    >
      <div className="absolute top-0 right-0 p-3 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">{label}</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-mono font-bold tracking-tight ${getStatusColor()}`}>{value}</span>
            <span className="text-xs font-semibold text-slate-400">{unit}</span>
          </div>
        </div>
        <div className={`text-[10px] font-mono font-bold flex items-center gap-1 ${getTrendColor()}`}>
          {trend === 'up' && '▲'}
          {trend === 'down' && '▼'}
          {trendValue}
        </div>
      </div>

      <div className="h-10 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sparkline}>
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke={status === 'warning' ? '#f59e0b' : '#14b8a6'} 
              strokeWidth={2} 
              dot={false} 
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bubble Dropdown Expansion */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isExpanded ? 'max-height-[200px] mt-4 opacity-100 scale-100' : 'max-height-0 opacity-0 scale-90 translate-y-2'}
      `}>
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span>Peak Value</span>
            <span className="text-slate-700 dark:text-slate-200">94.2 {unit}</span>
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span>Uptime Rank</span>
            <span className="text-teal-500">#04 Global</span>
          </div>
          <div className="mt-2 p-2 bg-slate-50 dark:bg-slate-950/50 rounded-lg text-[10px] leading-tight text-slate-500 italic">
            "Performance within expected tolerance for current node deployment."
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
