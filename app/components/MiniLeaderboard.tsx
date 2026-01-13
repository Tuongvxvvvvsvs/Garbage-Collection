import { ChevronRight, Trophy } from "lucide-react";
import React from "react";

const MiniLeaderboard: React.FC = () => {
  const leaderboard = [
    { rank: 1, name: "Nguyễn Văn A", points: 1250, avatar: "🥇" },
    { rank: 2, name: "Trần Thị B", points: 1100, avatar: "🥈" },
    { rank: 3, name: "Lê Văn C", points: 980, avatar: "🥉" }
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-linear-to-r from-amber-50 to-orange-50">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-gray-900">Top Contributors</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      <div className="divide-y divide-gray-100">
        {leaderboard.map((user) => (
          <div
            key={user.rank}
            className="p-4 flex items-center gap-3 hover:bg-gray-50 transition"
          >
            <span className="text-2xl">{user.avatar}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.points} points</p>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                user.rank === 1
                  ? "bg-amber-100 text-amber-700"
                  : user.rank === 2
                  ? "bg-gray-100 text-gray-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {user.rank}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniLeaderboard;
