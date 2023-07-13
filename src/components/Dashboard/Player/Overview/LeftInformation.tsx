/* eslint-disable @next/next/no-img-element */
import { Clan } from "@/common.types";
import Link from "next/link";
import React from "react";
import {
  BsFillPersonFill,
  BsInstagram,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

interface LeftInformationProps {
  user?: any;
  session?: any;
  clan: Clan[];
}

export default function LeftInformation({
  user,
  session,
  clan,
}: LeftInformationProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full md:w-auto">
      <div className="bg-secondary w-full md:w-[318px] min-h-[120px] max-h-[220px] rounded-md p-2">
        <div className="py-1 flex justify-between items-center">
          <span className="text-white text-xl">ABOUT</span>
          {user?.email === session?.user?.email && (
            <button className="text-white text-opacity-50 text-sm hover:underline">
              Edit
            </button>
          )}
        </div>
        <hr className="border-white border-opacity-5 my-2" />
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: user.bio }}
            className="text-white text-opacity-50 text-sm my-2"
          />
        </div>
      </div>
      <div className="bg-secondary w-full md:w-[318px] min-h-[120px] max-h-[220px] rounded-md p-2">
        <div className="py-1 flex justify-between items-center">
          <span className="text-white text-xl">CLAN</span>
        </div>
        <hr className="border-white border-opacity-5 my-2" />
        {clan.length > 0 ? (
          <div className="p-1 flex gap-2">
            <Link href={`/app/clan/${clan[0].id}`}>
              {clan[0].image ? (
                <img
                  src={`https://api.arconixstudio.com/api/files/clan/${clan[0].id}/${clan[0].image}`}
                  alt={clan[0].name}
                  className="w-[3.5rem] h-[3.5rem] bg-tertiary rounded-[20px] object-contain p-1 border-white border-y-2 border-x-[0.1px]"
                />
              ) : (
                <div className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] flex items-center justify-center">
                  <BsFillPersonFill className="text-white text-opacity-30 text-6xl mx-auto my-auto" />
                </div>
              )}
            </Link>
            <Link href={`/app/clan/${clan[0].id}`} className="flex flex-col">
              <span className="text-white text-base text-opacity-60">
                Clan member of
              </span>
              <span className="text-white text-xl">
                [{clan[0].tag}] {clan[0].name}
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <span className="text-white text-opacity-50 text-base mt-2 text-center">
              Not part of a clan
            </span>
            {user?.email === session?.user?.email && (
              <Link
                href="/app/clans"
                className="bg-primary text-white px-2 py-1 rounded-full mt-2 text-center text-lg"
              >
                Find a clan
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="bg-secondary w-full md:w-[318px] min-h-[120px] max-h-[220px] rounded-md p-2">
        <div className="py-1 flex justify-between items-center">
          <span className="text-white text-xl">SOCIAL</span>
        </div>
        <hr className="border-white border-opacity-5 my-2" />
        <div className="flex items-center justify-center gap-5 w-[75%] mx-auto my-5">
          {user?.socials?.twitter && (
            <div className="hover:!scale-110 p-2 ease-in duration-200">
              <Link target="_blank" href={user?.socials.twitter}>
                <BsTwitter
                  className={`text-white text-opacity-50 text-2xl hover:text-blue-500 ${
                    !user?.socials.twitter
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                />
              </Link>
            </div>
          )}
          {user?.socials?.instagram && (
            <div className={`hover:!scale-110 p-2 ease-in duration-200`}>
              <Link target="_blank" href={user?.socials.instagram}>
                <BsInstagram
                  className={`text-white text-opacity-50 text-2xl hover:text-rose-600 ${
                    !user?.socials.instagram
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                />
              </Link>
            </div>
          )}
          {user?.socials?.twitch && (
            <div className={`hover:!scale-110 p-2 ease-in duration-200`}>
              <Link target="_blank" href={user?.socials.twitch}>
                <BsTwitch
                  className={`text-white text-opacity-50 text-2xl hover:text-purple-500 ${
                    !user?.socials.twitch
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                />
              </Link>
            </div>
          )}
          {user?.socials?.youtube && (
            <div className={`hover:!scale-110 p-2 ease-in duration-200`}>
              <Link target="_blank" href={user?.socials.youtube}>
                <BsYoutube
                  className={`text-white text-opacity-50 text-2xl hover:text-red-600 ${
                    !user?.socials.youtube
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
