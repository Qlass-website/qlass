import React from "react";

function ContentSection() {
  return (
    <div className="-ml-12 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
      <div className="my-auto flex flex-col self-stretch font-medium text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-6xl font-semibold capitalize leading-[98px] tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-10">
          AI Powered Homework Assistance for All
        </h1>
        <p className="mt-7 text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
          Embrace innovation, transform education, and lead <br /> the way in
          nurturing the next generation of learners.
        </p>
        {/* <button className="justify-center self-start px-12 py-6 mt-11 text-lg leading-5 capitalize whitespace-nowrap bg-blue-600 rounded-3xl max-md:px-5 max-md:mt-10"
                tabindex="0">
          Want to explore
        </button> */}
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="/bannerImage.png"
        className="max-md:max-w-10/12 aspect-[0.83] w-10/12 grow max-md:mt-10"
        alt="Homework assistance concept"
      />
    </div>
  );
}

export default function Featured() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-r from-[#171646] to-[#56569F] py-12">
      <section className="mt-2 w-full max-w-[1198px]">
        <div className="mb-8 flex flex-col gap-5 md:flex-row">
          <ContentSection />
          <ImageSection />
        </div>
      </section>
    </main>
  );
}
