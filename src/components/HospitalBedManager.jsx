import React from 'react';
import { Activity, ShieldCheck, HeartPulse } from 'lucide-react';

export default function HospitalBedManager() {
  const hubs = [
    { name: 'Trichy Multi-Specialty General Hospital', icuFree: 45, ventilatorFree: 22, oxygenReserve: '98%', status: 'OPTIMAL RECEIVING HUB' },
    { name: 'Coimbatore Apollo Speciality Hospital', icuFree: 38, ventilatorFree: 18, oxygenReserve: '94%', status: 'FULL READINESS' },
    { name: 'Dindigul HQ Hospital', icuFree: 0, ventilatorFree: 2, oxygenReserve: '34% (CRITICAL)', status: 'EVACUATION IN PROGRESS' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-emerald font-bold">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4" /> TRAUMA & ICU BED AVAILABILITY TELEMETRY
        </div>
        <span className="text-[10px] text-gray-400">Live Health Registry Stream</span>
      </div>

      <div className="space-y-2">
        {hubs.map((h, i) => (
          <div key={i} className="p-3 rounded-xl bg-dark-900 border border-gray-800 flex items-center justify-between">
            <div>
              <div className="text-white font-bold">{h.name}</div>
              <div className="text-gray-400 text-[10px] mt-0.5">ICU Free: <span className="text-reality-emerald">{h.icuFree}</span> | Ventilators: <span className="text-reality-cyan">{h.ventilatorFree}</span> | O2 Reserve: <span className="text-reality-amber">{h.oxygenReserve}</span></div>
            </div>

            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${h.icuFree > 0 ? 'bg-reality-emerald/20 text-reality-emerald' : 'bg-reality-rose/20 text-reality-rose'}`}>
              {h.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
