import { ChevronRight, Gift, Star } from "lucide-react";
import React from "react";

const RewardsCard: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl p-5 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Star className="absolute top-2 right-4 w-16 h-16 text-white" />
        <Gift className="absolute bottom-2 left-4 w-12 h-12 text-white" />
      </div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-white/90 text-sm font-medium mb-1">
              Available Rewards
            </p>
            <h3 className="text-2xl font-bold text-white">3 vouchers ready!</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-white text-xs font-semibold">55 pts to next</p>
          </div>
        </div>
        <button className="w-full bg-white text-purple-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition flex items-center justify-center gap-2">
          <Gift className="w-4 h-4" />
          Claim Your Rewards
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RewardsCard;
