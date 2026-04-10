"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function BetaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/beta", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result?.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      form.reset();
      router.push("/beta/thanks");
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
            Beta signup
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Join the Tether beta
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            Get early access and help shape a calmer, smarter way to support employees through change.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-900">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-900">
                Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                What are you hoping Tether helps with?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              />
            </div>

            {errorMessage ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Request beta access"}
              </button>

              <Link
                href="/"
                className="inline-flex rounded-2xl border border-slate-300 px-6 py-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Back to home
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}