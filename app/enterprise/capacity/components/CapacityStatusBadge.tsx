"use client";

import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  LucideIcon
} from "lucide-react";

export type CapacityStatus =
  | "available"
  | "warning"
  | "overload";

interface CapacityStatusBadgeProps {
  status: CapacityStatus;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const statusConfig: Record<
  CapacityStatus,
  {
    label: string;
    bgGradient: string;
    textColor: string;
    borderColor: string;
    dotColor: string;
    icon: LucideIcon;
  }
> = {
  available: {
    label: "Đủ năng lực",
    bgGradient: "from-green-50 to-emerald-50",
    textColor: "text-green-700",
    borderColor: "border-green-300",
    dotColor: "bg-green-500",
    icon: CheckCircle
  },
  warning: {
    label: "Gần quá tải",
    bgGradient: "from-amber-50 to-yellow-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-300",
    dotColor: "bg-amber-500",
    icon: AlertTriangle
  },
  overload: {
    label: "Quá tải",
    bgGradient: "from-orange-50 to-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-300",
    dotColor: "bg-red-500",
    icon: XCircle
  }
};

const sizeConfig = {
  sm: {
    padding: "px-3 py-1.5",
    text: "text-xs",
    icon: "w-3.5 h-3.5",
    dot: "w-1.5 h-1.5"
  },
  md: {
    padding: "px-4 py-2",
    text: "text-sm",
    icon: "w-4 h-4",
    dot: "w-2 h-2"
  },
  lg: {
    padding: "px-6 py-3",
    text: "text-base",
    icon: "w-5 h-5",
    dot: "w-2.5 h-2.5"
  }
};

const CapacityStatusBadge: React.FC<CapacityStatusBadgeProps> = ({
  status,
  showIcon = true,
  size = "md"
}) => {
  const config = statusConfig[status];
  const sizeStyles = sizeConfig[size];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-xl border-2 font-bold shadow-sm transition-all duration-300 hover:shadow-md
        bg-linear-to-r ${config.bgGradient} ${config.textColor} ${config.borderColor} ${sizeStyles.padding} ${sizeStyles.text}`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated dot */}
      <span className={`rounded-full ${config.dotColor} ${sizeStyles.dot} ${
        status !== 'available' ? 'pulse-dot' : ''
      }`}></span>
      
      {/* Icon */}
      {showIcon && (
        <Icon className={sizeStyles.icon} strokeWidth={2.5} />
      )}
      
      {/* Label */}
      <span>{config.label}</span>
    </span>
  );
};

export default CapacityStatusBadge;