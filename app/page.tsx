import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingSaleCtaSection } from '@/components/landing/LandingSaleCta';
import { PricingTierKitchenSinkDemo } from '@/components/pricing/KitchenSink';
import { PricingTierOneDemo } from '@/components/pricing/TierOne';
import { PricingTierThreeDemo } from '@/components/pricing/TierThree';
import { PricingTierTwoDemo } from '@/components/pricing/TierTwo';
import { Button } from '@/components/shared/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="wide-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl md:max-w-3xl">
            Pricing Page Generator
          </h1>
          <p className="mt-6 md:text-xl md:max-w-3xl">
            The easiest way to get the code for a React/Next.js pricing page.
            Pick between a Shadcn pricing page Radix UI and/or Tailwind CSS.
          </p>

          <span className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://shipixen.com/shadcn-pricing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="xl">Generate your page free</Button>
            </a>
          </span>
        </section>

        <LandingProductFeature
          title="Make beautiful pricing pages"
          withBackground
          description={
            <>
              Customize tiers, frequencies & looks, then
              <br />
              <span className="underline underline-offset-2">
                get the code
              </span>{' '}
              with one click.
              <br />
              Responsive & easy to modify. Dark mode included
            </>
          }
          imageAlt="Shadcn pricing page generator example"
          imageSrc="/static/images/shadcn-pricing-page-generator.webp"
        ></LandingProductFeature>

        <section className={cn('narrow-container my-12 lg:my-16')}>
          <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading">
            Let's explore some examples.
          </h2>

          <p className="mt-6 md:text-xl">
            We'll take you through various tiers, looks and frequencies. You can
            choose between one, two or three pricing tiers.
          </p>
        </section>

        <section
          className={cn(
            'w-full flex justify-center items-center flex-col bg-secondary-100/20 dark:bg-secondary-900/10 py-12',
          )}
        >
          <section
            className={cn(
              'w-full flex justify-center items-center flex-col bg-secondary-100/20 dark:bg-secondary-900/10 py-12',
            )}
          >
            <section
              className={cn('wide-container flex flex-col items-center')}
            >
              <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading lg:max-w-2xl w-full">
                1-tier pricing page example
              </h2>
              <p className="mt-6 md:text-xl lg:max-w-2xl w-full">
                Sometimes you start simple and expand later. <br />
                When you only have one pricing tier, we got you covered.
              </p>

              <PricingTierOneDemo />
            </section>
          </section>
        </section>

        <section className={cn('wide-container flex flex-col items-center')}>
          <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading lg:max-w-2xl w-full">
            2-tier pricing page example
          </h2>
          <p className="mt-6 md:text-xl lg:max-w-2xl w-full">
            Two tiers change into a more traditional layout. Here you can also
            customize the looks of each tier and highlight one or the other.
          </p>

          <PricingTierTwoDemo />
        </section>

        <section
          className={cn(
            'w-full flex justify-center items-center flex-col bg-secondary-100/20 dark:bg-secondary-900/10 py-12',
          )}
        >
          <section
            className={cn(
              'w-full flex justify-center items-center flex-col bg-secondary-100/20 dark:bg-secondary-900/10 py-12',
            )}
          >
            <section
              className={cn('wide-container flex flex-col items-center')}
            >
              <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading lg:max-w-2xl w-full">
                3-tier pricing page example
              </h2>
              <p className="mt-6 md:text-xl lg:max-w-2xl w-full">
                Lastly, pick the 3-tier layout if you have a lot to offer.{' '}
                <br />
                Similarly to the 2-tier layout, you can customize the looks of
                each tier and highlight one or the other.
              </p>

              <PricingTierThreeDemo />
            </section>
          </section>
        </section>

        <section
          className={cn(
            'w-full flex justify-center items-center flex-col bg-secondary-100/20 dark:bg-secondary-900/10 py-12',
          )}
        >
          <section
            className={cn(
              'w-full flex justify-center items-center flex-col bg-secondary-100/20 dark:bg-secondary-900/10 py-12',
            )}
          >
            <section
              className={cn('wide-container flex flex-col items-center')}
            >
              <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading lg:max-w-2xl w-full">
                All the bells and whistles
              </h2>
              <p className="mt-6 md:text-xl lg:max-w-2xl w-full">
                The pricing page generator supports discount text, discount
                prices, highlighted tiers, custom looks, custom frequencies and
                more. Here's an example with all turned on.
              </p>

              <hr className="border-primary-500/30 dark:border-primary-300/30 w-full my-12" />

              <PricingTierKitchenSinkDemo />
            </section>
          </section>
        </section>

        <section className={cn('wide-container my-12 lg:my-16')}>
          <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading">
            Make your own
          </h2>
          <p className="mt-6 md:text-xl lg:max-w-2xl">
            Generate your own pricing page with Shadcn, Radix UI and Tailwind
            CSS.
            <br />
            It's free and you get the code with one click.
          </p>

          <div className="mt-6 flex gap-2 justify-between w-full items-center">
            <a
              href="https://shipixen.com/shadcn-pricing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="xl">Get it free</Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
