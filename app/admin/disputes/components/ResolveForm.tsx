"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  MessageSquare,
  FileText,
  AlertTriangle,
  Sparkles,
  Send,
  Info
} from "lucide-react";

export type ResolveStatus = "resolved" | "rejected";

interface ResolveFormProps {
  onSubmit?: (data: { status: ResolveStatus; note: string }) => void;
  onCancel?: () => void;
}

const ResolveForm: React.FC<ResolveFormProps> = ({ onSubmit, onCancel }) => {
  const [status, setStatus] = useState<ResolveStatus>("resolved");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    onSubmit?.({ status, note });
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Glow Effects */}
      <div
        className={`absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30 transition-all duration-500 ${
          status === "resolved"
            ? "bg-linear-to-br from-emerald-400 to-teal-500"
            : "bg-linear-to-br from-red-400 to-rose-500"
        }`}
      ></div>

      {/* Main Card */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] border-2 border-white/60 shadow-2xl p-8 md:p-10 space-y-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-gray-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-linear-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative flex items-start gap-5">
          <div className="relative group">
            <div
              className={`absolute inset-0 rounded-2xl blur-md opacity-50 transition-all duration-500 ${
                status === "resolved"
                  ? "bg-linear-to-br from-emerald-400 to-teal-500"
                  : "bg-linear-to-br from-red-400 to-rose-500"
              }`}
            ></div>
            <div
              className={`relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 ${
                status === "resolved"
                  ? "bg-linear-to-br from-emerald-500 to-teal-600"
                  : "bg-linear-to-br from-red-500 to-rose-600"
              }`}
            >
              <AlertTriangle className="w-8 h-8 text-white animate-bounce-subtle" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 mb-2">
              Xử lý khiếu nại
            </h2>
            <p className="text-gray-600 font-semibold flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-500" />
              Chọn kết quả xử lý và ghi chú cho người dùng
            </p>
          </div>
        </div>

        {/* Status Selection */}
        <div className="space-y-4">
          <label className="text-sm font-black text-gray-700 uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            Kết quả xử lý
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Resolved Option */}
            <button
              type="button"
              onClick={() => setStatus("resolved")}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                status === "resolved"
                  ? "border-emerald-400 shadow-2xl scale-105"
                  : "border-gray-200 hover:border-emerald-300 hover:shadow-lg"
              }`}
            >
              {/* Background gradient on selected */}
              {status === "resolved" && (
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-teal-50"></div>
              )}

              <div className="relative p-5 flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                    status === "resolved"
                      ? "bg-linear-to-br from-emerald-500 to-teal-600 scale-110 rotate-6"
                      : "bg-gray-200 group-hover:bg-emerald-100"
                  }`}
                >
                  <CheckCircle
                    className={`w-7 h-7 transition-colors duration-300 ${
                      status === "resolved" ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="text-left flex-1">
                  <p
                    className={`font-black text-lg mb-1 transition-colors ${
                      status === "resolved"
                        ? "text-emerald-700"
                        : "text-gray-900"
                    }`}
                  >
                    Chấp nhận
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      status === "resolved"
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }`}
                  >
                    Khiếu nại hợp lệ
                  </p>
                </div>

                {/* Check indicator */}
                {status === "resolved" && (
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center animate-scale-in">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>

            {/* Rejected Option */}
            <button
              type="button"
              onClick={() => setStatus("rejected")}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                status === "rejected"
                  ? "border-red-400 shadow-2xl scale-105"
                  : "border-gray-200 hover:border-red-300 hover:shadow-lg"
              }`}
            >
              {/* Background gradient on selected */}
              {status === "rejected" && (
                <div className="absolute inset-0 bg-linear-to-br from-red-50 to-rose-50"></div>
              )}

              <div className="relative p-5 flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                    status === "rejected"
                      ? "bg-linear-to-br from-red-500 to-rose-600 scale-110 rotate-6"
                      : "bg-gray-200 group-hover:bg-red-100"
                  }`}
                >
                  <XCircle
                    className={`w-7 h-7 transition-colors duration-300 ${
                      status === "rejected" ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="text-left flex-1">
                  <p
                    className={`font-black text-lg mb-1 transition-colors ${
                      status === "rejected" ? "text-red-700" : "text-gray-900"
                    }`}
                  >
                    Từ chối
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      status === "rejected" ? "text-red-600" : "text-gray-500"
                    }`}
                  >
                    Khiếu nại không hợp lệ
                  </p>
                </div>

                {/* Check indicator */}
                {status === "rejected" && (
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center animate-scale-in">
                    <XCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Note Section */}
        <div className="space-y-4">
          <label className="text-sm font-black text-gray-700 uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            Ghi chú xử lý
          </label>

          <div className="relative">
            <div className="absolute top-4 left-4 pointer-events-none">
              <MessageSquare className="w-5 h-5 text-gray-400" />
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={5}
              placeholder="Nhập lý do xử lý khiếu nại... (VD: Đã xác minh và hoàn tiền 50 điểm cho người dùng)"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none bg-white/70 backdrop-blur-sm font-semibold text-gray-900 placeholder:text-gray-400 transition-all duration-300 hover:border-gray-300"
            />
            <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-400">
              {note.length} ký tự
            </div>
          </div>

          {/* Info notice */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-linear-to-r from-blue-50 to-indigo-50 border-2 border-blue-100">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center shrink-0 shadow-md">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900 mb-1">
                Thông báo tự động
              </p>
              <p className="text-sm text-blue-700 font-semibold">
                Ghi chú sẽ được gửi email và thông báo cho người khiếu nại
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-4 pt-6 border-t-2 border-gray-100">
          <button
            onClick={onCancel}
            className="w-full md:w-auto px-8 py-4 rounded-2xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Hủy
          </button>

          <button
            onClick={handleSubmit}
            disabled={!note.trim()}
            className={`group w-full md:w-auto relative px-8 py-4 rounded-2xl font-black text-white shadow-2xl transition-all duration-300 overflow-hidden ${
              !note.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-3xl hover:-translate-y-1"
            }`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-300 ${
                !note.trim() ? "" : "group-hover:scale-110"
              } ${
                status === "resolved"
                  ? "bg-linear-to-r from-emerald-500 via-teal-500 to-green-500"
                  : "bg-linear-to-r from-red-500 via-rose-500 to-pink-500"
              }`}
            ></div>
            <div className="relative flex items-center justify-center gap-3">
              <Send
                className={`w-5 h-5 transition-transform duration-300 ${
                  !note.trim() ? "" : "group-hover:translate-x-1"
                }`}
              />
              <span>Xác nhận xử lý</span>
              {!note.trim() ? null : (
                <Sparkles className="w-4 h-4 animate-pulse" />
              )}
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default ResolveForm;
