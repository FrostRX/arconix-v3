import Image from "next/image";
import React from "react";

export default function SectionGame() {
  return (
    <div className="w-full min-h-[454px] bg-secondary flex flex-col md:flex-row justify-center items-center gap-10 p-10 md:p-5 shadow-xl">
      <div className="flex flex-col gap-16">
        <h1 className="text-white text-3xl md:text-5xl font-semibold uppercase max-w-md">
          Start and win the game
        </h1>
        <p className="text-white text-opacity-40 text-xs md:text-lg max-w-xl">
          Are you ready to enter into an unusual competition with its unique
          matchmaking system. Feel the competition and win prizes
        </p>
      </div>
      <div>
        <Image
          src="/voice_chat.png"
          alt="Voice Chat"
          width={500}
          height={500}
          className="object-contain w-[100%]"
        />
      </div>
    </div>
  );
}
