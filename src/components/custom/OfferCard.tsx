/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
}

export default function ProductCard({
  title,
  subtitle,
  image,
  bgColor,
}: ProductCardProps) {
  return (
    <div
      className={`${bgColor} rounded-lg p-6 flex  md:flex-nowrap justify-between items-center`}
    >
      <div className="space-y-2 flex-1 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm md:text-base text-white/90">{subtitle}</p>
        <Button
          variant="secondary"
          className="bg-white hover:bg-white/90 text-black mt-2 md:mt-0"
        >
          BUY NOW
        </Button>
      </div>

      <div className="w-24 h-24 md:w-32 md:h-32 relative mt-4 md:mt-0">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
    </div>
  );
}
