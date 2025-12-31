
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GRAPH_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-3 rounded-lg backdrop-blur-sm shadow-xl animate-in zoom-in-95 duration-200">
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mb-2">{label}</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-3 justify-between">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 uppercase">{entry.name}:</span>
              <span className="text-xs font-mono font-bold" style={{ color: entry.color }}>{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const SystemsGraph: React.FC = () => {
  const isDark = document.documentElement.classList.contains('dark');
  const gridColor = isDark ? '#1e293b' : '#e2e8f0';
  const tickColor = isDark ? '#475569' : '#94a3b8';

  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 h-[400px] flex flex-col shadow-sm transition-all hover:shadow-xl hover:border-teal-500/20 group select-none">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest group-hover:text-teal-500 transition-colors">System Utilization</h3>
          <p className="text-[10px] text-slate-500 uppercase tracking-tight">Real-time throughput metrics across global cluster</p>
        </div>
        <div className="flex gap-2">
          {['1h', '6h', '24h', '7d'].map((range) => (
            <button key={range} className={`px-4 py-2 text-[10px] font-bold rounded-full border transition-all active:scale-90 ${range === '24h' ? 'bg-teal-500/10 border-teal-500/50 text-teal-600 dark:text-teal-400 shadow-sm' : 'border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 shadow-none'}`}>
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full pointer-events-none md:pointer-events-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={GRAPH_DATA}>
            <defs>
              <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
            <XAxis 
              dataKey="time" 
              stroke={tickColor} 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: tickColor }}
            />
            <YAxis 
              stroke={tickColor} 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: tickColor }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="cpu" 
              name="CPU" 
              stroke="#0d9488" 
              fillOpacity={1} 
              fill="url(#colorCpu)" 
              strokeWidth={3}
              activeDot={{ r: 6, strokeWidth: 0, fill: '#14b8a6' }}
            />
            <Area 
              type="monotone" 
              dataKey="network" 
              name="Net" 
              stroke="#0891b2" 
              fillOpacity={1} 
              fill="url(#colorNet)" 
              strokeWidth={3}
              activeDot={{ r: 6, strokeWidth: 0, fill: '#06b6d4' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SystemsGraph;
