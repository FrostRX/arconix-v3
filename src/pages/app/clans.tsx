/* eslint-disable @next/next/no-img-element */
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { VscVerifiedFilled } from "react-icons/vsc";
import { getClans, getUser } from "@/Utils/user";
import { getSession } from "next-auth/react";
import { Clan, User } from "@/common.types";
import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { LuStars } from "react-icons/lu";
import useClanModal from "@/hooks/useClanModal";
import Createclan from "@/components/Modals/Createclan";

interface dashboardProps {
  user?: User;
  clans: Clan[];
}

export default function Clans({ user, clans }: dashboardProps) {
  const clanModal = useClanModal();
  const [ClansToShow] = useState(clans.slice(0, 5));
  return (
    <DashRoot
      user={user}
      title="Clans"
      desc="On the dashboard you can see your profile, your earnings, your referrals and much more. You can also withdraw your earnings to your PayPal account. And participate in tournaments and events."
    >
      <Createclan user={user!} clan={clans} />
      <div className="w-full flex flex-col gap-10">
        <div className="w-[90%] mx-auto mt-10">
          <div className="bg-secondary h-[250px] md:h-[224px] p-3 relative overflow-hidden">
            <div className="w-[95%] mx-auto flex-col flex justify-center h-full gap-2 absolute inset-0 z-[7]">
              <h1 className="text-4xl font-bold text-white uppercase text-left">
                BE STRONGER WITH CLANS!
              </h1>
              <ul className="list-disc list-inside">
                <li className="text-white text-base text-opacity-60 max-w-xl">
                  Work together in Clan Ladders to earn{" "}
                  <strong>extra Coins</strong>
                </li>
                <li className="text-white text-base text-opacity-60 max-w-xl">
                  <strong>Compete</strong> in epic Showdowns with your clanmates
                  for big rewards
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

        <div className="w-[90%] mx-auto">
          <span className="text-xl font-medium text-white text-opacity-40 text-center md:text-left">
            CLANS YOU MIGHT LIKE TO JOIN:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
            {ClansToShow.map((clan, index) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                key={clan.id}
                className="bg-secondary p-3 relative overflow-hidden flex items-center rounded-md"
              >
                <div className="w-[95%] mx-auto flex flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center hover:opacity-50 duration-200 cursor-pointer">
                      <Link href={`/app/clan/${clan.id}`}>
                        {clan.image ? (
                          <img
                            src={`https://api.arconixstudio.com/api/files/clan/${clan.id}/${clan.image}`}
                            alt={clan.name}
                            className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] object-contain p-1"
                          />
                        ) : (
                          <div className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] flex items-center justify-center">
                            <BsFillPersonFill className="text-white text-opacity-30 text-6xl mx-auto my-auto" />
                          </div>
                        )}
                      </Link>
                      <Link
                        href={`/app/clan/${clan.id}`}
                        className="flex flex-col"
                      >
                        <span className="text-white text-opacity-60 text-lg font-bold flex items-center justify-center gap-1">
                          [{clan.tag}] {clan.name}
                          {clan.verified && (
                            <VscVerifiedFilled className="text-yellow-400 text-lg inline-block" />
                          )}
                        </span>
                        <span className="text-white text-opacity-60 text-sm">
                          {clan.members.length} / {clan.max} members
                        </span>
                      </Link>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: clan.desc }}
                      className="text-white text-opacity-60 text-base mt-2 max-w-xl"
                    ></div>
                  </div>
                  <div className="border-t-[1px] border-white border-opacity-5 flex justify-between pt-4 pb-1">
                    <div className="flex gap-2">
                      <div className="flex gap-2 items-center">
                        <span
                          className={`text-white text-opacity-60 text-base`}
                        >
                          Lang:
                        </span>
                        <img
                          src={`https://flagcdn.com/${clan.lang}.svg`}
                          alt={clan.lang}
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
                    different attitudes. Check our Clan browser and find the
                    perfect match!
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
                    Sometimes you&lsquo;ve got to do it yourself to get it
                    right! Create your own Clan, invite players and reach new
                    heights together.
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
        </div>
      </div>
    </DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const user = await getUser(`${session?.user?.email}`);
  const clans = await getClans();

  return {
    props: {
      user,
      clans,
    },
  };
};
