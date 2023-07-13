import Registerform from "@/components/Forms/Registerform";
import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function index() {
  return (
    <div className="flex justify-center items-center">
      <Registerform />
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
