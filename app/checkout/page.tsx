"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { products } from "@/lib/products";


export default function CheckoutPage() {
    const [cartIds, setCartIds] = useState<number[]>([]);

        useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            setCartIds(JSON.parse(savedCart));
        }
        }, []);

        const cartProducts = products.filter((product) =>
        cartIds.includes(product.id)
        );

        const totalRent = cartProducts.reduce(
        (total, product) =>
        total +
        Number(
        product.price
        .replace("₹", "")
        .replace("/month", "")
        ),
        0
    );

    const totalDeposit = cartProducts.reduce(
        (total, product) =>
        total +
        Number(
        product.deposit.replace("₹", "")
        ),
        0
        );

    const grandTotal =
            totalRent + totalDeposit;
    return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="mb-10 text-5xl font-bold text-slate-900">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

          {/* Customer Form */}

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <h2 className="mb-6 text-2xl font-bold">
              Customer Details
            </h2>

            <div className="grid gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

            </div>

            <h2 className="mb-6 mt-10 text-2xl font-bold">
              Delivery Address
            </h2>

            <div className="grid gap-6">

              <input
                type="text"
                placeholder="City"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="State"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

            </div>

          </div>

          {/* Summary */}

          <div>

            <div className="sticky top-24 rounded-3xl bg-white p-8 shadow-md">

              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>
            {cartProducts.map((product) => (
                <div
                    key={product.id}
                    className="mt-4 flex items-center gap-3 border-b pb-3"
                >
                    <span className="text-2xl">
                    {product.image}
                    </span>

                    <div>
                    <p className="font-medium">
                        {product.name}
                    </p>

                    <p className="text-sm text-slate-500">
                        {product.price}
                    </p>
                    </div>
                </div>
                ))}
              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Items
                  </span>

                  <span>
                    {cartProducts.length}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Monthly Rent
                  </span>

                  <span>
                    ₹{totalRent}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Security Deposit
                  </span>

                  <span>
                    ₹{totalDeposit}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">

                  <span>
                    Grand Total
                  </span>

                  <span className="text-cyan-600">
                    ₹{grandTotal}
                  </span>

                </div>

              </div>

              <Link
                href="/success"
                className="mt-8 block w-full rounded-xl bg-cyan-600 py-4 text-center text-white transition hover:bg-cyan-700"
              >
                Confirm Rental
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}