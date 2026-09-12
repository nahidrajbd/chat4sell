import React from 'react';
import { Link } from 'react-router-dom';
import ListeningLogo from '../components/ListeningLogo.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <ListeningLogo />
        <h1 className="reveal reveal-1">Never miss a customer message</h1>
        <p className="sub reveal reveal-2">
          Chat4Sell replies instantly across Facebook, Instagram and WhatsApp — closing sales
          while you sleep.
        </p>
        <Link to="/contact" className="btn reveal reveal-3">
          <span className="lbl">Start free trial</span>
          <svg viewBox="0 0 21 18" fill="none">
            <path d="M0 9H20.1" stroke="currentColor" strokeWidth="2" />
            <path d="M12.1 1L20.1 9L12.1 17" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Link>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="num">300+</div>
          <div className="lab">Merchants</div>
        </div>
        <div className="stat">
          <div className="num">99%</div>
          <div className="lab">Reply rate</div>
        </div>
        <div className="stat">
          <div className="num">$5M+</div>
          <div className="lab">Orders closed</div>
        </div>
      </section>
    </>
  );
}
