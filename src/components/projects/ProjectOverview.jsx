
export default function ProjectOverview({ project }) {
  if (!project.description) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
        Project Overview
      </h2>

      <p className="leading-8 text-gray-600 dark:text-[#9FB0CA]">
        {project.description}
      </p>
    </section>
  );
}
