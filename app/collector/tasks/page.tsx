"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardList,
  Filter,
  CheckCircle,
  Recycle,
  XCircle,
  Sparkles,
  Trash2,
  ListChecks
} from "lucide-react";
import TaskCard, { TaskStatus } from "./components/TaskCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Task {
  id: string;
  title: string;
  location: string;
  date: string;
  category: string;
  status: TaskStatus;
  image?: string;
}

const Tasks: React.FC = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<TaskStatus | "all">("all");

  // 👉 Demo data (sau này thay bằng API)
  const tasks: Task[] = [
    {
      id: "TASK_01",
      title: "Thu gom rác sinh hoạt",
      location: "P. Linh Trung, TP. Thủ Đức",
      date: "12/01/2026 - 09:30",
      category: "Rác sinh hoạt",
      status: "assigned",
      image: "/demo1.jpg"
    },
    {
      id: "TASK_02",
      title: "Thu gom rác tái chế",
      location: "Q. Bình Thạnh",
      date: "11/01/2026 - 14:00",
      category: "Rác tái chế",
      status: "completed"
    },
    {
      id: "TASK_03",
      title: "Rác xây dựng tồn đọng",
      location: "Q. 9, TP. Thủ Đức",
      date: "10/01/2026 - 08:00",
      category: "Rác xây dựng",
      status: "failed"
    }
  ];

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  // Calculate stats
  const stats = {
    total: tasks.length,
    assigned: tasks.filter((t) => t.status === "assigned").length,
    completed: tasks.filter((t) => t.status === "completed").length,
    failed: tasks.filter((t) => t.status === "failed").length
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <Header />
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
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
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
        
        .task-card {
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
          <Trash2 className="w-32 h-32 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "3s" }}
        >
          <Recycle className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="">
          {/* Header Section */}
          <div className="fade-in">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern
                      id="task-dots"
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
                  <rect width="100" height="100" fill="url(#task-dots)" />
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left - Title */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg pulse-glow float-icon">
                    <ClipboardList
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1
                        className="text-4xl md:text-5xl font-black shimmer-text"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Nhiệm Vụ Thu Gom
                      </h1>
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </div>
                    <p
                      className="text-lg text-green-600 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Danh sách nhiệm vụ được phân công cho bạn
                    </p>
                  </div>
                </div>

                {/* Right - Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <StatCard
                    label="Tổng"
                    count={stats.total}
                    color="from-slate-100 to-gray-100"
                    textColor="text-slate-700"
                  />
                  <StatCard
                    label="Đang làm"
                    count={stats.assigned}
                    color="from-blue-100 to-cyan-100"
                    textColor="text-blue-700"
                  />
                  <StatCard
                    label="Hoàn thành"
                    count={stats.completed}
                    color="from-green-100 to-emerald-100"
                    textColor="text-green-700"
                  />
                  <StatCard
                    label="Lỗi"
                    count={stats.failed}
                    color="from-orange-100 to-amber-100"
                    textColor="text-orange-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="mt-10 fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-green-200/50">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Filter
                      className="w-5 h-5 text-green-600"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span
                    className="text-lg font-bold text-green-800"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Lọc theo trạng thái:
                  </span>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <FilterButton
                    active={filter === "all"}
                    onClick={() => setFilter("all")}
                    label="Tất cả"
                    icon={<ListChecks className="w-4 h-4" />}
                    count={stats.total}
                  />
                  <FilterButton
                    active={filter === "assigned"}
                    onClick={() => setFilter("assigned")}
                    label="Đang làm"
                    icon={<Recycle className="w-4 h-4" />}
                    color="blue"
                    count={stats.assigned}
                  />
                  <FilterButton
                    active={filter === "completed"}
                    onClick={() => setFilter("completed")}
                    label="Hoàn thành"
                    icon={<CheckCircle className="w-4 h-4" />}
                    color="green"
                    count={stats.completed}
                  />
                  <FilterButton
                    active={filter === "failed"}
                    onClick={() => setFilter("failed")}
                    label="Lỗi"
                    icon={<XCircle className="w-4 h-4" />}
                    color="orange"
                    count={stats.failed}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Task List */}
          {filteredTasks.length === 0 ? (
            <div className="mt-10 fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-16 shadow-xl border-2 border-green-200/50 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <ListChecks
                    className="w-12 h-12 text-green-600"
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="text-2xl font-black text-green-800 mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Không có nhiệm vụ nào
                </h3>
                <p
                  className="text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {filter === "all"
                    ? "Chưa có nhiệm vụ được phân công"
                    : `Không có nhiệm vụ ở trạng thái này`}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task, index) => (
                <div
                  key={task.id}
                  className="task-card"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <TaskCard
                    title={task.title}
                    location={task.location}
                    date={task.date}
                    category={task.category}
                    status={task.status}
                    image={task.image}
                    onClick={() => router.push(`/collector/tasks/${task.id}`)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks;

/* ---------- Sub Components ---------- */

const StatCard = ({
  label,
  count,
  color,
  textColor
}: {
  label: string;
  count: number;
  color: string;
  textColor: string;
}) => (
  <div
    className={`bg-linear-to-br ${color} rounded-2xl p-4 border-2 border-white/50 shadow-md text-center`}
  >
    <div
      className={`text-3xl font-black ${textColor} mb-1`}
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      {count}
    </div>
    <div
      className={`text-xs font-bold uppercase tracking-wide ${textColor} opacity-80`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {label}
    </div>
  </div>
);

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
  color?: "green" | "blue" | "orange";
  onClick: () => void;
}) => {
  const colorConfig = {
    green: {
      active:
        "bg-linear-to-r from-green-500 to-emerald-600 text-white border-green-600",
      inactive:
        "bg-white text-green-700 border-green-200 hover:border-green-300 hover:bg-green-50"
    },
    blue: {
      active:
        "bg-linear-to-r from-blue-500 to-cyan-600 text-white border-blue-600",
      inactive:
        "bg-white text-blue-700 border-blue-200 hover:border-blue-300 hover:bg-blue-50"
    },
    orange: {
      active:
        "bg-linear-to-r from-orange-500 to-amber-600 text-white border-orange-600",
      inactive:
        "bg-white text-orange-700 border-orange-200 hover:border-orange-300 hover:bg-orange-50"
    }
  };

  const config = colorConfig[color];

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-2 px-5 py-3 rounded-xl border-2 font-bold text-sm transition-all duration-300 shadow-sm ${
        active ? `${config.active} shadow-lg scale-105` : config.inactive
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Icon */}
      {icon && (
        <span
          className={`transition-transform duration-300 ${
            active ? "" : "group-hover:scale-110"
          }`}
        >
          {icon}
        </span>
      )}

      {/* Label */}
      <span>{label}</span>

      {/* Count Badge */}
      {count !== undefined && (
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-black ${
            active
              ? "bg-white/30"
              : "bg-linear-to-r from-green-100 to-emerald-100"
          }`}
        >
          {count}
        </span>
      )}

      {/* Bottom accent for active */}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 rounded-b-xl"></div>
      )}
    </button>
  );
};
