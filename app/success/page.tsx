import Link from "next/link";
import Navbar from "@/components/navbar";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="flex min-h-[80vh] items-center justify-center px-6">

        <div className="max-w-2xl text-center">

          <div className="text-8xl">
            🎉
          </div>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Rental Confirmed!
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Thank you for choosing RentEase.
            Your rental request has been submitted
            successfully and our team will contact
            you soon.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/products"
              className="rounded-xl bg-indigo-600 px-8 py-4 text-white transition hover:bg-indigo-700"
            >
              Browse More Products
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 transition hover:bg-slate-100"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}