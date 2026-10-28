
import Link from "next/link";

import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiArrowUpRight,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

import { contact } from "@/data/contact";

export default function Contact() {
  const email = contact.email?.trim();
  const phone = contact.phone?.trim();
  const whatsapp = contact.whatsapp?.replace(/\D/g, "");

  // Contact Methods
  const methods = [
    {
      title: "Email Me",
      value: email,
      description: "For projects and opportunities",
      icon: FiMail,
      href: email ? `mailto:${email}` : null,
    },
    {
      title: "Call Me",
      value: phone,
      description: "For direct communication",
      icon: FiPhone,
      href: phone
        ? `tel:${phone.replace(/[^\d+]/g, "")}`
        : null,
    },
    {
      title: "WhatsApp",
      value: contact.whatsapp,
      description: "Let's have a conversation",
      icon: FiMessageCircle,
      href: whatsapp
        ? `https://wa.me/${whatsapp}`
        : null,
    },
  ].filter((item) => item.href);

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
  ].filter((item) => item.href);

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-gray-200 px-6 py-16 md:py-20 dark:border-[#27405E]"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#64FFDA]">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl dark:text-[#CCD6F6]">
            Let&apos;s Connect
            <span className="text-[#2563EB] dark:text-[#64FFDA]">
              .
            </span>
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#2563EB] dark:bg-[#64FFDA]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
            Have a project in mind, an opportunity to discuss,
            or simply want to say hello? I&apos;d love to hear
            from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-7 sm:p-9 dark:border-[#27405E] dark:bg-[#112442]">

            <div>
              <span className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]">
                <span className="h-2 w-2 rounded-full bg-[#2563EB] dark:bg-[#64FFDA]" />
                Let&apos;s Talk
              </span>

              <h3 className="mb-5 text-2xl font-bold leading-snug text-[#111827] sm:text-3xl dark:text-[#CCD6F6]">
                Let&apos;s build something
                <span className="text-[#2563EB] dark:text-[#64FFDA]">
                  {" "}great together.
                </span>
              </h3>

              <p className="max-w-md text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
                I&apos;m interested in collaborating on
                meaningful projects, solving problems,
                and creating impactful digital experiences.
                Feel free to reach out!
              </p>

              {/* Email CTA */}
              {email && (
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(
                    "Project Inquiry"
                  )}`}
                  className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8] dark:bg-[#64FFDA] dark:text-[#0A192F] dark:hover:bg-[#4CE9C3]"
                >
                  <FiSend size={17} />
                  Send Me an Email
                  <FiArrowUpRight size={17} />
                </a>
              )}
            </div>

            {/* Social Profiles */}
            {socials.length > 0 && (
              <div className="mt-9 border-t border-gray-200 pt-6 dark:border-[#27405E]">
                <p className="mb-4 text-sm font-medium text-gray-600 dark:text-[#9FB0CA]">
                  Find me on
                </p>

                <div className="flex flex-wrap gap-3">
                  {socials.map(({ name, icon: Icon, href }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#27405E] dark:bg-[#0A192F] dark:text-[#CCD6F6] dark:hover:border-[#64FFDA] dark:hover:text-[#64FFDA]"
                    >
                      <Icon size={19} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Contact Cards */}
          <div className="flex flex-col gap-4">

            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={
                    method.title === "WhatsApp"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/60 hover:shadow-sm dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]/60 dark:hover:shadow-none sm:p-6"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                    <Icon size={23} />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1 font-semibold text-[#111827] dark:text-[#CCD6F6]">
                      {method.title}
                    </h4>

                    <p className="mb-2 text-xs text-gray-500 dark:text-[#9FB0CA]">
                      {method.description}
                    </p>

                    <p className="break-all text-sm font-medium text-[#2563EB] dark:text-[#64FFDA]">
                      {method.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <FiArrowUpRight
                    size={19}
                    className="shrink-0 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2563EB] dark:group-hover:text-[#64FFDA]"
                  />
                </a>
              );
            })}

            {/* Fallback when details are not added */}
            {methods.length === 0 && (
              <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-gray-300 p-8 text-center dark:border-[#27405E]">
                <p className="text-sm leading-7 text-gray-500 dark:text-[#9FB0CA]">
                  Contact information will be available soon.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
