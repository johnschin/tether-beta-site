import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Tether — Steady AI Coaching Through Organizational Change',
  description:
    'Tether is an AI-powered coaching tool that helps employees and managers navigate organizational change — reorgs, new leadership, technology rollouts, and more. Grounded in ADKAR, CBT, and evidence-based psychology.',
  alternates: { canonical: 'https://www.tetheredconsulting.com' },
  openGraph: {
    url: 'https://www.tetheredconsulting.com',
    title: 'Tether — Steady AI Coaching Through Organizational Change',
    description:
      'Tether fills the gap between organizational change programs and the individual — proactive, scenario-specific coaching grounded in ADKAR, CBT, and motivational interviewing.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tetheredconsulting.com/#organization',
      name: 'Tether',
      url: 'https://tetheredconsulting.com',
      logo: 'https://tetheredconsulting.com/assets/tether-logo.png',
      description: 'AI-powered coaching platform for organizational change management',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        url: 'https://tetheredconsulting.com/tether-contact.html',
      },
      founder: [
        {
          '@type': 'Person',
          name: 'Dr. John Schinnerer',
          jobTitle: 'Psychologist, Executive Coach',
          alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of California, Berkeley' },
          sameAs: ['https://www.linkedin.com/in/drjohnschinnerer/'],
        },
        {
          '@type': 'Person',
          name: 'Joree Rose',
          jobTitle: 'Licensed Marriage and Family Therapist, Mindfulness Teacher',
          sameAs: ['https://joreerose.com'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tetheredconsulting.com/#website',
      url: 'https://tetheredconsulting.com',
      name: 'Tether',
      publisher: { '@id': 'https://tetheredconsulting.com/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Tether',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'AI-powered organizational change coaching platform for employees, managers, and HR leaders.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          description: 'Per employee, per month — contact for enterprise pricing',
        },
      },
      publisher: { '@id': 'https://tetheredconsulting.com/#organization' },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Wires up scroll reveal + header shadow — no DOM output */}
      <ScrollReveal />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content-col">
              <p className="eyebrow eyebrow-linen hero-eyebrow">AI coaching for organizational change</p>
              <h1 id="hero-heading" className="h1 h1-linen">
                Change is hard.<br />Tether walks people<br />through it.
              </h1>
              <p className="lead lead-linen hero-lead">
                An in-the-moment AI coach for managers and employees navigating reorgs, new systems, AI shifts, or any stretch of work that feels unstable. Steady support, the moment it&apos;s needed.
              </p>
              <div className="hero-actions">
                <Link href="/tether-contact.html" className="btn btn-on-sage">Request a demo</Link>
                <Link href="/tether-how-it-works.html" className="btn btn-on-aubergine">See how it works</Link>
              </div>
            </div>
            <div className="hero-logo-col">
              <div className="hero-logo-box">
                <svg width="120" height="120" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line x1="8" y1="10" x2="24" y2="10" stroke="#7A9075" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="10" x2="16" y2="23" stroke="#7A9075" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="8" cy="10" r="2.5" fill="#7A9075" />
                  <circle cx="24" cy="10" r="2.5" fill="#7A9075" />
                  <circle cx="16" cy="23" r="2.5" fill="#7A9075" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════════ */}
      <section className="section section-linen" aria-labelledby="problem-heading">
        <div className="container">
          <p className="eyebrow reveal" style={{ marginBottom: '16px' }}>The problem</p>
          <h2 id="problem-heading" className="h2 reveal" style={{ marginBottom: '64px', maxWidth: '640px' }}>
            Most change programs miss the person.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '760px' }}>

            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>The core problem Tether solves</p>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.7' }}>
                Organizations invest heavily in change strategy, communication plans, and rollout
                logistics — and almost nothing on the individual experience of being changed.
                Employees are left to navigate confusion, anxiety, and resistance on their own.
                Tether addresses the human gap that every change initiative leaves behind.
              </p>
            </div>

            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>Current corporate solutions</p>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.7' }}>
                Most organizations rely on town halls, manager briefings, EAPs (reactive by design),
                and generic wellness apps. None of these were built for the specific, in-the-moment
                experience of navigating organizational change. Employees know the difference —
                and so does the data on failed adoption.
              </p>
            </div>

            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>How do companies know what works?</p>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.7' }}>
                Typically: they don&apos;t. Adoption is assumed rather than measured. Engagement
                surveys arrive months too late. Managers report what they observe, which is usually
                incomplete. Tether gives HR and L&D anonymized, aggregate intelligence on where
                employees are in the change journey — and where they&apos;re getting stuck —
                in real time.
              </p>
            </div>

            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>What&apos;s the ROI on change management?</p>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.7' }}>
                Organizations with structured change management support are six times more likely
                to meet project objectives. Poor adoption costs an estimated 33% of first-year
                productivity per employee. The return on helping people through change isn&apos;t
                a soft metric — it shows up in retention, adoption speed, and team performance.
              </p>
            </div>

          </div>

          <div
            className="reveal"
            style={{
              marginTop: '64px',
              paddingTop: '40px',
              borderTop: '1px solid var(--hairline)',
            }}
          >
            <p
              className="h2"
              style={{ color: 'var(--aubergine)', maxWidth: '680px', fontStyle: 'italic' }}
            >
              Tether bridges the gap between organizational intent and individual experience.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEVEN STAGES
      ══════════════════════════════════════════ */}
      <section
        className="section section-linen-tint"
        aria-labelledby="stages-heading"
      >
        <div className="container">
          <div className="section-header">
            <p className="eyebrow reveal">How people move through change</p>
            <h2 id="stages-heading" className="h2 reveal" style={{ margin: '16px 0 20px' }}>
              Most people deal with change on their own. Tether walks alongside them.
            </h2>
            <p className="reveal" style={{ color: 'var(--muted)' }}>
              Tether meets employees where they are and gives them specific tools to navigate
              where they are feeling stuck.
            </p>
          </div>

          <div className="stages-grid">
            {[
              { title: 'Awareness', desc: 'The change has been announced. The person is processing what it means for them — not for the org chart.' },
              { title: 'Desire', desc: 'Understanding why the change matters personally — and finding a reason to move toward it rather than away from it.' },
              { title: 'Knowledge', desc: 'What does this change actually require of me? What skills, tools, and new behaviors does it call for?' },
              { title: 'Ability', desc: 'Knowing what to do is not the same as being able to do it. This is where most change programs quietly fall apart.' },
              { title: 'Reinforcement', desc: 'New behaviors need anchoring. Without it, people drift back. Tether provides the consistent support that makes change stick.' },
              { title: 'Integration', desc: 'The change becomes part of how the person works — not something imposed on them but something they\'ve made their own.' },
              { title: 'Resilience', desc: 'The capacity to move through the next change with more steadiness. Each change builds the muscle for the one after it.' },
              { title: 'Stress Management', desc: 'Navigating the physiological and emotional toll of sustained uncertainty — building capacity to stay regulated when the ground keeps shifting.' },
            ].map((stage) => (
              <article key={stage.title} className="stage-card reveal">
                <h3 className="h3">{stage.title}</h3>
                <p className="stage-desc">{stage.desc}</p>
              </article>
            ))}

            {/* Tether accent card — always last */}
            <article
              className="stage-card reveal"
              style={{ background: 'var(--sage)', borderColor: 'var(--sage)' }}
            >
              <h3 className="h3" style={{ color: 'var(--linen)', fontSize: '20px', lineHeight: '1.4' }}>
                Coaching for every stage, delivered in the moment.
              </h3>
              <Link
                href="/tether-how-it-works.html"
                className="who-link"
                style={{ color: 'rgba(242,235,221,0.85)', marginTop: '8px' }}
              >
                See how it works →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERLUDE 1
      ══════════════════════════════════════════ */}
      <div className="interlude" role="complementary" aria-label="Key insight" style={{ background: 'var(--aubergine)' }}>
        <div className="interlude-inner">
          <p className="pull-quote pull-quote-linen reveal">
            &ldquo;Adoption happens inside individuals. Tether makes the invisible journey visible.&rdquo;
          </p>
          <Link
            href="/tether-how-it-works.html"
            className="btn btn-on-aubergine reveal"
            style={{ marginTop: '32px' }}
          >
            See the full methodology
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          WHO IT'S FOR
      ══════════════════════════════════════════ */}
      <section className="section section-linen" aria-labelledby="who-heading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow reveal">Who Tether serves</p>
            <h2 id="who-heading" className="h2 reveal" style={{ margin: '16px 0 0' }}>
              Change lands differently depending on where you sit.
            </h2>
          </div>

          <div className="who-grid">
            {/* Employees */}
            <Link href="/tether-for-employees.html" className="who-card reveal">
              <svg
                className="who-icon"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="20" cy="14" r="5" />
                <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" />
              </svg>
              <h3 className="h3">Employees</h3>
              <p>
                Navigating a reorg, a new manager, a role change, or a system that doesn&apos;t
                feel familiar yet. Tether gives you a private place to process what&apos;s
                actually happening — and helps you take the next step.
              </p>
              <span className="who-link">Learn more →</span>
            </Link>

            {/* Managers */}
            <Link href="/tether-for-managers.html" className="who-card reveal">
              <svg
                className="who-icon"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="20" cy="12" r="4" />
                <circle cx="10" cy="26" r="3" />
                <circle cx="30" cy="26" r="3" />
                <line x1="16" y1="16" x2="12" y2="23" />
                <line x1="24" y1="16" x2="28" y2="23" />
                <line x1="12" y1="26" x2="28" y2="26" />
              </svg>
              <h3 className="h3">Managers</h3>
              <p>
                You&apos;re leading a team through change while managing your own uncertainty.
                Tether helps you show up steadily for your people — even on the days when
                you&apos;re not sure what comes next.
              </p>
              <span className="who-link">Learn more →</span>
            </Link>

            {/* HR & L&D */}
            <Link href="/tether-for-hr.html" className="who-card reveal">
              <svg
                className="who-icon"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="24" height="28" rx="3" />
                <line x1="14" y1="16" x2="26" y2="16" />
                <line x1="14" y1="22" x2="26" y2="22" />
                <line x1="14" y1="28" x2="20" y2="28" />
                <circle cx="27" cy="28" r="4" fill="var(--sage)" stroke="none" />
                <path d="M25 28l1.5 1.5L29 26.5" stroke="var(--linen)" strokeWidth="1.5" />
              </svg>
              <h3 className="h3">HR &amp; L&amp;D</h3>
              <p>
                You need to know how change is actually landing — not just whether the rollout
                happened. Tether gives you anonymized, aggregate intelligence on employee
                experience across every stage of the journey.
              </p>
              <span className="who-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IS / IS NOT
      ══════════════════════════════════════════ */}
      <section className="isnot-section" aria-labelledby="isnot-heading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow reveal">Clarity matters</p>
            <h2 id="isnot-heading" className="h2 reveal" style={{ margin: '16px 0 0' }}>
              What Tether is — and what it isn&apos;t.
            </h2>
          </div>

          <div className="isnot-grid">
            {/* IS */}
            <div className="isnot-col reveal">
              <div className="isnot-header isnot-header-is">
                <h3 className="isnot-title">Tether is</h3>
              </div>
              <ul className="isnot-list">
                {[
                  'A coaching tool for navigating organizational change',
                  'Grounded in ADKAR, CBT, ACT, and motivational interviewing',
                  'Scenario-specific and practical — not generic wellness advice',
                  'Available in the moment, whenever difficulty hits',
                  'A source of anonymized, aggregate intelligence for HR and L&D',
                  'Proactive — it doesn\'t wait for someone to be in crisis',
                ].map((item) => (
                  <li key={item}>
                    <span className="isnot-bullet bullet-sage" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IS NOT */}
            <div className="isnot-col reveal">
              <div className="isnot-header isnot-header-not">
                <h3 className="isnot-title">Tether is not</h3>
              </div>
              <ul className="isnot-list">
                {[
                  'Therapy or a substitute for licensed mental health care',
                  'An EAP — it doesn\'t require someone to be struggling before they can access it',
                  'A meditation or mindfulness app',
                  'A crisis service or emergency resource',
                  'A performance management or surveillance tool',
                  'Another change management framework to implement',
                ].map((item) => (
                  <li key={item}>
                    <span className="isnot-bullet bullet-sage" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STAT INTERLUDE
      ══════════════════════════════════════════ */}
      <div className="interlude-stat" role="complementary">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow eyebrow-linen reveal" style={{ marginBottom: '24px' }}>
            The reality
          </p>
          <h2 className="h2 h2-linen reveal" style={{ marginBottom: '16px' }}>
            70% of change initiatives fail.
          </h2>
          <p className="reveal" style={{ color: 'rgba(242,235,221,0.65)', maxWidth: '480px', marginInline: 'auto' }}>
            Not because the strategy was wrong. Because the people part was left to chance.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ABOUT TETHER
      ══════════════════════════════════════════ */}
      <section className="section section-linen" aria-labelledby="about-brief-heading">
        <div className="container">
          <div className="gap-grid">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: '16px' }}>About Tether</p>
              <h2 id="about-brief-heading" className="h2 reveal" style={{ marginBottom: '24px' }}>
                Built by psychologists who have supported people through change for decades.
              </h2>
              <p className="reveal" style={{ color: 'var(--muted)', marginBottom: '20px', lineHeight: '1.7' }}>
                Tether was created by Joree Rose, LMFT, and Dr. John Schinnerer, Ph.D. — a
                licensed marriage and family therapist and a psychologist with over 50 combined
                years of experience helping individuals and organizations navigate transitions,
                build resilience, and lead through uncertainty.
              </p>
              <p className="reveal" style={{ color: 'var(--muted)', marginBottom: '32px', lineHeight: '1.7' }}>
                The frameworks they drew on — ADKAR, CBT, ACT, Polyvagal theory, motivational
                interviewing, positive psychology — are the same evidence base that underpins
                Tether&apos;s coaching logic. Tether is a wellness company that uses technology,
                not a tech company that added a wellness layer.
              </p>
              <Link href="/tether-about.html" className="btn btn-secondary reveal">
                About the founders
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="card reveal">
                <p className="eyebrow" style={{ marginBottom: '12px' }}>Psychology-informed</p>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
                  Every coaching response is grounded in evidence-based frameworks — not content
                  marketing wrapped in calm colors.
                </p>
              </div>
              <div className="card reveal">
                <p className="eyebrow" style={{ marginBottom: '12px' }}>ADKAR-aligned</p>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
                  Tether maps to the most widely used change management framework in the world,
                  giving HR teams a shared language for what&apos;s happening.
                </p>
              </div>
              <div className="card reveal">
                <p className="eyebrow" style={{ marginBottom: '12px' }}>Employee-trusted</p>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
                  Coaching conversations are private. Reporting to HR is anonymous and aggregate.
                  Trust was designed in — not retrofitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-band-inner">
            <p className="eyebrow">Ready when you are</p>
            <h2 id="cta-heading" className="h2">
              See how Tether can benefit your organization.
            </h2>
            <p>
              Schedule a 30-minute consultation. We&apos;ll walk you through how Tether works,
              what your employees would experience, and what HR and L&amp;D would see on the
              back end. No pressure. If it&apos;s not the right fit, we&apos;ll say so.
            </p>
            <div className="cta-actions">
              <Link href="/tether-contact.html" className="btn btn-on-sage reveal">
                Request a demo
              </Link>
              <Link href="/tether-how-it-works.html" className="btn btn-on-aubergine reveal">
                How it works first
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
