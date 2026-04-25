export default function Testimonials() {
  const reviews = [
    {
      name: "Julianna Thorne",
      role: "Interior Architect, NYC",
      text: "Metora has redefined how I source pieces for my clients. The attention to detail is unmatched.",
    },
    {
      name: "Marcus Chen",
      role: "Private Collector",
      text: "Finding genuine craftsmanship that resonates with modern minimalism is a challenge Metora solves.",
    },
    {
      name: "Elena Rossi",
      role: "Design Consultant",
      text: "The curation here is impeccable. It's not just furniture; it's a dialogue between artisan and space.",
    },
  ];

  return (
    <section className="bg-[#f5f3ef] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <div key={i} className="space-y-6">
              <span className="material-symbols-outlined text-[#f9a825] text-4xl">
                format_quote
              </span>
              <p className="font-[family-name:var(--font-jakarta)] text-[#524434] leading-relaxed italic">
                &quot;{r.text}&quot;
              </p>
              <div className="pt-4">
                <h4 className="font-[family-name:var(--font-mont)] font-bold text-sm uppercase tracking-widest">
                  {r.name}
                </h4>
                <p className="text-[10px] text-[#5f5e5e] font-[family-name:var(--font-jakarta)] uppercase">
                  {r.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
