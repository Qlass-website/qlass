import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const testimonialsData = [
    {
      id: 1,
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 2,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 3,
      rating: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 4,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 5,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 6,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 7,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 8,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 9,
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
  ];

  const getStarIcons = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }

    if (halfStar) {
      stars.push(<span key="half">½⭐️</span>);
    }

    return stars;
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonialsData.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6 md:flex-row md:justify-between md:space-x-14">
                  <div className="flex items-center space-x-4 md:mb-0">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col items-start space-y-3">
                    <div className="space-x-1 text-3xl font-semibold">
                      {getStarIcons(testimonial.rating)}
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                    <strong>{testimonial.name}</strong>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
