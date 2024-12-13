"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { addProduct } from "@/app/actions/product";
// import { toast } from "@/components/ui/use-toast"
// import { addProduct } from './actions'

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
  "Sports",
];

export default function AddProductForm() {
  const [imageUrls, setImageUrls] = useState<string[]>([""]);

  return (
    <form action={addProduct} className="space-y-6 container">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" name="name" />
      </div>

      <div>
        <Label htmlFor="desc">Description</Label>
        <Textarea id="desc" name="desc" />
      </div>

      <div>
        <Label>Images</Label>
        {imageUrls.map((url, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <Input
              type="url"
              placeholder="Image URL"
              value={url}
              onChange={(e) => {
                const newUrls = [...imageUrls];
                newUrls[index] = e.target.value;
                setImageUrls(newUrls);
              }}
              name="images"
            />
            {index === imageUrls.length - 1 && (
              <Button
                type="button"
                onClick={() => setImageUrls([...imageUrls, ""])}
              >
                Add
              </Button>
            )}
          </div>
        ))}
      </div>

      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" step="0.01" name="price" />
      </div>

      <div>
        <Label>Categories</Label>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} value={category} name="category" />
              <Label htmlFor={category}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="hotDeals" name="hotDeals" />
        <Label htmlFor="hotDeals">Hot Deal</Label>
      </div>

      <Button type="submit">Add Product</Button>
    </form>
  );
}
