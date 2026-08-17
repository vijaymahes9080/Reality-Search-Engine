import React from 'react';
import { 
  CheckCircle, 
  Satellite, 
  CloudRain, 
  ShieldAlert, 
  Cpu, 
  Activity, 
  Globe, 
  Eye, 
  FileText,
  Lock
} from 'lucide-react';

export default function EvidenceInspector({ scenario }) {
  const getSourceIcon = (type) => {
    if (type.includes('Satellite')) return <Satellite className="w-4 h-4 text-reality-cyan" />;
    if (type.includes('Weather')) return <CloudRain className="w-4 h-4 text-blue-400" />;
    if (type.includes('Government') || type.includes('Collectorate')) return <ShieldAlert className="w-4 h-4 text-reality-rose" />;
    if (type.includes('IoT')) return <Cpu className="w-4 h-4 text-reality-emerald" />;
    return <Globe className="w-4 h-4 text-reality-purple" />;
  };

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-reality-emerald" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              Multi-Source Evidence & Sensor Cross-Verification
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Empirical evidence backing reality query answers ({scenario.evidence.length} Sources Verified)
            </p>
          </div>
        </div>

        <span className="text-xs font-mono text-reality-emerald bg-reality-emerald/10 border border-reality-emerald/30 px-3 py-1 rounded-full flex items-center gap-1 w-fit">
          <Lock className="w-3 h-3" /> Cryptographically Verified Feeds
        </span>
      </div>

      {/* Grid of Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {scenario.evidence.map((ev, idx) => (
          <div 
            key={idx} 
            className="bg-dark-900/80 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-dark-800 border border-gray-700">
                    {getSourceIcon(ev.sourceType)}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-300">
                    {ev.sourceType}
                  </span>
                </div>

                <span className="text-xs font-mono font-bold text-reality-emerald bg-dark-800 border border-gray-700 px-2 py-0.5 rounded">
                  {ev.confidence} Confidence
                </span>
              </div>

              <h4 className="text-sm font-bold text-gray-100 mb-1">
                {ev.title}
              </h4>

              <p className="text-xs text-gray-300 leading-relaxed font-sans bg-dark-800/60 p-2.5 rounded-lg border border-gray-800 italic">
                "{ev.snippet}"
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>Verified: <strong className="text-gray-400">{ev.verifiedBy}</strong></span>
              <span>{ev.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
