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
  Search,
  Recycle,
  Users,
  Target,
  Gift,
  Star,
  Leaf,
  Calendar,
  MapPinned,
  CheckCircle2,
  Clock,
  Trophy,
  X
} from "lucide-react";

export default function TrashReportApp() {
  const [userLocation, setUserLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState("map");
  const [stats, setStats] = useState({
    pendingReports: 3,
    completedReports: 12,
    points: 245,
    ranking: 12,
    streak: 7,
    weeklyGoal: 5,
    weeklyProgress: 3,
    totalImpact: "127.5",
    co2Saved: "45.2"
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
    alert("📸 Opening camera to report waste...");
  };
  const trashReports = [
    { id: 1, lat: 10.8251, lng: 106.6277, type: "plastic", status: "pending", reward: 50 },
    { id: 2, lat: 10.8221, lng: 106.6317, type: "general", status: "processing", reward: 30 },
    { id: 3, lat: 10.8211, lng: 106.6287, type: "hazardous", status: "pending", reward: 100 },
    { id: 4, lat: 10.8241, lng: 106.6307, type: "organic", status: "completed", reward: 40 }
  ];

  const notifications = [
    { id: 1, type: "success", title: "Report verified!", desc: "Le Loi Street - 2h ago", time: "2h", unread: true },
    { id: 2, type: "reward", title: "Reward unlocked!", desc: "50,000đ voucher available", time: "5h", unread: true },
    { id: 3, type: "info", title: "New challenge", desc: "Collect 5 reports this week", time: "1d", unread: false }
  ];

  const leaderboard = [
    { rank: 1, name: "Nguyễn Văn A", points: 1250, avatar: "🥇" },
    { rank: 2, name: "Trần Thị B", points: 1100, avatar: "🥈" },
    { rank: 3, name: "Lê Văn C", points: 980, avatar: "🥉" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
      {/* Modern Header with Glassmorphism */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  EcoCollect
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-semibold">PRO</span>
                </h1>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  District 1, Ho Chi Minh City
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-gray-100 rounded-xl transition relative"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <button aria-label="Search" className="p-2 hover:bg-gray-100 rounded-xl transition">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl transition">
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("map")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                activeTab === "map"
                  ? "bg-emerald-100 text-emerald-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <MapPinned className="w-4 h-4 inline mr-1" />
              Map View
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                activeTab === "list"
                  ? "bg-emerald-100 text-emerald-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <AlertCircle className="w-4 h-4 inline mr-1" />
              Reports
            </button>
          </div>
        </div>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute top-full right-4 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <button onClick={() => setShowNotifications(false)}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition ${
                    notif.unread ? "bg-emerald-50/50" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      notif.type === "success" ? "bg-green-100" :
                      notif.type === "reward" ? "bg-amber-100" : "bg-blue-100"
                    }`}>
                      {notif.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      {notif.type === "reward" && <Gift className="w-5 h-5 text-amber-600" />}
                      {notif.type === "info" && <Target className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{notif.desc}</p>
                    </div>
                    <span className="text-xs text-gray-400">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Stats Dashboard */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mb-20"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-emerald-100 text-sm font-medium mb-1">Your Impact This Month</p>
                <h2 className="text-3xl font-bold text-white">{stats.totalImpact} kg</h2>
                <p className="text-emerald-100 text-xs mt-1 flex items-center gap-1">
                  <Leaf className="w-3 h-3" />
                  {stats.co2Saved} kg CO₂ saved
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <Award className="w-5 h-5 text-white mb-1" />
                <p className="text-xl font-bold text-white">{stats.points}</p>
                <p className="text-xs text-emerald-100">Points</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <Trophy className="w-5 h-5 text-white mb-1" />
                <p className="text-xl font-bold text-white">#{stats.ranking}</p>
                <p className="text-xs text-emerald-100">Ranking</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <Zap className="w-5 h-5 text-white mb-1" />
                <p className="text-xl font-bold text-white">{stats.streak}</p>
                <p className="text-xs text-emerald-100">Day Streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Goal Progress */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Target className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Weekly Goal</p>
                <p className="text-xs text-gray-500">{stats.weeklyProgress}/{stats.weeklyGoal} reports</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-purple-600">{Math.round((stats.weeklyProgress/stats.weeklyGoal)*100)}%</p>
            </div>
          </div>
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${(stats.weeklyProgress/stats.weeklyGoal)*100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main CTA Button - Enhanced */}
      <div className="px-4 mb-4">
        <button
          onClick={handleReportTrash}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 active:scale-95 text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 font-semibold text-base transition-all relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <Camera className="w-6 h-6" />
          Report Waste Now
          <span className="bg-white/20 px-2 py-1 rounded-lg text-xs">+50 pts</span>
        </button>
      </div>

      {/* Map Section */}
      {activeTab === "map" && (
        <div className="px-4 mb-4">
          <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {!mapLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-gray-600 text-sm">Loading map...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gray-50">
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <line x1="0" y1="150" x2="100%" y2="150" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="200" y1="0" x2="200" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
                    <rect x="50" y="50" width="80" height="60" fill="#d1fae5" opacity="0.6" rx="4" />
                  </svg>

                  {trashReports.map((report) => {
                    const colors = {
                      plastic: "bg-yellow-500",
                      general: "bg-orange-500",
                      hazardous: "bg-red-500",
                      organic: "bg-green-500"
                    };
                    return (
                      <div
                        key={report.id}
                        className={`absolute ${report.status === "completed" ? "opacity-40" : "opacity-100"}`}
                        style={{
                          left: `${((report.lng - 106.6257) / 0.008) * 100}%`,
                          top: `${((10.8261 - report.lat) / 0.006) * 100}%`,
                          transform: "translate(-50%, -100%)"
                        }}
                      >
                        <div className={`${colors[report.type]} w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center relative group cursor-pointer`}>
                          <AlertCircle className="w-6 h-6 text-white" />
                          {report.status === "pending" && (
                            <div className="absolute inset-0 rounded-full bg-current animate-ping opacity-30"></div>
                          )}
                          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            +{report.reward} pts
                          </div>
                        </div>
                      </div>
                    );
                  })}

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

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-md hover:bg-white transition">
                    <TrendingUp className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md hover:bg-white transition">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Reports List View */}
      {activeTab === "list" && (
        <div className="px-4 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {trashReports.map((report, index) => (
              <div key={report.id} className={`p-4 flex items-center gap-4 ${index !== trashReports.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  report.type === "plastic" ? "bg-yellow-100" :
                  report.type === "general" ? "bg-orange-100" :
                  report.type === "hazardous" ? "bg-red-100" : "bg-green-100"
                }`}>
                  <AlertCircle className={`w-6 h-6 ${
                    report.type === "plastic" ? "text-yellow-600" :
                    report.type === "general" ? "text-orange-600" :
                    report.type === "hazardous" ? "text-red-600" : "text-green-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 capitalize">{report.type} Waste</p>
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {report.status === "pending" ? "Waiting verification" : report.status === "processing" ? "In progress" : "Completed"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-600">+{report.reward}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                    report.status === "completed" ? "bg-green-100 text-green-700" :
                    report.status === "processing" ? "bg-blue-100 text-blue-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mini Leaderboard */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold text-gray-900">Top Contributors</h3>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="divide-y divide-gray-100">
            {leaderboard.map((user) => (
              <div key={user.rank} className="p-4 flex items-center gap-3 hover:bg-gray-50 transition">
                <span className="text-2xl">{user.avatar}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.points} points</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  user.rank === 1 ? "bg-amber-100 text-amber-700" :
                  user.rank === 2 ? "bg-gray-100 text-gray-700" :
                  "bg-orange-100 text-orange-700"
                }`}>
                  {user.rank}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rewards & Achievements */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Star className="absolute top-2 right-4 w-16 h-16 text-white" />
            <Gift className="absolute bottom-2 left-4 w-12 h-12 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-white/90 text-sm font-medium mb-1">Available Rewards</p>
                <h3 className="text-2xl font-bold text-white">3 vouchers ready!</h3>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-white text-xs font-semibold">55 pts to next</p>
              </div>
            </div>
            <button className="w-full bg-white text-purple-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              Claim Your Rewards
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}