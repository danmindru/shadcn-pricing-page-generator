import { Button } from '@/components/shared/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="wide-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl md:max-w-3xl">
            Shadcn Pricing Page Generator. Get the code for Shadcn UI or
            TailwindCSS
          </h1>
          <p className="mt-6 md:text-xl md:max-w-3xl">
            The easiest way to get a React pricing page with Shadcn UI, Radix UI
            and/or Tailwind CSS. Make beautiful pricing pages & get the code
            with a click. Responsive & easy to modify. Dark mode included.
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
      </div>
    </div>
  );
}
