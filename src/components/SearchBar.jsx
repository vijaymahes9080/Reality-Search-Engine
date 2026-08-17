import React, { useState } from 'react';
import { Search, Mic, Sparkles, X, ArrowRight } from 'lucide-react';

export default function SearchBar({ onSearch, currentQuery }) {
  const [query, setQuery] = useState(currentQuery || '');
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleVoiceSim = () => {
    setIsListening(true);
    setTimeout(() => {
      setQuery('Show all hospitals affected by floods in Tamil Nadu');
      setIsListening(false);
      onSearch('Show all hospitals affected by floods in Tamil Nadu');
    }, 1500);
  };

  const samplePrompts = [
    '“Show all hospitals affected by floods in Tamil Nadu”',
    '“Which schools are inaccessible because of flooding?”',
    '“Which farms are experiencing drought stress in Delta region?”',
    '“Show bridges damaged after the cyclone”'
  ];

  return (
    <div className="w-full bg-dark-800/80 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="absolute left-4 text-reality-cyan">
          <Search className="w-6 h-6 animate-pulse" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a Reality Query (e.g., 'Show all hospitals affected by floods in Tamil Nadu')..."
          className="w-full bg-dark-900/90 text-gray-100 placeholder-gray-500 font-sans text-base lg:text-lg pl-14 pr-32 py-4 rounded-xl border border-gray-700/60 focus:border-reality-cyan focus:outline-none focus:ring-2 focus:ring-reality-cyan/30 transition-all shadow-inner"
        />

        <div className="absolute right-3 flex items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-2 text-gray-400 hover:text-white transition"
              title="Clear Search"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <button
            type="button"
            onClick={handleVoiceSim}
            className={`p-2.5 rounded-lg border transition ${
              isListening
                ? 'bg-reality-rose/20 text-reality-rose border-reality-rose animate-ping'
                : 'bg-dark-800 text-gray-400 border-gray-700 hover:text-white hover:border-gray-500'
            }`}
            title="Simulate Voice Input"
          >
            <Mic className="w-5 h-5" />
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-reality-cyan via-blue-500 to-reality-purple hover:opacity-90 text-black font-bold text-sm tracking-wide transition shadow-md shadow-reality-cyan/20 active:scale-95"
          >
            <span>Execute</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Suggested Query Prompts */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-gray-400 font-mono flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-reality-amber" /> Suggested Reality Queries:
        </span>
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              const cleanText = prompt.replace(/[“”]/g, '');
              setQuery(cleanText);
              onSearch(cleanText);
            }}
            className="text-gray-300 hover:text-reality-cyan bg-dark-900/60 hover:bg-dark-900 border border-gray-700/50 hover:border-reality-cyan/40 px-2.5 py-1 rounded-md transition font-mono truncate max-w-xs"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
