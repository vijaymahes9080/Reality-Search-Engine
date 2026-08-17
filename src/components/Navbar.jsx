import React from 'react';
import { 
  Globe, 
  Activity, 
  Satellite, 
  ShieldCheck, 
  FileText, 
  Sparkles,
  Radio
} from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';

export default function Navbar({ 
  currentScenario, 
  onSelectScenario, 
  onOpenReport 
}) {
  return (
    <header className="border-b border-gray-800 bg-dark-900/90 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-6 py-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-reality-cyan via-blue-600 to-reality-purple flex items-center justify-center shadow-lg shadow-reality-cyan/20">
              <Globe className="w-6 h-6 text-black animate-spin-slow" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-reality-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-reality-cyan"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-reality-cyan bg-clip-text text-transparent">
                REALITY SEARCH ENGINE
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-reality-cyan/10 text-reality-cyan border border-reality-cyan/30 rounded-full">
                v2.4 PRO
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              AI Real-World Situation & Geospatial Intelligence
            </p>
          </div>
        </div>

        {/* Telemetry Status Bar & Report Action */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Active Feeds Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-gray-800 text-xs font-mono text-gray-300">
            <Radio className="w-3.5 h-3.5 text-reality-emerald animate-pulse" />
            <span>Feeds: <strong className="text-white">4 Active (Sentinel-2, IMD, TNSDMA, IoT)</strong></span>
          </div>

          {/* System Telemetry */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-gray-800 text-xs font-mono text-gray-300">
            <Activity className="w-3.5 h-3.5 text-reality-cyan animate-pulse" />
            <span className="hidden sm:inline">Engine Status:</span>
            <span className="text-reality-emerald font-semibold">99.8% Operational</span>
          </div>

          {/* Generate Reality Report Button */}
          <button
            onClick={onOpenReport}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-reality-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs tracking-wide transition shadow-lg shadow-reality-cyan/20 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Generate Reality Report</span>
          </button>
        </div>
      </div>

      {/* Preset Scenario Selector Chips */}
      <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-800">
        <span className="text-xs font-mono text-gray-400 whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-reality-cyan" /> Scenarios:
        </span>
        {SCENARIOS.map((scen) => {
          const isActive = currentScenario.id === scen.id;
          return (
            <button
              key={scen.id}
              onClick={() => onSelectScenario(scen)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                isActive
                  ? 'bg-reality-cyan/20 text-reality-cyan border-reality-cyan shadow-sm shadow-reality-cyan/30 font-semibold'
                  : 'bg-dark-800 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-200'
              }`}
            >
              <span>{scen.category}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
