import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Voice_Chat() {
  return (
    <div className="w-full min-h-[454px] bg-secondary flex flex-col md:flex-row justify-center items-center gap-10 p-10 md:p-5 shadow-xl">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          VOICE CHAT
        </h1>
        <br />
        <p className="text-white text-base md:text-lg max-w-xl">
          If you want to voice chat with people you have just met, you can use
          GAMING voice chat or connect and communicate with its various
          platforms.
        </p>
        <br />
        <p className="text-white text-base md:text-lg max-w-xl">
          You don&apos;t have to use voice chat. If you don&apos;t want to, you
          can specify this when searching for friends and you will be matched
          accordingly.
        </p>

        <Link
          href={"/"}
          className="bg-primary text-white px-10 py-3 rounded-md font-bold shadow-xl text-center mt-5 w-full md:w-[fit-content]"
        >
          Sign In & Connect
        </Link>
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
