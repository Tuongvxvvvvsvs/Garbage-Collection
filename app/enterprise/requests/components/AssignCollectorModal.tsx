"use client";

import React, { useState } from "react";
import {
  X,
  MapPin,
  Truck,
  Star,
  CheckCircle,
  Search,
  TrendingUp,
  Clock,
  Award,
  Zap
} from "lucide-react";

interface AssignCollectorModalProps {
  open?: boolean;
  onClose?: () => void;
  requestId: string | null;
}

interface Collector {
  id: number;
  name: string;
  avatar: string;
  district: string;
  vehicle: string;
  rating: number;
  totalTasks: number;
  status: "available" | "busy" | "offline";
  isVerified: boolean;
  responseTime: string;
  completionRate: number;
}

const mockCollectors: Collector[] = [
  {
    id: 1,
    name: "Trần Văn Bình",
    avatar: "TB",
    district: "Quận 7",
    vehicle: "Xe tải nhỏ",
    rating: 4.8,
    totalTasks: 128,
    status: "available",
    isVerified: true,
    responseTime: "< 15 phút",
    completionRate: 98
  },
  {
    id: 2,
    name: "Nguyễn Minh Tú",
    avatar: "NT",
    district: "Quận 1",
    vehicle: "Xe máy",
    rating: 4.9,
    totalTasks: 256,
    status: "available",
    isVerified: true,
    responseTime: "< 10 phút",
    completionRate: 99
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    avatar: "LN",
    district: "Quận 3",
    vehicle: "Xe tải lớn",
    rating: 4.7,
    totalTasks: 89,
    status: "busy",
    isVerified: false,
    responseTime: "< 30 phút",
    completionRate: 95
  }
];

const AssignCollectorModal: React.FC<AssignCollectorModalProps> = ({
  open = true,
  onClose
}) => {
  const [selectedCollector, setSelectedCollector] = useState<number | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  if (!open) return null;

  const filteredCollectors = mockCollectors.filter(
    (collector) =>
      collector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      collector.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssign = () => {
    if (selectedCollector) {
      console.log("Assigning collector:", selectedCollector);
      onClose?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay with gradient */}
      <div
        className="absolute inset-0 bg-linear-to-br from-gray-900/50 via-emerald-900/30 to-gray-900/50 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Header with gradient */}
        <div className="relative bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-500 px-8 py-6">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-white mb-1">
                Gán Collector
              </h2>
              <p className="text-emerald-50/90 text-sm font-medium">
                Chọn collector phù hợp cho nhiệm vụ này
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-11 h-11 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:rotate-90 group"
            >
              <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Search with icon */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm collector theo tên hoặc khu vực..."
              className="w-full border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Có sẵn
                </span>
              </div>
              <p className="text-2xl font-black text-emerald-700">
                {mockCollectors.filter((c) => c.status === "available").length}
              </p>
            </div>
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100">
              <div className="flex items-center gap-2 text-amber-700 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Bận
                </span>
              </div>
              <p className="text-2xl font-black text-amber-700">
                {mockCollectors.filter((c) => c.status === "busy").length}
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Top
                </span>
              </div>
              <p className="text-2xl font-black text-blue-700">
                {mockCollectors.filter((c) => c.rating >= 4.8).length}
              </p>
            </div>
          </div>

          {/* Collector list */}
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-gray-100">
            {filteredCollectors.length > 0 ? (
              filteredCollectors.map((collector) => (
                <CollectorItem
                  key={collector.id}
                  collector={collector}
                  isSelected={selectedCollector === collector.id}
                  onSelect={() => setSelectedCollector(collector.id)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-gray-500 font-semibold">
                  Không tìm thấy collector phù hợp
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Thử tìm kiếm với từ khóa khác
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 px-8 py-6 border-t border-gray-200 bg-linear-to-r from-gray-50 to-white">
          <div className="text-sm text-gray-600">
            {selectedCollector ? (
              <span className="flex items-center gap-2 font-semibold text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                Đã chọn collector
              </span>
            ) : (
              <span className="text-gray-400">Chưa chọn collector</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Hủy
            </button>
            <button
              onClick={handleAssign}
              disabled={!selectedCollector}
              className="px-8 py-3 rounded-xl font-bold text-white bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:scale-100 disabled:shadow-none"
            >
              Xác nhận gán
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
  );
};

export default AssignCollectorModal;

/* ---------------- Sub Component ---------------- */

interface CollectorItemProps {
  collector: Collector;
  isSelected: boolean;
  onSelect: () => void;
}

const CollectorItem: React.FC<CollectorItemProps> = ({
  collector,
  isSelected,
  onSelect
}) => {
  const statusConfig = {
    available: {
      color: "bg-emerald-500",
      text: "Sẵn sàng",
      ring: "ring-emerald-500"
    },
    busy: {
      color: "bg-amber-500",
      text: "Đang bận",
      ring: "ring-amber-500"
    },
    offline: {
      color: "bg-gray-400",
      text: "Offline",
      ring: "ring-gray-400"
    }
  };

  const status = statusConfig[collector.status];

  return (
    <div
      onClick={onSelect}
      className={`group relative border-2 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 cursor-pointer ${
        isSelected
          ? "border-emerald-500 bg-linear-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20 scale-[1.02]"
          : "border-gray-200 hover:border-emerald-300 hover:shadow-md bg-white"
      }`}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-scale-in">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
      )}

      <div className="flex items-center gap-4 flex-1">
        {/* Avatar with status */}
        <div className="relative">
          <div
            className={`w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg transition-transform duration-300 ${
              isSelected ? "scale-110" : "group-hover:scale-105"
            }`}
          >
            {collector.avatar}
          </div>
          {/* Status indicator */}
          <div
            className={`absolute -bottom-1 -right-1 w-5 h-5 ${status.color} rounded-full border-2 border-white shadow-sm flex items-center justify-center`}
          >
            <div
              className={`w-2 h-2 bg-white rounded-full ${
                collector.status === "available" ? "animate-pulse" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-bold text-gray-900 text-lg truncate">
              {collector.name}
            </p>
            {collector.isVerified && (
              <div className="shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-100" />
              </div>
            )}
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                collector.status === "available"
                  ? "bg-emerald-100 text-emerald-700"
                  : collector.status === "busy"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {status.text}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-emerald-600" />
              {collector.district}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Truck className="w-4 h-4 text-gray-500" />
              {collector.vehicle}
            </span>
          </div>

          {/* Additional stats */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {collector.responseTime}
            </span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {collector.completionRate}% hoàn thành
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="text-right shrink-0 ml-4">
        <div className="flex items-center justify-end gap-1.5 mb-2">
          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
          <span className="text-xl font-black text-gray-900">
            {collector.rating}
          </span>
        </div>
        <div className="flex items-center justify-end gap-1 text-sm">
          <Award className="w-4 h-4 text-gray-400" />
          <p className="font-bold text-gray-600">
            {collector.totalTasks}{" "}
            <span className="text-gray-400 font-normal">nhiệm vụ</span>
          </p>
        </div>
      </div>
    </div>
  );
};
