"use client";

import React from "react";
import {
  Package,
  TrendingUp,
  Archive,
  BarChart3,
  Sparkles
} from "lucide-react";
import CapacityStatusBadge, { CapacityStatus } from "./CapacityStatusBadge";

interface CapacitySummaryProps {
  maxCapacity: number;
  usedCapacity: number;
}

const CapacitySummary: React.FC<CapacitySummaryProps> = ({
  maxCapacity,
  usedCapacity
}) => {
  const remaining = maxCapacity - usedCapacity;
  const usageRatio = usedCapacity / maxCapacity;
  const usagePercent = Math.round(usageRatio * 100);

  const status: CapacityStatus =
    usageRatio >= 1 ? "overload" : usageRatio >= 0.8 ? "warning" : "available";

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-green-200/50 p-8 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes progressFill {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .progress-fill {
          animation: progressFill 1.5s ease-out;
          transform-origin: left;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .stat-card {
          opacity: 0;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="currentColor"
            className="text-green-500"
            opacity="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="currentColor"
            className="text-green-500"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-green-200/50">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" strokeWidth={2.5} />
            {status === "warning" || status === "overload"
              ? <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 pulse-ring" />
              : null}
          </div>

          <div>
            <h3
              className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Tóm Tắt Năng Lực
            </h3>
            <p
              className="text-sm text-green-600 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Theo dõi mức sử dụng năng lực
            </p>
          </div>
        </div>

        <CapacityStatusBadge status={status} size="lg" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Max Capacity */}
        <div
          className="stat-card slide-in group relative bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Hover shimmer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <Package className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>

            <div className="flex-1">
              <p
                className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Tối đa
              </p>
              <p
                className="text-3xl font-black text-blue-700"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {maxCapacity}
              </p>
              <p
                className="text-xs font-semibold text-blue-600 mt-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                kg/ngày
              </p>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-400 to-cyan-500" />
        </div>

        {/* Used Capacity */}
        <div
          className="stat-card slide-in group relative bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border-2 border-orange-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Hover shimmer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>

            <div className="flex-1">
              <p
                className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Đang sử dụng
              </p>
              <p
                className="text-3xl font-black text-orange-700"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {usedCapacity}
              </p>
              <p
                className="text-xs font-semibold text-orange-600 mt-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                kg/ngày
              </p>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 to-amber-500" />
        </div>

        {/* Remaining Capacity */}
        <div
          className={`stat-card slide-in group relative rounded-2xl p-5 border-2 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${remaining <
          0
            ? "bg-linear-to-br from-red-50 to-rose-50 border-red-200"
            : "bg-linear-to-br from-green-50 to-emerald-50 border-green-200"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {/* Hover shimmer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="relative flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ${remaining <
              0
                ? "bg-linear-to-br from-red-400 to-rose-500"
                : "bg-linear-to-br from-green-400 to-emerald-500"}`}
            >
              <Archive className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>

            <div className="flex-1">
              <p
                className={`text-xs font-bold uppercase tracking-wide mb-1 ${remaining <
                0
                  ? "text-red-600"
                  : "text-green-600"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Còn lại
              </p>
              <p
                className={`text-3xl font-black ${remaining < 0
                  ? "text-red-700"
                  : "text-green-700"}`}
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {remaining}
              </p>
              <p
                className={`text-xs font-semibold mt-1 ${remaining < 0
                  ? "text-red-600"
                  : "text-green-600"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                kg/ngày
              </p>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 ${remaining < 0
              ? "bg-linear-to-r from-red-400 to-rose-500"
              : "bg-linear-to-r from-green-400 to-emerald-500"}`}
          />
        </div>
      </div>

      {/* Progress Bar Section */}
      <div
        className="stat-card slide-in bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span
              className="font-bold text-green-800"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Mức Sử Dụng
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-sm font-semibold text-green-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {usagePercent}%
            </span>
            <div
              className={`text-2xl font-black ${status === "overload"
                ? "text-red-600"
                : status === "warning" ? "text-amber-600" : "text-green-600"}`}
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {usagePercent}%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-4 bg-white rounded-full overflow-hidden border-2 border-green-200 shadow-inner">
          <div
            className={`h-full progress-fill rounded-full relative ${status ===
            "overload"
              ? "bg-linear-to-r from-red-500 to-rose-600"
              : status === "warning"
                ? "bg-linear-to-r from-amber-400 to-yellow-500"
                : "bg-linear-to-r from-green-500 to-emerald-600"}`}
            style={{
              width: `${Math.min(usagePercent, 100)}%`
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent" />
          </div>

          {/* Indicator dot at progress point */}
          {usagePercent <= 100 &&
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000"
              style={{ left: `${usagePercent}%` }}
            >
              <div
                className={`w-6 h-6 -ml-3 rounded-full border-3 border-white flex items-center justify-center shadow-lg ${status ===
                "overload"
                  ? "bg-red-500"
                  : status === "warning" ? "bg-amber-500" : "bg-green-500"}`}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>}
        </div>

        {/* Progress Labels */}
        <div
          className="flex justify-between mt-3 text-xs font-semibold text-green-600"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span>0%</span>
          <span className={status === "warning" ? "text-amber-600" : ""}>
            80%
          </span>
          <span className="text-red-600">100%</span>
        </div>
      </div>

      {/* Status Message */}
      {status === "overload" &&
        <div
          className="stat-card slide-in mt-4 bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-start gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-1" />
          <div>
            <div
              className="font-bold text-red-800 mb-1"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Cảnh báo quá tải!
            </div>
            <div
              className="text-sm text-red-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Năng lực đã vượt mức cho phép. Vui lòng điều chỉnh lại phân công
              nhiệm vụ.
            </div>
          </div>
        </div>}

      {status === "warning" &&
        <div
          className="stat-card slide-in mt-4 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mt-1" />
          <div>
            <div
              className="font-bold text-amber-800 mb-1"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Sắp đạt giới hạn
            </div>
            <div
              className="text-sm text-amber-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Năng lực đang gần đạt mức tối đa. Hãy cân nhắc trước khi nhận thêm
              nhiệm vụ.
            </div>
          </div>
        </div>}

      {status === "available" &&
        <div
          className="stat-card slide-in mt-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-start gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 mt-1" />
          <div>
            <div
              className="font-bold text-green-800 mb-1"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Năng lực khả dụng
            </div>
            <div
              className="text-sm text-green-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bạn vẫn còn {remaining} kg năng lực để nhận thêm nhiệm vụ.
            </div>
          </div>
        </div>}
    </div>
  );
};

export default CapacitySummary;
