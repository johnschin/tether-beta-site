'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/tether-how-it-works.html', label: 'How It Works' },
  { href: '/tether-for-employees.html', label: 'For Employees' },
  { href: '/tether-for-managers.html', label: 'For Managers' },
  { href: '/tether-for-hr.html', label: 'For HR & L&D' },
  { href: '/tether-about.html', label: 'About' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        className="mobile-toggle"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          style={{
            transform: isOpen ? 'translateY(6.5px) rotate(45deg)' : undefined,
          }}
        />
        <span style={{ opacity: isOpen ? 0 : 1 }} />
        <span
          style={{
            transform: isOpen ? 'translateY(-6.5px) rotate(-45deg)' : undefined,
          }}
        />
      </button>

      <nav
        className={`mobile-nav${isOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
        <Link href="/tether-contact.html" className="btn btn-primary" onClick={close}>
          Request a demo
        </Link>
      </nav>
    </>
  );
}
