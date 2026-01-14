"use client";

import React from "react";
import {
  Gift,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  XCircle,
  Calendar
} from "lucide-react";

const rewardHistory = [
  {
    date: "10/01/2026",
    description: "Báo cáo rác hợp lệ",
    points: 20,
    type: "add",
    status: "Hoàn thành"
  },
  {
    date: "08/01/2026",
    description: "Phân loại rác đúng",
    points: 10,
    type: "add",
    status: "Hoàn thành"
  },
  {
    date: "05/01/2026",
    description: "Báo cáo không hợp lệ",
    points: -10,
    type: "subtract",
    status: "Bị từ chối"
  }
];

const RewardHistoryTable = () => {
  const totalPoints = rewardHistory.reduce(
    (sum, item) => sum + (item.type === "add" ? item.points : -item.points),
    0
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@400;500;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .timeline-card {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 animate-fade-up">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-float">
                    <Gift className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h1
                  className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-900 via-orange-800 to-rose-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Lịch Sử Điểm Thưởng
                </h1>
              </div>
              <p
                className="text-lg text-slate-600 ml-17"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Theo dõi hành trình đóng góp của bạn
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-orange-200/50 min-w-50">
              <div
                className="text-sm text-slate-500 mb-2 font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Tổng điểm
              </div>
              <div
                className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                +{totalPoints}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 bg-linear-to-r from-emerald-200 to-teal-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-300 via-rose-300 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {rewardHistory.map((item, index) => {
              const isPositive = item.type === "add";
              const isCompleted = item.status === "Hoàn thành";

              return (
                <div
                  key={index}
                  className="timeline-card relative pl-20"
                  style={{
                    animationName: "slideInFromLeft",
                    animationDuration: "0.6s",
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "forwards"
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-5 top-8 w-6 h-6 rounded-full border-4 border-white ${
                      isPositive
                        ? "bg-linear-to-br from-emerald-400 to-teal-500"
                        : "bg-linear-to-br from-rose-400 to-red-500"
                    } shadow-lg z-10`}
                  ></div>

                  {/* Card */}
                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${
                      isPositive
                        ? "border-emerald-200/50 hover:border-emerald-300/80"
                        : "border-rose-200/50 hover:border-rose-300/80"
                    } transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      {/* Left Content */}
                      <div className="flex-1">
                        {/* Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span
                            className="text-sm font-medium text-slate-500"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {item.date}
                          </span>
                        </div>

                        {/* Description */}
                        <h3
                          className="text-2xl font-bold text-slate-800 mb-2"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.description}
                        </h3>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-500" />
                          )}
                          <span
                            className={`text-sm font-semibold ${
                              isCompleted ? "text-emerald-700" : "text-rose-700"
                            }`}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>

                      {/* Right Points Display */}
                      <div
                        className={`flex flex-col items-end justify-center min-w-30 p-4 rounded-2xl ${
                          isPositive
                            ? "bg-linear-to-br from-emerald-50 to-teal-50"
                            : "bg-linear-to-br from-rose-50 to-red-50"
                        } group-hover:scale-105 transition-transform duration-300`}
                      >
                        {isPositive ? (
                          <TrendingUp className="w-6 h-6 text-emerald-500 mb-2" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-rose-500 mb-2" />
                        )}

                        <div
                          className={`text-4xl font-black ${
                            isPositive ? "text-emerald-600" : "text-rose-600"
                          }`}
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {isPositive ? "+" : ""}
                          {item.type === "add" ? item.points : -item.points}
                        </div>

                        <span
                          className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          điểm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="mt-12 grid grid-cols-3 gap-6 animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-emerald-200/50 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div
              className="text-3xl font-black text-emerald-600 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {rewardHistory.filter((i) => i.type === "add").length}
            </div>
            <div
              className="text-sm text-slate-600 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Hành động tích cực
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-orange-200/50 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-linear-to-br from-orange-100 to-amber-100 flex items-center justify-center">
              <Gift className="w-6 h-6 text-orange-600" />
            </div>
            <div
              className="text-3xl font-black text-orange-600 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {rewardHistory.length}
            </div>
            <div
              className="text-sm text-slate-600 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Tổng hoạt động
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-rose-200/50 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-linear-to-br from-rose-100 to-red-100 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-rose-600" />
            </div>
            <div
              className="text-3xl font-black text-rose-600 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {rewardHistory.filter((i) => i.type === "subtract").length}
            </div>
            <div
              className="text-sm text-slate-600 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Cần cải thiện
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardHistoryTable;
