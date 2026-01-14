"use client";

import React, { useState } from "react";
import { MapPin, ChevronDown, Map, Navigation } from "lucide-react";

type Area = {
  district: string;
  wards: string[];
};

// 👉 Demo data (sau này thay bằng API)
const AREA_DATA: Area[] = [
  {
    district: "TP. Thủ Đức",
    wards: ["Linh Trung", "Linh Tây", "Hiệp Bình Chánh", "Tăng Nhơn Phú"]
  },
  {
    district: "Quận Bình Thạnh",
    wards: ["Phường 1", "Phường 7", "Phường 13", "Phường 25"]
  },
  {
    district: "Quận 1",
    wards: ["Bến Nghé", "Bến Thành", "Cầu Ông Lãnh"]
  }
];

interface AreaSelectorProps {
  onChange?: (value: { district: string; ward: string }) => void;
}

const AreaSelector: React.FC<AreaSelectorProps> = ({ onChange }) => {
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const wards = AREA_DATA.find((a) => a.district === district)?.wards || [];

  const handleDistrictChange = (value: string) => {
    setDistrict(value);
    setWard("");
    onChange?.({ district: value, ward: "" });
  };

  const handleWardChange = (value: string) => {
    setWard(value);
    onChange?.({ district, ward: value });
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
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
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.05);
            opacity: 0;
          }
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
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
      <div className="relative mb-6 pb-4 border-b-2 border-green-200/50">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
            <Map className="w-6 h-6 text-white" strokeWidth={2.5} />
            {/* Pulse ring effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-green-400 pulse-ring"></div>
          </div>
          <div>
            <h3
              className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Chọn Khu Vực
            </h3>
            <p
              className="text-sm text-green-600 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Xác định vị trí thu gom
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 relative">
        {/* District Selector */}
        <div className="slide-in" style={{ animationDelay: "0.1s" }}>
          <label
            className="text-sm font-bold text-green-700 mb-3 flex items-center gap-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="w-6 h-6 rounded-lg bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              <Navigation
                className="w-3.5 h-3.5 text-green-600"
                strokeWidth={2.5}
              />
            </div>
            Quận / Huyện
            <span className="text-red-500">*</span>
          </label>

          <div className="relative group">
            <select
              aria-label="district"
              value={district}
              onChange={(e) => handleDistrictChange(e.target.value)}
              className="w-full appearance-none px-5 py-4 pr-12 rounded-2xl border-2 border-green-200/60 bg-linear-to-br from-white to-green-50/30 font-bold text-green-900 focus:border-green-500 focus:ring-0 focus:shadow-lg focus:shadow-green-200/50 transition-all duration-300 hover:border-green-300 cursor-pointer"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <option value="" className="text-gray-400">
                -- Chọn quận/huyện --
              </option>
              {AREA_DATA.map((d) => (
                <option key={d.district} value={d.district}>
                  {d.district}
                </option>
              ))}
            </select>

            {/* Chevron Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-40%]">
              <ChevronDown
                className="w-6 h-6 text-green-600"
                strokeWidth={2.5}
              />
            </div>

            {/* Bottom accent */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-emerald-500 rounded-b-2xl transform origin-left transition-transform duration-300 ${
                district ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>

          {/* Selected indicator */}
          {district && (
            <div className="mt-2 flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span
                className="font-semibold text-green-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Đã chọn: {district}
              </span>
            </div>
          )}
        </div>

        {/* Ward Selector */}
        <div className="slide-in" style={{ animationDelay: "0.2s" }}>
          <label
            className={`text-sm font-bold mb-3 flex items-center gap-2 transition-colors duration-300 ${
              district ? "text-emerald-700" : "text-gray-400"
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                district
                  ? "bg-linear-to-br from-emerald-100 to-teal-100"
                  : "bg-gray-100"
              }`}
            >
              <MapPin
                className={`w-3.5 h-3.5 transition-colors duration-300 ${
                  district ? "text-emerald-600" : "text-gray-400"
                }`}
                strokeWidth={2.5}
              />
            </div>
            Phường / Xã
            <span className="text-red-500">*</span>
          </label>

          <div className="relative group">
            <select
              aria-label="ward"
              value={ward}
              disabled={!district}
              onChange={(e) => handleWardChange(e.target.value)}
              className={`w-full appearance-none px-5 py-4 pr-12 rounded-2xl border-2 font-bold focus:ring-0 transition-all duration-300 ${
                district
                  ? "border-emerald-200/60 bg-linear-to-br from-white to-emerald-50/30 text-emerald-900 hover:border-emerald-300 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-200/50 cursor-pointer"
                  : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
              }`}
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <option value="" className="text-gray-400">
                -- Chọn phường/xã --
              </option>
              {wards.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>

            {/* Chevron Icon */}
            <div
              className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ${
                district ? "group-hover:translate-y-[-40%]" : ""
              }`}
            >
              <ChevronDown
                className={`w-6 h-6 transition-colors duration-300 ${
                  district ? "text-emerald-600" : "text-gray-400"
                }`}
                strokeWidth={2.5}
              />
            </div>

            {/* Bottom accent */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-teal-500 rounded-b-2xl transform origin-left transition-transform duration-300 ${
                ward ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>

          {/* Selected indicator */}
          {ward && (
            <div className="mt-2 flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span
                className="font-semibold text-emerald-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Đã chọn: {ward}
              </span>
            </div>
          )}

          {/* Help text when disabled */}
          {!district && (
            <div
              className="mt-2 flex items-center gap-2 text-xs text-gray-500 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              Vui lòng chọn quận/huyện trước
            </div>
          )}
        </div>

        {/* Completion Status */}
        {district && ward && (
          <div
            className="slide-in bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200 flex items-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <div
                className="font-bold text-green-800"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Hoàn tất chọn khu vực!
              </div>
              <div
                className="text-sm text-green-600 font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                📍 {district} - {ward}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaSelector;
