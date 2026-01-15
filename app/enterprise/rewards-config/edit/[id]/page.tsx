"use client";

import React, { useState } from "react";
import {
  Coins,
  Save,
  ArrowLeft,
  Trash2,
  Sparkles,
  Recycle,
  Zap,
  Check,
  AlertCircle,
  Clock,
  Edit3
} from "lucide-react";

const EditById: React.FC = () => {
  const [formData, setFormData] = useState({
    ruleName: "Rác tái chế ≥ 1kg",
    wasteType: "recycle",
    minWeight: "1",
    points: "20",
    status: "active"
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const wasteTypes = [
    {
      value: "organic",
      label: "Hữu cơ",
      icon: "🌱",
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "recycle",
      label: "Tái chế",
      icon: "♻️",
      color: "from-blue-400 to-cyan-500"
    },
    {
      value: "electronic",
      label: "Điện tử",
      icon: "⚡",
      color: "from-purple-400 to-indigo-500"
    },
    {
      value: "hazardous",
      label: "Nguy hại",
      icon: "⚠️",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-orange-300/30 to-amber-300/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-amber-300/30 to-yellow-300/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-5">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-16 h-16 rounded-3xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Edit3 className="w-8 h-8 text-white animate-bounce-subtle" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-orange-600 to-yellow-600 mb-2 tracking-tight">
                  Chỉnh Sửa Quy Tắc
                </h1>
                <p className="text-gray-600 font-semibold text-lg flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Cập nhật thông tin và điểm thưởng
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-amber-300 hover:bg-white font-bold text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </button>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl border-2 border-white/50 p-8 md:p-10 transform hover:shadow-3xl transition-shadow duration-500">
            {/* Header Info: ID + Status */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-black text-xs">#ID</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Rule ID
                  </div>
                  <div className="text-xl font-black text-gray-900">
                    RR-10241
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div className="text-sm text-gray-600 font-semibold">
                  Cập nhật:{" "}
                  <span className="text-gray-900 font-bold">15/01/2026</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-white font-black text-sm">
                  Đang áp dụng
                </span>
              </div>
            </div>

            {/* Points Preview Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-lg">
                <Coins className="w-5 h-5 text-white animate-bounce-subtle" />
                <span className="text-white font-black text-lg">
                  {formData.points || "0"} điểm
                </span>
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </div>
            </div>

            <div className="space-y-6">
              {/* Rule Name */}
              <div className="group">
                <label className="text-sm font-black text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  Tên quy tắc
                </label>
                <input
                  placeholder="Nhập ruleName"
                  type="text"
                  value={formData.ruleName}
                  onChange={(e) =>
                    setFormData({ ...formData, ruleName: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none bg-white/50 backdrop-blur-sm font-semibold text-lg transition-all duration-300 hover:border-amber-300"
                />
              </div>

              {/* Waste Type Selection - Card Style */}
              <div>
                <label className="text-sm font-black text-gray-700 mb-4 uppercase tracking-wide flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  Loại rác
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {wasteTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() =>
                        setFormData({ ...formData, wasteType: type.value })
                      }
                      className={`relative p-5 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                        formData.wasteType === type.value
                          ? `border-transparent bg-linear-to-br ${type.color} shadow-xl`
                          : "border-gray-200 bg-white/70 hover:border-amber-300 hover:bg-white"
                      }`}
                    >
                      {formData.wasteType === type.value && (
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <Check className="w-4 h-4 text-amber-600" />
                        </div>
                      )}
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div
                        className={`font-bold text-sm ${
                          formData.wasteType === type.value
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {type.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid for Weight and Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Min Weight */}
                <div className="group">
                  <label className="text-sm font-black text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Khối lượng tối thiểu
                  </label>
                  <div className="relative">
                    <Recycle className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500 group-hover:rotate-180 transition-transform duration-500" />
                    <input
                      placeholder="Nhập minWeight"
                      type="number"
                      min={0}
                      step="0.1"
                      value={formData.minWeight}
                      onChange={(e) =>
                        setFormData({ ...formData, minWeight: e.target.value })
                      }
                      className="w-full pl-14 pr-16 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none bg-white/50 backdrop-blur-sm font-bold text-lg transition-all duration-300 hover:border-amber-300"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                      kg
                    </span>
                  </div>
                </div>

                {/* Points */}
                <div className="group">
                  <label className="text-sm font-black text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    Điểm thưởng
                  </label>
                  <div className="relative">
                    <Coins className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500 animate-bounce-subtle" />
                    <input
                      placeholder="Nhập points"
                      type="number"
                      min={0}
                      value={formData.points}
                      onChange={(e) =>
                        setFormData({ ...formData, points: e.target.value })
                      }
                      className="w-full pl-14 pr-20 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none bg-white/50 backdrop-blur-sm font-bold text-lg transition-all duration-300 hover:border-amber-300"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-amber-600 font-bold">
                      điểm
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Toggle */}
              <div>
                <label className="text-sm font-black text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  Trạng thái
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      setFormData({ ...formData, status: "active" })
                    }
                    className={`flex-1 px-6 py-4 rounded-2xl border-2 font-bold transition-all duration-300 ${
                      formData.status === "active"
                        ? "border-transparent bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-xl"
                        : "border-gray-200 bg-white/70 text-gray-700 hover:border-emerald-300"
                    }`}
                  >
                    ✅ Đang áp dụng
                  </button>
                  <button
                    onClick={() =>
                      setFormData({ ...formData, status: "inactive" })
                    }
                    className={`flex-1 px-6 py-4 rounded-2xl border-2 font-bold transition-all duration-300 ${
                      formData.status === "inactive"
                        ? "border-transparent bg-linear-to-r from-gray-500 to-gray-600 text-white shadow-xl"
                        : "border-gray-200 bg-white/70 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    ⏸️ Tạm tắt
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t-2 border-gray-100">
              {/* Delete Button - Left */}
              <button
                onClick={() => setShowDeleteModal(true)}
                className="group relative px-6 py-4 rounded-2xl border-2 border-red-200 bg-white hover:bg-red-50 hover:border-red-400 font-bold text-red-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Xóa quy tắc</span>
                </div>
              </button>

              {/* Save Buttons - Right */}
              <div className="flex gap-4">
                <button className="px-8 py-4 rounded-2xl border-2 border-gray-300 font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                  Hủy
                </button>

                <button className="group relative px-8 py-4 rounded-2xl font-black text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500 via-orange-500 to-yellow-500 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <Save className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Lưu thay đổi</span>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Warning Card */}
          <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-black text-amber-800 mb-1">
                Lưu ý khi chỉnh sửa
              </h3>
              <p className="text-amber-700 text-sm font-semibold">
                Thay đổi quy tắc sẽ ảnh hưởng đến tất cả giao dịch mới. Các giao
                dịch đã hoàn thành sẽ giữ nguyên điểm thưởng cũ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform animate-scale-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-red-400 to-red-600 flex items-center justify-center mb-6 animate-bounce-subtle">
                <AlertCircle className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Xác nhận xóa quy tắc?
              </h2>
              <p className="text-gray-600 font-semibold mb-8">
                Hành động này không thể hoàn tác. Quy tắc{" "}
                <span className="font-black text-gray-900">RR-10241</span> sẽ bị
                xóa vĩnh viễn.
              </p>

              <div className="flex gap-4 w-full">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-300 font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  Hủy
                </button>
                <button className="flex-1 px-6 py-4 rounded-2xl bg-linear-to-r from-red-500 to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Xóa ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default EditById;
