const categories = [
  {
    title: "Beds",
    description: "Comfortable beds for better sleep",
    emoji: "🛏️",
  },
  {
    title: "Sofas",
    description: "Modern sofas for stylish living",
    emoji: "🛋️",
  },
  {
    title: "Tables",
    description: "Study and dining tables",
    emoji: "🪑",
  },
  {
    title: "Refrigerators",
    description: "Energy efficient cooling solutions",
    emoji: "❄️",
  },
  {
    title: "Washing Machines",
    description: "Smart laundry appliances",
    emoji: "🧺",
  },
  {
    title: "Televisions",
    description: "Entertainment for every home",
    emoji: "📺",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Browse Categories
          </h2>

          <p className="mt-4 text-slate-600">
            Explore furniture and appliances available for rent
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">
                {category.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {category.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}