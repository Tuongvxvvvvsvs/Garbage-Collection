"use client";

import React from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

interface UpdateStatusButtonsProps {
  onComplete?: () => void;
  onFail?: () => void;
  loading?: boolean;
}

const UpdateStatusButtons: React.FC<UpdateStatusButtonsProps> = ({
  onComplete,
  onFail,
  loading = false
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700;800&family=Poppins:wght@600;700&display=swap');
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
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
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        .shimmer-effect {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        
        .bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
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

      {/* Header */}
      <div className="mb-6">
        <h3
          className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600 mb-2"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Cập Nhật Trạng Thái
        </h3>
        <p
          className="text-sm text-green-600 font-semibold"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {loading ? "Đang xử lý..." : "Chọn trạng thái cho nhiệm vụ này"}
        </p>
      </div>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Complete Button */}
        <button
          disabled={loading}
          onClick={onComplete}
          className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl
            bg-linear-to-r from-green-500 via-emerald-500 to-green-600
            text-white font-black text-lg
            hover:from-green-600 hover:via-emerald-600 hover:to-green-700
            transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/50
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg
            overflow-hidden"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {/* Shimmer overlay */}
          {!loading && (
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
          )}

          {/* Pulse rings on hover */}
          {!loading && (
            <>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 pulse-ring group-hover:block hidden"></div>
              <div
                className="absolute inset-0 rounded-2xl border-2 border-white/30 pulse-ring group-hover:block hidden"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}

          {/* Icon */}
          <div className="relative z-10">
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" strokeWidth={2.5} />
            ) : (
              <CheckCircle
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 bounce-gentle"
                strokeWidth={2.5}
              />
            )}
          </div>

          {/* Text */}
          <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
            {loading ? "Đang xử lý..." : "Hoàn Thành"}
          </span>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </button>

        {/* Fail Button */}
        <button
          disabled={loading}
          onClick={onFail}
          className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl
            bg-linear-to-r from-orange-500 via-amber-500 to-orange-600
            text-white font-black text-lg
            hover:from-orange-600 hover:via-amber-600 hover:to-orange-700
            transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg
            overflow-hidden"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {/* Shimmer overlay */}
          {!loading && (
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
          )}

          {/* Pulse rings on hover */}
          {!loading && (
            <>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 pulse-ring group-hover:block hidden"></div>
              <div
                className="absolute inset-0 rounded-2xl border-2 border-white/30 pulse-ring group-hover:block hidden"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}

          {/* Icon */}
          <div className="relative z-10">
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" strokeWidth={2.5} />
            ) : (
              <XCircle
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 bounce-gentle"
                strokeWidth={2.5}
              />
            )}
          </div>

          {/* Text */}
          <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
            {loading ? "Đang xử lý..." : "Báo Lỗi"}
          </span>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Help Text */}
      {!loading && (
        <div className="mt-6 pt-6 border-t-2 border-green-200/50">
          <div
            className="flex items-center gap-2 justify-center text-sm text-green-600 font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Hãy chọn trạng thái phù hợp với tình trạng thực tế</span>
          </div>
        </div>
      )}

      {/* Loading State Indicator */}
      {loading && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex gap-1">
            <div
              className="w-2 h-2 rounded-full bg-green-500 animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <span
            className="text-sm font-bold text-green-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Đang gửi yêu cầu...
          </span>
        </div>
      )}
    </div>
  );
};

export default UpdateStatusButtons;
