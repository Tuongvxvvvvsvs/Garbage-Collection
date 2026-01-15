"use client";

import React, { useState } from "react";
import {
  Gift,
  Coins,
  Leaf,
  Pencil,
  Trash2,
  XCircle,
  Scale,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";

export type RewardRuleStatus = "active" | "inactive";

interface RuleItemProps {
  name: string;
  wasteType: "organic" | "recycle" | "electronic" | "hazardous";
  points: number;
  minWeight: number;
  status: RewardRuleStatus;
  onEdit?: () => void;
  onDelete?: () => void;
}

const wasteTypeConfig = {
  organic: {
    label: "Hữu cơ",
    icon: "🌱",
    gradient: "from-green-500 to-emerald-600",
    bg: "from-green-50 to-emerald-50",
    color: "text-green-700",
    iconBg: "from-green-400 to-emerald-500"
  },
  recycle: {
    label: "Tái chế",
    icon: "♻️",
    gradient: "from-blue-500 to-cyan-600",
    bg: "from-blue-50 to-cyan-50",
    color: "text-blue-700",
    iconBg: "from-blue-400 to-cyan-500"
  },
  electronic: {
    label: "Điện tử",
    icon: "🔌",
    gradient: "from-purple-500 to-pink-600",
    bg: "from-purple-50 to-pink-50",
    color: "text-purple-700",
    iconBg: "from-purple-400 to-pink-500"
  },
  hazardous: {
    label: "Nguy hại",
    icon: "⚠️",
    gradient: "from-red-500 to-orange-600",
    bg: "from-red-50 to-orange-50",
    color: "text-red-700",
    iconBg: "from-red-400 to-orange-500"
  }
};

const RuleItem: React.FC<RuleItemProps> = ({
  name,
  wasteType,
  points,
  minWeight,
  status,
  onEdit,
  onDelete
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const waste = wasteTypeConfig[wasteType];

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 20px 40px -12px rgba(0, 0, 0, 0.12)"
          : "0 2px 8px -1px rgba(0, 0, 0, 0.06)"
      }}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-linear-to-r ${waste.gradient}`}>
        {status === "active" && (
          <div className="h-full w-1/3 bg-white/40 animate-shimmer" />
        )}
      </div>

      {/* Border with gradient on hover */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 transition-colors duration-500 ${
          isHovered ? `border-transparent` : "border-gray-200"
        }`}
      />
      <div
        className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          borderImage: `linear-gradient(135deg, ${
            waste.gradient.includes("green")
              ? "#10b981, #059669"
              : waste.gradient.includes("blue")
              ? "#3b82f6, #06b6d4"
              : waste.gradient.includes("purple")
              ? "#a855f7, #ec4899"
              : "#ef4444, #f97316"
          }) 1`
        }}
      />

      <div className="relative p-6 space-y-5">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          {/* Left info */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Icon with type badge */}
            <div className="relative shrink-0">
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${waste.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                <Gift className="w-7 h-7 text-white" />
              </div>
              {/* Waste type emoji badge */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-gray-100 group-hover:scale-110 transition-transform">
                <span className="text-lg">{waste.icon}</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="text-xl font-black text-gray-900 mb-3 leading-tight"
                style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
              >
                {name}
              </h3>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Waste type badge */}
                <div
                  className={`group/badge flex items-center gap-2 px-3 py-2 rounded-xl bg-linear-to-br ${
                    waste.bg
                  } border ${
                    waste.gradient.includes("green")
                      ? "border-green-200"
                      : waste.gradient.includes("blue")
                      ? "border-blue-200"
                      : waste.gradient.includes("purple")
                      ? "border-purple-200"
                      : "border-red-200"
                  } font-bold text-sm ${
                    waste.color
                  } shadow-sm group-hover/badge:scale-105 transition-transform`}
                >
                  <Leaf className="w-4 h-4" />
                  <span>{waste.label}</span>
                </div>

                {/* Weight badge */}
                <div className="group/badge flex items-center gap-2 px-3 py-2 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200 font-bold text-sm text-blue-700 shadow-sm group-hover/badge:scale-105 transition-transform">
                  <Scale className="w-4 h-4" />
                  <span>≥ {minWeight} kg</span>
                </div>

                {/* Points badge */}
                <div className="group/badge flex items-center gap-2 px-3 py-2 rounded-xl bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 font-bold text-sm text-amber-700 shadow-sm group-hover/badge:scale-105 transition-transform">
                  <Coins className="w-4 h-4" />
                  <span>+{points} điểm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Status badge */}
            <div
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border-2 shadow-lg transition-all duration-300 ${
                status === "active"
                  ? "bg-linear-to-br from-emerald-50 to-teal-50 border-emerald-200 text-emerald-700"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-lg ${
                  status === "active"
                    ? "bg-linear-to-br from-emerald-500 to-teal-600"
                    : "bg-gray-400"
                }`}
              >
                {status === "active" ? (
                  <Zap className="w-3.5 h-3.5 text-white" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 text-white" />
                )}
              </div>
              <span className="hidden sm:inline">
                {status === "active" ? "Hoạt động" : "Tạm dừng"}
              </span>
              {status === "active" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {/* Edit button */}
              <button
                onClick={onEdit}
                className="group/edit relative w-10 h-10 rounded-xl border-2 border-gray-200 hover:border-emerald-300 bg-white hover:bg-linear-to-br hover:from-emerald-50 hover:to-teal-50 text-gray-600 hover:text-emerald-600 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                title="Chỉnh sửa"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-100 to-transparent translate-x-[-200%] group-hover/edit:translate-x-[200%] transition-transform duration-700" />
                <Pencil className="w-4 h-4 relative group-hover/edit:scale-110 transition-transform" />
              </button>

              {/* Delete button */}
              <button
                onClick={onDelete}
                className="group/delete relative w-10 h-10 rounded-xl border-2 border-gray-200 hover:border-red-300 bg-white hover:bg-linear-to-br hover:from-red-50 hover:to-orange-50 text-gray-500 hover:text-red-600 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                title="Xóa"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-red-100 to-transparent translate-x-[-200%] group-hover/delete:translate-x-[200%] transition-transform duration-700" />
                <Trash2 className="w-4 h-4 relative group-hover/delete:scale-110 group-hover/delete:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats bar (optional - shown on hover for active rules) */}
        {status === "active" && (
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="font-semibold">
                    Tỷ lệ:{" "}
                    <span className="text-gray-900 font-bold">
                      {(points / minWeight).toFixed(1)} điểm/kg
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold">Hiệu quả cao</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default RuleItem;
