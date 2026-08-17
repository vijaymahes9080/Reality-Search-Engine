import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Zap, AlertTriangle, ShieldCheck, RefreshCw, Radio } from 'lucide-react';

export default function IoTSensorStream({ scenario }) {
  const [sensors, setSensors] = useState([
    { id: 'SEN-101', name: 'Vaigai Dam Discharge Flume #4', type: 'Flow Rate', val: 18450, unit: 'cusecs', status: 'ALERT', trend: '+4.2%' },
    { id: 'SEN-204', name: 'Dindigul River Embankment Pressure', type: 'Pressure', val: 4.8, unit: 'bar', status: 'HIGH', trend: '+0.6 bar' },
    { id: 'SEN-308', name: 'Madurai Rain Gauge Telemetry', type: 'Precipitation', val: 142.5, unit: 'mm/24h', status: 'HEAVY', trend: '+12 mm/h' },
    { id: 'SEN-412', name: 'Pennaiyar Bridge Structural Vibration', type: 'Vibration', val: 0.28, unit: 'g-force', status: 'NORMAL', trend: 'Stable' },
    { id: 'SEN-515', name: 'Cauvery Delta Soil Moisture Telemetry', type: 'Moisture', val: 8.2, unit: '% volumetric', status: 'CRITICAL LOW', trend: '-1.4%' }
  ]);

  // Live telemetry pulse animation updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prev => prev.map(s => {
        const delta = (Math.random() - 0.48) * (s.val * 0.02);
        return {
          ...s,
          val: Number((s.val + delta).toFixed(s.unit === 'cusecs' || s.unit === 'mm/24h' ? 0 : 2))
        };
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-reality-emerald animate-pulse" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              Live IoT Sensor Telemetry & Stream Monitor
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Real-time stream telemetry from dam flumes, river sensors, rain gauges & bridge vibration monitors
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-dark-900 border border-gray-800 px-3 py-1 rounded-lg">
          <Radio className="w-3.5 h-3.5 text-reality-rose animate-ping" />
          <span>Stream Frequency: <strong className="text-reality-emerald">100 Hz (Real-Time)</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="bg-dark-900/90 border border-gray-800 hover:border-reality-emerald/40 p-3.5 rounded-xl transition">
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
              <span>{sensor.id}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                sensor.status === 'ALERT' || sensor.status === 'HIGH' || sensor.status === 'CRITICAL LOW'
                  ? 'bg-reality-rose/20 text-reality-rose border border-reality-rose/30'
                  : 'bg-reality-emerald/20 text-reality-emerald border border-reality-emerald/30'
              }`}>
                {sensor.status}
              </span>
            </div>

            <h4 className="text-xs font-bold text-white font-sans truncate mb-2">
              {sensor.name}
            </h4>

            <div className="flex items-baseline justify-between font-mono">
              <span className="text-xl font-extrabold text-reality-cyan">
                {sensor.val.toLocaleString()} <span className="text-xs text-gray-400 font-normal">{sensor.unit}</span>
              </span>
              <span className="text-xs text-reality-amber font-semibold">
                {sensor.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
