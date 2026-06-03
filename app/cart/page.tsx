"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Furniture",
    price: "₹1499/month",
    image: "🛋️",
  },
  {
    id: 2,
    name: "Double Bed",
    category: "Furniture",
    price: "₹1199/month",
    image: "🛏️",
  },
  {
    id: 3,
    name: "Smart TV",
    category: "Appliance",
    price: "₹999/month",
    image: "📺",
  },
  {
    id: 4,
    name: "Refrigerator",
    category: "Appliance",
    price: "₹1299/month",
    image: "❄️",
  },
  {
    id: 5,
    name: "Washing Machine",
    category: "Appliance",
    price: "₹899/month",
    image: "🧺",
  },
  {
    id: 6,
    name: "Study Table",
    category: "Furniture",
    price: "₹699/month",
    image: "🪑",
  },
];

export default function CartPage() {
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
  return (
    <main className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="mx-auto max-w-7xl px-6 py-12">

  <h1 className="mb-10 text-5xl font-bold text-slate-900">
    My Cart 🛒
  </h1>

  {cartProducts.length === 0 ? (

    <div className="rounded-3xl bg-white p-12 text-center shadow-md">
      <h2 className="text-3xl font-bold">
        Your Cart is Waiting 📦
      </h2>

      <p className="mt-3 text-slate-500">
        Add products from the products page.
      </p>
    </div>

  ) : (

    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

      {/* Left Side */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-md">

        <div className="grid grid-cols-3 border-b bg-slate-50 px-8 py-5 font-semibold text-slate-700">

          <div>Product</div>
          <div>Monthly Rent</div>
          <div className="text-right">Action</div>

        </div>

        {cartProducts.map((product) => (

          <div
            key={product.id}
            className="grid grid-cols-3 items-center border-b px-8 py-6"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-3xl">
                {product.image}
              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {product.category}
                </p>

              </div>

            </div>

            <div className="font-semibold text-indigo-600">
              {product.price}
            </div>

            <div className="text-right">

              <button
                onClick={() => {
                  const updatedCart = cartIds.filter(
                    (id) => id !== product.id
                  );

                  setCartIds(updatedCart);

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(updatedCart)
                  );

                  window.dispatchEvent(
                    new Event("cartUpdated")
                  );
                }}
                className="rounded-xl bg-red-100 px-4 py-2 text-red-600 transition hover:bg-red-200"
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Right Side Summary */}

      <div>

        <div className="sticky top-24 rounded-3xl bg-white p-8 shadow-md">

          <h2 className="text-xl font-semibold text-slate-900">
            Order Summary
          </h2>

          <div className="mt-6 flex justify-between">

            <span className="text-slate-500">
              Total Items
            </span>

            <span className="font-medium">
              {cartProducts.length}
            </span>

          </div>

          <div className="mt-4 flex justify-between border-b pb-6">

            <span className="text-slate-500">
              Delivery
            </span>

            <span className="text-green-600">
              Free
            </span>

          </div>

          <div className="mt-6 flex justify-between">

            <span className="font-semibold">
              Total Rent
            </span>

            <span className="text-2xl font-bold text-indigo-600">
              ₹{totalRent}
            </span>

          </div>

          <p className="mt-2 text-sm text-slate-500">
            Per Month
          </p>

          <Link href="/checkout">
            <button className="mt-8 w-full rounded-xl bg-indigo-600 py-4 text-white transition hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </Link>

        </div>

      </div>

    </div>

  )}

</section>

    </main>
  );
}