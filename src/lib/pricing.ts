export type Billing = 'monthly' | 'yearly';

export interface Plan {
  id: string;
  name: string;
  /** Price per month when billed monthly, in USD. */
  monthly: number;
  blurb: string;
  features: string[];
  featured?: boolean;
}

/** Yearly billing gives two months free (10 payments instead of 12). */
export const YEARLY_MONTHS_PAID = 10;

export function yearlyTotal(monthly: number): number {
  return monthly * YEARLY_MONTHS_PAID;
}

/** Effective price per month for the chosen billing, rounded to whole dollars. */
export function pricePerMonth(monthly: number, billing: Billing): number {
  return billing === 'monthly' ? monthly : Math.round(yearlyTotal(monthly) / 12);
}

/** Percent saved by paying yearly (0 for free plans). */
export function yearlySavingsPercent(monthly: number): number {
  if (monthly <= 0) return 0;
  return Math.round((1 - yearlyTotal(monthly) / (monthly * 12)) * 100);
}

export function formatPrice(value: number): string {
  return value === 0 ? 'Free' : `$${value}`;
}
