"use client";
import LogoMd from "@/components/Logo/LogoMd";
import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UserRegisterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      {/* login middle div */}
      <div className="flex w-full max-w-300 min-h-200 bg-white rounded-[40px] overflow-hidden shadow-2xl">
        {/* left  Side main form*/}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between bg-white">
          {/* logo */}
          <div className="flex items-center justify-center mb-2">
            <LogoMd />
          </div>
          {/* header */}
          <div className="text-center mb-5">
            <h2 className="text-4xl font-[family-name:var(--font-mont)] mb-1">
              Create an Account
            </h2>
          </div>
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 max-w-sm mx-auto w-full"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold font-[family-name:var(--font-mont)]">
                  Name
                </span>
              </label>
              <input
                type="name"
                placeholder="Enter your full name"
                className={`input input-bordered w-full bg-[#F5F7FB] focus:bg-white transition-all outline-none${
                  errors.email ? "input-error" : ""
                }`}
                {...register("name", { required: "Name is required" })}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold font-[family-name:var(--font-mont)]">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`input input-bordered w-full bg-[#F5F7FB] focus:bg-white transition-all outline-none${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold font-[family-name:var(--font-mont)]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={isOpen ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`input input-bordered w-full bg-slate-50 focus:bg-white transition-all pr-10 ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400"
                >
                  {isOpen ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <button className="w-full bg-[#f9a825] text-[#424242] hover:text-white font-[family-name:var(--font-mont)] font-bold uppercase tracking-widest text-md py-5 rounded-md hover:brightness-110 transition-all duration-200">
                Register
              </button>

              {/* Social Media Button */}
            </div>
          </form>
          {/* Footer */}
          <p className="text-center text-md text-gray-500 mt-8 font-[family-name:var(--font-mont)]">
            Already have an account?{" "}
            <Link
              href="/login"
              className=" font-bold hover:underline text-[#f9a825]"
            >
              Login
            </Link>
          </p>
        </div>
        {/* Right side Image visual and quote */}
        <div className="hidden lg:flex relative w-1/2 p-16 flex-col justify-between overflow-hidden bg-black text-white">
          {/* BG Image Wrapper */}
          <Image
            src="/images/empty-white-room-interior-design-with-blank-frames.jpg"
            alt="Metora Decor Login Page"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Content OverLay */}
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.2rem] uppercase opacity-70">
                Metora Decor
              </span>
              <div className="h-px w-12 bg-white opacity-30 "></div>
            </div>
          </div>
          <div className="relative z-10 max-w-md">
            <h1 className="text-7xl font-[family-name:var(--font-aurore)] leading-tight mb-6">
              Decor That Defines You
            </h1>
            <p className="text-lg opacity-80 font-[family-name:var(--font-mont)] leading-relaxed">
              Metora Decor specializes in custom wall art, offering unique
              pieces that reflect your personality through high-quality,
              personalized home accents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterPage;
