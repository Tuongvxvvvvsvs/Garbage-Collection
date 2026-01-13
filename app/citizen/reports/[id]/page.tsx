"use client";

import React, { useState } from "react";
import {
  MapPin,
  Trash2,
  CheckCircle,
  Clock,
  Calendar,
  User,
  Tag,
  Image as ImageIcon,
  ChevronLeft,
  Download,
  Share2,
  AlertCircle,
  X,
  ZoomIn
} from "lucide-react";
import Image from "next/image";

const ReportsById: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Demo dữ liệu
  const report = {
    id: "RPT-2024-001",
    title: "Đống rác lớn trên vỉa hè",
    category: "Rác sinh hoạt",
    description:
      "Có một đống rác lớn chắn lối đi ở vỉa hè trước nhà số 23. Cần dọn ngay để đảm bảo an toàn và vệ sinh. Tình trạng đã kéo dài 3 ngày và ảnh hưởng đến giao thông người đi bộ.",
    location: "Số 23, đường ABC, Quận X, TP. HCM",
    coordinates: "10.7769° N, 106.7009° E",
    images: ["/demo1.jpg", "/demo2.jpg", "/demo3.jpg"],
    status: "processing", // pending, processing, resolved, rejected
    createdAt: "15/01/2024",
    updatedAt: "16/01/2024",
    reporter: "Nguyễn Văn A",
    priority: "high", // low, medium, high
    estimatedTime: "2-3 ngày"
  };

  const statusConfig = {
    pending: {
      label: "Chờ xử lý",
      color: "from-gray-500 to-slate-600",
      bg: "bg-gray-100",
      text: "text-gray-800",
      icon: Clock
    },
    processing: {
      label: "Đang xử lý",
      color: "from-amber-500 to-orange-600",
      bg: "bg-amber-100",
      text: "text-amber-800",
      icon: AlertCircle
    },
    resolved: {
      label: "Hoàn thành",
      color: "from-emerald-500 to-green-600",
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      icon: CheckCircle
    },
    rejected: {
      label: "Từ chối",
      color: "from-rose-500 to-red-600",
      bg: "bg-rose-100",
      text: "text-rose-800",
      icon: X
    }
  };

  const currentStatus =
    statusConfig[report.status as keyof typeof statusConfig];
  const StatusIcon = currentStatus.icon;

  const timeline = [
    { date: "15/01/2024", event: "Báo cáo được tạo", status: "completed" },
    { date: "15/01/2024", event: "Đang chờ xác nhận", status: "completed" },
    { date: "16/01/2024", event: "Đang xử lý", status: "active" },
    { date: "Dự kiến 18/01/2024", event: "Hoàn thành", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap");

        * {
          font-family: "DM Sans", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Clash Display", -apple-system, sans-serif;
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }

        .slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
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

        .image-card {
          transition: all 0.3s ease;
        }

        .image-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors slide-up">
          <ChevronLeft className="w-5 h-5" />
          Quay lại danh sách
        </button>

        {/* Header Section */}
        <div
          className="glass-card rounded-3xl p-8 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Title & ID */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-full text-xs font-bold">
                  {report.id}
                </span>
                {report.priority === "high" && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                    🔥 Ưu tiên cao
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">
                {report.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">Tạo: {report.createdAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">
                    Cập nhật: {report.updatedAt}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{report.reporter}</span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex flex-col items-end gap-3">
              <div
                className={`${currentStatus.bg} px-5 py-3 rounded-2xl border-2 border-white shadow-lg`}
              >
                <div className="flex items-center gap-2">
                  <StatusIcon className="w-5 h-5" />
                  <span className={`font-bold ${currentStatus.text}`}>
                    {currentStatus.label}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-3 bg-white hover:bg-gray-50 rounded-xl border-2 border-gray-200 transition-all">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 bg-white hover:bg-gray-50 rounded-xl border-2 border-gray-200 transition-all">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div
              className="glass-card rounded-3xl p-8 slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                Mô tả chi tiết
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {report.description}
              </p>
            </div>

            {/* Images Gallery */}
            {report.images && report.images.length > 0 && (
              <div
                className="glass-card rounded-3xl p-8 slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                  Hình ảnh ({report.images.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {report.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="image-card relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 cursor-pointer group"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Report Image ${idx + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 text-white text-xs font-bold rounded-lg">
                        {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            <div
              className="glass-card rounded-3xl p-8 slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                Tiến trình xử lý
              </h3>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          item.status === "completed"
                            ? "bg-emerald-500"
                            : item.status === "active"
                            ? "bg-amber-500 pulse-glow"
                            : "bg-gray-300"
                        }`}
                      >
                        {item.status === "completed" ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : item.status === "active" ? (
                          <Clock className="w-6 h-6 text-white" />
                        ) : (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )}
                      </div>
                      {idx < timeline.length - 1 && (
                        <div
                          className={`absolute left-1/2 top-12 w-0.5 h-12 -translate-x-1/2 ${
                            item.status === "completed"
                              ? "bg-emerald-500"
                              : "bg-gray-300"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <p
                        className={`font-bold ${
                          item.status === "active"
                            ? "text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {item.event}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Sidebar */}
          <div className="space-y-6">
            {/* Location Card */}
            <div
              className="glass-card rounded-3xl p-6 slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Địa điểm
              </h4>
              <div className="space-y-3">
                <p className="text-gray-700 font-medium">{report.location}</p>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-xs text-blue-600 font-bold mb-1">Tọa độ</p>
                  <p className="text-sm text-blue-900 font-mono">
                    {report.coordinates}
                  </p>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
                  <MapPin className="w-4 h-4" />
                  Xem bản đồ
                </button>
              </div>
            </div>

            {/* Category Card */}
            <div
              className="glass-card rounded-3xl p-6 slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-purple-500" />
                Loại rác
              </h4>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-200">
                <Trash2 className="w-5 h-5 text-purple-600" />
                <span className="font-bold text-purple-900">
                  {report.category}
                </span>
              </div>
            </div>

            {/* Estimated Time Card */}
            <div
              className="glass-card rounded-3xl p-6 slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                Thời gian dự kiến
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                  <p className="text-3xl font-black text-amber-900">
                    {report.estimatedTime}
                  </p>
                  <p className="text-xs text-amber-600 font-bold mt-1">
                    để hoàn thành
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {report.status === "processing" && (
              <div
                className="space-y-3 slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                  <CheckCircle className="w-5 h-5" />
                  Đánh dấu hoàn thành
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                  <AlertCircle className="w-5 h-5" />
                  Báo cáo vấn đề
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-4xl max-h-[90vh] scale-in">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={1200}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsById;
