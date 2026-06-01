import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TestimonialsSection from "@/sections/testimonials-section";
import FAQSection from "@/sections/faq-section";

import HeroSection from "@/sections/hero-section";
import CategoriesSection from "@/sections/categories-section";
import FeaturedProducts from "@/sections/featured-products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      <Navbar />

      <HeroSection />

      <CategoriesSection />

      <FeaturedProducts />

      <TestimonialsSection />

      <FAQSection />

      <Footer />

    </main>
  );
}