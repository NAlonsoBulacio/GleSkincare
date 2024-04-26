import React, { useRef, useState } from "react";
import { logo_blanco } from "../../assets";
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoPlayer({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (event) => {
    // event.preventDefault();
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex justify-start items-center w-full px-2 ">
      <div className=" rounded-xl relative">
        <video ref={videoRef} preload="auto" controls playsInline>
          <source src={video.url} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {!isPlaying ? (
          <div className="absolute bottom-0 left-0 overflow-hidden"
          onClick={() => handleClick()}
          >
            <img className="w-full h-full" src={video.coverImg} alt="" />
          </div>
        ) : (
          ""
        )}
        {!isPlaying ? (
          <div className="absolute top-[50%] left-[40%]">
            <FaRegCirclePlay
              className="text-5xl cursor-pointer text-black"
              onClick={() => handleClick()}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
