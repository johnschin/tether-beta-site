import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Tether Works | The Psychology of Resilience During Change",
  description:
    "Tether is built on ADKAR, Self-Determination Theory, Psychological Safety, and growth mindset research. Learn the evidence-based psychology behind how Tether helps employees adapt.",
  alternates: { canonical: "https://www.tetheredconsulting.com/how-it-works" },
  openGraph: {
    url: "https://www.tetheredconsulting.com/how-it-works",
    title: "How Tether Works | The Psychology of Resilience During Change",
    description:
      "The evidence-based psychology behind Tether — ADKAR, Self-Determination Theory, Psychological Safety, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Tether Works | The Psychology of Resilience During Change",
    description:
      "ADKAR, Self-Determination Theory, Psychological Safety, and more. The research behind how Tether helps employees navigate change.",
  },
};

export default function HowItWorksPage() {
  const theoryCards = [
    {
      title: "Self-Determination Theory",
      subtitle:
        "Autonomy, competence, and relatedness drive willingness to engage with change.",
      body:
        "Tether uses this as a core design principle. People adapt more effectively when they have some choice in how they engage, believe they can learn, and feel they are not doing it alone.",
      tether:
        "This maps directly to Tether's coaching around agency, capability, and connection.",
    },
    {
      title: "Psychological Safety",
      subtitle:
        "People learn faster when it is safe to admit confusion and ask questions.",
      body:
        "Technology adoption depends on vulnerable learning behaviors: asking, experimenting, making mistakes, and saying, I do not get this yet. Tether helps employees regain enough safety to do that.",
      tether:
        "This is why confidentiality matters. People are more honest when they do not feel judged or watched.",
    },
    {
      title: "Curiosity Research",
      subtitle:
        "Curiosity helps people engage uncertainty instead of just defending against it.",
      body:
        "Curiosity is not just a nice personality trait. It is a practical asset in periods of change. Tether helps employees shift from threat-only thinking toward one useful question, one experiment, or one opening.",
      tether:
        "Tether treats curiosity as a skill that can be rebuilt when fear settles down.",
    },
    {
      title: "ADKAR",
      subtitle: "Awareness, desire, knowledge, ability, reinforcement.",
      body:
        "Most organizations jump straight to training. Tether helps identify whether the employee is stuck earlier in the sequence: they may not understand the change, want the change, or feel safe enough to engage.",
      tether:
        "This gives the coaching structure so the response matches the actual stage of resistance or readiness.",
    },
    {
      title: "Growth Mindset",
      subtitle:
        "People stay engaged longer when struggle is framed as part of learning, not proof of inadequacy.",
      body:
        "During AI adoption, many employees quietly conclude, I am not built for this. Tether helps reframe the learning dip as normal and gives employees smaller, achievable next steps.",
      tether:
        "That increases persistence without sounding like a motivational poster taped to a burning building.",
    },
    {
      title: "Threat Appraisal and Job Vulnerability",
      subtitle:
        "Fear of replacement and exposure drives more resistance than leaders often admit.",
      body:
        "When employees wonder whether technology will devalue them, the nervous system treats change like a threat, not an opportunity. Tether addresses that reality directly instead of pretending training alone will fix it.",
      tether: "This is why Tether starts with threat, not with cheerleading.",
    },
    {
      title: "Participation and Voice",
      subtitle: "People adopt change faster when they have some input into it.",
      body:
        "A sense of voice creates ownership, surfaces friction early, and lowers the helplessness that fuels quiet resistance. Tether helps employees identify where they still have influence and how to use it.",
      tether: "That keeps the coaching practical instead of passive.",
    },
  ];

  const synthesis = [
    "Build safety so people can admit confusion without penalty.",
    "Protect autonomy by giving employees some voice in how they engage with change.",
    "Address threat directly instead of pretending job security fears do not exist.",
    "Sequence change properly: awareness and desire before training.",
    "Cultivate curiosity so uncertainty becomes workable rather than paralyzing.",
    "Normalize the learning curve so struggle is not mistaken for failure.",
  ];

  const theorySources = [
    "Deci and Ryan; Gagne et al. — Self-Determination Theory and workplace motivation",
    "Amy Edmondson — Psychological Safety and learning behavior in teams",
    "Todd Kashdan et al. — Workplace curiosity and adaptability",
    "Prosci / Hiatt — ADKAR change model",
    "Carol Dweck — Growth mindset in learning and performance",
    "2024 research on threat appraisal, job vulnerability, and digital transformation resistance",
    "2025 survey data on participation, training, and technology adoption barriers",
  ];

  const mindfulnessSessions = [
    {
      session: "Session 1",
      title: "Mindfulness, Emotional Awareness & the Stress Response",
      body: "Introduction to mindful awareness and the stress response; understanding the difference between reacting and responding; building emotional granularity — moving beyond 'stressed' and 'fine' to identify what is actually happening internally; body-based emotion detection; breathwork practices for immediate regulation.",
    },
    {
      session: "Session 2",
      title: "Emotional Regulation Tools & Communication During Change",
      body: "Practical regulation tools for sustained high-demand periods, including grounding techniques, micro-practices for the workday, and progressive muscle relaxation; how emotional state shapes communication; strategies for speaking clearly and constructively when stress is high or conversations feel threatening.",
    },
  ];

  const managerSessions = [
    {
      session: "Session 1",
      title: "The Regulated Manager",
      body: "Understanding the autonomic nervous system in the workplace; how your own regulation state sets the tone for your team; recognizing signs of sympathetic activation in yourself and others; co-regulation basics; why people cannot learn, collaborate, or think creatively when their nervous system perceives threat — and what managers can do about it.",
    },
    {
      session: "Session 2",
      title: "Communicating Through Change",
      body: "How overwhelmed employees process information differently; why logical arguments fail during fight-or-flight; the acknowledge-validate-redirect communication framework; creating psychological safety so employees can ask questions and admit difficulty; delivering hard news with honesty and care; managing your own activation during difficult conversations.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
              How it works
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              The psychology behind Tether.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Tether is built from a simple idea: when work becomes destabilizing,
              people do better with support that protects agency, builds capability,
              restores steadiness, and makes it safer to learn in public.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/"
                className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Back to home
              </a>

              <a
                href="https://tether-ai-coach.netlify.app/trial.html"
                className="inline-flex rounded-2xl border border-slate-300 px-6 py-4 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Take a test run
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            The core insight
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Resistance to change is not irrational. It is a signal.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Employees resist when they feel threatened, underprepared, shut out,
            or unable to ask questions safely. Tether treats those reactions as
            understandable human responses, then helps people move from threat
            and confusion toward clarity and useful action.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core theories
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              The frameworks underneath the coaching.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {theoryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-900">
                  {card.subtitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {card.body}
                </p>
                <div className="mt-5 rounded-2xl bg-slate-100 p-4 text-sm leading-7 text-slate-700">
                  {card.tether}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How the theories work together
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              What actually helps adoption and adaptation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Across these research streams, the pattern is consistent. People
              adapt faster and with less resistance when the environment supports
              safety, autonomy, capability, honest acknowledgment of threat, and
              a workable learning curve.
            </p>
          </div>

          <div className="grid gap-4">
            {synthesis.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-5 text-sm leading-7 text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Why this matters for Tether
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                A private coach can fill the gap between top-down change and human reality.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                The ADKAR backbone gives Tether a clean sequence. Self-Determination
                Theory explains why coaching-style support works better than
                pressure-heavy rollout. Psychological safety explains why employees
                need a place to be honest before they can re-engage.
              </p>
              <p>
                In practice, that means Tether helps people move from fear to footing,
                from confusion to competence, and from silent resistance to more
                grounded participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Research base
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Grounded in well-established psychology and current workplace research.
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {theorySources.map((source) => (
              <div
                key={source}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm"
              >
                {source}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              For managers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Lead change where it actually happens.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Most change management programs train leaders once and hope the message sticks. Tether works differently — meeting managers in the moment and helping them show up more effectively at every stage of change, not just during the launch.
            </p>
          </div>
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              Tether guides managers to recognize where each employee sits in the change journey using the ADKAR framework — and respond with the right conversation at the right time. Not a script. A sharper read of the room.
            </p>
            <p>
              Many managers are quietly carrying their own anxieties about AI adoption — worried about relevance, unsure how to stay credible when tools are evolving faster than training. Tether gives them a confidential space to work through those fears, build their own footing, and lead from a steadier place.
            </p>
            <p>
              Over time, Tether functions as ongoing leadership development — strengthening emotional regulation, communication under pressure, and trust-building during uncertainty.
            </p>
            <p>
              What makes Tether uniquely effective is continuity. Tether remembers each manager&apos;s journey and uses that context to reinforce growth through frequent, personalized touchpoints. New insights don&apos;t fade after a workshop. They get revisited, built on, and translated into action over time.
            </p>
          </div>
        </div>
      </section>

      {/* ── LIVE TRAINING ── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">

          {/* Section header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Live training
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Expert-led programs that make the science actionable.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tether&apos;s AI coaching is reinforced by two distinct live programs delivered over the 8-week pilot — each targeting a different layer of the resilience challenge. Together they create a reinforcing system: managers build safer conditions, employees build internal awareness, and the AI coach provides real-time application between sessions.
            </p>
          </div>

          {/* Program 1: Mindfulness — Employees */}
          <div className="mt-14 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                For employees &middot; 2 sessions
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Mindfulness Training
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                Led by Joree Rose, MA, LMFT
              </p>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Two hour-long group sessions covering four interlocking skills: mindfulness, emotional granularity, emotional regulation, and communication. Employees learn to recognize what they are actually feeling, regulate their stress response before it takes over, and communicate more clearly and constructively during difficult periods of change.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {mindfulnessSessions.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {s.session}
                  </p>
                  <h4 className="mt-2 text-base font-semibold tracking-tight text-slate-950">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program 2: Manager Communication — Managers & Leaders */}
          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                For managers &amp; leaders &middot; 2 sessions
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Managerial Communication Training
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                Led by Dr. John Schinnerer
              </p>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Two hour-long sessions on the practical science of leading people through change. Managers learn to recognize nervous system activation in themselves and their teams, communicate in ways that reduce rather than amplify threat, and create the conditions where learning and adaptation can actually happen.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {managerSessions.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {s.session}
                  </p>
                  <h4 className="mt-2 text-base font-semibold tracking-tight text-slate-950">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilitators */}
          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Your facilitators
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Delivered by practitioners with decades of real-world experience.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* Joree */}
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Mindfulness Training
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Joree Rose, MA, LMFT
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Licensed Marriage &amp; Family Therapist · Mindfulness Teacher &amp; Author
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Joree Rose is a licensed marriage and family therapist, mindfulness and meditation teacher, author, and retreat leader. She has helped thousands of people live with greater awareness, emotional resilience, and compassion. Featured in Oprah Magazine, NBCnews.com, and Business Insider. Author of <em>A Year of Gratitude</em>, <em>Squirmy Learns to be Mindful</em>, and <em>Mindfulness, It&apos;s Elementary</em>.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Her training integrates evidence-based mindfulness, acceptance and commitment therapy, and somatic awareness — delivered with warmth and a grounded practicality built for real workplace situations, not retreats.
                </p>
              </div>

              {/* John */}
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Managerial Communication Training
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Dr. John Schinnerer
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Ph.D. in Psychology, UC Berkeley · Executive Coach &amp; Speaker
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Dr. Schinnerer is a psychologist, executive coach, and speaker with over 30 years of experience translating complex psychology into tools leaders can use under real pressure. He has coached leaders at Meta, Twilio, Okta, Airbnb, Stanford University, and Bank of America, and served as a behavioral science consultant on Pixar&apos;s <em>Inside Out</em>.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  His training draws on polyvagal theory, CBT, motivational interviewing, and applied neuroscience — warm, direct, and built for leaders who want tools that hold up when the stakes are high.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Ready to explore a pilot?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                See what Tether looks like inside your organization.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Tether pilots are designed to be low-risk and high-signal — a structured 8-week program that produces measurable data and a clear picture of what resilience support can do at scale in your organization.
              </p>
              <p>
                If your team is navigating reorgs, AI adoption, leadership transitions, or any combination of the above, we&apos;d like to talk.
              </p>
              <div className="pt-2">
                <a
                  href="/beta"
                  className="inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-medium text-slate-900 shadow-sm transition hover:opacity-90"
                >
                  Request pilot information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
