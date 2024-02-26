import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "../Nav/Nav";
import Logo from "@/components/Logo";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
