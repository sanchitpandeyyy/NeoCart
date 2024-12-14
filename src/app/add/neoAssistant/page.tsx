"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mic, Loader2, ImageIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { ProductCard } from "@/components/custom/productCard/ProductCard";

interface ProductData {
  title: string;
  description: string;
  tags: string[];
  price: number;
  imageUrl?: string;
}

function ProductSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-48 w-full mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-6 w-24" />
      </CardContent>
    </Card>
  );
}

export default function NepaliSpeechToProductConverter() {
  const {
    transcript,
    isListening,
    productJSON,
    startSpeechRecognition,
    stopSpeechRecognition,
  } = useSpeechRecognition();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (productJSON instanceof Error) {
      console.error("Speech processing error:", productJSON);
    }
  }, [productJSON]);

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
      setImageUrl(data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleStartSpeechRecognition = async () => {
    if (selectedFile) {
      uploadImage();
      startSpeechRecognition();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="text-red-700">Smart NEO</span>
                <span className="text-blue-800">CART Assistance</span>
                <p className="text-sm font-medium text-gray-700">
                  Add your product
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="flex-1"
                  ref={fileInputRef}
                />
                <Button
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
              {previewUrl && (
                <div className="mt-4">
                  <Image
                    src={previewUrl}
                    alt="Selected image"
                    width={300}
                    height={200}
                    className="rounded-lg object-contain h-64 w-full"
                  />
                </div>
              )}
              <div className="flex gap-2">
                <Button
                  onClick={handleStartSpeechRecognition}
                  disabled={isListening || !selectedFile}
                  className="w-full text-lg py-6"
                >
                  {isListening ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      सुन्दै छु...
                    </>
                  ) : (
                    <>
                      <Mic className="mr-2 h-5 w-5" />
                      उत्पादन बारे बोल्नुहोस्
                    </>
                  )}
                </Button>
                {isListening && (
                  <Button
                    onClick={stopSpeechRecognition}
                    variant="destructive"
                    className="w-full text-lg py-6"
                  >
                    रोक्नुहोस्
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {transcript && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Nepali Transcript</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{transcript}</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          {transcript && !productJSON && <ProductSkeleton />}
          {productJSON && !isListening && (
            <ProductCard
              data={{
                ...(productJSON as ProductData),
                imageUrl: imageUrl || undefined,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
