import React, { useState } from 'react';
import { Send, AlertTriangle, CheckCircle, BellRing } from 'lucide-react';

export default function PublicAlertBanner() {
  const [alertSent, setAlertSent] = useState(false);

  const handleSendAlert = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 3000);
  };

  return (
    <div className="bg-dark-800/90 border border-reality-rose/40 rounded-2xl p-4 shadow-xl backdrop-blur-md font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-2">
        <div className="flex items-center gap-2 text-reality-rose font-bold">
          <BellRing className="w-4 h-4 animate-bounce" /> EMERGENCY BROADCAST & CITIZEN SMS DISPATCHER
        </div>
        <span className="text-[10px] text-gray-400">Target Area: Dindigul & Madurai Districts</span>
      </div>

      <div className="p-2.5 rounded-xl bg-reality-rose/10 border border-reality-rose/30 text-gray-200 mb-3 text-[11px] leading-relaxed">
        🚨 <strong>SDMA OFFICIAL ALERT:</strong> Red Alert for Vaigai basin. Evacuate low-lying hospital premises and move to elevated shelters. Avoid NH-45 causeway due to 1.2m water level.
      </div>

      <button
        onClick={handleSendAlert}
        className="w-full py-2 rounded-xl bg-reality-rose text-white font-bold flex items-center justify-center gap-2 hover:bg-rose-600 transition shadow-lg shadow-reality-rose/20 active:scale-95 text-xs"
      >
        <Send className="w-4 h-4" />
        <span>{alertSent ? 'Broadcast Dispatched to 1.2M Citizens!' : 'Dispatch Emergency Broadcast & Mass SMS'}</span>
      </button>
    </div>
  );
}
