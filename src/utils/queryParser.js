import { SCENARIOS } from '../data/scenarios';

export function parseNaturalLanguageQuery(userQuery) {
  if (!userQuery || !userQuery.trim()) {
    return SCENARIOS[0]; // fallback default
  }

  const queryLower = userQuery.toLowerCase();

  // Try exact match or scenario match
  const matched = SCENARIOS.find(s => 
    s.query.toLowerCase().includes(queryLower) ||
    queryLower.includes(s.category.toLowerCase()) ||
    queryLower.includes(s.extractedTokens.entity.toLowerCase()) ||
    (s.id === 'disaster-floods' && (queryLower.includes('flood') || queryLower.includes('hospital'))) ||
    (s.id === 'healthcare-capacity' && (queryLower.includes('icu') || queryLower.includes('capacity'))) ||
    (s.id === 'agriculture-drought' && (queryLower.includes('farm') || queryLower.includes('drought'))) ||
    (s.id === 'infrastructure-cyclone' && (queryLower.includes('bridge') || queryLower.includes('cyclone'))) ||
    (s.id === 'education-floods' && (queryLower.includes('school') || queryLower.includes('inaccessible'))) ||
    (s.id === 'environment-forest' && (queryLower.includes('forest') || queryLower.includes('tree') || queryLower.includes('deforestation'))) ||
    (s.id === 'public-safety-accidents' && (queryLower.includes('accident') || queryLower.includes('risk') || queryLower.includes('road')))
  );

  if (matched) {
    return {
      ...matched,
      query: userQuery // preserve actual user prompt string
    };
  }

  // Dynamic dynamic fallback parsing if novel query
  let intent = 'FIND';
  if (queryLower.startsWith('why') || queryLower.includes('reason')) intent = 'ANALYZE';
  if (queryLower.includes('predict') || queryLower.includes('will') || queryLower.includes('next')) intent = 'PREDICT';
  if (queryLower.includes('compare') || queryLower.includes('versus') || queryLower.includes('vs')) intent = 'COMPARE';

  // Construct dynamic response cloned from flood scenario with query details
  return {
    ...SCENARIOS[0],
    id: 'custom-query-' + Date.now(),
    query: userQuery,
    intent: intent,
    confidence: 0.91,
    extractedTokens: {
      entity: extractKeywords(userQuery, ['hospitals', 'schools', 'farms', 'bridges', 'roads', 'facilities']) || 'Real-World Entities',
      event: extractKeywords(userQuery, ['floods', 'cyclone', 'drought', 'storm', 'accidents', 'fire']) || 'Environmental Event',
      location: extractKeywords(userQuery, ['tamil nadu', 'chennai', 'madurai', 'dindigul', 'trichy', 'salem', 'cuddalore']) || 'Target GIS Region',
      relationship: 'affected_by / geospatial_proximity',
      timeWindow: 'Real-time telemetry & +6h prediction'
    }
  };
}

function extractKeywords(text, keywords) {
  const textLower = text.toLowerCase();
  const match = keywords.find(k => textLower.includes(k));
  return match ? match.charAt(0).toUpperCase() + match.slice(1) : null;
}
