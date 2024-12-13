


import CardDetails from "../components/CardDetails";
import React from "react";
import Review from "../components/Review";
import Services from "../components/Services";
import Card from "@/components/Card";

const page = () => {
  return (
    <>
      <div>
     <CardDetails/>
        <div className="grid grid-cols-12 gap-14 w-11/12 mx-auto">
        <div className="col-span-4">

        <Services/>
        </div>
        <div className="col-span-8">

    <Review/>
        </div>
        </div>
        <div>
          <h1>Related Items</h1>
          <Card/>
        </div>
      </div>
    </>
  );
};

export default page;