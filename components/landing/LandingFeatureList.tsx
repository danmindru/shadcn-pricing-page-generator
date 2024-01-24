import { LandingFeature } from '@/components/landing/feature/LandingFeature';
import { cn } from '@/lib/utils';

export interface FeatureListItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * A component meant to be used in the landing page.
 * It displays a grid list of features.
 *
 * Each feature has a title, description and icon.
 */
export const LandingFeatureList = ({
  className,
  title,
  description,
  featureItems,
  withBackground = false,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  featureItems: FeatureListItem[];
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
      <section className={cn('wide-container mt-12 md:mt-16')}>
        <h2 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 md:text-xl">{description}</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {featureItems.map((featureItem, index) => (
            <LandingFeature
              key={index}
              title={featureItem.title}
              description={featureItem.description}
              icon={featureItem.icon}
            />
          ))}
        </div>
      </section>
    </section>
  );
};
