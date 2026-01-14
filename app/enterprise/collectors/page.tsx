"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Search,
  Filter,
  Plus,
  Sparkles,
  UserPlus,
  CheckCircle,
  PauseCircle,
  AlertCircle
} from "lucide-react";
import CollectorCard from "./components/CollectorCard";
import { CollectorStatusType } from "./components/CollectorStatus";


interface Collector {
  id: string;
  name: string;
  area: string;
  vehicle: string;
  rating: number;
  completedTasks: number;
  avatar: string;
  status: CollectorStatusType;
}

const Collectors: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<CollectorStatusType | "all">(
    "all"
  );

  // 👉 Demo data (sau này thay bằng API)
  const collectors: Collector[] = [
    {
      id: "1",
      name: "Nguyễn Văn A",
      area: "TP. Thủ Đức",
      vehicle: "Xe tải nhỏ",
      rating: 4.8,
      completedTasks: 128,
      avatar: "/avatar-demo.jpg",
      status: "active"
    },
    {
      id: "2",
      name: "Trần Thị B",
      area: "Q. Bình Thạnh",
      vehicle: "Xe ba gác",
      rating: 4.6,
      completedTasks: 95,
      avatar: "/avatar-demo.jpg",
      status: "active"
    },
    {
      id: "3",
      name: "Lê Văn C",
      area: "Q. 1",
      vehicle: "Xe đẩy tay",
      rating: 4.2,
      completedTasks: 67,
      avatar: "/avatar-demo.jpg",
      status: "inactive"
    },
    {
      id: "4",
      name: "Phạm Thị D",
      area: "Q. 9",
      vehicle: "Xe tải lớn",
      rating: 4.9,
      completedTasks: 156,
      avatar: "/avatar-demo.jpg",
      status: "active"
    },
    {
      id: "5",
      name: "Hoàng Văn E",
      area: "Q. Tân Bình",
      vehicle: "Xe tải nhỏ",
      rating: 3.8,
      completedTasks: 42,
      avatar: "/avatar-demo.jpg",
      status: "suspended"
    },
    {
      id: "6",
      name: "Võ Thị F",
      area: "Q. 7",
      vehicle: "Xe ba gác",
      rating: 4.7,
      completedTasks: 118,
      avatar: "/avatar-demo.jpg",
      status: "active"
    }
  ];

  // Filter collectors
  const filteredCollectors = collectors.filter((collector) => {
    const matchesSearch =
      collector.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collector.area.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || collector.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const stats = {
    total: collectors.length,
    active: collectors.filter((c) => c.status === "active").length,
    inactive: collectors.filter((c) => c.status === "inactive").length,
    suspended: collectors.filter((c) => c.status === "suspended").length
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
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
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.7);
          }
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .float-icon {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #047857 0%, #10b981 50%, #047857 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .collector-card {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 float-icon">
          <Users className="w-32 h-32 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "3s" }}
        >
          <UserPlus className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="fade-in">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern
                      id="collector-dots"
                      x="0"
                      y="0"
                      width="15"
                      height="15"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="7.5"
                        cy="7.5"
                        r="1.5"
                        fill="currentColor"
                        className="text-green-500"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#collector-dots)" />
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left - Title */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg pulse-glow float-icon">
                    <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1
                        className="text-4xl md:text-5xl font-black shimmer-text"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Đội Ngũ Thu Gom
                      </h1>
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </div>
                    <p
                      className="text-lg text-green-600 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Quản lý và theo dõi nhân viên thu gom rác
                    </p>
                  </div>
                </div>

                {/* Right - Add Button */}
                <button
                  onClick={() => router.push("/collectors/add")}
                  className="group relative px-8 py-4 rounded-2xl bg-linear-to-r from-green-500 via-emerald-500 to-green-600 text-white font-black text-lg hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <Plus
                    className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-90"
                    strokeWidth={2.5}
                  />
                  <span className="relative z-10">Thêm nhân viên</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="fade-in grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ animationDelay: "0.1s" }}
          >
            <StatCard label="Tổng số" count={stats.total} color="slate" />
            <StatCard label="Hoạt động" count={stats.active} color="green" />
            <StatCard label="Tạm nghỉ" count={stats.inactive} color="gray" />
            <StatCard label="Bị khóa" count={stats.suspended} color="red" />
          </div>

          {/* Search & Filter Section */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-green-200/50">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600"
                    strokeWidth={2.5}
                  />
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc khu vực..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-green-200 bg-white focus:border-green-500 focus:ring-0 font-semibold text-green-900 transition-all"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>

                {/* Filter */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Filter
                      className="w-5 h-5 text-green-600"
                      strokeWidth={2.5}
                    />
                    <span
                      className="text-sm font-bold text-green-800"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Lọc:
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <FilterButton
                      active={statusFilter === "all"}
                      onClick={() => setStatusFilter("all")}
                      label="Tất cả"
                      count={stats.total}
                    />
                    <FilterButton
                      active={statusFilter === "active"}
                      onClick={() => setStatusFilter("active")}
                      label="Hoạt động"
                      icon={<CheckCircle className="w-4 h-4" />}
                      color="green"
                      count={stats.active}
                    />
                    <FilterButton
                      active={statusFilter === "inactive"}
                      onClick={() => setStatusFilter("inactive")}
                      label="Tạm nghỉ"
                      icon={<PauseCircle className="w-4 h-4" />}
                      color="gray"
                      count={stats.inactive}
                    />
                    <FilterButton
                      active={statusFilter === "suspended"}
                      onClick={() => setStatusFilter("suspended")}
                      label="Bị khóa"
                      icon={<AlertCircle className="w-4 h-4" />}
                      color="red"
                      count={stats.suspended}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collectors Grid */}
          {filteredCollectors.length === 0 ? (
            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-16 shadow-xl border-2 border-green-200/50 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <Users className="w-12 h-12 text-green-600" strokeWidth={2} />
                </div>
                <h3
                  className="text-2xl font-black text-green-800 mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Không tìm thấy nhân viên
                </h3>
                <p
                  className="text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {searchQuery || statusFilter !== "all"
                    ? "Thử điều chỉnh bộ lọc hoặc tìm kiếm của bạn"
                    : "Chưa có nhân viên nào được thêm vào hệ thống"}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCollectors.map((collector, index) => (
                <div
                  key={collector.id}
                  className="collector-card"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CollectorCard
                    {...collector}
                    onClick={() => router.push(`/collectors/${collector.id}`)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collectors;

/* ---------- Sub Components ---------- */

const StatCard = ({
  label,
  count,
  color
}: {
  label: string;
  count: number;
  color: "slate" | "green" | "gray" | "red";
}) => {
  const colorConfig = {
    slate: {
      bg: "from-slate-50 to-gray-50",
      border: "border-slate-200",
      text: "text-slate-700"
    },
    green: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200",
      text: "text-green-700"
    },
    gray: {
      bg: "from-gray-50 to-slate-50",
      border: "border-gray-200",
      text: "text-gray-700"
    },
    red: {
      bg: "from-red-50 to-rose-50",
      border: "border-red-200",
      text: "text-red-700"
    }
  };

  const config = colorConfig[color];

  return (
    <div
      className={`bg-linear-to-br ${config.bg} rounded-2xl p-5 border-2 ${config.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center`}
    >
      <div
        className={`text-4xl font-black ${config.text} mb-1`}
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {count}
      </div>
      <div
        className={`text-xs font-bold uppercase tracking-wide ${config.text} opacity-80`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
};

const FilterButton = ({
  active,
  label,
  icon,
  count,
  color = "green",
  onClick
}: {
  active: boolean;
  label: string;
  icon?: React.ReactNode;
  count?: number;
  color?: "green" | "gray" | "red";
  onClick: () => void;
}) => {
  const colorConfig = {
    green: {
      active:
        "bg-linear-to-r from-green-500 to-emerald-600 text-white border-green-600",
      inactive:
        "bg-white text-green-700 border-green-200 hover:border-green-300 hover:bg-green-50"
    },
    gray: {
      active:
        "bg-linear-to-r from-gray-500 to-slate-600 text-white border-gray-600",
      inactive:
        "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
    },
    red: {
      active:
        "bg-linear-to-r from-red-500 to-rose-600 text-white border-red-600",
      inactive:
        "bg-white text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50"
    }
  };

  const config = colorConfig[color];

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-bold text-sm transition-all duration-300 shadow-sm ${
        active ? `${config.active} shadow-md scale-105` : config.inactive
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-black ${
            active ? "bg-white/30" : "bg-green-100"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};
