import { GetServerSideProps } from "next";

export default function index() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/app/search/players",
      permanent: false,
    },
  };
};
