import Carousel from "@/components/gallary-page/carousel-banner/CarouselBanner";
import ImageArea from "@/components/gallary-page/gallary-page/ImageArea";
import SpeakToOurKids from "@/components/gallary-page/speak-to-our-kids/SpeakToOurKids";
import React from "react";

export default function GallaryPage() {
  return (
    <>
      <Carousel />
      <SpeakToOurKids />
      <ImageArea />
    </>
  );
}
