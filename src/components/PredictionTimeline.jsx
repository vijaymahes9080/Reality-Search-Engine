import React from 'react';
import { TrendingUp, Clock, AlertOctagon, Users, ShieldAlert, Cpu } from 'lucide-react';

export default function PredictionTimeline({ 
  scenario, 
  activeTimeWindow, 
  onChangeTimeWindow 
}) {
  const timeWindows = ['T-6h', 'Current', '+2h', '+6h', '+12h', '+24h'];

  const timelinePoint = scenario.timelineData.find(t => t.time === activeTimeWindow) || scenario.timelineData[1] || scenario.timelineData[0];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-reality-amber animate-pulse" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              AI Predictive Engine & Time-Series Simulation
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Hydro-dynamic risk progression model across time windows
            </p>
          </div>
        </div>

        {/* Time Window Buttons */}
        <div className="flex items-center gap-1 bg-dark-900 border border-gray-800 p-1 rounded-xl">
          {timeWindows.map((tw) => {
            const isActive = activeTimeWindow === tw;
            return (
              <button
                key={tw}
                onClick={() => onChangeTimeWindow(tw)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  isActive
                    ? 'bg-reality-amber text-black shadow-md shadow-reality-amber/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
                }`}
              >
                {tw}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        {/* Metric 1 */}
        <div className="bg-dark-900/80 border border-gray-800 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-1">
            <span>HIGH RISK ENTITIES</span>
            <AlertOctagon className="w-4 h-4 text-reality-rose" />
          </div>
          <div className="text-2xl font-extrabold text-reality-rose font-mono">
            {timelinePoint ? timelinePoint.highRisk : scenario.summaryStats.highRisk}
          </div>
          <div className="text-[11px] text-gray-500 font-mono mt-1">
            Critical inundation / failure
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-dark-900/80 border border-gray-800 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-1">
            <span>AFFECTED COUNT</span>
            <Clock className="w-4 h-4 text-reality-amber" />
          </div>
          <div className="text-2xl font-extrabold text-reality-amber font-mono">
            {timelinePoint ? timelinePoint.affected : scenario.summaryStats.affected}
          </div>
          <div className="text-[11px] text-gray-500 font-mono mt-1">
            Operational disruption
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-dark-900/80 border border-gray-800 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-1">
            <span>SAFE / STABLE</span>
            <ShieldAlert className="w-4 h-4 text-reality-emerald" />
          </div>
          <div className="text-2xl font-extrabold text-reality-emerald font-mono">
            {timelinePoint ? timelinePoint.safe : scenario.summaryStats.safe}
          </div>
          <div className="text-[11px] text-gray-500 font-mono mt-1">
            Normal operational state
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-dark-900/80 border border-gray-800 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-1">
            <span>EXPOSED SECTOR</span>
            <Users className="w-4 h-4 text-reality-cyan" />
          </div>
          <div className="text-2xl font-extrabold text-reality-cyan font-mono">
            {scenario.summaryStats.populationExposed}
          </div>
          <div className="text-[11px] text-gray-500 font-mono mt-1">
            {scenario.summaryStats.roadAccessibility}
          </div>
        </div>
      </div>

      {/* AI Predictive Synthesis Box */}
      <div className="bg-gradient-to-r from-dark-900 via-dark-900 to-dark-800 border border-reality-amber/30 rounded-xl p-4 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-reality-amber/10 text-reality-amber border border-reality-amber/30 shrink-0">
          <Cpu className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <div className="text-xs font-bold font-mono text-reality-amber uppercase flex items-center gap-1.5">
            <span>AI Predictive Reasoning Analysis ({activeTimeWindow})</span>
          </div>
          <p className="text-sm text-gray-200 mt-1 leading-relaxed">
            {scenario.predictionSummary}
          </p>
        </div>
      </div>
    </div>
  );
}
