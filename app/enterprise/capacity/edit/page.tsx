"use client";

import React from "react";

import { X, Save, Edit3 } from "lucide-react";
import CapacityForm from "../components/CapacityForm";

export interface Props {
  defaultValue: {
    maxWeight: number;
    currentWeight: number;
    area: string;
    status: "active" | "full" | "suspended";
  } | null;
  onClose: () => void;
}

const EditCapacity: React.FC<Props> = ({ defaultValue, onClose }) => {
  const handleSubmit = (data: typeof defaultValue) => {
    // TODO: call API update
    console.log("Update capacity", data);
    onClose();
  };
  if (!defaultValue) return null; // hoặc skeleton
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>

      {/* Modal Container */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border-2 border-green-200/50 animate-slideUp">
        {/* Header */}
        <div className="relative bg-linear-to-r from-green-50 via-emerald-50 to-teal-50 p-8 border-b-2 border-green-200/50">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
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

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <Edit3 className="w-7 h-7 text-white" strokeWidth={2.5} />
                <div className="absolute inset-0 rounded-2xl border-2 border-green-400 pulse-ring"></div>
              </div>

              <div>
                <h2
                  className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600 mb-1"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Chỉnh Sửa Năng Lực
                </h2>
                <p
                  className="text-sm text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Cập nhật thông tin năng lực thu gom của bạn
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="shrink-0 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-green-200 flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-all duration-300 hover:scale-110 shadow-md group"
              aria-label="Đóng"
            >
              <X
                className="w-5 h-5 text-green-600 group-hover:text-red-600 transition-colors"
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-8 max-h-[calc(90vh-200px)] overflow-y-auto">
          <CapacityForm defaultValue={defaultValue} onSubmit={handleSubmit} />
        </div>

        {/* Footer - Sticky */}
        <div className="bg-linear-to-r from-green-50 to-emerald-50 p-6 border-t-2 border-green-200/50">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="group relative px-6 py-3 rounded-xl border-2 border-gray-300 bg-white font-bold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <X
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
                strokeWidth={2.5}
              />
              <span>Hủy bỏ</span>
            </button>

            {/* Save Button */}
            <button
              onClick={() => handleSubmit(defaultValue)}
              className="group relative px-8 py-3 rounded-xl bg-linear-to-r from-green-500 via-emerald-500 to-green-600 text-white font-black hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 overflow-hidden"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <Save
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={2.5}
              />
              <span className="relative z-10">Lưu thay đổi</span>
            </button>
          </div>

          {/* Helper text */}
          <div
            className="mt-4 flex items-center justify-center gap-2 text-xs text-green-600 font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span>Nhấn ESC để đóng cửa sổ</span>
          </div>
        </div>
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Đóng modal"
      ></div>
    </div>
  );
};

export default EditCapacity;
