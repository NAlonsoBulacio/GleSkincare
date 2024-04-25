import React, { useState, useRef } from "react";
import StatementList from ".././ProgressBar/ProgressBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoWithPreview from "./VideoPreview";

const DescriptionPercentage = () => {

  return (
    <div>
      <div className="flex flex-wrap justify-center items-start h-auto lg:h-[550px] xl:space-x-0">
        <div className="w-[40%] px-10 flex items-start overflow-hidden h-full rounded-xl">
          <img
            className="hidden lg:block rounded-xl object-contain h-full"
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/products/gle-wrinkles-cream.jpg?v=1705892041"
            alt=""
          />
        </div>
        <div className="w-full lg:w-[60%] flex flex-wrap justify-start items-start space-y-4 ">
          <h2 className="w-full font-sans-400 text-xl text-left text-teal-700">
            IF Beauty
          </h2>
          <img
            className="block lg:hidden rounded-xl"
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/products/gle-wrinkles-cream.jpg?v=1705892041"
            alt=""
          />
          <h1 className="font-sans-400 text-3xl lg:text-5xl text-left">
            90 days results
          </h1>
          <p className="text-left w-auto lg:w-[90%]">
            We have developed and patented the Unfailing Anti-aging Formula
            which has been scientifically proven with clinical studies conducted
            by dermatologists from Australia. These were the results:
          </p>
          <StatementList />
        </div>
      </div>
      <VideoWithPreview />
    </div>
  );
};

export default DescriptionPercentage;
