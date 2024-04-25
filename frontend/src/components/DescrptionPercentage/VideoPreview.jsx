import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo_blanco } from "../../assets";
import VideoPlayer from "./VideoPlayer";
const VideoWithPreview = () => {
  const VideosUrl = [
    "https://cdn.shopify.com/videos/c/o/v/6f549ba7ee574a2cb31d0432909ceb14.mp4",
    "https://cdn.shopify.com/videos/c/o/v/344a32f053b14cafb84af94ea7f1c9df.mp4",
    "https://cdn.shopify.com/videos/c/o/v/5f862cb6d9e1428f8dbb50b2e50f718d.mp4",
    "https://cdn.shopify.com/videos/c/o/v/d7f39f5e78d5490d9495568ec7d70522.mp4",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className=" py-12 w-full lg:w-full h-auto lg:h-[550px]">
      <Slider {...settings} className="">
        {VideosUrl?.map((video, index) => (
          <VideoPlayer url={video} key={index}/>
        ))}
        {/* { VideosUrl?.map((video) => (
          <VideoPlayer url={video} />
        ))
        } */}
        {/* <div className="w-[100%] lg:w-[30%] px-2 ">
          <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
            <video
              autoPlay={true}
              muted={true}
              controls={false}
              src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
            />
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
          </div>
        </div> */}
        {/* <div className="w-[100%] lg:w-[30%] px-2">
          <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
            <video
              autoPlay={true}
              muted={true}
              controls={false}
              src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
            />
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
          </div>
        </div> */}
        {/* <div className="w-[100%] lg:w-[30%] px-2">
          <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
            <video
              autoPlay={true}
              muted={true}
              controls={false}
              src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
            />
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
          </div>
        </div> */}
        {/* <div className="px-2">
          <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
            <video
              autoPlay={true}
              muted={true}
              controls={false}
              src="https://cdn.shopify.com/videos/c/o/v/9807f673cea143efa2369e992d8d5a96.mp4"
            />
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default VideoWithPreview;
