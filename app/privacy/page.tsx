import Link from "next/link";

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      title: "Employees keep confidentiality",
      body:
        "Tether is designed so employees can speak candidly without HR visibility into individual conversations.",
    },
    {
      title: "HR sees trends, not transcripts",
      body:
        "Organizations receive aggregated signals about themes and change friction. They do not get employee-by-employee reporting or raw conversation logs.",
    },
    {
      title: "Built for support, not surveillance",
      body:
        "The product is meant to help employees navigate hard conditions, not to monitor sentiment or flag private vulnerability for management review.",
    },
    {
      title: "Clear boundaries",
      body:
        "Tether is a coaching tool, not therapy, not an EAP hotline, and not a performance management system wearing a fake mustache.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Privacy and trust
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
            The product only works if employees believe it is truly private.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tether is designed around a simple rule: employees need a place to
            be candid about work strain without wondering whether that honesty
            becomes management data with their name on it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {privacyPrinciples.map((item) => (
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
            What organizations receive
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Aggregated insight, not personal exposure.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tether gives organizations trend-level visibility into themes like
            AI anxiety, burnout pressure, or where change appears stuck across
            ADKAR stages. It does not turn private employee conversations into
            searchable management intelligence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Questions about privacy?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Trust is not a footnote here.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            If privacy boundaries matter to your organization, good. They
            should. Tether is built to make those boundaries understandable and
            operational, not vague and hand-wavy.
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