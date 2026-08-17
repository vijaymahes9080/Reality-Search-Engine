import React, { useState } from 'react';
import { X, Copy, Download, Check, FileText, Printer } from 'lucide-react';
import { generateMarkdownReport } from '../utils/reportGenerator';

export default function ReportModal({ scenario, activeTimeWindow, onClose }) {
  const [copied, setCopied] = useState(false);
  const markdownText = generateMarkdownReport(scenario, activeTimeWindow);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Reality_Report_${scenario.id}_${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[3000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-dark-900 border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-dark-800/90">
          <div className="flex items-center gap-2 text-reality-cyan">
            <FileText className="w-5 h-5" />
            <h2 className="text-base font-bold font-mono tracking-wide text-gray-100">
              REALITY INTELLIGENCE REPORT GENERATOR
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-gray-700 hover:border-reality-cyan text-xs font-mono text-gray-300 hover:text-white transition"
            >
              {copied ? <Check className="w-4 h-4 text-reality-emerald" /> : <Copy className="w-4 h-4 text-reality-cyan" />}
              <span>{copied ? 'Copied!' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-reality-cyan to-blue-600 hover:from-cyan-400 text-black font-bold text-xs transition"
            >
              <Download className="w-4 h-4" />
              <span>Download Report (.md)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-dark-900 border border-gray-700 hover:text-white text-gray-400 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Report Content Preview */}
        <div className="p-6 overflow-y-auto font-mono text-xs leading-relaxed text-gray-300 bg-dark-950 space-y-4">
          <div className="bg-dark-900 border border-gray-800 p-4 rounded-xl space-y-2">
            <div className="text-reality-cyan font-bold text-sm">
              QUERY: "{scenario.query}"
            </div>
            <div className="text-gray-400">
              INTENT: <span className="text-white font-bold">{scenario.intent}</span> | CONFIDENCE: <span className="text-reality-emerald font-bold">{(scenario.confidence * 100).toFixed(1)}%</span>
            </div>
            <div className="text-gray-400">
              PREDICTION WINDOW: <span className="text-reality-amber font-bold">{activeTimeWindow}</span>
            </div>
          </div>

          {/* Render Markdown formatted text */}
          <pre className="whitespace-pre-wrap font-mono text-xs text-gray-200 bg-dark-900 p-4 rounded-xl border border-gray-800 selection:bg-reality-cyan selection:text-black">
            {markdownText}
          </pre>
        </div>
      </div>
    </div>
  );
}
