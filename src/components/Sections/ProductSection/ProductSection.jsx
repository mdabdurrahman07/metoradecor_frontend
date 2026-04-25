import Image from "next/image";

const products = [
  {
    id: 1,
    name: "The Ethereal Vase",
    price: "$240.00",
    img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800",
    offset: false,
  },
  {
    id: 2,
    name: "Altos Lounge Chair",
    price: "$1,250.00",
    img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800",
    offset: true,
  },
  {
    id: 3,
    name: "Horizon Canvas",
    price: "$890.00",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
    offset: false,
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#f5f3ef] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-[family-name:var(--font-mont)] font-bold text-3xl uppercase tracking-widest text-[#1b1c1a]">
            CURATED COLLECTIONS
          </h2>
          <div className="w-24 h-1 bg-[#f9a825] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${item.offset ? "md:mt-12" : ""}`}
            >
              <div className="relative overflow-hidden rounded-xl bg-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(249,168,37,0.3)]">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#835400]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="mt-6 space-y-2 text-center">
                <h3 className="font-[family-name:var(--font-mont)] font-bold uppercase text-sm tracking-wider">
                  {item.name}
                </h3>
                <p className="font-[family-name:var(--font-jakarta)] text-[#5f5e5e]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
