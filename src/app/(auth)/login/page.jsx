"use client"
import LogoMd from "@/components/Logo/LogoMd";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";


const UserLogin = () => {
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
        {/* left side Image visual and quote */}
        <div className="hidden lg:flex relative w-1/2 p-16 flex-col justify-between overflow-hidden bg-black text-white">
          {/* BG Image Wrapper */}
          <Image
            src="/images/chic-empty-room-authentic-interior-design.jpg"
            alt="Metora Decor Login Page"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Content OverLay */}
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.2rem] uppercase opacity-70">
                A Wise Quote
              </span>
              <div className="h-px w-12 bg-white opacity-30 "></div>
            </div>
          </div>
          <div className="relative z-10 max-w-md">
            <h1 className="text-7xl font-[family-name:var(--font-aurore)] leading-tight mb-6">
              Get Everything You Want
            </h1>
            <p className="text-lg opacity-80 font-[family-name:var(--font-mont)] leading-relaxed">
              You can get everything you want if you work hard, trust the
              process, and stick to the plan.
            </p>
          </div>
        </div>
        {/* Right Side main form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between bg-white">
          {/* logo */}
          <div className="flex items-center justify-center mb-8">
            <LogoMd />
          </div>
          {/* header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-[family-name:var(--font-mont)] mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-sm font-[family-name:var(--font-mont)]">
              Enter your email and password to access your account
            </p>
          </div>
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-md mx-auto w-full"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold font-[family-name:var(--font-mont)]">Email</span>
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
                <span className="label-text font-semibold font-[family-name:var(--font-mont)]">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className={`input input-bordered w-full bg-slate-50 focus:bg-white transition-all pr-10 ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* <div className="flex items-center justify-between text-sm">
              <label className="label cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded"
                />
                <span className="label-text">Remember me</span>
              </label>
              <a href="#" className="link link-hover font-medium">
                Forgot Password
              </a>
            </div> */}

            <div className="space-y-4 pt-4">
              <button className="w-full bg-[#f9a825] text-[#424242] font-[family-name:var(--font-mont)] font-bold uppercase tracking-widest text-xs py-5 rounded-md hover:brightness-110 transition-all">
              Login
            </button>

              {/* <button
                type="button"
                className="btn btn-block btn-outline border-gray-200 hover:bg-gray-50 hover:text-black rounded-xl h-12 flex gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign In with Google
              </button> */}
            </div>
          </form>
          {/* Footer */}
          <p className="text-center text-md text-gray-500 mt-8 font-[family-name:var(--font-mont)]">
            Don&apos;t have an account? <Link href="/register" className=" font-bold hover:underline text-[#f9a825]">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
