/* eslint-disable @next/next/no-img-element */
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getUser, getUserClans, getUsers } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { ImSad2 } from "react-icons/im";
import { getSession } from "next-auth/react";
import PlayerHead from "@/components/Dashboard/Player/PlayerHead";
import React from "react";
import { TbTournament } from "react-icons/tb";
import LeftInformation from "@/components/Dashboard/Player/Overview/LeftInformation";
import SimpleStats from "@/components/Dashboard/Player/Overview/SimpleStats";
import Achievement from "@/components/Dashboard/Player/Overview/Achievement";

interface overviewProps {
  user?: any;
  profile?: any;
  session?: any;
  clan?: any;
}

export default function Overview({
  user,
  session,
  profile,
  clan,
}: overviewProps) {
  return (
    <DashRoot title={`Profile ${user?.display}`} user={user}>
      <PlayerHead user={profile} session={session} clanTag={clan[0]?.tag}>
        {profile.private ? (
          <div className="w-[90%] mx-auto mt-10 pb-10 h-[300px]">
            <div className="flex flex-col h-full w-full items-center justify-center">
              <ImSad2 className="text-white text-opacity-50 text-6xl" />
              <span className="text-white text-opacity-50 text-2xl mt-2">
                This profile is private
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-start w-[90%] mx-auto mt-10 pb-10 gap-4">
            <LeftInformation session={session} user={profile} clan={clan} />
            <div className="flex flex-col w-full">
              <SimpleStats user={profile} />
              <Achievement user={profile} />
              <div className="w-full mt-6">
                <div className="bg-secondary w-full flex flex-col py-2 rounded-md">
                  <div className="w-[95%] mx-auto min-h-[420px]">
                    <div className="flex justify-between">
                      <span className="text-white text-xl">
                        TOURNAMENTS & EVENTS
                      </span>
                    </div>
                    <hr className="border-white border-opacity-5 my-2 h-32" />
                    <div className="flex flex-col w-full h-full items-center justify-center gap-2">
                      <TbTournament className="text-gray-500 text-6xl" />
                      <span className="text-white text-opacity-50 text-xl max-w-md text-center">
                        You are not competing in any tournaments or events.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </PlayerHead>
    </DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const session = await getSession({ req: context.req });
  const user = await getUser(`${session?.user?.email}`);
  const users = await getUsers();
  const profile = users.find((u: any) => u.id === id);
  const userClan = await getUserClans(profile);

  if (!profile) return { notFound: true };

  return {
    props: {
      user,
      profile,
      session,
      clan: userClan,
    },
  };
};
