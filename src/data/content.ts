import type { Plan } from '../lib/pricing';

export const FEATURES = [
  { icon: 'bolt', title: 'Fast by default', text: 'Pages render in milliseconds with zero runtime dependencies beyond React.' },
  { icon: 'shield', title: 'Secure workspaces', text: 'Roles, audit logs and single sign-on keep every team in control.' },
  { icon: 'chart', title: 'Clear analytics', text: 'See what is working with dashboards your whole team can read at a glance.' },
  { icon: 'layers', title: 'Flexible building blocks', text: 'Compose pages from small sections you can reorder, swap or delete.' },
  { icon: 'globe', title: 'Built for everyone', text: 'Accessible markup, keyboard support and light or dark themes included.' },
  { icon: 'spark', title: 'Automations', text: 'Connect tools and let repetitive work run itself in the background.' },
] as const;

export const PLANS: Plan[] = [
  { id: 'starter', name: 'Starter', monthly: 0, blurb: 'For side projects and trying things out.', features: ['1 workspace', 'Basic analytics', 'Community support'] },
  { id: 'pro', name: 'Pro', monthly: 24, blurb: 'For growing teams that ship every week.', features: ['Unlimited workspaces', 'Advanced analytics', 'Automations', 'Priority support'], featured: true },
  { id: 'scale', name: 'Scale', monthly: 79, blurb: 'For companies with security needs.', features: ['Everything in Pro', 'Single sign-on', 'Audit logs', 'Dedicated manager'] },
];

export const TESTIMONIALS = [
  { name: 'Marta Oliveira', role: 'Head of Product, Northwind', quote: 'We replaced three tools with Aurora and our launches got noticeably calmer.' },
  { name: 'Kenji Watanabe', role: 'CTO, Brightline', quote: 'The setup took an afternoon. The team was productive the very next morning.' },
  { name: 'Priya Nair', role: 'Founder, Loop Studio', quote: 'Clean, fast and honest pricing. Exactly what a small team needs.' },
];

export const FAQ = [
  { q: 'Can I try Aurora for free?', a: 'Yes. The Starter plan is free forever, and Pro includes a 14 day trial with no card required.' },
  { q: 'How does yearly billing work?', a: 'Pay for ten months and get twelve. You can switch back to monthly at any time.' },
  { q: 'Can I cancel whenever I want?', a: 'Of course. There are no contracts, and your data can be exported at any moment.' },
  { q: 'Do you offer discounts for nonprofits?', a: 'We do. Contact us and we will set up a discounted plan for your organization.' },
];
