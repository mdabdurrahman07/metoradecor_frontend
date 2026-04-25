import Artisan from "@/components/Sections/Artisan/Artisan";
import Hero from "@/components/Sections/Hero/Hero";
import ProductSection from "@/components/Sections/ProductSection/ProductSection";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductSection />
      <Artisan/>
    </div>
  );
};

export default Home;
