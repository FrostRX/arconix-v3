/* eslint-disable @next/next/no-img-element */
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getUser } from "@/Utils/user";
import ShopHeder from "@/components/Dashboard/Shop/ShopHeder";
import { getCategories } from "@/Utils/shop";
import Link from "next/link";
import { motion } from "framer-motion";
import BuyTokens from "@/components/Modals/BuyTokens";
import { useState } from "react";
import { API_URI } from "@/Utils/variables";

type Cat = {
  cover: string;
  name: string;
  url: string;
  validNote?: string;
  subname?: string;
  id: number;
};

interface ShopProps {
  user?: any;
  cat?: Cat[];
}

export default function Shop({ user, cat }: ShopProps) {
  const [toggleToken, setToggleToken] = useState(false);
  return (
    <DashRoot
      user={user}
      title="Shop"
      desc="Make the most of your efforts and achievements by turning them into rewards. Will you spend money on new gaming equipment or will you simply buy something you want? Finishing Events or participating in Tournaments will earn you more coins that you may use in the shop."
    >
      <BuyTokens open={toggleToken} setOpen={setToggleToken} />
      <div className="flex flex-col gap-5 w-full">
        <ShopHeder />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-[90%] mx-auto"
        >
          <div className="bg-secondary w-[332px] h-[428px] rounded-md relative">
            {/* col-span-1 */}
            <div className="w-full h-full justify-between flex flex-col">
              <div>
                <div className={`flex flex-col mt-16`}>
                  <div className="flex justify-center w-full">
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1677840913/Stryda/shop/giftcards/store_stryda_tokens.webp`}
                      alt="Comming Soon"
                      className="h-auto w-4/5 rounded-xl shadow-2xl my-3"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center mt-4">
                  <span className="text-white text-opacity-60 text-2xl font-semibold max-w-[300px] text-center uppercase">
                    Tokens
                  </span>
                </div>
              </div>
              <div className="my-5 flex absolute bottom-0 w-full">
                <button
                  onClick={() => setToggleToken(true)}
                  className="text-white text-opacity-60 text-sm font-semibold border-2 border-white w-[90%] mx-auto px-2 py-2 text-center rounded-full hover:bg-hover hover:text-opacity-100 transition-all"
                >
                  VIEW TOKENS
                </button>
              </div>
            </div>
          </div>
          {cat?.map((c) => (
            <div
              key={c.id}
              className="bg-secondary w-[332px] h-[428px] rounded-md relative"
            >
              <div className="w-full h-full justify-between flex flex-col">
                <div>
                  {c.validNote && (
                    <div className="flex flex-col items-center mt-5">
                      <span className="text-sm text-center text-white text-opacity-60">
                        VALID IN:
                      </span>
                      <span
                        className={`text-sm text-center text-white text-opacity-60`}
                      >
                        {c.validNote}
                      </span>
                    </div>
                  )}
                  <div className={`flex flex-col ${!c.validNote && "mt-5"}`}>
                    <div className="flex justify-center w-full">
                      <img
                        src={`${API_URI}/api/files/shopCategories/${c.id}/${c.cover}`}
                        alt={c.name}
                        className="h-auto w-4/5 rounded-xl shadow-2xl my-3"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <span className="text-white text-3xl font-semibold max-w-[300px] text-center">
                      {c.name}
                    </span>
                    <span className="text-white text-opacity-60 text-xl font-semibold max-w-[300px] text-center">
                      {c.subname}
                    </span>
                  </div>
                </div>
                <div className="my-5 flex absolute bottom-0 w-full">
                  <Link
                    className="text-white text-opacity-60 text-sm font-semibold border-2 border-white w-[90%] mx-auto px-2 py-2 text-center rounded-full hover:bg-hover hover:text-opacity-100 transition-all"
                    href={`/app/shop/${c.url}`}
                  >
                    VIEW {c?.name.toUpperCase()}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  const user = await getUser(`${session?.user?.email}`);
  const cat = await getCategories();

  return {
    props: {
      user,
      cat,
    },
  };
};
