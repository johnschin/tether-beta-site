import Link from "next/link";

export default function BetaThanksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
          Thank you
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          You’re on the list.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
          Thanks for your interest in Tether. We’ll be in touch when beta access opens up.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}