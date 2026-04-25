import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1 relative">
        <Image
          src=""
          alt="Interior Detail"
          width={600}
          height={400}
          className="w-full rounded-2xl shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500"
        />
      </div>
      <div className="order-1 md:order-2 space-y-8">
        <h3 className="font-[family-name:var(--font-mont)] font-extrabold text-4xl uppercase leading-none">
          The Curator&apos;s
          <br />
          <span className="text-[#f9a825]">Philosophy</span>
        </h3>
        <p className="text-[#524434] font-[family-name:var(--font-jakarta)] leading-relaxed">
          We believe your home should be a reflection of your lived experience—a
          collection of stories, textures, and souls. Metora isn&apos;t just a store;
          it&apos;s a bridge between master craftsmen and discerning homeowners.
        </p>
        <div className="flex gap-12">
          <div>
            <div className="text-3xl font-[family-name:var(--font-mont)] font-bold text-[#835400]">
              1
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#5f5e5e] font-bold">
              Artisan
            </div>
          </div>
          <div>
            <div className="text-3xl font-[family-name:var(--font-mont)] font-bold text-[#835400]">
              1
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#5f5e5e] font-bold">
              Countries
            </div>
          </div>
          <div>
            <div className="text-3xl font-[family-name:var(--font-mont)] font-bold text-[#835400]">
              100%
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#5f5e5e] font-bold">
              Handmade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
