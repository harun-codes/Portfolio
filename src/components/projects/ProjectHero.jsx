
import Image from "next/image";
import Link from "next/link";

export default function ProjectHero({ project }) {
  return (
    <section>
      <Link
        href="/#projects"
        className="text-sm font-medium text-[#2563EB] transition hover:opacity-70 dark:text-[#64FFDA]"
      >
        ← Back to Projects
      </Link>

      <h1 className="mb-6 mt-8 text-3xl font-bold text-[#111827] md:text-5xl dark:text-[#CCD6F6]">
        {project.title}
      </h1>

      {project.image && (
        <div className="relative mb-12 h-64 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 md:h-[420px] dark:border-[#27405E]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            priority
            sizes="(max-width: 768px) calc(100vw - 3rem), 1024px"
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
