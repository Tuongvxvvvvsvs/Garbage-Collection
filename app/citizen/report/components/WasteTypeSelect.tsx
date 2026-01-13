import React, { useState } from "react";
import {
  Trash2,
  Recycle,
  Construction,
  Leaf,
  Package,
  Check
} from "lucide-react";

type WasteCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  gradient: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
};

const categories: WasteCategory[] = [
  {
    id: "household",
    label: "Rác sinh hoạt",
    icon: Trash2,
    gradient: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    textColor: "text-red-900",
    iconColor: "text-red-600"
  },
  {
    id: "recyclable",
    label: "Tái chế",
    icon: Recycle,
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
    textColor: "text-blue-900",
    iconColor: "text-blue-600"
  },
  {
    id: "construction",
    label: "Xây dựng",
    icon: Construction,
    gradient: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    textColor: "text-orange-900",
    iconColor: "text-orange-600"
  },
  {
    id: "organic",
    label: "Rác hữu cơ",
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-900",
    iconColor: "text-emerald-600"
  },
  {
    id: "bulk",
    label: "Vật thể lớn",
    icon: Package,
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-500",
    textColor: "text-purple-900",
    iconColor: "text-purple-600"
  }
];

const WasteTypeSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="space-y-5">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Work+Sans:wght@400;500;600;700;800&display=swap");

        * {
          font-family: "Work Sans", -apple-system, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        label {
          font-family: "Poppins", -apple-system, sans-serif;
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes check-pop {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
          }
          100% {
            transform: scale(1) rotate(-45deg);
          }
        }

        @keyframes pulse-ring {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
        }

        .category-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-card:hover {
          transform: translateY(-8px);
        }

        .category-card.selected {
          animation: bounce-in 0.4s ease-out;
        }

        .check-icon {
          animation: check-pop 0.4s ease-out;
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .slide-up-fade {
          animation: slide-up-fade 0.6s ease-out forwards;
        }

        .gradient-border {
          position: relative;
          background: white;
          border: 3px solid transparent;
          background-clip: padding-box;
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(135deg, currentColor, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gradient-border:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* Header */}
      <div className="slide-up-fade">
        <label className="block text-lg font-black text-gray-900 mb-2">
          Chọn loại rác
        </label>
        <p className="text-sm text-gray-600 font-medium">
          Chọn danh mục phù hợp với loại rác bạn muốn báo cáo
        </p>
      </div>

      {/* Selected Info */}
      {selected && (
        <div className="slide-up-fade bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                Đã chọn
              </p>
              <p className="text-sm font-black text-gray-900">
                {categories.find((c) => c.id === selected)?.label}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const isSelected = selected === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`category-card relative p-6 rounded-3xl border-3 transition-all flex flex-col items-center justify-center gap-3 ${
                isSelected
                  ? `${cat.bgColor} ${cat.borderColor} shadow-2xl scale-105`
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Selection Ring */}
              {isSelected && (
                <div
                  className={`absolute inset-0 rounded-3xl ${cat.borderColor} border-3 pulse-ring`}
                />
              )}

              {/* Icon Container */}
              <div className="relative">
                {isSelected && (
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${cat.gradient} rounded-2xl blur-xl opacity-50`}
                  />
                )}
                <div
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                    isSelected
                      ? `bg-linear-to-br ${cat.gradient}`
                      : "bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-all ${
                      isSelected ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>

              {/* Label */}
              <div className="text-center">
                <p
                  className={`text-sm font-bold transition-colors ${
                    isSelected ? cat.textColor : "text-gray-700"
                  }`}
                >
                  {cat.label}
                </p>
              </div>

              {/* Check Badge */}
              {isSelected && (
                <div
                  className={`absolute top-3 right-3 w-7 h-7 bg-linear-to-br ${cat.gradient} rounded-full flex items-center justify-center shadow-lg check-icon`}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}

              {/* Hover Indicator */}
              {!isSelected && (
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/0 to-purple-500/0 hover:from-blue-500/5 hover:to-purple-500/5 transition-all" />
              )}
            </button>
          );
        })}
      </div>

      {/* Helper Text */}
      <div
        className="flex items-start gap-2 text-xs text-gray-500 slide-up-fade"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
        <p>
          Chọn đúng loại rác giúp chúng tôi xử lý hiệu quả và bảo vệ môi trường
          tốt hơn
        </p>
      </div>
    </div>
  );
};

export default WasteTypeSelect;
