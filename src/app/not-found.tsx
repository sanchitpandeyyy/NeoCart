import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-4 text-gray-800">
      <div className="w-full max-w-2xl text-center">
        <Image
          src="/images/neocart.png"
          alt="NeoCart Logo"
          width={150}
          height={50}
          className="mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist in our Nepali marketplace.
          But don't worry, we have plenty of other great items!
        </p>
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search our marketplace..."
              className="pl-10 pr-4 py-2 w-full border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-600"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <Button className="ml-2 hover:bg-blue-600 text-white rounded-full px-6 py-2">
            Search
          </Button>
        </div>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
      <footer className="mt-16 text-sm text-gray-500">
        <p>NeoCart - Your All in One AI driven Nepali Marketplace</p>
      </footer>
    </div>
  );
}
