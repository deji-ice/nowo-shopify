import clsx from 'clsx';
import LogoIcon from './icons/logo';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
    // className={clsx(
    //   'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
    //   {
    //     'h-[40px] w-[40px] rounded-xl': !size,
    //     'h-[30px] w-[30px] rounded-lg': size === 'sm'
    //   }
    // )}
    >
      {/* <LogoIcon
        className={clsx({
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm'
        })}
      /> */}
      <Image
        width={200}
        height={200}
        alt="logo"
        src={'https://res.cloudinary.com/dhvwthnzq/image/upload/v1715410811/nowo/Nowo_1_q7jtan.png'}
      />
    </div>
  );
}
