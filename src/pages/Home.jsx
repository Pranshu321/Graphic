import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      {/* <Testimonials /> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
