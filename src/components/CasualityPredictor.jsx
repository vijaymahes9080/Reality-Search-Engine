import React from 'react';
import { Users, AlertTriangle, HeartPulse, ShieldAlert } from 'lucide-react';

export default function CasualityPredictor() {
  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-rose font-bold">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4" /> VULNERABILITY & DEMOGRAPHIC EXPOSURE ESTIMATOR
        </div>
        <span className="text-[10px] text-gray-400">Demographic GIS Layer</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Critical ICU Patients</div>
          <div className="text-xl font-bold text-reality-rose mt-1">117 Patients</div>
          <div className="text-[10px] text-reality-amber mt-0.5">Generator Priority #1</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Pediatric & Elderly Exposure</div>
          <div className="text-xl font-bold text-reality-amber mt-1">14,200 Citizens</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Shelter Transport Alert</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Low-Lying Slum Settlement</div>
          <div className="text-xl font-bold text-reality-cyan mt-1">32,500 Exposure</div>
          <div className="text-[10px] text-reality-rose mt-0.5">Stage 2 Evac Active</div>
        </div>
      </div>
    </div>
  );
}
