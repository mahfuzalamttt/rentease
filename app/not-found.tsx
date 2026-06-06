import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="text-center">

        <div className="text-8xl">
          😕
        </div>

        <h1 className="mt-6 text-6xl font-bold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-indigo-600 px-8 py-4 text-white transition hover:bg-indigo-700"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}