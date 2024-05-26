import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import React from 'react';

const NewArrivals = async () => {
  const products = await getProducts({}); // Fetch the products
  const latestProducts = products.slice(0, 5); // Get the latest 5 products
  return (
    <div className="mt-20 flex h-screen flex-col items-center gap-8 p-10">
      <h2 className="text-2xl font-semibold uppercase">New Arrivals</h2>
      <div className="flex  gap-7  *:h-80 *:w-52 ">
        {latestProducts.map((product) => (
          <div
            className="flex flex-col   items-start justify-between gap-4 hover:cursor-pointer "
            key={product.id}
          >
            <Image
              className="h-full transform transition-transform duration-300 hover:scale-105"
              src={product.featuredImage?.url}
              height={400}
              width={200}
              alt={product.description}
            />
            <div className="flex w-full items-center justify-between px-2 text-sm">
              <p>{product.title}</p>{' '}
              <p className="font-semibold">₦{product.priceRange.maxVariantPrice.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
