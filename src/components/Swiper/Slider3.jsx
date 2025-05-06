import React from "react";

const Slider3 = () => {
  return (
    <div className="container mx-auto my-10 align-baseline">
      <div className="bg-[url('https://i.ibb.co.com/TMFRQCSc/images.jpg')] rounded-2xl bg-no-repeat bg-cover bg-center w-[600px] h-[600px] mx-auto flex items-center justify-center px-4 md:rounded-2xl">
        <div className="max-w-2xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Discover New Subscription Boxes
          </h2>
          <p className=" text-amber-50 text-sm">
            Explore a variety of subscription boxes tallored to your interests
            and needs.
          </p>
          <button className="btn btn-primary bg-green-600 mt-10">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
