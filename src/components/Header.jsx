import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Header({ menuOpen, onToggleMenu }) {
  return (
    <header>
      <div className="header-inner">
        <Logo />

        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => (isActive ? 'active' : '')}>
            Features
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>

        <button
          className="burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/contact" className="btn btn-top">
          <span className="lbl">Get started</span>
          <svg viewBox="0 0 21 18" fill="none">
            <path d="M0 9H20.1" stroke="currentColor" strokeWidth="2" />
            <path d="M12.1 1L20.1 9L12.1 17" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
