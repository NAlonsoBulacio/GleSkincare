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
const LandingPage = () => {
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
        />
        <BenefitsandVideo />
        <WhatIsGle />
        <BeforeAfterReviews />
      </div>
      <DrBanner />
      <div className="flex flex-wrap py-8 bg-[#ececec] px-2 lg:px-20 xl:px-20">
        <div className="w-1/2 lg:w-1/4  px-2 lg:px-14">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/vogue-logo_160x160_2x_438edd03-9bcc-4826-b566-79d63016d33b.png?v=1615321350"
            alt=""
          />
        </div>
        <div className="w-1/2 lg:w-1/4 px-2 lg:px-14">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/newyou-logo_160x160_2x_9c3fce0c-fa33-4424-8b65-7dfb8a289700.png?v=1615321350"
            alt=""
          />
        </div>
        <div className="w-1/2 lg:w-1/4  px-2 lg:px-14">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/womens-health_160x160_2x_410fbc32-aeb8-46c2-a3b1-217e476d76f9.png?v=1615321350"
            alt=""
          />
        </div>
        <div className="w-1/2 lg:w-1/4  px-2 lg:px-14">
          <img
            src="https://cdn.shopify.com/s/files/1/0436/0673/7049/files/vanity-fair-logo_160x160_2x_f4c543ad-493f-4a93-ad31-55188b55e5b7.png?v=1615321350"
            alt=""
          />
        </div>
      </div>
      <div className="px-4 lg:px-10 xl:px-24">
        <DescriptionPercentage />
        <YoutubePlayer />
        <ImageDescription />
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
