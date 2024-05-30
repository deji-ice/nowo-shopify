import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from 'components/grid/tile';
import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BestSellers = async () => {
  const products = await getProducts({}); // Fetch the products
  const latestProducts = products.slice(0, 5); // Get the latest 5 products
  return (
    <div className="mt-20 flex h-fit flex-col items-center gap-8 p-10">
      <div className="flex w-full items-center justify-between px-10">
        <h2 className="text-xl font-semibold uppercase">Best Sellers</h2>
        <span className=" flex items-center gap-2 ">
          <p className="text-xs font-medium">MORE</p> <ArrowRightIcon className="h-4" />
        </span>
      </div>
      <div className="flex  gap-7  *:h-80 *:w-52 ">
        {latestProducts.map((product) => (
          <div
            className="flex flex-col   items-start justify-between gap-4 hover:cursor-pointer "
            key={product.id}
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
            {/* <Image
                className="h-full transform transition-transform duration-300 hover:scale-105"
                src={product.featuredImage?.url}
                height={400}
                width={200}
                alt={product.description}
              /> */}
            <div className="flex w-full flex-col items-start justify-start gap-2 text-xs uppercase">
              <p className="font-medium ">mm,mnjk{product.title}</p>
              <p className="font-light text-gray-700">
                ₦{product.priceRange.maxVariantPrice.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
