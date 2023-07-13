import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { signIn } from "next-auth/react";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

export default function Loginform() {
  const [showPassword, setShowPassword] = useState(false);
  const [sendemail, setSendemail] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (sendemail) {
      console.log(data);
    } else {
      setLoading(true);
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/app",
      }).then((res) => {
        if (res?.error) {
          setLoading(false);
        }
      });
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full flex justify-center flex-col items-center">
          <div className="mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.webp"
              alt="logo"
              width={200}
              height={200}
              className="w-32"
            />
          </div>
          {sendemail ? (
            <>
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                <div className="flex flex-col justify-center items-center ">
                  <LuMailPlus className="text-white text-6xl" />
                  <span className="text-white text-xl mt-2">
                    Enter your email to send a reset link
                  </span>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center items-center gap-4 w-[30%]"
                >
                  <div className="w-full">
                    <input
                      id="name"
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: true })}
                      className={`bg-secondary py-2 px-4 rounded-md bg-primary-3 text-white border-opacity-20 shadow-xl w-full outline-none ${
                        errors.email ? "border-red-500 border-opacity-100" : ""
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-4 rounded-md bg-primary text-white shadow-xl outline-none w-full"
                  >
                    Send email
                  </button>
                </form>
              </div>
            </>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center gap-4 w-[60%]"
            >
              <div className="flex flex-col gap-2 w-[40%] relative">
                <label className="text-white text-sm" htmlFor="name">
                  Name or email
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name or email"
                  {...register("email", { required: true })}
                  className={`bg-secondary py-2 px-4 rounded-md bg-primary-3 text-white border-opacity-20 shadow-xl w-full outline-none ${
                    errors.email ? "border-red-500 border-opacity-100" : ""
                  }`}
                />
                {errors.email && (
                  <div className="absolute -bottom-6">
                    <span className="text-red-500 text-xs">
                      {errors.email.message || "This field is required"}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 w-[40%] relative">
                <div>
                  <label className="text-white text-sm" htmlFor="name">
                    Password
                  </label>
                  <span
                    className="text-white text-opacity-50 text-sm float-right cursor-pointer"
                    onClick={() => setSendemail(true)}
                  >
                    Forgot password?
                  </span>
                </div>
                <div
                  className={`rounded-md bg-primary-3 text-white border-opacity-20 shadow-xl w-full flex justify-between bg-secondary
                ${errors.password ? "border-red-500 border-opacity-100" : ""}
                `}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className={`py-2 px-4 outline-none bg-primary-3 w-full rounded-md bg-secondary ${
                      errors.password ? "border-red-500 border-opacity-100" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-16 flex justify-center items-center"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash className="text-white text-opacity-70 text-xl" />
                    ) : (
                      <FaRegEye className="text-white text-opacity-70 text-xl" />
                    )}
                  </button>
                  {errors.password && (
                    <div className="absolute -bottom-6">
                      <span className="text-red-500 text-xs">
                        {errors.password.message || "This field is required"}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {loading ? (
                <div className="py-2 px-4 rounded-md bg-primary/80 text-white shadow-xl w-[40%] outline-none mt-4 h-10 flex justify-center items-center">
                  <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="py-2 px-4 rounded-md bg-primary text-white shadow-xl w-[40%] outline-none mt-4"
                >
                  Login
                </button>
              )}

              <div className="flex gap-2 text-white">
                <span className="text-white text-sm">
                  Don&lsquo;t have an account?{" "}
                  <Link href={"/register"} className="text-primary underline">
                    Register
                  </Link>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="h-screen shadow-xl w-[50%] hidden md:flex">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-screen bg-primary"
        >
          <div className="flex justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              className="w-[80%] gap-5 flex flex-col justify-center items-center"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl text-white w-[50%] font-black">
                    EVERY ROUND COUNTS
                  </h1>
                </div>
                <div className="text-xl flex flex-col justify-center w-[50%] items-start mx-auto px-2 border-l-4 leading-7">
                  <p className="text-white text-left">
                    Innovative Competitions
                  </p>
                  <p className="text-white text-left">
                    Play and get rewarded Discover communities
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
