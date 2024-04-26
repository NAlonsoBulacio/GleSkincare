import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BeforeAfterReviews from "../../components/BeforeAfterReviews/BeforeAfterReviews";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import BenefitsandVideo from "../../components/BenefitsAndvideo/BenefitsandVideo";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import Reviews from "../../components/Reviews/Reviews";
import DrBanner from "../../components/DrBanner/DrBanner";
import WhatIsGle from "../../components/WhatIsGle/WhatIsGle";
import YoutubePlayer from "../../components/YoutubePlayer/YoutubePlayer";
import QuestionsAnswersEnd from "../../components/QuestionsAnswersHome/QuestionsAnswersEnd";
import Brands from "../../components/Brands/Brands";
const LandingPage = () => {

  const variants = [
    {
      id: 1,
      variant: "Single Pack",
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

  const initialVariant =  {
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
  }

  const [homeVariant, setHomeVariant] = useState(2);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };
  return (
    <div>
      <Header />
      <div className="px-4 lg:px-10 xl:px-24 bg-white space-y-6 lg:space-y-20 py-4">
        <ProductDetail
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
          variants={variants}
          initialVariant={initialVariant}
        />
        <BenefitsandVideo />
        <WhatIsGle />
        <BeforeAfterReviews />
      </div>
      <DrBanner />
      <Brands />
      <div className="px-4 lg:px-10 xl:px-24">
        <DescriptionPercentage />
        <YoutubePlayer />
        <Reviews />
        <QuestionsAnswersEnd />
      </div>
      <CalendlyFooter
        handleVariantFooter={handleHomeVariant}
        homeVariant={homeVariant}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
