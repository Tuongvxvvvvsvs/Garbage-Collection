import { Award, Leaf, TrendingUp, Trophy, Zap } from "lucide-react";
import React from "react";

const StatsDashboard: React.FC = () => {
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
    <div className="bg-linear-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl p-5 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mb-20"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-emerald-100 text-sm font-medium mb-1">
              Your Impact This Month
            </p>
            <h2 className="text-3xl font-bold text-white">
              {stats.totalImpact} kg
            </h2>
            <p className="text-emerald-100 text-xs mt-1 flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              {stats.co2Saved} kg CO₂ saved
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <Award className="w-5 h-5 text-white mb-1" />
            <p className="text-xl font-bold text-white">{stats.points}</p>
            <p className="text-xs text-emerald-100">Points</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <Trophy className="w-5 h-5 text-white mb-1" />
            <p className="text-xl font-bold text-white">#{stats.ranking}</p>
            <p className="text-xs text-emerald-100">Ranking</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <Zap className="w-5 h-5 text-white mb-1" />
            <p className="text-xl font-bold text-white">{stats.streak}</p>
            <p className="text-xs text-emerald-100">Day Streak</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
