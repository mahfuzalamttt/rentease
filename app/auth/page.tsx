"use client";

import Navbar from "@/components/navbar";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-4">

        <h1 className="mb-2 text-center text-4xl font-bold text-slate-900">
          Welcome to RentEase
        </h1>

        <p className="mb-6 text-center text-slate-500">
          Login or create an account to continue
        </p>

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">

            {/* Login */}

            <div className="rounded-2xl border border-slate-200 p-6">

              <h2 className="text-3xl font-bold">
                Login
              </h2>

              <p className="mt-2 text-slate-500">
                Welcome Back!
              </p>

              <div className="mt-8 space-y-4">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
                />

                <button className="w-full rounded-xl bg-cyan-600 py-4 text-white transition hover:bg-cyan-700 font-bold">
                  Login
                </button>

              </div>

            </div>

            {/* OR */}

            <div className="flex items-center justify-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-200 bg-cyan-600 font-bold text-white shadow-md">
                OR
              </div>

            </div>

            {/* Register */}

            <div className="rounded-2xl border border-slate-200 p-6">

              <h2 className="text-3xl font-bold">
                Register
              </h2>

              <p className="mt-2 text-slate-500">
                Create Your Account
              </p>

              <div className="mt-8 space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
                />

                <button className="w-full rounded-xl bg-cyan-600 py-4 text-white transition hover:bg-cyan-700 font-bold">
                  Register
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}