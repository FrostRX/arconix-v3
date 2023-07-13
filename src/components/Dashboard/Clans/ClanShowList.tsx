/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function ClanShowList({ ClansToShow }: { ClansToShow: any[] }) {
  return (
    <div className="w-[90%] mx-auto">
      <span className="text-xl font-medium text-white text-opacity-40 text-center md:text-left">
        CLANS YOU MIGHT LIKE TO JOIN:
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
        {ClansToShow.map((clan, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            key={clan.id}
            className="bg-secondary p-3 relative overflow-hidden flex items-center rounded-md"
          >
            <div className="w-[95%] mx-auto flex flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center hover:opacity-50 duration-200 cursor-pointer">
                  <Link href={`/app/clan/${clan.id}`}>
                    {clan.image ? (
                      <img
                        src={`https://api.arconixstudio.com/api/files/clan/${clan.id}/${clan.image}`}
                        alt={clan.name}
                        className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] object-contain p-1"
                      />
                    ) : (
                      <div className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] flex items-center justify-center">
                        <BsFillPersonFill className="text-white text-opacity-30 text-6xl mx-auto my-auto" />
                      </div>
                    )}
                  </Link>
                  <Link href={`/app/clan/${clan.id}`} className="flex flex-col">
                    <span className="text-white text-opacity-60 text-lg font-bold flex items-center justify-center gap-1">
                      [{clan.tag}] {clan.name}
                      {clan.verified && (
                        <VscVerifiedFilled className="text-yellow-400 text-lg inline-block" />
                      )}
                    </span>
                    <span className="text-white text-opacity-60 text-sm">
                      {clan.members.length} / {clan.max} members
                    </span>
                  </Link>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: clan.desc }}
                  className="text-white text-opacity-60 text-base mt-2 max-w-xl"
                ></div>
              </div>
              <div className="border-t-[1px] border-white border-opacity-5 flex justify-between pt-4 pb-1">
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center">
                    <span className={`text-white text-opacity-60 text-base`}>
                      Lang:
                    </span>
                    <img
                      src={`https://flagcdn.com/${clan.lang}.svg`}
                      alt={clan.lang}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      C
    </div>
  );
}
