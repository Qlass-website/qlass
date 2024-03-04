import { Button } from "@/components/ui/button";
import React from "react";

const BenefitItem = ({ imageUrl, title }) => (
  <div className="flex flex-col whitespace-nowrap text-center text-xl font-bold text-black">
    <img
      src={imageUrl}
      alt={title}
      className="aspect-[0.83] w-[42px] self-center"
    />
    <div className="mt-4">{title}</div>
  </div>
);

export default function BookingPage() {
  const benefits = [
    {
      imageUrl: "/gift.png",
      title: "Goodies",
    },
    {
      imageUrl: "/certificate.png",
      title: "Certificate",
    },
    {
      imageUrl: "/path.png",
      title: "Personal Path",
    },
  ];

  return (
    <div className="flex flex-col xl:-mb-12">
      <div className="w-full pr-6 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="mb-10 flex w-[56%] flex-col max-md:w-full">
            <div className="relative flex min-h-[697px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d9a9ef75382109131f1502275d20f33b2dbd7fcbf5fde5985c59f6512753267?apiKey=ff29eb85e7464976a6d2464dcda446db&"
                alt="Session booking visual"
                className="absolute inset-0 "
              />
            </div>
          </div>
          <div className="flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto px-5">
              <h1 className="text-center text-4xl font-bold text-indigo-800">
                Book 1:1 Online Session
              </h1>
              <p className="mt-9 text-center text-xl text-black">
                Unleash your child's unique talents - book a counseling session
                to tailor their educational journey.
              </p>
              <div className="mt-16 flex justify-between gap-5 whitespace-nowrap text-center text-xl font-bold md:flex-wrap">
                <Button
                  variant="default"
                  className="grow items-center justify-center rounded-[34px] bg-indigo-800 px-16 py-8 text-white md:px-5"
                >
                  Whatsapp: +91 9031003986
                </Button>
                <Button
                  variant="outline"
                  className="grow items-center justify-center rounded-[34px] border-4 border-solid border-indigo-800 px-16 py-7 text-indigo-800 md:px-5"
                >
                  Call: +91 9031003986
                </Button>
              </div>
              <div className="mt-16 flex justify-between gap-5 pr-3 md:flex-wrap">
                {benefits.map((benefit) => (
                  <BenefitItem
                    key={benefit.title}
                    imageUrl={benefit.imageUrl}
                    title={benefit.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
