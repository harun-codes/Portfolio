
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) notFound();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white px-6 py-16 dark:bg-[#0A192F]">
        <div className="mx-auto max-w-5xl">

          {/* Back Button */}
          <Link
            href="/#projects"
            className="text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]"
          >
            ← Back to Projects
          </Link>

          {/* Title */}
          <h1 className="mb-6 mt-8 text-3xl font-bold text-[#111827] md:text-5xl dark:text-[#CCD6F6]">
            {project.title}
          </h1>

          {/* Image */}
          <div className="relative mb-12 h-64 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 md:h-[420px] dark:border-[#27405E]">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Project Overview
            </h2>

            <p className="leading-8 text-gray-600 dark:text-[#9FB0CA]">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Technology Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 dark:border-[#27405E] dark:bg-[#112442] dark:text-[#CCD6F6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="mb-12 flex flex-wrap gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white dark:bg-[#64FFDA] dark:text-[#0A192F]"
              >
                View Live Project ↗
              </a>
            ) : (
              <span className="rounded-lg border border-gray-200 px-6 py-3 text-sm text-gray-500 dark:border-[#27405E] dark:text-[#9FB0CA]">
                Live demo link not added
              </span>
            )}

            {project.clientRepoUrl ? (
              <a
                href={project.clientRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-[#111827] dark:border-[#27405E] dark:text-[#CCD6F6]"
              >
                Client GitHub Repository ↗
              </a>
            ) : (
              <span className="rounded-lg border border-gray-200 px-6 py-3 text-sm text-gray-500 dark:border-[#27405E] dark:text-[#9FB0CA]">
                Client GitHub link not added
              </span>
            )}
          </div>

          {/* Challenges */}
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Challenges Faced
            </h2>

            <ul className="list-disc space-y-3 pl-6 text-gray-600 dark:text-[#9FB0CA]">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Future Improvements
            </h2>

            <ul className="list-disc space-y-3 pl-6 text-gray-600 dark:text-[#9FB0CA]">
              {project.improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </>
  );
}
