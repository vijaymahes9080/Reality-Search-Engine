import React from 'react';
import { Cpu, MapPin, Zap, GitCommit, Layers, CheckCircle2 } from 'lucide-react';

export default function QueryBreakdown({ scenario }) {
  const { extractedTokens, intent, confidence } = scenario;

  const intentColorMap = {
    FIND: 'from-blue-500 to-indigo-600 border-blue-400 text-blue-300',
    COMPARE: 'from-purple-500 to-pink-600 border-purple-400 text-purple-300',
    PREDICT: 'from-amber-500 to-rose-600 border-amber-400 text-amber-300',
    ANALYZE: 'from-emerald-500 to-teal-600 border-emerald-400 text-emerald-300'
  };

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-lg backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-reality-cyan" />
          <h2 className="text-sm font-bold font-mono tracking-wider text-gray-200 uppercase">
            AI Query Decomposition Engine
          </h2>
        </div>

        {/* Intent Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">Query Intent:</span>
          <span className={`px-3 py-1 rounded-full text-xs font-extrabold font-mono border bg-gradient-to-r bg-opacity-20 ${intentColorMap[intent] || intentColorMap.FIND}`}>
            {intent}
          </span>
          <span className="text-xs text-reality-emerald font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> {(confidence * 100).toFixed(0)}% Confidence
          </span>
        </div>
      </div>

      {/* Grid of Extracted Tokens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* ENTITY */}
        <div className="bg-dark-900/80 border border-gray-800 hover:border-reality-cyan/30 rounded-xl p-3 transition">
          <div className="flex items-center gap-1.5 text-xs text-reality-cyan font-mono mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTITY</span>
          </div>
          <p className="text-sm font-semibold text-gray-100 truncate">
            {extractedTokens.entity}
          </p>
        </div>

        {/* EVENT */}
        <div className="bg-dark-900/80 border border-gray-800 hover:border-reality-rose/30 rounded-xl p-3 transition">
          <div className="flex items-center gap-1.5 text-xs text-reality-rose font-mono mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>EVENT</span>
          </div>
          <p className="text-sm font-semibold text-gray-100 truncate">
            {extractedTokens.event}
          </p>
        </div>

        {/* LOCATION */}
        <div className="bg-dark-900/80 border border-gray-800 hover:border-reality-amber/30 rounded-xl p-3 transition">
          <div className="flex items-center gap-1.5 text-xs text-reality-amber font-mono mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCATION</span>
          </div>
          <p className="text-sm font-semibold text-gray-100 truncate">
            {extractedTokens.location}
          </p>
        </div>

        {/* RELATIONSHIP */}
        <div className="bg-dark-900/80 border border-gray-800 hover:border-reality-purple/30 rounded-xl p-3 transition">
          <div className="flex items-center gap-1.5 text-xs text-reality-purple font-mono mb-1">
            <GitCommit className="w-3.5 h-3.5" />
            <span>RELATIONSHIP</span>
          </div>
          <p className="text-sm font-semibold text-gray-100 truncate">
            {extractedTokens.relationship}
          </p>
        </div>
      </div>
    </div>
  );
}
