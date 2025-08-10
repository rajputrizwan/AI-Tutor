export default function WhyUs() {
  const points = [
    "AI-driven matching for faster results.",
    "Customizable filters for your unique needs.",
    "Secure and private data handling.",
  ];

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">
          Why Choose Us
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md dark:shadow-[0_2px_10px_rgba(255,255,255,0.05)] text-gray-600 dark:text-gray-300"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
