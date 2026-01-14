"use client";

import React from "react";
import { Leaf, Award, TreePine } from "lucide-react";

const rankingData = [
  { name: "Nguyễn Văn A", reports: 32, points: 320 },
  { name: "Trần Thị B", reports: 27, points: 270 },
  { name: "Lê Văn C", reports: 21, points: 210 },
  { name: "Phạm Văn D", reports: 18, points: 180 },
  { name: "Hoàng Thị E", reports: 15, points: 150 }
];

const RankingTable = () => {
  const maxPoints = Math.max(...rankingData.map((u) => u.points));

  const getRankColor = (index: number) => {
    if (index === 0) return "from-amber-400 to-yellow-500";
    if (index === 1) return "from-slate-300 to-gray-400";
    if (index === 2) return "from-orange-400 to-amber-500";
    return "from-green-400 to-emerald-500";
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return "🏆";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "🌱";
  };

  return (
    <div className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 p-8 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes leafSway {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .leaf-sway {
          animation: leafSway 3s ease-in-out infinite;
        }
        
        .rank-card {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <TreePine
                className="w-16 h-16 text-green-600 leaf-sway"
                strokeWidth={2}
              />
              <div className="absolute inset-0 bg-green-400 blur-2xl opacity-30"></div>
            </div>
          </div>
          <h1
            className="text-6xl font-black mb-3 text-transparent bg-clip-text bg-linear-to-r from-green-700 via-emerald-600 to-teal-700"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            CHIẾN BINH XANH
          </h1>
          <p
            className="text-green-700 text-lg font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Top những người bảo vệ môi trường xuất sắc nhất
          </p>
        </div>

        {/* Ranking Cards */}
        <div className="space-y-4">
          {rankingData.map((user, index) => {
            const percentage = (user.points / maxPoints) * 100;
            const isTopThree = index < 3;

            return (
              <div
                key={index}
                className={`rank-card relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border-2 ${
                  isTopThree
                    ? "border-green-300/50 shadow-xl shadow-green-200/30"
                    : "border-green-200/30 shadow-lg"
                } hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                  animationName: "slideUp",
                  animationDuration: "0.6s"
                }}
              >
                {/* Progress Bar Background */}
                <div
                  className="absolute inset-0 opacity-10 transition-all duration-500 group-hover:opacity-20"
                  style={{
                    background: `linear-gradient(90deg, ${
                      index === 0
                        ? "rgb(34, 197, 94)"
                        : index === 1
                        ? "rgb(16, 185, 129)"
                        : index === 2
                        ? "rgb(20, 184, 166)"
                        : "rgb(52, 211, 153)"
                    } ${percentage}%, transparent ${percentage}%)`
                  }}
                ></div>

                <div className="relative p-6 flex items-center gap-6">
                  {/* Rank Badge */}
                  <div
                    className={`relative shrink-0 w-20 h-20 rounded-2xl bg-linear-to-br ${getRankColor(
                      index
                    )} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <span className="text-4xl">{getRankIcon(index)}</span>
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-2xl font-bold text-green-900 mb-2 truncate"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {user.name}
                    </h3>
                    <div
                      className="flex items-center gap-4 text-green-600"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Leaf className="w-4 h-4 text-green-500" />
                        <span className="font-semibold">
                          {user.reports} hành động
                        </span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-green-400"></div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold">
                          {percentage.toFixed(0)}% hiệu suất
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Points Display */}
                  <div className="flex flex-col items-end gap-1">
                    <div
                      className={`text-4xl font-black ${
                        isTopThree ? "text-green-600" : "text-green-500"
                      }`}
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {user.points}
                    </div>
                    <span
                      className="text-xs font-semibold text-green-600 uppercase tracking-wider"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      điểm xanh
                    </span>
                  </div>
                </div>

                {/* Bottom Accent for Top 3 */}
                {isTopThree && (
                  <div
                    className={`h-1.5 bg-linear-to-r ${getRankColor(index)}`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div
          className="mt-12 grid grid-cols-3 gap-6 animate-slide-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200/50 rounded-xl p-6 text-center shadow-lg">
            <div
              className="text-3xl font-black text-green-600 mb-2"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {rankingData.reduce((sum, u) => sum + u.reports, 0)}
            </div>
            <div
              className="text-sm text-green-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Tổng hành động
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-200/50 rounded-xl p-6 text-center shadow-lg">
            <div
              className="text-3xl font-black text-emerald-600 mb-2"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {rankingData.reduce((sum, u) => sum + u.points, 0)}
            </div>
            <div
              className="text-sm text-emerald-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Tổng điểm xanh
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-xl p-6 text-center shadow-lg">
            <div
              className="text-3xl font-black text-teal-600 mb-2"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {rankingData.length}
            </div>
            <div
              className="text-sm text-teal-700 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Chiến binh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTable;
