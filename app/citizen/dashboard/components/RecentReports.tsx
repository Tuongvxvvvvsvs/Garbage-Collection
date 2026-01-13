"use client";

import React from "react";
import {
  AlertCircle,
  CheckCircle2,
  XCircle,
  Tag,
  Zap,
  Archive,
  Calendar,
  TrendingUp
} from "lucide-react";

type Report = {
  id: string;
  title: string;
  status: "pending" | "resolved" | "rejected";
  createdAt: string;
  priority: "low" | "medium" | "high";
  category: "product" | "service" | "delivery" | "payment";
};

const sampleReports: Report[] = [
  {
    id: "1",
    title: "Rác tồn đọng 3 ngày tại Lê Lợi",
    status: "pending",
    createdAt: "2026-01-10",
    priority: "high",
    category: "delivery"
  },
  {
    id: "2",
    title: "Xe thu gom đến muộn",
    status: "resolved",
    createdAt: "2026-01-08",
    priority: "medium",
    category: "service"
  },
  {
    id: "3",
    title: "Thanh toán bị trễ",
    status: "rejected",
    createdAt: "2026-01-07",
    priority: "high",
    category: "payment"
  }
];

const statusConfig = {
  pending: {
    color: "from-amber-400 to-orange-500",
    bg: "bg-linear-to-br from-amber-50 to-orange-50",
    icon: AlertCircle,
    label: "Đang xử lý"
  },
  resolved: {
    color: "from-emerald-400 to-teal-500",
    bg: "bg-linear-to-br from-emerald-50 to-teal-50",
    icon: CheckCircle2,
    label: "Đã giải quyết"
  },
  rejected: {
    color: "from-rose-400 to-pink-500",
    bg: "bg-linear-to-br from-rose-50 to-pink-50",
    icon: XCircle,
    label: "Từ chối"
  }
};

const priorityConfig = {
  low: {
    dot: "bg-blue-400",
    text: "text-blue-700",
    label: "Thấp"
  },
  medium: {
    dot: "bg-amber-400",
    text: "text-amber-700",
    label: "Trung bình"
  },
  high: {
    dot: "bg-rose-500",
    text: "text-rose-700",
    label: "Cao"
  }
};

const categoryConfig = {
  product: { icon: Tag, gradient: "from-purple-500 to-pink-500" },
  service: { icon: Zap, gradient: "from-blue-500 to-cyan-500" },
  delivery: { icon: Archive, gradient: "from-orange-500 to-red-500" },
  payment: { icon: Calendar, gradient: "from-green-500 to-emerald-500" }
};

const RecentReports: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap");

        * {
          font-family: "Manrope", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3 {
          font-family: "Outfit", -apple-system, sans-serif;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .report-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .report-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .icon-glow {
          filter: drop-shadow(0 0 8px currentColor);
        }

        .stat-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="">
        {/* Header Section */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-3 bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                Báo cáo gần đây
              </h1>
              <p className="text-slate-600 text-lg font-medium">
                Theo dõi và quản lý các báo cáo của bạn
              </p>
            </div>
            <div className="glass-effect px-6 py-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm text-slate-600 font-medium">
                    Tổng báo cáo
                  </p>
                  <p className="text-3xl font-bold stat-number">
                    {sampleReports.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            {
              status: "pending",
              count: sampleReports.filter((r) => r.status === "pending").length
            },
            {
              status: "resolved",
              count: sampleReports.filter((r) => r.status === "resolved").length
            },
            {
              status: "rejected",
              count: sampleReports.filter((r) => r.status === "rejected").length
            }
          ].map((stat) => {
            const config =
              statusConfig[stat.status as keyof typeof statusConfig];
            return (
              <div
                key={stat.status}
                className="glass-effect p-6 rounded-2xl animate-slide-up"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 font-medium mb-2">
                      {config.label}
                    </p>
                    <p className="text-4xl font-bold text-slate-900">
                      {stat.count}
                    </p>
                  </div>
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${config.color} flex items-center justify-center icon-glow`}
                  >
                    <config.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {sampleReports.map((report) => {
            const StatusIcon = statusConfig[report.status].icon;
            const CategoryIcon = categoryConfig[report.category].icon;

            return (
              <div
                key={report.id}
                className="report-card glass-effect p-6 rounded-2xl cursor-pointer animate-slide-up"
              >
                <div className="flex items-center justify-between">
                  {/* Left Section */}
                  <div className="flex items-center gap-6">
                    {/* Category Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-linear-to-br ${
                        categoryConfig[report.category].gradient
                      } flex items-center justify-center shrink-0 icon-glow`}
                    >
                      <CategoryIcon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {report.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500 font-medium">
                          {new Date(report.createdAt).toLocaleDateString(
                            "vi-VN",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric"
                            }
                          )}
                        </span>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              priorityConfig[report.priority].dot
                            } animate-pulse-slow`}
                          />
                          <span
                            className={`text-sm font-semibold ${
                              priorityConfig[report.priority].text
                            }`}
                          >
                            Ưu tiên: {priorityConfig[report.priority].label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Status Badge */}
                  <div
                    className={`${
                      statusConfig[report.status].bg
                    } px-5 py-3 rounded-xl border-2 border-white shadow-lg`}
                  >
                    <div className="flex items-center gap-2">
                      <StatusIcon
                        className={`w-5 h-5 bg-linear-to-br ${
                          statusConfig[report.status].color
                        } text-transparent`}
                        style={{
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                        }}
                      />
                      <span className="font-bold text-slate-900">
                        {statusConfig[report.status].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress bar for pending items */}
                {report.status === "pending" && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Tiến độ xử lý
                      </span>
                      <span className="text-sm font-bold text-purple-600">
                        45%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <button className="glass-effect px-8 py-4 rounded-xl font-bold text-slate-700 hover:scale-105 transition-transform duration-300 shadow-lg">
            Xem tất cả báo cáo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentReports;
