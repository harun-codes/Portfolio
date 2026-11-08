
export default function ProjectLinks({ project }) {
  const links = [
    {
      label: "Live Demo",
      href: project.liveUrl,
      primary: true,
    },
    {
      label: "Frontend Repository",
      href: project.clientRepoUrl,
    },
    {
      label: "Backend Repository",
      href: project.backendRepoUrl,
    },
  ].filter((link) => Boolean(link.href));

  if (links.length === 0) return null;

  return (
    <section className="mb-12 flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            link.primary
              ? "rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-80 dark:bg-[#64FFDA] dark:text-[#0A192F]"
              : "rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-[#111827] transition hover:border-[#2563EB] dark:border-[#27405E] dark:text-[#CCD6F6] dark:hover:border-[#64FFDA]"
          }
        >
          {link.label} ↗
        </a>
      ))}
    </section>
  );
}
