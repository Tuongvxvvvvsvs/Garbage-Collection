import { AlertCircle, Clock, MapPin, TrendingUp } from "lucide-react";
import React from "react";
type Location = {
  lat: number;
  lng: number;
};
const MapView: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>("map");
  const [mapLoaded, setMapLoaded] = React.useState<boolean>(false);
  const [userLocation, setUserLocation] = React.useState<Location | null>(null);
  const trashReports = [
    {
      id: 1,
      lat: 10.8251,
      lng: 106.6277,
      type: "plastic",
      status: "pending",
      reward: 50
    },
    {
      id: 2,
      lat: 10.8221,
      lng: 106.6317,
      type: "general",
      status: "processing",
      reward: 30
    },
    {
      id: 3,
      lat: 10.8211,
      lng: 106.6287,
      type: "hazardous",
      status: "pending",
      reward: 100
    },
    {
      id: 4,
      lat: 10.8241,
      lng: 106.6307,
      type: "organic",
      status: "completed",
      reward: 40
    }
  ];
  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const fallbackLocation: Location = {
      lat: 10.8231,
      lng: 106.6297
    };

    const finishLoading = () => {
      timer = setTimeout(() => setMapLoaded(true), 800);
    };

    if (!navigator.geolocation) {
      setUserLocation(fallbackLocation);
      finishLoading();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        finishLoading();
      },
      (error) => {
        console.warn("Geolocation error:", error.message);
        setUserLocation(fallbackLocation);
        finishLoading();
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {activeTab === "map" && (
        <div className="px-4 mb-4">
          <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {!mapLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-gray-600 text-sm">Loading map...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gray-50">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <line
                      x1="0"
                      y1="150"
                      x2="100%"
                      y2="150"
                      stroke="#cbd5e1"
                      strokeWidth="3"
                    />
                    <line
                      x1="200"
                      y1="0"
                      x2="200"
                      y2="100%"
                      stroke="#cbd5e1"
                      strokeWidth="3"
                    />
                    <rect
                      x="50"
                      y="50"
                      width="80"
                      height="60"
                      fill="#d1fae5"
                      opacity="0.6"
                      rx="4"
                    />
                  </svg>

                  {trashReports.map((report) => {
                    const REPORT_TYPE_COLOR_MAP: Record<string, string> = {
                      plastic: "bg-yellow-500",
                      general: "bg-orange-500",
                      hazardous: "bg-red-500",
                      organic: "bg-green-500"
                    };
                    let colorClass: string;
                    if (REPORT_TYPE_COLOR_MAP[report.type]) {
                      colorClass = REPORT_TYPE_COLOR_MAP[report.type];
                    } else {
                      colorClass = "bg-gray-400";
                    }
                    return (
                      <div
                        key={report.id}
                        className={`absolute ${
                          report.status === "completed"
                            ? "opacity-40"
                            : "opacity-100"
                        }`}
                      >
                        <div
                          className={`${colorClass} w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center relative group cursor-pointer`}
                        >
                          <AlertCircle className="w-6 h-6 text-white" />
                          {report.status === "pending" && (
                            <div className="absolute inset-0 rounded-full bg-current animate-ping opacity-30"></div>
                          )}
                          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            +{report.reward} pts
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {userLocation && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 -m-6">
                          <div className="w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                        </div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full border-3 border-white shadow-lg relative z-10"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button
                    aria-label="trending"
                    className="bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-md hover:bg-white transition"
                  >
                    <TrendingUp className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                <button
                  aria-label="pin-map"
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md hover:bg-white transition"
                >
                  <MapPin className="w-5 h-5 text-blue-500" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Reports List View */}
      {activeTab === "list" && (
        <div className="px-4 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {trashReports.map((report, index) => (
              <div
                key={report.id}
                className={`p-4 flex items-center gap-4 ${
                  index !== trashReports.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    report.type === "plastic"
                      ? "bg-yellow-100"
                      : report.type === "general"
                      ? "bg-orange-100"
                      : report.type === "hazardous"
                      ? "bg-red-100"
                      : "bg-green-100"
                  }`}
                >
                  <AlertCircle
                    className={`w-6 h-6 ${
                      report.type === "plastic"
                        ? "text-yellow-600"
                        : report.type === "general"
                        ? "text-orange-600"
                        : report.type === "hazardous"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 capitalize">
                    {report.type} Waste
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {report.status === "pending"
                      ? "Waiting verification"
                      : report.status === "processing"
                      ? "In progress"
                      : "Completed"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-600">
                    +{report.reward}
                  </p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                      report.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : report.status === "processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
