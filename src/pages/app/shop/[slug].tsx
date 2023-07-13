/* eslint-disable @next/next/no-img-element */
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import InfoHeader from "@/components/Dashboard/Other/InfoHeader";
import { getProduct } from "@/Utils/shop";
import { getUser } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiInformationCircle } from "react-icons/hi";

interface Props {
  user?: any;
  prd?: any;
  cat?: any;
}

export default function Item({ user, prd, cat }: Props) {
  return (
    <DashRoot
      user={user}
      title="Shop"
      desc="Make the most of your efforts and achievements by turning them into rewards. Will you spend money on new gaming equipment or will you simply buy something you want? Finishing Events or participating in Tournaments will earn you more coins that you may use in the shop."
    >
      <div className="flex flex-col gap-5 w-full">
        <InfoHeader title="SHOP" desc="" img="/dash/shop/Shop_bg.webp" />
        {cat.alert && (
          <div className="w-[90%] mx-auto bg-orange-400 min-h-[56px] py-2 rounded-md flex items-center px-3 gap-2">
            <HiInformationCircle size={30} className="md:flex hidden" />
            <div className="flex flex-col md:leading-4">
              <span className="font-bold">PLEASE NOTE</span>
              <span className="font-medium leading-tight">{cat.alert}</span>
            </div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto place-items-center md:place-items-start"
        >
          {prd?.map((item: any) => (
            <div
              key={item.id}
              className="bg-secondary w-[332px] h-[428px] rounded-md relative"
            >
              <div className="w-full h-full justify-between flex flex-col mt-10">
                <div>
                  <div className="flex justify-center w-full">
                    <img
                      src={`https://api.arconixstudio.com/api/files/shopCategories/${cat.id}/${cat.cover}`}
                      alt={item.name}
                      className="h-auto w-4/5 rounded-xl shadow-2xl my-3"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <span className="text-white text-3xl font-semibold max-w-[300px] text-center">
                      {item.name}
                    </span>
                    <span className="text-white text-opacity-60 text-2xl font-semibold max-w-[300px] text-center">
                      {item.subname}
                    </span>
                  </div>
                </div>
                <div className="my-5 flex absolute bottom-0 w-full">
                  <button
                    disabled={item.price > user?.coins}
                    className="text-white text-opacity-60 text-sm font-semibold border-2 border-white w-[90%] mx-auto px-2 py-2 text-center rounded-full hover:bg-hover hover:text-opacity-100 transition-all uppercase flex items-center justify-start relative
                    disabled:cursor-not-allowed disabled:bg-[#272739] disabled:border-0 disabled:hover:text-opacity-60
                    "
                  >
                    <div>
                      <span className="text-base ml-5">Purchase</span>
                    </div>
                    <div className="absolute right-1 bg-background/80 h-[80%] items-center flex min-w-[64px] px-2 justify-center rounded-full">
                      <span className="whitespace-nowrap inline-flex gap-1 items-center text-yellow-500">
                        <FaCoins className="text-opacity-60 text-sm" />
                        {item.price}
                      </span>
                    </div>
                  </button>
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
  const { slug } = context.params!;
  const session = await getSession({ req: context.req });
  const user = await getUser(`${session?.user?.email}`);

  try {
    const { products, category } = await getProduct({
      categoryLink: slug as string,
    });
    return {
      props: {
        user,
        prd: products,
        cat: category,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
