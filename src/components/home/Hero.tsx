import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="h-[78%] w-full flex justify-center relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
        <div className="w-full">
          <Image
            src="/hero.jpg"
            alt="Arconix Hero"
            width={2201}
            height={774}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-5">
          <h1 className="text-white text-5xl font-bold text-center">
            TIRED OF PLAYING ALONE?
          </h1>
          <h2 className="text-white text-2xl font-bold text-center">
            OR YOU JUST WANT REAL COMPETITION
          </h2>

          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <Link
              className="bg-primary text-white px-10 py-3 rounded-md font-bold shadow-xl text-center"
              href={"/"}
            >
              FIND DUO
            </Link>
            <Link
              className="bg-primary text-white px-10 py-3 rounded-md font-bold shadow-xl text-center"
              href={"/"}
            >
              SEE EVENTS
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100%-78%)] shadow-xl bg-secondary">
        <div className="w-[95%] mx-auto flex flex-col justify-center items-center h-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-[80%] mx-auto place-items-center">
            <Image
              src="/riot.png"
              alt="Riot Games"
              width={200}
              height={200}
              className="object-contain w-28"
            />
            <Image
              src="/corsair.png"
              alt="Riot Games"
              width={200}
              height={200}
              className="object-contain w-28"
            />
            <Image
              src="/logitech.png"
              alt="Riot Games"
              width={200}
              height={200}
              className="object-contain w-28"
            />
            <Image
              src="/razer.png"
              alt="Riot Games"
              width={200}
              height={200}
              className="object-contain w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
