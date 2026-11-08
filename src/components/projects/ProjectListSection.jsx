
export default function ProjectListSection({ title, items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
        {title}
      </h2>

      <ul className="list-disc space-y-3 pl-6 text-gray-600 dark:text-[#9FB0CA]">
        {items.map((item, index) => (
          <li key={`${index}-${item}`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
