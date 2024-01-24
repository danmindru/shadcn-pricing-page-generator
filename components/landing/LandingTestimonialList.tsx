import {
  LandingTestimonial,
  TestimonialItem,
} from '@/components/landing/testimonial/LandingTestimonial';
import { cn } from '@/lib/utils';

/**
 * A component meant to be used in the landing page.
 * It displays a list of testimonials.
 */
export const LandingTestimonialListSection = ({
  className,
  title,
  description,
  testimonialItems,
  withBackground = false,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  testimonialItems: TestimonialItem[];
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
      <section className="wide-container mt-12 relative flex flex-col items-center">
        <h2 className="text-center text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-5xl">
          {title}
        </h2>

        <p className="mt-6 md:text-xl">{description}</p>
      </section>

      <section className="wide-container w-full relative grid grid-cols-12 gap-8 items-stretch">
        {testimonialItems.map((testimonialItem, index) => (
          <LandingTestimonial
            key={index}
            name={testimonialItem.name}
            imageUrl={testimonialItem.imageUrl}
            handle={testimonialItem.handle}
            text={testimonialItem.text}
            url={testimonialItem.url}
            hideFooter={
              !testimonialItem.comments &&
              !testimonialItem.likes &&
              !testimonialItem.retweets &&
              !testimonialItem.views
            }
            className={cn(
              'col-span-12',
              testimonialItem.size === 'full' ? 'md:col-span-12' : '',
              testimonialItem.size === 'half' ? 'md:col-span-6' : '',
              testimonialItem.size === 'third' ? 'md:col-span-4' : '',
            )}
          />
        ))}
      </section>
    </section>
  );
};
