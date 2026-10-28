
const skills = [
  {
    title: "Frontend",
    description: "Building modern user interfaces.",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Working with server-side technologies.",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    description: "Tools used in development.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-gray-200 px-6 py-24 dark:border-[#27405E]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]">
            TECHNICAL SKILLS
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl dark:text-[#CCD6F6]">
            Technologies I work with.
          </h2>

          <p className="max-w-2xl text-gray-600 dark:text-[#9FB0CA]">
            A collection of technologies and tools I use
            while building web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-gray-200 bg-white p-7 transition-colors hover:border-[#2563EB] dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]"
            >
              <h3 className="mb-2 text-xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
                {category.title}
              </h3>

              <p className="mb-7 text-sm leading-6 text-gray-500 dark:text-[#9FB0CA]">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 dark:border-[#27405E] dark:bg-[#0A192F] dark:text-[#CCD6F6]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
