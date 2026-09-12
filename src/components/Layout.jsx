import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
    const canonicalUrl = `https://chat4sell.com${path}`;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 1023) setMenuOpen(false);
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="screen">
      <div className="bg" />
      <div className="bg2" />
      <div className="scrim" />

      <div className="frame">
        <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>© {new Date().getFullYear()} Chat4Sell</span>
        <span className="site-footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <a href="mailto:hello@chat4sell.com">hello@chat4sell.com</a>
        </span>
      </div>
    </footer>
  );
}
