import Brands from "@/components/home-page/brands/Brands";
import ChildReadyToRoar from "@/components/home-page/child-ready-to-roar/ChildReadyToRoar";
import Hero from "@/components/home-page/hero/Hero";
//import HowToStart from "@/components/home-page/how-to-start/HowToStart";
import LearningChoice from "@/components/home-page/learning-choice/LearningChoice";
import OurClients from "@/components/home-page/our-clients/OurClients";
import OurResults from "@/components/home-page/our-results/OurResults";
import PyramidLearning from "@/components/home-page/pyramid-learning/PyramidLearning";
import BookingPage from "@/components/home-page/session-booking/BookingPage";
//import WhatWeOffer from "@/components/home-page/what-we-offer/WhatWeOffer";
import WhyQlass from "@/components/home-page/why-qlass/WhyQlass";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurResults />
      <Brands />
      <ChildReadyToRoar />
      <LearningChoice />
      {/* <WhatWeOffer /> */}
      <WhyQlass />
      <PyramidLearning />
      <OurClients />
      {/* <HowToStart /> */}
      <BookingPage />
    </>
  );
}
