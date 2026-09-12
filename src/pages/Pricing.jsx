import React from 'react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: ['1 connected page', '500 AI replies / mo', 'Shared inbox', 'Email support'],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$49',
    period: '/mo',
    features: ['5 connected pages', '5,000 AI replies / mo', 'Order tracking', 'Broadcast campaigns', 'Priority support'],
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited pages', 'Unlimited AI replies', 'Dedicated success manager', 'Custom integrations'],
  },
];

export default function Pricing() {
  return (
    <section className="page">
      <div className="page-eyebrow">Pricing</div>
      <h1 className="reveal reveal-1">Simple plans that scale with you</h1>
      <p className="lede reveal reveal-2">No setup fees. Cancel any time. All plans include the core AI reply engine.</p>

      <div className="grid">
        {PLANS.map((p) => (
          <div className={`card${p.featured ? ' featured' : ''}`} id={p.id} key={p.id}>
            <h3>{p.name}</h3>
            <div className="price">
              {p.price}
              {p.period && <span>{p.period}</span>}
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-menu">
              <span className="lbl">Get started</span>
              <svg viewBox="0 0 21 18" fill="none">
                <path d="M0 9H20.1" stroke="currentColor" strokeWidth="2" />
                <path d="M12.1 1L20.1 9L12.1 17" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
