import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "Guaranteed Growth",
    paymentStatus: "✅",
    totalAmount: "❌",
  },
  {
    invoice: "Personalised attention",
    paymentStatus: "✅",
    totalAmount: "❌",
  },
  {
    invoice: "Separate teacher for doubt solving",
    paymentStatus: "✅",
    totalAmount: "❌",
  },
  {
    invoice: "Tech-enabled digital classes",
    paymentStatus: "✅",
    totalAmount: "❌",
  },
  {
    invoice: "1:1 doubt solving",
    paymentStatus: "✅",
    totalAmount: "❌",
  },
  {
    invoice: "Continuous Progress Reports",
    paymentStatus: "✅",
    totalAmount: "❌",
  },
]

export default function PyramidLearning() {
  return (
    <div className="flex flex-col px-2">
      <div className="w-full pl-20 pr-6 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 text-center md:text-left self-stretch text-indigo-800 max-md:mt-10 max-md:max-w-full">
              <span className="text-2xl md:text-4xl font-bold">
                What differentiates Qlass from others?
              </span>
              <p className="md:text-2xl font-thin text-gray-500">
              Qlass understands that every student learns differently. We tailor our approach to individual needs, using engaging activities, interactive tools, and differentiated <br/> instruction to ensure optimal progress.
              </p>
            </div>
          </div>
          <div className="mb-10 ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[300px] lg:min-h-[497px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              {/* <img
                loading="lazy"
                src="/pyramidLearn.png"
                className="absolute rounded-md object-cover"
              /> */}
              <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="text-left border border-l">Features</TableHead>
          <TableHead className="text-center border border-l">Qlass</TableHead>
          <TableHead className="text-center">Regular Coaching</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="">
            <TableCell className="font-medium border border-l">{invoice.invoice}</TableCell>
            <TableCell className="text-center border border-l">{invoice.paymentStatus}</TableCell>
            <TableCell className="text-center">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
