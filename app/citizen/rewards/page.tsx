"use client";

import React from "react";
import RewardSummary from "./components/RewardSummary";
import RewardHistoryTable from "./components/RewardHistoryTable";
import RankingTable from "./components/RankingTable";
import { Gift, Star, Target, TrendingUp, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rewards = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
      <Header/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(5deg);
          }
          66% {
            transform: translateY(-5px) rotate(-3deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          }
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
        
        .float-icon {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #059669 0%, #10b981 50%, #059669 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/3 w-100 h-100 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-75 h-75 bg-teal-300 rounded-full blur-3xl opacity-20"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-10 opacity-5 float-icon" style={{ animationDelay: '0s' }}>
          <Gift className="w-32 h-32 text-green-600" />
        </div>
        <div className="absolute bottom-32 left-16 opacity-5 float-icon" style={{ animationDelay: '2s' }}>
          <Star className="w-24 h-24 text-emerald-600" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-5 float-icon" style={{ animationDelay: '4s' }}>
          <Target className="w-28 h-28 text-teal-600" />
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="">
          
          {/* Hero Header */}
          <div className="fade-in-up">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border-2 border-green-200/50">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20px 20px, rgb(34, 197, 94) 2px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative pulse-glow">
                        <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                          <Gift className="w-10 h-10 text-white" strokeWidth={2.5} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h1 
                          className="text-5xl md:text-6xl font-black mb-2 shimmer-text"
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          Kho Phần Thưởng
                        </h1>
                        <p 
                          className="text-lg md:text-xl text-green-700 font-semibold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Quản lý điểm xanh và theo dõi thành tích của bạn 🎁
                        </p>
                      </div>
                    </div>

                    {/* Achievement Badges */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-linear-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border-2 border-green-200/50 shadow-sm">
                        <Star className="w-4 h-4 text-green-600" fill="currentColor" />
                        <span 
                          className="text-sm font-bold text-green-700"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Thành viên tích cực
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-linear-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-full border-2 border-amber-200/50 shadow-sm">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                        <span 
                          className="text-sm font-bold text-amber-700"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Đang tăng trưởng
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-linear-to-r from-teal-100 to-cyan-100 px-4 py-2 rounded-full border-2 border-teal-200/50 shadow-sm">
                        <Target className="w-4 h-4 text-teal-600" />
                        <span 
                          className="text-sm font-bold text-teal-700"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Mục tiêu: 500 điểm
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Stats */}
                  <div className="grid grid-cols-2 gap-4 lg:min-w-70">
                    <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200/50 text-center">
                      <div 
                        className="text-3xl font-black text-green-600 mb-1"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        320
                      </div>
                      <div 
                        className="text-xs text-green-700 font-semibold uppercase tracking-wide"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Điểm xanh
                      </div>
                    </div>

                    <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 border-2 border-amber-200/50 text-center">
                      <div 
                        className="text-3xl font-black text-amber-600 mb-1"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        #12
                      </div>
                      <div 
                        className="text-xs text-amber-700 font-semibold uppercase tracking-wide"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Xếp hạng
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Strip */}
              <div className="h-2 bg-linear-to-r from-green-400 via-emerald-400 to-teal-400"></div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-10 fade-in-up" style={{ animationDelay: '0.15s' }}>
            <RewardSummary />
          </div>

          {/* Main Content Grid */}
          <div className="mt-10 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* History Section - 2 columns */}
              <div className="xl:col-span-2 space-y-6">
                <RewardHistoryTable />
              </div>

              {/* Ranking Section - 1 column */}
              <div className="xl:col-span-1">
                <RankingTable />
              </div>
            </div>
          </div>

          {/* Motivational Footer */}
          <div className="mt-10 fade-in-up text-center" style={{ animationDelay: '0.45s' }}>
            <div className="inline-flex flex-col items-center gap-3 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-2xl border-2 border-green-200/50 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span 
                  className="text-lg font-bold text-green-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Tiếp tục phấn đấu để đạt mốc 500 điểm!
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <span 
                  className="text-sm text-green-600 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Mỗi điểm là một đóng góp cho hành tinh xanh
                </span>
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Rewards;