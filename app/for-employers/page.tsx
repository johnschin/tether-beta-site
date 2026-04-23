import Link from "next/link";

export default function ForEmployersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
              For employers
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Support people through uncertainty without adding more load to managers.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Tether gives employees a private, structured space to process workplace stress,
              anxiety, overload, and change while giving employers a thoughtful, human-centered
              support layer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/beta"
                className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Join the Beta
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex rounded-2xl border border-slate-300 px-6 py-4 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Tether ──────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">

          {/* Headline */}
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Tether
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Organizational change is a constant. Its impact doesn&apos;t have to be.
            </h2>
          </div>

          {/* Three cost-of-change cards */}
          <div className="grid gap-5 md:grid-cols-3 mb-16">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                Engagement, productivity, and morale suffer
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                When employees experience uncertainty and stress during restructuring or strategic
                shifts, performance drops across the board. Change doesn&apos;t have to cost this much.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                The nervous system stays in threat mode
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                When stressors are always present, the fight-or-flight response stays activated —
                disrupting focus, memory, and the decision-making your people need most during change.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                Stressed employees leave
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Stressed employees look for other opportunities, and high turnover compounds your
                costs — just as you need your people most. Resilience is a retention strategy.
              </p>
            </div>
          </div>

          {/* What Tether is */}
          <div className="grid gap-12 md:grid-cols-2 mb-16 items-start">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 mb-5">
                Grounded in emotional mastery. Built for the realities of change.
              </h3>
              <div className="space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Tether anchors your workforce in the mental and emotional states where they can
                  actually learn, adapt, and perform: calm, present, and grounded.
                </p>
                <p>
                  Trained by Dr. John Schinnerer, Ph.D. and Joree Rose, LMFT — experts in
                  psychological health, stress management, emotional regulation, communication, and
                  individual and relational dynamics — Tether combines three integrated elements to
                  reduce reactivity and build the resilience your people need during change.
                </p>
                <p>
                  Together, they meet employees in real time: when resistance rises, when overwhelm
                  peaks, when clarity matters most.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">01</p>
                <h4 className="text-lg font-semibold tracking-tight text-slate-950">Always-On AI Coach</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  AI coaching can provide up to 90% of day-to-day coaching functions — available
                  24/7, meeting employees exactly when they need support, not when a calendar allows.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">02</p>
                <h4 className="text-lg font-semibold tracking-tight text-slate-950">Employee Training</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Structured sessions in stress reduction and emotional self-awareness. Employees
                  develop practical skills to regulate their nervous systems and stay present under
                  pressure.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">03</p>
                <h4 className="text-lg font-semibold tracking-tight text-slate-950">Manager Training</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Manager training ensures leaders model the emotional regulation and clear
                  communication that sets the tone for the whole system. You can&apos;t calm a
                  team&apos;s nervous system if yours is running hot.
                </p>
              </div>
            </div>
          </div>

          {/* Research backing */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10 mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 mb-8">
              The research
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-4xl font-semibold tracking-tight text-slate-950 mb-3">90%</p>
                <p className="text-sm leading-7 text-slate-600">
                  AI coaching can handle up to 90% of day-to-day coaching functions — available
                  in real time, not just in a scheduled session.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-tight text-slate-950 mb-3">↑ Retention</p>
                <p className="text-sm leading-7 text-slate-600">
                  Organizations investing in stress management and resilience-building see measurable
                  gains in employee retention during technological and organizational transitions.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-tight text-slate-950 mb-3">3 systems</p>
                <p className="text-sm leading-7 text-slate-600">
                  Acute stress impairs working memory, executive function, and selective attention —
                  the cognitive capacities employees need most during change. Tether addresses this
                  directly.
                </p>
              </div>
            </div>
          </div>

          {/* Outcome statement */}
          <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
              The result
            </p>
            <h3 className="text-2xl font-semibold tracking-tight md:text-4xl max-w-2xl">
              A tethered workforce.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              One that navigates massive change without burning out. Stays engaged instead of
              disengaging. And reaches the other side more capable, connected, and emotionally
              equipped than when they started.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Reduce hidden strain
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Give employees a place to work through burnout, uncertainty, and pressure before
                stress turns into disengagement, conflict, or attrition.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Support change more effectively
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tether helps people navigate AI rollout, restructuring, layoffs, and trust erosion
                with more steadiness and less isolation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Add support without adding manager burden
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Not every employee concern belongs on a manager&apos;s desk. Tether offers a
                private first stop that can help people regulate, reflect, and prepare for better
                conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Beta CTA ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Interested in piloting Tether?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We are looking for a small group of forward-thinking employers who want to shape the
            beta and explore how Tether can support resilience during workplace disruption.
          </p>

          <div className="mt-8">
            <Link
              href="/beta"
              className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Request Beta Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
