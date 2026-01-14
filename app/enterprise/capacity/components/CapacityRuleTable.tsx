"use client";

import React from "react";
import {
  Recycle,
  Truck,
  MapPin,
  Scale,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info
} from "lucide-react";

export type CapacityRule = {
  id: string;
  wasteType: string;
  maxWeight: number;
  vehicle: string;
  area: string;
  matched: boolean;
};

const rules: CapacityRule[] = [
  {
    id: "R1",
    wasteType: "Rác sinh hoạt",
    maxWeight: 500,
    vehicle: "Xe ba gác",
    area: "TP. Thủ Đức",
    matched: true
  },
  {
    id: "R2",
    wasteType: "Rác tái chế",
    maxWeight: 300,
    vehicle: "Xe đẩy tay",
    area: "Q. Bình Thạnh",
    matched: false
  },
  {
    id: "R3",
    wasteType: "Rác cồng kềnh",
    maxWeight: 1000,
    vehicle: "Xe tải nhỏ",
    area: "Q. 9",
    matched: true
  }
];
interface CapacityRuleTableProps {
  onEdit: (rule: CapacityRule) => void;
}

const CapacityRuleTable: React.FC<CapacityRuleTableProps> = ({ onEdit }) => {
  const matchedCount = rules.filter((r) => r.matched).length;
  const totalCount = rules.length;

  return (
    <div className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          }
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .rule-card {
          opacity: 0;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
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
      <div className="relative mb-8 pb-6 border-b-2 border-green-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg pulse-glow">
              <Recycle className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>

            <div>
              <h2
                className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600 mb-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Quy Tắc Phân Công
              </h2>
              <p
                className="text-sm text-green-600 font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Hệ thống dựa vào các tiêu chí sau để gán nhiệm vụ phù hợp
              </p>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="flex gap-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 border-2 border-green-200 shadow-md">
              <div
                className="text-2xl font-black text-green-600"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {matchedCount}/{totalCount}
              </div>
              <div
                className="text-xs font-bold text-green-700 uppercase tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Đạt tiêu chí
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Cards */}
      <div className="space-y-4 relative mb-6">
        {rules.map((rule, index) => (
          <div
            key={rule.id}
            className={`rule-card slide-in group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 ${
              rule.matched ? "border-green-300" : "border-orange-300"
            } hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Accent Bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${
                rule.matched
                  ? "bg-linear-to-b from-green-400 to-emerald-500"
                  : "bg-linear-to-b from-orange-400 to-amber-500"
              }`}
            ></div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Rule ID Badge */}
              <div className="shrink-0">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-white shadow-md ${
                    rule.matched
                      ? "bg-linear-to-br from-green-500 to-emerald-600"
                      : "bg-linear-to-br from-orange-500 to-amber-600"
                  }`}
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {rule.id}
                </div>
              </div>

              {/* Info Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Waste Type */}
                <InfoItem
                  icon={
                    <Recycle
                      className="w-4 h-4 text-green-500"
                      strokeWidth={2.5}
                    />
                  }
                  label="Loại rác"
                  value={rule.wasteType}
                  color="green"
                />

                {/* Weight */}
                <InfoItem
                  icon={
                    <Scale
                      className="w-4 h-4 text-blue-500"
                      strokeWidth={2.5}
                    />
                  }
                  label="Khối lượng"
                  value={`${rule.maxWeight} kg`}
                  color="blue"
                />

                {/* Vehicle */}
                <InfoItem
                  icon={
                    <Truck
                      className="w-4 h-4 text-purple-500"
                      strokeWidth={2.5}
                    />
                  }
                  label="Phương tiện"
                  value={rule.vehicle}
                  color="purple"
                />

                {/* Area */}
                <InfoItem
                  icon={
                    <MapPin
                      className="w-4 h-4 text-emerald-500"
                      strokeWidth={2.5}
                    />
                  }
                  label="Khu vực"
                  value={rule.area}
                  color="emerald"
                />
              </div>
              <button
                onClick={() => onEdit(rule)}
                className="mt-2 px-4 py-2 text-sm font-bold rounded-xl
      bg-white border-2 border-green-300 text-green-700
      hover:bg-green-50 hover:shadow-md transition"
              >
                Chỉnh sửa
              </button>
              {/* Status Badge */}
              <div className="shrink-0">
                {rule.matched ? (
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-md">
                    <CheckCircle
                      className="w-5 h-5 text-green-600"
                      strokeWidth={2.5}
                    />
                    <span
                      className="font-black text-green-700"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Đạt
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-br from-orange-50 to-amber-50 border-2 border-orange-300 shadow-md">
                    <XCircle
                      className="w-5 h-5 text-orange-600"
                      strokeWidth={2.5}
                    />
                    <span
                      className="font-black text-orange-700"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Không đạt
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Notes */}
      <div className="space-y-3">
        {/* Info Note */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 flex items-start gap-3">
          <Info
            className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
            strokeWidth={2.5}
          />
          <div>
            <div
              className="font-bold text-blue-800 mb-1"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Cách hoạt động của hệ thống
            </div>
            <div
              className="text-sm text-blue-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Nhiệm vụ chỉ được gán khi <strong>TẤT CẢ</strong> các tiêu chí đều
              đạt yêu cầu
            </div>
          </div>
        </div>

        {/* Warning if not all matched */}
        {matchedCount < totalCount && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle
              className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
              strokeWidth={2.5}
            />
            <div>
              <div
                className="font-bold text-amber-800 mb-1"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Cần cập nhật năng lực
              </div>
              <div
                className="text-sm text-amber-700 font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Bạn có {totalCount - matchedCount} tiêu chí chưa đạt. Vui lòng
                cập nhật thông tin để nhận nhiệm vụ phù hợp hơn.
              </div>
            </div>
          </div>
        )}

        {/* Success message if all matched */}
        {matchedCount === totalCount && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle
              className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
              strokeWidth={2.5}
            />
            <div>
              <div
                className="font-bold text-green-800 mb-1"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Hoàn hảo! 🎉
              </div>
              <div
                className="text-sm text-green-700 font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Năng lực của bạn đáp ứng tất cả tiêu chí. Hệ thống sẽ ưu tiên
                phân công nhiệm vụ cho bạn.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapacityRuleTable;

/* ---------- Sub Component ---------- */

const InfoItem = ({
  icon,
  label,
  value,
  color = "green"
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: "green" | "blue" | "purple" | "emerald";
}) => {
  const colorClasses = {
    green: "from-green-50 to-emerald-50 border-green-200",
    blue: "from-blue-50 to-cyan-50 border-blue-200",
    purple: "from-purple-50 to-violet-50 border-purple-200",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200"
  };

  return (
    <div
      className={`bg-linear-to-br ${colorClasses[color]} border rounded-xl p-3 transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div
          className="text-xs font-bold text-gray-600 uppercase tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {label}
        </div>
      </div>
      <div
        className="text-sm font-bold text-gray-800 line-clamp-1"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {value}
      </div>
    </div>
  );
};
