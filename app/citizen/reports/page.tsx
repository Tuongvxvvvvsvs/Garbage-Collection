"use client";

import React, { useState } from "react";
import {
  Search,
  Grid,
  List,
  Download,
  RefreshCw,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle2,
  XCircle
} from "lucide-react";
import ReportCard from "./components/ReportCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Demo dữ liệu báo cáo
const demoReports = [
  {
    id: "1",
    title: "Đống rác lớn trên vỉa hè",
    category: "Rác sinh hoạt",
    location: "Số 23, đường ABC, Quận X",
    status: "Đang xử lý" as const,
    thumbnail: "/demo1.jpg",
    date: "2 giờ trước",
    priority: "high" as const
  },
  {
    id: "2",
    title: "Rác thải xây dựng chưa được thu gom",
    category: "Rác xây dựng",
    location: "Đường XYZ, Quận Y",
    status: "Hoàn thành" as const,
    thumbnail: "/demo2.jpg",
    date: "5 giờ trước",
    priority: "medium" as const
  },
  {
    id: "3",
    title: "Rác tái chế cần phân loại",
    category: "Tái chế",
    location: "Khu đô thị ABC",
    status: "Đang xử lý" as const,
    thumbnail: "/demo3.jpg",
    date: "1 ngày trước",
    priority: "low" as const
  },
  {
    id: "4",
    title: "Rác thải nguy hại",
    category: "Nguy hại",
    location: "Khu công nghiệp XYZ",
    status: "Hủy" as const,
    thumbnail: "/demo1.jpg",
    date: "2 ngày trước",
    priority: "high" as const
  }
];

const Reports: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const stats = {
    total: demoReports.length,
    pending: demoReports.filter((r) => r.status === "Đang xử lý").length,
    completed: demoReports.filter((r) => r.status === "Hoàn thành").length,
    cancelled: demoReports.filter((r) => r.status === "Hủy").length
  };

  const filteredReports = demoReports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || report.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800;900&family=Roboto+Flex:wght@400;500;600;700;800&display=swap");

          * {
            font-family: "Roboto Flex", -apple-system, sans-serif;
          }

          h1,
          h2,
          h3,
          h4 {
            font-family: "Epilogue", -apple-system, sans-serif;
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .slide-up {
            animation: slide-up 0.6s ease-out forwards;
          }

          .fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }

          .glass-card {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(255, 255, 255, 0.85) 100%
            );
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
        `}</style>

        <div className="">
          {/* Header */}
          <div className="slide-up">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  Báo cáo
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  Quản lý và theo dõi các báo cáo của bạn
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-3 glass-card rounded-xl hover:shadow-lg transition-all">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 glass-card rounded-xl hover:shadow-lg transition-all">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Total */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/10 to-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
                <p className="text-3xl font-black text-gray-900 mb-1">
                  {stats.total}
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Tổng báo cáo
                </p>
              </div>
            </div>

            {/* Pending */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-black text-gray-900 mb-1">
                  {stats.pending}
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Đang xử lý
                </p>
              </div>
            </div>

            {/* Completed */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-emerald-500/10 to-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-black text-gray-900 mb-1">
                  {stats.completed}
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Hoàn thành
                </p>
              </div>
            </div>

            {/* Cancelled */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-rose-500/10 to-red-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center mb-3">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-black text-gray-900 mb-1">
                  {stats.cancelled}
                </p>
                <p className="text-sm text-gray-600 font-semibold">Đã hủy</p>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div
            className="mt-10 glass-card rounded-3xl p-6 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm báo cáo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-3">
                <select
                  aria-label="status"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-gray-700 font-semibold cursor-pointer"
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="Đang xử lý">Đang xử lý</option>
                  <option value="Hoàn thành">Hoàn thành</option>
                  <option value="Hủy">Đã hủy</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-xl">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-white shadow-sm text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "list"
                        ? "bg-white shadow-sm text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reports Grid/List */}
          <div className="mt-10 slide-up" style={{ animationDelay: "0.3s" }}>
            {filteredReports.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
                    : "space-y-4"
                }
              >
                {filteredReports.map((report, index) => (
                  <div
                    key={report.id}
                    className="fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <ReportCard
                      title={report.title}
                      category={report.category}
                      location={report.location}
                      status={report.status}
                      thumbnail={report.thumbnail}
                      date={report.date}
                      priority={report.priority}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Không tìm thấy báo cáo
                </h3>
                <p className="text-gray-600 font-medium">
                  Thử điều chỉnh bộ lọc hoặc tìm kiếm của bạn
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredReports.length > 0 && (
            <div
              className="mt-10 flex items-center justify-center gap-2 slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button className="px-4 py-2 glass-card rounded-xl font-semibold text-gray-700 hover:shadow-lg transition-all">
                Trước
              </button>
              <button className="px-4 py-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold shadow-lg">
                1
              </button>
              <button className="px-4 py-2 glass-card rounded-xl font-semibold text-gray-700 hover:shadow-lg transition-all">
                2
              </button>
              <button className="px-4 py-2 glass-card rounded-xl font-semibold text-gray-700 hover:shadow-lg transition-all">
                3
              </button>
              <button className="px-4 py-2 glass-card rounded-xl font-semibold text-gray-700 hover:shadow-lg transition-all">
                Sau
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reports;
