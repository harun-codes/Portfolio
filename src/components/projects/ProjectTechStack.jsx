
export default function ProjectTechStack({ stack }) {
  if (!Array.isArray(stack) || stack.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
        Technology Stack
      </h2>

      <div className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 dark:border-[#27405E] dark:bg-[#112442] dark:text-[#CCD6F6]"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
