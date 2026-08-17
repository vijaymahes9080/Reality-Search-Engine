import React, { useState } from 'react';
import { Sliders, Zap, AlertTriangle, ShieldAlert, Waves, Wind, CloudRain, RefreshCw } from 'lucide-react';

export default function ScenarioSandbox({ scenario, onApplySimulatedState }) {
  const [rainfall, setRainfall] = useState(140); // mm/h
  const [damOutflow, setDamOutflow] = useState(18000); // cusecs
  const [tidalSurge, setTidalSurge] = useState(1.8); // meters
  const [windSpeed, setWindSpeed] = useState(65); // km/h

  // Dynamic simulation calculations
  const simImpactScore = Math.min(10, ((rainfall / 20) + (damOutflow / 4000) + (tidalSurge * 1.5)).toFixed(1));
  const simHighRiskCount = Math.round(scenario.summaryStats.highRisk * (simImpactScore / 6));
  const simRoadBlockPct = Math.min(95, Math.round(36 + simImpactScore * 6));
  const simEvacLeadTime = Math.max(1, (12 - simImpactScore * 0.9).toFixed(1));

  const resetSandbox = () => {
    setRainfall(140);
    setDamOutflow(18000);
    setTidalSurge(1.8);
    setWindSpeed(65);
  };

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-reality-rose animate-pulse" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              Interactive Disaster Simulation Sandbox
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Tweak real-time climate parameters to simulate custom flood impact & road blockages
            </p>
          </div>
        </div>

        <button
          onClick={resetSandbox}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-gray-700 hover:border-gray-500 text-xs font-mono text-gray-300 hover:text-white transition"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Parameters
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders Control Panel */}
        <div className="space-y-4 font-mono text-xs">
          {/* Rainfall Intensity Slider */}
          <div className="bg-dark-900/80 p-3 rounded-xl border border-gray-800 space-y-1.5">
            <div className="flex items-center justify-between text-gray-300">
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <CloudRain className="w-4 h-4" /> Rainfall Intensity:
              </span>
              <span className="text-white font-bold text-sm">{rainfall} mm/hr</span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              value={rainfall}
              onChange={(e) => setRainfall(Number(e.target.value))}
              className="w-full accent-blue-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>10 (Moderate)</span>
              <span>150 (Severe)</span>
              <span>300 (Cloudburst)</span>
            </div>
          </div>

          {/* Dam Outflow Slider */}
          <div className="bg-dark-900/80 p-3 rounded-xl border border-gray-800 space-y-1.5">
            <div className="flex items-center justify-between text-gray-300">
              <span className="flex items-center gap-1.5 text-reality-cyan font-bold">
                <Waves className="w-4 h-4" /> Dam Outflow Discharge:
              </span>
              <span className="text-white font-bold text-sm">{damOutflow.toLocaleString()} cusecs</span>
            </div>
            <input
              type="range"
              min="2000"
              max="60000"
              step="1000"
              value={damOutflow}
              onChange={(e) => setDamOutflow(Number(e.target.value))}
              className="w-full accent-reality-cyan cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>2,000</span>
              <span>30,000</span>
              <span>60,000 Peak Surge</span>
            </div>
          </div>

          {/* Tidal Surge Slider */}
          <div className="bg-dark-900/80 p-3 rounded-xl border border-gray-800 space-y-1.5">
            <div className="flex items-center justify-between text-gray-300">
              <span className="flex items-center gap-1.5 text-reality-amber font-bold">
                <ShieldAlert className="w-4 h-4" /> Coastal Tidal Surge Elevation:
              </span>
              <span className="text-white font-bold text-sm">{tidalSurge.toFixed(1)} meters</span>
            </div>
            <input
              type="range"
              min="0"
              max="4.0"
              step="0.1"
              value={tidalSurge}
              onChange={(e) => setTidalSurge(Number(e.target.value))}
              className="w-full accent-reality-amber cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>0.0m (Normal)</span>
              <span>2.0m (High Tide)</span>
              <span>4.0m (Extreme Storm)</span>
            </div>
          </div>
        </div>

        {/* Live Simulation Calculated Impact Display */}
        <div className="bg-dark-950 p-4 rounded-xl border border-gray-800 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-reality-rose uppercase flex items-center gap-1.5 mb-3 pb-2 border-b border-gray-800">
              <AlertTriangle className="w-4 h-4" /> SIMULATED IMPACT FORECAST
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 font-mono">
              <div className="bg-dark-900 p-3 rounded-lg border border-gray-800">
                <span className="text-[10px] text-gray-400 uppercase">Impact Severity Score</span>
                <div className={`text-2xl font-extrabold mt-0.5 ${simImpactScore > 7 ? 'text-reality-rose' : 'text-reality-amber'}`}>
                  {simImpactScore} / 10
                </div>
              </div>

              <div className="bg-dark-900 p-3 rounded-lg border border-gray-800">
                <span className="text-[10px] text-gray-400 uppercase">Simulated High-Risk Entities</span>
                <div className="text-2xl font-extrabold text-reality-rose mt-0.5">
                  {simHighRiskCount} Entities
                </div>
              </div>

              <div className="bg-dark-900 p-3 rounded-lg border border-gray-800">
                <span className="text-[10px] text-gray-400 uppercase">Road Network Blockage</span>
                <div className="text-xl font-bold text-reality-amber mt-0.5">
                  {simRoadBlockPct}% Inaccessible
                </div>
              </div>

              <div className="bg-dark-900 p-3 rounded-lg border border-gray-800">
                <span className="text-[10px] text-gray-400 uppercase">Evacuation Window Left</span>
                <div className="text-xl font-bold text-reality-emerald mt-0.5">
                  {simEvacLeadTime} Hours
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-sans leading-relaxed bg-dark-900/60 p-3 rounded-lg border border-gray-800">
              ⚡ <strong>Simulation Insight:</strong> At {rainfall} mm/hr rainfall and {damOutflow.toLocaleString()} cusecs discharge, river embankment breach probability rises to <strong>{Math.min(99, Math.round(simImpactScore * 10))}%</strong> within {simEvacLeadTime} hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
