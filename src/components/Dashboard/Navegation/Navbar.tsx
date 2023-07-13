/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch, IoWallet, IoSettingsSharp } from "react-icons/io5";
import { FaCoins, FaUserCircle } from "react-icons/fa";
import { MdToken } from "react-icons/md";
import { BsChevronDown, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import { HiOutlineMenuAlt2, HiSpeakerphone } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { User } from "@/common.types";

interface Props {
  user?: User;
  toggle?: any;
}

export default function Navbar({ user, toggle }: Props) {
  const [userActive, setUserActive] = useState(false);
  const [coins, setCoins] = useState(false);
  const [tokens, setTokens] = useState(false);
  const [tabsActive, setTabsActive] = useState({
    home: false,
    shop: false,
    premium: false,
  });
  const path = usePathname();

  useEffect(() => {
    if (path === "/app") {
      setTabsActive({
        home: true,
        shop: false,
        premium: false,
      });
    } else if (path.includes("/shop")) {
      setTabsActive({
        home: false,
        shop: true,
        premium: false,
      });
    } else if (path === "/app/premium") {
      setTabsActive({
        home: false,
        shop: false,
        premium: true,
      });
    } else {
      setTabsActive({
        home: false,
        shop: false,
        premium: false,
      });
    }
  }, [path]);

  return (
    <>
      <div className="h-12 bg-secondary bg-opacity-95 flex items-center justify-between px-5 backdrop-blur-md w-full z-50">
        <div className="h-full flex items-center">
          <div
            onClick={() => {
              toggle();
            }}
            className="flex bg-tertiary p-2 rounded-full lg:hidden cursor-pointer"
          >
            <span>
              <HiOutlineMenuAlt2 className="text-white text-opacity-40 text-xl" />
            </span>
          </div>
          <Link
            href="/app"
            className={`text-white uppercase hover:text-opacity-100 relative transition-all ease-in-out text-sm h-full px-5 items-center justify-center hidden lg:flex group/navbar
            ${tabsActive.home ? "text-opacity-100" : "text-opacity-40"}`}
          >
            <div
              className={`absolute ${
                tabsActive.home ? "w-full" : "w-0"
              } h-1 bottom-0 bg-primary group-hover/navbar:w-full transition-all ease-in-out duration-200`}
            ></div>
            home
          </Link>
          <Link
            href="/app/shop"
            className={`text-white uppercase hover:text-opacity-100 relative transition-all ease-in-out text-sm h-full px-5 items-center justify-center hidden lg:flex group/navbar
            ${tabsActive.shop ? "text-opacity-100" : "text-opacity-40"}
            `}
          >
            <div
              className={`absolute ${
                tabsActive.shop ? "w-full" : "w-0"
              } h-1 bottom-0 bg-primary group-hover/navbar:w-full transition-all ease-in-out duration-200`}
            ></div>
            shop
          </Link>

          <Link
            href="/app/premium"
            className={`text-white uppercase hover:text-opacity-100 relative transition-all ease-in-out text-sm h-full px-5 items-center justify-center hidden lg:flex group/navbar
            ${tabsActive.premium ? "text-opacity-100" : "text-opacity-40"}
            `}
          >
            <div
              className={`absolute ${
                tabsActive.premium ? "w-full" : "w-0"
              } h-1 bottom-0 bg-primary group-hover/navbar:w-full transition-all ease-in-out duration-200`}
            ></div>
            premium
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/app/search/players"
            className="bg-tertiary w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
          >
            <IoSearch className="text-white text-opacity-40 text-lg" />
          </Link>

          <div className="bg-tertiary h-9 rounded-full justify-center items-center cursor-pointer px-2 gap-3 relative md:flex hidden">
            <div
              onMouseEnter={() => {
                setCoins(true);
                setTokens(false);

                setUserActive(false);
              }}
              onMouseLeave={() => setCoins(false)}
              className="items-center gap-2 text-yellow-400 flex"
            >
              <FaCoins className="text-opacity-40 text-base" />
              <span className="text-opacity-40 text-base">
                {user?.coins || 0}
              </span>

              {coins && (
                <div className="absolute top-12 right-0 w-60 bg-tertiary rounded-sm shadow-md flex flex-col gap-2 p-2 z-40">
                  <div className="flex flex-col gap-2 p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-lg">Coins</span>
                      <FaCoins className="text-opacity-40 text-2xl" />
                    </div>
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-center gap-2 text-white text-opacity-40 text-sm">
                        <span>USE</span>
                        <span>Purchase items in the shop</span>
                      </li>
                      <li className="flex items-center gap-2 text-white text-opacity-40 text-sm">
                        <span>GET</span>
                        <span>Events and Tournaments winnings.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => {
                setCoins(false);
                setTokens(true);

                setUserActive(false);
              }}
              onMouseLeave={() => setTokens(false)}
              className="items-center gap-2 text-white flex"
            >
              <MdToken className="text-opacity-40 text-xl" />
              <span className="text-opacity-40 text-base">
                {user?.tokens || 0}
              </span>

              {tokens && (
                <div className="absolute top-12 right-0 w-60 bg-tertiary rounded-sm shadow-md flex flex-col gap-2 p-2">
                  <div className="flex flex-col gap-2 p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-lg">Tokens</span>
                      <MdToken className="text-opacity-40 text-2xl" />
                    </div>
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-center gap-2 text-white text-opacity-40 text-sm">
                        <span>USE</span>
                        <span>Enter in tournaments</span>
                      </li>
                      <li className="flex items-center gap-2 text-white text-opacity-40 text-sm">
                        <span>GET</span>
                        <span>Buy them directly from the Wallet.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            onClick={() => {
              setUserActive(!userActive);
            }}
            className={
              "bg-tertiary h-9 rounded-full flex justify-center items-center cursor-pointer pr-2 gap-2 relative"
            }
          >
            {user?.avatar ? (
              <img
                src={`https://api.arconixstudio.com/api/files/users/${user?.id}/${user?.avatar}`}
                alt={`${user?.display} profile picture`}
                className="w-8 h-8 object-cover border "
              />
            ) : (
              <FaUserCircle
                className="text-white text-opacity-40 text-lg"
                size={29}
              />
            )}

            <BsChevronDown
              size={13}
              className={`text-white text-opacity-40 text-sm transition-all ease-in ${
                userActive && "transform -rotate-180"
              }`}
            />

            {userActive && (
              <div className="absolute top-12 right-0 w-52 bg-tertiary rounded-sm shadow-md flex flex-col gap-2 p-2">
                <div className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in">
                  <Link
                    href={`/app/player/${user?.id}/overview`}
                    className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2"
                  >
                    <FaUserCircle className="text-white text-opacity-50 text-lg" />
                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      Profile
                    </span>
                  </Link>
                </div>
                <div className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in">
                  <Link
                    href="/app/wallet"
                    className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2"
                  >
                    <IoWallet className="text-white text-opacity-50 text-lg" />
                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      Wallet
                    </span>
                  </Link>
                </div>
                <hr className="border-gray-700" />
                <div className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in">
                  <Link
                    href="/app/settings"
                    className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2"
                  >
                    <IoSettingsSharp className="text-white text-opacity-50 text-lg" />

                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      Settings
                    </span>
                  </Link>
                </div>
                <div className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in">
                  <Link
                    href="/app/patch-notes"
                    className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2"
                  >
                    <HiSpeakerphone className="text-white text-opacity-50 text-lg" />

                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      Patch Notes
                    </span>
                  </Link>
                </div>
                <div className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in">
                  <Link
                    href="/app/settings"
                    className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2"
                  >
                    <BsFillFileEarmarkTextFill className="text-white text-opacity-50 text-lg" />

                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      How Arconix Works
                    </span>
                  </Link>
                </div>
                <div className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in">
                  <Link
                    href="/app/settings"
                    className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2"
                  >
                    <FiDownload className="text-white text-opacity-50 text-lg" />

                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      Downloads
                    </span>
                  </Link>
                </div>
                <hr className="border-gray-700" />
                <div
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full hover:bg-secondary p-2 rounded-md group/user duration-200 ease-in cursor-pointer"
                >
                  <span className="text-white text-opacity-50 text-sm group-hover/user:text-opacity-100 duration-200 ease-in flex items-center gap-2">
                    <RiLogoutBoxRFill className="text-white text-opacity-50 text-lg" />

                    <span className="ml-0 group-hover/user:ml-[2px] duration-150 ease-in">
                      Log out
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
