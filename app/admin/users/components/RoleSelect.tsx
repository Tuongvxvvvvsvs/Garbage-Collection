"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  ShieldCheck,
  Truck,
  Building2,
  ChevronDown,
  Check,
  Sparkles
} from "lucide-react";

export type RoleType = "ADMIN" | "ENTERPRISE" | "COLLECTOR" | "CITIZEN";

interface RoleSelectProps {
  value?: RoleType;
  onChange?: (role: RoleType) => void;
  label?: string;
}

const roles = [
  {
    value: "ADMIN" as RoleType,
    label: "Admin",
    description: "Quản trị toàn hệ thống",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "from-red-500 to-rose-600",
    bgGlow: "from-red-400/30 to-rose-400/30"
  },
  {
    value: "ENTERPRISE" as RoleType,
    label: "Enterprise",
    description: "Quản lý doanh nghiệp",
    icon: <Building2 className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-600",
    bgGlow: "from-indigo-400/30 to-purple-400/30"
  },
  {
    value: "COLLECTOR" as RoleType,
    label: "Collector",
    description: "Nhân viên thu gom",
    icon: <Truck className="w-5 h-5" />,
    color: "from-emerald-500 to-green-600",
    bgGlow: "from-emerald-400/30 to-green-400/30"
  },
  {
    value: "CITIZEN" as RoleType,
    label: "Citizen",
    description: "Người dân",
    icon: <User className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-600",
    bgGlow: "from-blue-400/30 to-cyan-400/30"
  }
];

const RoleSelect: React.FC<RoleSelectProps> = ({
  value,
  onChange,
  label = "Vai trò"
}) => {
  const [open, setOpen] = useState(false);
  const [hoveredRole, setHoveredRole] = useState<RoleType | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedRole = roles.find((r) => r.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Label */}
      {label && (
        <label className="text-sm font-black text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          {label}
        </label>
      )}

      {/* Selected Button */}
      <div className="group relative">
        {/* Glow effect on hover */}
        {selectedRole && (
          <div
            className={`absolute inset-0 bg-linear-to-br ${selectedRole.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`relative w-full flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border-2 bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${
            open
              ? "border-blue-400 shadow-2xl scale-[1.02]"
              : "border-gray-200 hover:border-blue-300 hover:shadow-xl group-hover:scale-[1.01]"
          }`}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-xl blur-md opacity-30 ${
                  selectedRole
                    ? `bg-linear-to-br ${selectedRole.color}`
                    : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                  selectedRole
                    ? `bg-linear-to-br ${selectedRole.color}`
                    : "bg-linear-to-br from-gray-400 to-gray-500"
                }`}
              >
                {selectedRole?.icon ?? <User className="w-5 h-5" />}
              </div>
            </div>

            {/* Text */}
            <div className="text-left flex-1">
              <p className="font-black text-gray-900 text-lg">
                {selectedRole?.label ?? "Chọn vai trò"}
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                {selectedRole?.description ?? "Phân quyền người dùng"}
              </p>
            </div>
          </div>

          {/* Chevron */}
          <div
            className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ${
              open ? "bg-blue-100" : ""
            }`}
          >
            <ChevronDown
              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                open ? "rotate-180 text-blue-600" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-50 mt-3 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/50 overflow-hidden animate-slide-down">
          <div className="p-2 space-y-2">
            {roles.map((role, index) => (
              <div
                key={role.value}
                className="group/item relative"
                onMouseEnter={() => setHoveredRole(role.value)}
                onMouseLeave={() => setHoveredRole(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                {hoveredRole === role.value && (
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${role.bgGlow} rounded-xl blur-lg opacity-100 transition-opacity duration-300`}
                  ></div>
                )}

                <button
                  onClick={() => {
                    onChange?.(role.value);
                    setOpen(false);
                  }}
                  className={`relative w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                    value === role.value
                      ? "bg-linear-to-r from-blue-50 to-indigo-50 border-2 border-blue-200"
                      : "hover:bg-gray-50 border-2 border-transparent"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-xl blur-md opacity-30 bg-linear-to-br ${role.color}`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500 bg-linear-to-br ${role.color}`}
                    >
                      {role.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <p
                      className={`font-black text-lg transition-colors ${
                        value === role.value ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {role.label}
                    </p>
                    <p
                      className={`text-sm font-semibold transition-colors ${
                        value === role.value ? "text-blue-700" : "text-gray-600"
                      }`}
                    >
                      {role.description}
                    </p>
                  </div>

                  {/* Check Mark */}
                  {value === role.value && (
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg animate-scale-in">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="px-4 py-3 bg-linear-to-r from-blue-50 to-indigo-50 border-t-2 border-blue-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <p className="text-xs font-bold text-blue-900">
                Chọn vai trò phù hợp để phân quyền
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        @keyframes scale-in {
          from {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default RoleSelect;
