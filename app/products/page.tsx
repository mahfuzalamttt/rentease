"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import { products } from "@/lib/products";



export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
  const categoryFromUrl =
    searchParams.get("category");

  if (categoryFromUrl) {
    setCategory(categoryFromUrl);
  }
  }, [searchParams]);

  useEffect(() => {
  const savedWishlist = localStorage.getItem("wishlist");

  if (savedWishlist) {
    setWishlist(JSON.parse(savedWishlist));
  }
  }, []);


  useEffect(() => {
  const syncWishlist = () => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  };

  window.addEventListener("focus", syncWishlist);

  return () => {
    window.removeEventListener(
      "focus",
      syncWishlist
    );
  };
  }, []);

  useEffect(() => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
  }, []);

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  return matchesSearch && matchesCategory;
  });
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-100">

      <Navbar />

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <h1 className="text-5xl font-bold text-slate-900">
                Rental Products
              </h1>

              <p className="mt-3 text-slate-600">
                Explore furniture and appliances available for rent
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                <button
                  onClick={() => setCategory("All")}
                  className={`rounded-xl px-4 py-2 ${
                    category === "All"
                      ? "bg-cyan-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  All
                </button>

                <button
                  onClick={() => setCategory("Furniture")}
                  className={`rounded-xl px-4 py-2 ${
                    category === "Furniture"
                      ? "bg-cyan-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  Furniture
                </button>

                <button
                  onClick={() => setCategory("Appliance")}
                  className={`rounded-xl px-4 py-2 ${
                    category === "Appliance"
                      ? "bg-cyan-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  Appliances
                </button>

            </div>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-cyan-500 md:w-96"
            />

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-20">
                <h2 className="text-3xl font-bold text-slate-800">
                  No Products Found
                </h2>

                <p className="mt-3 text-slate-500">
                  Try a different search keyword or category.
                </p>
              </div>
            )}
            {filteredProducts.map((product) => (
              

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">

                  <div className="flex h-44 items-center justify-center rounded-2xl bg-slate-100 text-7xl">
                    {product.image}
                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
                      {product.category}
                    </span>

                    <span className="font-semibold text-cyan-600">
                      {product.price}
                    </span>

                  </div>

                  <h2 className="mt-5 text-2xl font-semibold text-slate-900">
                    {product.name}
                  </h2>
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        
                        
                        if (wishlist.includes(product.id)) {

                          const updatedWishlist =
                            wishlist.filter((id) => id !== product.id);

                          setWishlist(updatedWishlist);

                          localStorage.setItem(
                            "wishlist",
                            JSON.stringify(updatedWishlist)
                          );

                          window.dispatchEvent(
                            new Event("wishlistUpdated")
                          );

                        } else {

                          const updatedWishlist = [
                            ...wishlist,
                            product.id,
                          ];

                          setWishlist(updatedWishlist);

                          localStorage.setItem(
                            "wishlist",
                            JSON.stringify(updatedWishlist)
                          );

                          window.dispatchEvent(
                            new Event("wishlistUpdated")
                          );
                        }
                      }}
                      className="text-2xl"
                    >
                      {wishlist.includes(product.id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      let updatedCart;

                      if (cart.includes(product.id)) {
                        updatedCart = cart.filter(
                          (id) => id !== product.id
                        );
                      } else {
                        updatedCart = [...cart, product.id];
                      }

                      setCart(updatedCart);

                      localStorage.setItem(
                        "cart",
                        JSON.stringify(updatedCart)
                      );

                      window.dispatchEvent(
                        new Event("cartUpdated")
                      );
                    }}
                    className={`mt-4 w-full rounded-xl px-4 py-3 transition ${
                      cart.includes(product.id)
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-slate-200 hover:bg-slate-300"
                    }`}
                  >
                    {cart.includes(product.id)
                      ? "✅ Added to Cart"
                      : "🛒 Add to Cart"}
                  </button>
                  <div className="mt-6">

                    <Link
                      href={`/products/${product.id}`}
                      className="block w-full rounded-xl bg-cyan-600 py-3 text-center text-white transition hover:bg-cyan-700"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}