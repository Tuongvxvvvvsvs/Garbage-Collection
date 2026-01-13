"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface ReportCardProps {
  title: string;
  category: string;
  location: string;
  status: "Đang xử lý" | "Hoàn thành" | "Hủy";
  thumbnail: string;
  date: string;
  priority: "high" | "medium" | "low";
}

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  category,
  location,
  status,
  thumbnail = "/demo1.jpg",
  date,
  priority = "Trung bình"
}) => {
  const statusColors = {
    "Đang xử lý": "bg-yellow-100 text-yellow-800",
    "Hoàn thành": "bg-green-100 text-green-800",
    Hủy: "bg-red-100 text-red-800"
  };

  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800"
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-xl transition cursor-pointer">
      {/* Thumbnail */}
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-gray-200">
        <Image
          src={thumbnail}
          alt={title}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between gap-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-base md:text-lg truncate">
            {title}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>

        <p className="text-gray-600 text-sm">
          <strong>Loại rác:</strong> {category}
        </p>

        <p className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 text-blue-500 mr-1" />
          {location}
        </p>

        {/* Date & Priority */}
        <div className="flex items-center justify-between mt-1 text-sm">
          {date && <span className="text-gray-400">{date}</span>}
          {priority && (
            <span
              className={`px-2 py-0.5 rounded-full font-semibold text-xs ${
                priorityColors[priority as "high" | "medium" | "low"]
              }`}
            >
              {priority}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
