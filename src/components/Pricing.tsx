import { useState } from 'react';
import { PLANS } from '../data/content';
import { formatPrice, pricePerMonth, yearlySavingsPercent, type Billing } from '../lib/pricing';
import { Icon } from './Icon';

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('yearly');
  return (
    <section id="pricing" className="section">
      <div className="section-head">
        <h2>Simple, honest pricing</h2>
        <p>Start free. Upgrade when your team grows.</p>
        <div className="toggle" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={billing === 'monthly'} onClick={() => setBilling('monthly')}>
            Monthly
          </button>
          <button type="button" aria-pressed={billing === 'yearly'} onClick={() => setBilling('yearly')}>
            Yearly <span className="badge">2 months free</span>
          </button>
        </div>
      </div>
      <div className="plans">
        {PLANS.map((plan) => {
          const price = pricePerMonth(plan.monthly, billing);
          return (
            <article key={plan.id} className={`plan ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <span className="popular">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="muted">{plan.blurb}</p>
              <p className="price">
                <strong>{formatPrice(price)}</strong>
                {price > 0 && <span> / month</span>}
              </p>
              <p className="small muted">
                {plan.monthly === 0
                  ? 'No card required'
                  : billing === 'yearly'
                    ? `Billed yearly. You save ${yearlySavingsPercent(plan.monthly)}%`
                    : 'Billed monthly'}
              </p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${plan.featured ? 'btn-primary' : ''}`} href="#top">
                {plan.monthly === 0 ? 'Start for free' : `Choose ${plan.name}`}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
