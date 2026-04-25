import Image from "next/image";

export default function Artisan() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row bg-[#424242] rounded-3xl overflow-hidden shadow-2xl">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-6">
          <span className="font-[family-name:var(--font-aurore)] text-[#f9a825] text-3xl md:text-4xl">
            Featured Artisan
          </span>
          <h2 className="font-[family-name:var(--font-mont)] font-bold text-white text-4xl uppercase tracking-tighter">
            Junayed Hasan
          </h2>
          <p className="text-[#e4e2de]/80 leading-[1.6] text-lg font-[family-name:var(--font-jakarta)]">
            Working from her studio in the Italian Alps, Elara fuses ancient
            glass-blowing techniques with radical contemporary forms.
          </p>
          <div className="pt-6">
            <a
              className="text-[#f9a825] font-[family-name:var(--font-mont)] font-bold uppercase tracking-widest text-xs border-b border-[#f9a825]/30 pb-2 hover:border-[#f9a825] transition-all"
              href="#"
            >
              View His Collection
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-96 md:h-auto relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000"
            alt="Artisan at work"
            fill
            className="object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
}
