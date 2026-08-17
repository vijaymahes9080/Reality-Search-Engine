import React from 'react';
import SatelliteLayerControls from './SatelliteLayerControls';
import EmergencyShelterMap from './EmergencyShelterMap';
import WeatherRadarFeed from './WeatherRadarFeed';
import PublicAlertBanner from './PublicAlertBanner';
import HistoricalCompare from './HistoricalCompare';
import ResourceInventory from './ResourceInventory';
import CasualityPredictor from './CasualityPredictor';
import InfrastructureBridgeMonitor from './InfrastructureBridgeMonitor';
import HospitalBedManager from './HospitalBedManager';
import DronePatrolPlanner from './DronePatrolPlanner';
import CropDamageAnalyzer from './CropDamageAnalyzer';
import RoadAccessibilityHeatmap from './RoadAccessibilityHeatmap';
import PowerGridMonitor from './PowerGridMonitor';
import { LayoutGrid, Cpu, Activity } from 'lucide-react';

export default function RealityCommandDashboard({ scenario }) {
  return (
    <div className="space-y-6">
      <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 text-reality-cyan font-bold">
          <LayoutGrid className="w-5 h-5 animate-pulse" />
          <span>UNIFIED EXECUTIVE REALITY COMMAND DASHBOARD (18 INTEGRATED MODULES)</span>
        </div>
        <span className="px-3 py-1 rounded bg-reality-emerald/20 text-reality-emerald border border-reality-emerald/40 font-bold">
          LIVE FEED ACTIVE
        </span>
      </div>

      <PublicAlertBanner />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SatelliteLayerControls />
        <WeatherRadarFeed />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmergencyShelterMap />
        <HospitalBedManager />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceInventory />
        <CasualityPredictor />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InfrastructureBridgeMonitor />
        <PowerGridMonitor />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RoadAccessibilityHeatmap />
        <DronePatrolPlanner />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CropDamageAnalyzer />
        <HistoricalCompare />
      </div>
    </div>
  );
}
