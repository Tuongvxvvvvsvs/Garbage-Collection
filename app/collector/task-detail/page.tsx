"use client";

import React from "react";
import Image from "next/image";
import TaskInfo from "./components/TaskInfo";
import UpdateStatusButtons from "./components/UpdateStatusButtons";
import {
  Trash2,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  ImageIcon
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TaskStatus = "assigned" | "completed" | "failed";

const TaskDetail: React.FC = () => {
  // 🔹 Demo data (sau này replace bằng API)
  const task = {
    id: "TASK_01",
    title: "Thu gom rác sinh hoạt",
    location: "P. Linh Trung, TP. Thủ Đức",
    date: "12/01/2026 - 09:30",
    category: "Rác sinh hoạt",
    note: "Khu vực đông dân cư, cần thu gom sớm",
    status: "assigned" as TaskStatus,
    image: "/demo1.jpg"
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <Header />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
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
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-teal-300 rounded-full blur-3xl opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 float-icon">
          <Trash2 className="w-32 h-32 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "3s" }}
        >
          <Sparkles className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="">
          {/* Back Button */}
          <div className="fade-in">
            <button className="flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-green-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-x-2 group">
              <ArrowLeft
                className="w-5 h-5 text-green-600 group-hover:-translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
              <span
                className="font-bold text-green-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Quay lại danh sách
              </span>
            </button>
          </div>

          {/* Header Card */}
          <div className="mt-10 fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern
                      id="header-dots"
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
                  <rect width="100" height="100" fill="url(#header-dots)" />
                </svg>
              </div>

              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-xl pulse-glow float-icon">
                    <Trash2
                      className="w-10 h-10 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-sm font-bold text-green-600 bg-green-100 px-4 py-1.5 rounded-full border-2 border-green-200"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Mã: {task.id}
                      </span>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span
                          className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Ưu tiên
                        </span>
                      </div>
                    </div>

                    <h1
                      className="text-4xl md:text-5xl font-black mb-2 shimmer-text"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {task.title}
                    </h1>

                    <p
                      className="text-lg text-green-600 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Chi tiết nhiệm vụ thu gom môi trường
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                {task.status === "assigned" && (
                  <div className="bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl px-6 py-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                      <span
                        className="text-lg font-black text-blue-700"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Đang thực hiện
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Task Info */}
            <div className="mt-10 fade-in" style={{ animationDelay: "0.2s" }}>
              <TaskInfo
                location={task.location}
                date={task.date}
                category={task.category}
                note={task.note}
              />
            </div>

            {/* Right - Image */}
            <div className="mt-10 fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border-2 border-green-200/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <h2
                    className="text-2xl font-black text-green-800"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Hình Ảnh Hiện Trường
                  </h2>
                </div>

                <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={task.image}
                    alt="task"
                    width={600}
                    height={400}
                    className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        📍 {task.location}
                      </p>
                      <p
                        className="text-xs opacity-90"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        🕒 {task.date}
                      </p>
                    </div>
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                {/* Image Info */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span
                    className="text-green-600 font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Ảnh ghi nhận lúc báo cáo
                  </span>
                  <span
                    className="text-green-500 font-bold bg-green-100 px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    ✓ Đã xác thực
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {task.status === "assigned" && (
            <div className="mt-10 fade-in" style={{ animationDelay: "0.4s" }}>
              <UpdateStatusButtons
                onComplete={() => console.log("Hoàn thành")}
                onFail={() => console.log("Báo lỗi")}
              />
            </div>
          )}

          {/* Completed Message */}
          {task.status === "completed" && (
            <div className="mt-10 fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-linear-to-r from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-green-300 shadow-xl relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400 rounded-full blur-3xl opacity-20"></div>

                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg pulse-glow">
                    <CheckCircle
                      className="w-10 h-10 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3
                      className="text-3xl font-black text-green-800 mb-2"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Nhiệm Vụ Đã Hoàn Thành! 🎉
                    </h3>
                    <p
                      className="text-lg text-green-700 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Cảm ơn bạn đã đóng góp vào việc bảo vệ môi trường! Mỗi
                      hành động nhỏ đều tạo nên sự khác biệt lớn 🌱
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border-2 border-green-200">
                    <div className="text-center">
                      <div
                        className="text-3xl font-black text-green-600 mb-1"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        +20
                      </div>
                      <div
                        className="text-xs font-bold text-green-700 uppercase"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Điểm xanh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TaskDetail;
