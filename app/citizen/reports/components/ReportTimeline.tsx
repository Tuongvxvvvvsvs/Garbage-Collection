"use client";

import React from "react";
import { CheckCircle, Clock, User, Package, Check } from "lucide-react";

interface ReportTimelineProps {
  currentStep: number; // 0: Pending, 1: Accepted, 2: Assigned, 3: Collected
}

const steps = [
  {
    label: "Chờ xử lý",
    description: "Báo cáo đã được gửi và đang chờ xác nhận",
    icon: Clock,
    date: "15/01/2024 09:30"
  },
  {
    label: "Đã chấp nhận",
    description: "Báo cáo đã được xác nhận và chấp thuận",
    icon: CheckCircle,
    date: "15/01/2024 10:15"
  },
  {
    label: "Đã phân công",
    description: "Đã giao nhiệm vụ cho nhân viên thu gom",
    icon: User,
    date: "15/01/2024 14:20"
  },
  {
    label: "Đã thu gom",
    description: "Hoàn tất việc thu gom và xử lý",
    icon: Package,
    date: "16/01/2024 08:45"
  }
];

const ReportTimeline: React.FC<ReportTimelineProps> = ({ currentStep }) => {
  return (
    <div className="relative">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800&family=Lato:wght@400;700;900&display=swap");

        * {
          font-family: "Lato", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Quicksand", -apple-system, sans-serif;
        }

        @keyframes pulse-ring {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes check-bounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes line-grow {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .check-bounce {
          animation: check-bounce 0.4s ease-out;
        }

        .line-grow {
          animation: line-grow 0.5s ease-out forwards;
        }

        .timeline-step:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-container {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-8 slide-in-left">
        Tiến trình xử lý
      </h3>

      <div className="relative">
        {/* Connecting Line Background */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200" />

        {/* Active Line Progress */}
        <div
          className="absolute left-8 top-8 w-0.5 bg-linear-to-b from-emerald-500 to-green-600 line-grow"
          style={{
            height: `${(currentStep / (steps.length - 1)) * 100}%`,
            maxHeight: "calc(100% - 4rem)"
          }}
        />

        {/* Timeline Steps */}
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            const isPending = idx > currentStep;

            return (
              <div
                key={idx}
                className="timeline-step relative flex items-start gap-6 slide-in-left"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="relative z-10 shrink-0">
                  {/* Pulse Ring for Current Step */}
                  {isCurrent && (
                    <div className="absolute inset-0 pulse-ring">
                      <div className="w-16 h-16 rounded-2xl border-2 border-amber-500" />
                    </div>
                  )}

                  {/* Main Icon */}
                  <div
                    className={`icon-container w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative ${
                      isCompleted
                        ? "bg-linear-to-br from-emerald-500 to-green-600"
                        : isCurrent
                        ? "bg-linear-to-br from-amber-400 to-orange-500"
                        : "bg-gray-200"
                    }`}
                  >
                    {isCompleted ? (
                      <Check
                        className="w-8 h-8 text-white check-bounce"
                        strokeWidth={3}
                      />
                    ) : (
                      <Icon
                        className={`w-7 h-7 ${
                          isCurrent ? "text-white" : "text-gray-400"
                        }`}
                        strokeWidth={2}
                      />
                    )}

                    {/* Number Badge for Pending Steps */}
                    {isPending && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500">
                          {idx + 1}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4
                      className={`text-lg font-bold ${
                        isCompleted
                          ? "text-emerald-700"
                          : isCurrent
                          ? "text-amber-700"
                          : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </h4>

                    {/* Date Badge */}
                    {(isCompleted || isCurrent) && (
                      <div
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {step.date}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isCompleted || isCurrent
                        ? "text-gray-600 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Status Badge */}
                  <div className="mt-3">
                    {isCompleted && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold border-2 border-emerald-200">
                        <Check className="w-3 h-3" />
                        Hoàn thành
                      </div>
                    )}
                    {isCurrent && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-xl text-xs font-bold border-2 border-amber-200">
                        <Clock
                          className="w-3 h-3 animate-spin"
                          strokeWidth={2.5}
                        />
                        Đang xử lý
                      </div>
                    )}
                    {isPending && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-500 rounded-xl text-xs font-bold border-2 border-gray-200">
                        Chờ xử lý
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <div
          className="mt-8 p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 slide-in-left"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-1">
                Tiến độ hoàn thành
              </p>
              <p className="text-3xl font-black text-gray-900">
                {Math.round((currentStep / (steps.length - 1)) * 100)}%
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-black text-white">
                  {currentStep}/{steps.length - 1}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTimeline;
