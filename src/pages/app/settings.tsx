/* eslint-disable @next/next/no-img-element */
import { User } from "@/common.types";
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getUser } from "@/Utils/user";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface settingsProps {
  user?: User;
}

export default function Settings({ user }: settingsProps) {
  const [infoCountry, setInfoCountry] = React.useState(false);
  return (
    <DashRoot
      user={user}
      title="Settings"
      desc="Get access to exclusive features and benefits by purchasing a premium subscription to the platform."
    >
      <div className="w-full">
        <div className="mt-24 md:mt-20 w-[90%] mx-auto bg-secondary relative border-t-[1px] border-primary flex justify-center flex-col">
          <div className="flex w-full justify-center">
            <div className="absolute -top-10">
              <div className="w-[100px] h-[100px] rounded-full relative flex justify-center items-center z-[2]">
                {user?.avatar ? (
                  <>
                    <img
                      src={`https://api.arconixstudio.com/api/files/users/${user.id}/${user.avatar}`}
                      alt={`${user?.display} profile picture`}
                      className="w-full h-full object-cover"
                    />
                    <div className="w-[115%] absolute h-[115%] bg-transparent border-4 border-white border-opacity-50 rounded-full flex justify-center"></div>
                  </>
                ) : (
                  <div className="w-[100px] h-[100px] rounded-full bg-primary relative flex justify-center items-center">
                    <div className="w-[115%] absolute h-[115%] bg-transparent border-4 border-white border-opacity-50 rounded-full flex justify-center"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 mt-16">
            <div className="w-[95%] md:w-[70%] mx-auto">
              <div>
                <span className="text-xl font-semibold text-white">
                  MY DETAILS
                </span>
              </div>
              <div className="flex flex-col mt-5 gap-5">
                <div className="flex flex-col leading-[5px]">
                  <label htmlFor="name" className="text-white font-semibold">
                    Username
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-tertiary border-b-[1px] border-primary text-white outline-none mt-5 p-2 rounded-md text-base"
                    defaultValue={user?.display}
                  />
                </div>
                <div className="flex flex-col leading-[5px]">
                  <label htmlFor="email" className="text-white font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="w-full bg-tertiary border-b-[1px] border-primary text-white outline-none mt-5 p-2 rounded-md text-base"
                    defaultValue={user?.email}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center mt-5">
                <span className="text-white font-semibold cursor-pointer">
                  ARCONIX ID{" "}
                  <span
                    onClick={() =>
                      navigator.clipboard.writeText(`#${user?.id}`)
                    }
                    className="bg-tertiary text-white text-opacity-50 select-all p-1"
                  >
                    #{user?.id}
                  </span>
                </span>
                <button className="bg-transparent py-1 px-2 border border-primary rounded-full text-white font-semibold hover:bg-primary hover:text-secondary transition-all duration-300 w-full md:w-auto">
                  Change Password
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold text-white mt-5">Country</span>
                <div className="bg-transparent rounded-md w-full h-10 border border-white border-opacity-5 flex items-center justify-center relative">
                  {user?.country ? (
                    <div className="select-none flex items-center gap-2">
                      <span className="text-white font-semibold flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/${user?.country
                            .split(",")[1]
                            .trim()
                            .toLowerCase()}.svg`}
                          alt={`${user?.country.split(",")[0]} flag`}
                          className="rounded-sm w-6 h-4"
                        />
                        {user?.country.split(",")[0]}
                      </span>
                      <span
                        onMouseLeave={() => setInfoCountry(false)}
                        onMouseEnter={() => setInfoCountry(true)}
                        className="cursor-pointer"
                      >
                        <BsFillInfoCircleFill className="text-white text-opacity-40 text-sm" />
                      </span>
                      {infoCountry && (
                        <div className="absolute top-10 bg-tertiary rounded-md p-2 text-white text-sm overflow-hidden">
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            Contact support to change your country.
                          </motion.span>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div>{/* TODO: El otro lado */}</div>
          </div>
        </div>
      </div>
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
