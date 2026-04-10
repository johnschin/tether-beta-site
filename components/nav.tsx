import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-employers", label: "For Employers" },
  { href: "/privacy", label: "Privacy & Trust" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-slate-950"
        >
          Tether
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#beta"
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
        >
          Join the Beta
        </Link>
      </div>
    </section>
  );
}