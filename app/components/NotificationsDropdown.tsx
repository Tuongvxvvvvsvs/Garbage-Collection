import { CheckCircle2, Gift, Target } from "lucide-react";
import React from "react";

const NotificationsDropdown = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Report verified!",
      desc: "Le Loi Street - 2h ago",
      time: "2h",
      unread: true
    },
    {
      id: 2,
      type: "reward",
      title: "Reward unlocked!",
      desc: "50,000đ voucher available",
      time: "5h",
      unread: true
    },
    {
      id: 3,
      type: "info",
      title: "New challenge",
      desc: "Collect 5 reports this week",
      time: "1d",
      unread: false
    }
  ];

  return (
    <div className="max-h-96 overflow-y-auto">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition ${
            notif.unread ? "bg-emerald-50/50" : ""
          }`}
        >
          <div className="flex gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                notif.type === "success"
                  ? "bg-green-100"
                  : notif.type === "reward"
                  ? "bg-amber-100"
                  : "bg-blue-100"
              }`}
            >
              {notif.type === "success" && (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
              {notif.type === "reward" && (
                <Gift className="w-5 h-5 text-amber-600" />
              )}
              {notif.type === "info" && (
                <Target className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{notif.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{notif.desc}</p>
            </div>
            <span className="text-xs text-gray-400">{notif.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsDropdown;
