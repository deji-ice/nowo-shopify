import Image from 'next/image';
import React from 'react';

const MainImage = () => {
  return (
    <div>
      <Image
        className="h-screen w-screen object-fill"
        alt="main image"
        src={
          'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        width={1920}
        height={1080}
        objectFit="cover"
      />
    </div>
  );
};

export default MainImage;
