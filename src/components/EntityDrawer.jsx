import React from 'react';
import { 
  X, 
  MapPin, 
  AlertTriangle, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Truck, 
  Send,
  Navigation
} from 'lucide-react';

export default function EntityDrawer({ entity, onClose }) {
  if (!entity) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-[2000] w-full sm:w-[440px] bg-dark-900/95 border-l border-gray-800 shadow-2xl backdrop-blur-xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-800 mb-4">
          <div>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-reality-cyan/10 text-reality-cyan border border-reality-cyan/30">
              {entity.category}
            </span>
            <h2 className="text-xl font-bold text-white mt-1 leading-tight">
              {entity.name}
            </h2>
            <p className="text-xs font-mono text-gray-400 flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-reality-amber" /> {entity.district}, TN ({entity.lat.toFixed(4)}, {entity.lng.toFixed(4)})
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-800 border border-gray-700 hover:text-white text-gray-400 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Highlights */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-dark-800 border border-gray-800">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Current Status</span>
            <div className={`text-base font-bold font-mono mt-0.5 ${
              entity.status === 'High Risk' ? 'text-reality-rose' :
              entity.status === 'Affected' ? 'text-reality-amber' :
              'text-reality-emerald'
            }`}>
              {entity.status}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-dark-800 border border-gray-800">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Road Access</span>
            <div className="text-xs font-bold font-mono text-gray-200 mt-0.5 truncate">
              {entity.roadAccess}
            </div>
          </div>
        </div>

        {/* Operational Specifications */}
        <div className="space-y-3 font-sans text-xs">
          <div className="p-3.5 rounded-xl bg-dark-800/80 border border-gray-800 space-y-2">
            <h4 className="font-mono text-xs font-bold text-reality-cyan uppercase flex items-center gap-1.5 border-b border-gray-800 pb-1.5">
              <Activity className="w-4 h-4" /> Operational Capacity & Infrastructure
            </h4>

            {entity.beds > 0 && (
              <div className="flex items-center justify-between text-gray-300">
                <span>Total Patient Beds:</span>
                <span className="font-mono font-bold text-white">{entity.beds} Beds</span>
              </div>
            )}

            {entity.icubeds > 0 && (
              <div className="flex items-center justify-between text-gray-300">
                <span>Available ICU Capacity:</span>
                <span className="font-mono font-bold text-reality-emerald">{entity.icubeds} ICU Beds</span>
              </div>
            )}

            <div className="flex items-center justify-between text-gray-300">
              <span>Water / Inundation Level:</span>
              <span className="font-mono font-bold text-reality-rose">{entity.waterLevel}</span>
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <span>Power Backup Systems:</span>
              <span className="font-mono text-gray-200">{entity.powerBackup}</span>
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <span>Evacuation Status:</span>
              <span className="font-mono font-bold text-reality-amber">{entity.evacuationStatus}</span>
            </div>
          </div>

          {/* Sensor Telemetry */}
          {entity.sensors && (
            <div className="p-3.5 rounded-xl bg-dark-800/80 border border-gray-800 space-y-2">
              <h4 className="font-mono text-xs font-bold text-reality-emerald uppercase flex items-center gap-1.5 border-b border-gray-800 pb-1.5">
                <Zap className="w-4 h-4" /> Real-Time Sensor Telemetry
              </h4>
              {Object.entries(entity.sensors).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between text-gray-300 font-mono text-xs">
                  <span className="capitalize">{key}:</span>
                  <span className="font-bold text-white">{val}</span>
                </div>
              ))}
            </div>
          )}

          {/* 6h Prediction */}
          <div className="p-3.5 rounded-xl bg-reality-purple/10 border border-reality-purple/30 text-xs">
            <span className="font-mono font-bold text-reality-purple uppercase">6-Hour Predictive Impact</span>
            <p className="text-gray-200 font-medium mt-1">
              {entity.predictedChangeIn6h}
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Action Buttons */}
      <div className="pt-4 border-t border-gray-800 space-y-2">
        <button 
          onClick={() => alert(`Evacuation Dispatch Alert Sent for ${entity.name}`)}
          className="w-full py-2.5 rounded-xl bg-reality-rose text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-rose-600 transition shadow-lg shadow-reality-rose/20 active:scale-95"
        >
          <Truck className="w-4 h-4" /> Dispatch Evacuation Convoy
        </button>

        <button 
          onClick={() => alert(`Collectorate Telemetry Alert Sent for ${entity.name}`)}
          className="w-full py-2.5 rounded-xl bg-dark-800 text-gray-300 border border-gray-700 hover:border-gray-500 font-bold text-xs flex items-center justify-center gap-2 transition"
        >
          <Send className="w-4 h-4 text-reality-cyan" /> Send Telemetry to District Collector
        </button>
      </div>
    </div>
  );
}
