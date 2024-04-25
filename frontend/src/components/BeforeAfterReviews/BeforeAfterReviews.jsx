import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../assets/star.svg";
import {before_after} from "./index";
const BeforeAfterReviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="gap-y-8">
      <div className="w-full flex flex-wrap justify-center items-center gap-2">
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center text-2xl font-bold">
            Before and After
          </div>
        </div>
      </div>
      <div className="py-12">
        <Slider {...settings} className="">
          { before_after?.map((rev, index) => (<div key={index} className="px-8">
            <div
            className="w-auto flex flex-wrap justify-center items-start gap-4 overflow-hidden">
              <img
                src={rev.img}
                alt="img_before"
                className="rounded-3xl"
              />
            </div>
          </div>))}
        </Slider>
      </div>
    </div>
  );
};

export default BeforeAfterReviews;
