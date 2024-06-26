import Image from 'next/image';
import React from 'react';

const MainImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        className="h-[100vh]  w-screen"
        alt="main image"
        src={
          'https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        width={1920}
        height={1080}
        objectFit="contain"
      />
      {/* 
      <video className="mt-[5%] h-[95dvh] w-screen" controls autoPlay preload="none" loop>
        <source
          src="https://video.asos-media.com/Navigation/_content_HP_DESKTOP_WW_Flash9_1440xAuto_5000K.mp4"
          type="video/mp4"
        />
        <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute  z-10 flex flex-col  items-center justify-center gap-6 text-white">
        <div className="text-center *:drop-shadow-lg">
          <h1 className="mb-5 text-4xl font-semibold">Welcome to NOWO</h1>
          <h2 className="text-2xl ">Fashion that gracefully tells your story</h2>
        </div>
        <button className="bg-white px-5 py-2 text-center text-base font-medium uppercase text-black">
          Explore
        </button>
      </div>
    </div>
  );
};

export default MainImage;
