export const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/ai-ugcify-tiktok-shop-vid/peiicdkphmliakagmchjjlkooapodghn'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export const PAIN_POINTS = [
  {
    stat: '$150-500',
    label: 'per video',
    description: 'Traditional UGC creators charge premium rates for a single video that might not even convert.',
  },
  {
    stat: '3-7 days',
    label: 'waiting time',
    description: 'Briefing, filming, editing, revisions. By the time you get your video, the trend is dead.',
  },
  {
    stat: '0%',
    label: 'guaranteed ROI',
    description: 'You pay upfront with no guarantee the video will perform. Hit or miss, every single time.',
  },
] as const

export const STEPS = [
  {
    number: '01',
    title: 'Browse any TikTok Shop product',
    description: 'Find a product you want to promote on TikTok Shop. Any product, any niche.',
  },
  {
    number: '02',
    title: 'Click the AI UGCify extension',
    description: 'One click extracts all product data—images, descriptions, reviews, and selling points.',
  },
  {
    number: '03',
    title: 'Get your video that sells',
    description: 'AI generates a conversion-optimized script and creates a professional video designed to convert.',
  },
] as const

export const FEATURES = [
  {
    icon: 'Zap',
    title: 'One-Click Extraction',
    description: 'Instantly pull product data, images, and reviews from any TikTok Shop page.',
  },
  {
    icon: 'Brain',
    title: 'AI Script Generation',
    description: 'Persuasive, conversion-focused scripts crafted by advanced AI specifically for your product.',
  },
  {
    icon: 'Video',
    title: 'AI Video Generation',
    description: 'Cutting-edge AI video technology creates professional UGC-style content in minutes.',
  },
  {
    icon: 'Edit',
    title: 'Edit Before Generating',
    description: 'Full control over your script. Tweak the hook, adjust the CTA, make it yours.',
  },
  {
    icon: 'History',
    title: 'Video History',
    description: 'Access all your generated videos anytime. Download, reshare, or iterate on winners.',
  },
  {
    icon: 'CreditCard',
    title: 'Flexible Monthly Plans',
    description: 'Choose a plan that fits your needs. Upgrade, downgrade, or cancel anytime.',
  },
] as const

export const SUBSCRIPTION_PLANS = [
  {
    name: 'Basic',
    monthlyPrice: 19,
    yearlyPrice: 192,
    credits: 10,
    perVideo: '1.90',
    features: ['10 videos per month', 'Full script editing', 'HD video quality', 'Video history'],
    popular: false,
    savings: 1481,
  },
  {
    name: 'Standard',
    monthlyPrice: 49,
    yearlyPrice: 492,
    credits: 30,
    perVideo: '1.63',
    features: ['30 videos per month', 'Full script editing', 'HD video quality', 'Video history', 'Priority generation'],
    popular: true,
    savings: 4451,
  },
  {
    name: 'Premium',
    monthlyPrice: 99,
    yearlyPrice: 996,
    credits: 75,
    perVideo: '1.32',
    features: ['75 videos per month', 'Full script editing', '4K video quality', 'Video history', 'Priority generation', 'Bulk generation'],
    popular: false,
    savings: 11151,
  },
] as const

export const ONE_TIME_PACKAGES = [
  {
    name: 'Starter',
    price: 15,
    credits: 5,
    perVideo: '3.00',
    features: ['5 videos total', 'Full script editing', 'HD video quality', 'Video history', 'Never expires'],
  },
  {
    name: 'Creator',
    price: 59,
    credits: 25,
    perVideo: '2.36',
    features: ['25 videos total', 'Full script editing', 'HD video quality', 'Video history', 'Never expires'],
  },
  {
    name: 'Pro',
    price: 199,
    credits: 100,
    perVideo: '1.99',
    features: ['100 videos total', 'Full script editing', '4K video quality', 'Video history', 'Never expires', 'Priority generation'],
  },
  {
    name: 'Agency',
    price: 749,
    credits: 500,
    perVideo: '1.50',
    features: ['500 videos total', 'Full script editing', '4K video quality', 'Video history', 'Never expires', 'Priority support', 'Bulk generation'],
  },
] as const

// Legacy export for backwards compatibility
export const PRICING_PLANS = SUBSCRIPTION_PLANS

export const FAQ_ITEMS = [
  {
    question: 'How long does video generation take?',
    answer: 'Most videos are generated in 2-5 minutes. Complex products with longer scripts may take up to 10 minutes. You\'ll receive a notification when your video is ready.',
  },
  {
    question: 'Do unused videos roll over?',
    answer: 'Unused videos do not roll over to the next month. Your video quota resets at the start of each billing cycle. You can upgrade or downgrade your plan anytime.',
  },
  {
    question: 'Can I edit the AI-generated script?',
    answer: 'Absolutely! You have full control to edit the script before generating your video. Adjust the hook, change the call-to-action, add your own personality—it\'s completely customizable.',
  },
  {
    question: 'What if I\'m not satisfied with a video?',
    answer: 'You can regenerate any video with a modified script using another credit. If you experience technical issues, our support team will make it right.',
  },
  {
    question: 'Can I use these videos for ads?',
    answer: 'Yes! All generated videos are yours to use commercially. Run them as TikTok ads, organic content, or on any other platform.',
  },
] as const
