"use client";

import {
  MapPin,
  CheckCircle,
  XCircle,
  Trash2,
  Recycle,
  Calendar
} from "lucide-react";
type HistoryStatus = "completed" | "failed";
interface HistoryItem {
  id: string;
  title: string;
  location: string;
  date: string;
  status: HistoryStatus;
}

const History = () => {
  // Demo data
  const histories: HistoryItem[] = [
    {
      id: "1",
      title: "Thu gom rác sinh hoạt",
      location: "P. Linh Trung, TP. Thủ Đức",
      date: "12/01/2026",
      status: "completed"
    },
    {
      id: "2",
      title: "Rác xây dựng tồn đọng",
      location: "Q. Bình Thạnh",
      date: "11/01/2026",
      status: "completed"
    },
    {
      id: "3",
      title: "Rác tái chế chưa phân loại",
      location: "Q. 9, TP. Thủ Đức",
      date: "10/01/2026",
      status: "failed"
    }
  ];

  const statusConfig = {
    completed: {
      label: "Hoàn thành",
      icon: CheckCircle,
      color: "text-green-600 bg-green-100",
      borderColor: "border-green-300",
      dotColor: "bg-green-500"
    },
    failed: {
      label: "Không thành công",
      icon: XCircle,
      color: "text-orange-600 bg-orange-100",
      borderColor: "border-orange-300",
      dotColor: "bg-orange-500"
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
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
        
        .history-card {
          opacity: 0;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-15" />

        {/* Floating Trash Icon */}
        <div className="absolute top-20 right-20 opacity-5 float-icon">
          <Trash2 className="w-32 h-32 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 left-16 opacity-5 float-icon"
          style={{ animationDelay: "2s" }}
        >
          <Recycle className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="fade-in-up">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern
                      id="trash-pattern"
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="2"
                        fill="currentColor"
                        className="text-green-500"
                        opacity="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#trash-pattern)" />
                </svg>
              </div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/30 float-icon">
                    <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <div>
                    <h1
                      className="text-4xl md:text-5xl font-black mb-2 shimmer-text"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Lịch Sử Thu Gom
                    </h1>
                    <p
                      className="text-lg text-green-700 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Theo dõi các hoạt động thu gom của bạn 🗑️
                    </p>
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="flex gap-3">
                  <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200/50 text-center min-w-25">
                    <div
                      className="text-2xl font-black text-green-600 mb-1"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {histories.filter((h) => h.status === "completed").length}
                    </div>
                    <div
                      className="text-xs text-green-700 font-semibold uppercase tracking-wide"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Thành công
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border-2 border-orange-200/50 text-center min-w-25">
                    <div
                      className="text-2xl font-black text-orange-600 mb-1"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {histories.filter((h) => h.status === "failed").length}
                    </div>
                    <div
                      className="text-xs text-orange-700 font-semibold uppercase tracking-wide"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Chưa hoàn thành
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-green-400 via-emerald-400 to-transparent rounded-full" />

            {/* History Cards */}
            <div className="space-y-6">
              {histories.map((item, index) => {
                const StatusIcon = statusConfig[item.status].icon;
                const isCompleted = item.status === "completed";

                return (
                  <div
                    key={item.id}
                    className="history-card relative pl-20"
                    style={{
                      animationName: "slideInLeft",
                      animationDuration: "0.6s",
                      animationDelay: `${index * 150}ms`,
                      animationFillMode: "forwards"
                    }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-5 top-6 w-7 h-7 rounded-full border-4 border-white ${
                        statusConfig[item.status].dotColor
                      } shadow-lg z-10 flex items-center justify-center`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <XCircle className="w-4 h-4 text-white" />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={`bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 ${
                        statusConfig[item.status].borderColor
                      } hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Left Content */}
                        <div className="flex-1 space-y-3">
                          {/* Title */}
                          <h3
                            className="text-2xl font-bold text-green-900"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            {item.title}
                          </h3>

                          {/* Location */}
                          <div className="flex items-center gap-2 text-green-600">
                            <MapPin
                              className="w-5 h-5 text-green-500"
                              strokeWidth={2.5}
                            />
                            <span
                              className="font-semibold"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {item.location}
                            </span>
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-2 text-green-600">
                            <Calendar className="w-4 h-4 text-green-500" />
                            <span
                              className="text-sm font-semibold"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {item.date}
                            </span>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div
                          className={`shrink-0 px-5 py-3 rounded-2xl ${
                            statusConfig[item.status].color
                          } border-2 ${
                            statusConfig[item.status].borderColor
                          } flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 shadow-md`}
                        >
                          <StatusIcon className="w-5 h-5" strokeWidth={2.5} />
                          <span
                            className="font-bold text-sm"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {statusConfig[item.status].label}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Accent */}
                      <div
                        className={`mt-4 h-1 rounded-full ${
                          isCompleted
                            ? "bg-linear-to-r from-green-400 to-emerald-500"
                            : "bg-linear-to-r from-orange-400 to-amber-500"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Footer */}
          <div className="fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-green-200/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div
                      className="text-lg font-bold text-green-800"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Tổng số hoạt động: {histories.length}
                    </div>
                    <div
                      className="text-sm text-green-600 font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Cảm ơn bạn đã đóng góp cho môi trường! 🌱
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 max-w-md">
                  <div
                    className="flex justify-between text-xs font-semibold text-green-600 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Tỷ lệ thành công</span>
                    <span>
                      {Math.round(
                        (histories.filter((h) => h.status === "completed")
                          .length /
                          histories.length) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="h-3 bg-green-100 rounded-full overflow-hidden border border-green-200">
                    <div
                      className="h-full bg-linear-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000"
                      style={{
                        width: `${
                          (histories.filter((h) => h.status === "completed")
                            .length /
                            histories.length) *
                          100
                        }%`
                      }}
                    >
                      <div className="h-full bg-linear-to-r from-transparent via-white/40 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
