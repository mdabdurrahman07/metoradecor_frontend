export default function Footer() {
  return (
    <footer className="bg-[#424242] w-full pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-24 max-w-screen-2xl mx-auto text-[#e4e2de]/80">
        <div className="space-y-6">
          <div className="font-display font-extrabold uppercase text-[#f9a825] text-xl">
            METORA
          </div>
          <p className="text-sm">
            Luxury decor for the conscious curator. Elevating environments
            through artisanal excellence.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-widest">
            Shop
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-[#f9a825] transition-colors" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="hover:text-[#f9a825] transition-colors" href="#">
                Artisans
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-widest">
            Company
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-[#f9a825] transition-colors" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="hover:text-[#f9a825] transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-widest">
            Connect
          </h4>
          <div className="flex gap-4">
            <input
              className="bg-[#1A1A1A] border-none rounded px-4 py-2 text-sm w-full"
              placeholder="Email Address"
            />
            <button className="bg-[#f9a825] text-[#1A1A1A] px-4 py-2 rounded font-bold text-xs">
              JOIN
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs tracking-widest">
        © 2026 METORA ARTISANS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
