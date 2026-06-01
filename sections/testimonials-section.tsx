const testimonials = [
  {
    name: "Aman Verma",
    role: "College Student",
    rating: 4,
    review:
      "RentEase helped me furnish my apartment affordably during college.",
  },

  {
    name: "Sneha Kapoor",
    role: "Software Engineer",
    rating: 3,
    review:
      "The rental process was smooth and delivery was super fast.",
  },

  {
    name: "Rahul Mehta",
    role: "Working Professional",
    rating: 5,
    review:
      "Best platform for renting appliances without huge upfront costs.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by students and professionals across cities
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-4xl">
                {'⭐'.repeat(testimonial.rating)}
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="text-slate-500">
                  {testimonial.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}