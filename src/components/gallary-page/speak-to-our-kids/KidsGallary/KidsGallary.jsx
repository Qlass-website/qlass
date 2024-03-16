import React from "react";
import {
  Card,
  CardDescription,
  CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


const kidsData = [
  {
    name: "Shaurya",
    class: "Class 10",
    initialPercentage: 47,
    finalPercentage: 85,
    duration: "In just 45 Days",
    image: "/Shaurya.jpg",
  },
  {
    name: "Ujjwal",
    class: "Class 10",
    initialPercentage: 40,
    finalPercentage: 83,
    duration: "In just 45 Days",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Shruti",
    class: "Class 10",
    initialPercentage: 25,
    finalPercentage: 65,
    duration: "In just 45 Days",
    image: "/Shruti.jpg",
  },
  {
    name: "Prakhar",
    class: "Class 10",
    initialPercentage: 15,
    finalPercentage: 59,
    duration: "In just 45 Days",
    image: "/Prakhar.jpg",
  },
  {
    name: "Pankaj",
    class: "Class 9",
    initialPercentage: 60,
    finalPercentage: 92,
    duration: "In just 45 Days",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Deepasmita",
    class: "Class 9",
    initialPercentage: 45,
    finalPercentage: 88,
    duration: "In just 45 Days",
    image: "/Deepsmita.jpg",
  },
  {
    name: "Anshul",
    class: "Class 8",
    initialPercentage: 40,
    finalPercentage: 88,
    duration: "In just 45 Days",
    image: "/Anshul.jpg",
  },
  {
    name: "Gunjan",
    class: "Class 8",
    initialPercentage: 40,
    finalPercentage: 84,
    duration: "In just 45 Days",
    image: "/Gunjan.jpg",
  },
  {
    name: "Tanmay",
    class: "Class 8",
    initialPercentage: 45,
    finalPercentage: 85,
    duration: "In just 45 Days",
    image: "/Tanmay.jpg",
  },
];

export default function KidsGallary() {
  return (
    <div className="mx-auto px-4 md:px-0">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center">
      {kidsData.map((kid, index) => (
        <div key={index}>
          <Card className="flex flex-col md:flex-row justify-between md:space-x-8 rounded-xl border-4 border-indigo-800 p-14 space-y-4 md:space-y-0 md:p-8 lg:px-12 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <CardTitle>
              <Avatar className="md:ml-0 w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36">
                <AvatarImage src={kid.image} />
              </Avatar>
            </CardTitle>
            <CardDescription className="md:flex md:flex-col md:items-center md:space-y-2">
              <div className="text-center md:text-center space-y-4">
                <div className="">
                  <h1 className="text-lg font-semibold">{kid.name}</h1>
                  <p className="text-xs text-gray-500">{kid.class}</p>
                </div>
                <h1 className="text-red-500">
                  {kid.initialPercentage}% to{" "}
                  <span className="text-green-400">{kid.finalPercentage}%</span>
                </h1>
                <div className="rounded-md p-1 bg-gray-100">
                  <h1 className="text-sm text-black">{kid.duration}</h1>
                </div>
              </div>
              <Button className="bg-indigo-800 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">Connect</Button>
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  </div>
  );
}