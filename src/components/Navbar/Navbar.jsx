"use client";

import { useState } from "react";
import AuthButton from "../Buttons/AuthButton/AuthButton";
import NavLink from "../Buttons/NavLink/NavLink";
import { Menu, ShoppingCart, X } from "lucide-react";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = true;

  const nav = (
    <>
      <NavLink href="/" navName="Home" />
      <NavLink href="/products" navName="Products" />
      <NavLink href="/about_us" navName="About Us" />
      <NavLink href="/contact" navName="Contact" />
    </>
  );

  return (
    <section className="fixed top-0 w-full z-50 bg-[#fbf9f5]/80 backdrop-blur-xl transition-colors duration-500 border-b border-[#000000]/5">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        {/* <div className="text-2xl font-black uppercase tracking-widest text-[#424242] font-[family-name:var(--font-mont)]">
          METORA
        </div> */}
        <div>
          <Logo/>
        </div>

        <div className="hidden md:flex items-center space-x-12">{nav}</div>

        <div className="flex items-center space-x-6">
          {/* cart button */}
          <button className="text-[#424242] hover:text-[#f9a825] transition-all scale-95 duration-200">
            <ShoppingCart />
          </button>

          {/* mobile X icon */}
          <button
            className="md:hidden text-[#424242]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? <X /> : <Menu />}</span>
          </button>
          {/* login button */}
          <AuthButton user={user} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fbf9f5] border-t border-[#000000]/5 p-6 space-y-4 flex flex-col items-center">
          {nav}
        </div>
      )}
    </section>
  );
}
