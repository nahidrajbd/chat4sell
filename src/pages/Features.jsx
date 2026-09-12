import React from 'react';

const FEATURES = [
  { id: 'auto-reply', title: 'Auto-reply engine', desc: 'AI trained on your catalog answers price, stock and shipping questions instantly, in the customer\'s own language.' },
  { id: 'orders', title: 'Order tracking', desc: 'Customers ask "where is my order" and get a live status pulled straight from your store, no agent needed.' },
  { id: 'inbox', title: 'Team inbox', desc: 'Every DM, comment and WhatsApp message lands in one shared inbox your team can assign and resolve.' },
  { id: 'checkout', title: 'In-chat checkout', desc: 'Send a payment link or confirm cash-on-delivery without the customer ever leaving the conversation.' },
  { id: 'broadcast', title: 'Broadcast campaigns', desc: 'Re-engage past customers with targeted WhatsApp and Messenger blasts when you restock or run a sale.' },
  { id: 'insights', title: 'Insights', desc: 'See response times, conversion rate and top questions so you know exactly where to improve.' },
];

export default function Features() {
  return (
    <section className="page">
      <div className="page-eyebrow">Features</div>
      <h1 className="reveal reveal-1">Everything you need to sell in chat</h1>
      <p className="lede reveal reveal-2">
        Chat4Sell plugs into the channels your customers already use and handles the busywork
        so your team can focus on closing.
      </p>

      <div className="grid">
        {FEATURES.map((f, i) => (
          <div className="card" id={f.id} key={f.id}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
