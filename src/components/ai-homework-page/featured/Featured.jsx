import React from "react";

function ContentSection() {
  return (
    <div className="flex flex-col -ml-12 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto font-medium text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-8xl font-semibold tracking-tighter capitalize leading-[98px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          AI Powered Homework Assistance for All
        </h1>
        <p className="mt-7 text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Eu eu sagittis nulla praesent. Volutpat et libero id sit at.
        </p>
        <button className="justify-center self-start px-12 py-6 mt-11 text-lg leading-5 capitalize whitespace-nowrap bg-blue-600 rounded-3xl max-md:px-5 max-md:mt-10"
                tabindex="0">
          Want to explore
        </button>
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img loading="lazy" src="/bannerImage.png" className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full" alt="Homework assistance concept" />
    </div>
  );
}

export default function Featured() {
  return (
    <main className="flex justify-center items-center py-12 bg-gradient-to-r from-[#171646] to-[#56569F]">
      <section className="mt-2 w-full max-w-[1198px]">
        <div className="flex gap-5 flex-col md:flex-row mb-8">
          <ContentSection />
          <ImageSection />
        </div>
      </section>
    </main>
  );
}
