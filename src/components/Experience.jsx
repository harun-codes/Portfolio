
import {
  FiBookOpen,
  FiUsers,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Publication Secretary",
    organization:
      "IEEE Computer Society HSTU Student Branch Chapter",
    duration: "May 2025 - Present",
    type: "Leadership",
    icon: FiBookOpen,
  },
  {
    id: 2,
    role: "Assistant Organizing Secretary",
    organization: "CSE Club of HSTU",
    duration: "Nov 2025 - Present",
    type: "Leadership",
    icon: FiUsers,
  },
  {
    id: 3,
    role: "General Member",
    organization: "Notre Dame Math Club, Mymensingh",
    duration: "Apr 2022 - Jun 2023",
    type: "Membership",
    icon: FiAward,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-gray-200 px-6 py-16 md:py-20 dark:border-[#27405E]"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#64FFDA]">
            Beyond Academics
          </p>

          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl dark:text-[#CCD6F6]">
            Leadership & Activities
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#2563EB] dark:bg-[#64FFDA]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
            My involvement in student organizations,
            technical communities, and extracurricular
            activities.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">

          {experiences.map((exp) => {
            const Icon = exp.icon;

            return (
              <article
                key={exp.id}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/50 hover:shadow-md dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]/50 dark:hover:shadow-none"
              >
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#111827] dark:text-[#CCD6F6]">
                        {exp.role}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]">
                        {exp.organization}
                      </p>

                      <span className="mt-3 inline-block rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-[#0A192F] dark:text-[#9FB0CA]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Right */}
                  <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                    <FiCalendar size={14} />
                    {exp.duration}
                  </span>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
