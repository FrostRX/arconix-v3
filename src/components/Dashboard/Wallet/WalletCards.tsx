import React from "react";
import { FaCoins, FaWallet } from "react-icons/fa";
import { MdToken } from "react-icons/md";
import { motion } from "framer-motion";
import BuyTokens from "@/components/Modals/BuyTokens";
import Link from "next/link";

interface WalletCardsProps {
  user?: any;
}

export default function WalletCards({ user }: WalletCardsProps) {
  const [hoverAlert, setHoverAlert] = React.useState(false);
  const [showTokens, setShowTokens] = React.useState(false);
  const WithdrawAbality = () => {
    if (user?.money > 20) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto mt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center"
        >
          <div className="w-full min-w-[332px] md:w-[332px]  h-[351px] bg-secondary rounded-md border-white border-[1px] border-opacity-5">
            <div className="flex flex-col w-full h-full justify-between items-center">
              <div className="flex items-center w-full justify-center gap-4 text-yellow-400 mt-8">
                <FaCoins className="text-current text-5xl ml-4 mt-4" />
                <span className="text-current text-5xl font-bold">
                  {user?.coins || "0"} <span className="text-base">coins</span>
                </span>
              </div>
              <div className="w-full flex-col flex gap-5">
                <div className="flex justify-between w-[85%] ml-5">
                  <span className="text-white text-opacity-50">USE</span>{" "}
                  <span className="text-white text-opacity-50">
                    Purchase items in the Shop.
                  </span>
                </div>
                <div className="flex justify-between w-[89%] ml-5">
                  <span className="text-white text-opacity-50">USE</span>{" "}
                  <span className="text-white text-opacity-50">
                    Winning events, tournaments.
                  </span>
                </div>
              </div>
              <div className="w-[95%] mx-auto flex items-center justify-center">
                <Link
                  href="/app/shop"
                  className="w-full mb-2 border py-2 px-4 rounded-full text-white text-opacity-50 border-opacity-50 uppercase hover:text-opacity-100 hover:border-opacity-100 hover:bg-tertiary flex justify-center"
                >
                  VISIT SHOP
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full min-w-[332px] md:w-[332px] h-[351px] bg-secondary rounded-md border-white border-[1px] border-opacity-5">
            <div className="flex flex-col w-full h-full justify-between items-center">
              <div className="flex items-center w-full justify-center gap-4 text-white mt-8">
                <MdToken className="text-current text-5xl ml-4 mt-4" />
                <span className="text-current text-5xl font-bold">
                  {user?.tokens || "0"}{" "}
                  <span className="text-base">tokens</span>
                </span>
              </div>
              <div className="w-full flex-col flex gap-5">
                <div className="flex justify-between w-[85%] ml-5">
                  <span className="text-white text-opacity-50">USE</span>{" "}
                  <span className="text-white text-opacity-50">
                    Purchase items in the Shop.
                  </span>
                </div>
                <div className="flex justify-between w-[85%] ml-5 gap-[58px]">
                  <span className="text-white text-opacity-50">USE</span>{" "}
                  <span className="text-white text-opacity-50">
                    Buy them directly from the Wallet.
                  </span>
                </div>
              </div>
              <div className="w-[95%] mx-auto">
                <BuyTokens open={showTokens} setOpen={setShowTokens} />
                <button
                  onClick={() => setShowTokens(true)}
                  className="w-full mb-2 py-2 px-4 rounded-full bg-primary text-white uppercase"
                >
                  BUY Tokens
                </button>
              </div>
            </div>
          </div>

          <div className="w-full min-w-[332px] md:w-[332px]  h-[351px] bg-secondary rounded-md border-white border-[1px] border-opacity-5">
            <div className="flex flex-col w-full h-full justify-between items-center">
              <div className="flex items-center w-full justify-center gap-4 text-white mt-8">
                <FaWallet className="text-current text-5xl ml-4 mt-4" />
                <span className="text-current text-5xl font-bold">
                  {user?.coins ? `${user?.coins} €` : "0 €"}{" "}
                  <span className="text-base">prize money</span>
                </span>
              </div>

              <div
                className="w-[95%] mx-auto relative"
                onMouseEnter={() => setHoverAlert(true)}
                onMouseLeave={() => setHoverAlert(false)}
              >
                {WithdrawAbality() && hoverAlert ? (
                  <div className="absolute -top-16 left-0 w-full h-full bg-tertiary flex justify-center items-center p-2 rounded-md">
                    <span className="text-white text-base text-opacity-50">
                      You need at least 20 € to withdraw.
                    </span>
                  </div>
                ) : null}
                <button
                  disabled={WithdrawAbality()}
                  className="w-full mb-2 border py-2 px-4 rounded-full text-white text-opacity-50 border-opacity-50 uppercase hover:text-opacity-100 hover:border-opacity-100 hover:bg-tertiary disabled:hover:bg-transparent disabled:hover:border-opacity-50 disabled:hover:text-opacity-50 disabled:cursor-not-allowed"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
