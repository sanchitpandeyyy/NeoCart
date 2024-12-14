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

const navigation = [
  { name: "Food", href: "/food", icon: Utensils },
  { name: "Hotel", href: "/hotel", icon: Hotel },
  { name: "Play", href: "/play", icon: Music },
  { name: "Automove", href: "/automove", icon: Car },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Fitness", href: "/fitness", icon: Dumbbell },
  { name: "Nightlife", href: "/nightlife", icon: Wine },
  { name: "Park", href: "/park", icon: Tree },
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
                  "flex flex-col items-center justify-center gap-1 rounded-lg w-20 px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-white text-secondary"
                    : "text-white hover:bg-white/10"
                )}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
