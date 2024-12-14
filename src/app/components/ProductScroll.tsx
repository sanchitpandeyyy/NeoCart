import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProducts } from "../actions/product";
import Link from "next/link";

export default async function HotDeals() {
  const hotDeals = await getProducts();

  return (
    <section className="py-12">
      <h2 className="mb-8 text-3xl font-bold">Hot Deals</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hotDeals.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="mb-4 h-[200px] w-full object-cover"
                />
                <Badge className="absolute right-2 top-2 bg-red-500">
                  Hot Deals
                </Badge>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  <span className="text-lg font-bold text-primary">
                    NPR {product.price - (10 % product.price)}
                  </span>{" "}
                  <span className="text-sm line-through">
                    NPR {product.price}
                  </span>
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${product.id}`} className="w-full">
                <Button className="w-full">Add to Cart</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
