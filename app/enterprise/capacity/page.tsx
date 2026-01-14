"use client";

import React, { useState } from "react";
import CapacitySummary from "./components/CapacitySummary";
import CapacityRuleTable, {
  CapacityRule
} from "./components/CapacityRuleTable";
import EditCapacity from "./edit/page";
import { BarChart3, Plus, Sparkles, TrendingUp, Package } from "lucide-react";

const Capacity: React.FC = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState<CapacityRule | null>(
    null
  );

  // Demo data for CapacitySummary
  const capacityData = {
    maxCapacity: 1000,
    usedCapacity: 650
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.7);
          }
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .float-icon {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #047857 0%, #10b981 50%, #047857 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .section {
          opacity: 0;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 float-icon">
          <Package className="w-32 h-32 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "3s" }}
        >
          <TrendingUp className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="fade-in">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern
                      id="capacity-dots"
                      x="0"
                      y="0"
                      width="15"
                      height="15"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="7.5"
                        cy="7.5"
                        r="1.5"
                        fill="currentColor"
                        className="text-green-500"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#capacity-dots)" />
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left - Title */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg pulse-glow float-icon">
                    <BarChart3
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1
                        className="text-4xl md:text-5xl font-black shimmer-text"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Quản Lý Năng Lực
                      </h1>
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </div>
                    <p
                      className="text-lg text-green-600 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Theo dõi và điều chỉnh năng lực thu gom của đội ngũ
                    </p>
                  </div>
                </div>

                {/* Right - Action Button */}
                <button
                  onClick={() => {
                    setSelectedCapacity(null);
                    setOpenEdit(true);
                  }}
                  className="group relative px-8 py-4 rounded-2xl bg-linear-to-r from-green-500 via-emerald-500 to-green-600 text-white font-black text-lg hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <Plus
                    className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-90"
                    strokeWidth={2.5}
                  />
                  <span className="relative z-10">Khai báo năng lực</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className="section fade-in grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ animationDelay: "0.1s" }}
          >
            <StatCard
              icon={
                <Package className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
              }
              label="Tổng năng lực"
              value={`${capacityData.maxCapacity} kg`}
              color="blue"
            />
            <StatCard
              icon={
                <TrendingUp
                  className="w-6 h-6 text-orange-600"
                  strokeWidth={2.5}
                />
              }
              label="Đang sử dụng"
              value={`${capacityData.usedCapacity} kg`}
              color="orange"
            />
            <StatCard
              icon={
                <BarChart3
                  className="w-6 h-6 text-green-600"
                  strokeWidth={2.5}
                />
              }
              label="Còn lại"
              value={`${
                capacityData.maxCapacity - capacityData.usedCapacity
              } kg`}
              color="green"
            />
          </div>

          {/* Capacity Summary */}
          <div className="section fade-in" style={{ animationDelay: "0.2s" }}>
            <CapacitySummary
              maxCapacity={capacityData.maxCapacity}
              usedCapacity={capacityData.usedCapacity}
            />
          </div>

          {/* Capacity Rules Table */}
          <div className="section fade-in" style={{ animationDelay: "0.3s" }}>
            <CapacityRuleTable
              onEdit={(item: CapacityRule) => {
                setSelectedCapacity(item);
                setOpenEdit(true);
              }}
            />
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {openEdit && selectedCapacity && (
        <EditCapacity
          defaultValue={{
            maxWeight: selectedCapacity.maxWeight,
            currentWeight: 0,
            area: selectedCapacity.area,
            status: selectedCapacity.matched ? "active" : "suspended"
          }}
          onClose={() => {
            setOpenEdit(false);
            setSelectedCapacity(null);
          }}
        />
      )}
    </div>
  );
};

export default Capacity;

/* ---------- Sub Component ---------- */

const StatCard = ({
  icon,
  label,
  value,
  color = "green"
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: "green" | "blue" | "orange";
}) => {
  const colorConfig = {
    green: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200",
      iconBg: "from-green-100 to-emerald-100",
      text: "text-green-700"
    },
    blue: {
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      iconBg: "from-blue-100 to-cyan-100",
      text: "text-blue-700"
    },
    orange: {
      bg: "from-orange-50 to-amber-50",
      border: "border-orange-200",
      iconBg: "from-orange-100 to-amber-100",
      text: "text-orange-700"
    }
  };

  const config = colorConfig[color];

  return (
    <div
      className={`group bg-linear-to-br ${config.bg} rounded-2xl p-6 border-2 ${config.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
    >
      {/* Hover shimmer */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <div className="relative flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-xl bg-linear-to-br ${config.iconBg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>

        <div className="flex-1">
          <div
            className={`text-sm font-bold uppercase tracking-wide ${config.text} opacity-80 mb-1`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {label}
          </div>
          <div
            className={`text-3xl font-black ${config.text}`}
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
