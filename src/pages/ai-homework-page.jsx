import AboutQlass from "@/components/ai-homework-page/about-qlass/AboutQlass";
import BannerQr from "@/components/ai-homework-page/banner-qr/BannerQr";
import Featured from "@/components/ai-homework-page/featured/Featured";
import HighlightSection from "@/components/ai-homework-page/highlightSection/HighlightSection";
import SchoolSupremacy from "@/components/ai-homework-page/school-supremacy/SchoolSupremacy";
import React from "react";

export default function AIHomeWorkPage() {
  return (
    <>
      <Featured />
      <HighlightSection users="20" schools="30" states="5" />
      <AboutQlass />
      <SchoolSupremacy />
      <BannerQr />
    </>
  );
}
