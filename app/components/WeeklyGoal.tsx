import { Target } from "lucide-react";
import React from "react";

const WeeklyGoal: React.FC = () => {
  const [stats, setStats] = React.useState({
    pendingReports: 3,
    completedReports: 12,
    points: 245,
    ranking: 12,
    streak: 7,
    weeklyGoal: 5,
    weeklyProgress: 3,
    totalImpact: "127.5",
    co2Saved: "45.2"
  });
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Target className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Weekly Goal</p>
            <p className="text-xs text-gray-500">
              {stats.weeklyProgress}/{stats.weeklyGoal} reports
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-purple-600">
            {Math.round(stats.weeklyProgress / stats.weeklyGoal * 100)}%
          </p>
        </div>
      </div>
      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" />
      </div>
    </div>
  );
};

export default WeeklyGoal;
