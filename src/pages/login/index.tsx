import type { GetServerSideProps } from "next";
import Loginform from "@/components/Forms/Loginform";
import React from "react";
import { getSession } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <Loginform />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
