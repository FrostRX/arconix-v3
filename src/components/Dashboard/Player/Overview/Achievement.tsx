import Link from "next/link";
import React from "react";

interface AchievementProps {
  user?: any;
}

export default function Achievement({ user }: AchievementProps) {
  return (
    <div className="w-full">
      <div className="bg-secondary w-full flex flex-col py-2 rounded-md">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between">
            <span className="text-white text-xl uppercase">Achievements</span>
            <Link
              href={{
                pathname: "/app/player/[id]/achievements",
                query: { id: user.id },
              }}
              className="text-white text-opacity-50 text-sm hover:underline cursor-pointer"
            >
              View
            </Link>
          </div>
          <hr className="border-white border-opacity-5 my-2" />
        </div>
      </div>
    </div>
  );
}
