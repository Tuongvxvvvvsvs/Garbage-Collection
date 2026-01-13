"use client";
import React from "react";
import { Send, X, Paperclip, AlertCircle, CheckCircle2 } from "lucide-react";

const Create = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    customerName: "",
    customerEmail: "",
    customerPhone: ""
  });

  const [files, setFiles] = React.useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

  const categories = [
    "Sản phẩm lỗi",
    "Giao hàng chậm",
    "Sai mô tả",
    "Dịch vụ khách hàng",
    "Khác"
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          title: "",
          description: "",
          category: "",
          priority: "medium",
          customerName: "",
          customerEmail: "",
          customerPhone: ""
        });
        setFiles([]);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Tạo khiếu nại mới
          </h1>
          <p className="text-gray-600">
            Điền thông tin chi tiết để chúng tôi có thể hỗ trợ bạn tốt nhất
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Gửi thành công!</h3>
              <p className="text-sm text-green-600">
                Khiếu nại của bạn đã được tiếp nhận.
              </p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Customer Information Section */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                1
              </div>
              Thông tin khách hàng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  placeholder="0123456789"
                />
              </div>
            </div>
          </div>

          {/* Complaint Details Section */}
          <div className="p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                2
              </div>
              Chi tiết khiếu nại
            </h2>

            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Tiêu đề *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Mô tả ngắn gọn vấn đề của bạn"
              />
            </div>

            {/* Category and Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Danh mục *
                </label>
                <select
                  aria-label="select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mức độ ưu tiên *
                </label>
                <div className="flex gap-2">
                  {[
                    {
                      value: "low",
                      label: "Thấp",
                      bgActive: "bg-blue-600",
                      bgInactive: "bg-blue-50",
                      textActive: "text-white",
                      textInactive: "text-blue-600"
                    },
                    {
                      value: "medium",
                      label: "Trung bình",
                      bgActive: "bg-yellow-600",
                      bgInactive: "bg-yellow-50",
                      textActive: "text-white",
                      textInactive: "text-yellow-600"
                    },
                    {
                      value: "high",
                      label: "Cao",
                      bgActive: "bg-red-600",
                      bgInactive: "bg-red-50",
                      textActive: "text-white",
                      textInactive: "text-red-600"
                    }
                  ].map((priority) => (
                    <button
                      key={priority.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          priority: priority.value
                        }))
                      }
                      className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                        formData.priority === priority.value
                          ? `${priority.bgActive} ${priority.textActive} shadow-lg scale-105`
                          : `${priority.bgInactive} ${priority.textInactive} hover:scale-105`
                      }`}
                    >
                      {priority.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mô tả chi tiết *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Mô tả chi tiết vấn đề bạn gặp phải..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Đính kèm tệp
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  accept="image/*,.pdf,.doc,.docx"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Paperclip className="w-10 h-10 text-gray-400 mb-2" />
                  <span className="text-gray-600 font-medium">
                    Nhấp để chọn tệp
                  </span>
                  <span className="text-sm text-gray-400 mt-1">
                    PNG, JPG, PDF (tối đa 10MB)
                  </span>
                </label>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Paperclip className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">
                          {file.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Lưu ý</h4>
                  <p className="text-sm text-blue-700">
                    Chúng tôi sẽ xử lý khiếu nại của bạn trong vòng 24-48 giờ.
                    Vui lòng cung cấp thông tin chi tiết để được hỗ trợ nhanh
                    hơn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Gửi khiếu nại
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
