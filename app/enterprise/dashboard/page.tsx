"use client";

import React, { useState } from "react";
import {
  Users,
  ClipboardList,
  CheckCircle,
  Clock,
  MapPin,
  TrendingUp,
  Activity,
  Sparkles
} from "lucide-react";

const DashboardEnterprise: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 space-y-8">
      {/* Header with Animated Gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 opacity-10 blur-3xl rounded-3xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-100 p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl font-black bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  Dashboard Doanh Nghiệp
                </h1>
              </div>
              <p className="text-gray-600 text-lg ml-15">
                Tổng quan hoạt động thu gom và xử lý rác thải
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-200">
              <Activity className="w-5 h-5 text-emerald-600 animate-pulse" />
              <span className="text-sm font-bold text-emerald-700">
                Hoạt động trực tuyến
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Tổng báo cáo"
          value={1240}
          change="+12%"
          icon={<ClipboardList />}
          gradient="from-emerald-500 to-teal-500"
          isHovered={hoveredStat === 0}
          onHover={() => setHoveredStat(0)}
          onLeave={() => setHoveredStat(null)}
        />
        <StatCard
          title="Collector"
          value={86}
          change="+5%"
          icon={<Users />}
          gradient="from-blue-500 to-cyan-500"
          isHovered={hoveredStat === 1}
          onHover={() => setHoveredStat(1)}
          onLeave={() => setHoveredStat(null)}
        />
        <StatCard
          title="Hoàn thành"
          value={1024}
          change="+18%"
          icon={<CheckCircle />}
          gradient="from-green-500 to-emerald-500"
          isHovered={hoveredStat === 2}
          onHover={() => setHoveredStat(2)}
          onLeave={() => setHoveredStat(null)}
        />
        <StatCard
          title="Đang xử lý"
          value={216}
          change="-3%"
          icon={<Clock />}
          gradient="from-amber-500 to-orange-500"
          isHovered={hoveredStat === 3}
          onHover={() => setHoveredStat(3)}
          onLeave={() => setHoveredStat(null)}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Area Overview with Progress Bars */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-black text-2xl text-gray-800">
                Khu vực hoạt động
              </h2>
            </div>
            <div className="flex items-center gap-2 text-emerald-600">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-bold">Tăng trưởng tốt</span>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                area: "Quận 1",
                progress: 92,
                reports: 450,
                status: "Xuất sắc"
              },
              { area: "Quận 7", progress: 85, reports: 380, status: "Tốt" },
              {
                area: "TP. Thủ Đức",
                progress: 78,
                reports: 410,
                status: "Khá tốt"
              }
            ].map((item, index) => (
              <AreaCard key={item.area} {...item} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-black text-2xl text-gray-800">
              Hoạt động gần đây
            </h2>
          </div>

          <div className="space-y-4">
            <ActivityItem
              icon="✔️"
              text="Báo cáo"
              highlight="Rác sinh hoạt"
              action="đã được xử lý"
              color="emerald"
              time="5 phút trước"
            />
            <ActivityItem
              icon="🚛"
              text="Collector"
              highlight="Nguyễn Văn A"
              action="nhận nhiệm vụ mới"
              color="blue"
              time="12 phút trước"
            />
            <ActivityItem
              icon="⏳"
              text="Báo cáo tại"
              highlight="Quận 7"
              action="đang chờ xử lý"
              color="amber"
              time="20 phút trước"
            />
            <ActivityItem
              icon="⚠️"
              text="Cảnh báo"
              highlight="Quận 1"
              action="cần xử lý ưu tiên"
              color="red"
              time="35 phút trước"
            />
          </div>

          <button className="w-full mt-6 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            Xem tất cả hoạt động
          </button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-black text-2xl text-gray-800">
            Hiệu suất tổng quan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            label="Tỷ lệ hoàn thành"
            value="82.6%"
            trend="up"
            color="emerald"
          />
          <MetricCard
            label="Thời gian xử lý TB"
            value="2.4h"
            trend="down"
            color="blue"
          />
          <MetricCard
            label="Đánh giá trung bình"
            value="4.7/5"
            trend="up"
            color="amber"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardEnterprise;

/* ---------------- Sub Components ---------------- */

interface StatCardProps {
  title: string;
  value: number;
  change: string;
  icon: React.ReactNode;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  gradient,
  isHovered,
  onHover,
  onLeave
}) => {
  const isPositive = change.startsWith("+");

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-6 transition-all duration-300 cursor-pointer ${
        isHovered ? "shadow-2xl scale-105" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 font-semibold mb-2">{title}</p>
          <p className="text-4xl font-black text-gray-800">
            {value.toLocaleString("vi-VN")}
          </p>
        </div>
        <div
          className={`w-14 h-14 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}
        >
          <div className="text-white">{icon}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-bold ${
            isPositive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-gray-500">so với tháng trước</span>
      </div>
    </div>
  );
};

interface AreaCardProps {
  area: string;
  progress: number;
  reports: number;
  status: string;
  delay: number;
}

const AreaCard: React.FC<AreaCardProps> = ({
  area,
  progress,
  reports,
  status,
  delay
}) => {
  return (
    <div
      className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-black text-lg text-emerald-800">{area}</h3>
            <p className="text-xs text-gray-600">{reports} báo cáo</p>
          </div>
        </div>
        <span className="text-sm font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-xl">
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 font-medium">Tiến độ</span>
          <span className="text-emerald-700 font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-emerald-100 rounded-full h-3 overflow-hidden">
          <div
            className="bg-linear-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

interface ActivityItemProps {
  icon: string;
  text: string;
  highlight: string;
  action: string;
  color: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  icon,
  text,
  highlight,
  action,
  color,
  time
}) => {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-50 border-emerald-200",
    blue: "bg-blue-50 border-blue-200",
    amber: "bg-amber-50 border-amber-200",
    red: "bg-red-50 border-red-200"
  };

  return (
    <div
      className={`${colorMap[color]} border rounded-2xl p-4 hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <p className="text-sm text-gray-700 leading-relaxed">
            {text} <span className="font-bold text-gray-900">{highlight}</span>{" "}
            {action}
          </p>
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  label: string;
  value: string;
  trend: "up" | "down";
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  color
}) => {
  const colorMap: Record<string, string> = {
    emerald: "from-emerald-500 to-teal-500",
    blue: "from-blue-500 to-cyan-500",
    amber: "from-amber-500 to-orange-500"
  };

  return (
    <div className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-600 font-semibold">{label}</span>
        <div
          className={`w-8 h-8 bg-linear-to-br ${colorMap[color]} rounded-lg flex items-center justify-center`}
        >
          <TrendingUp
            className={`w-4 h-4 text-white ${
              trend === "down" ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <p className="text-3xl font-black text-gray-800">{value}</p>
    </div>
  );
};
