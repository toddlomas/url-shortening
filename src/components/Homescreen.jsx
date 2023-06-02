import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LinkShortener from "./LinkShortener";
import Boost from "./Boost";
import Footer from "./Footer";

function Homescreen() {
  return (
    <>
      <Navbar />
      <Hero />
      <LinkShortener />
      <Boost />
      <Footer />
    </>
  );
}

export default Homescreen;
