import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import MobileNav from '@/components/MobileNav';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tetheredconsulting.com'),
  title: {
    template: '%s | Tether',
    default: 'Tether — AI Resilience Coaching for Organizational Change',
  },
  description:
    'Tether is a confidential AI resilience coach that helps employees navigate AI rollout, layoffs, restructuring, and workplace change. Built for forward-thinking employers.',
  keywords: [
    'employee resilience coaching',
    'organizational change management',
    'AI anxiety workplace',
    'change management coaching',
    'workplace stress management',
    'employee burnout support',
    'AI rollout support',
    'psychological safety',
    'ADKAR coaching',
    'resilience training employees',
  ],
  authors: [{ name: 'Dr. John Schinnerer' }, { name: 'Joree Rose, LMFT' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tetheredconsulting.com',
    siteName: 'Tether',
    title: 'Tether — AI Resilience Coaching for Organizational Change',
    description:
      'Confidential AI resilience coaching that helps employees navigate AI rollout, layoffs, restructuring, and workplace change.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tether — AI Resilience Coaching for Organizational Change',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tether — AI Resilience Coaching for Organizational Change',
    description:
      'Confidential AI resilience coaching that helps employees navigate AI rollout, layoffs, restructuring, and workplace change.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function LogoMark({ color = '#7A9075' }: { color?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="8" y1="10" x2="24" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="10" x2="16" y2="23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="10" r="2.5" fill={color} />
      <circle cx="24" cy="10" r="2.5" fill={color} />
      <circle cx="16" cy="23" r="2.5" fill={color} />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>

        {/* ── HEADER ── */}
        <header className="site-header">
          <div className="container">
            <div className="header-inner">

              <Link href="/" className="header-logo" aria-label="Tether home">
                <LogoMark color="#7A9075" />
                <span className="logo-wordmark">Tether</span>
              </Link>

              <nav className="header-nav" aria-label="Main navigation">
                <Link href="/tether-how-it-works.html" className="nav-link">How It Works</Link>
                <Link href="/tether-for-employees.html" className="nav-link">Employees</Link>
                <Link href="/tether-for-managers.html" className="nav-link">Managers</Link>
                <Link href="/tether-for-hr.html" className="nav-link">HR &amp; L&amp;D</Link>
                <Link href="/tether-about.html" className="nav-link">About</Link>
                <Link href="/tether-contact.html" className="btn btn-primary header-cta">
                  Request a demo
                </Link>
              </nav>

              <MobileNav />

            </div>
          </div>
        </header>

        {children}

        {/* ── FOOTER ── */}
        <footer className="site-footer" role="contentinfo">
          <div className="container">
            <div className="footer-top">

              <div className="footer-brand">
                <Link href="/" aria-label="Tether home">
                  <div className="footer-logo-box">
                    <LogoMark color="#7A9075" />
                  </div>
                </Link>
                <p>Steady, present support for organizations and the people inside them.</p>
                <p className="footer-tagline">steady, present, in the moment</p>
              </div>

              <div>
                <p className="footer-col-title">Product</p>
                <ul className="footer-links">
                  <li><Link href="/tether-how-it-works.html">How It Works</Link></li>
                  <li><Link href="/tether-for-employees.html">For Employees</Link></li>
                  <li><Link href="/tether-for-managers.html">For Managers</Link></li>
                  <li><Link href="/tether-for-hr.html">For HR &amp; L&amp;D</Link></li>
                </ul>
              </div>

              <div>
                <p className="footer-col-title">Company</p>
                <ul className="footer-links">
                  <li><Link href="/tether-about.html">About</Link></li>
                  <li><Link href="/tether-faq.html">FAQ</Link></li>
                  <li><Link href="/tether-contact.html">Request a demo</Link></li>
                </ul>
              </div>

              <div>
                <p className="footer-col-title">Legal &amp; Trust</p>
                <ul className="footer-links">
                  <li><Link href="/tether-terms.html">Terms of Service</Link></li>
                  <li><Link href="/tether-privacy.html">Privacy Policy</Link></li>
                  <li><Link href="/tether-ai-disclosure.html">AI Disclosure</Link></li>
                  <li><Link href="/tether-privacy-trust.html">Privacy &amp; Trust</Link></li>
                  <li><Link href="/tether-crisis-protocol.html">Crisis Escalation Protocol</Link></li>
                </ul>
              </div>

            </div>

            <div className="footer-bottom">
              <p>© 2026 Tethered Consulting. All rights reserved.</p>
              <p>
                <Link href="/tether-privacy.html" style={{ color: 'rgba(242,235,221,0.45)' }}>
                  Privacy policy
                </Link>
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
