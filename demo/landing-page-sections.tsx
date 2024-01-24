import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFeatureList } from '@/components/landing/LandingFeatureList';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingSaleCtaSection } from '@/components/landing/LandingSaleCta';
import { LandingTestimonialListSection } from '@/components/landing/LandingTestimonialList';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LineChartIcon,
  SparklesIcon,
} from 'lucide-react';

export const LandingPageSections = ({ className }: { className?: string }) => {
  return (
    <>
      <LandingBandSection
        title={'20-100h'}
        description={'Saved on development by using Shipixen'}
        logosComponent={
          <>
            <ChromeIcon className="w-12 h-12" />
            <FigmaIcon className="w-12 h-12" />
            <GithubIcon className="w-12 h-12" />
            <FramerIcon className="w-12 h-12" />
          </>
        }
      />

      <LandingFaqSection
        title={'Frequently Asked Questions'}
        description="Looking to learn more about Shipixen? Here are some of the most common
        questions we get asked."
        faqItems={[
          {
            question: 'What is Shipixen exactly?',
            answer:
              'Shipixen is an app that generates boilerplate code with your branding. You get the git repository & can modify the code as you want.',
          },
          {
            question: 'Where can I deploy the generated code?',
            answer:
              'We make a deployment to Vercel for you as part of the generation process. However, you own the code, so you can technically deploy it on any host that support Next.js.',
          },
          {
            question: 'What do I get if I pre-order?',
            answer:
              'With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.',
          },
        ]}
      />

      <LandingFeatureList
        title={"You won't find anything like this."}
        description={
          'Shipixen sets up everything you need to start working on your blog, website or product.'
        }
        featureItems={[
          {
            title: 'Automatic deployment to Vercel',
            description:
              'Deploying the generated template to Vercel is as easy as clicking a button. There is no need to configure anything.',
            icon: <SparklesIcon />,
          },
          {
            title: 'SEO optimized',
            description:
              'Shipixen is optimized for search engines out of the box. It supports all the latest SEO features and is blazing fast.',
            icon: <LineChartIcon />,
          },
          {
            title: 'MDX blog, no server required',
            description:
              'Shipixen comes with a fully featured MDX blog. It is easy to customize and extend and does not require a server.',
            icon: <LayersIcon />,
          },
        ]}
      />

      <LandingSaleCtaSection
        title={'Ready to get started?'}
        description={
          'Pre-order Shipixen today and get a 50% discount on the final price.'
        }
        ctaHref={'https://gum.co/shipixen'}
        ctaLabel={'Pre-order for $49'}
      />

      <LandingTestimonialListSection
        title={'What our Early Supporters Are saying'}
        description={'Thank you all for the support!'}
        testimonialItems={[
          {
            name: 'Dima Rubanov',
            imageUrl: 'https://picsum.photos/100/100.webp?random=1',
            handle: '@Dima_heyqq',
            text: 'Just tried out shipixen.com',
            url: 'https://twitter.com/Dima_heyqq/status/1717501359157637478',
          },
          {
            name: 'Igor Krasnik',
            imageUrl: 'https://picsum.photos/100/100.webp?random=2',
            handle: '@that_igor_',
            text: 'Looks awesome!',
            url: 'https://x.com/that_igor_/status/1715787582527668559?s=200',
            size: 'half',
          },
          {
            name: 'Shipixen',
            imageUrl: 'https://picsum.photos/100/100.webp?random=3',
            handle: '@shipixen',
            text: 'Shipixen is awesome!',
            url: 'https://twitter.com/shipixen/status/1715787582527668559?s=200',
            size: 'half',
          },
        ]}
      />

      <LandingProductFeature
        imagePosition="left"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Shipixen dashboard"
        title="See historical logs of API calls"
        description="  Access historical data directly in the dashboard & see exactly when a
          scheduled API call was made, how long it took - and if it succeeded or
          failed!"
      />
    </>
  );
};
