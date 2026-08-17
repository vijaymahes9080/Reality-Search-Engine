import React from 'react';
import { Sprout, AlertTriangle, ShieldCheck, DollarSign } from 'lucide-react';

export default function CropDamageAnalyzer() {
  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-amber font-bold">
        <div className="flex items-center gap-2">
          <Sprout className="w-4 h-4" /> AGRICULTURAL CROP & PADDY SUBMERGENCE LOSS ESTIMATOR
        </div>
        <span className="text-[10px] text-gray-400">Cauvery Delta Agronomy Layer</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Inundated Paddy Hectares</div>
          <div className="text-xl font-bold text-reality-rose mt-1">85,400 Hectares</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Kuruvai Crop Submerged</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Estimated Yield Loss</div>
          <div className="text-xl font-bold text-reality-amber mt-1">38% Reduction</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Tiruvarur & Nagapattinam</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Farmer Relief Compensation</div>
          <div className="text-xl font-bold text-reality-cyan mt-1">₹142 Crores</div>
          <div className="text-[10px] text-reality-emerald mt-0.5">State Relief Package</div>
        </div>
      </div>
    </div>
  );
}
