import Link from "next/link";

export default function ForEmployersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <div className="mb-10">
          <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700">
            For Employers
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Support working parents before stress becomes turnover.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Tether helps employers support new and expecting parents with practical,
          human guidance during one of the most vulnerable transitions in adult life.
          The result is better support, stronger retention, and fewer employees trying
          to hold everything together with coffee and denial.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Reduce stress</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Give employees timely support during pregnancy, postpartum, and early
              parenthood so they feel less overwhelmed and more steady.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Improve retention</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              When employees feel supported in real life, they are more likely to stay
              engaged, loyal, and connected to the organization.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Strengthen culture</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Show that your company cares about people, not just output, by supporting
              families through one of the biggest life transitions they will face.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What Tether offers employers
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li>Personalized support for new and expecting parents</li>
            <li>Practical guidance employees can use in real time</li>
            <li>A modern benefit that supports wellbeing and retention</li>
            <li>A simple way to help families feel less alone</li>
          </ul>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Interested in bringing Tether to your team?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            We are currently exploring early partnerships with employers who want to
            support working families in a more thoughtful, practical way.
          </p>

          <div className="mt-8">
            <Link
              href="/#beta"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Join the beta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}