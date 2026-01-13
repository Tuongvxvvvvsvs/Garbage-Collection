"use client";
import {
  ShieldAlert,
  Lock,
  Home,
  LogIn,
  Mail,
  ArrowLeft,
  AlertCircle
} from "lucide-react";

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center p-6 relative overflow-hidden">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&family=Karla:wght@400;500;600;700;800&display=swap");

        * {
          font-family: "Karla", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Rubik", -apple-system, sans-serif;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }

        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .rotate-slow {
          animation: rotate 20s linear infinite;
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

        .decorative-circle {
          border-radius: 50%;
          position: absolute;
          opacity: 0.1;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-circle w-96 h-96 bg-red-500 -top-48 -left-48 rotate-slow" />
        <div
          className="decorative-circle w-80 h-80 bg-orange-500 -bottom-40 -right-40 rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "15s" }}
        />
        <div
          className="decorative-circle w-64 h-64 bg-amber-500 top-1/4 right-1/4 rotate-slow"
          style={{ animationDuration: "25s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Icon Section */}
        <div className="text-center mb-8 slide-up">
          <div className="relative inline-block">
            {/* Pulse Rings */}
            <div className="absolute inset-0 pulse-ring">
              <div className="w-32 h-32 rounded-full border-4 border-red-500" />
            </div>
            <div
              className="absolute inset-0 pulse-ring"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-32 h-32 rounded-full border-4 border-orange-500" />
            </div>

            {/* Main Icon */}
            <div className="relative w-32 h-32 bg-linear-to-br from-red-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl float-animation mx-auto">
              <ShieldAlert className="w-16 h-16 text-white" strokeWidth={2.5} />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-linear-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Lock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className="glass-card rounded-3xl p-8 md:p-12 text-center space-y-6 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Error Code */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-red-500 to-orange-600 text-white rounded-full font-bold text-sm">
            <AlertCircle className="w-4 h-4" />
            ERROR 403
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Truy cập bị từ chối
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 font-medium max-w-md mx-auto leading-relaxed">
            Xin lỗi, bạn không có quyền truy cập vào trang này. Vui lòng kiểm
            tra lại quyền hạn của bạn hoặc liên hệ với quản trị viên.
          </p>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm font-bold text-gray-500 bg-white rounded-full">
                Bạn có thể
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-gray-400 hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Quay lại
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Home className="w-5 h-5" />
              Trang chủ
            </button>

            <button
              onClick={() => (window.location.href = "/login")}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              <LogIn className="w-5 h-5" />
              Đăng nhập
            </button>
          </div>

          {/* Contact Support */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 font-medium mb-3">
              Cần hỗ trợ?
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all text-sm">
              <Mail className="w-4 h-4" />
              Liên hệ quản trị viên
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="text-center mt-8 space-y-3 slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 font-medium shadow-lg">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Trang này yêu cầu xác thực đặc biệt
          </div>

          <p className="text-xs text-gray-500 font-medium">
            Nếu bạn cho rằng đây là lỗi, vui lòng liên hệ với bộ phận hỗ trợ
          </p>
        </div>
      </div>
    </div>
  );
}
