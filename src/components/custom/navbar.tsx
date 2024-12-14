import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Dialoug } from "./Dialoug";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="border-b bg-white ">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <span className="text-red-500">NEO</span>
            <span className="text-[#2252A1]">CART</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative w-96">
            <Input placeholder="Search products..." className="w-full" />
          </div>
          {user?.id ? (
            <Link href="/profile">
              <Button size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <div className="hidden md:flex">
              {/* <LoginLink>Sign in</LoginLink> */}
              <Dialoug />
            </div>
          )}
          <Link href="/products/cart">
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {/* <span className="absolute -top-2 -right-2 h-4 w-4 text-[10px] font-bold rounded-full bg-red-500 text-white flex items-center justify-center">
              2
              </span> */}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
