import React from "react";
// import "..images/Colleges";
import HomeHero from "../Components/HomeHero";
import HomeFeatures from "../Components/HomeFeatures";
import SlidingBrands from "../Components/SlidingBrands";
import OurNumbers from "../Components/OurNumbers";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="features-">
      <HomeHero />
      <HomeFeatures />
      {/* <SlidingBrands /> */}
      <OurNumbers />
    </div>
  );
}
export default Home;
