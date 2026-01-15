"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Recycle,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const RequestById: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-emerald-800">
          Chi tiết yêu cầu thu gom
        </h1>
        <p className="text-gray-600 mt-1">
          Thông tin chi tiết báo cáo & trạng thái xử lý
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Request info */}
          <Card>
            <CardHeader title="Thông tin yêu cầu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoItem
                icon={<Recycle />}
                label="Loại rác"
                value="Rác tái chế"
              />
              <InfoItem
                icon={<AlertTriangle />}
                label="Mức độ"
                value="Trung bình"
              />
              <InfoItem
                icon={<Clock />}
                label="Thời gian tạo"
                value="14:32 - 12/01/2026"
              />
              <InfoItem
                icon={<MapPin />}
                label="Khu vực"
                value="Quận 7, TP.HCM"
              />
            </div>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader title="Mô tả chi tiết" />
            <p className="text-gray-700 leading-relaxed">
              Có một lượng lớn chai nhựa và giấy carton cần được thu gom.
              Rác đã được phân loại sẵn, để trước cổng khu dân cư.
            </p>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader title="Hình ảnh đính kèm" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <Card>
            <CardHeader title="Trạng thái" />
            <StatusBadge status="processing" />
          </Card>

          {/* Reporter */}
          <Card>
            <CardHeader title="Người báo cáo" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <p className="font-bold text-gray-800">Nguyễn Văn A</p>
                <p className="text-sm text-gray-500">Citizen</p>
              </div>
            </div>
          </Card>

          {/* Collector */}
          <Card>
            <CardHeader title="Collector phụ trách" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                C
              </div>
              <div>
                <p className="font-bold text-gray-800">Trần Văn B</p>
                <p className="text-sm text-gray-500">Xe tải nhỏ</p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader title="Hành động" />
            <div className="space-y-3">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition">
                Đánh dấu hoàn thành
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition">
                Báo cáo sự cố
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestById;

/* ---------------- Sub Components ---------------- */

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-6">
    {children}
  </div>
);

const CardHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-xl font-black text-gray-800 mb-4">{title}</h2>
);

const InfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const StatusBadge: React.FC<{ status: "pending" | "processing" | "done" }> = ({
  status
}) => {
  const map = {
    pending: {
      label: "Đang chờ",
      className: "bg-amber-100 text-amber-700"
    },
    processing: {
      label: "Đang xử lý",
      className: "bg-blue-100 text-blue-700"
    },
    done: {
      label: "Hoàn thành",
      className: "bg-emerald-100 text-emerald-700"
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${map[status].className}`}
    >
      {status === "done" ? (
        <CheckCircle className="w-4 h-4" />
      ) : (
        <Clock className="w-4 h-4" />
      )}
      {map[status].label}
    </div>
  );
};
