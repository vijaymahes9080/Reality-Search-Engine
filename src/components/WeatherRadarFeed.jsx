import React from 'react';
import { CloudRain, Wind, Compass, Zap } from 'lucide-react';

export default function WeatherRadarFeed() {
  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3 text-blue-400 font-bold">
        <div className="flex items-center gap-2">
          <CloudRain className="w-4 h-4" /> IMD DOPPLER RADAR CLOUDBURST TRACKER
        </div>
        <span className="text-[10px] text-gray-400">Frequency: 15 min sweep</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Peak DBZ Intensity</div>
          <div className="text-xl font-bold text-reality-rose mt-1">54.2 dBZ</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Torrential Rain Cell</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Storm Movement Vector</div>
          <div className="text-xl font-bold text-reality-cyan mt-1">28 km/h ENE</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Heading to Vaigai Basin</div>
        </div>

        <div className="bg-dark-900 p-3 rounded-xl border border-gray-800">
          <div className="text-[10px] text-gray-400">Catchment Accumulation</div>
          <div className="text-xl font-bold text-reality-amber mt-1">165 mm/24h</div>
          <div className="text-[10px] text-gray-500 mt-0.5">High Inflow Alert</div>
        </div>
      </div>
    </div>
  );
}
