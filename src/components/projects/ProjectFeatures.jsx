
export default function ProjectFeatures({ features }) {
  if (!Array.isArray(features) || features.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
        Key Features
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={`${index}-${feature}`}
            className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-[#27405E] dark:bg-[#112442]"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
              ✓
            </span>

            <p className="text-sm leading-6 text-gray-700 dark:text-[#9FB0CA]">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
