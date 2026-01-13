"use client";
import React from "react";
import { X } from "lucide-react";
import Header from "@/components/Header";
import StatsDashboard from "./components/StatsDashboard";
import MainCTA from "./components/MainCTA";
import WeeklyGoal from "./components/WeeklyGoal";
import RewardsCard from "./components/RewardsCard";
import MiniLeaderboard from "./components/MiniLeaderboard";
import NotificationsDropdown from "./components/NotificationsDropdown";
import MapView from "./components/MapView";
import Footer from "@/components/Footer";

export default function TrashReportApp() {
  const [showNotifications, setShowNotifications] =
    React.useState<boolean>(false);

  const handleReportTrash = () => {
    alert("📸 Opening camera to report waste...");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
      <Header />
      {/* Modern Header with Glassmorphism */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-100">
        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute top-full right-4 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <button
                aria-label="close"
                onClick={() => setShowNotifications(false)}
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <NotificationsDropdown />
          </div>
        )}
      </div>

      {/* Two Column Layout */}
      <div className="px-4 py-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* LEFT COLUMN - Stats & Actions */}
        <div className="space-y-4">
          {/* Enhanced Stats Dashboard */}
          <StatsDashboard />

          {/* Main CTA Button - Enhanced */}
          <MainCTA onReport={handleReportTrash} />

          {/* Weekly Goal Progress */}
          <WeeklyGoal />
        </div>

        {/* RIGHT COLUMN - Achievements & Leaderboard */}
        <div className="space-y-4">
          {/* Rewards & Achievements */}
          <RewardsCard />

          {/* Mini Leaderboard */}
          <MiniLeaderboard />
        </div>
      </div>

      {/* Map Section */}
      <MapView />
      <Footer/>
    </div>
  );
}
