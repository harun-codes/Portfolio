
import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/harun-codes",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/harun-or-roshid-3a1731345",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/mh.babu.5437",
  }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[70svh] max-w-6xl scroll-mt-24 items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:py-14"
    >
      {/* Left Content */}
      <div className="text-center lg:text-left">

        {/* Greeting */}
        <p className="mb-3 text-lg font-medium text-gray-600 sm:text-xl dark:text-[#9FB0CA]">
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-[3.7rem] dark:text-[#CCD6F6]">
          Harun Or Roshid
        </h1>

        {/* Designation */}
        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
          <span className="h-[2px] w-7 bg-[#2563EB] dark:bg-[#64FFDA]" />

          <h2 className="text-xl font-semibold text-[#2563EB] sm:text-xl dark:text-[#64FFDA]">
            Full Stack Developer
          </h2>
        </div>

        {/* Description */}
        <p className="mx-auto mb-7 max-w-lg text-base leading-7 text-gray-600 lg:mx-0 dark:text-[#9FB0CA]">
          I build modern, responsive and user-friendly web
          applications using React, Next.js and modern web
          technologies. I focus on clean design, performance
          and great user experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] dark:bg-[#64FFDA] dark:text-[#0A192F] dark:hover:bg-[#4CE9C3]"
          >
            View Projects
            <FiArrowUpRight size={17} />
          </Link>

          <Link
            href="/resume.pdf"
            download="Harun-Or-Roshid-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-[#111827] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-gray-50 dark:border-[#27405E] dark:text-[#CCD6F6] dark:hover:border-[#64FFDA] dark:hover:bg-[#112442]"
          >
            Download Resume
            <FiDownload size={17} />
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

          <span className="text-sm font-medium text-gray-500 dark:text-[#9FB0CA]">
            Contact me
          </span>

          <span className="h-px w-6 bg-gray-300 dark:bg-[#27405E]" />

          <div className="flex items-center gap-2.5">
            {socials.map(({ name, icon: Icon, href }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] dark:border-[#27405E] dark:text-[#9FB0CA] dark:hover:border-[#64FFDA] dark:hover:bg-[#112442] dark:hover:text-[#64FFDA]"
              >
                <Icon size={17} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="mx-auto w-full max-w-[280px] sm:max-w-[330px] lg:ml-auto lg:mr-0">

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-[#27405E] dark:bg-[#112442]">

          <Image
            src="/profile.jpg"
            alt="Harun Or Roshid"
            fill
            priority
            sizes="(max-width: 640px) 280px, 330px"
            className="object-cover"
          />

        </div>
      </div>
    </section>
  );
}
