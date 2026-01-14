"use client";

import React from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Truck,
  Recycle,
  Star,
  CheckCircle,
  Award,
  TrendingUp,
  Calendar,
  Sparkles,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";

const CollectorById: React.FC = () => {
  // 👉 Demo data (sau này thay API)
  const collector = {
    name: "Nguyễn Văn A",
    phone: "0909 123 456",
    email: "collector@gmail.com",
    area: "TP. Thủ Đức, Q. Bình Thạnh",
    vehicle: "Xe tải nhỏ",
    experience: "3 năm",
    rating: 4.8,
    completedTasks: 128,
    avatar: "/avatar-demo.jpg",
    status: "active",
    joinDate: "15/03/2022",
    specialty: ["Rác sinh hoạt", "Rác tái chế", "Rác cồng kềnh"],
    achievements: [
      "🏆 Top 10 Collector tháng 12/2025",
      "⭐ 100+ nhiệm vụ hoàn thành",
      "🌟 Đánh giá xuất sắc"
    ]
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
            transform: translateY(-15px) rotate(3deg);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
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
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .float-icon {
          animation: float 4s ease-in-out infinite;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #047857 0%, #10b981 50%, #047857 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section {
          opacity: 0;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 float-icon">
          <Recycle className="w-24 h-24 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-5 float-icon"
          style={{ animationDelay: "2s" }}
        >
          <Truck className="w-28 h-28 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-8">
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

          {/* Profile Header Card */}
          <div className="section fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
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

              <div className="relative flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* Avatar Section */}
                <div className="relative shrink-0">
                  <div className="relative">
                    <Image
                      src={collector.avatar}
                      alt={collector.name}
                      width={160}
                      height={160}
                      className="rounded-3xl object-cover border-4 border-green-300 shadow-xl"
                    />
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-3xl border-4 border-green-400 pulse-ring"></div>
                    <div
                      className="absolute inset-0 rounded-3xl border-4 border-green-400 pulse-ring"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>

                  {/* Status Badge */}
                  <div
                    className="absolute -bottom-3 -right-3 bg-linear-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-2xl text-sm font-black flex items-center gap-2 shadow-lg"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    <CheckCircle className="w-5 h-5" strokeWidth={2.5} />
                    Đang hoạt động
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                    <h1
                      className="text-4xl md:text-5xl font-black shimmer-text"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {collector.name}
                    </h1>
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                    <InfoBadge
                      icon={<Phone className="w-4 h-4" />}
                      text={collector.phone}
                      color="blue"
                    />
                    <InfoBadge
                      icon={<Mail className="w-4 h-4" />}
                      text={collector.email}
                      color="purple"
                    />
                    <InfoBadge
                      icon={<MapPin className="w-4 h-4" />}
                      text={collector.area}
                      color="emerald"
                    />
                  </div>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                    {collector.specialty.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-linear-to-r from-green-100 to-emerald-100 text-green-700 rounded-xl text-sm font-bold border-2 border-green-200"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        ♻️ {item}
                      </span>
                    ))}
                  </div>

                  {/* Join Date */}
                  <div
                    className="flex items-center justify-center lg:justify-start gap-2 text-sm text-green-600 font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Tham gia từ: {collector.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="section fade-in grid grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ animationDelay: "0.2s" }}
          >
            <StatCard
              icon={
                <Recycle className="w-6 h-6 text-green-600" strokeWidth={2.5} />
              }
              label="Nhiệm vụ"
              value={collector.completedTasks.toString()}
              subtitle="đã hoàn thành"
              color="green"
            />
            <StatCard
              icon={
                <Truck className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
              }
              label="Phương tiện"
              value={collector.vehicle}
              color="blue"
            />
            <StatCard
              icon={
                <User className="w-6 h-6 text-purple-600" strokeWidth={2.5} />
              }
              label="Kinh nghiệm"
              value={collector.experience}
              color="purple"
            />
            <StatCard
              icon={
                <Star className="w-6 h-6 text-amber-500" strokeWidth={2.5} />
              }
              label="Đánh giá"
              value={collector.rating.toString()}
              subtitle="⭐⭐⭐⭐⭐"
              color="amber"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Achievements */}
            <div className="section fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
                    <Award
                      className="w-6 h-6 text-amber-600"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h2
                    className="text-2xl font-black text-green-800"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Thành Tích
                  </h2>
                </div>

                <div className="space-y-3">
                  {collector.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-2xl">
                        {achievement.split(" ")[0]}
                      </div>
                      <span
                        className="font-semibold text-green-700 flex-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {achievement.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="section fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <TrendingUp
                      className="w-6 h-6 text-blue-600"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h2
                    className="text-2xl font-black text-green-800"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Hiệu Suất
                  </h2>
                </div>

                <div className="space-y-4">
                  <ProgressItem
                    label="Tỷ lệ hoàn thành"
                    value={95}
                    color="green"
                  />
                  <ProgressItem label="Đúng hạn" value={88} color="blue" />
                  <ProgressItem
                    label="Khách hàng hài lòng"
                    value={92}
                    color="purple"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="section fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
              <h2
                className="text-2xl font-black text-green-800 mb-4 flex items-center gap-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <User className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                Giới Thiệu
              </h2>
              <p
                className="text-green-700 font-semibold leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Là một thành viên tận tâm của đội ngũ thu gom, {collector.name}{" "}
                đã có {collector.experience} kinh nghiệm trong lĩnh vực bảo vệ
                môi trường. Với phương tiện {collector.vehicle.toLowerCase()},
                anh/chị có thể phục vụ hiệu quả các khu vực {collector.area}.
                Đánh giá {collector.rating}/5 sao và {collector.completedTasks}+
                nhiệm vụ hoàn thành là minh chứng cho sự chuyên nghiệp và tận
                tụy trong công việc. 🌱
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectorById;

/* ---------- Sub Components ---------- */

const InfoBadge = ({
  icon,
  text,
  color = "green"
}: {
  icon: React.ReactNode;
  text: string;
  color?: "green" | "blue" | "purple" | "emerald";
}) => {
  const colorClasses = {
    green:
      "bg-linear-to-r from-green-100 to-emerald-100 text-green-700 border-green-200",
    blue: "bg-linear-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200",
    purple:
      "bg-linear-to-r from-purple-100 to-violet-100 text-purple-700 border-purple-200",
    emerald:
      "bg-linear-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200"
  };

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-bold text-sm transition-all hover:shadow-md ${colorClasses[color]}`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  subtitle,
  color = "green"
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtitle?: string;
  color?: "green" | "blue" | "purple" | "amber";
}) => {
  const colorConfig = {
    green: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200",
      iconBg: "from-green-100 to-emerald-100"
    },
    blue: {
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      iconBg: "from-blue-100 to-cyan-100"
    },
    purple: {
      bg: "from-purple-50 to-violet-50",
      border: "border-purple-200",
      iconBg: "from-purple-100 to-violet-100"
    },
    amber: {
      bg: "from-amber-50 to-yellow-50",
      border: "border-amber-200",
      iconBg: "from-amber-100 to-yellow-100"
    }
  };

  const config = colorConfig[color];

  return (
    <div
      className={`group bg-linear-to-br ${config.bg} rounded-2xl p-6 border-2 ${config.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
    >
      {/* Hover shimmer */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <div className="relative">
        <div
          className={`w-12 h-12 rounded-xl bg-linear-to-br ${config.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md`}
        >
          {icon}
        </div>

        <div
          className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {label}
        </div>

        <div
          className="text-3xl font-black text-gray-800 mb-1"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {value}
        </div>

        {subtitle && (
          <div
            className="text-sm font-semibold text-gray-600"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

const ProgressItem = ({
  label,
  value,
  color = "green"
}: {
  label: string;
  value: number;
  color?: "green" | "blue" | "purple";
}) => {
  const colorClasses = {
    green: "from-green-500 to-emerald-600",
    blue: "from-blue-500 to-cyan-600",
    purple: "from-purple-500 to-violet-600"
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span
          className="text-sm font-bold text-gray-700"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {label}
        </span>
        <span
          className="text-sm font-black text-gray-800"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {value}%
        </span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-linear-to-r ${colorClasses[color]} rounded-full transition-all duration-1000 relative overflow-hidden`}
          style={{ width: `${value}%` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
