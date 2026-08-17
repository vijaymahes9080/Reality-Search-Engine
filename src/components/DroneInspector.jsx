import React, { useState } from 'react';
import { Eye, Sliders, Satellite, Camera, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DroneInspector({ scenario }) {
  const [sliderPos, setSliderPos] = useState(50); // % position

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <Satellite className="w-5 h-5 text-reality-purple animate-pulse" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              Drone Surveillance & Satellite Change Detection
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Bi-spectral comparison: Pre-Disaster Optical vs Post-Disaster SAR Water Mask
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
          <span className="px-2.5 py-1 rounded bg-dark-900 border border-gray-800 text-reality-cyan font-bold">
            Sentinel-2 SAR Resolution: 10m
          </span>
        </div>
      </div>

      {/* Split Image Inspector */}
      <div className="relative w-full h-[360px] bg-dark-950 rounded-xl border border-gray-800 overflow-hidden select-none">
        {/* Pre-Disaster Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80')` 
          }}
        >
          <div className="absolute top-3 left-3 bg-dark-900/90 border border-gray-800 px-3 py-1 rounded-lg text-xs font-mono font-bold text-reality-emerald">
            PRE-DISASTER (NORMAL OPTICAL)
          </div>
        </div>

        {/* Post-Disaster Overlay Layer with Clip Path */}
        <div 
          className="absolute inset-0 bg-cover bg-center border-r-2 border-reality-cyan shadow-2xl"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80')`,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
          }}
        >
          <div className="absolute top-3 left-3 bg-reality-rose/90 border border-reality-rose px-3 py-1 rounded-lg text-xs font-mono font-bold text-white shadow-lg">
            POST-DISASTER (FLOOD INUNDATION SAR)
          </div>
        </div>

        {/* Slider Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-reality-cyan cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_15px_#00F0FF]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-reality-cyan text-black font-bold flex items-center justify-center text-xs shadow-lg">
            ↔
          </div>
        </div>

        {/* Range Slider Control overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>

      {/* Footer Info */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400">
        <span>Slide left/right to compare water ingress & structural damage</span>
        <span className="text-reality-cyan font-bold">Spectral Delta Index: +38.4% Water Cover</span>
      </div>
    </div>
  );
}
