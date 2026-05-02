'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    // ── Scroll reveal ──
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [
              ...entry.target.parentElement!.querySelectorAll<HTMLElement>(
                '.reveal:not(.visible)'
              ),
            ];
            const delay = Math.min(siblings.indexOf(entry.target as HTMLElement) * 60, 300);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    // ── Header shadow on scroll ──
    const header = document.querySelector<HTMLElement>('.site-header');
    const onScroll = () => {
      if (!header) return;
      header.style.boxShadow =
        window.scrollY > 8 ? '0 2px 24px rgba(46, 42, 45, 0.08)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
