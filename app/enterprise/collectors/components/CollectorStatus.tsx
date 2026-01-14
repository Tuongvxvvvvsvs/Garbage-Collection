"use client";

import React from "react";
import { CheckCircle, AlertCircle, PauseCircle } from "lucide-react";

export type CollectorStatusType =
  | "active"
  | "inactive"
  | "suspended";

interface CollectorStatusProps {
  status: CollectorStatusType;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const statusConfig = {
  active: {
    label: "Hoạt động",
    icon: CheckCircle,
    bgGradient: "from-green-50 to-emerald-50",
    textColor: "text-green-700",
    borderColor: "border-green-300",
    dotColor: "bg-green-500"
  },
  inactive: {
    label: "Tạm nghỉ",
    icon: PauseCircle,
    bgGradient: "from-slate-50 to-gray-50",
    textColor: "text-gray-600",
    borderColor: "border-gray-300",
    dotColor: "bg-gray-400"
  },
  suspended: {
    label: "Bị khóa",
    icon: AlertCircle,
    bgGradient: "from-red-50 to-rose-50",
    textColor: "text-red-700",
    borderColor: "border-red-300",
    dotColor: "bg-red-500"
  }
};

const sizeConfig = {
  sm: {
    wrapper: "px-3 py-1.5 text-xs gap-2",
    icon: "w-3.5 h-3.5",
    dot: "w-1.5 h-1.5"
  },
  md: {
    wrapper: "px-4 py-2 text-sm gap-2",
    icon: "w-4 h-4",
    dot: "w-2 h-2"
  },
  lg: {
    wrapper: "px-5 py-2.5 text-base gap-2.5",
    icon: "w-5 h-5",
    dot: "w-2.5 h-2.5"
  }
};

const CollectorStatus: React.FC<CollectorStatusProps> = ({
  status,
  showText = true,
  size = "sm"
}) => {
  const config = statusConfig[status];
  const sizeStyle = sizeConfig[size];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center font-bold rounded-xl border-2 shadow-sm transition-all duration-300 hover:shadow-md
        bg-linear-to-r ${config.bgGradient}
        ${config.textColor}
        ${config.borderColor}
        ${sizeStyle.wrapper}
      `}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');
        
        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }
        
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated dot */}
      <span 
        className={`rounded-full ${config.dotColor} ${sizeStyle.dot} ${
          status === 'active' || status === 'suspended' ? 'pulse-dot' : ''
        }`}
      ></span>
      
      {/* Icon */}
      <Icon className={sizeStyle.icon} strokeWidth={2.5} />
      
      {/* Label */}
      {showText && <span>{config.label}</span>}
    </span>
  );
};

export default CollectorStatus;