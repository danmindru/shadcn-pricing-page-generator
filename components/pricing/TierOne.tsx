'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

import { CheckIcon } from '@/components/icons/PricingCheckIcon';
import { RadioGroup, RadioGroupItem } from '@/components/shared/ui/radio-group';
import { Label } from '@/components/shared/ui/label';
import { Button } from '@/components/shared/ui/button';
import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Monthly', priceSuffix: '/month' },
  { id: '2', value: '2', label: 'Annually', priceSuffix: '/year' },
];

export const tiers: PricingTier[] = [
  {
    name: 'Free',
    id: '0',
    href: '/subscribe',
    price: { '1': '$0', '2': '$0' },
    discountPrice: { '1': '', '2': '' },
    description: `Get all goodies for free, no credit card required.`,
    features: [
      `Multi-platform compatibility`,
      `Real-time notification system`,
      `Advanced user permissions`,
    ],
    featured: false,
    highlighted: false,
    soldOut: undefined,
    cta: `Sign up`,
  },
];

export const PricingTierOneDemo = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const tier = tiers[0];
  const bannerText = '';

  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center mb-24">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          {/* <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
              Pricing
            </h1>
            <p className="mt-6 md:text-xl max-w-prose">
              We strive to provide the best service possible. This is why we
              offer a 30-day money back guarantee if you are not happy with our
              service
            </p>
          </div> */}

          {bannerText ? (
            <div className="flex justify-center my-4">
              <p className="px-4 py-3 text-xs bg-primary-100 text-black dark:bg-primary-300/30 dark:text-white/80 rounded-xl">
                {bannerText}
              </p>
            </div>
          ) : null}

          {frequencies.length > 1 ? (
            <div className="mt-16 flex justify-center">
              <RadioGroup
                defaultValue={frequency.value}
                onValueChange={(value: string) => {
                  setFrequency(frequencies.find((f) => f.value === value)!);
                }}
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <Label className="sr-only">Payment frequency</Label>
                {frequencies.map((option) => (
                  <Label
                    className={cn(
                      frequency.value === option.value
                        ? 'bg-primary-500/90 text-white dark:bg-primary-900/70 dark:text-white/70'
                        : 'bg-transparent text-gray-500 hover:bg-primary-500/10',
                      'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                    )}
                    key={option.value}
                    htmlFor={'tierone' + option.value}
                  >
                    {option.label}

                    <RadioGroupItem
                      value={option.value}
                      id={'tierone' + option.value}
                      className="hidden"
                    />
                  </Label>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div className="flex flex-wrap xl:flex-nowrap items-center bg-white dark:bg-gray-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-300/70 dark:ring-gray-700 xl:mx-0 xl:flex xl:max-w-none">
            <div className="p-8 sm:p-10 xl:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight">{tier.name}</h3>
              <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-400">
                {tier.description}
              </p>
              <div className="mt-12 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">
                  Included features
                </h4>
                <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
              </div>

              <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-2 text-sm"
                  >
                    <CheckIcon
                      className="h-6 w-6 flex-none text-primary-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
              <div className="rounded-2xl fancy-glass fancy-glassYellow py-10 text-center ring-1 ring-inset ring-gray-300/50 dark:ring-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span
                      className={cn(
                        'text-5xl font-bold tracking-tight',
                        tier.discountPrice &&
                          tier.discountPrice[frequency.value]
                          ? 'line-through'
                          : '',
                      )}
                    >
                      {typeof tier.price === 'string'
                        ? tier.price
                        : tier.price[frequency.value]}
                    </span>

                    <span>
                      {typeof tier.discountPrice === 'string'
                        ? tier.discountPrice
                        : tier.discountPrice[frequency.value]}
                    </span>

                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">
                      {frequency.priceSuffix}
                    </span>
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mt-8 flex-shrink-0"
                  >
                    <Button size="xl">{tier.cta}</Button>
                  </a>
                  <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">
                    Sign up in seconds, no credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
