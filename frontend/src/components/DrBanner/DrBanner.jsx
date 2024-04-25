import React from 'react';

const DrBanner = () => {
  return (
    <div className="flex justify-center items-center bg-[#ececec] overflow-hidden">
      <div className="flex justify-between items-center h-[250px]  md:container mx-auto md:ml-72 md:mr-32 md:flex md:items-center">
        <div className="w-[60%] px-2">
          <img src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Dr-Banner.png?v=1712785854" alt="Imagen" className="max-w-full h-auto" width="400px" height="400px" />
        </div>
        <div className="text-left px-2">
          <div className="font-bold text-2xl lg:text-4xl mb-4">Dr. Elizabeth Chen</div>
          <div className="text-lg lg:text-xl mb-2">45 Day Guarantee</div>
          <div className="text-lg lg:text-xl ">Guaranteed results or your money back</div>
        </div>
      </div>
    </div>
  );
};

export default DrBanner;
