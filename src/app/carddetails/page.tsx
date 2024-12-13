


import CardDetails from "../components/CardDetails";
import React from "react";
import Review from "../components/Review";

const page = () => {
  return (
    <>
      <div>
     <CardDetails/>
        <div className="flex gap-14 w-11/12 mx-auto">
    <Review/>
        </div>
      </div>
    </>
  );
};

export default page;