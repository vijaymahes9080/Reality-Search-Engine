import React, { useState } from 'react';
import { Eye, Satellite, Layers, ShieldCheck, Sun } from 'lucide-react';

export default function SatelliteLayerControls({ onSelectBand }) {
  const [activeBand, setActiveBand] = useState('SAR');

  const bands = [
    { id: 'RGB', name: 'Optical True Color (RGB)', desc: 'Visible spectrum resolution (Sentinel-2A)' },
    { id: 'SAR', name: 'Synthetic Aperture Radar (SAR)', desc: 'Cloud-penetrating water mask (Sentinel-1 SAR)' },
    { id: 'NDVI', name: 'Normalized Difference Vegetation', desc: 'Crop health & drought index' },
    { id: 'THERMAL', name: 'Thermal Infrared (TIR)', desc: 'Sea surface temperature & urban heat' }
  ];

  const handleBandSelect = (id) => {
    setActiveBand(id);
    if (onSelectBand) onSelectBand(id);
  };

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-800 mb-3 text-reality-cyan font-bold">
        <Satellite className="w-4 h-4" /> MULTI-SPECTRAL SATELLITE BAND SELECTOR
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {bands.map((b) => (
          <button
            key={b.id}
            onClick={() => handleBandSelect(b.id)}
            className={`p-2.5 rounded-xl border text-left transition ${
              activeBand === b.id
                ? 'bg-reality-cyan/20 border-reality-cyan text-white font-bold'
                : 'bg-dark-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200'
            }`}
          >
            <div className="text-reality-cyan text-xs">{b.name}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{b.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
