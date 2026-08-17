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

// Innovative New Modules
import AIVoiceAssistant from './components/AIVoiceAssistant';
import Globe3DView from './components/Globe3DView';
import ScenarioSandbox from './components/ScenarioSandbox';
import RouteOptimizer from './components/RouteOptimizer';
import DroneInspector from './components/DroneInspector';
import IoTSensorStream from './components/IoTSensorStream';
import RealityCommandDashboard from './components/RealityCommandDashboard';

import { SCENARIOS } from './data/scenarios';
import { parseNaturalLanguageQuery } from './utils/queryParser';
import { TRANSLATIONS } from './utils/i18n';

import { 
  Map, 
  Table, 
  Network, 
  TrendingUp, 
  CheckCircle2, 
  Layers,
  Globe as GlobeIcon,
  Sliders,
  Navigation,
  Satellite,
  Cpu
} from 'lucide-react';

export default function App() {
  const [currentScenario, setCurrentScenario] = useState(SCENARIOS[0]);
  const [activeTab, setActiveTab] = useState('overview'); 
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [activeTimeWindow, setActiveTimeWindow] = useState('Current');
  const [showReportModal, setShowReportModal] = useState(false);
  const [lang, setLang] = useState('en');

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

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
        lang={lang}
        onToggleLang={() => setLang(l => l === 'en' ? 'ta' : 'en')}
      />

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-6 pt-6 space-y-6">
        
        {/* Natural Language Query Search Bar */}
        <SearchBar 
          onSearch={handleSearch}
          currentQuery={currentScenario.query}
        />

        {/* AI Voice Assistant Banner */}
        <AIVoiceAssistant 
          scenario={currentScenario}
          onVoiceQuery={handleSearch}
        />

        {/* AI Query Decomposition Banner */}
        <QueryBreakdown scenario={currentScenario} />

        {/* Navigation Tabs Bar */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-2 overflow-x-auto">
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t.fullView}</span>
            </button>

            <button
              onClick={() => setActiveTab('globe3d')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'globe3d'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <GlobeIcon className="w-4 h-4 text-reality-cyan" />
              <span>{t.globe3d}</span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'map'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>{t.gisMap}</span>
            </button>

            <button
              onClick={() => setActiveTab('sandbox')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'sandbox'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Sliders className="w-4 h-4 text-reality-rose" />
              <span>{t.sandbox}</span>
            </button>

            <button
              onClick={() => setActiveTab('routeOptimizer')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'routeOptimizer'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Navigation className="w-4 h-4 text-reality-emerald" />
              <span>{t.routeOptimizer}</span>
            </button>

            <button
              onClick={() => setActiveTab('droneInspector')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'droneInspector'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Satellite className="w-4 h-4 text-reality-purple" />
              <span>{t.droneInspector}</span>
            </button>

            <button
              onClick={() => setActiveTab('command')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'command'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Cpu className="w-4 h-4 text-reality-cyan animate-pulse" />
              <span>Command Center</span>
            </button>

            <button
              onClick={() => setActiveTab('data')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'data'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>{t.dataGrid}</span>
            </button>

            <button
              onClick={() => setActiveTab('graph')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition font-bold whitespace-nowrap ${
                activeTab === 'graph'
                  ? 'bg-gradient-to-r from-reality-cyan/20 to-blue-500/20 text-reality-cyan border border-reality-cyan/40 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>{t.knowledgeGraph}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Views Rendering */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Top 3D Digital Twin & Interactive GIS Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Globe3DView 
                scenario={currentScenario}
                onSelectEntity={(ent) => setSelectedEntity(ent)}
              />
              <MapView 
                scenario={currentScenario}
                onSelectEntity={(ent) => setSelectedEntity(ent)}
                activeTimeWindow={activeTimeWindow}
              />
            </div>

            {/* Disaster Simulation Sandbox + Evacuation Route Optimizer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScenarioSandbox scenario={currentScenario} />
              <RouteOptimizer scenario={currentScenario} />
            </div>

            {/* Predictive Simulation Timeline */}
            <PredictionTimeline 
              scenario={currentScenario}
              activeTimeWindow={activeTimeWindow}
              onChangeTimeWindow={(tw) => setActiveTimeWindow(tw)}
            />

            {/* Drone & Satellite Change Detection Inspector */}
            <DroneInspector scenario={currentScenario} />

            {/* Real-time IoT Sensor Stream */}
            <IoTSensorStream scenario={currentScenario} />

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

        {activeTab === 'globe3d' && (
          <Globe3DView 
            scenario={currentScenario}
            onSelectEntity={(ent) => setSelectedEntity(ent)}
          />
        )}

        {activeTab === 'map' && (
          <MapView 
            scenario={currentScenario}
            onSelectEntity={(ent) => setSelectedEntity(ent)}
            activeTimeWindow={activeTimeWindow}
          />
        )}

        {activeTab === 'sandbox' && (
          <ScenarioSandbox scenario={currentScenario} />
        )}

        {activeTab === 'routeOptimizer' && (
          <RouteOptimizer scenario={currentScenario} />
        )}

        {activeTab === 'droneInspector' && (
          <DroneInspector scenario={currentScenario} />
        )}

        {activeTab === 'command' && (
          <RealityCommandDashboard scenario={currentScenario} />
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
