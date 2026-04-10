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

      <section className="border-b border-slate-200 bg-slate-50">
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