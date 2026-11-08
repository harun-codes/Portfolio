
import { siteUrl } from "@/lib/seo";
import { projects } from "@/data/projects";

export default function sitemap() {
  const homepage = {
    url: siteUrl,
    changeFrequency: "monthly",
    priority: 1,
  };

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [homepage, ...projectPages];
}
