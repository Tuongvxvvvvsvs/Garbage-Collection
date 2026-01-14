"use client";

import React from "react";
import { MapPin, Calendar, Recycle, AlertTriangle } from "lucide-react";

interface TaskInfoProps {
  location: string;
  date: string;
  category: string;
  note?: string;
}

const TaskInfo: React.FC<TaskInfoProps> = ({
  location,
  date,
  category,
  note
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
          }
        }
        
        .slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .info-row {
          opacity: 0;
        }
        
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="info-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-green-500"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#info-dots)"/>
        </svg>
      </div>

      {/* Header */}
      <div className="relative mb-6 pb-4 border-b-2 border-green-200/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg pulse-glow">
            <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h2 
            className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Thông Tin Nhiệm Vụ
          </h2>
        </div>
      </div>

      {/* Info Rows */}
      <div className="space-y-4 relative">
        <div className="info-row slide-in-right" style={{ animationDelay: '0.1s' }}>
          <InfoRow
            icon={<MapPin className="w-5 h-5 text-green-600" />}
            label="Vị trí thu gom"
            value={location}
          />
        </div>

        <div className="info-row slide-in-right" style={{ animationDelay: '0.2s' }}>
          <InfoRow
            icon={<Calendar className="w-5 h-5 text-blue-600" />}
            label="Thời gian"
            value={date}
          />
        </div>

        <div className="info-row slide-in-right" style={{ animationDelay: '0.3s' }}>
          <InfoRow
            icon={<Recycle className="w-5 h-5 text-emerald-600" />}
            label="Loại rác"
            value={category}
          />
        </div>

        {note && (
          <div className="info-row slide-in-right" style={{ animationDelay: '0.4s' }}>
            <InfoRow
              icon={<AlertTriangle className="w-5 h-5 text-orange-600" />}
              label="Ghi chú quan trọng"
              value={note}
              highlight
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskInfo;

/* ---------------- Sub Component ---------------- */
const InfoRow = ({
  icon,
  label,
  value,
  highlight = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div
    className={`group relative flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
      highlight
        ? "bg-linear-to-br from-orange-50 to-amber-50 border-orange-300 hover:border-orange-400"
        : "bg-linear-to-br from-green-50 to-emerald-50 border-green-200/60 hover:border-green-300"
    }`}
  >
    {/* Accent Bar */}
    <div 
      className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-2 ${
        highlight ? "bg-linear-to-b from-orange-400 to-amber-500" : "bg-linear-to-b from-green-400 to-emerald-500"
      }`}
    ></div>

    {/* Icon Container */}
    <div className={`relative w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
      highlight ? "group-hover:shadow-orange-200" : "group-hover:shadow-green-200"
    }`}>
      {icon}
      {/* Icon Glow Effect */}
      <div className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
        highlight ? "bg-orange-400" : "bg-green-400"
      }`}></div>
    </div>

    {/* Text Content */}
    <div className="flex-1 min-w-0">
      <div
        className={`text-xs font-bold uppercase tracking-wider mb-2 transition-colors duration-300 ${
          highlight ? "text-orange-600 group-hover:text-orange-700" : "text-green-600 group-hover:text-green-700"
        }`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </div>
      <div
        className={`text-lg font-bold leading-tight transition-colors duration-300 ${
          highlight ? "text-orange-900" : "text-green-900"
        }`}
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {value}
      </div>
    </div>

    {/* Corner Decoration */}
    <div className={`absolute top-2 right-2 w-2 h-2 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150 ${
      highlight ? "bg-orange-400" : "bg-green-400"
    }`}></div>
  </div>
);