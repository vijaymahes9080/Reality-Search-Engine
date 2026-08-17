import React from 'react';
import { Layers, AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';

export default function RoadAccessibilityHeatmap() {
  const corridors = [
    { name: 'NH-45 Dindigul-Madurai Corridor', depth: '1.2 m', velocity: '2.4 m/s', status: 'IMPASSABLE' },
    { name: 'East Coast Highway Bypass', depth: '0.2 m', velocity: '0.4 m/s', status: 'CAUTION LOW SPEED' },
    { name: 'Trichy Ring Road Elevated Flyover', depth: '0.0 m', velocity: '0.0 m/s', status: 'SAFE OPERATIONAL' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-rose font-bold">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4" /> ROAD INUNDATION DEPTH & VELOCITY HEATMAP
        </div>
        <span className="text-[10px] text-gray-400">Hydrodynamic Velocity Grid</span>
      </div>

      <div className="space-y-2">
        {corridors.map((c, i) => (
          <div key={i} className="p-3 rounded-xl bg-dark-900 border border-gray-800 flex items-center justify-between">
            <div>
              <div className="text-white font-bold">{c.name}</div>
              <div className="text-gray-400 text-[10px] mt-0.5">Standing Depth: <span className="text-reality-rose">{c.depth}</span> | Water Velocity: <span className="text-reality-amber">{c.velocity}</span></div>
            </div>

            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${c.status.includes('IMPASSABLE') ? 'bg-reality-rose/20 text-reality-rose' : 'bg-reality-emerald/20 text-reality-emerald'}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
