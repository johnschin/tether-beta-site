import Link from "next/link";

export default function EmployersPage() {
  const employerBenefits = [
    {
      title: "A confidential support layer",
      body:
        "Give employees a private place to process stress, uncertainty, and resistance without creating HR visibility into individual conversations.",
    },
    {
      title: "Better change adoption",
      body:
        "Address the human friction that blocks rollout: fear, confusion, low confidence, low trust, and quiet disengagement.",
    },
    {
      title: "Aggregated organizational insight",
      body:
        "See where employees appear stuck across the ADKAR journey so leaders can communicate and support more intelligently.",
    },
    {
      title: "Low-stigma, modern support",
      body:
        "Position Tether between wellness fluff and clinical services: practical, psychologically informed, and built for everyday work strain.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            For employers
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
            Support the people side of change without creating a trust problem.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tether helps organizations support employees through AI rollout,
            layoffs, overwork, and adaptation fatigue with a confidential
            coaching layer that is practical, modern, and psychologically
            informed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {employerBenefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Where Tether fits
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Between generic wellness and clinical escalation.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tether gives employees a place to work through everyday workplace
            strain before it hardens into burnout, disengagement, or silent
            resistance. It is more structured than a wellness app, less
            stigmatized than therapy, and more scalable than one-to-one
            coaching.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Beta partners
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Explore Tether with an early cohort of forward-thinking firms.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            If your team is navigating AI change, morale strain, or adoption
            friction, the beta is designed to help you learn fast without
            pretending the human piece will sort itself out.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
