import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NAV = [
  { label: 'Home', to: '/', children: [] },
  {
    label: 'Features',
    to: '/features',
    children: [
      { label: 'Auto-reply engine', to: '/features#auto-reply' },
      { label: 'Order tracking', to: '/features#orders' },
      { label: 'Team inbox', to: '/features#inbox' },
    ],
  },
  {
    label: 'Pricing',
    to: '/pricing',
    children: [
      { label: 'Starter', to: '/pricing#starter' },
      { label: 'Growth', to: '/pricing#growth' },
      { label: 'Enterprise', to: '/pricing#enterprise' },
    ],
  },
  { label: 'Contact', to: '/contact', children: [] },
];

export default function MobileMenu({ open, onClose }) {
  const [openRow, setOpenRow] = useState(null);
  const navigate = useNavigate();

  function handleRowClick(item, i) {
    if (item.children.length) {
      setOpenRow(openRow === i ? null : i);
    } else {
      navigate(item.to);
      onClose();
    }
  }

  return (
    <div className={`menu${open ? ' menu-open' : ''}`} id="menu">
      <div className="menu-tex" />
      <div className="menu-rule" />
      <div className="menu-body">
        <div className="menu-eyebrow">Menu</div>
        {NAV.map((item, i) => (
          <React.Fragment key={item.label}>
            <div
              className={`mrow${openRow === i ? ' open' : ''}`}
              style={{ transitionDelay: open ? `${0.08 * i}s` : '0s' }}
              onClick={() => handleRowClick(item, i)}
            >
              {item.label}
              {item.children.length > 0 && (
                <svg className="chev" viewBox="0 0 12 7" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              )}
            </div>
            <div className="msub">
              {item.children.map((c) => (
                <Link key={c.label} to={c.to} onClick={onClose}>
                  {c.label}
                </Link>
              ))}
            </div>
          </React.Fragment>
        ))}

        <div className="menu-footer">
          <Link to="/contact" className="btn btn-menu" onClick={onClose}>
            <span className="lbl">Start free trial</span>
            <svg viewBox="0 0 21 18" fill="none">
              <path d="M0 9H20.1" stroke="currentColor" strokeWidth="2" />
              <path d="M12.1 1L20.1 9L12.1 17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </Link>
          <div className="menu-note">300+ merchants &nbsp;/&nbsp; 99% reply rate</div>
        </div>
      </div>
    </div>
  );
}
