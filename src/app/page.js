import Artisan from "@/components/Sections/Artisan/Artisan";
import Hero from "@/components/Sections/Hero/Hero";
import Philosophy from "@/components/Sections/Philosophy/Philosophy";
import ProductSection from "@/components/Sections/ProductSection/ProductSection";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductSection />
      <Artisan />
      <Philosophy />
      <Testimonials />
    </div>
  );
};

export default Home;
