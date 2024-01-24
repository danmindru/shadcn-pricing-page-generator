export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <div className="w-full flex flex-col items-center mb-12">
        <section className="narrow-container">
          <h1 className="text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl fancy-heading">
            About Pricing Page Generator
          </h1>

          <p className="mt-6 md:text-xl">
            The pricing page generator is the easiest way to get a React pricing
            page with Shadcn UI, Radix UI and/or Tailwind CSS. Make beautiful
            pricing pages & get the code with a click. Responsive & easy to
            modify. Dark mode included.
          </p>

          <p className="mt-6 md:text-xl">
            This tool is a part of{' '}
            <a
              href="https://shipixen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fancy-link"
            >
              Shipixen
            </a>
            , an app to generate a performant, SEO-optimized Next.js website
            with a blog. Includes your branding, navigation, footer, social
            links and much more.
          </p>

          <p className="mt-6 md:text-xl">
            Built in Copenhagen, Denmark as of {new Date().getFullYear()}.
            <br />
            Development is being lead by Dan Mindru. See more on his{' '}
            <a
              href="https://github.com/danmindru"
              target="_blank"
              rel="noopener noreferrer"
              className="fancy-link"
            >
              Github
            </a>{' '}
            and{' '}
            <a
              href="https://twitter.com/d4m1n"
              target="_blank"
              rel="noopener noreferrer"
              className="fancy-link"
            >
              𝕏 / Twitter
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
