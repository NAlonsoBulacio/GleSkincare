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
