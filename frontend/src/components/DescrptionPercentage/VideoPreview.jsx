import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo_blanco } from "../../assets";
import VideoPlayer from "./VideoPlayer";
const VideoWithPreview = () => {
  const VideosUrl = [
    {
      url: "https://cdn.shopify.com/videos/c/o/v/6f549ba7ee574a2cb31d0432909ceb14.mp4",
      coverImg: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-skin-review-testimonial-night-cream.webp?v=1663537490",
    },
    {
      url: "https://cdn.shopify.com/videos/c/o/v/344a32f053b14cafb84af94ea7f1c9df.mp4",
      coverImg: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-skincare-wrinkle-cream-review-testimonial.png?v=1663538145",
    },
    {
      url: "https://cdn.shopify.com/videos/c/o/v/5f862cb6d9e1428f8dbb50b2e50f718d.mp4",
      coverImg: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-skincare-for-wrinkles-review-testimonial.png?v=1663538799",
    },
    {
      url: "https://cdn.shopify.com/videos/c/o/v/d7f39f5e78d5490d9495568ec7d70522.mp4",
      coverImg: "https://cdn.shopify.com/s/files/1/0436/0673/7049/files/gle-facial-moisturizer.png?v=1663538923",
    },
  ];
  const settings = {
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    // focusOnSelect: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className=" py-12 w-full lg:w-full h-auto lg:h-[550px] overflow-hidden">
      <Slider {...settings} className="">
        {VideosUrl?.map((video, index) => (
          <VideoPlayer video={video} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default VideoWithPreview;
