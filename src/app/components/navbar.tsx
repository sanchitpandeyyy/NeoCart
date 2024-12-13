import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <span className="text-red-500">NEO</span>
            <span className="text-[#2252A1]">CART</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/terms" className="text-sm font-medium">
              Terms & Conditions
            </Link>
            <Link href="/products" className="text-sm font-medium">
              All Products
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative w-96">
            <Input placeholder="Search products..." className="w-full" />
          </div>
          <Button size="icon" variant="ghost">
            <User className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-4 w-4 text-[10px] font-bold rounded-full bg-red-500 text-white flex items-center justify-center">
              2
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
