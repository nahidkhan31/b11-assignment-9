import React from "react";
import { useLoaderData } from "react-router";
import BoxShow from "../BoxShow";

const BoxContainer = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mt-5">Featured Boxes</h2>
      <div className="mt-10 space-y-5 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5">
        {data.map((box) => (
          <BoxShow key={box.id} box={box}></BoxShow>
        ))}
      </div>
    </div>
  );
};

export default BoxContainer;
