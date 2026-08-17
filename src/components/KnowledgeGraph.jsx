import React, { useState } from 'react';
import { Network, Info, ArrowRight, Share2, Layers } from 'lucide-react';

export default function KnowledgeGraph({ scenario }) {
  const { graphNodes, graphEdges } = scenario;
  const [selectedNode, setSelectedNode] = useState(graphNodes[0] || null);

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-reality-purple animate-pulse" />
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
              Reality Knowledge Graph Engine
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Maps real-world entity dependencies & event impact propagation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-reality-rose"></span> Event
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-reality-cyan"></span> Entity
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-reality-blue"></span> Location
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-reality-emerald"></span> Resource
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-2 relative min-h-[360px] bg-dark-900/90 rounded-xl border border-gray-800 p-4 flex flex-col justify-between overflow-hidden">
          {/* Subtle grid background effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

          <div className="relative z-10 w-full h-full flex flex-wrap items-center justify-center gap-6 p-4">
            {graphNodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`cursor-pointer transition-all duration-300 p-3.5 rounded-xl border font-mono text-xs shadow-lg flex flex-col gap-1 min-w-[150px] relative ${
                    isSelected
                      ? 'scale-110 border-reality-cyan bg-dark-800 shadow-reality-cyan/30 ring-2 ring-reality-cyan/50'
                      : 'bg-dark-800/90 border-gray-700 hover:border-gray-500 hover:scale-105'
                  }`}
                  style={{ borderLeftColor: node.color, borderLeftWidth: '4px' }}
                >
                  <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wide">
                    <span>{node.type}</span>
                    <span className="font-bold" style={{ color: node.color }}>{node.status}</span>
                  </div>
                  <div className="font-bold text-gray-100 text-sm">
                    {node.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Canvas Bottom Banner */}
          <div className="relative z-10 text-[11px] font-mono text-gray-500 flex items-center justify-between pt-2 border-t border-gray-800/80">
            <span>Graph Nodes: {graphNodes.length} | Edges: {graphEdges.length}</span>
            <span>Click any node to inspect relationship vector</span>
          </div>
        </div>

        {/* Relationship Links & Node Details Panel */}
        <div className="bg-dark-900/90 rounded-xl border border-gray-800 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-reality-purple uppercase mb-3 pb-2 border-b border-gray-800">
              <Info className="w-4 h-4" /> Node Telemetry & Edge Links
            </div>

            {selectedNode ? (
              <div className="space-y-3 font-sans text-xs">
                <div>
                  <span className="text-gray-400 font-mono text-[10px]">SELECTED NODE</span>
                  <h4 className="text-base font-bold text-white mt-0.5">{selectedNode.label}</h4>
                  <div className="flex items-center gap-2 mt-1 font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-dark-800 border border-gray-700 text-gray-300">
                      Type: {selectedNode.type}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-dark-800 border border-gray-700 font-bold" style={{ color: selectedNode.color }}>
                      Status: {selectedNode.status}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800">
                  <span className="text-gray-400 font-mono text-[10px] uppercase">Connected Relationships</span>
                  <div className="mt-2 space-y-2">
                    {graphEdges
                      .filter(e => e.source === selectedNode.id || e.target === selectedNode.id)
                      .map((edge, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-dark-800 border border-gray-800 text-xs font-mono">
                          <div className="text-reality-cyan font-semibold flex items-center gap-1">
                            <Share2 className="w-3 h-3 text-reality-purple" /> {edge.relation}
                          </div>
                          <div className="text-gray-400 text-[11px] mt-1 flex items-center gap-1">
                            <span>{edge.source}</span>
                            <ArrowRight className="w-3 h-3 text-gray-600" />
                            <span>{edge.target}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500 font-mono text-xs">
                Select a node to inspect relationships.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
