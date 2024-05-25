import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import React from 'react';

const NewArrivals = async () => {
  const products = await getProducts({}); // Fetch the products
  const latestProducts = products.slice(0, 5); // Get the latest 5 products
  return (
    <div className="mt-20 flex h-screen flex-col items-center gap-8 p-10">
      <h2 className="text-2xl font-semibold uppercase">New Arrivals</h2>
      <div className="flex  gap-7 *:flex *:h-80 *:w-52 *:flex-col *:items-center *:justify-center  *:border *:border-slate-700  ">
        {latestProducts.map((product) => (
          <div className="justify-between p-5" key={product.id}>
            <Image
              src={product.featuredImage?.url}
              height={400}
              width={200}
              alt={product.description}
            />
            <p>{product.title}</p>
          </div> // Display the product name
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
