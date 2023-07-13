import Footer from "@/components/Navegation/Footer";
import Navbar from "@/components/Navegation/Navbar";
import Game_List from "@/components/home/Game_List";
import Hero from "@/components/home/Hero";
import SectionGame from "@/components/home/SectionGame";
import Stats from "@/components/home/Stats";
import Voice_Chat from "@/components/home/Voice_Chat";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Voice_Chat />
      <Game_List />
      <SectionGame />
      <Stats />
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/app",
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
