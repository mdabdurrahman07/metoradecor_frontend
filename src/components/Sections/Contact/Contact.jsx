"use client";
import toast from "react-hot-toast";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Inquiry sent! We will contact you soon.");
    e.target.reset();
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="font-[family-name:var(--font-mont)] font-bold text-4xl uppercase">
            Get in Touch
          </h2>
          <p className="text-[#524434] leading-relaxed max-w-sm font-[family-name:var(--font-jakarta)]">
            Inquire about custom commissions or designer trade accounts.
          </p>
        </div>

        <div className="bg-[#f5f3ef] p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                className="w-full bg-[#fbf9f5] border-[#d7c3ae] rounded-md p-4 text-sm focus:ring-1 focus:ring-[#835400] outline-none"
                placeholder="First Name"
                type="text"
              />
              <input
                required
                className="w-full bg-[#fbf9f5] border-[#d7c3ae] rounded-md p-4 text-sm focus:ring-1 focus:ring-[#835400] outline-none"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
              required
              className="w-full bg-[#fbf9f5] border-[#d7c3ae] rounded-md p-4 text-sm focus:ring-1 focus:ring-[#835400] outline-none"
              placeholder="Email"
              type="email"
            />
            <textarea
              required
              className="w-full bg-[#fbf9f5] border-[#d7c3ae] rounded-md p-4 text-sm h-32 focus:ring-1 focus:ring-[#835400] outline-none"
              placeholder="Message..."
            ></textarea>
            <button className="w-full bg-[#f9a825] text-[#424242] font-[family-name:var(--font-mont)] font-bold uppercase tracking-widest text-xs py-5 rounded-md hover:brightness-110 transition-all">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
