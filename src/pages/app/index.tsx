import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getUser } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

export default function Dashboard({ user }: { user: any }) {
  return (
    <DashRoot
      user={user}
      title="Home"
      desc="On the dashboard you can see your profile, your earnings, your referrals and much more. You can also withdraw your earnings to your PayPal account. And participate in tournaments and events."
    ></DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  const user = await getUser(`${session?.user?.email}`);

  return {
    props: {
      user,
    },
  };
};
