/* eslint-disable @next/next/no-img-element */
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getUser } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import { motion } from "framer-motion";
import WalletHeader from "@/components/Dashboard/Wallet/WalletHeader";
import WalletLinks from "@/components/Dashboard/Wallet/WalletLinks";
import WalletCards from "@/components/Dashboard/Wallet/WalletCards";

interface WalletProps {
  user?: any;
}

export default function Wallet({ user }: WalletProps) {
  return (
    <DashRoot
      user={user}
      title="Wallet"
      desc="Get access to exclusive features and benefits by purchasing a premium subscription to the platform."
    >
      <WalletHeader />
      <WalletLinks />
      <WalletCards />
    </DashRoot>
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
