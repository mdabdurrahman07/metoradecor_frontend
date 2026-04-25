"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f5]/80 backdrop-blur-xl transition-colors duration-500">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black uppercase tracking-widest text-[#424242] font-display">
          METORA
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          <a
            className="font-display font-bold uppercase tracking-[0.05em] text-sm text-[#835400] border-b-2 border-[#f9a825] pb-1"
            href="#"
          >
            Collections
          </a>
          <a
            className="font-display font-bold uppercase tracking-[0.05em] text-sm text-[#424242] hover:text-[#f9a825] transition-all duration-300"
            href="#"
          >
            Artisans
          </a>
          <a
            className="font-display font-bold uppercase tracking-[0.05em] text-sm text-[#424242] hover:text-[#f9a825] transition-all duration-300"
            href="#"
          >
            About Us
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-[#424242] hover:text-[#f9a825] transition-all scale-95 duration-200">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#424242]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t p-6 space-y-4 flex flex-col items-center animate-fadeIn">
          <a className="font-display font-bold uppercase text-sm" href="#">
            Collections
          </a>
          <a className="font-display font-bold uppercase text-sm" href="#">
            Artisans
          </a>
          <a className="font-display font-bold uppercase text-sm" href="#">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
}
