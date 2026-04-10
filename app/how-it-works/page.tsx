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
        "During AI adoption, many employees quietly conclude, I am not built for this. Tether helps reframe the learning dip as normal and gives employees smaller, achievable next reps.",
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
    "Deci and Ryan; Gagne et al. - Self-Determination Theory and workplace motivation",
    "Amy Edmondson - Psychological Safety and learning behavior in teams",
    "Todd Kashdan et al. - Workplace curiosity and adaptability",
    "Prosci / Hiatt - ADKAR change model",
    "Carol Dweck - Growth mindset in learning and performance",
    "2024 research on threat appraisal, job vulnerability, and digital transformation resistance",
    "2025 survey data on participation, training, and technology adoption barriers",
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
            <div className="mt-8">
              <a
                href="/"
                className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Back to home
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
            Resistance to change is usually not irrational. It is often a signal.
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
    </main>
  );
}