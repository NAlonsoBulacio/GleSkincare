import React from "react";
import { FaLeaf } from "react-icons/fa";
const BenefitsandVideo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-1/2 lg:w-1/4 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-[70px] h-[70px] flex justify-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/brote.png?v=1712615097"
              alt=""
              className="w-[100%] h-full"
            />
          </div>
          <div className="py-6">
            <h1 className="text-md">Ingredients with natural active principles</h1>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-[70px] h-[70px] flex justify-center ">
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
          <div className="w-[70px] h-[70px] flex justify-center ">
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
          <div className="w-[70px] h-[70px] flex justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/microscopio.png?v=1712615097"
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="w-full py-6 flex justify-center items-start">
            <h1 className="text-md ">Dermatologically tested</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsandVideo;
