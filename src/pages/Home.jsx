import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import FeedBack from "../components/FeedBack";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <Gallery />
      <FeedBack />
      <Footer />
    </>
  );
};

export default Home;
