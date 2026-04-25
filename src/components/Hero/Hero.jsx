import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-40 pb-24 md:py-48 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 space-y-8">
        <h1 className="font-[family-name:var(--font-mont)] font-bold text-5xl md:text-[56px] leading-[1.1] uppercase tracking-[0.05em] text-[#1b1c1a]">
          THE ART OF LIVING
        </h1>
        <p className="text-[#5f5e5e] text-lg md:text-xl leading-[1.6] max-w-md font-[family-name:var(--font-jakarta)]">
          Curating timeless elegance for the modern sanctuary. Discover
          handcrafted pieces that define your space and soul.
        </p>
        <div className="pt-4">
          <button className="bg-gradient-to-r from-[#f9a825] to-[#835400] text-white font-[family-name:var(--font-mont)] font-bold px-10 py-5 rounded-full hover:shadow-[0_0_20px_rgba(249,168,37,0.3)] transition-all duration-300 uppercase tracking-widest text-sm">
            Explore Shop
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -top-10 -left-10 w-full h-full bg-[#efeeea] rounded-lg -z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000"
          alt="Luxury interior decor"
          width={600}
          height={750}
          className="w-full aspect-[4/5] object-cover rounded-lg shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
