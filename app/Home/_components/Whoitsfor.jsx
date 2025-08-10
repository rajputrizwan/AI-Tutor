export default function WhoItsFor() {
  const users = [
    "Job Seekers looking for their dream role.",
    "Recruiters who want smarter candidate search.",
    "Companies hiring with speed and precision.",
  ];

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Who It’s For
        </h2>
        <ul className="space-y-6 max-w-2xl mx-auto">
          {users.map((user, idx) => (
            <li
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md dark:shadow-[0_2px_10px_rgba(255,255,255,0.05)] text-gray-600 dark:text-gray-300"
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
