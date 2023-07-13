/* eslint-disable @next/next/no-img-element */
import { AiFillHome, AiFillShop, AiOutlineLineChart } from "react-icons/ai";
import {
  MdAdminPanelSettings,
  MdEmojiEvents,
  MdLeaderboard,
  MdOutlinePayments,
  MdToken,
  MdWorkspacePremium,
} from "react-icons/md";
import { CgMediaPodcast } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi";
import { GiSevenPointedStar, GiSpartanHelmet } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import BuyTokens from "@/components/Modals/BuyTokens";

interface Props {
  user?: any;
  toggle: boolean;
  func: () => void;
}

export default function Sidebar({ toggle, user, func }: Props) {
  const [toggleAdmin, setToggleAdmin] = useState(false);
  const [toggleMedia, setToggleMedia] = useState(false);
  const [toggleTokens, setToggleTokens] = useState(false);
  const [toggleOther, setToggleOther] = useState(false);

  return (
    <>
      <BuyTokens open={toggleTokens} setOpen={setToggleTokens} />
      <aside
        className={`w-[15.7rem] bg-secondary h-screen flex flex-col fixed z-[70] ${
          toggle ? "-translate-x-[0%]" : "-translate-x-[100%]"
        } lg:-translate-x-0 top-0 left-0 bottom-0 duration-200 ease-in`}
      >
        <div
          className={`flex items-center ${
            toggle ? "justify-between w-[90%] mx-auto" : "justify-center w-full"
          } gap-2 pt-3`}
        >
          <div className="flex items-center">
            <img src="/logo.webp" alt="Logo" className="w-10" />
            <span className="text-white text-2xl font-bold uppercase">
              Arconix
            </span>
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } items-center justify-center gap-2 bg-tertiary p-2 rounded-full h-10 w-10 cursor-pointer`}
            onClick={func}
          >
            <IoClose className="text-white text-opacity-50 text-2xl" />
          </div>
        </div>
        <div className="mt-5">
          <div className="md:hidden flex-col gap-1 mb-4 flex">
            <Link href="/app" className="flex flex-col cursor-pointer h-10">
              <div className={`flex flex-col items-start w-full py-2 px-4`}>
                <div className="w-full mx-auto justify-between flex items-center rounded-md py-2">
                  <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2 hover:bg-white hover:bg-opacity-5 py-2 w-full rounded-md px-2">
                    <AiFillHome className="text-white text-opacity-50 text-lg" />
                    Home
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="/app/shop"
              className="flex flex-col cursor-pointer h-10"
            >
              <div className={`flex flex-col items-start w-full py-2 px-4`}>
                <div className="w-full mx-auto justify-between flex items-center rounded-md py-2">
                  <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2 hover:bg-white hover:bg-opacity-5 py-2 w-full rounded-md px-2">
                    <AiFillShop className="text-white text-opacity-50 text-lg" />
                    Shop
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="/app/premium"
              className="flex flex-col cursor-pointer h-10"
            >
              <div className={`flex flex-col items-start w-full py-2 px-4`}>
                <div className="w-full mx-auto justify-between flex items-center rounded-md py-2">
                  <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2 hover:bg-white hover:bg-opacity-5 py-2 w-full rounded-md px-2">
                    <MdWorkspacePremium className="text-white text-opacity-50 text-lg" />
                    Premium
                  </span>
                </div>
              </div>
            </Link>
            <div
              onClick={() => setToggleTokens(!toggleTokens)}
              className="flex flex-col cursor-pointer h-10"
            >
              <div className={`flex flex-col items-start w-full py-2 px-4`}>
                <div className="w-full mx-auto justify-between flex items-center rounded-md py-2">
                  <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2 hover:bg-white hover:bg-opacity-5 py-2 w-full rounded-md px-2">
                    <MdToken className="text-white text-opacity-50 text-lg" />
                    Tokens
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={"/app/clans"}
            className="w-full py-2 px-4 hover:bg-tertiary h-12 duration-200 ease-in group/menuside flex"
          >
            <span className="flex items-center w-[90%] mx-auto text-white text-opacity-50 group-hover/menuside:text-opacity-100 gap-2 duration-200 ease-in">
              <GiSpartanHelmet className="text-white text-opacity-50 text-lg group-hover/menuside:text-opacity-100 duration-200 ease-in" />
              Clans
            </span>
          </Link>
          <Link
            href={"/app/events"}
            className="w-full py-2 px-4 hover:bg-tertiary h-12 duration-200 ease-in group/menuside flex"
          >
            <span className="flex items-center w-[90%] mx-auto text-white text-opacity-50 group-hover/menuside:text-opacity-100 gap-2 duration-200 ease-in">
              <MdEmojiEvents className="text-white text-opacity-50 text-lg group-hover/menuside:text-opacity-100 duration-200 ease-in" />
              Events
            </span>
          </Link>
          <Link
            href={"/app/leagues"}
            className="w-full py-2 px-4 hover:bg-tertiary h-12 duration-200 ease-in group/menuside flex"
          >
            <span className="flex items-center w-[90%] mx-auto text-white text-opacity-50 group-hover/menuside:text-opacity-100 gap-2 duration-200 ease-in">
              <GiSevenPointedStar className="text-white text-opacity-50 text-lg group-hover/menuside:text-opacity-100 duration-200 ease-in" />
              Leagues
            </span>
          </Link>

          {user.role === "admin" ||
          user.role === "partner" ||
          user.role === "streamer" ? (
            <div
              onClick={() => {
                setToggleMedia(!toggleMedia);
                setToggleAdmin(false);
                setToggleOther(false);
              }}
              className="flex flex-col gap-2 cursor-pointer"
            >
              <div
                className={`flex flex-col items-start w-full py-2 px-4  ${
                  toggleMedia ? "h-44 bg-tertiary" : "h-12"
                } duration-300 ease-in-out`}
              >
                <div className="w-[90%] mx-auto justify-between flex items-center rounded-md py-2">
                  <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2">
                    <CgMediaPodcast className="text-white text-opacity-50 text-lg" />
                    Media
                  </span>
                  <BsChevronDown
                    className={`text-white text-opacity-50 text-sm ${
                      toggleMedia && "-rotate-180"
                    } ease-in duration-200`}
                  />
                </div>
                {toggleMedia && (
                  <div className="flex flex-col gap-2 mt-2 w-full overflow-hidden select-none">
                    <div className="w-full">
                      <motion.a
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        href="/app/media/contracts"
                        className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                      >
                        <HiPaperAirplane className="text-white text-opacity-50 text-lg rotate-45" />
                        Contracts
                      </motion.a>
                      <motion.a
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        href="/app/media/earnings"
                        className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                      >
                        <AiOutlineLineChart className="text-white text-opacity-50 text-lg" />
                        Earnings
                      </motion.a>
                      <motion.a
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        href="/app/media/payments"
                        className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                      >
                        <MdOutlinePayments className="text-white text-opacity-50 text-lg" />
                        Payments
                      </motion.a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {user.role === "admin" && (
            <div
              onClick={() => {
                setToggleAdmin(!toggleAdmin);
                setToggleMedia(false);
                setToggleOther(false);
              }}
              className="flex flex-col gap-2 cursor-pointer"
            >
              <div
                className={`flex flex-col items-start w-full py-2 px-4  ${
                  toggleAdmin ? "h-44 bg-tertiary" : "h-12"
                } duration-300 ease-in-out`}
              >
                <div className="w-[90%] mx-auto justify-between flex items-center rounded-md py-2">
                  <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2">
                    <MdAdminPanelSettings className="text-white text-opacity-50 text-lg" />
                    Admin
                  </span>
                  <BsChevronDown
                    className={`text-white text-opacity-50 text-sm ${
                      toggleAdmin && "-rotate-180"
                    } ease-in duration-200`}
                  />
                </div>
                {toggleAdmin && (
                  <div className="flex flex-col gap-2 mt-2 w-full overflow-hidden select-none">
                    <div className="w-full">
                      <motion.a
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        href="https://api.arconixstudio.com/_/"
                        target="_blank"
                        className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                      >
                        Database
                      </motion.a>
                      <motion.a
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        href="https://api.arconixstudio.com/_/?#/collections?collectionId=_pb_users_auth_&filter=&sort=-created"
                        target="_blank"
                        className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                      >
                        Users
                      </motion.a>
                      <motion.a
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        href="https://api.arconixstudio.com/_/?#/collections?collectionId=dpvg8meenvotjpy&filter=&sort=-created"
                        target="_blank"
                        className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                      >
                        Orders
                      </motion.a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div
            onClick={() => {
              setToggleOther(!toggleOther);
              setToggleMedia(false);
              setToggleAdmin(false);
            }}
            className="flex flex-col gap-2 cursor-pointer"
          >
            <div
              className={`flex flex-col items-start w-full py-2 px-4  ${
                toggleOther ? "h-44 bg-tertiary" : "h-12"
              } duration-300 ease-in-out`}
            >
              <div className="w-[90%] mx-auto justify-between flex items-center rounded-md py-2">
                <span className="text-white text-opacity-50 text-sm uppercase flex items-center gap-2">
                  <MdAdminPanelSettings className="text-white text-opacity-50 text-lg" />
                  Others
                </span>
                <BsChevronDown
                  className={`text-white text-opacity-50 text-sm ${
                    toggleOther && "-rotate-180"
                  } ease-in duration-200`}
                />
              </div>
              {toggleOther && (
                <div className="flex flex-col gap-2 mt-2 w-full overflow-hidden select-none">
                  <div className="w-full">
                    <motion.a
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      href="/app/leaderboard"
                      className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                    >
                      <MdLeaderboard className="text-white text-opacity-50 text-lg" />
                      Leaderboard
                    </motion.a>
                  </div>
                  <div className="w-full">
                    <motion.a
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      href="/app/support"
                      className="hover:ml-1 duration-200 ease-in w-full flex items-center gap-2 text-white text-opacity-50 text-sm uppercase px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-5 hover:text-white"
                    >
                      <BiSupport className="text-white text-opacity-50 text-lg" />
                      Support
                    </motion.a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
