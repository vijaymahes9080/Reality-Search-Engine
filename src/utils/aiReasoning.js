export function generateCausalChainAnalysis(scenario) {
  return {
    rootCause: `Heavy cloudburst catchment inflow exceeding 145 mm/24h combined with peak outflow release from upstream reservoirs.`,
    causalSteps: [
      { step: 1, trigger: "Excess Catchment Rainfall", impact: "Upstream dam storage reaches 96% capacity." },
      { step: 2, trigger: "Dam Gate Opening (22,000 cusecs)", impact: "Downstream river basin water level rises by +1.4m." },
      { step: 3, trigger: "High Tidal Surge Elevation", impact: "Estuary backwater prevents ocean drainage, inundating low-lying hospital sectors." },
      { step: 4, trigger: "Road Access Submergence", impact: "NH-45 causeway blocked under 1.2m of standing water." }
    ],
    recommendedMitigation: [
      "Deploy motorboats along elevated bypass corridors.",
      "Initiate patient evacuation to regional trauma hubs.",
      "Activate secondary diesel generators for critical ICU ventilators."
    ]
  };
}
