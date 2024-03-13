import ResultsDisplayCards from "@/components/home-page/our-results/ResultsDisplayCards/ResultsDisplayCards";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

export default function KidsGallary() {
  return (
    <div className="mx-auto px-10 md:px-0 max-w-screen-xl">
      <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3">
        <div>
          <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-12 w-[400px] h-[200px]">
            <CardTitle>
              <div className="flex items-center">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="/Shaurya.jpg" />
                </Avatar>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-1 text-center space-y-2">
                <div>
                  <h1 className="text-xl text-black">Shaurya</h1>
                  <p className="text-xs text-gray-500">Class 10</p>
                </div>
                <h1 className="">
                  <span className="text-red-500">47% </span> to{" "}
                  <span className="text-xl text-green-400">85%</span>
                </h1>
                <div className="rounded-md p-1">
                  <h1 className="text-sm text-black">In just 45 Days</h1>
                </div>
                <Button className="bg-[#2E23B8]">Connect</Button>
              </div>
            </CardDescription>
          </Card>
        </div>
        <div>
          <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-12 w-[400px] h-[200px]">
            <CardTitle>
              <div className="flex items-center">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-1 text-center space-y-2">
                <div>
                  <h1 className="text-lg">Ujjwal</h1>
                  <p className="text-xs text-gray-500">Class 10</p>
                </div>
                <h1 className="">
                  <span className="text-red-500">40% </span> to{" "}
                  <span className="text-xl text-green-400">83%</span>
                </h1>
                <div className="rounded-md p-1">
                  <h1 className="text-sm text-black">In just 45 Days</h1>
                </div>
                <Button className="bg-[#2E23B8]">Connect</Button>
              </div>
            </CardDescription>
          </Card>
        </div>
        <div>
          <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-12 w-[400px] h-[200px]">
            <CardTitle>
              <div className="flex items-center">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="/Shruti.jpg" />
                </Avatar>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-1 text-center space-y-2">
                <div>
                  <h1 className="text-lg">Shruti</h1>
                  <p className="text-xs text-gray-500">Class 10</p>
                </div>
                <h1 className="">
                  <span className="text-red-500">25% </span> to{" "}
                  <span className="text-xl text-green-400">65%</span>
                </h1>
                <div className="rounded-md p-1">
                  <h1 className="text-sm text-black">In just 45 Days</h1>
                </div>
                <Button className="bg-[#2E23B8]">Connect</Button>
              </div>
            </CardDescription>
          </Card>
        </div>
        <div>
          <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-12 w-[400px] h-[200px]">
            <CardTitle>
              <div className="flex items-center">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="/Shaurya.jpg" />
                </Avatar>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-1 text-center space-y-2">
                <div>
                  <h1 className="text-lg">Shaurya</h1>
                  <p className="text-xs text-gray-500">Class 10</p>
                </div>
                <h1 className="">
                  <span className="text-red-500">47% </span> to{" "}
                  <span className="text-xl text-green-400">85%</span>
                </h1>
                <div className="rounded-md p-1">
                  <h1 className="text-sm text-black">In just 45 Days</h1>
                </div>
                <Button className="bg-[#2E23B8]">Connect</Button>
              </div>
            </CardDescription>
          </Card>
        </div>
        <div>
          <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-12 w-[400px] h-[200px]">
            <CardTitle>
              <div className="flex items-center">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="/Shaurya.jpg" />
                </Avatar>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-1 text-center space-y-2">
                <div>
                  <h1 className="text-lg">Shaurya</h1>
                  <p className="text-xs text-gray-500">Class 10</p>
                </div>
                <h1 className="">
                  <span className="text-red-500">47% </span> to{" "}
                  <span className="text-xl text-green-400">85%</span>
                </h1>
                <div className="rounded-md p-1">
                  <h1 className="text-sm text-black">In just 45 Days</h1>
                </div>
                <Button className="bg-[#2E23B8]">Connect</Button>
              </div>
            </CardDescription>
          </Card>
        </div>
        <div>
          <Card className="flex items-center justify-between rounded-xl border-4 border-indigo-800 p-12 w-[400px] h-[200px]">
            <CardTitle>
              <div className="flex items-center">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="/Shaurya.jpg" />
                </Avatar>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-1 text-center space-y-2">
                <div>
                  <h1 className="text-lg">Shaurya</h1>
                  <p className="text-xs text-gray-500">Class 10</p>
                </div>
                <h1 className="">
                  <span className="text-red-500">47% </span> to{" "}
                  <span className="text-xl text-green-400">85%</span>
                </h1>
                <div className="rounded-md p-1">
                  <h1 className="text-sm text-black">In just 45 Days</h1>
                </div>
                <Button className="bg-[#2E23B8]">Connect</Button>
              </div>
            </CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
}
