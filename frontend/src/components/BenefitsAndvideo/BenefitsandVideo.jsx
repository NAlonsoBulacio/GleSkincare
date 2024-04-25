import React from "react";
import { FaLeaf } from "react-icons/fa";
const BenefitsandVideo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* <div className="w-full">
        <h1 className="text-senter font-sans-700 text-3xl text-gray-700">
          Making your skin look younger and healthier is now much easier!
        </h1>
      </div>
      <div className="w-full ">
        <p className="text-center font-sans-400 text-md text-gray-600 px-3">
          Not all creams provide effective results, as some brands may offer
          products with ingredients or formulas that have been proven not to
          work, simply because they are cheaper. At If Beauty, our mission is to
          provide the best cream possible, with ingredients that have been
          proven to work over our 30 years of working with our patients.
        </p>
      </div>
      <div className="w-full flex justify-center py-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.shopify.com/videos/c/o/v/7e8ec8551dd14572bc6f291c3a33378e.mp4"
          className="w-[80%] lg:w-[30%] rounded-full"
        />
      </div> */}
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-1/2 lg:w-1/4 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto h-[70px] flex justify-center px-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/brote.png?v=1712615097"
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="py-6">
            <h1 className="text-md">Ingredients with natural active principles</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto h-[70px] flex justify-center px-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/reconocimiento-de-estrellas.png?v=1712615098"
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="py-6">
            <h1 className="text-md" >Money-back guarantee for up to 45 days</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto h-[70px] flex justify-center px-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/cabello.png?v=1712615098"
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="py-6">
            <h1 className="text-md"> 
              More than 120K customers have already rejuvenated their skin
            </h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto h-[70px] flex justify-center px-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/microscopio.png?v=1712615097"
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="py-6 flex items-start">
            <h1 className="text-md">Dermatologically tested</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsandVideo;
