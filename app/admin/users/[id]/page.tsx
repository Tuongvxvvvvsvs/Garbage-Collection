"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShieldCheck,
  Star,
  ArrowLeft,
  Award,
  Activity,
  Package,
  Coins,
  Edit3,
  Lock,
  Sparkles,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { useRouter } from "next/navigation";

const UserById: React.FC = () => {
  const router = useRouter();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLockModal, setShowLockModal] = useState(false);

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: "report",
      title: "Gửi báo cáo thu gom",
      description: "Rác tái chế - 5kg",
      time: "2 giờ trước",
      icon: <Package className="w-4 h-4" />,
      color: "blue"
    },
    {
      id: 2,
      type: "reward",
      title: "Nhận điểm thưởng",
      description: "+50 điểm",
      time: "1 ngày trước",
      icon: <Coins className="w-4 h-4" />,
      color: "amber"
    },
    {
      id: 3,
      type: "rating",
      title: "Đánh giá collector",
      description: "5 sao - Dịch vụ tốt",
      time: "3 ngày trước",
      icon: <Star className="w-4 h-4" />,
      color: "yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden p-6 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="group p-4 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-start gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-14 h-14 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl">
                <User className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
                Chi tiết người dùng
              </h1>
              <p className="text-gray-600 font-semibold mt-1">
                Thông tin và hoạt động của người dùng
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <div className="xl:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl border-2 border-white/50 p-8 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Avatar Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative group/avatar">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-600 rounded-full blur-md opacity-50"></div>
                      <div className="relative w-36 h-36 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-black shadow-2xl transform group-hover/avatar:scale-110 transition-all duration-500">
                        U
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-linear-to-br from-emerald-400 to-green-500 border-4 border-white flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      <span className="text-white font-black text-sm">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InfoCard
                      icon={<User className="w-4 h-4" />}
                      label="Họ tên"
                      value="Nguyễn Văn A"
                      color="blue"
                    />
                    <InfoCard
                      icon={<Mail className="w-4 h-4" />}
                      label="Email"
                      value="nguyenvana@email.com"
                      color="purple"
                    />
                    <InfoCard
                      icon={<Phone className="w-4 h-4" />}
                      label="Số điện thoại"
                      value="0901 234 567"
                      color="cyan"
                    />
                    <InfoCard
                      icon={<MapPin className="w-4 h-4" />}
                      label="Khu vực"
                      value="Quận 1, TP.HCM"
                      color="emerald"
                    />
                    <InfoCard
                      icon={<Calendar className="w-4 h-4" />}
                      label="Ngày tham gia"
                      value="12/09/2024"
                      color="orange"
                    />
                    <InfoCard
                      icon={<ShieldCheck className="w-4 h-4" />}
                      label="Vai trò"
                      value="Citizen"
                      color="indigo"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard
                title="Báo cáo đã gửi"
                value="48"
                icon={<Package className="w-7 h-7" />}
                gradient="from-blue-500 to-cyan-600"
                bgGlow="from-blue-400/20 to-cyan-400/20"
              />
              <StatCard
                title="Điểm thưởng"
                value="1,250"
                icon={<Coins className="w-7 h-7" />}
                gradient="from-amber-500 to-yellow-600"
                bgGlow="from-amber-400/20 to-yellow-400/20"
              />
              <StatCard
                title="Đánh giá"
                value="4.8"
                icon={<Star className="w-7 h-7" />}
                gradient="from-purple-500 to-pink-600"
                bgGlow="from-purple-400/20 to-pink-400/20"
                badge={
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                }
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowEditModal(true)}
                className="group relative px-6 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Edit3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Chỉnh sửa thông tin</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </button>

              <button
                onClick={() => setShowLockModal(true)}
                className="group relative px-6 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-red-500 to-rose-600 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Lock className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Khóa tài khoản</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Activities */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">
                  Hoạt động gần đây
                </h2>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <ActivityItem key={activity.id} {...activity} index={index} />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">Thành tích</h2>
              </div>

              <div className="space-y-3">
                <AchievementBadge
                  title="Người dùng tích cực"
                  description="50+ báo cáo đã gửi"
                  icon="🏆"
                  color="from-yellow-400 to-amber-500"
                />
                <AchievementBadge
                  title="Môi trường xanh"
                  description="100kg rác tái chế"
                  icon="🌱"
                  color="from-emerald-400 to-green-500"
                />
                <AchievementBadge
                  title="Người đánh giá"
                  description="Đánh giá 4.5+ sao"
                  icon="⭐"
                  color="from-purple-400 to-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <Modal
          title="Chỉnh sửa thông tin"
          description="Cập nhật thông tin người dùng trong hệ thống"
          icon={<Edit3 className="w-10 h-10 text-white" />}
          iconBg="from-blue-400 to-indigo-600"
          onClose={() => setShowEditModal(false)}
          primaryAction={{
            label: "Lưu thay đổi",
            color: "from-blue-500 to-indigo-600"
          }}
        />
      )}

      {/* Lock Modal */}
      {showLockModal && (
        <Modal
          title="Xác nhận khóa tài khoản"
          description="Người dùng sẽ không thể đăng nhập sau khi bị khóa. Bạn có chắc chắn?"
          icon={<AlertCircle className="w-10 h-10 text-white" />}
          iconBg="from-red-400 to-rose-600"
          onClose={() => setShowLockModal(false)}
          primaryAction={{
            label: "Khóa tài khoản",
            color: "from-red-500 to-rose-600"
          }}
        />
      )}

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default UserById;

/* ===== Sub Components ===== */

const InfoCard = ({
  icon,
  label,
  value,
  color
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) => {
  const colorMap: Record<string, string> = {
    blue: "from-blue-400 to-cyan-500",
    purple: "from-purple-400 to-pink-500",
    cyan: "from-cyan-400 to-blue-500",
    emerald: "from-emerald-400 to-teal-500",
    orange: "from-orange-400 to-amber-500",
    indigo: "from-indigo-400 to-purple-500"
  };

  return (
    <div className="group/info flex items-start gap-3 p-4 bg-linear-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div
        className={`w-10 h-10 rounded-xl bg-linear-to-br ${colorMap[color]} flex items-center justify-center text-white shadow-md group-hover/info:scale-110 group-hover/info:rotate-6 transition-all duration-300`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
          {label}
        </p>
        <p className="font-black text-gray-900 text-sm truncate">{value}</p>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  icon,
  gradient,
  bgGlow,
  badge
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  gradient: string;
  bgGlow: string;
  badge?: React.ReactNode;
}) => (
  <div className="group relative">
    <div
      className={`absolute inset-0 bg-linear-to-br ${bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
    ></div>
    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
        >
          {icon}
        </div>
        {badge && <div className="flex items-center gap-1">{badge}</div>}
      </div>
      <div className="text-4xl font-black text-gray-900 mb-2">{value}</div>
      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
        {title}
      </div>
    </div>
  </div>
);

const ActivityItem = ({
  title,
  description,
  time,
  icon,
  color,
  index
}: {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}) => {
  const colorMap: Record<string, { bg: string; border: string; icon: string }> =
    {
      blue: {
        bg: "bg-blue-100",
        border: "border-blue-200",
        icon: "from-blue-400 to-cyan-500"
      },
      amber: {
        bg: "bg-amber-100",
        border: "border-amber-200",
        icon: "from-amber-400 to-yellow-500"
      },
      yellow: {
        bg: "bg-yellow-100",
        border: "border-yellow-200",
        icon: "from-yellow-400 to-amber-500"
      }
    };

  const colors = colorMap[color];

  return (
    <div
      className="group flex items-start gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 border-2 border-transparent hover:border-gray-200"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`w-10 h-10 rounded-xl bg-linear-to-br ${colors.icon} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 mb-1">{title}</p>
        <p className="text-sm text-gray-600 font-semibold mb-2">
          {description}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
          <Clock className="w-3 h-3" />
          {time}
        </div>
      </div>
    </div>
  );
};

const AchievementBadge = ({
  title,
  description,
  icon,
  color
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
}) => (
  <div className="group flex items-center gap-3 p-4 bg-linear-to-r from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
    <div
      className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-black text-gray-900 mb-0.5">{title}</p>
      <p className="text-xs text-gray-600 font-semibold">{description}</p>
    </div>
  </div>
);

const Modal = ({
  title,
  description,
  icon,
  iconBg,
  onClose,
  primaryAction
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  onClose: () => void;
  primaryAction: { label: string; color: string };
}) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform animate-scale-in">
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-20 h-20 rounded-full bg-linear-to-br ${iconBg} flex items-center justify-center mb-6 animate-bounce-subtle`}
        >
          {icon}
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 font-semibold mb-8">{description}</p>

        <div className="flex gap-4 w-full">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-300 font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            Hủy
          </button>
          <button
            className={`flex-1 px-6 py-4 rounded-2xl bg-linear-to-r ${primaryAction.color} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
          >
            {primaryAction.label}
          </button>
        </div>
      </div>
    </div>
  </div>
);
