import React from 'react';
import { Zap, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function PowerGridMonitor() {
  const substations = [
    { name: 'Dindigul 230kV Auto Substation', load: '84%', waterDistance: '0.4m', status: 'ALERT GENERATOR READY' },
    { name: 'Madurai North 110kV Feeder', load: '62%', waterDistance: '1.8m', status: 'GRID ACTIVE' },
    { name: 'Trichy Central Substation', load: '45%', waterDistance: '4.2m', status: 'SAFE NORMAL' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-amber font-bold">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" /> ELECTRICAL SUBSTATION & POWER GRID FAILURE PREDICTOR
        </div>
        <span className="text-[10px] text-gray-400">TANGEDCO Grid Stream</span>
      </div>

      <div className="space-y-2">
        {substations.map((s, i) => (
          <div key={i} className="p-3 rounded-xl bg-dark-900 border border-gray-800 flex items-center justify-between">
            <div>
              <div className="text-white font-bold">{s.name}</div>
              <div className="text-gray-400 text-[10px] mt-0.5">Transformer Load: <span className="text-reality-cyan">{s.load}</span> | Water Margin: <span className="text-reality-amber">{s.waterDistance}</span></div>
            </div>

            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${s.status.includes('ALERT') ? 'bg-reality-rose/20 text-reality-rose' : 'bg-reality-emerald/20 text-reality-emerald'}`}>
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
