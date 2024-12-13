import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "" },
  ];

  return (
    <div className="p-6">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-2xl font-bold mt-4">About Us</h1>
    </div>
  );
};

export default AboutPage;
