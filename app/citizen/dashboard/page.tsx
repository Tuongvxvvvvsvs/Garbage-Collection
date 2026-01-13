"use client";
import React, { useEffect, useState } from "react";
import { FileText, BarChart3 } from "lucide-react";
import RecentReports from "./components/RecentReports";
import StatsCard from "./components/StatsCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DashboardCitizen: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-linear-to-br from-slate-50 via-stone-50 to-zinc-50">
      <Header />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap");

        * {
          font-family: "IBM Plex Sans", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Playfair Display", serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .glass-nav {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .luxury-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.7) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .luxury-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          border-color: rgba(139, 92, 246, 0.3);
        }
      `}</style>

      {/* Main Content */}
      <main className="px-1">
        <div className="">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Stats & Info (40%) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Stats Summary */}
              <div className="fade-in-up">
                <StatsCard />
              </div>

              {/* Quick Actions Card */}
              <div className="luxury-card rounded-2xl p-6 fade-in-up">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hành động nhanh
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-linear-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all">
                    <FileText className="w-5 h-5" />
                    <span className="font-semibold">Tạo báo cáo mới</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-all">
                    <BarChart3 className="w-5 h-5" />
                    <span className="font-semibold">Xem phân tích</span>
                  </button>
                </div>
              </div>

              {/* Activity Summary */}
              <div className="luxury-card rounded-2xl p-6 fade-in-up">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hoạt động gần đây
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      action: "Báo cáo mới được tạo",
                      time: "2 giờ trước",
                      color: "bg-blue-500"
                    },
                    {
                      action: "Báo cáo được phê duyệt",
                      time: "5 giờ trước",
                      color: "bg-emerald-500"
                    },
                    {
                      action: "Cập nhật trạng thái",
                      time: "1 ngày trước",
                      color: "bg-amber-500"
                    }
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${activity.color}`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Chart Card */}
              <div className="luxury-card rounded-2xl p-6 fade-in-up">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hiệu suất tháng này
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-600">
                        Đã giải quyết
                      </span>
                      <span className="font-bold text-emerald-600">50%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-emerald-400 to-teal-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-600">
                        Đang xử lý
                      </span>
                      <span className="font-bold text-amber-600">37.5%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-600">Từ chối</span>
                      <span className="font-bold text-rose-600">12.5%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-rose-400 to-pink-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Recent Reports (60%) */}
            <div className="lg:col-span-7">
              <RecentReports />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardCitizen;
