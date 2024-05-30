import BestSellers from 'components/best-sellers';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import MainImage from 'components/main-image';
import NewArrivals from 'components/new-arrivals';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <MainImage />
      <NewArrivals />
      <BestSellers />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
