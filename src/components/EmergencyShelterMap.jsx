import React from 'react';
import { Home, Users, ShieldAlert, CheckCircle, Package } from 'lucide-react';

export default function EmergencyShelterMap() {
  const shelters = [
    { id: 'SH-1', name: 'Dindigul Indoor Stadium Relief Hub', capacity: 1200, occupied: 840, foodRationsDays: 4, medicalPost: 'Active', status: 'OPEN' },
    { id: 'SH-2', name: 'Madurai Corporation Higher Sec Shelter', capacity: 850, occupied: 720, foodRationsDays: 2, medicalPost: 'Active', status: 'NEAR CAPACITY' },
    { id: 'SH-3', name: 'Trichy Community Disaster Relief Center', capacity: 1500, occupied: 410, foodRationsDays: 6, medicalPost: 'Standby', status: 'AVAILABLE' }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3">
        <div className="flex items-center gap-2 text-reality-emerald font-bold">
          <Home className="w-4 h-4" /> EMERGENCY EVACUATION SHELTER ALLOCATOR
        </div>
        <span className="text-[10px] text-gray-400">Total Shelters: 3 Active</span>
      </div>

      <div className="space-y-2">
        {shelters.map((s) => (
          <div key={s.id} className="p-3 rounded-xl bg-dark-900 border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <div className="text-white font-bold">{s.name}</div>
              <div className="text-gray-400 text-[10px] flex items-center gap-2 mt-0.5">
                <span>Occupancy: <strong className="text-reality-cyan">{s.occupied}/{s.capacity}</strong></span>
                <span>Rations: <strong className="text-reality-amber">{s.foodRationsDays} Days</strong></span>
                <span>Medical: <strong className="text-reality-emerald">{s.medicalPost}</strong></span>
              </div>
            </div>

            <span className={`px-2 py-1 rounded text-[10px] font-bold ${
              s.status === 'OPEN' || s.status === 'AVAILABLE' ? 'bg-reality-emerald/20 text-reality-emerald border border-reality-emerald/30' : 'bg-reality-amber/20 text-reality-amber border border-reality-amber/30'
            }`}>
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
