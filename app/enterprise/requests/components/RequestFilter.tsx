"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronDown,
  CheckCircle2
} from "lucide-react";

interface FilterState {
  search: string;
  status: string;
  area: string;
  priority: string;
  timeRange: string;
}

const RequestFilter: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "",
    area: "",
    priority: "",
    timeRange: ""
  });

  const [activeFilters, setActiveFilters] = useState(0);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));

    // Count active filters
    const newFilters = { ...filters, [key]: value };
    const count = Object.values(newFilters).filter((v) => v !== "").length;
    setActiveFilters(count);
  };

  const handleReset = () => {
    setFilters({
      search: "",
      status: "",
      area: "",
      priority: "",
      timeRange: ""
    });
    setActiveFilters(0);
  };

  const handleApply = () => {
    console.log("Applying filters:", filters);
  };

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 backdrop-blur-sm">
      {/* Gradient top accent */}
      <div className="h-1 w-full bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-size-200 animate-gradient" />

      <div className="p-8 space-y-8">
        {/* Header with badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                <Filter className="w-6 h-6 text-white" />
              </div>
              {activeFilters > 0 && (
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-linear-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-scale-in">
                  <span className="text-xs font-black text-white">
                    {activeFilters}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h2
                className="text-2xl font-black text-gray-900 tracking-tight"
                style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
              >
                Bộ lọc yêu cầu
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-0.5">
                Tìm kiếm và lọc yêu cầu theo tiêu chí
              </p>
            </div>
          </div>

          {activeFilters > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700">
                {activeFilters} bộ lọc đang áp dụng
              </span>
            </div>
          )}
        </div>

        {/* Search bar with enhanced styling */}
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
          <div className="relative flex items-center">
            <div className="absolute left-5 flex items-center justify-center w-10 h-10 bg-linear-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform">
              <Search className="w-5 h-5 text-emerald-600" />
            </div>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              placeholder="Tìm theo mã yêu cầu, khu vực, mô tả..."
              className="w-full pl-20 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 text-gray-700 font-medium placeholder:text-gray-400 bg-white"
            />
            {filters.search && (
              <button
                onClick={() => handleFilterChange("search", "")}
                className="absolute right-5 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <span className="text-xs text-gray-600">×</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Status Filter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Trạng thái
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full" />
                <select
                  aria-label="status"
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                  className="w-full pl-8 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-sm font-semibold text-gray-700 bg-white cursor-pointer transition-all duration-300 appearance-none"
                >
                  <option value="">Tất cả trạng thái</option>
                  <option value="pending">⏳ Chờ xử lý</option>
                  <option value="assigned">🚚 Đã gán collector</option>
                  <option value="completed">✅ Hoàn thành</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Area Filter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Khu vực
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
                <select
                  aria-label="area"
                  value={filters.area}
                  onChange={(e) => handleFilterChange("area", e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-sm font-semibold text-gray-700 bg-white cursor-pointer transition-all duration-300 appearance-none"
                >
                  <option value="">Tất cả khu vực</option>
                  <option value="q1">📍 Quận 1</option>
                  <option value="q7">📍 Quận 7</option>
                  <option value="td">📍 TP. Thủ Đức</option>
                  <option value="q3">📍 Quận 3</option>
                  <option value="bt">📍 Bình Thạnh</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Priority Filter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Mức độ ưu tiên
              </label>
              <div className="relative">
                <AlertTriangle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-600" />
                <select
                  aria-label="priority"
                  value={filters.priority}
                  onChange={(e) =>
                    handleFilterChange("priority", e.target.value)
                  }
                  className="w-full pl-11 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 hover:border-orange-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-sm font-semibold text-gray-700 bg-white cursor-pointer transition-all duration-300 appearance-none"
                >
                  <option value="">Tất cả mức độ</option>
                  <option value="high">🔴 Cao</option>
                  <option value="medium">🟡 Trung bình</option>
                  <option value="low">🟢 Thấp</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Date range and actions */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-6 border-t border-gray-200">
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
              Khoảng thời gian
            </label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-600" />
              <select
                aria-label="timeRange"
                value={filters.timeRange}
                onChange={(e) =>
                  handleFilterChange("timeRange", e.target.value)
                }
                className="w-full lg:w-64 pl-11 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 hover:border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 text-sm font-semibold text-gray-700 bg-white cursor-pointer transition-all duration-300 appearance-none"
              >
                <option value="">Tất cả thời gian</option>
                <option value="today">📅 Hôm nay</option>
                <option value="week">📅 7 ngày qua</option>
                <option value="month">📅 30 ngày qua</option>
                <option value="quarter">📅 3 tháng qua</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:mt-6">
            <button
              onClick={handleReset}
              className="flex-1 lg:flex-initial group/btn relative px-6 py-3.5 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-gray-300"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
              <div className="relative flex items-center justify-center gap-2">
                <RotateCcw className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-500" />
                <span>Đặt lại</span>
              </div>
            </button>

            <button
              onClick={handleApply}
              className="flex-1 lg:flex-initial group/btn relative px-8 py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-size-200 hover:bg-pos-100 transition-all duration-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
              <div className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                <span>Áp dụng lọc</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .bg-size-200 {
          background-size: 200% 100%;
          background-position: 0% 0%;
        }

        .hover\\:bg-pos-100:hover {
          background-position: 100% 0%;
        }
      `}</style>
    </div>
  );
};

export default RequestFilter;
