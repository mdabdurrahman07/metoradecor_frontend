// import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-24 border-y border-[#d7c3ae]/30">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="font-[family-name:var(--font-mont)] font-bold text-[10px] uppercase tracking-[0.3em] text-center mb-16 text-[#5f5e5e]">
          Our Curated Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {[1, 2, 3, 4, 5].map((p) => (
            <div
              key={p}
              className="h-8 w-24 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            >
              {/* <Image
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Partner"
                fill
                className="object-contain"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
