"use client";

import React from "react";
import {

  MapPin,
  Truck,
  Star,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Award
} from "lucide-react";
import Image from "next/image";

type CollectorStatus = "active" | "inactive" | "suspended";


interface CollectorCardProps {
  name?: string;
  area?: string;
  vehicle?: string;
  rating?: number;
  completedTasks?: number;
  avatar?: string;
  status?: CollectorStatus;
  onClick?: () => void;
}

const CollectorCard: React.FC<CollectorCardProps> = ({
  name = "Nguyễn Văn A",
  area = "TP. Thủ Đức",
  vehicle = "Xe tải nhỏ",
  rating = 4.8,
  completedTasks = 128,
  avatar = "/avatar-demo.jpg",
  status = "active",
  onClick
}) => {
  const isActive = status === "active";

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border-2 border-green-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
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
        
        .shimmer-effect {
          animation: shimmer 2s infinite;
        }
        
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none shimmer-effect"></div>

      {/* Accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transform origin-top transition-transform duration-300 group-hover:scale-y-100 scale-y-0 ${
        isActive ? 'bg-linear-to-b from-green-400 to-emerald-500' : 'bg-linear-to-b from-gray-400 to-slate-500'
      }`}></div>

      <div className="relative">
        {/* Top Section */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="relative">
              <Image
                src={avatar}
                alt={name}
                width={80}
                height={80}
                className="rounded-2xl object-cover border-3 border-green-300 shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Status Ring */}
              {isActive && (
                <div className="absolute inset-0 rounded-2xl border-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
            
            {/* Status Dot */}
            <div
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-3 border-white shadow-md ${
                isActive ? 'bg-green-500 pulse-dot' : 'bg-gray-400'
              }`}
            ></div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {/* Name & Status */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 
                className="font-black text-xl text-green-800 truncate group-hover:text-green-700 transition-colors"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {name}
              </h3>
              
              {/* Arrow indicator */}
              <div className="shrink-0 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ChevronRight className="w-4 h-4 text-green-600" strokeWidth={2.5} />
              </div>
            </div>

            {/* Status Badge */}
            <div className="mb-3">
              {isActive ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 px-3 py-1.5 rounded-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <CheckCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Đang hoạt động
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-linear-to-r from-gray-50 to-slate-50 border-2 border-gray-200 px-3 py-1.5 rounded-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <AlertCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Tạm ngưng
                </span>
              )}
            </div>

            {/* Details */}
            <div className="space-y-2">
              <InfoRow
                icon={<MapPin className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />}
                text={area}
              />
              <InfoRow
                icon={<Truck className="w-4 h-4 text-blue-500" strokeWidth={2.5} />}
                text={vehicle}
              />
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="pt-4 border-t-2 border-green-100 group-hover:border-green-200 transition-colors">
          <div className="flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-linear-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 px-3 py-2 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" strokeWidth={2.5} />
                <span 
                  className="font-black text-amber-700"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {rating}
                </span>
              </div>
            </div>

            {/* Tasks */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 px-3 py-2 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <Award className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                <div className="text-right">
                  <div 
                    className="text-lg font-black text-green-700 leading-none"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {completedTasks}
                  </div>
                  <div 
                    className="text-xs font-semibold text-green-600 leading-none mt-0.5"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    nhiệm vụ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent (optional) */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0 ${
        isActive ? 'bg-linear-to-r from-green-400 to-emerald-500' : 'bg-linear-to-r from-gray-400 to-slate-500'
      }`}></div>
    </div>
  );
};

export default CollectorCard;

/* ---------- Sub Component ---------- */

const InfoRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 group/row">
    <div className="w-7 h-7 rounded-lg bg-linear-to-br from-green-50 to-emerald-50 border border-green-200 flex items-center justify-center transition-all duration-300 group-hover/row:scale-110 group-hover/row:shadow-sm">
      {icon}
    </div>
    <span 
      className="text-sm font-semibold text-green-700 truncate group-hover:text-green-800 transition-colors"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {text}
    </span>
  </div>
);