import React, { useState } from 'react';

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
    </section>
  );
}
