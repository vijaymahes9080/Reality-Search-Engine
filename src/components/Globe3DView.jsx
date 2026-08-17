import React, { useRef, useEffect, useState } from 'react';
import { Globe, Satellite, RotateCw, Layers, Compass, Zap } from 'lucide-react';

export default function Globe3DView({ scenario, onSelectEntity }) {
  const canvasRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let angle = rotationAngle;

    const renderGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const radius = Math.min(width, height) * 0.38;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Earth Sphere Background & Glow
      const gradient = ctx.createRadialGradient(centerX - radius * 0.3, centerY - radius * 0.3, radius * 0.1, centerX, centerY, radius * 1.2);
      gradient.addColorStop(0, '#1E293B');
      gradient.addColorStop(0.7, '#0F172A');
      gradient.addColorStop(1, '#020617');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Grid Latitude / Longitude lines
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 1;

      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 20) {
        const y = centerY + Math.sin((lat * Math.PI) / 180) * radius;
        const rx = Math.cos((lat * Math.PI) / 180) * radius;
        ctx.beginPath();
        ctx.ellipse(centerX, y, rx, rx * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines with rotation
      for (let lon = 0; lon < 180; lon += 30) {
        const rad = ((lon + angle) * Math.PI) / 180;
        const rx = Math.sin(rad) * radius;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, Math.abs(rx), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.stroke();
      }

      // Draw Orbiting Satellite Rings
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius * 1.35, radius * 0.45, -0.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Satellite Icon Position
      const satAngle = (angle * 1.5 * Math.PI) / 180;
      const satX = centerX + Math.cos(satAngle) * radius * 1.35;
      const satY = centerY + Math.sin(satAngle) * radius * 0.45;

      ctx.fillStyle = '#A855F7';
      ctx.beginPath();
      ctx.arc(satX, satY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Label Satellite
      ctx.fillStyle = '#A855F7';
      ctx.font = '10px monospace';
      ctx.fillText('SENTINEL-2 SAR', satX + 8, satY + 3);

      // Plot Entities Pins on Globe (TN Geographic Offset Projection)
      scenario.entities.forEach((entity, idx) => {
        // Project Lat/Lng offset relative to rotation
        const lonOffset = (entity.lng - 78.5) * 8 + (angle % 360);
        const latOffset = (entity.lat - 10.5) * 8;

        const pinRad = (lonOffset * Math.PI) / 180;
        const px = centerX + Math.sin(pinRad) * radius * 0.8;
        const py = centerY - (latOffset / 90) * radius * 0.6;

        // Check if visible on front hemisphere
        if (Math.cos(pinRad) > -0.2) {
          const isHigh = entity.severity === 'High';
          const pinColor = isHigh ? '#F43F5E' : entity.status === 'Affected' ? '#F59E0B' : '#10B981';

          // Outer pulse ring
          ctx.beginPath();
          ctx.arc(px, py, isHigh ? 9 : 6, 0, Math.PI * 2);
          ctx.fillStyle = pinColor + '40';
          ctx.fill();

          // Pin dot
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = pinColor;
          ctx.fill();

          // Entity Label
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '10px sans-serif';
          ctx.fillText(entity.name.split(' ')[0], px + 8, py + 3);
        }
      });

      if (isRotating) {
        angle += 0.4;
        setRotationAngle(angle);
      }
      animationFrameId = requestAnimationFrame(renderGlobe);
    };

    renderGlobe();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scenario, isRotating]);

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800 mb-3">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-reality-cyan animate-spin-slow" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              3D Digital Twin Globe & Spatial Mesh Visualizer
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Real-time orbital satellite projection & global geospatial threat mapping
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition border ${
              isRotating
                ? 'bg-reality-cyan/20 text-reality-cyan border-reality-cyan/40'
                : 'bg-dark-900 text-gray-400 border-gray-700 hover:text-white'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Auto Orbiting' : 'Paused Orbit'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Box */}
      <div className="relative w-full h-[380px] bg-dark-950 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={650}
          height={380}
          className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
        />

        {/* Floating Telemetry Info Overlay */}
        <div className="absolute top-3 left-3 bg-dark-900/90 backdrop-blur-md border border-gray-800 p-2.5 rounded-xl text-[11px] font-mono space-y-1">
          <div className="text-reality-cyan font-bold flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" /> GEOSPATIAL PROJECTION
          </div>
          <div className="text-gray-400">Target: <strong className="text-white">Tamil Nadu (8.7°N - 13.5°N)</strong></div>
          <div className="text-gray-400">Orbital Constellation: <strong className="text-reality-purple">Sentinel-2B & MODIS-Terra</strong></div>
        </div>
      </div>
    </div>
  );
}
