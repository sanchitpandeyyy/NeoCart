"use client";
import React from "react";
import { Button } from "@/components/ui/button";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center ">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Button variant="link" className="text-blue-500 hover:text-blue-700">
            <a href={item.href}>{item.label}</a>
          </Button>
          {index < items.length - 1 && ">"}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
