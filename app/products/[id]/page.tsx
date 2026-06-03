import Link from "next/link";
import Navbar from "@/components/navbar";
import WishlistButton from "@/components/WishlistButton";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Furniture",
    price: "₹1499/month",
    deposit: "₹3000",
    image: "🛋️",
    description:
      "A stylish and comfortable sofa perfect for modern apartments.",
    features: [
      "Premium Quality",
      "Easy Maintenance",
      "Modern Design",
    ]
  },

  {
    id: 2,
    name: "Double Bed",
    category: "Furniture",
    price: "₹1199/month",
    deposit: "₹2500",
    image: "🛏️",
    description:
      "Premium quality double bed with modern wooden finish.",
    features: [
      "Premium Quality",
      "Easy Maintenance",
      "Modern Design",
    ]
  },

  {
    id: 3,
    name: "Smart TV",
    category: "Appliance",
    price: "₹999/month",
    deposit: "₹2000",
    image: "📺",
    description:
      "High-definition smart television for entertainment lovers.",
    features: [
      "Premium Quality",
      "Easy Maintenance",
      "Modern Design",
    ]
  },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );
  const relatedProducts = products.filter(
  (item) =>
    item.category === product?.category &&
    item.id !== product?.id
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      <Navbar />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          <div>
            <div className="flex h-[400px] items-center justify-center rounded-3xl bg-white text-9xl shadow-md">
              {product.image}
            </div>

            <div className="mt-6">

              <h3 className="text-xl font-semibold text-slate-900">
                Features
              </h3>

              <ul className="mt-4 flex flex-wrap gap-10">

                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
                  >
                    ➤ {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                {product.category}
              </span>
              <span className="text-sm font-medium text-green-600">
                🟢 Available
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-slate-600">
                  Monthly Rent
                </span>

                <span className="text-2xl font-bold text-indigo-600">
                  {product.price}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-slate-600">
                  Security Deposit
                </span>

                <span className="text-2xl font-bold text-slate-900">
                  {product.deposit}
                </span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <button className="rounded-xl bg-indigo-600 px-8 py-4 text-white transition hover:bg-indigo-700">
                Rent Now
              </button>

              <WishlistButton
                productId={product.id}
              />

            </div>
          </div>

        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-10 text-4xl font-bold text-slate-900">
            Related Products
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
              >

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

                  <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-100 text-7xl">
                    {item.image}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-2 font-medium text-indigo-600">
                    {item.price}
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}