"use client";

import React, { useState } from "react";
import {
  FileText,
  AlertCircle,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import ImageUploader from "./ImageUploader";
import LocationPicker from "./LocationPicker";

const ReportForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const maxDescriptionLength = 500;

  const handleSubmit = () => {
    if (!title || !category || !description) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    alert("Báo cáo đã được gửi thành công!");
    // Reset form
    setTitle("");
    setCategory("");
    setDescription("");
    setCurrentStep(1);
  };

  const steps = [
    { number: 1, title: "Thông tin cơ bản", icon: FileText },
    { number: 2, title: "Vị trí & Hình ảnh", icon: AlertCircle },
    { number: 3, title: "Xác nhận", icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

        * {
          font-family: "Plus Jakarta Sans", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        label {
          font-family: "Lexend", -apple-system, sans-serif;
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

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes pulse-ring {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .shimmer-bg {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
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

        .form-input {
          transition: all 0.3s ease;
        }

        .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
        }

        .step-indicator {
          position: relative;
          z-index: 1;
        }

        .step-indicator::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.2) 0%,
            rgba(147, 51, 234, 0.2) 100%
          );
          z-index: -1;
        }
      `}</style>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-full mb-4 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            Tạo báo cáo mới
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Tạo đơn khiếu nại
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Giúp chúng tôi cải thiện môi trường sống của bạn
          </p>
        </div>

        {/* Progress Steps */}
        <div className="glass-card rounded-3xl p-8 slide-up">
          <div className="step-indicator flex items-center justify-between relative">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center flex-1 relative z-10"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all ${
                    currentStep >= step.number
                      ? "bg-linear-to-br from-blue-500 to-indigo-600 text-white scale-in shadow-lg"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <p
                  className={`text-sm font-bold text-center ${
                    currentStep >= step.number
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="glass-card rounded-3xl p-8 space-y-8 slide-up">
          {/* Basic Information Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900">
                  Thông tin cơ bản
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  Mô tả tình trạng của bạn
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <FileText className="w-4 h-4 text-blue-500" />
                Tiêu đề báo cáo
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ví dụ: Rác tồn đọng 3 ngày tại đường Lê Lợi..."
                  className="form-input w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                />
                {title && (
                  <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                )}
              </div>
            </div>

            {/* Category */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <AlertCircle className="w-4 h-4 text-blue-500" />
                Loại rác
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Ví dụ: Rác thải sinh hoạt, Tái chế, Xây dựng..."
                  className="form-input w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                />
                {category && (
                  <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                Mô tả chi tiết
              </label>
              <div className="relative">
                <textarea
                  value={description}
                  onChange={(e) => {
                    if (e.target.value.length <= maxDescriptionLength) {
                      setDescription(e.target.value);
                    }
                  }}
                  rows={5}
                  placeholder="Mô tả chi tiết tình trạng rác, ảnh hưởng đến khu vực, thời gian phát hiện..."
                  className="form-input w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400 font-medium resize-none"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span
                    className={`text-xs font-bold ${
                      description.length > maxDescriptionLength * 0.9
                        ? "text-amber-600"
                        : "text-gray-400"
                    }`}
                  >
                    {description.length}/{maxDescriptionLength}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm font-bold text-gray-500 bg-white rounded-full">
                Thông tin bổ sung
              </span>
            </div>
          </div>

          {/* Location Picker */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900">Vị trí</h3>
                <p className="text-sm text-gray-500 font-medium">
                  Đánh dấu địa điểm
                </p>
              </div>
            </div>
            <LocationPicker />
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
          </div>

          {/* Image Uploader */}
          <ImageUploader />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 slide-up">
          <button
            onClick={() => {
              setTitle("");
              setCategory("");
              setDescription("");
            }}
            className="flex-1 px-6 py-5 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Đặt lại
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 flex items-center justify-center gap-3 px-6 py-5 bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity" />
            <Send className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Gửi báo cáo</span>
          </button>
        </div>

        {/* Helper Text */}
        <div className="text-center text-sm text-gray-500 font-medium slide-up">
          <p>Báo cáo của bạn sẽ được xem xét trong vòng 24-48 giờ</p>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
