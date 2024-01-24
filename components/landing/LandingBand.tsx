import React from 'react';
import { cn } from '@/lib/utils';

/**
 * A component meant to be used in the landing page.
 * A full-width, brand-colored section that displays a title, description and some product logos.
 *
 * It should be used as social proof or to show the product's tech features.
 */
export const LandingBandSection = ({
  className,
  title,
  description,
  logosComponent,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  logosComponent: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        'mt-12 w-full bg-primary-100 dark:bg-primary-100/70 flex items-center justify-center p-4 md:p-6 gap-6',
        className,
      )}
    >
      <section className="ultrawide-container gap-6 items-center lg:flex lg:flex-row">
        <p className="w-full lg:w-auto flex flex-col flex-shrink-0 max-w-lg xl:max-w-3xl text-black">
          <span className="text-6xl font-bold">{title}</span>
          <span className="text-lg">{description}</span>
        </p>

        <div
          className={cn(
            'flex gap-8 lg:gap-12 ml-auto mt-12 lg:mt-0 lg:max-w-lg xl:max-w-none flex-shrink text-black',
            className,
          )}
        >
          {logosComponent}
        </div>
      </section>
    </section>
  );
};
