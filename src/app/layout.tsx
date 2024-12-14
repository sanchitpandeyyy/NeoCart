import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { CartProvider } from "./products/cart/CartContext";

import SubHeader from "../components/custom/subheader";
import { Navbar } from "../components/custom/navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/custom/footer";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins",
// });

export const metadata: Metadata = {
  title: "NeoCart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <NextTopLoader color="red" />
          <Navbar />
          <SubHeader />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
