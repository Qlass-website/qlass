import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Book, EqualSquare, GraduationCap } from "lucide-react"

export default function WhatWeOfferCards() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 justify-center">
        <Card className="w-full md:w-[350px] bg-[#F0FEFF] py-6">
            <CardHeader className="space-y-4">
                <CardTitle className="flex items-center space-x-2"><div className="bg-[#19CDE2] rounded-full p-3 text-white"><GraduationCap  className="w-6 h-6"/></div><h1>Expert Tutors</h1></CardTitle>
                <CardDescription>When An Unkown Printer Took A Galley Offe Type And Scrambled Makes.</CardDescription>
            </CardHeader>
        </Card>
        <Card className="w-full md:w-[350px] bg-[#ECEBFE] py-6">
            <CardHeader className="space-y-4">
                <CardTitle className="flex items-center space-x-2"><div className="bg-[#5651E2] rounded-full p-3 text-white"><Book className="w-6 h-6"/></div><h1>Effective Courses</h1></CardTitle>
                <CardDescription>When An Unkown Printer Took A Galley Offe Type And Scrambled Makes.</CardDescription>
            </CardHeader>
        </Card>
        <Card className="w-full md:w-[350px] bg-[#FEF7E3] py-6">
            <CardHeader className="space-y-4">
                <CardTitle className="flex items-center space-x-2"><div className="bg-[#FFC223] rounded-full p-3 text-white"><EqualSquare className="w-6 h-6"/></div><h1>Earn Certificate</h1></CardTitle>
                <CardDescription>When An Unkown Printer Took A Galley Offe Type And Scrambled Makes.</CardDescription>
            </CardHeader>
        </Card>
    </div>
  )
}
