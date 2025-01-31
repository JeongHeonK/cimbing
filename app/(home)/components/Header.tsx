import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import LogInButton from "./LogInButton";
import CustomLink from "./CustomLink";

export default async function Header() {
  const session = (await cookies()).get("session");
  const isLogin = session !== undefined;

  return (
    <header className="bg-white z-50 fixed top-0 left-0 right-0 flex w-full border justify-between items-center px-2">
      <NavigationMenu>
        <NavigationMenuList className="py-1 gap-2">
          <NavigationMenuItem className="size-10">
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="w-auto h-auto"
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/"
              className="text-sm hover:text-slate-500 transition-colors"
            >
              HOME
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <CustomLink isLogin={isLogin}>MY CLIMBING</CustomLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <LogInButton loginStatus={isLogin} />
    </header>
  );
}
