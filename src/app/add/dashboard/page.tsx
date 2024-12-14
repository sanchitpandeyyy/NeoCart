/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { addProduct } from "@/app/actions/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MinusCircle, DollarSign, Upload } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
  "Sports",
];

export default function AddProductForm() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageUrls([...imageUrls, data.secure_url]);
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold text-center">
          Add New Product
        </CardTitle>
        <p className="text-muted-foreground text-center">
          Fill in the details to add a new product to your inventory
        </p>
      </CardHeader>
      <CardContent>
        <form action={addProduct} className="space-y-8">
          <input type="hidden" name="images" value={imageUrls} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-semibold">
                Product Name
              </Label>
              <Input
                id="name"
                name="name"
                className="text-lg"
                placeholder="Enter product name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="text-lg font-semibold">
                Price
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  name="price"
                  className="pl-10 text-lg"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc" className="text-lg font-semibold">
              Description
            </Label>
            <Textarea
              id="desc"
              name="desc"
              className="min-h-[100px] text-lg"
              placeholder="Describe your product"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold">Images</Label>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="flex-1"
                  ref={fileInputRef}
                />
                <Button
                  type="button"
                  onClick={uploadImage}
                  disabled={!selectedFile}
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload
                </Button>
              </div>
              {previewUrl && (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <ScrollArea className="h-72 w-full rounded-md border">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                  {imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group"
                    >
                      <img
                        src={url}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          setImageUrls(imageUrls.filter((_, i) => i !== index))
                        }
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold">Categories</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 transition-colors hover:bg-secondary/30 cursor-pointer"
                >
                  <Checkbox
                    id={category}
                    value={category}
                    name="category"
                    className="sr-only"
                  />
                  <Badge
                    variant="outline"
                    className="text-sm font-medium peer-checked:bg-primary peer-checked:text-primary-foreground"
                  >
                    {category}
                  </Badge>
                </label>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex items-center space-x-2">
            <Checkbox id="hotDeals" name="hotDeals" />
            <Label htmlFor="hotDeals" className="text-lg font-semibold">
              Hot Deal
            </Label>
          </div>

          <Button type="submit" className="w-full text-lg" size="lg">
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
