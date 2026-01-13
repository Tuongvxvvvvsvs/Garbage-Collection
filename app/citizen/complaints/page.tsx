"use client";

import React from "react";
import { Complaint } from "./types/Complaint";
import ComplaintItem from "./components/ComplaintItem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const Complaints: React.FC = () => {
  const [complaints, setComplaints] = React.useState<Complaint[]>([]);
  const router = useRouter();
  React.useEffect(() => {
    // fake API
    setComplaints([
      {
        id: "1",
        title: "Rác không được thu gom",
        description: "Rác tồn đọng 3 ngày tại Lê Lợi",
        createdAt: "2026-01-10",
        status: "pending",
        priority: "high"
      },
      {
        id: "2",
        title: "Thu gom trễ",
        description: "Xe rác đến muộn hơn lịch",
        createdAt: "2026-01-08",
        status: "resolved",
        priority: "medium"
      }
    ]);
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Khiếu nại của tôi
          </h1>
          <p className="text-sm text-gray-500">
            Theo dõi và quản lý các khiếu nại bạn đã gửi
          </p>
        </div>
        <button
          onClick={() => router.push("/citizen/complaints/create")}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition"
        >
          + Tạo khiếu nại
        </button>
        {/* List */}
        <div className="space-y-4">
          {complaints.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              Không có khiếu nại nào
            </div>
          ) : (
            complaints.map((item) => (
              <ComplaintItem
                key={item.id}
                complaint={item}
                showCustomer={false}
                showActions={false}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Complaints;
