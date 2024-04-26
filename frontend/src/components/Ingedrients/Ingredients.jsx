import React from "react";

const Ingredients = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-8 space-y-2">
      <h1 className="text-xl font-noto-600">MAIN INGREDIENTS</h1>
      <div className="w-full flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-[20%] px-10">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/b5-icon.webp?v=1653570241&width=535"
            alt="img-ingredient"
          />
        </div>
        <div className="w-full lg:w-[76%]">
          <p className="text-md font-noto-300"><span className="font-bold">Vitamin E</span> - is high in antioxidants, and it affects blood circulation. That might be why people notice a difference in the firmness and structure of their skin after topical use of vitamin E products. A 2013 review of the literature tells us that vitamin E and other natural ingredients rich in antioxidants are generally accepted as a treatment for delaying wrinkles, also called photoaging.</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-[20%] px-10">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/algae-icon.webp?v=1653570241&width=535"
            alt="img-ingredient"
          />
        </div>
        <div className="w-full lg:w-[76%]">
          <p className="text-md font-noto-300"><span className="font-bold">Algae Extract</span> - Algae is the ocean’s secret and has been used in skincare for over thousands of years. It is a driving force of minerals and nutrients that keep toxins away for good. It has been proven to hydrate immensely. Skin that is more prone to dry will benefit the most. This is a great ingredient for any anti-aging cream due to all these benefits. Suitable for the most sensitive of skins.  Algae Extract is full of Vitamins A, B, C, and even E.</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-[20%] px-10">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/b3-icon.webp?v=1653570241&width=535"
            alt="img-ingredient"
          />
        </div>
        <div className="w-full lg:w-[76%]">
          <p className="text-md font-noto-300"><span className="font-bold">Vitamins B3 and B5</span> - These two combined, equal younger looking, smoother, softer skin. Vitamin B3 is a communicating ingredient that helps to send messages to cells to diminish fine lines and wrinkles while improving skins elasticity, fighting free-radical damage and improving skin tone and texture.</p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
