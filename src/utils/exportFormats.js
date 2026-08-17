export function exportToGeoJSON(entities) {
  const geojson = {
    type: "FeatureCollection",
    features: entities.map((e) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [e.lng, e.lat]
      },
      properties: {
        id: e.id,
        name: e.name,
        category: e.category,
        district: e.district,
        status: e.status,
        severity: e.severity,
        roadAccess: e.roadAccess,
        waterLevel: e.waterLevel
      }
    }))
  };

  return JSON.stringify(geojson, null, 2);
}

export function downloadGeoJSONFile(entities, filename = "Reality_GIS_Data.geojson") {
  const dataStr = exportToGeoJSON(entities);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
