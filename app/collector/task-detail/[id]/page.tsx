"use client";

import React from "react";
import {
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Recycle,
  Trash2,
  AlertTriangle,
  Sparkles,
  ArrowLeft,
  LucideIcon
} from "lucide-react";
import Image from "next/image";
import UpdateStatusButtons from "../components/UpdateStatusButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TaskStatus = "assigned" | "completed" | "failed";

interface TaskDetail {
  id: string;
  title: string;
  location: string;
  date: string;
  category: string;
  note?: string;
  status: TaskStatus;
  image?: string;
}

const statusConfig: Record<
  TaskStatus,
  {
    label: string;
    color: string;
    bgGradient: string;
    borderColor: string;
    dotColor: string;
    icon: LucideIcon;
  }
> = {
  assigned: {
    label: "Đang thực hiện",
    color: "text-blue-700",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-300",
    dotColor: "bg-blue-500",
    icon: Recycle
  },
  completed: {
    label: "Hoàn thành",
    color: "text-green-700",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-300",
    dotColor: "bg-green-500",
    icon: CheckCircle
  },
  failed: {
    label: "Không thành công",
    color: "text-orange-700",
    bgGradient: "from-orange-50 to-amber-50",
    borderColor: "border-orange-300",
    dotColor: "bg-orange-500",
    icon: XCircle
  }
};

const TaskDetailById = () => {
  // 👉 Demo data (sau này thay bằng API theo id)
  const task: TaskDetail = {
    id: "TASK_01",
    title: "Thu gom rác sinh hoạt",
    location: "P. Linh Trung, TP. Thủ Đức",
    date: "12/01/2026 - 09:30",
    category: "Rác sinh hoạt",
    note: "Khu vực đông dân cư, cần thu gom sớm",
    status: "assigned",
    image: "/demo1.jpg"
  };

  const StatusIcon = statusConfig[task.status].icon;

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <Header/>
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
            transform: translateY(-15px) rotate(5deg);
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
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .float-icon {
          animation: float 4s ease-in-out infinite;
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
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 float-icon">
          <Trash2 className="w-24 h-24 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "2s" }}
        >
          <Recycle className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Back Button */}
          <div className="fade-in">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-xl border-2 border-green-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group">
              <ArrowLeft className="w-5 h-5 text-green-600 group-hover:-translate-x-1 transition-transform" />
              <span
                className="font-bold text-green-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Quay lại
              </span>
            </button>
          </div>

          {/* Header Card */}
          <div className="fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="currentColor"
                    className="text-green-500"
                    opacity="0.3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="currentColor"
                    className="text-green-500"
                    opacity="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="currentColor"
                    className="text-green-500"
                    opacity="0.7"
                  />
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/30 pulse-glow float-icon">
                    <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {task.id}
                      </span>
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                    </div>
                    <h1
                      className="text-4xl md:text-5xl font-black mb-2 shimmer-text"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {task.title}
                    </h1>
                    <p
                      className="text-green-600 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Chi tiết nhiệm vụ thu gom
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div
                  className={`shrink-0 px-6 py-4 rounded-2xl border-2 ${
                    statusConfig[task.status].borderColor
                  } bg-linear-to-br ${
                    statusConfig[task.status].bgGradient
                  } flex items-center gap-3 shadow-lg`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      statusConfig[task.status].dotColor
                    } animate-pulse`}
                  ></div>
                  <StatusIcon
                    className={`w-6 h-6 ${statusConfig[task.status].color}`}
                    strokeWidth={2.5}
                  />
                  <span
                    className={`font-black text-lg ${
                      statusConfig[task.status].color
                    }`}
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {statusConfig[task.status].label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Info Card */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 h-full">
                <h2
                  className="text-2xl font-black text-green-800 mb-6 flex items-center gap-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-green-600" />
                  </div>
                  Thông tin chi tiết
                </h2>

                <div className="space-y-5">
                  <InfoRow
                    icon={<MapPin className="w-5 h-5 text-green-500" />}
                    label="Vị trí thu gom"
                    value={task.location}
                  />
                  <InfoRow
                    icon={<Calendar className="w-5 h-5 text-blue-500" />}
                    label="Thời gian"
                    value={task.date}
                  />
                  <InfoRow
                    icon={<Recycle className="w-5 h-5 text-emerald-500" />}
                    label="Loại rác"
                    value={task.category}
                  />
                  {task.note && (
                    <InfoRow
                      icon={
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                      }
                      label="Ghi chú quan trọng"
                      value={task.note}
                      highlight={true}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border-2 border-green-200/50 h-full">
                <h2
                  className="text-2xl font-black text-green-800 mb-4 flex items-center gap-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  Hình ảnh hiện trường
                </h2>

                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src={task.image || "/demo1.jpg"}
                    alt="task"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {task.status === "assigned" && (
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <UpdateStatusButtons
                onComplete={() => {
                  console.log("Hoàn thành nhiệm vụ");
                  // gọi API update status = completed
                }}
                onFail={() => {
                  console.log("Báo lỗi nhiệm vụ");
                  // gọi API update status = failed
                }}
              />
            </div>
          )}

          {/* Success Message for Completed Tasks */}
          {task.status === "completed" && (
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300 flex items-center gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div
                    className="text-lg font-black text-green-800"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Nhiệm vụ đã hoàn thành!
                  </div>
                  <div
                    className="text-sm text-green-600 font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Cảm ơn bạn đã đóng góp cho môi trường sạch 🌱
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const InfoRow = ({
  icon,
  label,
  value,
  highlight = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div
    className={`flex items-start gap-4 p-4 rounded-2xl ${
      highlight
        ? "bg-linear-to-r from-orange-50 to-amber-50 border-2 border-orange-200"
        : "bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200/50"
    } transition-all hover:shadow-md`}
  >
    <div className="mt-0.5 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <div className="flex-1">
      <div
        className={`text-sm font-bold uppercase tracking-wide mb-1 ${
          highlight ? "text-orange-600" : "text-green-600"
        }`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </div>
      <div
        className={`font-bold text-lg ${
          highlight ? "text-orange-900" : "text-green-900"
        }`}
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {value}
      </div>
    </div>
  </div>
);

export default TaskDetailById;
