import React, { useState } from 'react';
import { Navigation, Route, AlertTriangle, CheckCircle, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function RouteOptimizer({ scenario }) {
  const [origin, setOrigin] = useState(scenario.entities[0]?.name || 'Dindigul HQ Hospital');
  const [destination, setDestination] = useState(scenario.entities[2]?.name || 'Trichy General Hospital');
  const [routeCalculated, setRouteCalculated] = useState(true);

  const mockWaypoints = [
    { step: 1, text: 'Depart from Dindigul HQ Hospital main emergency gate', distance: '0.0 km', status: 'Clear', safe: true },
    { step: 2, text: 'Avoid NH-45 Highway Causeway (ALERT: Inundated 1.2m water)', distance: '4.2 km', status: 'BLOCKED', safe: false },
    { step: 3, text: 'Reroute via Elevated Eastern Ring Road Bypass (Route 4B)', distance: '8.5 km', status: 'Bypassed Safe', safe: true },
    { step: 4, text: 'Merge onto Trichy Corridor Expressway (Elevation +24m)', distance: '34.0 km', status: 'Open 80 km/h', safe: true },
    { step: 5, text: 'Arrive at Trichy Multi-Specialty General Hospital Trauma Hub', distance: '68.5 km', status: 'Destination Clear', safe: true }
  ];

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <Navigation className="w-5 h-5 text-reality-cyan animate-pulse" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              Autonomous Evacuation Route & Waypoint Optimizer
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Dynamic GIS routing engine bypassing flooded road segments in real-time
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-reality-emerald bg-reality-emerald/10 border border-reality-emerald/30 px-3 py-1 rounded-full">
          <ShieldCheck className="w-4 h-4" /> AI Flood-Free Route Active
        </div>
      </div>

      {/* Origin / Destination Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 font-mono text-xs">
        <div>
          <label className="text-gray-400 text-[10px] uppercase">Origin Entity (Evacuation Source):</label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full mt-1 bg-dark-900 text-gray-200 border border-gray-700 rounded-lg p-2 focus:border-reality-cyan focus:outline-none"
          >
            {scenario.entities.map(e => (
              <option key={e.id} value={e.name}>{e.name} ({e.district})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-[10px] uppercase">Destination (Safe Receiving Hub):</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full mt-1 bg-dark-900 text-gray-200 border border-gray-700 rounded-lg p-2 focus:border-reality-cyan focus:outline-none"
          >
            {scenario.entities.map(e => (
              <option key={e.id} value={e.name}>{e.name} ({e.district})</option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={() => setRouteCalculated(true)}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-reality-cyan to-blue-600 font-bold text-black text-xs tracking-wide flex items-center justify-center gap-1.5 shadow-md shadow-reality-cyan/20 active:scale-95"
          >
            <Route className="w-4 h-4" /> Recalculate GIS Corridor
          </button>
        </div>
      </div>

      {/* Route Navigation Steps */}
      {routeCalculated && (
        <div className="bg-dark-950 p-4 rounded-xl border border-gray-800 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-gray-300">
            <span>Optimized Corridor Distance: <strong className="text-reality-cyan">68.5 km</strong></span>
            <span>Est. Travel Time: <strong className="text-reality-emerald">1 hr 14 mins</strong></span>
            <span>Hazard Bypass Count: <strong className="text-reality-rose">1 Submerged Highway</strong></span>
          </div>

          <div className="space-y-2">
            {mockWaypoints.map((wp) => (
              <div 
                key={wp.step}
                className={`p-3 rounded-lg border flex items-start justify-between gap-3 ${
                  wp.safe 
                    ? 'bg-dark-900/90 border-gray-800 text-gray-200' 
                    : 'bg-reality-rose/10 border-reality-rose/40 text-reality-rose'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                    wp.safe ? 'bg-dark-800 text-reality-cyan border border-gray-700' : 'bg-reality-rose text-white'
                  }`}>
                    {wp.step}
                  </span>
                  <div>
                    <p className="font-sans font-medium text-xs text-white">{wp.text}</p>
                    <span className="text-[10px] text-gray-500">{wp.distance}</span>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                  wp.safe ? 'bg-reality-emerald/20 text-reality-emerald border border-reality-emerald/40' : 'bg-reality-rose/20 text-reality-rose border border-reality-rose/40'
                }`}>
                  {wp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
