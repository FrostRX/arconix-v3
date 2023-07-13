/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Game_List() {
  return (
    <div className="w-full min-h-[550px] flex flex-col justify-center items-center gap-10 p-10 md:p-5">
      <div>
        <h1 className="text-3xl font-bold text-center text-white">GAME LIST</h1>
        <p className="text-center text-white text-opacity-80 mt-5">
          You can view all the games where you can find friends.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:w-full lg:w-[65%] mx-auto gap-10">
        <div className="relative w-72 h-44">
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] to-transparent"></div>
          <img
            src="/games/lol.webp"
            width={200}
            height={200}
            alt="lol"
            className="rounded-md object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-3">
            <h1 className="text-white text-[18px] font-bold">
              League of Legends
            </h1>
            <div className="flex gap-2">
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                CASUAL
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                RANKED
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                DUO
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                TEAM
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-72 h-44">
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] to-transparent"></div>
          <img
            src="/games/fn.webp"
            width={200}
            height={200}
            alt="lol"
            className="rounded-md object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-3">
            <h1 className="text-white text-[18px] font-bold">Fortnite</h1>
            <div className="flex gap-2">
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                CASUAL
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                RANKED
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                DUO
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                TEAM
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-72 h-44">
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] to-transparent"></div>

          <img
            src="/games/rocket.jpeg"
            width={200}
            height={200}
            alt="lol"
            className="rounded-md object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-3">
            <h1 className="text-white text-[18px] font-bold">
              League of Legends
            </h1>
            <div className="flex gap-2">
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                CASUAL
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                RANKED
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                DUO
              </p>
              <p className="text-primary bg-secondary bg-opacity-80 p-1 rounded-full text-[8px]">
                TEAM
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="bg-primary text-white px-10 py-3 rounded-md font-bold shadow-xl text-center mt-5 w-full md:w-[fit-content]"
        href={"/"}
      >
        See All Games
      </Link>
    </div>
  );
}
