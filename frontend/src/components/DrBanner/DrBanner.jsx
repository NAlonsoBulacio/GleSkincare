import React from 'react';

const DrBanner = () => {
  return (
    <div className="flex justify-center items-center bg-[#ececec] overflow-hidden py-0 lg:py-12 px-0 lg:px-16">
      <div className="flex justify-between lg:justify-center items-center h-[250px]  md:container mx-auto md:ml-72 md:mr-32 md:flex md:items-center">
        <div className="w-[60%] lg:w-[50%]">
          <img src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Dr-Banner.png?v=1712785854" alt="Imagen" className="w-auto lg:w-[70%] h-auto" width="400px" height="400px" />
        </div>
        <div className="w-auto lg:w-[50%] text-left px-2">
          <div className="font-bold text-2xl lg:text-4xl mb-4">Dr. Elizabeth Chen</div>
          <div className="text-lg lg:text-xl mb-2">45 Day Guarantee</div>
          <div className="text-lg lg:text-xl ">Guaranteed results or your money back</div>
        </div>
      </div>
    </div>
  );
};

export default DrBanner;
