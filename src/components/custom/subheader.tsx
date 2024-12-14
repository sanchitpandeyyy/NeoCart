"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Utensils,
  Hotel,
  Music,
  Car,
  ShoppingBag,
  Dumbbell,
  Wine,
  TreesIcon as Tree,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  { name: "Spices", href: "#", image: "/images/anise.png" },
  { name: "Herbs&Medicines", href: "#", image: "/images/leaves.png" },
  { name: "Food", href: "#", image: "/images/pickle.png" },
  { name: "Handcrafts", href: "#", image: "/images/pottery.png" },
  { name: "Decorative Items", href: "#", image: "/images/container.png" },
  { name: "Clothings", href: "#", image: "/images/fashion.png" },
];

export default function Subheader() {
  const pathname = usePathname();

  return (
    <div className="bg-secondary hidden lg:block">
      <div className="container h-20">
        <nav className="flex h-full gap-10 items-center justify-center px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg w-32 px-3 py-2 text-xs transition-colors",
                  isActive
                    ? "bg-white text-secondary"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Image
                  src={item.image}
                  alt="images"
                  width={400}
                  height={400}
                  className="w-8 h-8"
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
