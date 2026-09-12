import React from 'react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    oldPrice: '$19',
    price: '$5',
    period: '/mo',
    features: ['1 connected page', '300 AI replies / mo', 'Email support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    oldPrice: '$49',
    price: '$12',
    period: '/mo',
    badge: 'Most popular',
    features: ['5 connected pages', '5,000 AI replies / mo', 'Priority support'],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="page">
      <div className="page-eyebrow">Pricing</div>
      <h1 className="reveal reveal-1">Plans that cost less than one lost sale</h1>
      <p className="lede reveal reveal-2">No setup fees. Cancel any time. Save up to 70% — launch pricing.</p>

      <div className="grid grid-2">
        {PLANS.map((p) => (
          <div className={`card${p.featured ? ' featured' : ''}`} id={p.id} key={p.id}>
            {p.badge && <div className="card-badge">{p.badge}</div>}
            <h3>{p.name}</h3>
            <div className="price">
              {p.oldPrice && <span className="price-old">{p.oldPrice}</span>}
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

      <p className="pricing-note">
        Need more volume or custom integrations? <Link to="/contact">Talk to us about Enterprise.</Link>
      </p>
    </section>
  );
}
