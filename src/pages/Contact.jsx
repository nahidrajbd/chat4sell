import React, { useState } from 'react';

const FOUNDERS = [
  { name: 'Nahid Hossain', role: 'Graphics Designer, Co-Founder', photo: '/nahid.png' },
  { name: 'Nazmul Hosen', role: 'Developer, Co-Founder', photo: '/najmul.png' },
  { name: 'Kazi Maruf', role: 'Marketing, Co-Founder', photo: '/kazi-maruf.png' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="page">
      <div className="page-eyebrow">Contact</div>
      <h1 className="reveal reveal-1">Let's get you set up</h1>
      <p className="lede reveal reveal-2">
        Tell us about your store and we'll reach out within one business day.
      </p>

      {sent ? (
        <p className="lede" style={{ marginTop: 40, color: '#fff' }}>
          Thanks — we've got your message and will be in touch soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Store URL
            <input type="url" name="store" placeholder="https://" />
          </label>
          <label>
            Message
            <textarea name="message" required />
          </label>
          <button type="submit" className="btn">
            <span className="lbl">Send message</span>
            <svg viewBox="0 0 21 18" fill="none">
              <path d="M0 9H20.1" stroke="currentColor" strokeWidth="2" />
              <path d="M12.1 1L20.1 9L12.1 17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </form>
      )}

      <div className="team">
        <div className="page-eyebrow">Team</div>
        <h2 className="team-heading">Who you'll be talking to</h2>
        <div className="team-grid">
          {FOUNDERS.map((f) => (
            <div className="team-card" key={f.name}>
              <img src={f.photo} alt={f.name} className="team-photo" width="200" height="200" />
              <div className="team-name">{f.name}</div>
              <div className="team-role">{f.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
