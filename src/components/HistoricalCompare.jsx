import React from 'react';
import { History, TrendingUp, ShieldAlert, Award } from 'lucide-react';

export default function HistoricalCompare() {
  const benchmarks = [
    { year: '2015 Flood (Chennai)', rainfall: '494 mm/24h', affectedBeds: 1840, severity: 'Catastrophic' },
    { year: '2021 Cyclone Nivar', rainfall: '310 mm/24h', affectedBeds: 620, severity: 'Severe' },
    { year: '2026 Current Flood Event', rainfall: '142 mm/24h', affectedBeds: 340, severity: 'Moderate High' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-purple font-bold">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4" /> HISTORICAL FLOOD DISASTER BENCHMARK COMPARATOR
        </div>
        <span className="text-[10px] text-gray-400">10-Year Historical Registry</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-dark-900 text-gray-400 border-b border-gray-800 text-[10px]">
            <tr>
              <th className="py-2 px-3">Disaster Event</th>
              <th className="py-2 px-3">Peak Rainfall</th>
              <th className="py-2 px-3">Inundated Hospital Beds</th>
              <th className="py-2 px-3">Severity Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-200">
            {benchmarks.map((b, i) => (
              <tr key={i} className="hover:bg-dark-900/50">
                <td className="py-2 px-3 font-bold text-white">{b.year}</td>
                <td className="py-2 px-3 text-reality-cyan">{b.rainfall}</td>
                <td className="py-2 px-3 text-reality-amber">{b.affectedBeds} Beds</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] ${b.severity === 'Catastrophic' ? 'bg-reality-rose/20 text-reality-rose' : 'bg-reality-amber/20 text-reality-amber'}`}>
                    {b.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
