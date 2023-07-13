import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface NavegationProps {
  usersCount?: any;
}

export default function Navegation({ usersCount }: NavegationProps) {
  const path = usePathname();
  const [tabActive, setTabActive] = useState({
    players: true,
    clans: false,
  });

  useEffect(() => {
    if (path === "/app/search/players") {
      setTabActive({
        players: true,
        clans: false,
      });
    } else if (path === "/app/search/clans") {
      setTabActive({
        players: false,
        clans: true,
      });
    }
  }, [path]);

  return (
    <div className="mt-10 flex justify-center md:justify-start items-center md:gap-11 w-full">
      <div
        className={
          tabActive.players
            ? "text-white text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
            : "text-white text-opacity-50 hover:text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
        }
      >
        <div
          className={
            tabActive.players
              ? "absolute w-[100%] h-1 bg-primary -bottom-2 duration-150 ease-in"
              : "absolute w-[0%] h-1 bg-primary -bottom-2 duration-150 ease-in group-hover/navPlayer:w-[100%]"
          }
        ></div>
        <Link
          href={{
            pathname: "/app/search/players",
          }}
        >
          Players ({usersCount})
        </Link>
      </div>
      <div
        className={
          tabActive.clans
            ? "text-white text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
            : "text-white text-opacity-50 hover:text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
        }
      >
        <div
          className={
            tabActive.clans
              ? "absolute w-[100%] h-1 bg-primary -bottom-2 duration-150 ease-in"
              : "absolute w-[0%] h-1 bg-primary -bottom-2 duration-150 ease-in group-hover/navPlayer:w-[100%]"
          }
        ></div>
        <Link
          href={{
            pathname: "/app/search/clans",
          }}
        >
          Clans (soon)
        </Link>
      </div>
    </div>
  );
}
