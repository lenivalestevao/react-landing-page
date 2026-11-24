import { describe, expect, it } from 'vitest';
import { PLANS } from '../data/content';
import { toggleOpen, wrapIndex } from './faq';
import { formatPrice, pricePerMonth, yearlySavingsPercent, yearlyTotal } from './pricing';

describe('pricing', () => {
  it('charges ten months for a year', () => {
    expect(yearlyTotal(24)).toBe(240);
  });
  it('shows the effective monthly price for yearly billing', () => {
    expect(pricePerMonth(24, 'monthly')).toBe(24);
    expect(pricePerMonth(24, 'yearly')).toBe(20);
    expect(pricePerMonth(79, 'yearly')).toBe(66);
    expect(pricePerMonth(0, 'yearly')).toBe(0);
  });
  it('computes the savings percent, zero for free plans', () => {
    expect(yearlySavingsPercent(24)).toBe(17);
    expect(yearlySavingsPercent(0)).toBe(0);
  });
  it('formats prices', () => {
    expect(formatPrice(0)).toBe('Free');
    expect(formatPrice(20)).toBe('$20');
  });
  it('has exactly one featured plan', () => {
    expect(PLANS.filter((p) => p.featured)).toHaveLength(1);
  });
});

describe('faq', () => {
  it('opens one item and closes it on a second click', () => {
    expect(toggleOpen(null, 2)).toBe(2);
    expect(toggleOpen(2, 2)).toBeNull();
    expect(toggleOpen(2, 0)).toBe(0);
  });
  it('wraps indexes in both directions', () => {
    expect(wrapIndex(4, 4)).toBe(0);
    expect(wrapIndex(-1, 4)).toBe(3);
    expect(wrapIndex(1, 0)).toBe(0);
  });
});
