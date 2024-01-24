import clsx from 'clsx';

/**
 * This component is meant to be used in the landing page, in the features list.
 *
 * Describes a single feature, with a title, description and icon.
 */
export const LandingFeature = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={clsx('flex flex-col gap-4 py-4', className)}>
      <div className="flex items-center justify-center w-16 h-16 rounded-md bg-primary-100/30 border border-primary-100/70 dark:border-primary-900 dark:bg-primary-900/70 text-primary-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-800 dark:text-gray-200">{description}</p>
    </div>
  );
};
