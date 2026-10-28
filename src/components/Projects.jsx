
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-gray-200 px-6 py-24 dark:border-[#27405E]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <p className="mb-3 text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]">
          MY WORK
        </p>

        <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl dark:text-[#CCD6F6]">
          Featured Projects.
        </h2>

        <p className="mb-12 max-w-2xl text-gray-600 dark:text-[#9FB0CA]">
          A selection of projects demonstrating my
          development skills and practical experience.
        </p>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-[#2563EB] dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]"
            >
              {/* Image */}

              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-50 dark:bg-[#0A192F]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>


              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
                  {project.shortDescription}
                </p>

                {/* Technology Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-[#0A192F] dark:text-[#CCD6F6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details Button */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-auto inline-block rounded-lg bg-[#2563EB] px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90 dark:bg-[#64FFDA] dark:text-[#0A192F]"
                >
                  View More / Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
