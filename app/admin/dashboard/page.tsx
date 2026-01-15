"use client";

import React, { useState } from "react";
import {
  Users,
  ClipboardList,
  Clock,
  Coins,
  Activity,
  Server,
  TrendingUp,
  Zap,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ArrowUp,
  ArrowDown,
  Sparkles,
  BarChart3,
  PieChart,
  Calendar
} from "lucide-react";

const stats = [
  {
    label: "Tổng yêu cầu",
    value: 1240,
    icon: <ClipboardList />,
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-400/20 to-cyan-400/20",
    change: "+12.5%",
    trend: "up"
  },
  {
    label: "Đang chờ xử lý",
    value: 87,
    icon: <Clock />,
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-400/20 to-amber-400/20",
    change: "-8.3%",
    trend: "down"
  },
  {
    label: "Collectors hoạt động",
    value: 42,
    icon: <Users />,
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-400/20 to-green-400/20",
    change: "+5.2%",
    trend: "up"
  },
  {
    label: "Tổng điểm thưởng",
    value: "58,200",
    icon: <Coins />,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-400/20 to-pink-400/20",
    change: "+23.8%",
    trend: "up"
  }
];

const activities = [
  {
    id: 1,
    text: "Collector Nguyễn Văn A hoàn thành yêu cầu #1023",
    time: "5 phút trước",
    type: "success",
    icon: <CheckCircle2 className="w-4 h-4" />
  },
  {
    id: 2,
    text: "Yêu cầu #1041 được gán cho Collector Trần Văn B",
    time: "12 phút trước",
    type: "info",
    icon: <Activity className="w-4 h-4" />
  },
  {
    id: 3,
    text: "Cập nhật quy tắc thưởng cho rác tái chế",
    time: "25 phút trước",
    type: "warning",
    icon: <AlertCircle className="w-4 h-4" />
  },
  {
    id: 4,
    text: "Collector Lê Văn C tạm ngưng hoạt động",
    time: "1 giờ trước",
    type: "error",
    icon: <XCircle className="w-4 h-4" />
  },
  {
    id: 5,
    text: "Phê duyệt 15 yêu cầu thu gom mới",
    time: "2 giờ trước",
    type: "success",
    icon: <CheckCircle2 className="w-4 h-4" />
  }
];

const systemStatus = [
  { name: "API", status: "operational", uptime: "99.9%" },
  { name: "Thanh toán", status: "operational", uptime: "99.8%" },
  { name: "Thông báo", status: "degraded", uptime: "95.2%" },
  { name: "Database", status: "operational", uptime: "99.9%" }
];

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "day" | "week" | "month"
  >("week");

  const getActivityStyle = (type: string) => {
    switch (type) {
      case "success":
        return {
          bg: "bg-emerald-100",
          text: "text-emerald-700",
          border: "border-emerald-200"
        };
      case "info":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-200"
        };
      case "warning":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          border: "border-amber-200"
        };
      case "error":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          border: "border-red-200"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200"
        };
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden p-6 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white animate-bounce-subtle" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 mb-2 tracking-tight">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 font-semibold text-lg flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Tổng quan hoạt động toàn hệ thống
              </p>
            </div>
          </div>

          {/* Period Selector */}
          <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 border-2 border-white/50 shadow-lg">
            {(["day", "week", "month"] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  selectedPeriod === period
                    ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {period === "day"
                  ? "Hôm nay"
                  : period === "week"
                  ? "Tuần"
                  : "Tháng"}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${stat.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${stat.color} rounded-2xl blur-md opacity-30`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Trend Badge */}
                  <div
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${
                      stat.trend === "up"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )}
                    {stat.change}
                  </div>
                </div>

                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-2">
                  {stat.label}
                </p>
                <p className="text-4xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:${stat.color} transition-all">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="xl:col-span-2 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">
                  Hoạt động gần đây
                </h2>
              </div>
              <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm transition-all duration-300">
                Xem tất cả
              </button>
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => {
                const style = getActivityStyle(activity.type);
                return (
                  <div
                    key={activity.id}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 border-2 border-transparent hover:border-gray-200"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl ${style.bg} border-2 ${style.border} flex items-center justify-center shrink-0 ${style.text} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {activity.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-semibold leading-relaxed">
                        {activity.text}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500 font-medium">
                          {activity.time}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <TrendingUp className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Hệ thống</h2>
            </div>

            <div className="space-y-4">
              {systemStatus.map((system, index) => (
                <div
                  key={system.name}
                  className="group p-4 rounded-2xl bg-gray-50 hover:bg-linear-to-r hover:from-emerald-50 hover:to-teal-50 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-900 font-bold">
                      {system.name}
                    </span>
                    {system.status === "operational" ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-black text-emerald-700">
                          Hoạt động
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                        <span className="text-xs font-black text-amber-700">
                          Chậm
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          system.status === "operational"
                            ? "bg-linear-to-r from-emerald-400 to-green-500"
                            : "bg-linear-to-r from-amber-400 to-yellow-500"
                        }`}
                        style={{ width: system.uptime }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-600 w-12 text-right">
                      {system.uptime}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Status */}
            <div className="mt-6 p-5 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                <div>
                  <div className="font-black text-lg">Hệ thống ổn định</div>
                  <div className="text-sm text-white/90 font-semibold">
                    Tất cả dịch vụ hoạt động bình thường
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-white/80 text-sm font-bold">Hôm nay</div>
                <div className="text-white text-2xl font-black">15/01/2026</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <PieChart className="w-7 h-7 text-white animate-spin-slow" />
              </div>
              <div>
                <div className="text-white/80 text-sm font-bold">Hiệu suất</div>
                <div className="text-white text-2xl font-black">94.8%</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-yellow-300 animate-pulse" />
              </div>
              <div>
                <div className="text-white/80 text-sm font-bold">Mục tiêu</div>
                <div className="text-white text-2xl font-black">89/100</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
