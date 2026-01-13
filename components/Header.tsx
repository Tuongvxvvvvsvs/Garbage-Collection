"use client";

import React from "react";
import {
  MapPin,
  Bell,
  Search,
  Recycle,
  X,
  User,
  LogOut,
  Settings,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Award,
  Zap
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  const notifications = [
    {
      id: 1,
      title: "Report verified!",
      desc: "Le Loi Street - 2h ago",
      time: "2h",
      unread: true,
      icon: "✅",
      color: "emerald"
    },
    {
      id: 2,
      title: "Reward unlocked!",
      desc: "50,000đ voucher available",
      time: "5h",
      unread: true,
      icon: "🎁",
      color: "amber"
    },
    {
      id: 3,
      title: "New challenge",
      desc: "Collect 5 reports this week",
      time: "1d",
      unread: false,
      icon: "🎯",
      color: "blue"
    }
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <>
      {/* Main Header */}
      <div className="bg-white sticky top-0 z-50 border-b border-gray-100">
        {/* Top gradient bar */}
        <div className="h-1 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>

                  {/* Logo container */}
                  <div className="relative bg-linear-to-br from-emerald-500 to-teal-600 p-2.5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                    <Recycle className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-black text-gray-900 tracking-tight">
                      Eco<span className="text-emerald-600">Collect</span>
                    </h1>
                    <div className="px-2 py-0.5 bg-linear-to-r from-yellow-400 to-orange-400 rounded-full">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    District 1, HCMC
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="hidden lg:flex items-center gap-1">
                <button
                  onClick={() => router.push("/")}
                  className="px-4 py-2 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-all"
                >
                  Home
                </button>
                <button
                  onClick={() => router.push("/about")}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                >
                  About
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                >
                  Contact
                </button>
                <button
                  onClick={() => router.push("/support")}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                >
                  Support
                </button>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-all group"
              >
                <Search className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-all group"
                >
                  <Bell className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                  {unreadCount > 0 && (
                    <>
                      {/* Ping animation */}
                      <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-linear-to-br from-red-500 to-pink-600 text-white text-xs font-bold items-center justify-center shadow-lg">
                          {unreadCount}
                        </span>
                      </span>
                    </>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowNotifications(false)}
                    ></div>
                    <div className="absolute right-0 mt-3 w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      {/* Header */}
                      <div className="p-5 bg-linear-to-br from-emerald-50 to-teal-50 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                              Notifications
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {unreadCount} unread messages
                            </p>
                          </div>
                          <button
                            onClick={() => setShowNotifications(false)}
                            className="p-2 hover:bg-white/80 rounded-xl transition-colors"
                          >
                            <X className="w-5 h-5 text-gray-400" />
                          </button>
                        </div>
                      </div>

                      {/* Notifications list */}
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((n) => (
                          <div
                            key={n.id}
                            className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-all group ${
                              n.unread
                                ? "bg-linear-to-r from-emerald-50/50 to-transparent"
                                : ""
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-2xl group-hover:scale-110 transition-transform">
                                {n.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                                    {n.title}
                                  </p>
                                  {n.unread && (
                                    <span className="shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-1.5"></span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                                  {n.desc}
                                </p>
                                <p className="text-xs text-gray-400 mt-1.5">
                                  {n.time} ago
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="p-3 bg-gray-50 text-center border-t">
                        <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                          View all notifications →
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1.5 pr-3 hover:bg-gray-100 rounded-xl transition-all group"
                >
                  <div className="relative">
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center font-bold shadow-lg group-hover:shadow-xl transition-all">
                      NV
                    </div>
                    {/* Online indicator */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-all ${
                      showUserMenu ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {showUserMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowUserMenu(false)}
                    ></div>
                    <div className="absolute right-0 mt-3 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      {/* User Profile Header */}
                      <div className="relative p-6 bg-linear-to-br from-emerald-500 via-teal-600 to-cyan-600 text-white overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
                        </div>

                        <div className="relative flex items-start gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-white/20">
                            NV
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-lg">Nguyễn Văn A</p>
                            <p className="text-xs text-white/90 truncate">
                              nguyenvana@email.com
                            </p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="relative grid grid-cols-2 gap-3 mt-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="w-4 h-4 text-yellow-300" />
                              <span className="text-xs font-medium text-white/90">
                                Points
                              </span>
                            </div>
                            <p className="text-xl font-bold">1,250</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                            <div className="flex items-center gap-2 mb-1">
                              <Award className="w-4 h-4 text-yellow-300" />
                              <span className="text-xs font-medium text-white/90">
                                Level
                              </span>
                            </div>
                            <p className="text-xl font-bold">Gold</p>
                          </div>
                        </div>

                        {/* Role badge */}
                        <div className="relative mt-4">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-lg">🧍</span>
                            <span className="text-sm font-bold">CITIZEN</span>
                            <Zap className="w-3 h-3 text-yellow-300" />
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-3">
                        <button
                          onClick={() => router.push("/profile")}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-emerald-50 hover:to-teal-50 transition-all group"
                        >
                          <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                            <User className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="font-medium text-gray-700">
                            My Profile
                          </span>
                        </button>

                        <button
                          onClick={() => router.push("/settings")}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group"
                        >
                          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                            <Settings className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-700">
                            Settings
                          </span>
                        </button>
                      </div>

                      {/* Logout */}
                      <div className="p-3 border-t bg-gray-50">
                        <button
                          onClick={() => router.push("/login")}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-all group"
                        >
                          <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                            <LogOut className="w-4 h-4" />
                          </div>
                          <span className="font-semibold">Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar (Expandable) */}
        {showSearch && (
          <div className="px-4 pb-3 animate-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search locations, reports, rewards..."
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
