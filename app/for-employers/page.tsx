export default function ForEmployersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
              For employers
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Support your workforce through AI change without adding more pressure.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Tether helps employees handle the stress, uncertainty, and resistance
              that often show up during AI adoption so your organization can build
              confidence, steadiness, and healthier adaptation.
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
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Reduce resistance</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Give employees a private place to process fear, confusion, and frustration
              before those reactions become disengagement or quiet sabotage.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Build confidence</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Help people move from feeling threatened by change to feeling more capable
              of learning, adapting, and using new tools well.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Protect performance</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Support healthier adoption so teams can stay steadier, more engaged, and
              more productive during transition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
