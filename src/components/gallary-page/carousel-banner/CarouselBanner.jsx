import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // AutoPlay functionality
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full px-20 overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className={`relative float-left ${activeIndex === 0 ? "" : "-mr-[100%] hidden"} duration-[600ms] w-full transition-transform ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
          data-te-carousel-active={activeIndex === 0}
        >
          <img
            src="/banner1.png"
            className="block h-[600px] w-full"
            alt="Wild Landscape"
          />
        </div>

        <div
          className={`relative float-left ${activeIndex === 1 ? "" : "-mr-[100%] hidden"} duration-[600ms] w-full transition-transform ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
          data-te-carousel-active={activeIndex === 1}
        >
          <img
            src="/banner2.png"
            className="block h-[600px] w-full"
            alt="Camera"
          />
        </div>

        <div
          className={`relative float-left ${activeIndex === 2 ? "" : "-mr-[100%] hidden"} duration-[600ms] w-full transition-transform ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
          data-te-carousel-active={activeIndex === 2}
        >
          <img
            src="/banner3.png"
            className="block h-[600px] w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>

      <button
        className="ease-[cubic-bezier(0.25,0.1,0.25,1.0)] absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handlePrevClick}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="ease-[cubic-bezier(0.25,0.1,0.25,1.0)] absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleNextClick}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
