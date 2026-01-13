"use client";

import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Activity
} from "lucide-react";

type Stats = {
  totalReports: number;
  pending: number;
  resolved: number;
  rejected: number;
};

const sampleStats: Stats = {
  totalReports: 120,
  pending: 45,
  resolved: 60,
  rejected: 15
};

const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({
  value,
  duration = 2000
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <>{count}</>;
};

const StatsCard: React.FC = () => {
  const resolvedPercentage = Math.round(
    (sampleStats.resolved / sampleStats.totalReports) * 100
  );

  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-6 rounded-3xl relative overflow-hidden w-full">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Sora:wght@400;600;700;800&display=swap");

        * {
          font-family: "DM Sans", -apple-system, sans-serif;
        }

        .stat-number,
        h1,
        h2,
        h3 {
          font-family: "Sora", -apple-system, sans-serif;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(2deg);
          }
          66% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }

        @keyframes blob {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.95);
            opacity: 1;
          }
        }

        .blob-bg {
          animation: blob 8s ease-in-out infinite;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-3d:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .neo-shadow {
          box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25),
            12px 12px 0px rgba(0, 0, 0, 0.15);
        }

        .neo-shadow:hover {
          box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.3),
            16px 16px 0px rgba(0, 0, 0, 0.2);
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .icon-bounce {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500/20 rounded-full blob-bg filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blob-bg filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-500/20 rounded-full blob-bg filter blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 slide-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
            Thống kê Báo cáo
          </h1>
          <p className="text-base md:text-lg text-purple-200 font-medium">
            Tổng quan hiệu suất và trạng thái xử lý
          </p>
        </div>

        {/* Main Stats Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Total Reports - Hero Card */}
          <div className="card-3d neo-shadow bg-linear-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-6 border-4 border-black slide-up overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Activity className="w-10 h-10 text-white mb-3 icon-bounce" />
            <div className="stat-number text-5xl md:text-6xl font-black text-white mb-2">
              <AnimatedCounter value={sampleStats.totalReports} />
            </div>
            <div className="text-white font-bold text-base uppercase tracking-wide mb-2">
              Tổng báo cáo
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-semibold">
                +12% so với tháng trước
              </span>
            </div>
          </div>

          {/* Pending */}
          <div className="card-3d neo-shadow bg-amber-400 rounded-3xl p-6 border-4 border-black slide-up relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-600/30 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-200/50 rounded-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-600 rounded-2xl mb-3 pulse-ring">
                <AlertCircle className="w-7 h-7 text-white" strokeWidth={3} />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-black text-amber-950 mb-2">
                <AnimatedCounter value={sampleStats.pending} />
              </div>
              <div className="text-amber-950 font-bold text-base uppercase tracking-wide mb-2">
                Đang xử lý
              </div>
              <div className="bg-amber-950/20 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-amber-950 rounded-full transition-all duration-1000" />
              </div>
            </div>
          </div>

          {/* Resolved */}
          <div className="card-3d neo-shadow bg-emerald-400 rounded-3xl p-6 border-4 border-black slide-up relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-600/20 rounded-full -translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-600 rounded-2xl mb-3 rotate-12 pulse-ring">
                <CheckCircle2
                  className="w-7 h-7 text-white -rotate-12"
                  strokeWidth={3}
                />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-black text-emerald-950 mb-2">
                <AnimatedCounter value={sampleStats.resolved} />
              </div>
              <div className="text-emerald-950 font-bold text-base uppercase tracking-wide mb-2">
                Đã giải quyết
              </div>

              {/* Success Rate Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-950 text-white px-3 py-1.5 rounded-full font-bold text-sm">
                <span className="text-lg">{resolvedPercentage}%</span>
                <span className="text-xs">Thành công</span>
              </div>
            </div>
          </div>

          {/* Rejected */}
          <div className="card-3d neo-shadow bg-rose-400 rounded-3xl p-6 border-4 border-black slide-up relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-rose-600/30 rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-rose-600 rounded-2xl mb-3 -rotate-12 pulse-ring">
                <XCircle
                  className="w-7 h-7 text-white rotate-12"
                  strokeWidth={3}
                />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-black text-rose-950 mb-2">
                <AnimatedCounter value={sampleStats.rejected} />
              </div>
              <div className="text-rose-950 font-bold text-base uppercase tracking-wide mb-2">
                Từ chối
              </div>
              <div className="text-sm font-semibold text-rose-950/70">
                {Math.round(
                  (sampleStats.rejected / sampleStats.totalReports) * 100
                )}
                % của tổng số
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary Cards - 1x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Performance Card */}
          <div className="card-3d neo-shadow bg-white rounded-3xl p-6 border-4 border-black slide-up">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Hiệu suất xử lý
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Hoàn thành</span>
                <span className="text-2xl font-black gradient-text">
                  {resolvedPercentage}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000" />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card-3d neo-shadow bg-linear-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 border-4 border-black slide-up">
            <h3 className="text-xl font-bold text-white mb-3">
              Thời gian trung bình
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">2.4</span>
              <span className="text-xl font-bold text-white/80">ngày</span>
            </div>
            <p className="text-white/70 font-medium mt-2 text-sm">
              Thời gian xử lý mỗi báo cáo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
