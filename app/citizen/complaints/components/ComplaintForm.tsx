import React from "react";
import {
  MapPin,
  Camera,
  X,
  AlertCircle,
  CheckCircle,
  Trash2,
  Recycle,
  Construction,
  Leaf,
  Package,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

const ComplaintForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    category: "",
    description: "",
    location: "",
    urgency: "medium"
  });

  const [images, setImages] = React.useState<string[]>([]);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const categories = [
    {
      id: "household",
      label: "Household Waste",
      icon: Trash2,
      color: "emerald"
    },
    { id: "recyclable", label: "Recyclables", icon: Recycle, color: "blue" },
    {
      id: "construction",
      label: "Construction Debris",
      icon: Construction,
      color: "orange"
    },
    { id: "organic", label: "Organic Waste", icon: Leaf, color: "green" },
    { id: "bulk", label: "Bulk Items", icon: Package, color: "purple" }
  ];

  const urgencyLevels = [
    { value: "low", label: "Low", color: "gray", desc: "Can wait a few days" },
    {
      value: "medium",
      label: "Medium",
      color: "yellow",
      desc: "Should be collected soon"
    },
    {
      value: "high",
      label: "High",
      color: "red",
      desc: "Needs immediate attention"
    }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.category ||
      !formData.description ||
      !formData.location
    ) {
      alert("Please fill in all required fields!");
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        title: "",
        category: "",
        description: "",
        location: "",
        urgency: "medium"
      });
      setImages([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-4">
            <AlertCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-700">
              Report Waste
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Submit a Complaint
          </h1>
          <p className="text-lg text-gray-600">
            Help keep our community clean by reporting waste issues
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-linear-to-r from-emerald-50 to-teal-50 p-6 border-b">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  1
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Details
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  2
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Location
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  3
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Photos
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Complaint Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="e.g., Large pile of trash on sidewalk"
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Waste Category <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setFormData({ ...formData, category: cat.id })
                    }
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      formData.category === cat.id
                        ? "bg-emerald-50 border-emerald-500 shadow-lg scale-105"
                        : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <cat.icon
                      className={`w-8 h-8 mx-auto mb-2 ${
                        formData.category === cat.id
                          ? "text-emerald-600"
                          : "text-gray-400"
                      }`}
                    />
                    <p
                      className={`text-sm font-semibold ${
                        formData.category === cat.id
                          ? "text-emerald-900"
                          : "text-gray-700"
                      }`}
                    >
                      {cat.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe the waste issue in detail. Include any relevant information that would help our collectors..."
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="Enter street address or landmark"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
              <button className="mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Use my current location
              </button>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {urgencyLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() =>
                      setFormData({ ...formData, urgency: level.value })
                    }
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      formData.urgency === level.value
                        ? "bg-yellow-50 border-yellow-500 shadow-lg"
                        : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                        level.value === "low"
                          ? "bg-gray-400"
                          : level.value === "medium"
                          ? "bg-yellow-400"
                          : "bg-red-500"
                      }`}
                    />
                    <p
                      className={`font-bold text-sm mb-1 ${
                        formData.urgency === level.value
                          ? "text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {level.label}
                    </p>
                    <p className="text-xs text-gray-500">{level.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Upload Photos (Optional)
              </label>

              {/* Upload Button */}
              <div className="mb-4">
                <label className="cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-center">
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Click to upload photos
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Image Preview */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <Image
                        width={300}
                        height={300}
                        src={img}
                        alt={`Upload ${idx + 1}`}
                        className="w-full h-32 object-cover rounded-2xl border-2 border-gray-200"
                      />
                      <button
                        onClick={() => removeImage(idx)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-bold py-5 rounded-2xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Submit Complaint
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                By submitting, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
              <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 text-center mb-3">
                Complaint Submitted!
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Thank you for helping keep our community clean. We will verify
                your report and dispatch a collector soon.
              </p>
              <div className="bg-emerald-50 rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold text-emerald-900">
                  You earned +50 points! 🎉
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintForm;
