/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-5 fixed left-0 right-0 top-0 z-20 h-20 ${
        scroll &&
        "bg-primary-2 backdrop-blur-md bg-opacity-40 transition-all duration-300 ease-in-out"
      }`}
    >
      <div
        className={`flex justify-between items-center ${
          scroll ? "w-[80%]" : "w-[95%]"
        } mx-auto transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center gap-10">
          <div>
            <img
              src="/logo.webp"
              alt="logo"
              width={128}
              height={77}
              className="w-14"
            />
          </div>
          <ul className="uppercase hidden gap-8 text-white md:flex font-medium">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/how-it-works"}>How it works</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <Link
              className="bg-primary text-white px-5 py-2 rounded-md font-bold shadow-xl text-center"
              href={"/login"}
            >
              Login
            </Link>
          </div>
          <div className="cursor-pointer">
            <BsGlobe className="text-white text-lg" />
          </div>
        </div>
      </div>
    </nav>
  );
}
