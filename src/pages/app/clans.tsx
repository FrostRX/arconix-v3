/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import Createclan from "@/components/Modals/Createclan";
import ClansHeader from "@/components/Dashboard/Clans/ClansHeader";
import ClanShowList from "@/components/Dashboard/Clans/ClanShowList";
import ClanPanelsOptions from "@/components/Dashboard/Clans/ClanPanelsOptions";
import { getClans, getUser } from "@/Utils/user";
import { Clan, User } from "@/common.types";

interface dashboardProps {
  user?: User;
  clans: Clan[];
}

export default function Clans({ user = {} as User, clans }: dashboardProps) {
  const ClansToShow = clans.slice(0, 5);

  return (
    <DashRoot
      user={user}
      title="Clans"
      desc="On the dashboard you can see your profile, your earnings, your referrals and much more. You can also withdraw your earnings to your PayPal account. And participate in tournaments and events."
    >
      <Createclan user={user} clan={clans} />
      <div className="w-full flex flex-col gap-10 py-10">
        <ClansHeader />
        <ClanShowList ClansToShow={ClansToShow} />
        <ClanPanelsOptions />
      </div>
    </DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const { email } = session?.user || {};
  const user = await getUser(email!);
  const clans = await getClans();

  return {
    props: {
      user,
      clans,
    },
  };
};
