import Link from "next/link";

export default function BetaThanksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
            Beta signup received
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Thanks. You’re on the list.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            We’ve received your beta request and will be in touch as we open access.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Back to home
            </Link>

            <Link
              href="/beta"
              className="inline-flex rounded-2xl border border-slate-300 px-6 py-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Submit another request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}