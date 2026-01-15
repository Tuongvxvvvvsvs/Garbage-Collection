"use client";

import React, { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  ShieldCheck,
  Building2,
  Truck,
  User as UserIcon,
  Search,
  Mail,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export type UserRole = "ADMIN" | "ENTERPRISE" | "COLLECTOR" | "CITIZEN";
export type UserStatus = "active" | "blocked";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
}
interface RoleConfig {
  label: string;
  icon: React.ReactNode;
  color: string;
  bgGlow: string;
}
const roleConfig: Record<UserRole, RoleConfig> = {
  ADMIN: {
    label: "Admin",
    icon: <ShieldCheck className="w-4 h-4" />,
    color: "from-red-500 to-rose-600",
    bgGlow: "from-red-400/20 to-rose-400/20"
  },
  ENTERPRISE: {
    label: "Enterprise",
    icon: <Building2 className="w-4 h-4" />,
    color: "from-indigo-500 to-purple-600",
    bgGlow: "from-indigo-400/20 to-purple-400/20"
  },
  COLLECTOR: {
    label: "Collector",
    icon: <Truck className="w-4 h-4" />,
    color: "from-emerald-500 to-green-600",
    bgGlow: "from-emerald-400/20 to-green-400/20"
  },
  CITIZEN: {
    label: "Citizen",
    icon: <UserIcon className="w-4 h-4" />,
    color: "from-blue-500 to-cyan-600",
    bgGlow: "from-blue-400/20 to-cyan-400/20"
  }
};

const users: User[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "a@example.com",
    role: "ADMIN",
    status: "active"
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "b@example.com",
    role: "ENTERPRISE",
    status: "active"
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "c@example.com",
    role: "COLLECTOR",
    status: "blocked"
  },
  {
    id: "4",
    name: "Phạm Thị D",
    email: "d@example.com",
    role: "CITIZEN",
    status: "active"
  }
];

const UserTable: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState<UserRole | "all">("all");
  const [filterStatus, setFilterStatus] = useState<UserStatus | "all">("all");

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Stats
  const activeUsers = users.filter((u) => u.status === "active").length;
  const blockedUsers = users.filter((u) => u.status === "blocked").length;

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border-2 border-white/50 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div>
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 mb-2">
              Danh sách người dùng
            </h2>
            <p className="text-gray-600 font-semibold">
              Quản lý tài khoản và phân quyền
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-xl bg-emerald-100 border-2 border-emerald-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-black text-emerald-700">
                  {activeUsers} Hoạt động
                </span>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-red-100 border-2 border-red-200">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-black text-red-700">
                  {blockedUsers} Bị khóa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white font-semibold transition-all duration-300"
            />
          </div>

          {/* Role Filter */}
          <select
            aria-label="filterRole"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value as UserRole | "all")}
            className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white font-bold text-gray-700 transition-all duration-300"
          >
            <option value="all">Tất cả vai trò</option>
            <option value="ADMIN">Admin</option>
            <option value="ENTERPRISE">Enterprise</option>
            <option value="COLLECTOR">Collector</option>
            <option value="CITIZEN">Citizen</option>
          </select>

          {/* Status Filter */}
          <select
            aria-label="filterStatus"
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(e.target.value as UserStatus | "all")
            }
            className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white font-bold text-gray-700 transition-all duration-300"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="blocked">Bị khóa</option>
          </select>
        </div>
      </div>

      {/* User Cards */}
      <div className="space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard
              key={user.id}
              user={user}
              roleConfig={roleConfig[user.role]}
              onView={() => router.push(`/admin/users/${user.id}`)}
              onEdit={() => console.log("Edit user:", user.id)}
              onDelete={() => console.log("Delete user:", user.id)}
              index={index}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border-2 border-white/50">
            <div className="w-24 h-24 rounded-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Không tìm thấy người dùng
            </h3>
            <p className="text-gray-600 font-semibold text-center">
              Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;

/* ===== User Card Component ===== */

interface UserCardProps {
  user: User;
  roleConfig: RoleConfig;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
  index: number;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  roleConfig,
  onView,
  onEdit,
  onDelete,
  index
}) => {
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${roleConfig.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white/50 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar & Info */}
          <div className="flex items-center gap-4 flex-1">
            {/* Avatar */}
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full blur-md opacity-30 bg-linear-to-br ${roleConfig.color}`}
              ></div>
              <div className="relative w-16 h-16 rounded-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center bg-linear-to-br ${roleConfig.color}`}
                  >
                    <span className="text-white text-xl font-black">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-black text-gray-900 mb-1 truncate">
                {user.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <p className="text-sm font-semibold truncate">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Role Badge */}
          <div className="flex items-center gap-3">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black text-white shadow-lg bg-linear-to-br ${roleConfig.color} group-hover:scale-105 transition-transform duration-300`}
            >
              {roleConfig.icon}
              {roleConfig.label}
            </div>

            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black border-2 ${
                user.status === "active"
                  ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                  : "bg-red-100 text-red-700 border-red-200"
              }`}
            >
              {user.status === "active" ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  Hoạt động
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  Bị khóa
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onView}
              className="group/btn w-11 h-11 rounded-xl border-2 border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              title="Xem chi tiết"
            >
              <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
            </button>

            <button
              onClick={onEdit}
              className="group/btn w-11 h-11 rounded-xl border-2 border-gray-200 hover:border-emerald-300 bg-white hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              title="Chỉnh sửa"
            >
              <Pencil className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
            </button>

            <button
              onClick={onDelete}
              className="group/btn w-11 h-11 rounded-xl border-2 border-gray-200 hover:border-red-300 bg-white hover:bg-red-50 text-gray-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              title="Xóa"
            >
              <Trash2 className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
