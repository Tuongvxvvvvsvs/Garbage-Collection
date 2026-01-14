"use client";

import React from "react";
import { Leaf, TrendingUp, Award, Sparkles } from "lucide-react";

const RewardSummary = () => {
  // Demo data
  const totalPoints = 320;
  const monthlyPoints = 85;
  const rank = 12;
  const nextRankPoints = 400;

  const progress = Math.min(totalPoints / nextRankPoints * 100, 100);

  return (
    <div className="relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Poppins:wght@400;600;800&display=swap');
        
        @keyframes leafFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes gentleGlow {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 8px 40px rgba(34, 197, 94, 0.35);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes progressFill {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .leaf-float {
          animation: leafFloat 3s ease-in-out infinite;
        }
        
        .gentle-glow {
          animation: gentleGlow 3s ease-in-out infinite;
        }
        
        .fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
      `}</style>

      <div className="relative bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-green-200/50 gentle-glow">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-teal-400 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Leaf Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 Q40 20 40 30 Q40 40 30 50 Q20 40 20 30 Q20 20 30 10' fill='%2322c55e' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6 fade-in-scale">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30 leaf-float">
                    <Leaf className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow-md">
                    <Sparkles className="w-2.5 h-2.5 text-white ml-0.5" />
                  </div>
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-green-800"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Điểm Xanh Của Bạn
                  </h2>
                  <p
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Cùng bảo vệ hành tinh xanh 🌍
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Points Display */}
          <div
            className="mb-6 fade-in-scale"
            style={{ animationDelay: "100ms" }}
          >
            <div className="bg-linear-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-200/50 shadow-xl relative overflow-hidden">
              {/* Decorative leaf */}
              <div className="absolute -right-6 -top-6 w-32 h-32 opacity-10">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full transform rotate-12"
                >
                  <path
                    d="M50 10 Q70 30 70 50 Q70 70 50 90 Q30 70 30 50 Q30 30 50 10"
                    fill="currentColor"
                    className="text-green-500"
                  />
                </svg>
              </div>

              <div className="relative">
                <div
                  className="text-sm uppercase tracking-wider text-green-600/70 font-semibold mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Tổng điểm môi trường
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-600 via-emerald-500 to-teal-600"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {totalPoints}
                  </span>
                  <span
                    className="text-2xl font-bold text-green-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    điểm
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-emerald-400 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white" />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Hành động vì môi trường
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Monthly Points */}
            <div className="fade-in-scale" style={{ animationDelay: "200ms" }}>
              <div className="bg-linear-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-green-200/50 hover:border-green-300 transition-all hover:scale-105 duration-300 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs uppercase tracking-wider text-green-700 font-bold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Tháng này
                  </span>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <TrendingUp
                      className="w-4 h-4 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <div
                  className="text-3xl font-black text-green-700 mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  +{monthlyPoints}
                </div>
                <div
                  className="flex items-center gap-1 text-xs text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Đang tăng trưởng
                </div>
              </div>
            </div>

            {/* Rank */}
            <div className="fade-in-scale" style={{ animationDelay: "300ms" }}>
              <div className="bg-linear-to-br from-amber-100/80 to-yellow-100/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-amber-200/50 hover:border-amber-300 transition-all hover:scale-105 duration-300 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs uppercase tracking-wider text-amber-700 font-bold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Xếp hạng
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div
                  className="text-3xl font-black text-amber-700 mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  #{rank}
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) =>
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full ${i < 3
                        ? "bg-linear-to-r from-amber-400 to-yellow-400"
                        : "bg-amber-200"}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="fade-in-scale" style={{ animationDelay: "400ms" }}>
            <div className="bg-linear-to-br from-white/90 to-green-50/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200/50 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span
                  className="text-sm font-bold text-green-700 flex items-center gap-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <Leaf className="w-4 h-4" />
                  Tiến độ lên hạng
                </span>
                <span
                  className="text-sm font-black text-green-600"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {totalPoints} / {nextRankPoints}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-green-100 rounded-full overflow-hidden border border-green-200/50">
                <div
                  className="h-full bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full transition-all duration-1000 ease-out relative origin-left"
                  style={{
                    width: `${progress}%`,
                    animation: "progressFill 1.5s ease-out"
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                </div>

                {/* Leaf indicator at progress point */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000"
                  style={{ left: `${progress}%` }}
                >
                  <div className="w-6 h-6 -ml-3 bg-white rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg">
                    <Leaf className="w-3 h-3 text-green-500" />
                  </div>
                </div>
              </div>

              {/* Percentage Display */}
              <div className="mt-3 flex justify-between items-center">
                <span
                  className="text-xs text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Tiếp tục cố gắng! 💪
                </span>
                <span
                  className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {progress.toFixed(0)}%
                </span>
              </div>
            </div>
          </div>

          {/* Motivational Message */}
          <div
            className="mt-6 text-center fade-in-scale"
            style={{ animationDelay: "500ms" }}
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200/50">
              <span className="text-2xl">🌱</span>
              <span
                className="text-sm font-semibold text-green-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Mỗi hành động nhỏ tạo nên sự thay đổi lớn
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-4 right-4 w-16 h-16 border-4 border-green-200/30 rounded-full" />
          <div className="absolute top-2 right-2 w-20 h-20 border-2 border-emerald-200/20 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-teal-200/30 rounded-full" />
          <div className="absolute bottom-2 left-2 w-20 h-20 border-2 border-green-200/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default RewardSummary;
