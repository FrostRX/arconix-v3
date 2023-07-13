import React, { use } from "react";

type Stats = {
  defeats: number;
  wins: number;
  events: number;
  tournaments: number;
};

interface SimpleStatsProps {
  user?: any;
}

export default function SimpleStats({ user }: SimpleStatsProps) {
  const stats: Stats = user.stats;

  const formatStats = (stats: number) => {
    if (stats === 0) return "——";
    return stats;
  };

  return (
    <div className="w-full">
      <div className="bg-secondary w-full flex flex-col py-2 rounded-md">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between">
            <span className="text-white text-xl">STATS</span>
            <span className="text-white text-opacity-50 text-sm hover:underline cursor-pointer">
              View
            </span>
          </div>
          <hr className="border-white border-opacity-5 my-2" />
          <div className="flex justify-between py-2 w-[95%] ml-2">
            <div className="flex flex-col md:border-l border-white border-opacity-10 md:pl-5">
              <span className="text-white text-opacity-50 text-base uppercase">
                Defeats
              </span>
              <span className="text-white text-2xl font-bold">
                {formatStats(stats?.defeats)}
              </span>
            </div>
            <div className="flex flex-col md:border-l border-white border-opacity-10 md:pl-5">
              <span className="text-white text-opacity-50 text-base uppercase">
                Wins
              </span>
              <span className="text-white text-2xl font-bold">
                {formatStats(stats?.wins)}
              </span>
            </div>
            <div className="flex flex-col md:border-l border-white border-opacity-10 md:pl-5">
              <span className="text-white text-opacity-50 text-base uppercase">
                Events
              </span>
              <span className="text-white text-2xl font-bold">
                {formatStats(stats?.events)}
              </span>
            </div>
            <div className="flex flex-col md:border-l border-white border-opacity-10 md:pl-5">
              <span className="text-white text-opacity-50 text-base uppercase">
                Tournaments
              </span>
              <span className="text-white text-2xl font-bold">
                {formatStats(stats?.tournaments)}
              </span>
            </div>
          </div>
        </div>
      </div>
      L
    </div>
  );
}
