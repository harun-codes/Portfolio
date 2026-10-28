
import {
  FaGraduationCap,
} from "react-icons/fa6";

import {
  FiBookOpen,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

const education = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science and Engineering",
    institution:
      "Hajee Mohammad Danesh Science and Technology University",
    duration: "2024 - 2028",
    status: "Expected Graduation: 2028",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science and Engineering. I am passionate about full-stack web development, software engineering, and problem-solving, and I continue to strengthen my technical skills through academic learning and practical projects.",
    interests: [
      "Web Development",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Engineering",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (Science)",
    institution: "Notre Dame College, Mymensingh",
    duration: "2022 - 2023",
    description:
      "Completed higher secondary education, developing a strong foundation in mathematics, science, and analytical thinking.",
    icon: FiBookOpen,
  },
  {
    id: 3,
    degree: "Secondary School Certificate (Science)",
    institution: "Gourdwar B.L High School",
    duration: "2020 - 2021",
    description:
      "Completed secondary education and developed an interest in science, technology, and problem-solving.",
    icon: FiAward,
  },
];

export default function Education() {
  const [university, ...others] = education;

  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-gray-200 px-6 py-16 md:py-20 dark:border-[#27405E]"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#64FFDA]">
            Academic Journey
          </p>

          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl dark:text-[#CCD6F6]">
            My Education
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#2563EB] dark:bg-[#64FFDA]" />
        </div>

        {/* University Card */}
        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/50 hover:shadow-md sm:p-8 dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]/50 dark:hover:shadow-none">

          <div className="flex flex-wrap items-start justify-between gap-4">

            <div className="flex flex-1 items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                <FaGraduationCap size={24} />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-snug text-[#111827] sm:text-xl dark:text-[#CCD6F6]">
                  {university.degree}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-[#9FB0CA]">
                  {university.institution}
                </p>

                <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                  Currently Pursuing
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white dark:bg-[#0D9488]">
              <FiCalendar size={14} />
              {university.duration}
            </span>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
            {university.description}
          </p>

          <div className="mt-6">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-[#CCD6F6]">
              Academic & Technical Interests
            </h4>

            <div className="flex flex-wrap gap-2">
              {university.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-[#2563EB] dark:border-[#27405E] dark:bg-[#0A192F] dark:text-[#64FFDA]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HSC and SSC Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {others.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/50 hover:shadow-md dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]/50 dark:hover:shadow-none"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#111827] dark:text-[#CCD6F6]">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600 dark:bg-[#0A192F] dark:text-[#9FB0CA]">
                  <FiCalendar size={13} />
                  {item.duration}
                </span>

                <p className="text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
