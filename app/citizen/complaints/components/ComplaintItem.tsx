"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Zap,
  TrendingUp,
  Archive,
  Eye,
  MoreVertical,
  Flag,
  Calendar,
  Tag,
  ThumbsUp,
  Share2,
  Bookmark,
  Send
} from "lucide-react";
import { ComplaintItemProps } from "../types/Complaint";

const statusConfig = {
  pending: {
    label: "Đang xử lý",
    badge: "bg-amber-50 text-amber-700 border border-amber-200",
    icon: AlertCircle,
    iconColor: "text-amber-500",
    gradient: "from-amber-500/10 to-orange-500/10",
    accentColor: "border-amber-400"
  },
  resolved: {
    label: "Đã giải quyết",
    badge: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    gradient: "from-emerald-500/10 to-teal-500/10",
    accentColor: "border-emerald-400"
  },
  rejected: {
    label: "Từ chối",
    badge: "bg-rose-50 text-rose-700 border border-rose-200",
    icon: XCircle,
    iconColor: "text-rose-500",
    gradient: "from-rose-500/10 to-pink-500/10",
    accentColor: "border-rose-400"
  },
  investigating: {
    label: "Đang điều tra",
    badge: "bg-purple-50 text-purple-700 border border-purple-200",
    icon: Eye,
    iconColor: "text-purple-500",
    gradient: "from-purple-500/10 to-indigo-500/10",
    accentColor: "border-purple-400"
  },
  escalated: {
    label: "Đã báo cáo",
    badge: "bg-red-50 text-red-700 border border-red-200",
    icon: TrendingUp,
    iconColor: "text-red-500",
    gradient: "from-red-500/10 to-rose-500/10",
    accentColor: "border-red-400"
  }
};

const priorityConfig = {
  low: {
    color: "bg-slate-400",
    glow: "shadow-slate-400/20",
    label: "Thấp",
    pattern: "bg-linear-to-br from-slate-400 to-slate-500"
  },
  medium: {
    color: "bg-orange-400",
    glow: "shadow-orange-400/30",
    label: "Trung bình",
    pattern: "bg-linear-to-br from-orange-400 to-amber-500"
  },
  high: {
    color: "bg-red-500",
    glow: "shadow-red-500/40",
    label: "Cao",
    pattern: "bg-linear-to-br from-red-500 to-rose-600"
  },
  urgent: {
    color: "bg-purple-600",
    glow: "shadow-purple-600/50",
    label: "Khẩn cấp",
    pattern: "bg-linear-to-br from-purple-600 to-pink-600"
  }
};

const categoryConfig = {
  product: {
    label: "Sản phẩm",
    icon: Tag,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  service: {
    label: "Dịch vụ",
    icon: Zap,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  delivery: {
    label: "Giao hàng",
    icon: Archive,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  payment: {
    label: "Thanh toán",
    icon: Calendar,
    color: "text-green-600",
    bg: "bg-green-50"
  }
};

const ComplaintItem: React.FC<ComplaintItemProps> = ({
  complaint,
  showCustomer = false,
  showActions = true,
  variant = "default"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const {
    id,
    title,
    description,
    createdAt,
    status,
    priority,
    category,
    assignee,
    comments,
    views
  } = complaint;
  const statusKey = status ?? "pending";
  const StatusIcon = statusConfig[statusKey].icon;
  const categoryKey = category ?? "product";
  const CategoryIcon = categoryConfig[categoryKey].icon;

  const variantStyles = {
    default: "bg-linear-to-br from-white to-gray-50/50 border-gray-200/80",
    glassmorphism: "bg-white/70 backdrop-blur-2xl border-white/30 shadow-2xl",
    neon: "bg-linear-to-br from-gray-900 to-gray-800 border-gray-700 shadow-2xl",
    minimal: "bg-white border-gray-100",
    vibrant: `bg-linear-to-br ${statusConfig[status].gradient} border-transparent shadow-xl`,
    card3d:
      "bg-white border-gray-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
  };

  const metaColorVariant =
    variant === "neon" ? "text-gray-300" : "text-gray-500";

  return (
    <div
      className={`group relative ${variantStyles[variant]} rounded-2xl border transition-all duration-300 overflow-hidden`}
    >
      {/* Decorative elements */}
      {variant === "default" && (
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-purple-50/0 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {variant === "neon" && (
        <>
          <div
            className={`absolute inset-0 ${priorityConfig[priority].pattern} opacity-10`}
          />
          <div
            className={`absolute -inset-1 ${priorityConfig[priority].pattern} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
          />
        </>
      )}

      {variant === "neon" && (
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${priorityConfig[priority].color}`}
        />
      )}

      {/* Priority indicator - Left side */}
      <div className="absolute -left-1 top-6 bottom-6">
        <div
          className={`h-full w-1.5 rounded-r-full ${priorityConfig[priority].color} shadow-lg ${priorityConfig[priority].glow}`}
        />
      </div>

      {/* Urgent pulse animation */}
      {priority === "urgent" && (
        <div className="absolute top-5 left-5 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-75" />
            <div className="relative w-3 h-3 bg-purple-600 rounded-full" />
          </div>
        </div>
      )}

      {/* Main Content - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* LEFT SIDE - Main Info */}
        <div className="space-y-4">
          {/* Header badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                variant === "neon"
                  ? "text-gray-400 bg-gray-800"
                  : "text-gray-400 bg-gray-100"
              } px-3 py-1.5 rounded-lg`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  variant === "neon" ? "bg-gray-400" : "bg-gray-400"
                }`}
              />
              #{id}
            </span>

            <span
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold ${statusConfig[status].badge}`}
            >
              <StatusIcon
                className={`w-4 h-4 ${statusConfig[status].iconColor}`}
              />
              {statusConfig[status].label}
            </span>

            {category && (
              <span
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium ${
                  variant === "neon"
                    ? "bg-gray-800 border-gray-700"
                    : `${categoryConfig[category].bg} border-gray-200`
                } border`}
              >
                <CategoryIcon
                  className={`w-4 h-4 ${categoryConfig[category].color}`}
                />
                <span
                  className={
                    variant === "neon" ? "text-gray-300" : "text-gray-700"
                  }
                >
                  {categoryConfig[category].label}
                </span>
              </span>
            )}
          </div>

          {/* Title */}
          <div>
            <h3
              className={`font-bold ${
                variant === "neon" ? "text-white" : "text-gray-900"
              } text-xl leading-tight mb-2 group-hover:text-blue-600 transition-colors`}
            >
              {title}
            </h3>

            {/* Priority badge - inline with title */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-bold ${
                  variant === "neon"
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-700"
                } border shadow-sm`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${priorityConfig[priority].color}`}
                />
                {priorityConfig[priority].label}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="relative">
            <p
              className={`text-sm ${
                variant === "neon" ? "text-gray-300" : "text-gray-600"
              } leading-relaxed ${!isExpanded && "line-clamp-3"}`}
            >
              {description}
            </p>

            {!isExpanded && description.length > 150 && variant !== "neon" && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          {/* Expand button */}
          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1.5 text-sm font-medium ${
                variant === "neon"
                  ? "text-gray-400 hover:text-white"
                  : "text-blue-600 hover:text-blue-700"
              } transition-colors`}
            >
              {isExpanded ? (
                <>
                  <span>Thu gọn</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Xem thêm</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* RIGHT SIDE - Meta & Actions */}
        <div
          className={`space-y-4 ${
            variant === "neon"
              ? "lg:border-l lg:border-gray-700 lg:pl-6"
              : "lg:border-l lg:border-gray-200 lg:pl-6"
          }`}
        >
          {/* User & Time Info */}
          <div className="space-y-3">
            {showCustomer && assignee && (
              <div
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  variant === "neon"
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    variant === "neon" ? "bg-gray-700" : "bg-blue-200"
                  } flex items-center justify-center`}
                >
                  <User
                    className={`w-5 h-5 ${
                      variant === "neon" ? "text-gray-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <p className={`text-xs ${metaColorVariant} font-medium`}>
                    Người phụ trách
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      variant === "neon" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {assignee}
                  </p>
                </div>
              </div>
            )}

            <div
              className={`flex items-center gap-2 p-3 rounded-xl ${
                variant === "neon"
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <Clock className={`w-4 h-4 ${metaColorVariant}`} />
              <span
                className={`text-sm font-medium ${
                  variant === "neon" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {createdAt}
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            {comments !== undefined && (
              <div
                className={`text-center p-3 rounded-xl ${
                  variant === "neon"
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                } shadow-sm`}
              >
                <MessageSquare
                  className={`w-5 h-5 mx-auto mb-1 ${
                    variant === "neon" ? "text-gray-400" : "text-blue-600"
                  }`}
                />
                <p
                  className={`text-lg font-bold ${
                    variant === "neon" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {comments}
                </p>
                <p className={`text-xs ${metaColorVariant}`}>Bình luận</p>
              </div>
            )}

            {views !== undefined && (
              <div
                className={`text-center p-3 rounded-xl ${
                  variant === "neon"
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                } shadow-sm`}
              >
                <Eye
                  className={`w-5 h-5 mx-auto mb-1 ${
                    variant === "neon" ? "text-gray-400" : "text-purple-600"
                  }`}
                />
                <p
                  className={`text-lg font-bold ${
                    variant === "neon" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {views}
                </p>
                <p className={`text-xs ${metaColorVariant}`}>Lượt xem</p>
              </div>
            )}

            <div
              className={`text-center p-3 rounded-xl ${
                variant === "neon"
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white border border-gray-200"
              } shadow-sm`}
            >
              <Flag
                className={`w-5 h-5 mx-auto mb-1 ${
                  variant === "neon" ? "text-gray-400" : "text-orange-600"
                }`}
              />
              <p
                className={`text-lg font-bold ${
                  variant === "neon" ? "text-white" : "text-gray-900"
                }`}
              >
                {priority === "urgent"
                  ? "!!!"
                  : priority === "high"
                  ? "!!"
                  : "!"}
              </p>
              <p className={`text-xs ${metaColorVariant}`}>Ưu tiên</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl ${
                liked
                  ? variant === "neon"
                    ? "bg-blue-600"
                    : "bg-blue-600 text-white"
                  : variant === "neon"
                  ? "bg-gray-800 border border-gray-700 text-gray-300"
                  : "bg-white border border-gray-200 text-gray-700"
              } font-medium text-sm transition-all hover:scale-105`}
            >
              <ThumbsUp className="w-4 h-4" />
              {liked ? "Đã thích" : "Thích"}
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl ${
                bookmarked
                  ? variant === "neon"
                    ? "bg-yellow-600"
                    : "bg-yellow-500 text-white"
                  : variant === "neon"
                  ? "bg-gray-800 border border-gray-700 text-gray-300"
                  : "bg-white border border-gray-200 text-gray-700"
              } font-medium text-sm transition-all hover:scale-105`}
            >
              <Bookmark className="w-4 h-4" />
              {bookmarked ? "Đã lưu" : "Lưu"}
            </button>

            <button
              className={`p-2.5 rounded-xl ${
                variant === "neon"
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              } transition-all hover:scale-105 relative`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <MoreVertical
                className={`w-4 h-4 ${
                  variant === "neon" ? "text-gray-400" : "text-gray-600"
                }`}
              />

              {showMenu && (
                <div
                  className={`absolute top-full right-0 mt-2 w-48 ${
                    variant === "neon"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } border rounded-xl shadow-xl py-2 z-20`}
                >
                  <button
                    className={`w-full px-4 py-2 text-left text-sm ${
                      variant === "neon"
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-50"
                    } transition-colors flex items-center gap-2`}
                  >
                    <Share2 className="w-4 h-4" />
                    Chia sẻ
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left text-sm ${
                      variant === "neon"
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-50"
                    } transition-colors flex items-center gap-2`}
                  >
                    <Flag className="w-4 h-4" />
                    Báo cáo
                  </button>
                </div>
              )}
            </button>
          </div>

          {/* Main Action Buttons */}
          {showActions && (
            <div className="space-y-2 pt-4 border-t border-gray-200/50">
              <button className="w-full group/btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5">
                <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                Gửi phản hồi
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button className="group/btn flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/40">
                  <CheckCircle2 className="w-4 h-4" />
                  Giải quyết
                </button>
                <button className="group/btn flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-linear-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/40">
                  <TrendingUp className="w-4 h-4" />
                  Báo cáo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ComplaintItem;
