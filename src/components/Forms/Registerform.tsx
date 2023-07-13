import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

type Inputs = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

export default function Registerform() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();

    if (json.status === 400) {
      toast.error(json.message);
    }

    if (json.status === 200) {
      toast.success("Account created successfully");
      router.push("/login");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="w-full h-screen">
        <div className="w-full h-full flex justify-center flex-col items-center">
          <div className="m-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.webp"
              alt="logo"
              width={200}
              height={200}
              className="w-32"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-6 md:w-[60%] w-full"
          >
            <div className="flex flex-col gap-2 w-[90%] md:w-[40%] relative">
              <label className="text-white text-sm" htmlFor="name">
                Username
              </label>
              <input
                id="name"
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: true,
                  validate: {
                    username: (value) => {
                      if (value.match(/^[a-zA-Z0-9_-]*$/)) {
                        return true;
                      } else {
                        return "Please enter a valid username";
                      }
                    },
                    username2: (value) => {
                      if (value.length > 3 && value.length < 16) {
                        return true;
                      } else {
                        return "Username must be between 4 and 15 characters";
                      }
                    },
                  },
                })}
                className={`bg-secondary py-2 px-4 rounded-md bg-primary-3 text-white shadow-xl w-full outline-none ${
                  errors.username ? "border-red-500 border-opacity-100" : ""
                }`}
              />
              {errors.username && (
                <div className="absolute -bottom-6">
                  <span className="text-red-500 text-xs">
                    {errors.username.message || "This field is required"}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[90%] md:w-[40%] relative">
              <label className="text-white text-sm" htmlFor="name">
                Email
              </label>
              <input
                id="name"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  validate: {
                    email: (value) => {
                      if (value.includes("@")) {
                        return true;
                      } else {
                        return "Please enter a valid email";
                      }
                    },
                    email2: (value) => {
                      if (value.includes(".")) {
                        return true;
                      } else {
                        return "Please enter a valid email";
                      }
                    },
                  },
                })}
                className={`bg-secondary py-2 px-4 rounded-md bg-primary-3 text-white shadow-xl w-full outline-none ${
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

            <div className="flex flex-col gap-2 w-[90%] md:w-[40%] relative">
              <label className="text-white text-sm" htmlFor="name">
                Password
              </label>

              <div
                className={`bg-secondary rounded-md bg-primary-3 text-white shadow-xl w-full flex justify-between overflow-hidden 
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

            <div className="flex flex-col gap-2 w-[90%] md:w-[40%] relative items-center">
              <button
                type="submit"
                className="py-2 px-4 rounded-md bg-primary text-white shadow-xl w-full outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Login
              </button>
              <span className="text-white text-sm cursor-pointer">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline">
                  Login
                </Link>
              </span>
            </div>
          </form>
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
