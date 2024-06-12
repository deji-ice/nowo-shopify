import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'NGN',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={` font-semibold tracking-wide`}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'code'
    }).format(parseFloat(amount))}`}
    {/* <span className={clsx('ml-1 inline', currencyCodeClassName)}>{` ${currencyCode}`}</span> */}
  </p>
);

export default Price;
