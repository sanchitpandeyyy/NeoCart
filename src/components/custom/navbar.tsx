import Link from "next/link";
import Image from "next/image";
import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // This would typically come from your cart state management
  const cartItemCount = 3;

  return (
    <header className="sticky top-0 z-50 w-full  shadow-sm bg-white ">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/neocart.png"
              alt="NeoCart logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="hidden font-bold sm:inline-block">NeoCart</span>
          </Link>
        </div>

        <form
          action="/search"
          className="hidden md:flex relative w-full max-w-sm mx-4"
        >
          <Input
            type="search"
            placeholder="Search products..."
            name="query"
            className="pr-10 shadow-[unset]"
          />
          <Button type="submit" size="icon" className="absolute right-0 top-0">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>

        <div className="flex items-center gap-4">
          {user?.id ? (
            <Link href="/profile">
              <Button size="icon" variant="ghost">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
          ) : (
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <LoginLink>Sign in</LoginLink>
            </Button>
          )}

          <Link href="/products/cart">
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 px-2 py-1"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="block py-2 text-lg font-semibold">
                  Home
                </Link>
                <Link
                  href="/products"
                  className="block py-2 text-lg font-semibold"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="block py-2 text-lg font-semibold"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-lg font-semibold"
                >
                  Contact
                </Link>
                {!user?.id && (
                  <Button asChild variant="default" className="w-full">
                    <LoginLink>Sign in</LoginLink>
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
