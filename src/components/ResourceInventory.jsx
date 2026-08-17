import React from 'react';
import { Truck, Navigation, Anchor, Zap } from 'lucide-react';

export default function ResourceInventory() {
  const resources = [
    { name: 'NDRF Motorboats (Inflatable)', total: 42, deployed: 38, available: 4, icon: 'Anchor' },
    { name: 'Amphibious Rescue Convoys', total: 12, deployed: 9, available: 3, icon: 'Truck' },
    { name: 'Heavy Dewatering Pumps (50HP)', total: 65, deployed: 52, available: 13, icon: 'Zap' },
    { name: 'Mobile Diesel Generators (250kVA)', total: 30, deployed: 26, available: 4, icon: 'Zap' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-amber font-bold">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4" /> EMERGENCY RESCUE EQUIPMENT INVENTORY TRACKER
        </div>
        <span className="text-[10px] text-gray-400">Live Logistics Stream</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {resources.map((r, i) => (
          <div key={i} className="bg-dark-900 p-3 rounded-xl border border-gray-800">
            <div className="text-gray-400 text-[10px] truncate">{r.name}</div>
            <div className="text-xl font-bold text-reality-cyan mt-1">{r.deployed} / {r.total} <span className="text-xs text-gray-500 font-normal">Active</span></div>
            <div className="text-[10px] text-reality-emerald mt-0.5">{r.available} Reserve Ready</div>
          </div>
        ))}
      </div>
    </div>
  );
}
