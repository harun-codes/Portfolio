
import Link from "next/link";
import {
  FiCode,
  FiHeart,
  FiArrowUpRight,
} from "react-icons/fi";

const hobbies = ["Traveling", "Reading", "Photography", "Cricket"];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-gray-200 px-6 py-14 md:py-16 dark:border-[#27405E]"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-[#64FFDA]">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold text-[#111827] dark:text-[#CCD6F6]">
            About Me
            <span className="text-[#2563EB] dark:text-[#64FFDA]">
              .
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Side */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Hi, I&apos;m Harun Or Roshid.
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 dark:text-[#9FB0CA]">
             

              <p>
                My programming journey started with HTML,
                CSS and JavaScript. Over time, I explored
                React, Next.js, Node.js and MongoDB to
                build complete web applications.
              </p>

              <p>
                I enjoy solving problems, creating clean
                interfaces and learning new technologies.
                I value creativity, teamwork and continuous
                improvement.
              </p>
            </div>

            <Link
              href="/#projects"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:gap-3 dark:text-[#64FFDA]"
            >
              Explore My Work
              <FiArrowUpRight size={17} />
            </Link>
          </div>

          {/* Right Side */}
          <div className="space-y-4">

            {/* Work Interests */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-[#27405E] dark:bg-[#112442]">
              <div className="mb-3 flex items-center gap-3">
                <FiCode
                  size={21}
                  className="text-[#2563EB] dark:text-[#64FFDA]"
                />

                <h3 className="font-semibold text-[#111827] dark:text-[#CCD6F6]">
                  What I Enjoy
                </h3>
              </div>

              <p className="text-sm leading-6 text-gray-600 dark:text-[#9FB0CA]">
                Building interactive interfaces,
                developing full-stack applications
                and turning ideas into practical solutions.
              </p>
            </div>

            {/* Hobbies */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-[#27405E] dark:bg-[#112442]">
              <div className="mb-3 flex items-center gap-3">
                <FiHeart
                  size={21}
                  className="text-[#2563EB] dark:text-[#64FFDA]"
                />

                <h3 className="font-semibold text-[#111827] dark:text-[#CCD6F6]">
                  Beyond Coding
                </h3>
              </div>

              <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-[#9FB0CA]">
                Outside programming, I enjoy exploring
                new places and
                spending time on creative activities and playing Cricket with my buddies.
              </p>

              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-gray-700 dark:bg-[#0A192F] dark:text-[#CCD6F6]"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
