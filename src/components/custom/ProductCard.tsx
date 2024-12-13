import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
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
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>Price: Rs. {data.price}</CardDescription>
      </CardHeader>
      <CardContent>
        {data.imageUrl ? (
          <div className="mb-4">
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
              Uploding Image...
            </div>
          </div>
        )}
        <p className="mb-4">{data.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag) => (
            <Badge key={tag} className="bg-gray-200 text-black">
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

          <Button type="submit">Upload</Button>
        </form>
      </CardContent>
    </Card>
  );
};
