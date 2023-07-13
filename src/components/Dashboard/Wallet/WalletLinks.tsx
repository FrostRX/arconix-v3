import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function WalletLinks() {
  const path = usePathname();
  const [tabActive, setTabActive] = useState({
    overview: true,
    history: false,
  });

  useEffect(() => {
    if (path === "/app/wallet") {
      setTabActive({
        overview: true,
        history: false,
      });
    } else if (path === "/app/wallet/history") {
      setTabActive({
        overview: false,
        history: true,
      });
    }
  }, [path]);

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto">
        <div className="mt-10 flex justify-center md:justify-start items-center w-full">
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
                pathname: "/app/wallet",
              }}
            >
              Overview
            </Link>
          </div>
          <div
            className={
              tabActive.history
                ? "text-white text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
                : "text-white text-opacity-50 hover:text-opacity-100 group/navPlayer relative px-4 flex justify-center duration-150 ease-in"
            }
          >
            <div
              className={
                tabActive.history
                  ? "absolute w-[100%] h-1 bg-primary -bottom-2 duration-150 ease-in"
                  : "absolute w-[0%] h-1 bg-primary -bottom-2 duration-150 ease-in group-hover/navPlayer:w-[100%]"
              }
            ></div>
            <Link
              href={{
                pathname: "/app/wallet/history",
              }}
            >
              History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
