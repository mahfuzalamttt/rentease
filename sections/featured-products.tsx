const products = [
  {
    name: "Modern Sofa",
    price: "₹1499/month",
    image: "🛋️",
  },
  {
    name: "Double Bed",
    price: "₹1199/month",
    image: "🛏️",
  },
  {
    name: "Smart TV",
    price: "₹999/month",
    image: "📺",
  },
  {
    name: "Refrigerator",
    price: "₹1299/month",
    image: "❄️",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Rentals
          </h2>

          <p className="mt-4 text-slate-600">
            Most popular products rented by our customers
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl bg-white p-6 border border-slate-200 shadow-md transition hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
            >

              <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-100 text-7xl">
                {product.image}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {product.name}
              </h3>

              <p className="mt-2 text-indigo-600 font-medium">
                {product.price}
              </p>

              <button className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-700">
                Rent Now
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}