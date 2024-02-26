import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, EqualSquare, GraduationCap } from "lucide-react";

export default function WhatWeOfferCards() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="bg-[#F0FEFF] py-6 hover:shadow-xl hover:transform hover:scale-105 transition-transform transform origin-center">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="rounded-full bg-[#19CDE2] p-3 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h1>Expert Tutors</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#ECEBFE] py-6 hover:shadow-xl hover:transform hover:scale-105 transition-transform transform origin-center">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="rounded-full bg-[#5651E2] p-3 text-white">
              <Book className="h-6 w-6" />
            </div>
            <h1>Effective Courses</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#FEF7E3] py-6 hover:shadow-xl hover:transform hover:scale-105 transition-transform transform origin-center">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="rounded-full bg-[#FFC223] p-3 text-white">
              <EqualSquare className="h-6 w-6" />
            </div>
            <h1>Earn Certificate</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#fef0e3] py-6 hover:shadow-xl hover:transform hover:scale-105 transition-transform transform origin-center">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="rounded-full bg-[#ffab23] p-3 text-white">
              <EqualSquare className="h-6 w-6" />
            </div>
            <h1>Earn Certificate</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#f4ebfe] py-6 hover:shadow-xl hover:transform hover:scale-105 transition-transform transform origin-center">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="rounded-full bg-[#8851e2] p-3 text-white">
              <Book className="h-6 w-6" />
            </div>
            <h1>Effective Courses</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#f0fff4] py-6 hover:shadow-xl hover:transform hover:scale-105 transition-transform transform origin-center">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="rounded-full bg-[#19e2b0] p-3 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h1>Expert Tutors</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
