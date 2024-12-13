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
      className={`${bgColor} rounded-lg p-6 flex justify-between items-center`}
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/90">{subtitle}</p>
        <Button
          variant="secondary"
          className="bg-white hover:bg-white/90 text-black"
        >
          BUY NOW
        </Button>
      </div>
      <div className="w-32 h-32 relative">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
    </div>
  );
}
