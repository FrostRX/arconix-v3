import React from "react";
import { MdToken } from "react-icons/md";
import { motion } from "framer-motion";

interface BuyTokensProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BuyTokens({ open, setOpen }: BuyTokensProps) {
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={
            "fixed inset-0 w-full min-h-screen bg-opacity-80 bg-background backdrop-blur-sm justify-center py-10 md:items-center z-[100] flex overflow-y-auto"
          }
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl text-white">Buy tokens</h1>
                <button className="text-white text-opacity-50 hover:text-opacity-100 hover:bg-tertiary px-3 py-1 rounded-full flex items-center justify-center relative group/button">
                  <span onClick={() => setOpen(false)} className="text-sm">
                    Close
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
                <div className="w-[314px] h-[382px] bg-secondary relative rounded-md flex flex-col justify-center items-center p-2">
                  <div className="flex flex-col items-center text-white gap-[2px]">
                    <MdToken className="text-current text-8xl" />
                    <span className="text-xl uppercase">400 tokens</span>
                    <span className="text-lg text-white text-opacity-70">
                      4.49 €
                    </span>
                  </div>
                  <div className="absolute bottom-0 w-full flex flex-col gap-3">
                    <hr className="border-white border-opacity-5" />
                    <div className="h-12 w-[90%] mx-auto">
                      <button className="w-full h-9 px-4 py-2 rounded-full mx-auto border border-white text-white text-opacity-50 hover:text-opacity-100 hover:bg-tertiary flex items-center justify-center relative group/button">
                        Buy
                        <div className="h-full flex items-center border-white border px-3 rounded-full absolute right-0 border-opacity-50 text-white text-opacity-50 bg-secondary">
                          <span className="text-primary text-sm font-semibold">
                            4.49 €
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-[314px] h-[382px] bg-secondary relative rounded-md flex flex-col justify-center items-center p-2 border-4 border-primary">
                  <div className="absolute top-0 w-full h-7 bg-primary flex items-center justify-center">
                    <span className="text-white text-xs uppercase text-center">
                      Most Popular
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-white gap-[2px]">
                    <MdToken className="text-current text-8xl" />
                    <span className="text-xl uppercase">800 tokens</span>
                    <div className="flex gap-2">
                      <span className="text-lg text-white text-opacity-50 line-through">
                        8.99 €
                      </span>
                      <span className="text-lg text-primary font-semibold">
                        7.99 €
                      </span>
                    </div>
                    <span className="text-sm text-white text-opacity-70">
                      SAVE 11%
                    </span>
                  </div>
                  <div className="absolute bottom-0 w-full flex flex-col gap-3">
                    <hr className="border-white border-opacity-5" />
                    <div className="h-12 w-[90%] mx-auto">
                      <button className="w-full h-9 px-4 py-2 rounded-full mx-auto border border-white text-white text-opacity-50 hover:text-opacity-100 hover:bg-tertiary flex items-center justify-center relative group/button">
                        Buy
                        <div className="h-full flex items-center border-white border px-3 rounded-full absolute right-0 border-opacity-50 text-white text-opacity-50 bg-secondary">
                          <span className="text-primary text-sm font-semibold">
                            7.99 €
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-[314px] h-[382px] bg-secondary relative rounded-md flex flex-col justify-center items-center p-2 border-4 border-tertiary">
                  <div className="absolute top-0 w-full h-7 bg-tertiary flex items-center justify-center">
                    <span className="text-primary text-xs uppercase text-center font-semibold">
                      Best value
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-white gap-[2px]">
                    <MdToken className="text-current text-8xl" />
                    <span className="text-xl uppercase">2000 tokens</span>
                    <div className="flex gap-2">
                      <span className="text-lg text-white text-opacity-50 line-through">
                        22.49 €
                      </span>
                      <span className="text-lg text-primary font-semibold">
                        18.49 €
                      </span>
                    </div>
                    <span className="text-sm text-white text-opacity-70">
                      SAVE 17%
                    </span>
                  </div>
                  <div className="absolute bottom-0 w-full flex flex-col gap-3">
                    <hr className="border-white border-opacity-5" />
                    <div className="h-12 w-[90%] mx-auto">
                      <button className="w-full h-9 px-4 py-2 rounded-full mx-auto border border-white text-white text-opacity-50 hover:text-opacity-100 hover:bg-tertiary flex items-center justify-center relative group/button">
                        Buy
                        <div className="h-full flex items-center border-white border px-3 rounded-full absolute right-0 border-opacity-50 text-white text-opacity-50 bg-secondary">
                          <span className="text-primary text-sm font-semibold">
                            18.49 €
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
