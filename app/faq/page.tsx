import Link from "next/link";

export default function FAQPage() {
  const faqItems = [
    {
      question: "Is Tether therapy?",
      answer:
        "No. Tether is a non-clinical resilience and change coaching tool. It offers psychologically informed support for workplace stress, uncertainty, burnout, and adaptation. It is not a diagnostic or treatment service.",
    },
    {
      question: "Can employers read individual conversations?",
      answer:
        "No. The employer-facing model is based on aggregated insight, not access to individual conversations. That privacy boundary is central to user trust.",
    },
    {
      question: "Who is Tether for inside an organization?",
      answer:
        "Tether is especially relevant for HR, People Ops, L&D, transformation leaders, and executives navigating AI rollout, restructuring, burnout, or trust erosion.",
    },
    {
      question: "What kinds of employee issues does Tether help with?",
      answer:
        "Common themes include AI anxiety, job insecurity, layoff survivor stress, burnout, change fatigue, difficult managers, loss of motivation, and low psychological safety.",
    },
    {
      question: "What does the employer actually get?",
      answer:
        "Employers get a modern support benefit for employees plus aggregated signals about where change may be getting stuck, including emotional friction across the ADKAR journey.",
    },
    {
      question: "Why join the beta?",
      answer:
        "The beta gives early partners a chance to shape the product, pressure-test the value in a real environment, and explore a more credible support layer for unstable work.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
            The obvious questions. And the useful answers.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tether is built to support employees through workplace stress,
            burnout, AI anxiety, and organizational change without turning trust
            into collateral damage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.question}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Still interested?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            See whether Tether fits your organization.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The beta is for firms that want a more credible way to support
            employees through change.
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