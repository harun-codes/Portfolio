
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
} from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

import { contact } from "@/data/contact";

// Footer Navigation
const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Me", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Leadership", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  // Fix: Prevent unstable Date during prerendering
  const [year, setYear] = useState(2026);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  const email = contact.email?.trim();

  // Social Links
  const socials = [
    {
      name: "GitHub",
      icon: FiGithub,
      href: contact.github,
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      href: contact.linkedin,
    },
    {
      name: "Facebook",
      icon: FiFacebook,
      href: contact.facebook,
    },
    {
      name: "X",
      icon: FaXTwitter,
      href: contact.x,
    },
  ].filter((item) => item.href?.trim());

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-[#27405E] dark:bg-[#0A192F]">

      <div className="mx-auto max-w-6xl px-6 pb-6 pt-14">

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-gray-200 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16 dark:border-[#27405E]">

          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="justify-self-start text-xl font-bold text-[#111827] dark:text-[#CCD6F6]"
            >
              HA <span className="text-amber-600">R</span> UN

            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
              Building modern, responsive and
              user-friendly web applications
              with clean code, thoughtful design
              and a passion for solving real-world
              problems.
            </p>

            {/* Social Icons */}
            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {socials.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#27405E] dark:bg-[#112442] dark:text-[#CCD6F6] dark:hover:border-[#64FFDA] dark:hover:text-[#64FFDA]"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-5 gap-y-4"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-gray-600 transition-colors hover:text-[#2563EB] dark:text-[#9FB0CA] dark:hover:text-[#64FFDA]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-[#111827] dark:text-[#CCD6F6]">
              Let&apos;s Collaborate
            </h3>

            <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
              Have a project idea, an opportunity,
              or want to discuss something exciting?
              Let&apos;s connect and build something
              meaningful together.
            </p>

            {/* Email Address */}
            {email && (
              <a
                href={`mailto:${email}`}
                className="mb-6 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-[#2563EB] hover:underline dark:text-[#64FFDA]"
              >
                <FiMail
                  size={17}
                  className="shrink-0"
                />
                {email}
              </a>
            )}

            {/* Contact Button */}
            {email ? (
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  "Portfolio Inquiry"
                )}`}
                className="flex w-fit items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] dark:bg-[#64FFDA] dark:text-[#0A192F] dark:hover:bg-[#4CE9C3]"
              >
                Get In Touch
                <FiArrowUpRight size={17} />
              </a>
            ) : (
              <Link
                href="/#contact"
                className="flex w-fit items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[#64FFDA] dark:text-[#0A192F]"
              >
                Get In Touch
                <FiArrowUpRight size={17} />
              </Link>
            )}
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center md:flex-row md:text-left">

          {/* Copyright */}
          <p className="text-xs text-gray-500 dark:text-[#9FB0CA]">
            © {year} {contact.name || "Harun Or Roshid"}.
            All rights reserved.
          </p>

          {/* Back To Top */}
          <Link
            href="/#home"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#64FFDA] dark:hover:text-[#4CE9C3]"
          >
            Back to Top
            <FiArrowUp
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </footer>
  );
}
