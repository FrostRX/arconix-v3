/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function ClansHeader() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="bg-secondary h-[380px] md:h-[224px] p-3 relative overflow-hidden w-full">
        <div className="w-[95%] mx-auto flex-col flex justify-center h-full gap-2 absolute inset-0 z-[7]">
          <h1 className="text-2xl md:text-4xl font-bold text-white uppercase text-left">
            BE STRONGER WITH CLANS!
          </h1>
          <ul className="list-disc list-inside">
            <li className="text-white text-base text-opacity-60 max-w-xl">
              Work together in Clan Ladders to earn <strong>extra Coins</strong>
            </li>
            <li className="text-white text-base text-opacity-60 max-w-xl">
              <strong>Compete</strong> in epic Showdowns with your clanmates for
              big rewards
            </li>
            <li className="text-white text-base text-opacity-60 max-w-xl">
              Fight to take your Clan to the top of the leaderboard or just{" "}
              <strong>play for fun</strong>
            </li>
            <li className="text-white text-base text-opacity-60 max-w-xl">
              Find the perfect Clan for your playstyle and{" "}
              <strong>make new friends</strong>
            </li>
            <li className="text-white text-base text-opacity-60 max-w-xl">
              Choose wisely: you can <strong>only be part of 1 Clan</strong>
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex absolute inset-0 object-cover blur-[2px] lg:blur-none"
        >
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1672219552/Stryda/illustrations/Clans_bg.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
