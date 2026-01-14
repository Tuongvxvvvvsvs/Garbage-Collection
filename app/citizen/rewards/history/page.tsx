"use client";

import React from "react";

import { TreePine, Sparkles, Award, History as HistoryIcon } from "lucide-react";
import RewardSummary from "../components/RewardSummary";
import RewardHistoryTable from "../components/RewardHistoryTable";
import RankingTable from "../components/RankingTable";

const History = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700;800&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .float-leaf {
          animation: float 6s ease-in-out infinite;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #166534 0%, #10b981 50%, #166534 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating leaves */}
        <div className="absolute top-20 left-10 opacity-10 float-leaf" style={{ animationDelay: '0s' }}>
          <TreePine className="w-24 h-24 text-green-600" />
        </div>
        <div className="absolute top-40 right-20 opacity-10 float-leaf" style={{ animationDelay: '2s' }}>
          <TreePine className="w-32 h-32 text-emerald-600" />
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-10 float-leaf" style={{ animationDelay: '4s' }}>
          <TreePine className="w-20 h-20 text-teal-600" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Section */}
          <div className="fade-in">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden">
              {/* Header decorative pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <pattern id="leaf-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20 5 Q30 15 30 25 Q30 35 20 45 Q10 35 10 25 Q10 15 20 5" fill="currentColor" className="text-green-500" opacity="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#leaf-pattern)"/>
                </svg>
              </div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/30 float-leaf">
                        <HistoryIcon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h1 
                        className="text-4xl md:text-5xl font-black shimmer-text"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Hành Trình Môi Trường
                      </h1>
                      <p 
                        className="text-green-700 mt-1 text-base md:text-lg font-semibold"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Theo dõi mọi đóng góp của bạn cho hành tinh xanh 🌍
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats Bar */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-2 bg-linear-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200/50">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span 
                        className="text-sm font-bold text-green-700"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Đang hoạt động
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-linear-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-full border border-amber-200/50">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span 
                        className="text-sm font-bold text-amber-700"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Chiến binh xanh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Date Display */}
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200/50 min-w-50 text-center">
                  <div 
                    className="text-sm text-green-600 font-semibold mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Hôm nay
                  </div>
                  <div 
                    className="text-2xl font-black text-green-700"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </div>
                  <div className="mt-3 flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <RewardSummary />
          </div>

          {/* Main Content Grid */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* History Table - Takes 2 columns on large screens */}
              <div className="xl:col-span-2">
                <RewardHistoryTable />
              </div>

              {/* Ranking Table - Takes 1 column */}
              <div className="xl:col-span-1">
                <RankingTable />
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="fade-in text-center" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-full border-2 border-green-200/50 shadow-lg">
              <TreePine className="w-6 h-6 text-green-600" />
              <span 
                className="text-lg font-bold text-green-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Cảm ơn bạn đã đồng hành cùng môi trường!
              </span>
              <span className="text-2xl">🌱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;