"use client";

import React from "react";
import {
  Trash2,
  Recycle,
  Leaf,
  Package,
  CheckCircle,
  LucideIcon
} from "lucide-react";

export type WasteType = "organic" | "recyclable" | "hazardous" | "other";

interface WasteTypeSelectorProps {
  value?: WasteType;
  onChange?: (value: WasteType) => void;
}

const wasteTypes: {
  key: WasteType;
  label: string;
  icon: LucideIcon;
  emoji: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
}[] = [
  {
    key: "organic",
    label: "Rác hữu cơ",
    icon: Leaf,
    emoji: "🌱",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-300",
    textColor: "text-green-700",
    iconColor: "text-green-600"
  },
  {
    key: "recyclable",
    label: "Tái chế",
    icon: Recycle,
    emoji: "♻️",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-300",
    textColor: "text-blue-700",
    iconColor: "text-blue-600"
  },
  {
    key: "hazardous",
    label: "Nguy hại",
    icon: Trash2,
    emoji: "⚠️",
    bgGradient: "from-orange-50 to-red-50",
    borderColor: "border-orange-300",
    textColor: "text-orange-700",
    iconColor: "text-orange-600"
  },
  {
    key: "other",
    label: "Khác",
    icon: Package,
    emoji: "📦",
    bgGradient: "from-slate-50 to-gray-50",
    borderColor: "border-slate-300",
    textColor: "text-slate-700",
    iconColor: "text-slate-600"
  }
];

const WasteTypeSelector: React.FC<WasteTypeSelectorProps> = ({
  value,
  onChange
}) => {
  return (
    <div className="space-y-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes checkAppear {
          from {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        .slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .check-appear {
          animation: checkAppear 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .waste-card {
          opacity: 0;
        }
      `}</style>

      <label
        className="flex items-center gap-2 text-sm font-bold text-green-700"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="w-6 h-6 rounded-lg bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
          <Recycle className="w-3.5 h-3.5 text-green-600" strokeWidth={2.5} />
        </div>
        Loại rác
        <span className="text-red-500">*</span>
      </label>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {wasteTypes.map((type, index) => {
          const isActive = value === type.key;
          const Icon = type.icon;

          return (
            <button
              key={type.key}
              type="button"
              onClick={() => onChange?.(type.key)}
              className={`waste-card slide-in group relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 ${
                isActive
                  ? `bg-linear-to-br ${type.bgGradient} ${type.borderColor} shadow-lg scale-105`
                  : `bg-white border-gray-200 hover:border-gray-300 hover:shadow-md`
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

              {/* Selected checkmark */}
              {isActive && (
                <div className="absolute top-2 right-2 check-appear">
                  <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
                    <CheckCircle
                      className={`w-5 h-5 ${type.iconColor}`}
                      strokeWidth={2.5}
                      fill="currentColor"
                    />
                  </div>
                </div>
              )}

              <div className="relative flex flex-col items-center text-center space-y-3">
                {/* Emoji */}
                <div
                  className={`text-4xl mb-1 transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  {type.emoji}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? `bg-white shadow-md ${type.iconColor}`
                      : `bg-linear-to-br ${type.bgGradient} ${type.iconColor} group-hover:scale-110`
                  }`}
                >
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                </div>

                {/* Label */}
                <div>
                  <div
                    className={`font-bold text-base transition-colors duration-300 ${
                      isActive ? type.textColor : "text-gray-700"
                    }`}
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {type.label}
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              {isActive && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${
                    type.key === "organic"
                      ? "from-green-400 to-emerald-500"
                      : type.key === "recyclable"
                      ? "from-blue-400 to-cyan-500"
                      : type.key === "hazardous"
                      ? "from-orange-400 to-red-500"
                      : "from-slate-400 to-gray-500"
                  } rounded-b-2xl`}
                ></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected indicator */}
      {value && (
        <div className="flex items-center gap-2 text-sm slide-in">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span
            className="font-semibold text-green-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Đã chọn: {wasteTypes.find((t) => t.key === value)?.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default WasteTypeSelector;
