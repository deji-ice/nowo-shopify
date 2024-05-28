import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-black px-20 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="flex gap-28 text-white">
          <div className="flex gap-16">
            <ul className="flex flex-col gap-1">
              <li className="mb-2 uppercase">
                <h3>Category</h3>
              </li>
              <li>Women</li>
              <li>About</li>
              <li>Home</li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="mb-2 uppercase">
                <h3>Collections</h3>
              </li>
              <li>Info</li>
              <li>About</li>
              <li>Home</li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="mb-2 uppercase">
                <h3>Contacts</h3>
              </li>
              <li>Info about contacts</li>
            </ul>
          </div>
          <div className="flex flex-col  gap-1 ">
            <h3 className="mb-2  uppercase">Social Media</h3> <span>logos</span>
          </div>
        </div>
        {/* <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div> */}
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed in Nigeria</p>
          <p className="md:ml-auto">
            <a href="https://vercel.com" className="text-black dark:text-white">
              Crafted by Ayodeji Atanda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
