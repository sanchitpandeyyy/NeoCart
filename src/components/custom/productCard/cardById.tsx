import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/app/actions/product";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  tags: string[];
};

interface ProductCardsProps {
  data: Product[];
}

const ProductCards: React.FC<ProductCardsProps> = ({ data }) => {
  // console.log(data);

  const [res, setRes] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        data.map(async (item) => {
          const product = await getProductById(item.id.toString());
          return product;
        })
      );
      setRes(result);
    };

    fetchData();
  }, [data]);

  console.log(res);
  return (
    <ScrollArea
      className={`flex-grow pr-4 pb-10 h-[550px] scroll-area ${
        res.length === 0 && "hidden"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {res.map((product) => (
          <Card key={product?.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">ID: {product?.id}</Badge>
                <span className="text-2xl font-bold text-primary">
                  {product?.price}
                </span>
              </div>
              <h3 className="text-lg font-semibold line-clamp-2">
                {product?.name}
              </h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {product?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product?.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ProductCards;
