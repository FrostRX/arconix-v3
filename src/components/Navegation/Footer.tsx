/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsDiscord, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full h-[400px] flex flex-col justify-center items-center text-white text-opacity-40 border-b-8 border-primary">
      <div className="flex flex-col items-center mb-5">
        <div>
          <img
            src="/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain w-16"
          />
        </div>
        <div className="flex items-center gap-5 mt-8">
          <Link href={"https://www.twitch.tv/"}>
            <BsTwitch className="text-xl hover:text-primary duration-300" />
          </Link>
          <Link href={"https://discord.com/"}>
            <BsDiscord className="text-xl hover:text-primary duration-300" />
          </Link>
          <Link href={"https://twitter.com/"}>
            <BsTwitter className="text-xl hover:text-primary duration-300" />
          </Link>
          <Link href={"https://www.youtube.com/"}>
            <BsYoutube className="text-xl hover:text-primary duration-300" />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-4 mb-3">
          <Link
            href={"/"}
            className="text-xs md:text-base hover:text-primary duration-300"
          >
            Terms of Use
          </Link>
          <Link
            href={"/"}
            className="text-xs md:text-base hover:text-primary duration-300"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-xs md:text-base">
          © 2021 Gaming. All rights reserved.
        </p>
      </div>
    </div>
  );
}
