"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  User,
  Truck,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Eye
} from "lucide-react";

interface RequestCardProps {
  status?: "pending" | "assigned" | "completed";
  requestId?: string;
  title?: string;
  location?: string;
  timeAgo?: string;
  reporter?: string;
  priority?: "low" | "medium" | "high";
  description?: string;
  onViewDetails?: () => void;
  onAssignCollector?: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({
  status = "pending",
  requestId = "REQ-10241",
  title = "Báo cáo rác sinh hoạt",
  location = "Quận 7, TP.HCM",
  timeAgo = "12 phút trước",
  reporter = "Nguyễn Văn A",
  priority = "high",
  description = "Có nhiều rác sinh hoạt bị tồn đọng trước khu dân cư, cần thu gom sớm để tránh ảnh hưởng môi trường xung quanh.",
  onViewDetails,
  onAssignCollector
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig = {
    pending: {
      label: "Chờ xử lý",
      gradient: "from-amber-400 via-orange-400 to-amber-500",
      bg: "bg-linear-to-br from-amber-50 to-orange-50",
      border: "border-amber-200",
      icon: <Clock className="w-4 h-4" />,
      glow: "shadow-amber-500/20",
      pulse: true
    },
    assigned: {
      label: "Đã gán collector",
      gradient: "from-blue-500 via-indigo-500 to-blue-600",
      bg: "bg-linear-to-br from-blue-50 to-indigo-50",
      border: "border-blue-200",
      icon: <Truck className="w-4 h-4" />,
      glow: "shadow-blue-500/20",
      pulse: false
    },
    completed: {
      label: "Hoàn thành",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      bg: "bg-linear-to-br from-emerald-50 to-teal-50",
      border: "border-emerald-200",
      icon: <CheckCircle className="w-4 h-4" />,
      glow: "shadow-emerald-500/20",
      pulse: false
    }
  };

  const priorityConfig = {
    low: {
      label: "Thấp",
      color: "text-gray-600",
      bg: "bg-gray-100",
      dot: "bg-gray-400"
    },
    medium: {
      label: "Trung bình",
      color: "text-amber-600",
      bg: "bg-amber-100",
      dot: "bg-amber-400"
    },
    high: {
      label: "Cao",
      color: "text-red-600",
      bg: "bg-red-100",
      dot: "bg-red-500"
    }
  };

  const currentStatus = statusConfig[status];
  const currentPriority = priorityConfig[priority];

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-200/50 transition-colors duration-500" />

      {/* Top colored accent bar */}
      <div className={`h-1.5 w-full bg-linear-to-r ${currentStatus.gradient}`}>
        {currentStatus.pulse && (
          <div className="h-full w-1/3 bg-white/40 animate-shimmer" />
        )}
      </div>

      <div className="p-7 space-y-6">
        {/* Header with floating status badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3
                className="font-black text-2xl text-gray-900 leading-tight tracking-tight"
                style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
              >
                {title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 font-medium">
                Mã: <span className="font-bold text-gray-700">{requestId}</span>
              </p>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ${currentPriority.dot} ${
                    priority === "high" ? "animate-pulse" : ""
                  }`}
                />
                <span className={`text-xs font-bold ${currentPriority.color}`}>
                  {currentPriority.label}
                </span>
              </div>
            </div>
          </div>

          {/* Status badge with gradient and icon */}
          <div
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-2xl ${currentStatus.bg} border ${currentStatus.border} shadow-lg ${currentStatus.glow} transition-all duration-300`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-lg bg-linear-to-br ${currentStatus.gradient} text-white`}
            >
              {currentStatus.icon}
            </div>
            <span className="text-xs font-black uppercase tracking-wide text-gray-700">
              {currentStatus.label}
            </span>
          </div>
        </div>

        {/* Info grid with icons */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 group/item">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover/item:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                Địa điểm
              </p>
              <p className="text-sm font-bold text-gray-800">{location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group/item">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover/item:scale-110 transition-transform">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                Thời gian
              </p>
              <p className="text-sm font-bold text-gray-800">{timeAgo}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group/item">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover/item:scale-110 transition-transform">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                Người báo cáo
              </p>
              <p className="text-sm font-bold text-gray-800">{reporter}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group/item">
            <div
              className={`w-10 h-10 rounded-xl bg-linear-to-br ${currentPriority.bg} flex items-center justify-center group-hover/item:scale-110 transition-transform`}
            >
              <AlertTriangle className={`w-5 h-5 ${currentPriority.color}`} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                Mức độ
              </p>
              <p className={`text-sm font-bold ${currentPriority.color}`}>
                {currentPriority.label}
              </p>
            </div>
          </div>
        </div>

        {/* Description with gradient fade */}
        <div className="relative">
          <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200">
            <p className="text-sm text-gray-700 leading-relaxed line-clamp-2 font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onViewDetails}
            className="flex-1 group/btn relative px-5 py-3.5 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
            <div className="relative flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Xem chi tiết</span>
            </div>
          </button>

          {status === "pending" && (
            <button
              onClick={onAssignCollector}
              className="flex-1 group/btn relative px-6 py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-size-200 hover:bg-pos-100 transition-all duration-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
              <div className="relative flex items-center justify-center gap-2">
                <span>Gán collector</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </button>
          )}
        </div>
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

export default RequestCard;
