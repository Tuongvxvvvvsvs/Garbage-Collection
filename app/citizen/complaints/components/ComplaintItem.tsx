"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Clock,
  User,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { ComplaintItemProps } from "../types/Complaint";

const statusConfig = {
  pending: {
    label: "Đang xử lý",
    badge: "bg-yellow-100 text-yellow-800"
  },
  resolved: {
    label: "Đã giải quyết",
    badge: "bg-green-100 text-green-800"
  },
  rejected: {
    label: "Từ chối",
    badge: "bg-red-100 text-red-800"
  }
};

const priorityConfig = {
  low: "bg-gray-300",
  medium: "bg-orange-400",
  high: "bg-red-500"
};

const ComplaintItem: React.FC<ComplaintItemProps> = ({
  complaint,
  showCustomer = false,
  showActions = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { id, title, description, createdAt, status, priority } = complaint;

  return (
    <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Accent priority bar */}
      <div
        className={`absolute left-0 top-0 h-full w-1.5 ${priorityConfig[priority]}`}
      />

      {/* Header */}
      <div className="px-5 py-4 flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400">#{id}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusConfig[status].badge}`}
            >
              {statusConfig[status].label}
            </span>
          </div>

          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* Meta */}
      <div className="px-5 pb-3 flex gap-4 text-xs text-gray-500">
        {showCustomer && (
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Người dùng</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{createdAt}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-4">
        <p className={`text-sm text-gray-700 ${!isExpanded && "line-clamp-2"}`}>
          {description}
        </p>
      </div>

      {/* Actions */}
      {isExpanded && showActions && (
        <div className="px-5 py-4 border-t bg-gray-50 flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">
            <MessageSquare className="w-4 h-4" />
            Phản hồi
          </button>
          <button className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition">
            Giải quyết
          </button>
        </div>
      )}
    </div>
  );
};

export default ComplaintItem;
