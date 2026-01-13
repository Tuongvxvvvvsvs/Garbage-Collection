"use client";

import React from "react";
import { Complaint } from "./types/Complaint";
import ComplaintItem from "./components/ComplaintItem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplaintForm from "./components/ComplaintForm";
import { Plus, X } from "lucide-react";

const Complaints: React.FC = () => {
  const [complaints, setComplaints] = React.useState<Complaint[]>([]);
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
  const [showCreateForm, setShowCreateForm] = React.useState(false);

  return (
    <>
      <Header />
      <div className="bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 p-8 min-h-screen">
        {/* Header + Button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Danh sách khiếu nại
          </h1>

          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            <Plus className="w-5 h-5" />
            Tạo đơn khiếu nại
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
          {complaints.map((complaint) => (
            <ComplaintItem
              key={complaint.id}
              complaint={complaint}
              showCustomer
              showActions
            />
          ))}
        </div>
      </div>

      <Footer />

      {/* ===== POPUP CREATE COMPLAINT ===== */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl">
            {/* Close button */}
            <button
              onClick={() => setShowCreateForm(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Form */}
            <ComplaintForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Complaints;
