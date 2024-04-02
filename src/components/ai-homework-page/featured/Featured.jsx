import React from "react";

function ContentSection() {
  return (
    <div className="-ml-12 flex md:w-6/12 flex-col max-md:ml-0 max-md:w-full">
      <div className="my-auto flex flex-col items-center md:items-start self-stretch font-medium text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="md:text-6xl font-semibold capitalize tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-10">
          AI Powered Homework Assistance for All
        </h1>
        <p className="mt-7 text-sm md:text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
          Embrace innovation, transform education, and lead <br /> the way in
          nurturing the next generation of learners.
        </p>
        {/* <button className="justify-center self-start px-12 py-6 mt-11 text-lg leading-5 capitalize whitespace-nowrap bg-blue-600 rounded-3xl max-md:px-5 max-md:mt-10"
                tabindex="0">
          Download Here
        </button> */}
        <div className="lg:ml-32">
        <img loading="lazy" src="/qr.png" className="w-[150px] h-[150px items-center mb-5 md:mb-0 mt-5 rounded-md" alt="" />
        </div>
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="flex">
      <img
        loading="lazy"
        src="/aibanner.png"
        className="md:w-auto md:h-[600px] -mb-5 md:mb-0"
        alt="Homework assistance concept"
      />
    </div>
  );
}

export default function Featured() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-r md:h-[600px] from-[#171646] to-[#56569F] py-12">
      <section className="lg:ml-32 w-full">
        <div className="flex flex-col justify-between md:flex-row text-center md:text-left">
          <ContentSection />
          <ImageSection />
        </div>
      </section>
    </main>
  );
}
