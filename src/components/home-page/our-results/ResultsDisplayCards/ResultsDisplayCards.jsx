import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function ResultsDisplayCards() {
  return (
    <div className="flex items-center justify-between space-x-5 p-5">
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Shaurya.jpg" />
            </Avatar>
            <div>
              <h1 className="text-lg">Shaurya</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 10</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">47% </span> to{" "}
              <span className="text-xl text-green-400">85%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png"/>
            </Avatar>
            <div>
              <h1 className="text-lg">Ujjwal</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 10</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">40% </span> to{" "}
              <span className="text-xl text-green-400">83%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Shruti.jpg"/>
            </Avatar>
            <div>
              <h1 className="text-lg">Shruti</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 10</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">25% </span> to{" "}
              <span className="text-xl text-green-400">65%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Prakhar.jpg"/>
            </Avatar>
            <div>
              <h1 className="text-lg">Prakhar</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 10</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">15% </span> to{" "}
              <span className="text-xl text-green-400">59%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1 className="text-lg">Pankaj</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 9</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">60% </span> to{" "}
              <span className="text-xl text-green-400">92%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Deepsmita.jpg"/>
            </Avatar>
            <div>
              <h1 className="text-lg">Deepasmita</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 9</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">45% </span> to{" "}
              <span className="text-xl text-green-400">88%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Anshul.jpg" />
            </Avatar>
            <div>
              <h1 className="text-lg">Anshul</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 8</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">40% </span> to{" "}
              <span className="text-xl text-green-400">88%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Gunjan.jpg"/>
            </Avatar>
            <div>
              <h1 className="text-lg">Gunjan</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 8</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">40% </span> to{" "}
              <span className="text-xl text-green-400">84%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
      <Card className="flex items-center justify-between space-x-5 rounded-xl border-4 border-indigo-800 p-3 md:p-8">
        <CardTitle>
          <div className="flex items-center space-x-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/Tanmay.jpg"/>
            </Avatar>
            <div>
              <h1 className="text-lg">Tanmay</h1>
              {/* <p className="text-xs text-gray-500">ABC School</p> */}
              <p className="text-xs text-gray-500">Class 8</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-4">
            <h1 className="">
              <span className="text-red-500">45% </span> to{" "}
              <span className="text-xl text-green-400">85%</span>
            </h1>
            <div className="rounded-md bg-green-400 p-1">
              <h1 className="text-sm text-white">In just 45 Days</h1>
            </div>
          </div>
        </CardDescription>
      </Card>
    </div>
  );
}
