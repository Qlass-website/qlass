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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <Card className="bg-[#F0FEFF] py-6">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="bg-[#19CDE2] rounded-full p-3 text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h1>Expert Tutors</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#ECEBFE] py-6">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="bg-[#5651E2] rounded-full p-3 text-white">
              <Book className="w-6 h-6" />
            </div>
            <h1>Effective Courses</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#FEF7E3] py-6">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="bg-[#FFC223] rounded-full p-3 text-white">
              <EqualSquare className="w-6 h-6" />
            </div>
            <h1>Earn Certificate</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#fef0e3] py-6">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="bg-[#ffab23] rounded-full p-3 text-white">
              <EqualSquare className="w-6 h-6" />
            </div>
            <h1>Earn Certificate</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#f4ebfe] py-6">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="bg-[#8851e2] rounded-full p-3 text-white">
              <Book className="w-6 h-6" />
            </div>
            <h1>Effective Courses</h1>
          </CardTitle>
          <CardDescription>
            When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-[#f0fff4] py-6">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="bg-[#19e2b0] rounded-full p-3 text-white">
              <GraduationCap className="w-6 h-6" />
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
