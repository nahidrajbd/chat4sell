import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="page policy">
      <div className="page-eyebrow">Legal</div>
      <h1 className="reveal reveal-1">Privacy Policy</h1>
      <p className="lede reveal reveal-2">Last updated: September 12, 2026</p>

      <div className="policy-body">
        <h2>1. Introduction</h2>
        <p>
          Chat4Sell ("we", "us", "our") provides an AI chat automation service that helps
          merchants respond to customer messages across Facebook, Instagram, and WhatsApp. This
          Privacy Policy explains what information we collect, how we use it, and the choices
          you have.
        </p>

        <h2>2. Information we collect</h2>
        <ul>
          <li>Account details you provide, such as your name, email address, and store URL.</li>
          <li>Messages and metadata from connected channels (Facebook, Instagram, WhatsApp) needed to generate and send replies.</li>
          <li>Usage data such as reply rates, response times, and feature interactions.</li>
          <li>Payment details are processed by our payment provider; we do not store full card numbers.</li>
        </ul>

        <h2>3. How we use information</h2>
        <ul>
          <li>To operate and improve the auto-reply, order tracking, and inbox features.</li>
          <li>To communicate with you about your account, billing, and product updates.</li>
          <li>To monitor for abuse, fraud, and to keep the service secure.</li>
        </ul>

        <h2>4. Sharing of information</h2>
        <p>
          We do not sell your data. We share information only with service providers that help
          us run Chat4Sell (hosting, payments, messaging platform APIs), and only to the extent
          needed to provide the service, or when required by law.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We retain conversation data for as long as your account is active, or as needed to
          provide the service. You can request deletion of your data at any time by contacting
          us.
        </p>

        <h2>6. Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, or delete your
          personal data, or to object to certain processing. To exercise these rights, contact
          us at the email below.
        </p>

        <h2>7. Security</h2>
        <p>
          We use industry-standard safeguards to protect your data, including encryption in
          transit. No method of transmission or storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated version
          on this page with a new "Last updated" date.
        </p>

        <h2>9. Contact us</h2>
        <p>
          Questions about this policy? Email us at{' '}
          <a href="mailto:hello@chat4sell.com">hello@chat4sell.com</a>.
        </p>
      </div>
    </section>
  );
}
