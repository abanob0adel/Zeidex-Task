import routes from "@/lib/routes";
import Logo from "@/public/icons/Logo";
import { mobileLinks, NavLinks, NavTypes } from "@/shared/LinksNavigation";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
export default function Header() {
  return (
    <>
      <div className="container py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-20">
            <Logo />
            <div className="lg:flex hidden items-center gap-14">
              {NavLinks?.map((item: NavTypes, index) => (
                <Link
                  key={index}
                  href={item?.link}
                  className="text-color-link hover:text-primary font-semibold"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center lg:gap-8 gap-4">
            <Link
              href={routes?.Help}
              className="lg:block hidden text-color-link hover:text-primary font-semibold"
            >
              Help
            </Link>
            <Button asChild>
              <Link href={routes?.Login}>Login</Link>
            </Button>
            <div className="lg:hidden block">
              <Sheet>
                <SheetTrigger>
                  <MenuIcon />
                </SheetTrigger>
                <SheetContent className="py-8 min-w-full">
                  <SheetHeader>
                    <SheetTitle>
                      <Logo />
                    </SheetTitle>
                    <div className="mt-6 flex flex-col gap-6">
                      {mobileLinks?.map((item: NavTypes, index) => (
                        <Link
                          key={index}
                          href={item?.link}
                          className="text-color-link hover:text-primary font-semibold"
                        >
                          {item?.title}
                        </Link>
                      ))}
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
