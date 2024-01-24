import clsx from 'clsx';

export const BlurBg = ({
  className,
  variant,
  shade,
}: {
  className?: string;
  variant?: 'primary' | 'secondary';
  shade?: 'light' | 'dark';
}) => {
  const stopColor = variant === 'primary' ? '#0031adaa' : '#d30ba844';
  const stopColorTwo = variant === 'primary' ? '#00071a70' : '#51003f6f';

  return (
    <svg
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      className={clsx(className, 'absolute -z-10')}
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fillOpacity="0.7"
      ></circle>
      <defs>
        <radialGradient
          id="759c1415-0410-454c-8f7c-9a820de03641"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(512 512) rotate(90) scale(512)"
        >
          <stop stopColor={stopColor}></stop>
          <stop offset="1" stopColor={stopColorTwo} stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};
