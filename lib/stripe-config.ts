// Static pricing config for marketing site
export const STRIPE_CONFIG = {
  products: {
    free: {
      name: 'Free',
      description: 'Perfect for trying out ekkOS',
      priceId: null,
      price: 0,
      yearlyPrice: 0,
      features: [
        '1,000 memories/month',
        '10 patterns',
        'Basic search',
        'Community support',
      ],
    },
    pro: {
      name: 'Pro',
      description: 'For serious developers',
      priceId: 'price_pro',
      price: 19,
      yearlyPrice: 190,
      features: [
        '50,000 memories/month',
        'Unlimited patterns',
        'Semantic search',
        'Priority support',
        'Team collaboration',
      ],
    },
    team: {
      name: 'Team',
      description: 'For teams and organizations',
      priceId: 'price_team',
      price: 49,
      yearlyPrice: 490,
      features: [
        'Unlimited memories',
        'Unlimited patterns',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations',
        'SSO support',
      ],
    },
  },
};

export type ProductTier = keyof typeof STRIPE_CONFIG.products;
