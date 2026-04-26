import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import React from "react";

const UserLogin = () => {
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
            <Logo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
