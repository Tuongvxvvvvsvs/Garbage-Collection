"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Camera,
  Award,
  TrendingUp,
  AlertCircle,
  Zap,
  ChevronRight,
  Menu,
  Bell,
  Search
} from "lucide-react";

export default function TrashReportApp() {
  const [userLocation, setUserLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [stats, setStats] = useState({
    pendingReports: 3,
    completedReports: 12,
    points: 245,
    ranking: 12,
    streak: 7
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setTimeout(() => setMapLoaded(true), 800);
        },
        () => {
          setUserLocation({ lat: 10.8231, lng: 106.6297 });
          setTimeout(() => setMapLoaded(true), 800);
        }
      );
    } else {
      setUserLocation({ lat: 10.8231, lng: 106.6297 });
      setTimeout(() => setMapLoaded(true), 800);
    }
  }, []);

  const handleReportTrash = () => {
    alert("📸 Mở camera để chụp ảnh báo cáo...");
  };

  const trashReports = [
    { id: 1, lat: 10.8251, lng: 106.6277, type: "plastic", status: "pending" },
    {
      id: 2,
      lat: 10.8221,
      lng: 106.6317,
      type: "general",
      status: "processing"
    },
    {
      id: 3,
      lat: 10.8211,
      lng: 106.6287,
      type: "hazardous",
      status: "pending"
    },
    { id: 4, lat: 10.8241, lng: 106.6307, type: "organic", status: "completed" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Báo cáo rác</h1>
              <p className="text-xs text-gray-500">Quận 1, TP.HCM</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Section - Realistic */}
      <div className="relative h-96 bg-gray-300">
        {!mapLoaded ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-600 text-sm">Đang tải bản đồ...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Simulated Google Maps style */}
            <div className="absolute inset-0 bg-gray-50">
              {/* Streets simulation */}
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Main roads */}
                <line
                  x1="0"
                  y1="150"
                  x2="100%"
                  y2="150"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="100%"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
                <line
                  x1="0"
                  y1="280"
                  x2="100%"
                  y2="280"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Parks/Green spaces */}
                <rect
                  x="50"
                  y="50"
                  width="80"
                  height="60"
                  fill="#d1fae5"
                  opacity="0.6"
                  rx="4"
                />
                <rect
                  x="280"
                  y="200"
                  width="60"
                  height="50"
                  fill="#d1fae5"
                  opacity="0.6"
                  rx="4"
                />
              </svg>

              {/* Trash markers */}
              {trashReports.map((report) => {
                const colors = {
                  plastic: "bg-yellow-500",
                  general: "bg-orange-500",
                  hazardous: "bg-red-500",
                  organic: "bg-green-500"
                };
                const statusOpacity =
                  report.status === "completed" ? "opacity-40" : "opacity-100";

                return (
                  <div
                    key={report.id}
                    className={`absolute ${statusOpacity}`}
                    style={{
                      left: `${((report.lng - 106.6257) / 0.008) * 100}%`,
                      top: `${((10.8261 - report.lat) / 0.006) * 100}%`,
                      transform: "translate(-50%, -100%)"
                    }}
                  >
                    <div
                      className={`${
                        colors[report.type]
                      } w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center relative`}
                    >
                      <AlertCircle className="w-5 h-5 text-white" />
                      {report.status === "pending" && (
                        <div className="absolute inset-0 rounded-full bg-current animate-ping opacity-30"></div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* User location marker */}
              {userLocation && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 -m-6">
                      <div className="w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                    </div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-3 border-white shadow-lg relative z-10"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Map controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition">
                <TrendingUp className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 transition font-bold text-gray-700 text-lg">
                +
              </button>
              <button className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 transition font-bold text-gray-700 text-lg">
                −
              </button>
            </div>

            {/* Current location button */}
            <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition">
              <MapPin className="w-5 h-5 text-blue-500" />
            </button>
          </>
        )}
      </div>

      {/* Main CTA Button */}
      <div className="px-4 -mt-7 relative z-10">
        <button
          onClick={handleReportTrash}
          className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 font-semibold text-base transition"
        >
          <Camera className="w-6 h-6" />
          Báo cáo rác thải
        </button>
      </div>

      {/* Stats Cards */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <AlertCircle className="w-6 h-6 text-orange-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {stats.pendingReports}
            </p>
            <p className="text-xs text-gray-600 mt-1">Đang xử lý</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <Award className="w-6 h-6 text-amber-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.points}</p>
            <p className="text-xs text-gray-600 mt-1">Điểm</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900">#{stats.ranking}</p>
            <p className="text-xs text-gray-600 mt-1">Xếp hạng</p>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Hoạt động gần đây</h3>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="divide-y divide-gray-200">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Duy trì chuỗi {stats.streak} ngày
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Tiếp tục để nhận thưởng x2
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-green-600">
                  +{stats.streak * 10}
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Báo cáo được xác nhận
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Đường Lê Lợi - 2 giờ trước
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-blue-600">+100</p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Thăng hạng</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Bạn đã vào top 15 khu vực
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-gray-400">Hôm qua</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards Banner */}
      <div className="px-4 mt-4 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Đổi quà tặng</p>
              <p className="text-green-50 text-xs mt-1 leading-relaxed">
                Còn 55 điểm nữa để đổi voucher giảm giá 50.000đ
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/80 flex-shrink-0 mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
