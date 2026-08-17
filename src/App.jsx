import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import QueryBreakdown from './components/QueryBreakdown';
import MapView from './components/MapView';
import DataGrid from './components/DataGrid';
import KnowledgeGraph from './components/KnowledgeGraph';
import PredictionTimeline from './components/PredictionTimeline';
import EvidenceInspector from './components/EvidenceInspector';
import EntityDrawer from './components/EntityDrawer';
import ReportModal from './components/ReportModal';

import { SCENARIOS } from './data/scenarios';
import { parseNaturalLanguageQuery } from './utils/queryParser';

import { 
  Map, 
  Table, 
  Network, 
  TrendingUp, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

export default function App() {
  const [currentScenario, setCurrentScenario] = useState(SCENARIOS[0]);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'map', 'data', 'graph', 'predict', 'evidence'
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [activeTimeWindow, setActiveTimeWindow] = useState('Current');
  const [showReportModal, setShowReportModal] = useState(false);

  const handleSearch = (queryText) => {
    const scenarioResult = parseNaturalLanguageQuery(queryText);
    setCurrentScenario(scenarioResult);
    setActiveTimeWindow('Current');
    setSelectedEntity(null);
  };

  const handleSelectScenario = (scenario) => {
    setCurrentScenario(scenario);
    setActiveTimeWindow('Current');
    setSelectedEntity(null);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 flex flex-col font-sans selection:bg-reality-cyan selection:text-black pb-12">
      {/* Top Header Navbar */}
      <Navbar 
        currentScenario={currentScenario}
        onSelectScenario={handleSelectScenario}
        onOpenReport={() => setShowReportModal(true)}
      />

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-6 pt-6 space-y-6">
        
        {/* Natural Language Query Search Bar */}
        <SearchBar 
          onSearch={handleSearch}
          currentQuery={currentScenario.query}
        />

        {/* AI Query Decomposition Banner */}
        <QueryBreakdown scenario={currentScenario} />

        {/* Navigation Tabs Bar */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-2 overflow-x-auto">
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-bold ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Full Intelligence View</span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-bold ${
                activeTab === 'map'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>GIS Interactive Map</span>
            </button>

            <button
              onClick={() => setActiveTab('data')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-bold ${
                activeTab === 'data'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>Structured Data Grid</span>
            </button>

            <button
              onClick={() => setActiveTab('graph')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-bold ${
                activeTab === 'graph'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>Reality Knowledge Graph</span>
            </button>

            <button
              onClick={() => setActiveTab('predict')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-bold ${
                activeTab === 'predict'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-reality-amber" />
              <span>Predictive Simulation</span>
            </button>

            <button
              onClick={() => setActiveTab('evidence')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-bold ${
                activeTab === 'evidence'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-reality-emerald" />
              <span>Multi-Source Evidence</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Views Rendering */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Top Grid: GIS Map + Predictive Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <MapView 
                  scenario={currentScenario}
                  onSelectEntity={(ent) => setSelectedEntity(ent)}
                  activeTimeWindow={activeTimeWindow}
                />
              </div>
              <div className="space-y-6">
                <PredictionTimeline 
                  scenario={currentScenario}
                  activeTimeWindow={activeTimeWindow}
                  onChangeTimeWindow={(tw) => setActiveTimeWindow(tw)}
                />
              </div>
            </div>

            {/* Knowledge Graph Component */}
            <KnowledgeGraph scenario={currentScenario} />

            {/* Structured Data Grid */}
            <DataGrid 
              scenario={currentScenario}
              onSelectEntity={(ent) => setSelectedEntity(ent)}
            />

            {/* Evidence Verification Inspector */}
            <EvidenceInspector scenario={currentScenario} />
          </div>
        )}

        {activeTab === 'map' && (
          <MapView 
            scenario={currentScenario}
            onSelectEntity={(ent) => setSelectedEntity(ent)}
            activeTimeWindow={activeTimeWindow}
          />
        )}

        {activeTab === 'data' && (
          <DataGrid 
            scenario={currentScenario}
            onSelectEntity={(ent) => setSelectedEntity(ent)}
          />
        )}

        {activeTab === 'graph' && (
          <KnowledgeGraph scenario={currentScenario} />
        )}

        {activeTab === 'predict' && (
          <PredictionTimeline 
            scenario={currentScenario}
            activeTimeWindow={activeTimeWindow}
            onChangeTimeWindow={(tw) => setActiveTimeWindow(tw)}
          />
        )}

        {activeTab === 'evidence' && (
          <EvidenceInspector scenario={currentScenario} />
        )}

      </main>

      {/* Side Entity Inspector Drawer */}
      <EntityDrawer 
        entity={selectedEntity}
        onClose={() => setSelectedEntity(null)}
      />

      {/* Reality Report Generator Modal */}
      {showReportModal && (
        <ReportModal 
          scenario={currentScenario}
          activeTimeWindow={activeTimeWindow}
          onClose={() => setShowReportModal(false)}
        />
      )}
    </div>
  );
}
