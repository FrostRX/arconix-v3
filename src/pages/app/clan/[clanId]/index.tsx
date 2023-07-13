import { Clan, User } from "@/common.types";
import { getClans, getUser, getUserClans } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function index() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clanid = context.params?.clanId;
  const clans: Clan[] = await getClans();
  const session = await getSession({ req: context.req });
  const user: User = await getUser(`${session?.user?.email}`);
  const userClans: Clan[] = await getUserClans(user);

  if (!clans.find((clan) => clan.id === clanid)) {
    return {
      redirect: {
        destination: `/app/clans`,
        permanent: false,
      },
    };
  }

  if (!userClans.find((clan) => clan.id === clanid)) {
    return {
      redirect: {
        destination: `/app/clan/${clanid}/about`,
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/app/clan/${clanid}/chat`,
        permanent: false,
      },
    };
  }
};
