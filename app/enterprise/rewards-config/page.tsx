"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Gift,
  Sparkles,
  TrendingUp,
  Users,
  Coins,
  Search,
  Zap
} from "lucide-react";
import RuleItem, { RewardRuleStatus } from "./components/RuleItem";
import { useRouter } from "next/navigation";

const RewardsConfig: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive"
  >("all");

  // Mock data – thay bằng API sau
  const rules = [
    {
      id: "1",
      name: "Rác hữu cơ cơ bản",
      wasteType: "organic" as const,
      points: 10,
      minWeight: 1,
      status: "active" as RewardRuleStatus
    },
    {
      id: "2",
      name: "Rác điện tử",
      wasteType: "electronic" as const,
      points: 50,
      minWeight: 0.5,
      status: "inactive" as RewardRuleStatus
    }
  ];

  // Stats calculations
  const totalRules = rules.length;
  const activeRules = rules.filter((r) => r.status === "active").length;
  const totalPoints = rules.reduce((sum, r) => sum + r.points, 0);

  // Filter rules
  const filteredRules = rules.filter((rule) => {
    const matchesSearch =
      rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.wasteType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || rule.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  const router = useRouter();
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-teal-300/30 to-emerald-300/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-teal-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-16 h-16 rounded-3xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-white animate-bounce-subtle" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-2 tracking-tight">
                  Cấu Hình Điểm Thưởng
                </h1>
                <p className="text-gray-600 font-semibold text-lg flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Quản lý quy tắc tính điểm cho người dân
                </p>
              </div>
            </div>

            {/* Create button */}
            <Link
              href="/rewards/create"
              className="group relative px-6 py-4 rounded-2xl font-black text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Tạo quy tắc</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Rules */}
            <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-7 h-7 text-white" />
                </div>
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {totalRules}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Tổng quy tắc
              </div>
            </div>

            {/* Active Rules */}
            <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-emerald-600">
                    ACTIVE
                  </span>
                </div>
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {activeRules}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Đang áp dụng
              </div>
            </div>

            {/* Total Points */}
            <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Coins className="w-7 h-7 text-white animate-bounce-subtle" />
                </div>
                <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {totalPoints}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Tổng điểm có thể
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-white/50 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên hoặc loại rác..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none bg-white/70 font-semibold transition-all duration-300"
                />
              </div>

              {/* Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus("all")}
                  className={`px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 ${
                    filterStatus === "all"
                      ? "bg-linear-to-r from-gray-700 to-gray-900 text-white shadow-lg"
                      : "bg-white/70 text-gray-700 border-2 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setFilterStatus("active")}
                  className={`px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 ${
                    filterStatus === "active"
                      ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "bg-white/70 text-gray-700 border-2 border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  Hoạt động
                </button>
                <button
                  onClick={() => setFilterStatus("inactive")}
                  className={`px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 ${
                    filterStatus === "inactive"
                      ? "bg-linear-to-r from-gray-500 to-gray-600 text-white shadow-lg"
                      : "bg-white/70 text-gray-700 border-2 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  Tạm tắt
                </button>
              </div>
            </div>
          </div>

          {/* Rules List */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-white/50 overflow-hidden">
            {filteredRules.length > 0 ? (
              <div className="divide-y-2 divide-gray-100">
                {filteredRules.map((rule, index) => (
                  <div
                    key={rule.id}
                    className="hover:bg-linear-to-r hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <RuleItem
                      key={rule.id}
                      name={rule.name}
                      wasteType={
                        rule.wasteType as
                          | "organic"
                          | "recycle"
                          | "electronic"
                          | "hazardous"
                      }
                      points={rule.points}
                      minWeight={rule.minWeight}
                      status={rule.status}
                      onEdit={() => router.push(`/rewards/edit/${rule.id}`)}
                      onDelete={() => console.log("Delete", rule.id)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-6">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Không tìm thấy quy tắc
                </h3>
                <p className="text-gray-600 font-semibold text-center">
                  Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác
                </p>
              </div>
            )}
          </div>

          {/* Info Banner */}
          <div className="bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white mb-2">
                  Khuyến khích người dân tham gia
                </h3>
                <p className="text-white/90 font-semibold">
                  Hệ thống điểm thưởng giúp động viên cộng đồng phân loại rác
                  đúng cách và bảo vệ môi trường
                </p>
              </div>
              <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse shrink-0" />
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

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default RewardsConfig;
