# 🌐 Reality Search Engine

> **An AI-Powered Search & Geospatial Intelligence Platform for Understanding Real-World Situations, Entities, Events, Risks, and Multi-Source Evidence.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-purple?logo=vite)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green?logo=leaflet)](https://leafletjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Build-Passing-brightgreen)]()

---

## 📌 Executive Summary

Traditional search engines index **webpages and text links**. The **Reality Search Engine** queries **real-world situations, physical entities, environmental risks, geospatial relationships, and empirical evidence**.

Instead of returning 10 blue links, a query such as:
> *"Show all hospitals affected by floods in Tamil Nadu"*

produces:
1. 🗺️ **Interactive GIS Map & 3D Globe Digital Twin** (Plotted entities, risk severity circles, road accessibility status, satellite imagery overlays).
2. 📊 **Structured Intelligence Data Grid** (Searchable entity metrics, hospital bed capacity, ICU availability, CSV export).
3. 🕸️ **Reality Knowledge Graph** (Entity $\rightarrow$ Event $\rightarrow$ Location $\rightarrow$ Road Accessibility relationship vectors).
4. 🔮 **AI Predictive Engine & Time Simulation** ($+2\text{h}$ to $+24\text{h}$ hydro-dynamic risk progression forecasting).
5. 🛡️ **Multi-Source Evidence Inspector** (Cross-verified Satellite SAR, Weather Radar, Government Emergency Bulletins, and IoT feeds).
6. 🎛️ **Disaster Simulation Sandbox** (Live climate sliders for rainfall intensity, dam outflow, and sea surge).
7. 🧭 **Autonomous Evacuation Route Optimizer** (Turns-by-turn GIS navigation bypassing submerged roads).
8. 🎙️ **AI Voice Assistant & Regional Language Support** (Text-To-Speech telemetry readouts with English & Tamil தமிழ் UI toggle).

---

## 🏗️ Core Architecture

```text
                                 USER
                                   │
                                   ▼
                        Natural Language Query
                                   │
                                   ▼
                         AI Query Engine
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        ▼                          ▼                          ▼
   Entity                     Location                     Event & Time
 Extraction                  Extraction                     Extraction
        │                          │                          │
        └──────────────────────────┼──────────────────────────┘
                                   ▼
                        Reality Data Engine
                                   │
     ┌─────────────────────────────┼─────────────────────────────┐
     ▼                             ▼                             ▼
 Satellite                       Weather                    Government &
   Data                           Radar                       Sensor IoT
     │                             │                             │
     ├─────────────────────────────┼─────────────────────────────┤
     ▼                             ▼                             ▼
    GIS                        Knowledge                     Web/Data
   Engine                        Graph                        Sources
                                   │
                                   ▼
                         AI Reasoning Engine
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        ▼                          ▼                          ▼
     GIS MAP /                STRUCTURED                  PREDICTIVE
     3D GLOBE                 DATA GRID                   TIMELINE
        │                          │                          │
        └──────────────────────────┼──────────────────────────┘
                                   ▼
                     Reality Intelligence Report
```

---

## 🔥 Key Features & Innovation Modules

### 🌐 1. Interactive 3D Digital Twin Globe
- Canvas-rendered rotating 3D Earth globe with longitude/latitude spatial grid.
- Visualizes orbital trajectories for **Sentinel-2 SAR** and **MODIS** satellites.
- Projects real-world entities directly onto 3D spherical space.

### 🗺️ 2. GIS Interactive Map Component
- Powered by **Leaflet 1.9** with custom dark tiles (`CartoDB.DarkMatter`) + Satellite Hybrid overlay.
- Layer toggles: Satellite Imagery, Weather Radar Overlay, Flood Contours, Emergency Shelters.
- Color-coded pulsing markers:
  - 🔴 **High Risk / Inundated** (Pulsing ring animation)
  - 🟠 **Affected**
  - 🟢 **Safe / Operational**
  - 🟣 **Predicted Risk (+6h)**

### 🎛️ 3. Disaster Simulation Sandbox Engine
- Dynamic climate sliders allowing emergency commanders to tweak parameters in real time:
  - **Rainfall Intensity** ($10 \text{ mm/h} \rightarrow 300 \text{ mm/h}$)
  - **Dam Discharge Outflow** ($2,000 \text{ cusecs} \rightarrow 60,000 \text{ cusecs}$)
  - **Tidal Surge Elevation** ($0.0\text{m} \rightarrow 4.0\text{m}$)
- Calculates real-time flood severity scores, high-risk entity surge counts, and evacuation lead times.

### 🧭 4. Autonomous Evacuation Route & GIS Waypoint Optimizer
- Identifies flood-free evacuation corridors bypassing submerged road segments.
- Turn-by-turn guidance for emergency response drivers with distance and time estimates ($68.5 \text{ km}$, $1\text{h } 14\text{m}$).

### 🎙️ 5. AI Voice Assistant & Multi-Language Support
- Speech synthesis text-to-speech audio telemetry readout (*"Alert: 34 high-risk hospitals in Tamil Nadu..."*).
- Instant UI translation between **English** and **Tamil (தமிழ்)** for regional emergency responders.

---

## 🛠️ Technology Stack

| Tier | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite 5, JavaScript (ES2023) |
| **Styling & UI** | Tailwind CSS 3.4, Lucide Icons, Glassmorphism UI Tokens |
| **GIS & Mapping** | Leaflet 1.9, React-Leaflet, CartoDB Tiles, Esri Satellite, OpenWeather Radar |
| **Data & State** | React Hooks, i18n Localization Engine, HTML5 Canvas 3D |
| **Build & Tooling** | Vite, PostCSS, Autoprefixer, Git |

---

## 📂 Directory Structure

```text
Reality-Search-Engine/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── LICENSE
├── .gitignore
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── SearchBar.jsx
    │   ├── QueryBreakdown.jsx
    │   ├── MapView.jsx
    │   ├── Globe3DView.jsx
    │   ├── DataGrid.jsx
    │   ├── KnowledgeGraph.jsx
    │   ├── PredictionTimeline.jsx
    │   ├── EvidenceInspector.jsx
    │   ├── ScenarioSandbox.jsx
    │   ├── RouteOptimizer.jsx
    │   ├── DroneInspector.jsx
    │   ├── IoTSensorStream.jsx
    │   ├── AIVoiceAssistant.jsx
    │   ├── EntityDrawer.jsx
    │   └── ReportModal.jsx
    ├── data/
    │   └── scenarios.js
    └── utils/
        ├── queryParser.js
        ├── reportGenerator.js
        └── i18n.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation & Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vijaymahes9080/Reality-Search-Engine.git
   cd Reality-Search-Engine
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build Production Bundle**
   ```bash
   npm run build
   ```

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more details.

---

## 👨‍💻 Developer & Author

**Vijay Mahes**  
- **Email:** Vijaypradhap2004@gmail.com  
- **GitHub:** [@vijaymahes9080](https://github.com/vijaymahes9080)  
- **Project Repository:** [Reality-Search-Engine](https://github.com/vijaymahes9080/Reality-Search-Engine.git)
