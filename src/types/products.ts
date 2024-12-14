// types/product.ts
export type Product = {
  id: string;
  name: string;
  desc: string;
  images: string[];
  price: number;
  rating: number;
  category: string[];
  hotDeals: boolean;
  userId?: string | null;
};
