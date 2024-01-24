import { Button } from '@/components/shared/ui/button';
import { cn } from '@/lib/utils';

/**
 * A component meant to be used in the landing page.
 *
 * A simple section that shows a selling point and call to action button.
 */
export const LandingSaleCtaSection = ({
  className,
  title,
  description,
  ctaHref,
  ctaLabel,
  withBackground = false,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  ctaHref: string;
  ctaLabel: string;
  withBackground?: boolean;
}) => {
  return (
    <section
      className={cn(
        'w-full flex flex-col justify-center items-center gap-8',
        withBackground ? 'bg-primary-100/20 dark:bg-primary-900/10' : '',
        className,
      )}
    >
      <section className={cn('wide-container my-12 lg:my-16')}>
        <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading">
          {title}
        </h2>
        <p className="mt-6 md:text-xl">{description}</p>

        <div className="mt-6 flex gap-2 justify-between w-full items-center">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="mt-6">
              {ctaLabel}
            </Button>
          </a>
        </div>
      </section>
    </section>
  );
};
