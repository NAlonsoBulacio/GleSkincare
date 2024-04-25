import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {

  const videoId = "BExs8zpa_VY";
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0, // Cambia a 1 para autoplay
    },
  };

  return (
    <div className='h-[300px] lg:h-[500px]  flex justify-center items-center py-10'>
      <YouTube videoId={videoId} opts={opts} className='w-[390px] lg:w-[750px] h-full ' />
    </div>
  );
};

export default YoutubePlayer;
