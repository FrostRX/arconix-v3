/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

interface InfoHeaderProps {
  title: string;
  desc: string;
  img: string;
}

export default function InfoHeader({ title, desc, img }: InfoHeaderProps) {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto mt-10">
        <div className="bg-secondary h-[250px] md:h-[224px] p-3 relative overflow-hidden">
          <div className="absolute inset-0 z-[6] backdrop-blur-sm md:bg-gradient-to-r from-secondary via-secondary to-black/80"></div>
          <div className="w-[95%] mx-auto flex-col flex justify-center h-full gap-2 absolute inset-0 z-[7]">
            <h1 className="text-6xl font-bold text-white uppercase text-center md:text-left">
              {title}
            </h1>
            <p className="text-white text-base text-opacity-60 max-w-xl text-center md:text-left">
              {desc}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex absolute inset-0 filter"
          >
            <img
              src={img}
              alt="Shop background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
