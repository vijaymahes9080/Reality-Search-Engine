import React, { useState } from 'react';
import { Table, Search, Filter, Download, ExternalLink, AlertTriangle, ShieldCheck, AlertCircle } from 'lucide-react';

export default function DataGrid({ scenario, onSelectEntity }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredEntities = scenario.entities.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = severityFilter === 'ALL' || e.severity.toUpperCase() === severityFilter;
    const matchesStatus = statusFilter === 'ALL' || e.status.toUpperCase() === statusFilter;

    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const exportCSV = () => {
    const headers = ['Name', 'Category', 'District', 'Status', 'Severity', 'Road Access', 'Water/Condition'];
    const rows = filteredEntities.map(e => [
      `"${e.name}"`,
      `"${e.category}"`,
      `"${e.district}"`,
      `"${e.status}"`,
      `"${e.severity}"`,
      `"${e.roadAccess}"`,
      `"${e.waterLevel}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Reality_Search_${scenario.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSeverityBadge = (severity) => {
    if (severity === 'High') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-reality-rose/20 text-reality-rose border border-reality-rose/40 flex items-center gap-1 w-fit">
          <AlertTriangle className="w-3 h-3" /> High
        </span>
      );
    }
    if (severity === 'Medium') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-reality-amber/20 text-reality-amber border border-reality-amber/40 flex items-center gap-1 w-fit">
          <AlertCircle className="w-3 h-3" /> Medium
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-reality-emerald/20 text-reality-emerald border border-reality-emerald/40 flex items-center gap-1 w-fit">
        <ShieldCheck className="w-3 h-3" /> Safe
      </span>
    );
  };

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      {/* Table Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Table className="w-5 h-5 text-reality-cyan" />
          <h3 className="text-sm font-bold font-mono uppercase text-gray-200">
            Structured Intelligence Data Grid ({filteredEntities.length} Entities)
          </h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search table..."
              className="bg-dark-900 text-xs text-gray-200 placeholder-gray-500 pl-9 pr-3 py-1.5 rounded-lg border border-gray-700 focus:border-reality-cyan focus:outline-none"
            />
          </div>

          {/* Severity Select */}
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="bg-dark-900 text-xs text-gray-300 border border-gray-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-reality-cyan"
          >
            <option value="ALL">Severity: All</option>
            <option value="HIGH">High Severity</option>
            <option value="MEDIUM">Medium Severity</option>
            <option value="LOW">Low / Safe</option>
          </select>

          {/* Export CSV Button */}
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-gray-700 hover:border-reality-cyan text-xs font-mono text-gray-300 hover:text-white transition"
          >
            <Download className="w-3.5 h-3.5 text-reality-cyan" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-dark-900 text-gray-400 font-mono text-[11px] uppercase border-b border-gray-800">
            <tr>
              <th className="py-3 px-4">Entity / Name</th>
              <th className="py-3 px-4">District</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Severity</th>
              <th className="py-3 px-4">Road Accessibility</th>
              <th className="py-3 px-4">Water / Sensor State</th>
              <th className="py-3 px-4 text-right">Inspect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-200 font-medium">
            {filteredEntities.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-8 text-center text-gray-500 font-mono">
                  No matching entities found.
                </td>
              </tr>
            ) : (
              filteredEntities.map((entity) => (
                <tr 
                  key={entity.id} 
                  className="hover:bg-dark-700/50 transition cursor-pointer"
                  onClick={() => onSelectEntity(entity)}
                >
                  <td className="py-3 px-4 font-semibold text-white">
                    <div>{entity.name}</div>
                    <div className="text-[10px] font-mono text-gray-500">{entity.category}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{entity.district}</td>
                  <td className="py-3 px-4">
                    <span className={`font-mono text-xs ${
                      entity.status === 'High Risk' ? 'text-reality-rose font-bold' :
                      entity.status === 'Affected' ? 'text-reality-amber font-semibold' :
                      entity.status === 'Predicted Risk' ? 'text-reality-purple font-semibold' :
                      'text-reality-emerald'
                    }`}>
                      {entity.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{getSeverityBadge(entity.severity)}</td>
                  <td className="py-3 px-4 text-gray-300 font-mono">{entity.roadAccess}</td>
                  <td className="py-3 px-4 text-gray-300 font-mono">{entity.waterLevel}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectEntity(entity);
                      }}
                      className="p-1.5 rounded bg-dark-900 border border-gray-700 hover:border-reality-cyan text-reality-cyan hover:bg-reality-cyan/20 transition"
                      title="Inspect Entity Details"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
