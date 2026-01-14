"use client";

import React, { useState } from "react";
import {
  Truck,
  Recycle,
  Clock,
  Scale,
  CheckCircle,
  ChevronDown,
  Sparkles,
  AlertCircle
} from "lucide-react";
import AreaSelector from "./AreaSelector";
export interface CapacityData {
  maxWeight: number;
  currentWeight: number;
  area: string;
  status: "active" | "full" | "suspended";
}
const wasteTypes = [
  { label: "Rác sinh hoạt", icon: "🗑️", color: "green" },
  { label: "Rác tái chế", icon: "♻️", color: "blue" },
  { label: "Rác cồng kềnh", icon: "📦", color: "purple" },
  { label: "Rác nguy hại", icon: "⚠️", color: "orange" }
];

const vehicles = ["Xe đẩy tay", "Xe ba gác", "Xe tải nhỏ", "Xe tải lớn"];
const shifts = [
  { label: "Sáng", icon: "🌅", time: "6:00 - 12:00" },
  { label: "Chiều", icon: "☀️", time: "12:00 - 18:00" },
  { label: "Tối", icon: "🌙", time: "18:00 - 22:00" }
];
interface CapacityFormProps {
  defaultValue: CapacityData;
  onSubmit: (data: CapacityData) => void;
}
const CapacityForm: React.FC<CapacityFormProps> = ({
  defaultValue,
  onSubmit
}) => {
  const [selectedWaste, setSelectedWaste] = useState<string[]>([]);
  const [selectedShifts, setSelectedShifts] = useState<string[]>([]);
  const [capacity, setCapacity] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [areas, setAreas] = useState<{ district: string; ward: string }>();
  const [isActive, setIsActive] = useState(true);

  const toggleWaste = (type: string) => {
    setSelectedWaste((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleShift = (shift: string) => {
    setSelectedShifts((prev) =>
      prev.includes(shift) ? prev.filter((s) => s !== shift) : [...prev, shift]
    );
  };

  const isFormComplete =
    selectedWaste.length > 0 &&
    capacity &&
    vehicle &&
    areas?.district &&
    areas?.ward &&
    selectedShifts.length > 0;

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden p-6 md:p-8 lg:p-12">
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
            transform: translateY(-15px) rotate(3deg);
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
          animation: float 4s ease-in-out infinite;
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
        
        .section-card {
          opacity: 0;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 float-icon">
          <Truck className="w-24 h-24 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "2s" }}
        >
          <Recycle className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="fade-in">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
            {/* Decorative circles */}
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

            <div className="relative text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-xl pulse-glow float-icon">
                <Truck className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                <h1
                  className="text-4xl md:text-5xl font-black shimmer-text"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Khai Báo Năng Lực
                </h1>
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>

              <p
                className="text-lg text-green-600 font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Giúp hệ thống phân công nhiệm vụ phù hợp với năng lực của bạn
              </p>
            </div>
          </div>
        </div>

        {/* Waste Types */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
            <h3
              className="text-2xl font-black text-green-800 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <Recycle className="w-5 h-5 text-green-600" strokeWidth={2.5} />
              </div>
              Loại rác có thể thu gom
              <span className="text-red-500 text-lg">*</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wasteTypes.map((type) => {
                const isSelected = selectedWaste.includes(type.label);
                return (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => toggleWaste(type.label)}
                    className={`group relative px-6 py-5 rounded-2xl border-2 font-bold transition-all duration-300 text-left ${
                      isSelected
                        ? "bg-linear-to-br from-green-50 to-emerald-50 border-green-400 shadow-lg scale-105"
                        : "bg-white border-green-200 hover:border-green-300 hover:shadow-md"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{type.icon}</span>
                      <div className="flex-1">
                        <div
                          className={`text-lg ${
                            isSelected ? "text-green-800" : "text-green-700"
                          }`}
                        >
                          {type.label}
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle
                          className="w-6 h-6 text-green-600"
                          strokeWidth={2.5}
                        />
                      )}
                    </div>
                    {isSelected && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-emerald-500 rounded-b-2xl"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedWaste.length > 0 && (
              <div className="mt-4 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span
                  className="font-semibold text-green-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Đã chọn {selectedWaste.length} loại rác
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Capacity */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
            <h3
              className="text-2xl font-black text-blue-800 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Scale className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
              </div>
              Khối lượng tối đa
              <span className="text-red-500 text-lg">*</span>
            </h3>

            <div className="relative">
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Ví dụ: 500"
                className="w-full px-6 py-5 pr-24 rounded-2xl border-2 border-blue-200 bg-linear-to-br from-white to-blue-50/30 focus:border-blue-500 focus:ring-0 focus:shadow-lg focus:shadow-blue-200/50 font-bold text-blue-900 text-lg transition-all duration-300"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              />
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-blue-600"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                kg/ngày
              </div>
              {capacity && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-400 to-cyan-500 rounded-b-2xl"></div>
              )}
            </div>

            {capacity && (
              <div className="mt-3 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span
                  className="font-semibold text-blue-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Đã nhập: {capacity} kg/ngày
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Vehicle */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
            <h3
              className="text-2xl font-black text-purple-800 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-100 to-violet-100 flex items-center justify-center">
                <Truck className="w-5 h-5 text-purple-600" strokeWidth={2.5} />
              </div>
              Phương tiện
              <span className="text-red-500 text-lg">*</span>
            </h3>

            <div className="relative group">
              <select
                aria-label="vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full appearance-none px-6 py-5 pr-12 rounded-2xl border-2 border-purple-200 bg-linear-to-br from-white to-purple-50/30 focus:border-purple-500 focus:ring-0 focus:shadow-lg focus:shadow-purple-200/50 font-bold text-purple-900 text-lg transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <option value="">-- Chọn phương tiện --</option>
                {vehicles.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>

              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-40%]">
                <ChevronDown
                  className="w-6 h-6 text-purple-600"
                  strokeWidth={2.5}
                />
              </div>

              {vehicle && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-400 to-violet-500 rounded-b-2xl"></div>
              )}
            </div>

            {vehicle && (
              <div className="mt-3 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                <span
                  className="font-semibold text-purple-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Đã chọn: {vehicle}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Area */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <AreaSelector onChange={setAreas} />
        </div>

        {/* Shift */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
            <h3
              className="text-2xl font-black text-orange-800 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" strokeWidth={2.5} />
              </div>
              Ca làm việc
              <span className="text-red-500 text-lg">*</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shifts.map((shift) => {
                const isSelected = selectedShifts.includes(shift.label);
                return (
                  <button
                    key={shift.label}
                    type="button"
                    onClick={() => toggleShift(shift.label)}
                    className={`relative px-5 py-6 rounded-2xl border-2 font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-linear-to-br from-orange-50 to-amber-50 border-orange-400 shadow-lg scale-105"
                        : "bg-white border-orange-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{shift.icon}</div>
                      <div
                        className={`text-xl font-black mb-1 ${
                          isSelected ? "text-orange-800" : "text-orange-700"
                        }`}
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {shift.label}
                      </div>
                      <div
                        className="text-sm text-orange-600 font-semibold"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {shift.time}
                      </div>
                    </div>
                    {isSelected && (
                      <>
                        <CheckCircle
                          className="absolute top-3 right-3 w-6 h-6 text-orange-600"
                          strokeWidth={2.5}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 to-amber-500 rounded-b-2xl"></div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedShifts.length > 0 && (
              <div className="mt-4 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span
                  className="font-semibold text-orange-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Đã chọn {selectedShifts.length} ca làm việc
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Active Toggle */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-green-200/50">
            <label className="flex items-center gap-4 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-linear-to-r peer-checked:from-green-500 peer-checked:to-emerald-600 transition-all duration-300 shadow-inner"></div>
                <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6 shadow-md"></div>
              </div>

              <div className="flex-1">
                <div
                  className="text-lg font-bold text-green-800 flex items-center gap-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Sẵn sàng nhận nhiệm vụ
                  {isActive && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
                <div
                  className="text-sm text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {isActive
                    ? "Bạn đang ở trạng thái sẵn sàng"
                    : "Bạn đang tạm nghỉ"}
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div
          className="section-card fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          {!isFormComplete && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div
                  className="font-bold text-amber-800 mb-1"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Vui lòng điền đầy đủ thông tin
                </div>
                <div
                  className="text-sm text-amber-700 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Các trường có dấu (*) là bắt buộc
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            disabled={!isFormComplete}
            onClick={() =>
              onSubmit({
                maxWeight: Number(capacity),
                currentWeight: defaultValue?.currentWeight ?? 0,
                area: `${areas?.district} - ${areas?.ward}`,
                status: isActive ? "active" : "suspended"
              })
            }
          >
            <CheckCircle className="w-7 h-7" strokeWidth={2.5} />
            {isFormComplete
              ? "Lưu thông tin năng lực"
              : "Vui lòng điền đầy đủ thông tin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapacityForm;
