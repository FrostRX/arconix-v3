/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";

interface PlayerHeadProps {
  user: any;
  session: any;
  children: React.ReactNode;
  clanTag?: string;
}

export default function PlayerHead({
  user,
  session,
  children,
  clanTag,
}: PlayerHeadProps) {
  const path = usePathname();
  const isOwner = session?.user?.email === user?.email;
  const isVerified = user?.verified;
  const [tabActive, setTabActive] = useState({
    overview: true,
    stats: false,
    achievements: false,
  });

  useEffect(() => {
    if (path.includes("overview")) {
      setTabActive({
        overview: true,
        stats: false,
        achievements: false,
      });
    } else if (path.includes("stats")) {
      setTabActive({
        overview: false,
        stats: true,
        achievements: false,
      });
    } else if (path.includes("achievements")) {
      setTabActive({
        overview: false,
        stats: false,
        achievements: true,
      });
    }
  }, [path]);

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto h-[400px] bg-secondary mt-10 rounded-md flex flex-col items-center relative z-10">
        <div className="w-full bg-tertiary shadow-sm h-[60%] flex justify-center items-center relative overflow-hidden">
          <div className="w-[120px] h-[120px] rounded-full relative flex justify-center items-center z-[2]">
            {user?.avatar ? (
              <>
                <img
                  src={`https://api.arconixstudio.com/api/files/users/${user.id}/${user.avatar}`}
                  alt={`${user?.name} profile picture`}
                  className="w-full h-full object-cover"
                />
                <div className="w-[115%] absolute h-[115%] bg-transparent border-4 border-white border-opacity-50 rounded-full flex justify-center"></div>
              </>
            ) : (
              <div className="w-[120px] h-[120px] rounded-full bg-primary relative flex justify-center items-center">
                <div className="w-[115%] absolute h-[115%] bg-transparent border-4 border-white border-opacity-50 rounded-full flex justify-center"></div>
              </div>
            )}
          </div>
          <div className="absolute w-full top-0 z-[1]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#101323"
                fillOpacity=".3"
                d="M0,192L34.3,165.3C68.6,139,137,85,206,85.3C274.3,85,343,139,411,138.7C480,139,549,85,617,90.7C685.7,96,754,160,823,197.3C891.4,235,960,245,1029,250.7C1097.1,256,1166,256,1234,234.7C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-6">
          <span className="text-white text-5xl font-semibold uppercase">
            {clanTag && `[${clanTag}]`} {user?.display}
          </span>
        </div>

        {isOwner && (
          <div className="absolute bottom-5">
            <Link
              href={"/app/settings"}
              className="text-white text-opacity-60 text-sm font-semibold border-2 border-white mx-auto px-3 py-2 text-center rounded-full hover:bg-tertiary hover:text-opacity-100 transition-all flex items-center gap-2"
            >
              <IoSettingsSharp size={18} />
              PROFILE SETTINGS
            </Link>
          </div>
        )}
      </div>

      {isOwner && (
        <>
          {!isVerified && (
            <div className="bg-orange-400 w-[90%] mx-auto h-10 flex items-center rounded-b-md">
              <div className="flex w-[95%] mx-auto justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <IoIosWarning size={20} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold">
                    Your account is not verified yet.
                  </span>
                </div>
                <Link
                  href={"/settings"}
                  className="bg-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  Verify
                </Link>
              </div>
            </div>
          )}
        </>
      )}

      <div className="w-[90%] mx-auto mt-10 flex justify-center items-center md:gap-11">
        <div
          className={
            tabActive.overview
              ? "text-white text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
              : "text-white text-opacity-50 hover:text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
          }
        >
          <div
            className={
              tabActive.overview
                ? "absolute w-[100%] h-1 bg-primary -bottom-2 duration-150 ease-in"
                : "absolute w-[0%] h-1 bg-primary -bottom-2 duration-150 ease-in group-hover/navPlayer:w-[100%]"
            }
          ></div>
          <Link
            href={{
              pathname: "/app/player/[id]/overview",
              query: { id: user?.id },
            }}
          >
            Overview
          </Link>
        </div>

        <div
          className={
            tabActive.stats
              ? "text-white text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
              : "text-white text-opacity-50 hover:text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
          }
        >
          <div
            className={
              tabActive.stats
                ? "absolute w-[100%] h-1 bg-primary -bottom-2 duration-150 ease-in"
                : "absolute w-[0%] h-1 bg-primary -bottom-2 duration-150 ease-in group-hover/navPlayer:w-[100%]"
            }
          ></div>
          <Link
            href={{
              pathname: "/app/player/[id]/stats",
              query: { id: user?.id },
            }}
          >
            Stats
          </Link>
        </div>

        <div
          className={
            tabActive.achievements
              ? "text-white text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
              : "text-white text-opacity-50 hover:text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
          }
        >
          <div
            className={
              tabActive.achievements
                ? "absolute w-[100%] h-1 bg-primary -bottom-2 duration-150 ease-in"
                : "absolute w-[0%] h-1 bg-primary -bottom-2 duration-150 ease-in group-hover/navPlayer:w-[100%]"
            }
          ></div>
          <Link
            href={{
              pathname: "/app/player/[id]/achievements",
              query: { id: user?.id },
            }}
          >
            Achievements
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
