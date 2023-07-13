import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import SimpleStats from "@/components/Dashboard/Player/Overview/SimpleStats";
import PlayerHead from "@/components/Dashboard/Player/PlayerHead";
import { getUser, getUsers } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

interface overviewProps {
  user?: any;
  profile?: any;
  session?: any;
}
export default function Stats({ user, session, profile }: overviewProps) {
  return (
    <DashRoot title={`Profile ${user?.display}`} user={user}>
      <PlayerHead user={profile} session={session}>
        <div className="w-full mt-10">
          <div className="w-[90%] mx-auto">
            <SimpleStats user={profile} />
          </div>
        </div>
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

  return {
    props: {
      user,
      profile,
      session,
    },
  };
};
