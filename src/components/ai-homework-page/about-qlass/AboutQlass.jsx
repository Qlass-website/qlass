import React from "react";
import AboutCards from "./AboutCards/AboutCards";
import AboutCardReverse from "./AboutCards/AboutCardReverse";

export default function AboutQlass() {
  return (
    <div>
      <AboutCards
        title="🎓 Elevate Learning Beyond the Classroom"
        description="The QLASS AI Tutor aims to transform society into a hub of continuous learning. It offers students instant academic assistance around the clock, thereby fostering a culture of exploration and curiosity."
        imgUrl="/aboutImg1.png"
      />
      <AboutCardReverse
        title="🤖Advanced AI, Smart Solutions"
        description="Our AI Tutor is designed to provide more than just answers. It delivers intelligent explanations, step-by-step problem-solving strategies, and insightful guidance, empowering students to become independent learners."
        imgUrl="/aboutImg2.png"
      />
      <AboutCards
        title="📱 Seamless Integration with Whatsapp"
        description="Understanding the need for convenience, the QLASS AI Tutor is accessible via WhatsApp, allowing students to seek help effortlessly and receive instant clarity."
        imgUrl="/aboutImg3.png"
      />
      <AboutCardReverse
        title="🚫 Safe, Controlled, and Respectful"
        description="The QLASS AI Tutor is programmed to handle profanity and inappropriate queries, ensuring a safe and respectful learning environment."
        imgUrl="/aboutImg4.png"
      />
      <AboutCards
        title="🌟 Positioning as Technological Leader"
        description="Incorporating the QLASS AI Tutor into our educational framework will position the state as a pioneer in leveraging technology for enhanced learning."
        imgUrl="/aboutImg5.png"
      />
    </div>
  );
}
