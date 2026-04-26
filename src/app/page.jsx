import Artisan from "@/components/Sections/Artisan/Artisan";
import ContactForm from "@/components/Sections/Contact/Contact";
import Hero from "@/components/Sections/Hero/Hero";
import Partners from "@/components/Sections/Partners/Partners";
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
      <Partners/>
      <ContactForm/>
    </div>
  );
};

export default Home;
