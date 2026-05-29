import React from "react";
import ServiceHero from "../Components/ServiceHero";
import HeroHeader from "../Components/HeroHeader";
import WhatArtisansDo from "../Components/WhatArtisansDo";
import HowItWorks from "../Components/HowItWorks";
import Artisans from "../Components/Artisans";
import HeroFooter from "../Components/HeroFooter";

const Service = () => {
  return (
    <div>
      <HeroHeader />
      <ServiceHero />
      <WhatArtisansDo />
      <HowItWorks />
      <Artisans />
      <HeroFooter />
    </div>
  );
};

export default Service;
