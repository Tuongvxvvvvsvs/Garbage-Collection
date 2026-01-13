import { Camera } from "lucide-react";
import React from "react";
interface MainProps {
  onReport: () => void;
}
const MainCTA: React.FC<MainProps> = ({ onReport }) => {
  return (
    <button
      onClick={onReport}
      className="w-full bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 active:scale-95 text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 font-semibold text-base transition-all relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
      <Camera className="w-6 h-6" />
      Report Waste Now
      <span className="bg-white/20 px-2 py-1 rounded-lg text-xs">+50 pts</span>
    </button>
  );
};

export default MainCTA;
