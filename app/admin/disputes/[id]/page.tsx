"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  User,
  Truck,
  ClipboardList,
  Calendar,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
  Sparkles,
  AlertCircle,
  FileText,
  Shield,
  TrendingUp,
  Mail,
  Phone,
  Package,
  Activity
} from "lucide-react";

const DisputesById: React.FC = () => {
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  // Timeline data
  const timeline = [
    {
      id: 1,
      type: "created",
      title: "Khiếu nại được tạo",
      time: "14/01/2026, 09:30",
      user: "Nguyễn Văn A",
      status: "completed"
    },
    {
      id: 2,
      type: "assigned",
      title: "Gán cho bộ phận xử lý",
      time: "14/01/2026, 10:15",
      user: "Admin",
      status: "completed"
    },
    {
      id: 3,
      type: "review",
      title: "Đang xem xét",
      time: "15/01/2026, 08:00",
      user: "Bộ phận QA",
      status: "current"
    },
    {
      id: 4,
      type: "resolution",
      title: "Chờ quyết định",
      time: "Chưa hoàn thành",
      user: "-",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden p-6 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-red-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-red-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-3xl bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-8 h-8 text-white animate-bounce-subtle" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-red-600 to-pink-600 mb-2 tracking-tight">
                Chi Tiết Khiếu Nại
              </h1>
              <p className="text-gray-600 font-semibold text-lg flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-500" />
                Xử lý và theo dõi khiếu nại của người dùng
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 shadow-lg">
            <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-black">Đang chờ xử lý</span>
          </div>
        </div>

        {/* Priority Alert */}
        <div className="bg-linear-to-r from-red-500 to-orange-500 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <AlertCircle className="w-7 h-7 text-white animate-bounce-subtle" />
            </div>
            <div>
              <div className="text-white font-black text-xl mb-1">
                Ưu tiên cao
              </div>
              <div className="text-white/90 font-semibold">
                Khiếu nại này cần được xử lý trong vòng 24 giờ
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Dispute Content Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">
                  Nội dung khiếu nại
                </h2>
              </div>

              <div className="bg-linear-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 mb-6 border-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                  Collector đến trễ so với lịch hẹn và không thu gom đủ số lượng
                  rác như đã báo cáo. Tôi đề nghị xem xét lại điểm thưởng và
                  trạng thái hoàn thành.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                  icon={<FileText className="w-4 h-4" />}
                  label="Mã khiếu nại"
                  value="#DSP-1023"
                  color="blue"
                />
                <InfoCard
                  icon={<Calendar className="w-4 h-4" />}
                  label="Ngày gửi"
                  value="14/01/2026"
                  color="purple"
                />
                <InfoCard
                  icon={<AlertTriangle className="w-4 h-4" />}
                  label="Loại"
                  value="Thu gom không đầy đủ"
                  color="orange"
                />
                <InfoCard
                  icon={<TrendingUp className="w-4 h-4" />}
                  label="Ưu tiên"
                  value="Cao"
                  color="red"
                />
              </div>
            </div>

            {/* People Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Citizen */}
              <PersonCard
                title="Người gửi khiếu nại"
                name="Nguyễn Văn A"
                role="Citizen"
                email="nguyenvana@email.com"
                phone="0901 234 567"
                icon={<User />}
                color="from-blue-500 to-cyan-600"
                bgColor="from-blue-400/20 to-cyan-400/20"
              />

              {/* Collector */}
              <PersonCard
                title="Collector liên quan"
                name="Trần Văn B"
                role="Collector"
                email="tranvanb@collect.vn"
                phone="0912 345 678"
                icon={<Truck />}
                color="from-emerald-500 to-green-600"
                bgColor="from-emerald-400/20 to-green-400/20"
              />
            </div>

            {/* Timeline */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">
                  Timeline xử lý
                </h2>
              </div>

              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={item.id} className="relative">
                    {/* Timeline line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-6 top-14 w-0.5 h-full bg-linear-to-b from-gray-300 to-transparent"></div>
                    )}

                    <div
                      className={`flex gap-4 p-4 rounded-2xl transition-all duration-300 ${
                        item.status === "current"
                          ? "bg-linear-to-r from-amber-50 to-yellow-50 border-2 border-amber-200"
                          : item.status === "completed"
                          ? "bg-gray-50 border-2 border-gray-100"
                          : "bg-white border-2 border-gray-200"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          item.status === "completed"
                            ? "bg-linear-to-br from-emerald-400 to-green-500"
                            : item.status === "current"
                            ? "bg-linear-to-br from-amber-400 to-yellow-500"
                            : "bg-linear-to-br from-gray-300 to-gray-400"
                        }`}
                      >
                        {item.status === "completed" ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : item.status === "current" ? (
                          <Clock className="w-6 h-6 text-white animate-pulse" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-white" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="font-black text-gray-900 mb-1">
                          {item.title}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-gray-600 font-semibold">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </div>
                          <div className="flex items-center gap-1 text-gray-600 font-semibold">
                            <User className="w-3 h-3" />
                            {item.user}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Related Info */}
          <div className="space-y-6">
            {/* Related Request */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">
                  Request liên quan
                </h2>
              </div>

              <div className="space-y-4">
                <InfoCard
                  icon={<FileText className="w-4 h-4" />}
                  label="Request ID"
                  value="#REQ-8841"
                  color="emerald"
                />
                <InfoCard
                  icon={<Package className="w-4 h-4" />}
                  label="Loại rác"
                  value="Tái chế"
                  color="blue"
                />
                <InfoCard
                  icon={<TrendingUp className="w-4 h-4" />}
                  label="Khối lượng"
                  value="12 kg"
                  color="purple"
                />
                <InfoCard
                  icon={<Sparkles className="w-4 h-4" />}
                  label="Điểm thưởng"
                  value="120 điểm"
                  color="amber"
                />
              </div>

              <button className="w-full mt-6 px-5 py-3 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Xem chi tiết request
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Thống kê nhanh
              </h3>
              <div className="space-y-3">
                <StatRow label="Thời gian chờ" value="1 ngày 4 giờ" />
                <StatRow label="Lượt xem" value="8" />
                <StatRow label="Mức độ" value="Khẩn cấp" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/50">
          <div className="flex flex-col md:flex-row gap-4 justify-end">
            <button
              onClick={() => setShowRejectModal(true)}
              className="group relative px-8 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-red-500 to-rose-600 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <XCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Từ chối khiếu nại</span>
              </div>
            </button>

            <button
              onClick={() => setShowApprovalModal(true)}
              className="group relative px-8 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-600 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Chấp nhận & xử lý</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && (
        <Modal
          title="Xác nhận chấp nhận"
          description="Bạn đồng ý chấp nhận khiếu nại này và tiến hành xử lý?"
          icon={<CheckCircle className="w-10 h-10 text-white" />}
          iconBg="from-emerald-400 to-green-600"
          onClose={() => setShowApprovalModal(false)}
          primaryAction={{
            label: "Chấp nhận",
            color: "from-emerald-500 to-teal-600"
          }}
        />
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <Modal
          title="Xác nhận từ chối"
          description="Bạn chắc chắn muốn từ chối khiếu nại #DSP-1023? Hành động này không thể hoàn tác."
          icon={<XCircle className="w-10 h-10 text-white" />}
          iconBg="from-red-400 to-rose-600"
          onClose={() => setShowRejectModal(false)}
          primaryAction={{
            label: "Từ chối",
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

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default DisputesById;

/* ---------- Sub Components ---------- */

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
    orange: "from-orange-400 to-amber-500",
    red: "from-red-400 to-rose-500",
    emerald: "from-emerald-400 to-teal-500",
    amber: "from-amber-400 to-yellow-500"
  };

  return (
    <div className="group relative bg-linear-to-br from-gray-50 to-white rounded-2xl p-5 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-8 h-8 rounded-lg bg-linear-to-br ${colorMap[color]} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="font-black text-gray-900 text-lg">{value}</div>
    </div>
  );
};

const PersonCard = ({
  title,
  name,
  role,
  email,
  phone,
  icon,
  color,
  bgColor
}: {
  title: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}) => (
  <div className="group relative">
    <div
      className={`absolute inset-0 bg-linear-to-br ${bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
    ></div>
    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300">
      <h3 className="text-lg font-black text-gray-900 mb-4">{title}</h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div
            className={`absolute inset-0 bg-linear-to-br ${color} rounded-2xl blur-md opacity-30`}
          ></div>
          <div
            className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
          >
            {icon}
          </div>
        </div>

        <div>
          <p className="font-black text-gray-900 text-lg">{name}</p>
          <p className="text-sm font-bold text-gray-500">{role}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 font-semibold">{email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 font-semibold">{phone}</span>
        </div>
      </div>
    </div>
  </div>
);

const StatRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
    <span className="text-sm font-bold text-gray-600">{label}</span>
    <span className="font-black text-gray-900">{value}</span>
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
