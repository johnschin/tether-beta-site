import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tether",
  description: "Confidential resilience coaching for employees in changing workplaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-slate-950"
            >
              Tether
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              <Link
                href="/how-it-works"
                className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                How It Works
              </Link>
              <Link
                href="/for-employers"
                className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                For Employers
              </Link>
              <Link
                href="/privacy"
                className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Privacy & Trust
              </Link>
              <Link
                href="/faq"
                className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                FAQ
              </Link>
            </nav>

            <Link
              href="/#beta"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Join the Beta
            </Link>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold tracking-tight">Tether</div>
              <div className="text-sm text-slate-500">
                Confidential resilience coaching for employees in changing workplaces.
              </div>
            </div>
            <div className="text-sm text-slate-500">
              Private beta for interested firms
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}