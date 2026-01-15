"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Truck,
  ClipboardList,
  Gift,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Building2,
  Activity,
  Star
} from "lucide-react";
import { useRouter } from "next/navigation";

const modules = [
  {
    title: "Dashboard",
    description: "Tổng quan hoạt động hệ thống",
    icon: <LayoutDashboard className="w-7 h-7" />,
    color: "from-blue-500 to-cyan-600",
    bgGlow: "from-blue-400/30 to-cyan-400/30",
    path: "/enterprise/dashboard",
    badge: "Tổng quan"
  },
  {
    title: "Collectors",
    description: "Quản lý nhân viên thu gom",
    icon: <Users className="w-7 h-7" />,
    color: "from-emerald-500 to-green-600",
    bgGlow: "from-emerald-400/30 to-green-400/30",
    path: "/enterprise/collectors",
    badge: "Nhân sự"
  },
  {
    title: "Capacity",
    description: "Theo dõi năng lực & phương tiện",
    icon: <Truck className="w-7 h-7" />,
    color: "from-orange-500 to-amber-600",
    bgGlow: "from-orange-400/30 to-amber-400/30",
    path: "/enterprise/capacity",
    badge: "Logistics"
  },
  {
    title: "Requests",
    description: "Yêu cầu thu gom từ người dân",
    icon: <ClipboardList className="w-7 h-7" />,
    color: "from-purple-500 to-pink-600",
    bgGlow: "from-purple-400/30 to-pink-400/30",
    path: "/enterprise/requests",
    badge: "Yêu cầu"
  },
  {
    title: "Reward Configs",
    description: "Cấu hình điểm thưởng & quy tắc",
    icon: <Gift className="w-7 h-7" />,
    color: "from-red-500 to-rose-600",
    bgGlow: "from-red-400/30 to-rose-400/30",
    path: "/enterprise/reward-configs",
    badge: "Thưởng"
  }
];

const Enterprise: React.FC = () => {
  const router = useRouter();
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden p-6 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Hero Header */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-white animate-bounce-subtle" />
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight">
                  Enterprise Management
                </h1>
                <Star className="w-8 h-8 text-yellow-500 animate-spin-slow" />
              </div>
              <p className="text-xl text-gray-600 font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Quản lý toàn bộ hoạt động thu gom & điểm thưởng
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">24/7</div>
                  <div className="text-xs font-bold text-gray-600">
                    Hoạt động
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">142</div>
                  <div className="text-xs font-bold text-gray-600">
                    Nhân viên
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">38</div>
                  <div className="text-xs font-bold text-gray-600">
                    Phương tiện
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">+28%</div>
                  <div className="text-xs font-bold text-gray-600">
                    Tăng trưởng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-black text-gray-900">Modules</h2>
            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={module.title}
                onMouseEnter={() => setHoveredModule(index)}
                onMouseLeave={() => setHoveredModule(null)}
                className={`group relative transition-all duration-300 ${
                  hoveredModule !== null && hoveredModule !== index
                    ? "opacity-60 scale-95"
                    : "opacity-100"
                }`}
              >
                {/* Glow Effect on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${module.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border-2 border-white/50 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-gray-100/50 to-transparent rounded-bl-[100px] opacity-50"></div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-black text-gray-600 uppercase tracking-wide">
                      {module.badge}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-linear-to-br ${module.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${module.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      {module.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:${module.color} transition-all duration-300">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 font-semibold leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => router.push(module.path)}
                    className={`group/btn relative w-full px-6 py-4 rounded-2xl font-bold text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${module.color} group-hover/btn:scale-110 transition-transform duration-300`}
                    ></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-200/50 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Tối ưu hóa vận hành doanh nghiệp
                </h3>
                <p className="text-white/90 font-semibold">
                  Quản lý thông minh, hiệu quả cao với công nghệ hiện đại
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
              <Star className="w-8 h-8 text-yellow-300 animate-spin-slow" />
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

export default Enterprise;
