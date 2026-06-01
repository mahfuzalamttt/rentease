const faqs = [
  {
    question: "How does furniture rental work?",
    answer:
      "Choose your preferred products, select a rental plan, and get them delivered to your doorstep.",
  },

  {
    question: "Is there any security deposit?",
    answer:
      "Yes, a refundable security deposit is charged depending on the product.",
  },

  {
    question: "Can I extend my rental duration?",
    answer:
      "Absolutely! You can extend your rental plan anytime from your dashboard.",
  },

  {
    question: "Do you provide maintenance support?",
    answer:
      "Yes, maintenance and support are included during the rental period.",
  },
];

export default function FAQSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about RentEase
          </p>
        </div>

        <div className="mt-14 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <h3 className="text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}