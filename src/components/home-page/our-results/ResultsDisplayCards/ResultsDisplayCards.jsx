import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

export default function ResultsDisplayCards() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));
  return (
    <div className="space-y-5">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-8">
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h1 className="text-lg">John Doe</h1>
                    <p className="text-xs text-gray-500">ABC School</p>
                    <p className="text-xs text-gray-500">High School</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-4">
                  <h1 className="">
                    <span className="text-red-500">75% </span> to{" "}
                    <span className="text-xl text-green-400">95%</span>
                  </h1>
                  <div className="rounded-md bg-green-400 p-1">
                    <h1 className="text-sm text-white">In just 45 Days</h1>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
