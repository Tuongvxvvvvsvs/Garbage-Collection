"use client";

import React, { useState } from "react";
import {
  Gift,
  Save,
  X,
  Leaf,
  Coins,
  ToggleLeft,
  ToggleRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Info
} from "lucide-react";

interface RewardRuleFormData {
  name: string;
  wasteType: "organic" | "recycle" | "electronic" | "hazardous";
  points: number;
  minWeight: number;
  active: boolean;
}

const RewardRuleForm: React.FC = () => {
  const [form, setForm] = useState<RewardRuleFormData>({
    name: "",
    wasteType: "organic",
    points: 10,
    minWeight: 1,
    active: true
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof RewardRuleFormData, string>>
  >({});
  const [showPreview, setShowPreview] = useState(false);

  const wasteTypeConfig = {
    organic: {
      label: "Hữu cơ",
      icon: "🌱",
      gradient: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50",
      color: "text-green-700"
    },
    recycle: {
      label: "Tái chế",
      icon: "♻️",
      gradient: "from-blue-500 to-cyan-600",
      bg: "from-blue-50 to-cyan-50",
      color: "text-blue-700"
    },
    electronic: {
      label: "Điện tử",
      icon: "🔌",
      gradient: "from-purple-500 to-pink-600",
      bg: "from-purple-50 to-pink-50",
      color: "text-purple-700"
    },
    hazardous: {
      label: "Nguy hại",
      icon: "⚠️",
      gradient: "from-red-500 to-orange-600",
      bg: "from-red-50 to-orange-50",
      color: "text-red-700"
    }
  };

  const currentWasteType = wasteTypeConfig[form.wasteType];

  const validateForm = () => {
    const newErrors: Partial<Record<keyof RewardRuleFormData, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = "Vui lòng nhập tên quy tắc";
    }
    if (form.points <= 0) {
      newErrors.points = "Điểm thưởng phải lớn hơn 0";
    }
    if (form.minWeight <= 0) {
      newErrors.minWeight = "Khối lượng phải lớn hơn 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Saving reward rule:", form);
      // Add save logic here
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      wasteType: "organic",
      points: 10,
      minWeight: 1,
      active: true
    });
    setErrors({});
  };

  return (
    <div className="relative bg-white rounded-4xl shadow-2xl border border-gray-200/80 overflow-hidden">
      {/* Animated gradient top bar */}
      <div
        className={`h-2 w-full bg-linear-to-r ${currentWasteType.gradient} bg-size-200 animate-gradient`}
      />

      <div className="p-8 md:p-10 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-5">
            <div className="relative group">
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${currentWasteType.gradient} flex items-center justify-center shadow-2xl shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-linear-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h2
                className="text-3xl font-black text-gray-900 tracking-tight mb-2"
                style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
              >
                Quy tắc thưởng
              </h2>
              <p className="text-gray-600 font-medium">
                Cấu hình điểm thưởng cho từng loại rác
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
              showPreview
                ? "bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {showPreview ? "Ẩn" : "Xem"} preview
          </button>
        </div>

        {/* Preview Card */}
        {showPreview && (
          <div
            className={`relative bg-linear-to-br ${
              currentWasteType.bg
            } border-2 border-dashed ${
              form.active ? "border-emerald-300" : "border-gray-300"
            } rounded-2xl p-6 animate-scale-in`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`text-4xl bg-white rounded-2xl p-3 shadow-lg`}>
                  {currentWasteType.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Preview Quy Tắc
                  </p>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {form.name || "Chưa có tên"}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Coins className="w-4 h-4 text-amber-500" />
                      <span className="text-amber-600">{form.points} điểm</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-bold">
                      <Leaf className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600">
                        ≥ {form.minWeight} kg
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`px-3 py-1.5 rounded-xl font-bold text-xs ${
                  form.active
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {form.active ? "Đang hoạt động" : "Tạm dừng"}
              </div>
            </div>
          </div>
        )}

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rule name */}
          <div className="space-y-3 md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <Info className="w-4 h-4 text-gray-400" />
              Tên quy tắc
            </label>
            <div className="relative group">
              <input
                type="text"
                placeholder="Ví dụ: Rác tái chế ≥ 1kg - Thưởng 10 điểm"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 font-medium ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
                    : "border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                } bg-white hover:border-gray-300`}
              />
              {errors.name && (
                <div className="absolute -bottom-6 left-0 flex items-center gap-1 text-xs text-red-600 font-semibold animate-shake">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </div>
              )}
            </div>
          </div>

          {/* Waste type */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <Leaf className="w-4 h-4 text-emerald-500" />
              Loại rác
            </label>
            <div className="relative">
              <select
                aria-label="wasteType"
                value={form.wasteType}
                onChange={(e) =>
                  setForm({
                    ...form,
                    wasteType: e.target.value as
                      | "organic"
                      | "recycle"
                      | "electronic"
                      | "hazardous"
                  })
                }
                className="w-full px-5 py-4 pr-12 rounded-2xl border-2 border-gray-200 hover:border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 font-semibold text-gray-700 bg-white cursor-pointer appearance-none"
              >
                {Object.entries(wasteTypeConfig).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.icon} {config.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <div
                  className={`w-8 h-8 rounded-lg bg-linear-to-br ${currentWasteType.gradient} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-sm">▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Points */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <Coins className="w-4 h-4 text-amber-500" />
              Điểm thưởng
            </label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Coins className="w-5 h-5 text-white" />
                </div>
              </div>
              <input
                type="number"
                min={0}
                value={form.points}
                onChange={(e) => {
                  setForm({ ...form, points: Number(e.target.value) });
                  if (errors.points)
                    setErrors({ ...errors, points: undefined });
                }}
                className={`w-full pl-20 pr-5 py-4 rounded-2xl border-2 transition-all duration-300 font-bold text-lg ${
                  errors.points
                    ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
                    : "border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20"
                } bg-white hover:border-gray-300`}
                placeholder="Nhập number"
              />
              {errors.points && (
                <div className="absolute -bottom-6 left-0 flex items-center gap-1 text-xs text-red-600 font-semibold animate-shake">
                  <AlertCircle className="w-3 h-3" />
                  {errors.points}
                </div>
              )}
            </div>
          </div>

          {/* Min weight */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              Khối lượng tối thiểu
            </label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
              </div>
              <input
                placeholder="Nhập minWeight"
                type="number"
                min={0}
                step={0.1}
                value={form.minWeight}
                onChange={(e) => {
                  setForm({ ...form, minWeight: Number(e.target.value) });
                  if (errors.minWeight)
                    setErrors({ ...errors, minWeight: undefined });
                }}
                className={`w-full pl-20 pr-5 py-4 rounded-2xl border-2 transition-all duration-300 font-bold text-lg ${
                  errors.minWeight
                    ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
                    : "border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                } bg-white hover:border-gray-300`}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                kg
              </span>
              {errors.minWeight && (
                <div className="absolute -bottom-6 left-0 flex items-center gap-1 text-xs text-red-600 font-semibold animate-shake">
                  <AlertCircle className="w-3 h-3" />
                  {errors.minWeight}
                </div>
              )}
            </div>
          </div>

          {/* Description helper */}
          <div className="md:col-span-2 bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <Info className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-900 mb-1">
                  Mẹo tạo quy tắc hiệu quả
                </p>
                <p className="text-sm text-blue-700">
                  Đặt tên rõ ràng và dễ hiểu. Điểm thưởng nên tương xứng với
                  khối lượng và loại rác. Ví dụ: Rác tái chế ≥ 5kg - Thưởng 50
                  điểm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Toggle */}
        <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  form.active
                    ? "bg-linear-to-br from-emerald-500 to-teal-600"
                    : "bg-gray-300"
                }`}
              >
                {form.active ? (
                  <CheckCircle2 className="w-6 h-6 text-white" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg">
                  Trạng thái quy tắc
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {form.active
                    ? "Quy tắc đang được áp dụng cho hệ thống"
                    : "Quy tắc tạm dừng, không áp dụng điểm thưởng"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setForm({ ...form, active: !form.active })}
              className={`relative flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:scale-105 ${
                form.active
                  ? "bg-linear-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {form.active ? (
                <ToggleRight className="w-6 h-6" />
              ) : (
                <ToggleLeft className="w-6 h-6" />
              )}
              <span>{form.active ? "Đang bật" : "Đã tắt"}</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t-2 border-gray-200">
          <button
            onClick={handleReset}
            className="group/btn flex-1 sm:flex-initial relative flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-gray-300 font-bold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-100 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
            <X className="w-5 h-5 relative group-hover/btn:rotate-90 transition-transform duration-300" />
            <span className="relative">Đặt lại</span>
          </button>

          <button
            onClick={handleSave}
            className="group/btn flex-1 relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-size-200 hover:bg-pos-100 text-white font-bold transition-all duration-500 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
            <Save className="w-5 h-5 relative group-hover/btn:scale-110 transition-transform" />
            <span className="relative">Lưu quy tắc</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          75% {
            transform: translateX(4px);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }

        .bg-size-200 {
          background-size: 200% 100%;
          background-position: 0% 0%;
        }

        .hover\\:bg-pos-100:hover {
          background-position: 100% 0%;
        }
      `}</style>
    </div>
  );
};

export default RewardRuleForm;
