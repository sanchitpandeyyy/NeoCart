"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  { name: "Spices", href: "/food", icon: "spices.png" },
  { name: "Herbs", href: "/hotel", icon: "herb.png" },
  { name: "Food", href: "/play", icon: "food.png" },
  { name: "Handcrafts", href: "/automove", icon: "handicraft.png" },
  { name: "Decorative", href: "/shop", icon: "decorative.png" },
  { name: "Clothings", href: "/fitness", icon: "woven.png" },
];

export default function Subheader() {
  const pathname = usePathname();

  return (
    <div className="bg-secondary">
      <div className="container h-20">
        <nav className="flex h-full gap-20 items-center justify-center px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg w-20 px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-white text-secondary"
                    : "text-white hover:bg-white/10"
                )}
              >
                {/* <Image
                  src={`/images/icon/` + item.icon}
                  className="h-8 w-8 mb-1"
                  height={200}
                  width={200}
                  alt={item.name}
                /> */}
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
