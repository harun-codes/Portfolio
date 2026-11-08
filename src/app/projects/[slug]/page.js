
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import ProjectLinks from "@/components/projects/ProjectLinks";
import ProjectListSection from "@/components/projects/ProjectListSection";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";

import { projects } from "@/data/projects";
import { siteName, siteUrl } from "@/lib/seo";


// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectUrl = new URL(
    `/projects/${project.slug}`,
    siteUrl
  ).toString();

  const imageUrl = project.image
    ? new URL(project.image, siteUrl).toString()
    : null;

  return {
    title: project.title,

    description: project.shortDescription,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${project.title} | ${siteName}`,
      description: project.shortDescription,
      url: projectUrl,
      siteName,
      locale: "en_US",
      type: "article",

      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            alt: `${project.title} project preview`,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteName}`,
      description: project.shortDescription,

      ...(imageUrl && {
        images: [imageUrl],
      }),
    },
  };
}


// Generate Static Project Routes
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


// Project Details Page
export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white px-6 py-16 dark:bg-[#0A192F]">

        <div className="mx-auto max-w-5xl">

          {/* Project Hero */}
          <ProjectHero project={project} />

          <ProjectScreenshot
            title={project.title}
            screenshots={project.screenshots}
          />

          {/* Project Overview */}
          <ProjectOverview project={project} />

          {/* Project Features */}
          <ProjectFeatures features={project.features} />

          {/* Technology Stack */}
          <ProjectTechStack stack={project.stack} />

          {/* Project Links */}
          <ProjectLinks project={project} />

          {/* Challenges */}
          <ProjectListSection
            title="Challenges Faced"
            items={project.challenges}
          />

          {/* Future Improvements */}
          <ProjectListSection
            title="Future Improvements"
            items={project.improvements}
          />

        </div>

      </main>
    </>
  );
}
