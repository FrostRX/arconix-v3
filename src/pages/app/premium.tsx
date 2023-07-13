import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getUser } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

interface premiumProps {
  user?: any;
}

export default function premium({ user }: premiumProps) {
  return (
    <DashRoot
      user={user}
      title="Premium"
      desc="Get access to exclusive features and benefits by purchasing a premium subscription to the platform."
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
