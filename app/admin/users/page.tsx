"use client";

import React, { useState } from "react";
import {
  Plus,
  Users,
  Sparkles,
  UserPlus,
  Shield,
  TrendingUp,
  Activity,
  Mail,
  Phone,
  X
} from "lucide-react";
import UserTable from "./components/UserTable";
import RoleSelect, { RoleType } from "./components/RoleSelect";

const UsersAdmin: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock stats - replace with real data
  const stats = [
    {
      label: "Tổng người dùng",
      value: "1,248",
      change: "+12%",
      icon: <Users className="w-7 h-7" />,
      gradient: "from-blue-500 to-cyan-600",
      bgGlow: "from-blue-400/20 to-cyan-400/20"
    },
    {
      label: "Người dùng mới",
      value: "87",
      change: "+23%",
      icon: <UserPlus className="w-7 h-7" />,
      gradient: "from-emerald-500 to-green-600",
      bgGlow: "from-emerald-400/20 to-green-400/20"
    },
    {
      label: "Hoạt động",
      value: "1,156",
      change: "+8%",
      icon: <Activity className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-600",
      bgGlow: "from-purple-400/20 to-pink-400/20"
    },
    {
      label: "Admins",
      value: "24",
      change: "+2",
      icon: <Shield className="w-7 h-7" />,
      gradient: "from-orange-500 to-red-600",
      bgGlow: "from-orange-400/20 to-red-400/20"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden p-6 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-linear-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-linear-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-linear-to-br from-indigo-300/20 to-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white animate-bounce-subtle" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 mb-2 tracking-tight">
                Quản Lý Người Dùng
              </h1>
              <p className="text-gray-600 font-semibold text-lg flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                Quản lý tài khoản, phân quyền và trạng thái người dùng
              </p>
            </div>
          </div>

          {/* Create Button */}
          <button
            onClick={() => setShowCreateModal(true)}
            className="group relative px-6 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span>Tạo người dùng</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${stat.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {stat.icon}
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Table */}
        <UserTable />
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <CreateUserModal onClose={() => setShowCreateModal(false)} />
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

export default UsersAdmin;

/* ===== Create User Modal ===== */

interface CreateUserModalProps {
  onClose: () => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: undefined as RoleType | undefined,
    password: ""
  });

  const handleSubmit = () => {
    console.log("Create user:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform animate-scale-in">
        {/* Header */}
        <div className="relative p-8 border-b-2 border-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <UserPlus className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Tạo người dùng mới
                </h2>
                <p className="text-gray-600 font-semibold">
                  Điền thông tin tài khoản và phân quyền
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="text-sm font-black text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Họ và tên
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="VD: Nguyễn Văn A"
              className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white/70 backdrop-blur-sm font-semibold transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-black text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="email@example.com"
                className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white/70 backdrop-blur-sm font-semibold transition-all duration-300"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-black text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Số điện thoại
            </label>
            <div className="relative">
              <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="0901 234 567"
                className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white/70 backdrop-blur-sm font-semibold transition-all duration-300"
              />
            </div>
          </div>

          {/* Role */}
          <RoleSelect
            value={formData.role}
            onChange={(role) => setFormData({ ...formData, role })}
          />

          {/* Password */}
          <div>
            <label className="text-sm font-black text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              Mật khẩu
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Nhập mật khẩu"
              className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white/70 backdrop-blur-sm font-semibold transition-all duration-300"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 border-t-2 border-gray-100 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-300 font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || !formData.role}
            className={`flex-1 relative px-6 py-4 rounded-2xl font-black text-white shadow-lg transition-all duration-300 overflow-hidden ${
              !formData.name || !formData.email || !formData.role
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-xl hover:-translate-y-0.5"
            }`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 ${
                !formData.name || !formData.email || !formData.role
                  ? ""
                  : "group-hover:scale-110"
              } transition-transform duration-300`}
            ></div>
            <div className="relative flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" />
              <span>Tạo người dùng</span>
              {formData.name && formData.email && formData.role && (
                <Sparkles className="w-4 h-4 animate-pulse" />
              )}
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
