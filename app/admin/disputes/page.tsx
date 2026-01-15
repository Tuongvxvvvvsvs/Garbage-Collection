"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  Search,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  Sparkles,
  Shield,
  Activity
} from "lucide-react";
import DisputeItem, {
  DisputeStatus
} from "./components/DisputeItem";

const mockDisputes = [
  {
    id: "DSP-1001",
    title: "Collector không đến thu gom",
    reporter: "Nguyễn Văn A",
    requestId: "REQ-10241",
    createdAt: "2 giờ trước",
    status: "pending" as DisputeStatus
  },
  {
    id: "DSP-1002",
    title: "Sai loại rác được ghi nhận",
    reporter: "Trần Thị B",
    requestId: "REQ-10212",
    createdAt: "1 ngày trước",
    status: "resolved" as DisputeStatus
  },
  {
    id: "DSP-1003",
    title: "Không nhận được điểm thưởng",
    reporter: "Lê Văn C",
    requestId: "REQ-10189",
    createdAt: "3 ngày trước",
    status: "pending" as DisputeStatus
  },
  {
    id: "DSP-1004",
    title: "Collector đến muộn",
    reporter: "Phạm Thị D",
    requestId: "REQ-10156",
    createdAt: "5 ngày trước",
    status: "rejected" as DisputeStatus
  }
];

const DisputesAdmin: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | DisputeStatus>("all");

  // Stats calculations
  const totalDisputes = mockDisputes.length;
  const pendingDisputes = mockDisputes.filter(d => d.status === "pending").length;
  const resolvedDisputes = mockDisputes.filter(d => d.status === "resolved").length;
  const rejectedDisputes = mockDisputes.filter(d => d.status === "rejected").length;

  // Filter disputes
  const filteredDisputes = mockDisputes.filter(dispute => {
    const matchesSearch = 
      dispute.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.reporter.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || dispute.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden p-6 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-red-300/20 to-rose-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-red-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-3xl bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-8 h-8 text-white animate-bounce-subtle" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-red-600 to-pink-600 mb-2 tracking-tight">
                Khiếu Nại & Tranh Chấp
              </h1>
              <p className="text-gray-600 font-semibold text-lg flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-500" />
                Quản lý và xử lý khiếu nại từ người dùng
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-400 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {totalDisputes}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Tổng khiếu nại
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-yellow-600">PENDING</span>
                </div>
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {pendingDisputes}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Đang chờ xử lý
              </div>
            </div>
          </div>

          {/* Resolved */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <Sparkles className="w-6 h-6 text-emerald-500 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {resolvedDisputes}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Đã xử lý
              </div>
            </div>
          </div>

          {/* Rejected */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-red-400/20 to-rose-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-red-400 to-rose-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <XCircle className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {rejectedDisputes}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Đã từ chối
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo ID, tiêu đề hoặc người gửi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-white/70 font-semibold transition-all duration-300"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 bg-gray-100 rounded-2xl p-1.5">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  filterStatus === "all"
                    ? "bg-linear-to-r from-gray-700 to-gray-900 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setFilterStatus("pending")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  filterStatus === "pending"
                    ? "bg-linear-to-r from-yellow-500 to-amber-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Đang xử lý
              </button>
              <button
                onClick={() => setFilterStatus("resolved")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  filterStatus === "resolved"
                    ? "bg-linear-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Đã xử lý
              </button>
              <button
                onClick={() => setFilterStatus("rejected")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  filterStatus === "rejected"
                    ? "bg-linear-to-r from-red-500 to-rose-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Từ chối
              </button>
            </div>
          </div>
        </div>

        {/* Disputes List */}
        <div className="space-y-6">
          {filteredDisputes.length > 0 ? (
            filteredDisputes.map((dispute, index) => (
              <div
                key={dispute.id}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <DisputeItem
                  {...dispute}
                  onView={() => router.push(`/admin/disputes/${dispute.id}`)}
                  onResolve={() => {
                    console.log("Resolve dispute:", dispute.id);
                  }}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border-2 border-white/50">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Không tìm thấy khiếu nại
              </h3>
              <p className="text-gray-600 font-semibold text-center">
                Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác
              </p>
            </div>
          )}
        </div>

        {/* Info Banner */}
        <div className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">
                Xử lý khiếu nại kịp thời
              </h3>
              <p className="text-white/90 font-semibold">
                Đảm bảo trải nghiệm công bằng cho người dùng và collectors trong hệ thống
              </p>
            </div>
            <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse shrink-0" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
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
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DisputesAdmin;