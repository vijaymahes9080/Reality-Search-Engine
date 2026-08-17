import React from 'react';
import { Camera, Navigation, Compass, Radio } from 'lucide-react';

export default function DronePatrolPlanner() {
  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-reality-purple font-bold">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4" /> AUTONOMOUS DRONE AERIAL PATROL FLIGHT PATH GENERATOR
        </div>
        <span className="text-[10px] text-gray-400">3D Grid Reconnaissance</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Patrol Altitude</div>
          <div className="text-xl font-bold text-reality-cyan mt-1">120 meters</div>
          <div className="text-[10px] text-gray-500 mt-0.5">LiDAR Grid Survey</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Flight Path Coverage</div>
          <div className="text-xl font-bold text-reality-emerald mt-1">14.8 sq km</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Dindigul River Sector</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Battery Flight Window</div>
          <div className="text-xl font-bold text-reality-amber mt-1">38 mins left</div>
          <div className="text-[10px] text-reality-emerald mt-0.5">Auto Base Return</div>
        </div>
      </div>
    </div>
  );
}
