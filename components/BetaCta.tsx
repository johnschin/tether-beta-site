import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function BetaCta({
  eyebrow = "Interested in piloting?",
  title = "Bring Tether into the conversation early.",
  body = "If your firm is exploring better ways to support employees through AI rollout, burnout, and organizational change, the beta is open to a small group of early partners.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        <div className="mt-8">
          <Link
            href="/#beta"
            className="rounded-2xl bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Request Beta Access
          </Link>
        </div>
      </div>
    </section>
  );
}