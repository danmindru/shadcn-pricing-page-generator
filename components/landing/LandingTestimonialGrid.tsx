import { TestimonialItem } from '@/components/landing/testimonial/LandingTestimonial';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * A component meant to be used in the landing page.
 * It displays a grid of testimonials.
 */
export const LandingTestimonialGrid = ({
  className,
  containerClassName,
  title,
  description,
  testimonialItems,
  featuredTestimonial,
  withBackground = true,
}: {
  className?: string;
  containerClassName?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  testimonialItems: Array<Array<Array<TestimonialItem>>>;
  featuredTestimonial?: TestimonialItem;
  withBackground?: boolean;
}) => {
  return (
    <section
      className={cn(
        'w-full flex justify-center items-center gap-8 pb-12 flex-col',
        withBackground ? 'bg-primary-100/20 dark:bg-primary-900/10' : '',
        className,
      )}
    >
      <section className="wide-container mt-20 relative flex flex-col items-center">
        <h2 className="text-center text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-5xl">
          {title}
        </h2>

        <p className="mt-6 md:text-xl">{description}</p>
      </section>

      <div className="relative isolate">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary-100 to-secondary-200"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-primary-100 to-secondary-200 xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={cn(
              'mx-auto flex flex-col lg:grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 dark:text-gray-100 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4',
              containerClassName,
            )}
          >
            {featuredTestimonial ? (
              <a
                href={featuredTestimonial.url}
                className="rounded-2xl bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <figure>
                  <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-8">
                    <p className="md:whitespace-pre-line">{`“${featuredTestimonial.text}”`}</p>
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                    <Image
                      width={100}
                      height={100}
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src={featuredTestimonial.imageUrl}
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">
                        {featuredTestimonial.name}
                      </div>
                      <div className="text-gray-600">{`${featuredTestimonial.handle}`}</div>
                    </div>
                    {/* <img
                    className="h-10 w-auto flex-none"
                    src={featuredTestimonial.logoUrl}
                    alt=""
                  /> */}
                  </figcaption>
                </figure>
              </a>
            ) : null}

            {testimonialItems.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-4 sm:contents sm:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => {
                  return (
                    <div
                      key={columnIdx}
                      className={cn(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonialItems.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? 'sm:row-span-2'
                          : 'sm:row-start-2 md:row-start-1',
                        'space-y-4',
                      )}
                    >
                      {column.map((testimonial) => {
                        const missingUrl =
                          !testimonial.url || testimonial.url === '#';

                        return (
                          <a
                            href={testimonial.url}
                            key={testimonial.handle}
                            className={cn(
                              'inline-block w-full rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-lg ring-1 ring-gray-900/5',
                              missingUrl
                                ? 'cursor-default pointer-events-none'
                                : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors',
                            )}
                          >
                            <figure>
                              <blockquote className="text-gray-900 dark:text-gray-100">
                                <p className="md:whitespace-pre-line">{`“${testimonial.text}”`}</p>
                              </blockquote>
                              <figcaption className="mt-6 flex items-center gap-x-4">
                                <Image
                                  width={100}
                                  height={100}
                                  className="h-10 w-10 rounded-full bg-gray-50"
                                  src={testimonial.imageUrl}
                                  alt=""
                                />
                                <div>
                                  <div className="font-semibold">
                                    {testimonial.name}
                                  </div>
                                  <div className="text-gray-600">{`${testimonial.handle}`}</div>
                                </div>
                              </figcaption>
                            </figure>
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
