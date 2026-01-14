"use client";

import React from "react";
import {
  MapPin,
  Calendar,
  Recycle,
  CheckCircle,
  XCircle,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

export type TaskStatus = "assigned" | "completed" | "failed";

interface TaskCardProps {
  title: string;
  location: string;
  date: string;
  category: string;
  status: TaskStatus;
  image?: string;
  onClick?: () => void;
}

const statusConfig: Record<
  TaskStatus,
  {
    label: string;
    color: string;
    bgGradient: string;
    borderColor: string;
    dotColor: string;
    icon: React.ReactNode;
  }
> = {
  assigned: {
    label: "Đang thực hiện",
    color: "text-blue-700",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-300",
    dotColor: "bg-blue-500",
    icon: <Recycle className="w-4 h-4" strokeWidth={2.5} />
  },
  completed: {
    label: "Hoàn thành",
    color: "text-green-700",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-300",
    dotColor: "bg-green-500",
    icon: <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
  },
  failed: {
    label: "Không thành công",
    color: "text-orange-700",
    bgGradient: "from-orange-50 to-amber-50",
    borderColor: "border-orange-300",
    dotColor: "bg-orange-500",
    icon: <XCircle className="w-4 h-4" strokeWidth={2.5} />
  }
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  location,
  date,
  category,
  status,
  image = "/demo1.jpg",
  onClick
}) => {
  const statusUI = statusConfig[status];

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-green-200/50 p-5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .shimmer-effect {
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
      </div>

      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-green-400 to-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

      <div className="relative flex gap-5">
        {/* Image */}
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-green-200/50 group-hover:border-green-300 transition-colors shadow-md">
          <Image
            src={image}
            alt={title}
            width={112}
            height={112}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Status dot on image */}
          <div
            className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
              statusUI.dotColor
            } border-2 border-white shadow-lg ${
              status === "assigned" ? "animate-pulse" : ""
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          {/* Top section */}
          <div>
            {/* Title */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3
                className="font-black text-green-900 text-xl line-clamp-2 group-hover:text-green-700 transition-colors"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {title}
              </h3>

              {/* Arrow indicator */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ChevronRight
                  className="w-5 h-5 text-green-600"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {/* Info rows */}
            <div className="space-y-2">
              <InfoRow
                icon={
                  <MapPin
                    className="w-4 h-4 text-green-500"
                    strokeWidth={2.5}
                  />
                }
                text={location}
              />
              <InfoRow
                icon={
                  <Calendar
                    className="w-4 h-4 text-blue-500"
                    strokeWidth={2.5}
                  />
                }
                text={date}
              />
              <InfoRow
                icon={
                  <Recycle
                    className="w-4 h-4 text-emerald-500"
                    strokeWidth={2.5}
                  />
                }
                text={category}
              />
            </div>
          </div>

          {/* Status Badge at bottom */}
          <div className="mt-4 pt-3 border-t-2 border-green-100 group-hover:border-green-200 transition-colors">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r ${statusUI.bgGradient} border-2 ${statusUI.borderColor} transition-all duration-300 group-hover:shadow-md`}
            >
              <div
                className={`w-2 h-2 rounded-full ${statusUI.dotColor} ${
                  status === "assigned" ? "animate-pulse" : ""
                }`}
              ></div>
              {statusUI.icon}
              <span
                className={`text-sm font-bold ${statusUI.color}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {statusUI.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="currentColor"
            className="text-green-500"
          />
        </svg>
      </div>
    </div>
  );
};

export default TaskCard;

/* ---------------- Sub Component ---------------- */
const InfoRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm group/row">
    <div className="w-7 h-7 rounded-lg bg-linear-to-br from-green-50 to-emerald-50 flex items-center justify-center transition-all duration-300 group-hover/row:scale-110 group-hover/row:shadow-sm border border-green-200/50">
      {icon}
    </div>
    <span
      className="text-green-800 font-semibold line-clamp-1 group-hover:text-green-900 transition-colors"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {text}
    </span>
  </div>
);
