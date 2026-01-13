"use client";

import React from "react";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface ReportStatusProps {
  status: "Đang xử lý" | "Hoàn thành" | "Hủy";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  animated?: boolean;
}

const ReportStatus: React.FC<ReportStatusProps> = ({
  status,
  size = "md",
  showIcon = true,
  animated = true
}) => {
  const statusConfig = {
    "Đang xử lý": {
      gradient: "from-amber-500 to-orange-600",
      bg: "bg-amber-100",
      text: "text-amber-800",
      border: "border-amber-300",
      icon: Clock,
      dotColor: "bg-amber-500",
      description: "Đang được xử lý"
    },
    "Hoàn thành": {
      gradient: "from-emerald-500 to-green-600",
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      border: "border-emerald-300",
      icon: CheckCircle2,
      dotColor: "bg-emerald-500",
      description: "Đã hoàn thành"
    },
    Hủy: {
      gradient: "from-rose-500 to-red-600",
      bg: "bg-rose-100",
      text: "text-rose-800",
      border: "border-rose-300",
      icon: XCircle,
      dotColor: "bg-rose-500",
      description: "Đã bị hủy"
    }
  };

  const sizeConfig = {
    sm: {
      padding: "px-2.5 py-1",
      text: "text-xs",
      icon: "w-3 h-3",
      dot: "w-1.5 h-1.5"
    },
    md: {
      padding: "px-4 py-2",
      text: "text-sm",
      icon: "w-4 h-4",
      dot: "w-2 h-2"
    },
    lg: {
      padding: "px-5 py-2.5",
      text: "text-base",
      icon: "w-5 h-5",
      dot: "w-2.5 h-2.5"
    }
  };

  const config = statusConfig[status];
  const sizeStyle = sizeConfig[size];
  const Icon = config.icon;

  return (
    <div className="inline-block group relative">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap");

        .status-badge {
          font-family: "Montserrat", -apple-system, sans-serif;
        }

        @keyframes pulse-dot {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }

        .status-badge:hover {
          transform: scale(1.05);
        }

        .status-badge {
          transition: all 0.2s ease;
        }

        /* Tooltip */
        .tooltip {
          visibility: hidden;
          opacity: 0;
          transition: all 0.2s ease;
          pointer-events: none;
        }

        .group:hover .tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      {/* Main Badge */}
      <span
        className={`status-badge inline-flex items-center gap-2 ${
          sizeStyle.padding
        } ${config.bg} rounded-xl border-2 ${config.border} ${
          sizeStyle.text
        } font-bold shadow-sm relative overflow-hidden ${
          animated ? "slide-in" : ""
        }`}
      >
        {/* Shimmer Effect for Processing Status */}
        {status === "Đang xử lý" && animated && (
          <div className="shimmer-effect absolute inset-0" />
        )}

        {/* Icon or Dot */}
        {showIcon ? (
          <Icon
            className={`${sizeStyle.icon} ${config.text} relative z-10`}
            strokeWidth={2.5}
          />
        ) : (
          <div
            className={`${sizeStyle.dot} ${
              config.dotColor
            } rounded-full relative z-10 ${
              status === "Đang xử lý" && animated ? "pulse-dot" : ""
            }`}
          />
        )}

        {/* Status Text */}
        <span className={`${config.text} relative z-10`}>{status}</span>

        {/* Gradient Accent (optional) */}
        {size === "lg" && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${config.gradient}`}
          />
        )}
      </span>

      {/* Tooltip on Hover */}
      <div className="tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap shadow-lg">
        {config.description}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </div>
  );
};

export default ReportStatus;
