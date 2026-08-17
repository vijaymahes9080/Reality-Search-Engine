import React from 'react';
import { Activity, ShieldAlert, Cpu, AlertTriangle } from 'lucide-react';

export default function InfrastructureBridgeMonitor() {
  const bridges = [
    { name: 'Pennaiyar River Causeway', status: 'CRITICAL CRACK', tilt: '12mm', scour: '2.4m', warning: 'Heavy Traffic Closed' },
    { name: 'Vaigai River Bypass Flyover', status: 'STABLE', tilt: '1mm', scour: '0.4m', warning: 'Normal Operations' },
    { name: 'Cauvery Delta Railway Bridge', status: 'MONITORING', tilt: '4mm', scour: '1.1m', warning: 'Speed Limit 30km/h' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-cyan font-bold">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4" /> STRUCTURAL BRIDGE & FLYOVER STRAIN SENSOR PANEL
        </div>
        <span className="text-[10px] text-gray-400">LiDAR & Strain Telemetry</span>
      </div>

      <div className="space-y-2">
        {bridges.map((b, i) => (
          <div key={i} className="p-3 rounded-xl bg-dark-900 border border-gray-800 flex items-center justify-between">
            <div>
              <div className="text-white font-bold">{b.name}</div>
              <div className="text-gray-400 text-[10px] mt-0.5">Tilt Displacement: <span className="text-reality-cyan">{b.tilt}</span> | Scour Depth: <span className="text-reality-amber">{b.scour}</span></div>
            </div>

            <div className="text-right">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${b.status.includes('CRITICAL') ? 'bg-reality-rose/20 text-reality-rose' : 'bg-reality-emerald/20 text-reality-emerald'}`}>
                {b.status}
              </span>
              <div className="text-[10px] text-gray-500 mt-0.5">{b.warning}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
