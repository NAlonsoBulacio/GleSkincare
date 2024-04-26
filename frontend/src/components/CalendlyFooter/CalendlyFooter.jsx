import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CalendlyFooter = ({ handleVariantFooter, homeVariant }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState({
    id: 2,
    variant: "2-Pack",
    price: 35,
    compare_price: 60,
    free_shipping: true,
    save: "Save $12",
  });

  const variants = [
    {
      id: 1,
      variant: "SINGLE",
      price: 39,
      compare_price: 49,
      free_shipping: false,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-skincare-anti-aging_31bfc33b-2198-456f-b90c-dbeceaa152c7.jpg?v=1712585837",
      contains: [
        `X1 Anti-Aging Repair Cream  <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
      ],
      link: "https://gleskin.com/cart/44844070240509:1",
      save: "Save $10",
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
      save: "Save $51",
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
      save: "Save $85",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedVariant(homeVariant);
    handleSelectedVariant(homeVariant);
  }, [homeVariant]);

  const handleSelectedVariant = (variantId) => {
    handleVariantFooter(variantId);
    const selectedVariant = variants.find(
      (variant) => variant.id === variantId
    );
    setObjectVariant(selectedVariant);
  };
  return (
    <footer
      className={`fixed bottom-0 left-0 w-screen h-[90px]k h-auto bg-slate-200 flex flex-wrap justify-center border-t border-gray-400 items-center transition-all duration-300 rounded-t-2xl z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className="flex  justify-center items-center space-x-3 cursor-pointer h-10 rounded-t-2xl w-full px-8 bg-slate-300"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p>Show options</p>
        <IoIosArrowDown
          className={` ${
            showOptions ? "rotate-180" : ""
          } transition-transform duration-300 text-lg`}
        />
      </div>
      <div
        className={` ${
          showOptions ? "h-[120px]" : "h-[1px]"
        }  w-full flex justify-center space-x-2 transition-height duration-300`}
      >
        {variants?.map((variant, index) => (
          <div
          key={index}
            className={`${
              variant.id === selectedVariant ? "bg-slate-400" : ""
            } ${
              showOptions ? "block opacity-100" : " opacity-0"
            } relative w-24 h-20 border-slate-500 border-2 rounded-xl my-4 overflow-hidden flex  cursor-pointer transition-opacity duration-400`}
            onClick={() => handleSelectedVariant(variant.id, variant.price)}
          >
            <div className="w-full flex flex-col justify-start items-center">
              <div className="bg-slate-500 w-full h-8 text-gray-200 flex justify-center items-center">
                {variant.save}
              </div>
              <div className="flex gap-2 h-[50px]">
                <p className="font-noto-600 text-gray-600 text-md lg:text-lg">
                  {variant.variant}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-2 gap-x-6">
        {/* <h1 className="hidden lg:block text-3xl font-plus-400 text-gray-800">
          Tratamiento Anti-Aging Infalible
        </h1> */}
        <div>
          <a href={objectVariant.link}>
            <button className="w-full rounded-md bg-[#1c4cfc] text-xl lg:text-2xl font-sans-500 text-gray-200 px-2 py-4">
              {objectVariant ? ` 👉🏻 ADD TO BAG $${objectVariant.price}` : ""}
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CalendlyFooter;
