export function tokenizeQueryAST(rawQuery) {
  const words = rawQuery.toLowerCase().split(/\s+/);
  
  const entities = words.filter(w => ['hospitals', 'hospital', 'schools', 'farms', 'bridges', 'roads'].includes(w));
  const events = words.filter(w => ['flood', 'floods', 'cyclone', 'drought', 'storm', 'accident'].includes(w));
  const locations = words.filter(w => ['tamil', 'nadu', 'chennai', 'madurai', 'dindigul', 'trichy', 'salem'].includes(w));

  return {
    rawText: rawQuery,
    tokenCount: words.length,
    astNode: {
      type: "RealityQueryAST",
      entityNodes: entities,
      eventNodes: events,
      locationNodes: locations,
      temporalScope: "Realtime + 24h Prediction"
    }
  };
}
