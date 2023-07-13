import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Layout from "@/components/Navegation/Layout";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  user?: any;
  title?: string;
  desc?: string;
}

export default function DashRoot({ children, user, title, desc }: Props) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <Layout
      title={`${title} | Arconix`}
      desc={`${desc}`}
      url="https://arconix.gg/app"
      author="ByFrXst"
    >
      <div className="flex">
        <div className="lg:w-72">
          {toggleNavbar && (
            <div className="bg-black bg-opacity-60 fixed inset-0 z-[60] w-full h-screen backdrop-blur-sm"></div>
          )}
          <Sidebar
            toggle={toggleNavbar}
            func={handleToggleNavbar}
            user={user}
          />
        </div>
        <main className="flex flex-col w-full min-h-screen items-center">
          <div className="sticky w-full top-0 z-50">
            <Navbar toggle={handleToggleNavbar} user={user} />
          </div>
          <div className="flex flex-col items-center w-full min-h-screen">
            {children}
          </div>
        </main>
      </div>
    </Layout>
  );
}
