"use client";

import React, { useState, useRef } from "react";
import { Camera, X, Image as ImageIcon, Upload, Check } from "lucide-react";
import Image from "next/image";

const ImageUploader: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;

    const newImages: string[] = [];
    Array.from(files).forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} quá lớn. Kích thước tối đa 10MB`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result as string);
        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageUpload(e.target.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleImageUpload(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap");

        * {
          font-family: "Nunito", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        label {
          font-family: "Archivo", -apple-system, sans-serif;
        }

        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes check-mark {
          0% {
            transform: scale(0) rotate(45deg);
          }
          50% {
            transform: scale(1.2) rotate(45deg);
          }
          100% {
            transform: scale(1) rotate(45deg);
          }
        }

        .float-up {
          animation: float-up 0.5s ease-out forwards;
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .image-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .check-mark {
          animation: check-mark 0.3s ease-out;
        }

        .upload-zone {
          transition: all 0.3s ease;
        }

        .upload-zone.dragging {
          transform: scale(1.02);
          border-color: rgb(59, 130, 246);
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 51, 234, 0.1) 100%
          );
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-gray-900">Upload Hình ảnh</h3>
          <p className="text-sm text-gray-500 font-medium mt-1">
            Thêm hình ảnh minh họa cho báo cáo của bạn
          </p>
        </div>
        {images.length > 0 && (
          <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold float-up">
            <ImageIcon className="w-4 h-4" />
            <span>{images.length} ảnh</span>
          </div>
        )}
      </div>

      {/* Upload Zone */}
      <div
        className={`upload-zone border-3 border-dashed rounded-3xl overflow-hidden relative ${
          isDragging ? "dragging pulse-glow border-blue-500" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50" />

        {/* Shimmer Effect on Drag */}
        {isDragging && (
          <div className="absolute inset-0 shimmer-effect pointer-events-none" />
        )}

        <label className="relative cursor-pointer block">
          <div className="relative z-10 p-12 text-center">
            {/* Icon with Animation */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="relative w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto transform hover:rotate-12 transition-transform">
                {isDragging ? (
                  <Upload className="w-10 h-10 text-white animate-bounce" />
                ) : (
                  <Camera className="w-10 h-10 text-white" />
                )}
              </div>
            </div>

            {/* Text */}
            <h4 className="text-lg font-black text-gray-900 mb-2">
              {isDragging ? "Thả ảnh vào đây!" : "Kéo thả hoặc nhấp để tải ảnh"}
            </h4>
            <p className="text-sm text-gray-600 font-semibold mb-4">
              Hỗ trợ: PNG, JPG, JPEG, GIF • Tối đa 10MB/ảnh
            </p>

            {/* Features */}
            <div className="flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2 text-gray-500">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold">Upload nhiều ảnh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold">Xem trước nhanh</span>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Image Gallery Grid */}
      {images.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-gray-900">
              Ảnh đã tải lên ({images.length})
            </h4>
            <button
              onClick={() => setImages([])}
              className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              Xóa tất cả
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="image-card relative group float-up">
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 border-2 border-gray-200">
                  <Image
                    width={300}
                    height={300}
                    src={img}
                    alt={`Upload ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Image Number Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center font-black text-sm text-gray-900 shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeImage(idx)}
                    className="absolute top-3 right-3 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Success Check Mark */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white check-mark" />
                  </div>
                </div>

                {/* Image Info */}
                <div className="mt-2 px-1">
                  <p className="text-xs font-semibold text-gray-500 truncate">
                    Ảnh {idx + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State Message */}
      {images.length === 0 && (
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-600">
            <ImageIcon className="w-4 h-4" />
            Chưa có ảnh nào được tải lên
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {images.length > 0 && (
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-4 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Upload className="w-5 h-5" />
            Thêm ảnh khác
          </button>
          <button className="px-5 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:scale-105">
            Hoàn tất
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
