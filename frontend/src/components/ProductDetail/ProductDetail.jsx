import React, { useState, useEffect } from "react";
import star from "../../assets/star.svg";
import QuestionsAnswersHome from "../QuestionsAnswersHome/QuestionsAnswersHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registro2 from "../Registro/Registro2";
import CountdownTimer from "../Countdown/CountdownTimer";
import {
  best_seller,
  usa,
} from "../../assets/index";

const ProductDetail = ({ homeVariant, handleVariantDetail }) => {
  const [images, setImages] = useState({
    img1: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-skincare-anti-aging_31bfc33b-2198-456f-b90c-dbeceaa152c7.jpg?v=1712585837",
    img2: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_10.png?v=1712783675",
    img3: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_12.png?v=1712783697",
  });
  const [showRegistro, setShowRegistro] = useState(false);
  // const [activeImg, setActiveImage] = useState(objectVariant.img);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState(
    {
      id: 2,
      variant: "DOUBLE + 2 SERUM - (25% DISCOUNT)",
      price: 119,
      compare_price: 170,
      free_shipping: true,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_10.png?v=1712783675",
      contains: [
        `X2 Anti-Aging Repair Cream <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
        `X2 Serum for Dark Circles<span style="font-weight: normal;"> 0.5fl oz 15ml </span>`,
        `Gift VIP Rejuvenation Advisor (Direct Access)`,
      ],
      link: "https://gleskin.com/cart/44844070273277:1",
    });
  const variants = [
    {
      id: 1,
      variant: "Single Cream",
      price: 39,
      compare_price: 49,
      free_shipping: false,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-skincare-anti-aging_31bfc33b-2198-456f-b90c-dbeceaa152c7.jpg?v=1712585837",
      contains: [
        `X1 Anti-Aging Repair Cream  <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
      ],
      link: "https://gleskin.com/cart/44844070240509:1",
    },
    {
      id: 2,
      variant: "DOUBLE + 2 SERUM - (25% DISCOUNT)",
      price: 119,
      compare_price: 170,
      free_shipping: true,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_10.png?v=1712783675",
      contains: [
        `X2 Anti-Aging Repair Cream <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
        `X2 Serum for Dark Circles<span style="font-weight: normal;"> 0.5fl oz 15ml </span>`,
        `Gift VIP Rejuvenation Advisor (Direct Access)`,
      ],
      link: "https://gleskin.com/cart/44844070273277:1",
    },
    {
      id: 3,
      variant: "TRIPLE + 3 SERUM - (35% DISCOUNT)",
      price: 170,
      compare_price: 255,
      free_shipping: true,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_12.png?v=1712783697",
      contains: [
        `X3 Anti-Aging Repair Cream <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
        `X3 Serum for Dark Circles<span style="font-weight: normal;"> 0.5fl oz 15ml </span>`,
        `Gift VIP Rejuvenation Advisor (Direct Access)`,
      ],
      link: "https://gleskin.com/cart/44844070306045:1",
    },
  ];

  useEffect(() => {
    if (homeVariant !== null) {
      handleSelectVariant(homeVariant);
      handleSelectedVariant(homeVariant);
    }
  }, [homeVariant]);

  // useEffect(() => {
  //   handleSetObjectVariant(selectedVariant, variants);
  // }, [selectedVariant, variants]);

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  // const handleSetObjectVariant = (selectedVariant, allVariants) => {
  //   const foundVariant = allVariants.find(
  //     (variant) => variant.id === selectedVariant
  //   );
  //   setObjectVariant(foundVariant);
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleSelectedVariant = (variantId) => {
    handleVariantDetail(variantId);
    const selectedVariant = variants.find(
      (variant) => variant.id === variantId
    );
    setObjectVariant(selectedVariant);
  };

  const handleShowRegistro = () => {
    setShowRegistro(!showRegistro);
  };
  return (
    <div className="bg-white flex flex-wrap lg:flex-nowrap space-y-2">
      <div className="flex flex-col gap-6 lg:w-2/4 ">
        <div className="sticky top-0">
          <img
            src={objectVariant.img}
            alt=""
            className="w-full h-auto aspect-square object-cover rounded-xl"
          />
      
        </div>
      </div>
      <div className="flex flex-wrap h-full justify-start items-start w-full lg:w-1/2 px-0 lg:px-10 space-y-2">
        <div className="w-full flex h-6 ">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <h1 className="text-gray-500 text-xl mx-2">(1319 Reviews)</h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <h1 className="text-4xl lg:text-5xl text-left text-gray-800 font-sans-700">
            {objectVariant.variant}
          </h1>
        </div>
        <div className="w-full flex justify-start items-start text-[12px]">
          New 🏆 Innovation in skin health 2024
        </div>
        <div className="w-full flex justify-start items-start py-4">
          <h1 className="text-gray-700 font-sans-500 text-left">
            This Anti-aging cream contains Vitamin E, B3, and B5. By using the
            product twice a day you will ensure your skin is well moisturized
            retaining its natural elasticity.
          </h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <ul className="text-left text-md lg:text-xl list-disc pl-4 lg:pl-6">
            {objectVariant.contains?.map((phrase) => (
              <li
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: phrase }}
              ></li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 py-4">
          <div className="flex items-center w-full">
            <div className="flex-grow rounded-md h-[2px] bg-[#1c4cfc]"></div>
            <div className="px-4 font-sans-400">Bundle and Save</div>
            <div className="flex-grow h-[2px] bg-[#1c4cfc]"></div>
          </div>
          {variants?.map((variant, index) => {
            const savings = variant.compare_price - variant.price;
            return (
              <div
                key={index}
                className={`${
                  variant.id === selectedVariant
                    ? "bg-gray-200  border-[#1c4cfc]"
                    : "bg-gray-100 border-gray-400 "
                } relative h-24 w-full  border-2 rounded-md flex gap-4 py-2 lg:py-4 px-2 lg:px-4 lg:px-8 cursor-pointer  hover:bg-gray-200`}
                onClick={() => handleSelectedVariant(variant.id)}
              >
                <div
                  className={`${
                    variant.id === selectedVariant ? "bg-[#1c4cfc]" : ""
                  } w-6 h-6  rounded-full border-gray-600 border-2 mt-[6px]`}
                ></div>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col justify-start">
                    <div className="flex gap-2">
                      <p className="font-noto-500 text-gray-600 text-left text-md lg:text-xl">
                        {variant.variant}
                      </p>
                      {variant.free_shipping ? (
                        <div className="mr-3 p-2 py-1 border-[#1c4cfc] text-[#1c4cfc] text-sm font-sans-400 border-2 rounded-md">
                          Free Shipping
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="text-sm font-noto-300 text-left">You Save ${savings}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-sans-500 text-gray-700">
                      ${variant.price}
                    </p>
                    <p className="font-sans-400 text-gray-600 line-through">
                      ${variant.compare_price}
                    </p>
                  </div>
                </div>
                {variant.id === 2 ? (
                  <div className="absolute w-10 lg:w-12 top-[-18px] lg:top-[-10px] right-[-14px] lg:right-[-23px]">
                    <img
                      src={best_seller}
                      alt="best-seller"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-start items-start">
          <div className="w-[65px] flex justify-start items-start  rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/dermatologist-gle.png?v=1712771349"
              alt=""
            />
          </div>
          <div className="w-[100%] pl-6">
            <p className="text-left text-sm">
              We strongly recommend a 90-day supply (2 creams minimum), as
              studies indicate that at least 45 days are required to reduce
              expression lines and 90 days to repair skin cell tissues, visibly
              diminishing wrinkles. <br /> <span className="font-bold">Dr. Elizabeth Chen</span>
            </p>
          </div>
        </div>
        <CountdownTimer />
        <div className="w-full ">
          <div className="flex space-x-2 justify-center items-center">
            <p className="font-sans-400 pb-2">
              Shipping 2 to 5 days from Miamo, USA
            </p>
            <img src={usa} alt="au" className="w-4 h-4 mb-2" />
          </div>

          <a href={objectVariant.link}>
          <button
            id="add-to-bag-button"
            className="w-full rounded-md bg-[#1c4cfc] text-2xl font-sans-500 text-gray-200 px-2 py-4"
          >
            {objectVariant ? ` 👉🏻 ADD TO BAG $${objectVariant.price}` : ""}
          </button>
          </a>
        </div>
        <div className="w-full flex justify-center items-center py-6">
         <img src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/security-logos_8df234ec-25ca-4c88-9c6c-38f9dbe1e7cf.webp?v=1701626722" alt="" />
        </div>
        <div className="w-full ">
          <QuestionsAnswersHome />
        </div>
        <div className="w-full text-center text-lg font-sans-500 text-[#1c4cfc]">
        123,000+ Satisfied Clients
        </div>
      </div>
      {showRegistro ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Registro2 handleShowRegistro={handleShowRegistro} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDetail;
