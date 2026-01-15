"use client";

import React, { useState } from "react";
import {
  ClipboardList,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Grid3x3,
  List,
  ArrowUpDown
} from "lucide-react";
import RequestFilter from "./components/RequestFilter";
import AssignCollectorModal from "./components/AssignCollectorModal";
import RequestCard from "./components/RequestCard";

interface RequestStats {
  total: number;
  pending: number;
  assigned: number;
  completed: number;
}

const Requests: React.FC = () => {
  const [openAssign, setOpenAssign] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock stats - replace with real data
  const stats: RequestStats = {
    total: 248,
    pending: 42,
    assigned: 156,
    completed: 50
  };

  const handleAssign = (requestId: string) => {
    setSelectedRequestId(requestId);
    setOpenAssign(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 p-4 md:p-8 space-y-6">
        {/* Hero Header */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl border border-gray-200/50 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}
            />
          </div>

          <div className="relative p-8 md:p-10 space-y-8">
            {/* Title section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="relative">
                  <div className="w-16 h-16 bg-linear-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 rotate-3 group-hover:rotate-6 transition-transform">
                    <ClipboardList className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-linear-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xs font-black text-white border-2 border-white shadow-lg">
                    {stats.pending}
                  </div>
                </div>
                <div>
                  <h1
                    className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-2"
                    style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
                  >
                    Danh sách yêu cầu
                  </h1>
                  <p className="text-gray-600 font-medium text-lg">
                    Quản lý và phân công collector cho các yêu cầu thu gom
                  </p>
                </div>
              </div>

              {/* View controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2.5 rounded-xl transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-white shadow-md text-emerald-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2.5 rounded-xl transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-white shadow-md text-emerald-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <button className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="hidden sm:inline">Sắp xếp</span>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total */}
              <div className="group relative bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                    <ClipboardList className="w-5 h-5 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Tổng yêu cầu
                </p>
                <p className="text-3xl font-black text-gray-900">
                  {stats.total}
                </p>
              </div>

              {/* Pending */}
              <div className="group relative bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                </div>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                  Chờ xử lý
                </p>
                <p className="text-3xl font-black text-amber-700">
                  {stats.pending}
                </p>
              </div>

              {/* Assigned */}
              <div className="group relative bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  Đã gán
                </p>
                <p className="text-3xl font-black text-blue-700">
                  {stats.assigned}
                </p>
              </div>

              {/* Completed */}
              <div className="group relative bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                  Hoàn thành
                </p>
                <p className="text-3xl font-black text-emerald-700">
                  {stats.completed}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <RequestFilter />

        {/* Request Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Yêu cầu gần đây
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Hiển thị {stats.total} yêu cầu
              </p>
            </div>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {/* Demo requests - replace with real data from API */}
            <RequestCard
              requestId="REQ-10241"
              title="Báo cáo rác sinh hoạt"
              status="pending"
              location="Quận 7, TP.HCM"
              timeAgo="12 phút trước"
              reporter="Nguyễn Văn A"
              priority="high"
              description="Có nhiều rác sinh hoạt bị tồn đọng trước khu dân cư, cần thu gom sớm để tránh ảnh hưởng môi trường xung quanh."
              onAssignCollector={() => handleAssign("REQ-10241")}
            />

            <RequestCard
              requestId="REQ-10242"
              title="Rác điện tử cần thu gom"
              status="assigned"
              location="Quận 1, TP.HCM"
              timeAgo="1 giờ trước"
              reporter="Trần Thị B"
              priority="medium"
              description="Có một số thiết bị điện tử cũ cần được thu gom và xử lý đúng quy định."
              onViewDetails={() => console.log("View details REQ-10242")}
            />

            <RequestCard
              requestId="REQ-10243"
              title="Vệ sinh cây xanh"
              status="completed"
              location="Quận 3, TP.HCM"
              timeAgo="3 giờ trước"
              reporter="Lê Văn C"
              priority="low"
              description="Cần dọn dẹp lá cây rụng quanh khu vực công viên."
              onViewDetails={() => console.log("View details REQ-10243")}
            />

            <RequestCard
              requestId="REQ-10244"
              title="Thu gom rác công nghiệp"
              status="pending"
              location="TP. Thủ Đức"
              timeAgo="5 giờ trước"
              reporter="Phạm Thị D"
              priority="high"
              description="Khu công nghiệp có lượng rác tồn đọng lớn cần thu gom khẩn cấp."
              onAssignCollector={() => handleAssign("REQ-10244")}
            />
          </div>

          {/* Load More / Pagination */}
          <div className="flex justify-center pt-4">
            <button className="group relative px-8 py-4 rounded-2xl font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Xem thêm yêu cầu
                <TrendingUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Assign Collector Modal */}
      {openAssign && (
        <AssignCollectorModal
          open={openAssign}
          requestId={selectedRequestId}
          onClose={() => {
            setOpenAssign(false);
            setSelectedRequestId(null);
          }}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-5deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Requests;
