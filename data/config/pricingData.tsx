import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: 'ea10150d-af63-4978-9d8b-6774cde52553',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '5f183560-5f49-4abd-9218-18175594d98a',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
