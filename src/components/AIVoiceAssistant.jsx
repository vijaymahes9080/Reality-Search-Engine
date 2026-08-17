import React, { useState, useEffect } from 'react';
import { Mic, Volume2, VolumeX, Radio, Sparkles, Activity, Bot } from 'lucide-react';

export default function AIVoiceAssistant({ scenario, onVoiceQuery }) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [autoReadout, setAutoReadout] = useState(true);

  // Web Speech API Text-To-Speech Synthesis
  const speakTelemetry = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleReadout = () => {
    const summaryText = `Reality Intelligence Report. Query: ${scenario.query}. Total entities found: ${scenario.summaryStats.totalFound}. High risk entities: ${scenario.summaryStats.highRisk}. ${scenario.predictionSummary}`;
    speakTelemetry(summaryText);
  };

  const toggleVoiceListening = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    setTranscript('Listening for natural language reality query...');

    // Simulate voice speech recognition
    setTimeout(() => {
      const simulatedText = "Show all hospitals affected by floods in Tamil Nadu";
      setTranscript(`Recognized: "${simulatedText}"`);
      setIsListening(false);
      if (onVoiceQuery) {
        onVoiceQuery(simulatedText);
      }
    }, 2500);
  };

  return (
    <div className="bg-dark-800/90 border border-gray-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-reality-cyan/10 border border-reality-cyan/30 text-reality-cyan">
            <Bot className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <h3 className="text-sm font-bold font-mono uppercase text-gray-200 flex items-center gap-2">
              AI Conversational Voice Assistant
              <span className="px-2 py-0.5 text-[10px] bg-reality-purple/20 text-reality-purple border border-reality-purple/40 rounded-full">VOICE AGENT</span>
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Hands-free voice querying & acoustic telemetry readouts for emergency responders
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Voice Speech Synthesis Readout Trigger */}
          <button
            onClick={handleReadout}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition border ${
              isSpeaking
                ? 'bg-reality-rose/20 text-reality-rose border-reality-rose animate-pulse'
                : 'bg-dark-900 text-gray-300 border-gray-700 hover:border-reality-cyan hover:text-white'
            }`}
          >
            {isSpeaking ? <Volume2 className="w-4 h-4 text-reality-rose" /> : <Volume2 className="w-4 h-4 text-reality-cyan" />}
            <span>{isSpeaking ? 'Speaking Telemetry...' : 'Audio Telemetry Readout'}</span>
          </button>

          {/* Voice Input Trigger */}
          <button
            onClick={toggleVoiceListening}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition border ${
              isListening
                ? 'bg-reality-rose text-white border-reality-rose shadow-lg shadow-reality-rose/30 animate-pulse'
                : 'bg-gradient-to-r from-reality-cyan to-blue-600 text-black border-reality-cyan hover:opacity-90 font-bold'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>{isListening ? 'Listening...' : 'Voice Query'}</span>
          </button>
        </div>
      </div>

      {/* Voice Waveform & Transcript Display */}
      {(isListening || transcript) && (
        <div className="mt-3 p-3 rounded-xl bg-dark-900 border border-gray-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-reality-cyan">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>{transcript}</span>
          </div>

          {isListening && (
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-4 bg-reality-cyan animate-pulse"></span>
              <span className="w-1.5 h-6 bg-reality-purple animate-pulse delay-75"></span>
              <span className="w-1.5 h-3 bg-reality-rose animate-pulse delay-150"></span>
              <span className="w-1.5 h-5 bg-reality-emerald animate-pulse delay-100"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
