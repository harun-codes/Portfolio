
import Image from "next/image";

export default function ProjectScreenshot({
  title = "Project",
  screenshots = [],
}) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
          Project Screenshots
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-[#9FB0CA]">
          Explore the interface and key features of {title}.
        </p>
      </div>

      {/* Screenshot Gallery */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {screenshots.map((src, index) => (
          <div
            key={src}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#27405E] dark:bg-[#112442] dark:hover:shadow-none"
          >
            {/* Screenshot Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={src}
                alt={`${title} project screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Screenshot Caption */}
            <div className="border-t border-gray-200 px-4 py-3 dark:border-[#27405E]">
              <p className="text-sm font-medium text-gray-700 dark:text-[#CCD6F6]">
                {title} — Screenshot {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
