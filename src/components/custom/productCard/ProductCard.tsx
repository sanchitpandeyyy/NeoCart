import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "../../ui/skeleton";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { addProduct } from "@/app/actions/product";

interface ProductData {
  title: string;
  price: number;
  imageUrl?: string;
  description: string;
  tags: string[];
}

export const ProductCard = ({ data }: { data: ProductData }) => {
  return (
    <Card className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        {data.imageUrl ? (
          <div className="mb-4 md:mb-0">
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={300}
              height={200}
              className="rounded-lg object-contain h-64 w-full"
            />
          </div>
        ) : (
          <div className="relative">
            <Skeleton className="h-64 w-full mb-4" />
            <div className="absolute top-[50%] right-[50%] translate-x-[50%]">
              Uploading Image...
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl font-semibold">
            {data.title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            Price: Rs. {data.price}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm md:text-base">{data.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-gray-200 text-black text-xs md:text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <form action={addProduct}>
            <input type="hidden" value={data.title} name="name" />
            <input type="hidden" value={data.description} name="desc" />
            <input type="hidden" value={data.price} name="price" />
            <input type="hidden" value={data.tags} name="category" />
            <input type="hidden" value={data.imageUrl} name="images" />

            <Button type="submit" className="w-full md:w-auto">
              Upload
            </Button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
};
