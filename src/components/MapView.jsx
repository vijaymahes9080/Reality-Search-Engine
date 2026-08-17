import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import { 
  Layers, 
  MapPin, 
  CloudRain, 
  ShieldAlert, 
  Navigation,
  Eye,
  Radio
} from 'lucide-react';

// Custom Leaflet Icons generator with pulsing CSS animations
function createCustomIcon(status, severity) {
  let color = '#10B981'; // Green (Safe)
  let pulse = false;

  if (severity === 'High' || status === 'High Risk') {
    color = '#F43F5E'; // Red
    pulse = true;
  } else if (status === 'Affected') {
    color = '#F59E0B'; // Orange
  } else if (status === 'Predicted Risk') {
    color = '#A855F7'; // Purple
  }

  const svgHtml = `
    <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
      ${pulse ? `<div style="position: absolute; width: 36px; height: 36px; border-radius: 50%; background-color: ${color}; opacity: 0.4; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
      <div style="position: relative; width: 22px; height: 22px; border-radius: 50%; background-color: ${color}; border: 2.5px solid #0B0F19; box-shadow: 0 0 12px ${color}; font-size: 11px; font-weight: bold; color: #000; display: flex; align-items: center; justify-content: center;">
        !
      </div>
    </div>
  `;

  return L.divIcon({
    html: svgHtml,
    className: 'custom-leaflet-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

// Controller to auto center map on scenario change
function MapCenterController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function MapView({ scenario, onSelectEntity, activeTimeWindow }) {
  const [layers, setLayers] = useState({
    satellite: false,
    radar: true,
    floodContours: true,
    shelters: true
  });

  const toggleLayer = (layerKey) => {
    setLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  const tileUrl = layers.satellite
    ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

  const tileAttribution = layers.satellite
    ? '&copy; Esri &mdash; Earthstar Geographics'
    : '&copy; <a href="https://carto.com/">CARTO</a>';

  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-dark-900">
      {/* Map Control Bar Overlay */}
      <div className="absolute top-3 right-3 z-[1000] bg-dark-900/90 backdrop-blur-md border border-gray-800 p-2.5 rounded-xl shadow-xl max-w-xs text-xs font-mono">
        <div className="flex items-center gap-1.5 text-gray-200 font-bold mb-2 pb-1 border-b border-gray-800">
          <Layers className="w-4 h-4 text-reality-cyan" />
          <span>GIS MAP LAYERS</span>
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white p-1 hover:bg-dark-800 rounded">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-reality-cyan" /> Satellite Hybrid
            </span>
            <input 
              type="checkbox" 
              checked={layers.satellite} 
              onChange={() => toggleLayer('satellite')} 
              className="accent-reality-cyan rounded" 
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white p-1 hover:bg-dark-800 rounded">
            <span className="flex items-center gap-1.5">
              <CloudRain className="w-3.5 h-3.5 text-blue-400" /> Weather Radar Overlay
            </span>
            <input 
              type="checkbox" 
              checked={layers.radar} 
              onChange={() => toggleLayer('radar')} 
              className="accent-reality-cyan rounded" 
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white p-1 hover:bg-dark-800 rounded">
            <span className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-reality-rose" /> Flood Risk Radius
            </span>
            <input 
              type="checkbox" 
              checked={layers.floodContours} 
              onChange={() => toggleLayer('floodContours')} 
              className="accent-reality-cyan rounded" 
            />
          </label>
        </div>
      </div>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-3 left-3 z-[1000] bg-dark-900/90 backdrop-blur-md border border-gray-800 px-3 py-2 rounded-xl shadow-xl text-[11px] font-mono flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-reality-rose animate-ping"></span> High Risk
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-reality-amber"></span> Affected
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-reality-purple"></span> Predicted (+6h)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-reality-emerald"></span> Operational
        </span>
      </div>

      {/* Leaflet Map React Instance */}
      <MapContainer
        center={scenario.mapCenter}
        zoom={scenario.mapZoom}
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
      >
        <MapCenterController center={scenario.mapCenter} zoom={scenario.mapZoom} />

        <TileLayer
          url={tileUrl}
          attribution={tileAttribution}
        />

        {/* Optional Weather Radar Layer Simulation */}
        {layers.radar && (
          <TileLayer
            url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=89d2d0c242c75a40b925b448a39a0614"
            opacity={0.4}
          />
        )}

        {/* Entities Markers & Flood Contours */}
        {scenario.entities.map((entity) => {
          const isHigh = entity.severity === 'High';
          return (
            <React.Fragment key={entity.id}>
              {/* Flood Contours Circle */}
              {layers.floodContours && (isHigh || entity.status === 'Affected') && (
                <Circle
                  center={[entity.lat, entity.lng]}
                  radius={isHigh ? 6500 : 3500}
                  pathOptions={{
                    color: isHigh ? '#F43F5E' : '#F59E0B',
                    fillColor: isHigh ? '#F43F5E' : '#F59E0B',
                    fillOpacity: 0.18,
                    weight: 1.5,
                    dashArray: '4, 4'
                  }}
                />
              )}

              {/* Marker */}
              <Marker
                position={[entity.lat, entity.lng]}
                icon={createCustomIcon(entity.status, entity.severity)}
                eventHandlers={{
                  click: () => onSelectEntity(entity)
                }}
              >
                <Popup className="leaflet-dark-popup">
                  <div className="p-1 font-sans text-xs bg-dark-900 text-gray-100">
                    <div className="font-bold text-sm text-reality-cyan border-b border-gray-800 pb-1 mb-1">
                      {entity.name}
                    </div>
                    <div className="space-y-1">
                      <div><strong className="text-gray-400">District:</strong> {entity.district}</div>
                      <div><strong className="text-gray-400">Status:</strong> <span className={`font-semibold ${entity.severity === 'High' ? 'text-reality-rose' : 'text-reality-amber'}`}>{entity.status}</span></div>
                      <div><strong className="text-gray-400">Road Access:</strong> {entity.roadAccess}</div>
                      {entity.beds > 0 && <div><strong className="text-gray-400">Beds:</strong> {entity.beds} (ICU: {entity.icubeds})</div>}
                    </div>
                    <button
                      onClick={() => onSelectEntity(entity)}
                      className="mt-2 w-full py-1 rounded bg-reality-cyan/20 hover:bg-reality-cyan/30 text-reality-cyan font-semibold border border-reality-cyan/40 text-[11px]"
                    >
                      View Entity Intelligence Drawer →
                    </button>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}
