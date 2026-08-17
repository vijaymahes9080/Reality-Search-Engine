export const SCENARIOS = [
  {
    id: 'disaster-floods',
    category: 'Disaster Management',
    query: 'Show all hospitals affected by floods in Tamil Nadu',
    intent: 'PREDICT',
    confidence: 0.96,
    extractedTokens: {
      entity: 'Hospital',
      event: 'Flood Inundation',
      location: 'Tamil Nadu (Dindigul, Madurai, Trichy, Chennai, Tirunelveli)',
      relationship: 'affected_by / at_risk',
      timeWindow: 'Current + 24h Prediction Window'
    },
    summaryStats: {
      totalFound: 127,
      highRisk: 34,
      affected: 52,
      safe: 41,
      predictedRiskIn6h: 18,
      populationExposed: '2.4M',
      roadAccessibility: '64% Operational'
    },
    predictionSummary: '18 additional hospitals in the Cauvery & Vaigai river basins may become severely inundated within 6 hours due to upstream dam releases and high tidal surge.',
    mapCenter: [10.3624, 77.9695], // Dindigul / Central TN
    mapZoom: 8,
    entities: [
      {
        id: 'hosp-1',
        name: 'Government Headquarters Hospital',
        category: 'Hospital',
        district: 'Dindigul',
        lat: 10.3624,
        lng: 77.9695,
        status: 'Affected',
        severity: 'High',
        roadAccess: 'Blocked (Water depth 1.2m)',
        beds: 450,
        icubeds: 32,
        waterLevel: '1.2 m',
        powerBackup: 'Generator active (14h remaining)',
        evacuationStatus: 'Stage 2 In Progress',
        predictedChangeIn6h: 'Water level expected +0.4m',
        sensors: { rainfall: '142 mm/24h', flowRate: '12,500 cusecs' }
      },
      {
        id: 'hosp-2',
        name: 'Madurai Medical College & Hospital',
        category: 'Hospital',
        district: 'Madurai',
        lat: 9.9252,
        lng: 78.1198,
        status: 'At Risk',
        severity: 'Medium',
        roadAccess: 'Partial (One-way divert)',
        beds: 1200,
        icubeds: 85,
        waterLevel: '0.4 m',
        powerBackup: 'Grid active',
        evacuationStatus: 'Standby Alert',
        predictedChangeIn6h: 'Risk escalation to HIGH',
        sensors: { rainfall: '98 mm/24h', flowRate: '9,800 cusecs' }
      },
      {
        id: 'hosp-3',
        name: 'Trichy Multi-Specialty General Hospital',
        category: 'Hospital',
        district: 'Trichy',
        lat: 10.7905,
        lng: 78.7047,
        status: 'Safe',
        severity: 'Low',
        roadAccess: 'Open',
        beds: 680,
        icubeds: 45,
        waterLevel: '0.0 m',
        powerBackup: 'Grid active',
        evacuationStatus: 'Normal Operations',
        predictedChangeIn6h: 'Safe',
        sensors: { rainfall: '45 mm/24h', flowRate: '4,100 cusecs' }
      },
      {
        id: 'hosp-4',
        name: 'Rajaji District Trauma Center',
        category: 'Hospital',
        district: 'Madurai',
        lat: 9.9320,
        lng: 78.1280,
        status: 'High Risk',
        severity: 'High',
        roadAccess: 'Blocked',
        beds: 310,
        icubeds: 20,
        waterLevel: '1.6 m',
        powerBackup: 'Generator failing (2h remaining)',
        evacuationStatus: 'Urgent Evacuation Required',
        predictedChangeIn6h: 'Submerged first floor',
        sensors: { rainfall: '165 mm/24h', flowRate: '14,200 cusecs' }
      },
      {
        id: 'hosp-5',
        name: 'Tirunelveli Emergency Care Unit',
        category: 'Hospital',
        district: 'Tirunelveli',
        lat: 8.7139,
        lng: 77.7567,
        status: 'Predicted Risk',
        severity: 'Medium',
        roadAccess: 'Open',
        beds: 240,
        icubeds: 15,
        waterLevel: '0.2 m',
        powerBackup: 'Grid active',
        evacuationStatus: 'Pre-warning Issued',
        predictedChangeIn6h: 'Expected flood entry in +4h',
        sensors: { rainfall: '110 mm/24h', flowRate: '8,500 cusecs' }
      },
      {
        id: 'hosp-6',
        name: 'Stanley Medical Center Unit B',
        category: 'Hospital',
        district: 'Chennai North',
        lat: 13.1070,
        lng: 80.2882,
        status: 'Affected',
        severity: 'High',
        roadAccess: 'Submerged Driveway',
        beds: 890,
        icubeds: 60,
        waterLevel: '0.9 m',
        powerBackup: 'Generator active',
        evacuationStatus: 'Patients shifted to 3rd floor',
        predictedChangeIn6h: 'Stabilizing after high tide',
        sensors: { rainfall: '180 mm/24h', flowRate: '15,000 cusecs' }
      }
    ],
    graphNodes: [
      { id: 'event-1', label: 'Vaigai Flood Surge', type: 'event', status: 'CRITICAL', color: '#F43F5E' },
      { id: 'hosp-1', label: 'Dindigul HQ Hospital', type: 'entity', status: 'HIGH_RISK', color: '#F43F5E' },
      { id: 'hosp-2', label: 'Madurai Medical College', type: 'entity', status: 'MEDIUM_RISK', color: '#F59E0B' },
      { id: 'hosp-3', label: 'Trichy General Hosp', type: 'entity', status: 'SAFE', color: '#10B981' },
      { id: 'loc-1', label: 'Dindigul River Basin', type: 'location', status: 'INUNDATED', color: '#3B82F6' },
      { id: 'road-1', label: 'NH-45 Corridor', type: 'road', status: 'BLOCKED', color: '#EF4444' },
      { id: 'shelter-1', label: 'Dindigul Indoor Stadium Shelter', type: 'shelter', status: 'OPEN', color: '#10B981' }
    ],
    graphEdges: [
      { source: 'event-1', target: 'hosp-1', relation: 'affects (Severity: High)' },
      { source: 'event-1', target: 'hosp-2', relation: 'predicted_to_affect (+6h)' },
      { source: 'hosp-1', target: 'loc-1', relation: 'located_in' },
      { source: 'hosp-1', target: 'road-1', relation: 'access_via (BLOCKED)' },
      { source: 'hosp-1', target: 'shelter-1', relation: 'evacuate_to' }
    ],
    evidence: [
      {
        sourceType: 'Satellite (Sentinel-2 SAR)',
        title: 'Synthetic Aperture Radar Inundation Detection',
        timestamp: '15 mins ago',
        confidence: '98.4%',
        icon: 'Satellite',
        snippet: 'SAR backscatter change analysis confirms 3.4 sq km flooded extent surrounding Dindigul HQ Hospital premises.',
        verifiedBy: 'ISRO MOSDAC / ESA Copernicus'
      },
      {
        sourceType: 'Weather Radar & Gauge',
        title: 'IMD Doppler Radar Cloud Burst Alert',
        timestamp: '28 mins ago',
        confidence: '95.1%',
        icon: 'CloudRain',
        snippet: 'Heavy rainfall intensity (>45 mm/hr) recorded in Palani hills catchments feeding Vaigai basin.',
        verifiedBy: 'India Meteorological Department'
      },
      {
        sourceType: 'Government Bulletin',
        title: 'TN State Disaster Management Authority Alert #402',
        timestamp: '1 hour ago',
        confidence: '100%',
        icon: 'ShieldAlert',
        snippet: 'Red Alert issued for Madurai and Dindigul districts. Emergency response force deployed with motorboats.',
        verifiedBy: 'TNSDMA Revenue & Disaster Dept'
      },
      {
        sourceType: 'IoT Stream',
        title: 'Vaigai Dam Discharge Telemetry Sensor #TN-882',
        timestamp: 'Real-time',
        confidence: '99.9%',
        icon: 'Cpu',
        snippet: 'Outflow increased to 22,000 cusecs. Water level at 68.5 ft against max 71.0 ft.',
        verifiedBy: 'Public Works Dept (PWD) Hydrology'
      }
    ],
    timelineData: [
      { time: 'T-6h', highRisk: 12, affected: 25, safe: 90, waterAvg: 0.3 },
      { time: 'Current', highRisk: 34, affected: 52, safe: 41, waterAvg: 0.9 },
      { time: '+2h', highRisk: 42, affected: 58, safe: 27, waterAvg: 1.1 },
      { time: '+6h', highRisk: 52, affected: 50, safe: 25, waterAvg: 1.4 },
      { time: '+12h', highRisk: 48, affected: 46, safe: 33, waterAvg: 1.2 },
      { time: '+24h', highRisk: 28, affected: 40, safe: 59, waterAvg: 0.6 }
    ]
  },
  {
    id: 'healthcare-capacity',
    category: 'Healthcare Capacity',
    query: 'Show hospitals with available emergency ICU capacity near flood zone',
    intent: 'FIND',
    confidence: 0.94,
    extractedTokens: {
      entity: 'Hospital ICU Beds',
      event: 'Emergency Demand Surge',
      location: 'South Tamil Nadu Buffer Zone',
      relationship: 'has_capacity > 10 beds',
      timeWindow: 'Real-time Telemetry'
    },
    summaryStats: {
      totalFound: 48,
      highRisk: 5,
      affected: 12,
      safe: 31,
      predictedRiskIn6h: 4,
      populationExposed: '1.1M',
      roadAccessibility: '82% Operational'
    },
    predictionSummary: 'Trichy and Coimbatore regional trauma centers have 140+ available ICU beds and open road corridors for emergency transfer.',
    mapCenter: [10.7905, 78.7047],
    mapZoom: 8,
    entities: [
      {
        id: 'hosp-3',
        name: 'Trichy Multi-Specialty General Hospital',
        category: 'Hospital',
        district: 'Trichy',
        lat: 10.7905,
        lng: 78.7047,
        status: 'Safe',
        severity: 'Low',
        roadAccess: 'Open (Clear Highway Corridor)',
        beds: 680,
        icubeds: 45,
        waterLevel: '0.0 m',
        powerBackup: 'Grid Active',
        evacuationStatus: 'Receiving Emergency Transfers',
        predictedChangeIn6h: 'Optimal Surge Capacity',
        sensors: { rainfall: '12 mm/24h', flowRate: '2,100 cusecs' }
      },
      {
        id: 'hosp-7',
        name: 'Coimbatore Apollo Speciality Hospital',
        category: 'Hospital',
        district: 'Coimbatore',
        lat: 11.0168,
        lng: 76.9558,
        status: 'Safe',
        severity: 'Low',
        roadAccess: 'Open',
        beds: 420,
        icubeds: 38,
        waterLevel: '0.0 m',
        powerBackup: 'Grid Active',
        evacuationStatus: 'Full Readiness',
        predictedChangeIn6h: 'Safe',
        sensors: { rainfall: '5 mm/24h', flowRate: '1,200 cusecs' }
      }
    ],
    graphNodes: [
      { id: 'cap-1', label: 'ICU Capacity Surge', type: 'event', status: 'ACTIVE', color: '#10B981' },
      { id: 'hosp-3', label: 'Trichy Gen Hospital (45 ICU)', type: 'entity', status: 'SAFE', color: '#10B981' },
      { id: 'hosp-7', label: 'Coimbatore Apollo (38 ICU)', type: 'entity', status: 'SAFE', color: '#10B981' }
    ],
    graphEdges: [
      { source: 'cap-1', target: 'hosp-3', relation: 'available_capacity (45 Beds)' },
      { source: 'cap-1', target: 'hosp-7', relation: 'available_capacity (38 Beds)' }
    ],
    evidence: [
      {
        sourceType: 'Health Dept Portal',
        title: 'TN Bed Availability Live Registry',
        timestamp: '5 mins ago',
        confidence: '99.5%',
        icon: 'Activity',
        snippet: 'Real-time telemetry confirms 183 ventilator-equipped ICU beds active across Trichy & Coimbatore hubs.',
        verifiedBy: 'Directorate of Medical Education TN'
      }
    ],
    timelineData: [
      { time: 'Current', highRisk: 5, affected: 12, safe: 31, waterAvg: 0.2 },
      { time: '+6h', highRisk: 6, affected: 14, safe: 28, waterAvg: 0.3 }
    ]
  },
  {
    id: 'agriculture-drought',
    category: 'Agriculture & Drought',
    query: 'Which farms are experiencing severe drought stress in Delta region?',
    intent: 'ANALYZE',
    confidence: 0.95,
    extractedTokens: {
      entity: 'Paddy Farm Clusters',
      event: 'Agricultural Drought / NDVI Deficit',
      location: 'Cauvery Delta (Thanjavur, Tiruvarur, Nagapattinam)',
      relationship: 'stress_level > 70%',
      timeWindow: 'Sentinel-2 Vegetation Index (NDVI)'
    },
    summaryStats: {
      totalFound: 340,
      highRisk: 112,
      affected: 145,
      safe: 83,
      predictedRiskIn6h: 24,
      populationExposed: '480K Farmers',
      roadAccessibility: '95% Operational'
    },
    predictionSummary: '85,000 hectares of Kuruvai paddy crops face soil moisture deficit below 14%. Groundwater depletion critical in Tiruvarur east block.',
    mapCenter: [10.7870, 79.1378], // Thanjavur
    mapZoom: 9,
    entities: [
      {
        id: 'farm-1',
        name: 'Thanjavur Paddy Cluster 4B',
        category: 'Agricultural Farm',
        district: 'Thanjavur',
        lat: 10.7870,
        lng: 79.1378,
        status: 'High Risk',
        severity: 'High',
        roadAccess: 'Open',
        beds: 0,
        icubeds: 0,
        waterLevel: 'Moisture 8% (Critical)',
        powerBackup: 'Agricultural Agri-Feeder 4h/day',
        evacuationStatus: 'Emergency Canal Water Requested',
        predictedChangeIn6h: 'Crop wilting stage without canal release',
        sensors: { moisture: '8.2%', temp: '38.5 C' }
      },
      {
        id: 'farm-2',
        name: 'Tiruvarur Delta Agro Zone',
        category: 'Agricultural Farm',
        district: 'Tiruvarur',
        lat: 10.7726,
        lng: 79.6365,
        status: 'Affected',
        severity: 'Medium',
        roadAccess: 'Open',
        beds: 0,
        icubeds: 0,
        waterLevel: 'Moisture 12%',
        powerBackup: 'Solar Pump Active',
        evacuationStatus: 'Drip Irrigation Initiated',
        predictedChangeIn6h: 'Stress continuing',
        sensors: { moisture: '12.1%', temp: '37.1 C' }
      }
    ],
    graphNodes: [
      { id: 'event-drought', label: 'Cauvery Delta Drought', type: 'event', status: 'HIGH_RISK', color: '#F59E0B' },
      { id: 'farm-1', label: 'Thanjavur Paddy 4B', type: 'entity', status: 'CRITICAL', color: '#EF4444' },
      { id: 'canal-1', label: 'Grand Anicut Main Canal', type: 'waterway', status: 'LOW_FLOW', color: '#3B82F6' }
    ],
    graphEdges: [
      { source: 'event-drought', target: 'farm-1', relation: 'causes_stress (NDVI < 0.25)' },
      { source: 'canal-1', target: 'farm-1', relation: 'supplies_water (Deficit 42%)' }
    ],
    evidence: [
      {
        sourceType: 'Satellite (Sentinel-2 NDVI)',
        title: 'Normalized Difference Vegetation Index Loss',
        timestamp: '2 hours ago',
        confidence: '97.2%',
        icon: 'TreeSun',
        snippet: 'Chlorophyll reflectance drops by 38% across Tiruvarur & Nagapattinam sector compared to 5-year average.',
        verifiedBy: 'National Remote Sensing Centre (NRSC)'
      }
    ],
    timelineData: [
      { time: 'Week -4', highRisk: 30, affected: 60, safe: 250, waterAvg: 22 },
      { time: 'Current', highRisk: 112, affected: 145, safe: 83, waterAvg: 10 }
    ]
  },
  {
    id: 'infrastructure-cyclone',
    category: 'Infrastructure',
    query: 'Show bridges damaged after the cyclone in coastal districts',
    intent: 'FIND',
    confidence: 0.98,
    extractedTokens: {
      entity: 'Bridge / Highway Flyover',
      event: 'Cyclone Structural Damage',
      location: 'Coastal Tamil Nadu (Cuddalore, Nagapattinam)',
      relationship: 'damaged_by / road_blocked',
      timeWindow: 'Post-Storm Inspection'
    },
    summaryStats: {
      totalFound: 18,
      highRisk: 6,
      affected: 8,
      safe: 4,
      predictedRiskIn6h: 2,
      populationExposed: '320K Commuters',
      roadAccessibility: '42% Operational'
    },
    predictionSummary: 'Pennaiyar river bridge in Cuddalore sustained pier displacement. Heavy vehicle access suspended until structural reinforcement.',
    mapCenter: [11.7480, 79.7714], // Cuddalore
    mapZoom: 9,
    entities: [
      {
        id: 'bridge-1',
        name: 'Pennaiyar River Causeway Bridge',
        category: 'Infrastructure',
        district: 'Cuddalore',
        lat: 11.7480,
        lng: 79.7714,
        status: 'High Risk',
        severity: 'High',
        roadAccess: 'Closed to All Traffic',
        beds: 0,
        icubeds: 0,
        waterLevel: 'Structural Crack 45cm',
        powerBackup: 'N/A',
        evacuationStatus: 'Diverted via East Coast Road',
        predictedChangeIn6h: 'Scour depth increase under high flow',
        sensors: { displacement: '12 mm tilt', vibration: 'High Anomaly' }
      }
    ],
    graphNodes: [
      { id: 'cyclone-1', label: 'Cyclone Storm Surge', type: 'event', status: 'CRITICAL', color: '#F43F5E' },
      { id: 'bridge-1', label: 'Pennaiyar Bridge', type: 'entity', status: 'DAMAGED', color: '#EF4444' }
    ],
    graphEdges: [
      { source: 'cyclone-1', target: 'bridge-1', relation: 'damaged_structure (Pier #3)' }
    ],
    evidence: [
      {
        sourceType: 'Drone Survey & LiDAR',
        title: 'Highway Authority 3D Mesh Inspection',
        timestamp: '40 mins ago',
        confidence: '99.1%',
        icon: 'Video',
        snippet: 'LiDAR point cloud reveals 45cm structural crack on pier #3 due to hydro-dynamic debris impact.',
        verifiedBy: 'NHAI Emergency Engineering Cell'
      }
    ],
    timelineData: [
      { time: 'Pre-Storm', highRisk: 0, affected: 2, safe: 16, waterAvg: 0.1 },
      { time: 'Current', highRisk: 6, affected: 8, safe: 4, waterAvg: 1.8 }
    ]
  },
  {
    id: 'education-floods',
    category: 'Education Accessibility',
    query: 'Which schools are inaccessible because of flooding?',
    intent: 'FIND',
    confidence: 0.93,
    extractedTokens: {
      entity: 'Primary & Higher Secondary Schools',
      event: 'Roadway Inundation',
      location: 'Kanchipuram & Tiruvallur Districts',
      relationship: 'inaccessible_due_to flood',
      timeWindow: 'Active Alert Period'
    },
    summaryStats: {
      totalFound: 84,
      highRisk: 22,
      affected: 39,
      safe: 23,
      predictedRiskIn6h: 10,
      populationExposed: '42K Students',
      roadAccessibility: '55% Operational'
    },
    predictionSummary: '22 schools in low-lying Chembarambakkam outflow zone closed by District Collector order.',
    mapCenter: [12.8342, 79.7036], // Kanchipuram
    mapZoom: 10,
    entities: [
      {
        id: 'sch-1',
        name: 'Government Higher Secondary School',
        category: 'School',
        district: 'Kanchipuram',
        lat: 12.8342,
        lng: 79.7036,
        status: 'Affected',
        severity: 'High',
        roadAccess: 'Submerged Access Road (0.8m)',
        beds: 0,
        icubeds: 0,
        waterLevel: '0.8 m on Approach',
        powerBackup: 'Disconnected for safety',
        evacuationStatus: 'Converted to Relief Camp',
        predictedChangeIn6h: 'Inaccessible till tomorrow evening',
        sensors: { rainfall: '130 mm/24h', flowRate: '8,000 cusecs' }
      }
    ],
    graphNodes: [
      { id: 'sch-1', label: 'Govt Higher Sec School', type: 'entity', status: 'INACCESSIBLE', color: '#F43F5E' },
      { id: 'camp-1', label: 'Relief Center #14', type: 'shelter', status: 'ACTIVE', color: '#10B981' }
    ],
    graphEdges: [
      { source: 'sch-1', target: 'camp-1', relation: 'functioning_as' }
    ],
    evidence: [
      {
        sourceType: 'Collectorate Notification',
        title: 'District School Closure Order #88/2026',
        timestamp: '3 hours ago',
        confidence: '100%',
        icon: 'FileText',
        snippet: 'Official notification declaring holiday for all educational institutions in flooded sectors.',
        verifiedBy: 'Kanchipuram District Administration'
      }
    ],
    timelineData: [
      { time: 'Current', highRisk: 22, affected: 39, safe: 23, waterAvg: 0.8 }
    ]
  },
  {
    id: 'environment-forest',
    category: 'Environmental Change',
    query: 'Show areas where forest cover decreased during the last five years',
    intent: 'COMPARE',
    confidence: 0.97,
    extractedTokens: {
      entity: 'Forest Reserve / Bio-corridor',
      event: 'Canopy Loss & Deforestation',
      location: 'Western Ghats Corridor (Nilgiris, Anamalai)',
      relationship: 'canopy_loss > 15%',
      timeWindow: '5-Year Change Detection (2021-2026)'
    },
    summaryStats: {
      totalFound: 14,
      highRisk: 4,
      affected: 7,
      safe: 3,
      predictedRiskIn6h: 0,
      populationExposed: 'Bio-diversity Corridor',
      roadAccessibility: 'N/A'
    },
    predictionSummary: 'Continuous satellite optical analysis detects 1,420 hectares of dense canopy reduction in Mudumalai buffer zone.',
    mapCenter: [11.5623, 76.5345], // Nilgiris
    mapZoom: 10,
    entities: [
      {
        id: 'forest-1',
        name: 'Mudumalai Tiger Reserve Buffer Zone C',
        category: 'Forest Reserve',
        district: 'Nilgiris',
        lat: 11.5623,
        lng: 76.5345,
        status: 'High Risk',
        severity: 'High',
        roadAccess: 'Forest Patrol Only',
        beds: 0,
        icubeds: 0,
        waterLevel: 'Canopy Loss 22.4%',
        powerBackup: 'N/A',
        evacuationStatus: 'Anti-Encroachment Drive Active',
        predictedChangeIn6h: 'Enforcement monitoring active',
        sensors: { canopyDensity: '52% (was 74%)', tempAnomaly: '+1.8 C' }
      }
    ],
    graphNodes: [
      { id: 'forest-1', label: 'Mudumalai Buffer C', type: 'entity', status: 'DEFORESTED', color: '#EF4444' }
    ],
    graphEdges: [],
    evidence: [
      {
        sourceType: 'Landsat-9 & Sentinel-2',
        title: '5-Year Bi-spectral Canopy Loss Analysis',
        timestamp: 'Yesterday',
        confidence: '99.0%',
        icon: 'Globe',
        snippet: 'Multi-temporal NDVI differencing highlights loss of 1,420 hectares in contiguous moist deciduous forest.',
        verifiedBy: 'Forest Survey of India (FSI)'
      }
    ],
    timelineData: [
      { time: '2021', highRisk: 1, affected: 2, safe: 11, waterAvg: 0 },
      { time: '2026', highRisk: 4, affected: 7, safe: 3, waterAvg: 0 }
    ]
  },
  {
    id: 'public-safety-accidents',
    category: 'Public Safety',
    query: 'Show areas at highest accident risk tonight',
    intent: 'PREDICT',
    confidence: 0.94,
    extractedTokens: {
      entity: 'Blackspot Road Segments',
      event: 'High Speed + Rain Hazard + Fog',
      location: 'NH-44 Expressway (Salem - Karur - Dindigul)',
      relationship: 'risk_score > 8.5/10',
      timeWindow: 'Night Window (20:00 - 04:00)'
    },
    summaryStats: {
      totalFound: 26,
      highRisk: 8,
      affected: 11,
      safe: 7,
      predictedRiskIn6h: 5,
      populationExposed: 'Night Logistics Drivers',
      roadAccessibility: 'Caution Heavy Rain'
    },
    predictionSummary: '8 highway corridors exhibit critical accident probability due to zero visibility, slick asphalt, and heavy freight traffic.',
    mapCenter: [11.6643, 78.1460], // Salem
    mapZoom: 9,
    entities: [
      {
        id: 'road-hazard-1',
        name: 'NH-44 Salem Ghat Section km 142-150',
        category: 'Highway Corridor',
        district: 'Salem',
        lat: 11.6643,
        lng: 78.1460,
        status: 'High Risk',
        severity: 'High',
        roadAccess: 'Speed Restriction 40km/h',
        beds: 0,
        icubeds: 0,
        waterLevel: 'Visibility < 15 meters',
        powerBackup: 'Highway Patrol Strobe Active',
        evacuationStatus: 'Patrol Escort Operational',
        predictedChangeIn6h: 'Fog density peak at 02:00 AM',
        sensors: { frictionCoef: '0.28 (Slick)', visibility: '12 m' }
      }
    ],
    graphNodes: [
      { id: 'hazard-1', label: 'Salem Ghat Blackspot', type: 'entity', status: 'CRITICAL', color: '#EF4444' }
    ],
    graphEdges: [],
    evidence: [
      {
        sourceType: 'Highway AI Camera & Radar',
        title: 'Highway Telematics & Visibility Index',
        timestamp: '10 mins ago',
        confidence: '96.8%',
        icon: 'Eye',
        snippet: 'Real-time telemetry detects hydroplaning risk and severe fog visibility drop below 15 meters.',
        verifiedBy: 'TN Highway Patrol Telematics'
      }
    ],
    timelineData: [
      { time: '18:00', highRisk: 2, affected: 5, safe: 19, waterAvg: 0 },
      { time: '02:00 AM', highRisk: 8, affected: 11, safe: 7, waterAvg: 0 }
    ]
  }
];
