"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Navigation, Crosshair, MapPinned } from "lucide-react";

const LocationPicker: React.FC = () => {
  const [location, setLocation] = useState("");
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [coordinates, setCoordinates] = useState<{lat: number, lng: number} | null>(null);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsGettingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(5);
          const lng = position.coords.longitude.toFixed(5);
          setLocation(`${lat}, ${lng}`);
          setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
          setIsGettingLocation(false);
        },
        (error) => {
          alert("Unable to get location. Please check permissions.");
          setIsGettingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="space-y-4">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, sans-serif;
        }
        
        h1, h2, h3, h4, label {
          font-family: 'Outfit', -apple-system, sans-serif;
        }

        @keyframes pulse-location {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pulse-location {
          animation: pulse-location 2s ease-in-out infinite;
        }

        .spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .map-grid {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .location-input:focus {
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      {/* Label */}
      <label className="block text-base font-bold text-gray-900">
        Vị trí địa điểm
      </label>

      {/* Main Location Card */}
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
        {/* Decorative Map Background */}
        <div className="absolute inset-0 map-grid opacity-30 pointer-events-none" />
        
        {/* Floating Map Pin Decoration */}
        <div className="absolute top-4 right-4 opacity-10">
          <MapPinned className="w-24 h-24 text-blue-500" />
        </div>

        <div className="relative z-10 space-y-4">
          {/* Location Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <MapPin className="w-5 h-5 text-blue-500 bounce-gentle" />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Nhập địa chỉ hoặc tọa độ..."
              className="location-input w-full pl-14 pr-4 py-4 bg-white/80 border-2 border-blue-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Coordinates Display */}
          {coordinates && (
            <div className="fade-in-up bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center pulse-location">
                  <Crosshair className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Tọa độ hiện tại
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm font-bold text-gray-900">
                      Lat: {coordinates.lat.toFixed(5)}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm font-bold text-gray-900">
                      Lng: {coordinates.lng.toFixed(5)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleUseCurrentLocation}
              disabled={isGettingLocation}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-4 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isGettingLocation ? (
                <>
                  <Navigation className="w-5 h-5 spin-slow" />
                  <span>Đang lấy vị trí...</span>
                </>
              ) : (
                <>
                  <Navigation className="w-5 h-5" />
                  <span>Dùng vị trí hiện tại</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setLocation("");
                setCoordinates(null);
              }}
              className="px-5 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all hover:shadow-md"
            >
              Xóa
            </button>
          </div>

          {/* Visual Map Indicator */}
          <div className="relative h-32 bg-linear-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-2xl overflow-hidden border-2 border-blue-200">
            {/* Grid Pattern */}
            <div className="absolute inset-0 map-grid opacity-50" />
            
            {/* Animated Center Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {coordinates ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 pulse-location" />
                  <MapPin className="relative w-12 h-12 text-blue-600 drop-shadow-lg bounce-gentle" fill="currentColor" />
                </div>
              ) : (
                <div className="text-center">
                  <Crosshair className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-500">Chọn vị trí</p>
                </div>
              )}
            </div>

            {/* Decorative Circles */}
            {coordinates && (
              <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blue-300 rounded-full pulse-location" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-200 rounded-full pulse-location" />
              </>
            )}
          </div>

          {/* Helper Text */}
          <div className="flex items-start gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
            <p>
              Nhập địa chỉ cụ thể hoặc sử dụng vị trí GPS hiện tại để đánh dấu chính xác địa điểm của bạn
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all text-sm font-semibold text-gray-700">
          <MapPin className="w-4 h-4" />
          Chọn từ bản đồ
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all text-sm font-semibold text-gray-700">
          <Navigation className="w-4 h-4" />
          Vị trí đã lưu
        </button>
      </div>
    </div>
  );
};

export default LocationPicker;