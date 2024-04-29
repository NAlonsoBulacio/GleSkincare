import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CalendlyFooter = ({ handleVariantFooter, homeVariant }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState({
    id: 2,
    variant: "GLÈ ANTI-AGING BUNDLE",
    price: 99,
    compare_price: 115,
    free_shipping: true,
    img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-bundle-widehead421.png?v=1712783906&width=713",
    contains: [
      `Anti-Aging Repair Cream <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
      `Serum for Dark Circles<span style="font-weight: normal;"> 0.5fl oz 15ml </span>`,
      `Night Cream with Retinol <span style="font-weight: normal;"> 2fl oz 60ml </span>`,
      `Face Massager`,
      `Gift VIP Rejuvenation Advisor (Direct Access)`,
    ],
    link: "https://gleskin.com/cart/44869736202493:1",
    description:
      "Our bundle The Infallible Anti-Aging Treatment is the most effective anti-aging solution on the market. This solution is recommended by our specialist doctor Elizabeth Chen. it is specifically designed to effectively prevent wrinkles, repair the skin's cellular tissues and produce an immediate tightening effect. It also helps to improve skin health and quality, and alleviate epidermal disorders. ",
    save: "Save $51",
  });

  const variants = [
    {
      id: 1,
      variant: "GLÈ SMALL BUNDLE",
      price: 63,
      free_shipping: false,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/Disenosintitulo_11.png?v=1712783724&w",
      contains: [
        `Anti-Aging Repair Cream <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
        `Serum for Dark Circles<span style="font-weight: normal;"> 0.5fl oz 15ml </span>`,
      ],
      link: "https://gleskin.com/cart/44869736169725:1",
      description:
        "Our small bunndle: This solution is recommended by our specialist doctor Elizabeth Chen. The Anti-aging cream contains Vitamin E, B3, and B5. By using the product twice a day you will ensure your skin is well moisturized retaining its natural elasticity + Gle for Dark Circles is going to be your best friend, ensuring a natural healthy glow with mind-blowing Caffeine and Vitamin C for your morning ritual around the eye area .",
      save: "Save $10",
    },
    {
      id: 2,
      variant: "GLÈ ANTI-AGING BUNDLE",
      price: 99,
      compare_price: 115,
      free_shipping: true,
      img: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-bundle-widehead421.png?v=1712783906&width=713",
      contains: [
        `Anti-Aging Repair Cream <span style="font-weight: normal;"> 4fl oz 118ml </span>`,
        `Serum for Dark Circles<span style="font-weight: normal;"> 0.5fl oz 15ml </span>`,
        `Night Cream with Retinol <span style="font-weight: normal;"> 2fl oz 60ml </span>`,
        `Face Massager`,
        `Gift VIP Rejuvenation Advisor (Direct Access)`,
      ],
      link: "https://gleskin.com/cart/44869736202493:1",
      description:
        "Our bundle The Infallible Anti-Aging Treatment is the most effective anti-aging solution on the market. This solution is recommended by our specialist doctor Elizabeth Chen. it is specifically designed to effectively prevent wrinkles, repair the skin's cellular tissues and produce an immediate tightening effect. It also helps to improve skin health and quality, and alleviate epidermal disorders. ",
      save: "Save $51",
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

  const handleClick = () => {
    window.fbq("trackCustom", "Checkout");
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
              showOptions ? "block opacity-100 transition-opacity duration-400" : "hidden opacity-0"
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
          <a className="" href={objectVariant.link} onClick={() => handleClick()}>
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
