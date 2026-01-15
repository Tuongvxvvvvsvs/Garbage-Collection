"use client";

import React from "react";
import {
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  ClipboardList,
  User,
  Eye,
  Sparkles,
  ArrowRight
} from "lucide-react";

export type DisputeStatus = "pending" | "resolved" | "rejected";

interface DisputeItemProps {
  id: string;
  title: string;
  status: DisputeStatus;
  reporter: string;
  requestId: string;
  createdAt: string;
  onView?: () => void;
  onResolve?: () => void;
}

const statusConfig: Record<
  DisputeStatus,
  {
    label: string;
    icon: React.ReactNode;
    bg: string;
    text: string;
    border: string;
    gradient: string;
    bgGlow: string;
  }
> = {
  pending: {
    label: "Đang xử lý",
    icon: <Clock className="w-4 h-4" />,
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
    gradient: "from-yellow-400 to-amber-500",
    bgGlow: "from-yellow-400/20 to-amber-400/20"
  },
  resolved: {
    label: "Đã xử lý",
    icon: <CheckCircle className="w-4 h-4" />,
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    gradient: "from-emerald-400 to-teal-500",
    bgGlow: "from-emerald-400/20 to-teal-400/20"
  },
  rejected: {
    label: "Từ chối",
    icon: <XCircle className="w-4 h-4" />,
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    gradient: "from-red-400 to-rose-500",
    bgGlow: "from-red-400/20 to-rose-400/20"
  }
};

const DisputeItem: React.FC<DisputeItemProps> = ({
  id,
  title,
  status,
  reporter,
  requestId,
  createdAt,
  onView,
  onResolve
}) => {
  const cfg = statusConfig[status];

  return (
    <div className="group relative">
      {/* Glow Effect on Hover */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${cfg.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border-2 border-white/50 p-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-gray-100/30 to-transparent rounded-bl-[100px] opacity-50"></div>

        {/* Header */}
        <div className="relative flex items-start justify-between gap-4 mb-5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all line-clamp-2">
                {title}
              </h3>
            </div>
            <div className="flex items-center gap-2 ml-13">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                ID:
              </span>
              <span className="text-sm font-black text-gray-700">#{id}</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="shrink-0">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 ${cfg.bg} ${cfg.text} ${cfg.border} shadow-md group-hover:shadow-lg transition-all duration-300`}
            >
              <div className={status === "pending" ? "animate-pulse" : ""}>
                {cfg.icon}
              </div>
              <span className="font-black text-sm whitespace-nowrap">
                {cfg.label}
              </span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <InfoCard
            icon={<User className="w-4 h-4" />}
            label="Người gửi"
            value={reporter}
            color="blue"
          />
          <InfoCard
            icon={<ClipboardList className="w-4 h-4" />}
            label="Request"
            value={requestId}
            color="purple"
          />
          <InfoCard
            icon={<AlertTriangle className="w-4 h-4" />}
            label="Loại"
            value="Thu gom không đúng"
            color="orange"
          />
          <InfoCard
            icon={<Clock className="w-4 h-4" />}
            label="Thời gian"
            value={createdAt}
            color="gray"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t-2 border-gray-100">
          <button
            onClick={onView}
            className="group/btn flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Xem chi tiết</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>

          {status === "pending" && (
            <button
              onClick={onResolve}
              className="group/btn relative px-5 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-600 group-hover/btn:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center gap-2">
                <CheckCircle className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>Đánh dấu xử lý</span>
                <Sparkles className="w-3 h-3 animate-pulse" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisputeItem;

/* -------- Sub component -------- */

const InfoCard = ({
  icon,
  label,
  value,
  color
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) => {
  const colorMap: Record<string, { bg: string; icon: string }> = {
    blue: {
      bg: "from-blue-400 to-cyan-500",
      icon: "text-blue-600"
    },
    purple: {
      bg: "from-purple-400 to-pink-500",
      icon: "text-purple-600"
    },
    orange: {
      bg: "from-orange-400 to-amber-500",
      icon: "text-orange-600"
    },
    gray: {
      bg: "from-gray-400 to-gray-500",
      icon: "text-gray-600"
    }
  };

  const colors = colorMap[color];

  return (
    <div className="group/info flex items-center gap-3 bg-linear-to-br from-gray-50 to-white px-4 py-3 rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div
        className={`w-9 h-9 rounded-lg bg-linear-to-br ${colors.bg} flex items-center justify-center text-white shadow-md group-hover/info:scale-110 group-hover/info:rotate-6 transition-all duration-300`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-0.5">
          {label}
        </p>
        <p className="font-black text-gray-900 text-sm truncate">{value}</p>
      </div>
    </div>
  );
};
