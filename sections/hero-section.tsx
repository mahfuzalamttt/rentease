"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
          Affordable Monthly Rentals
        </span>

        <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
          Rent Furniture & Appliances Without Buying
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          Flexible rental plans for students and working professionals.
          Upgrade your lifestyle without high upfront costs.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-medium text-white transition hover:bg-indigo-700">
            Explore Rentals
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 transition hover:bg-slate-100">
            Browse Categories
          </button>

        </div>

      </div>
    </motion.section>
  );
}