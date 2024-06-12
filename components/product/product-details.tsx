'use client';

import { Product } from 'lib/shopify/types';
import { useState } from 'react';

const ProductDetails = ({ product }: { product: Product }) => {
  const [destination] = useState();
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);
  // const current = destination[index];

  // console.log(typeof current);

  const handleClick = (args: number) => {
    setIndex(args);
    setIsActive(args);
  };
  return (
    <div className="mt-8 flex  flex-col items-center gap-5 ">
      <div
        className="flex w-full gap-9 border-b border-slate-600 *:cursor-pointer *:px-1 
      *:py-3 *:text-sm"
      >
        <p
          className={`${isActive === 0 ? 'border-b-2 border-black' : ''}`}
          onClick={() => handleClick(0)}
        >
          About Product
        </p>
        <p
          className={`${isActive === 1 ? 'border-b-2 border-black' : ''}`}
          onClick={() => handleClick(1)}
        >
          Options
        </p>
        <p
          className={`${isActive === 2 ? 'border-b-2 border-black' : ''}`}
          onClick={() => handleClick(2)}
        >
          Composition
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="px-2 text-start  text-xs lg:text-sm ">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
