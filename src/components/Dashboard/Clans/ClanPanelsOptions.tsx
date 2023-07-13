import useClanModal from "@/hooks/useClanModal";
import Link from "next/link";
import React from "react";
import { LuStars } from "react-icons/lu";

export default function ClanPanelsOptions() {
  const clanModal = useClanModal();
  return (
    <div className="w-[90%] mx-auto">
      <span className="text-xl font-medium text-white text-opacity-40 text-center md:text-left">
        DIDN&lsquo;T FIND WHAT YOU WERE LOOKING FOR?
      </span>
      <div className="flex md:flex-row flex-col gap-10 mt-2">
        <div className="w-full md:w-1/2">
          <div className="bg-secondary h-[150px] p-3 relative overflow-hidden flex items-center">
            <div className="w-[30%] h-full md:flex hidden"></div>
            <div className="flex flex-col justify-center items-start h-full gap-2">
              <span className="text-white text-opacity-50 text-base">
                There are lots of Clans playing all sorts of games with many
                different attitudes. Check our Clan browser and find the perfect
                match!
              </span>
              <Link
                href="/app/search/clans"
                className="text-white text-opacity-60 text-base font-bold mt-2 bg-primary px-2 py-1 rounded-full uppercase"
              >
                Find a Clan
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-secondary p-3 relative overflow-hidden flex items-center h-[150px]">
            <div className="w-[30%] h-full flex items-center justify-center">
              <LuStars className="text-white" size={110} />
            </div>
            <div className="flex flex-col justify-center items-start h-full gap-2">
              <span className="text-white text-opacity-50 text-base">
                Sometimes you&lsquo;ve got to do it yourself to get it right!
                Create your own Clan, invite players and reach new heights
                together.
              </span>
              <button
                onClick={() => clanModal.onOpen()}
                className="text-white text-opacity-60 text-base font-bold mt-2 bg-primary px-2 py-1 rounded-full uppercase"
              >
                Create a Clan
              </button>
            </div>
          </div>
        </div>
      </div>
      C
    </div>
  );
}
