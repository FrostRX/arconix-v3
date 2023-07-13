import { getUsers } from "@/Utils/user";
import { GetServerSideProps } from "next";

export default function index() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const users = await getUsers();

  const userProfile = users.find((u: any) => u.id === id);

  if (userProfile) {
    return {
      redirect: {
        destination: `/app/player/${id}/overview`,
        permanent: false,
      },
    };
  }

  return {
    notFound: true,
  };
};
