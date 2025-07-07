import React from "react";
import HeroSection from "./HeroBanner/HeroSection";
import HowWorks from "./HowWorks";
import OurService from "./OurService";
import OurClients from "./OurClients";
import Benefits from "./Benefits ";
import BecomeMarchent from "./BecomeMarchent";

const Home = () => {
  return (
    <div className="px-5">
      <div className="max-w-375 mx-auto">
        <HeroSection></HeroSection>
        <HowWorks></HowWorks>
        <OurService></OurService>
        <OurClients></OurClients>
        <Benefits></Benefits>
        <BecomeMarchent></BecomeMarchent>
      </div>
    </div>
  );
};

export default Home;
