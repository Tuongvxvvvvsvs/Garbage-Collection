"use client";

import React, { useState } from "react";
import WasteTypeSelect from "./components/WasteTypeSelect";
import LocationPicker from "./components/LocationPicker";
import ImageUploader from "./components/ImageUploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReportCitizen: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Vui lòng điền đủ tiêu đề và mô tả!");
      return;
    }
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
    // Ở đây bạn có thể gọi API để gửi dữ liệu
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 p-6">
        <div className="">
          <h1 className="text-3xl font-black text-gray-900 text-center">
            Tạo đơn khiếu nại
          </h1>

          {/* Tiêu đề */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Tiêu đề
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ví dụ: Đống rác lớn trên vỉa hè"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Loại rác */}
          <WasteTypeSelect />

          {/* Mô tả */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Mô tả
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả chi tiết vấn đề rác thải..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          {/* Vị trí */}
          <LocationPicker />

          {/* Upload ảnh */}
          <ImageUploader />

          {/* Nút submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            Gửi báo cáo
          </button>
        </div>

        {/* Success Popup */}
        {submitSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md text-center shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Gửi thành công!
              </h3>
              <p className="text-gray-600">
                Cảm ơn bạn đã giúp giữ gìn môi trường sạch đẹp 🌱
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReportCitizen;
