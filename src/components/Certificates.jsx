
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiAward,
  FiCode,
  FiBookOpen,
  FiGrid,
  FiExternalLink,
  FiCalendar,
  FiEye,
  FiX,
} from "react-icons/fi";

import { certificates } from "@/data/certificates";

const categories = [
  {
    value: "all",
    label: "All",
    icon: FiGrid,
  },
  {
    value: "development",
    label: "Development",
    icon: FiCode,
  },
  {
    value: "programming",
    label: "Programming",
    icon: FiBookOpen,
  },
  {
    value: "other",
    label: "Other",
    icon: FiAward,
  },
];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all");

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  // Filter certificates
  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter(
          (item) => item.category === activeCategory
        );

  // Category label
  const getCategoryLabel = (category) => {
    return (
      categories.find((item) => item.value === category)
        ?.label || "Certificate"
    );
  };

  // Modal Escape key and body scroll control
  useEffect(() => {
    if (!selectedCertificate) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  return (
    <>
      <section
        id="certificates"
        className="scroll-mt-24 border-t border-gray-200 px-5 py-16 sm:px-6 md:py-20 dark:border-[#27405E]"
      >
        <div className="mx-auto w-full max-w-7xl">

          {/* Heading */}
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div className="min-w-0 flex-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB] dark:text-[#64FFDA]">
                Professional Development
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl dark:text-[#CCD6F6]">
                Certificates & Credentials
                <span className="text-[#2563EB] dark:text-[#64FFDA]">
                  .
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base dark:text-[#9FB0CA]">
                A collection of my certifications, technical
                workshops, and professional learning achievements.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 self-start rounded-xl border border-gray-200 bg-gray-50 p-1.5 lg:shrink-0 lg:self-end dark:border-[#27405E] dark:bg-[#112442]">

              {categories.map((category) => {
                const Icon = category.icon;
                const isActive =
                  activeCategory === category.value;

                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category.value)
                    }
                    aria-pressed={isActive}
                    className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-4 sm:text-sm ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow-sm dark:bg-[#64FFDA] dark:text-[#0A192F]"
                        : "text-gray-600 hover:bg-white hover:text-[#2563EB] dark:text-[#9FB0CA] dark:hover:bg-[#0A192F] dark:hover:text-[#64FFDA]"
                    }`}
                  >
                    <Icon size={16} />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Certificates Grid */}
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredCertificates.map((certificate) => {
                const viewUrl =
                  certificate.fileUrl || certificate.image;

                return (
                  <article
                    key={certificate.id}
                    className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/50 hover:shadow-lg dark:border-[#27405E] dark:bg-[#112442] dark:hover:border-[#64FFDA]/50 dark:hover:shadow-none"
                  >

                    {/* Certificate Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-gray-200 bg-gray-50 dark:border-[#27405E] dark:bg-[#0A192F]">

                      {certificate.image ? (
                        <Image
                          src={certificate.image}
                          alt={`${certificate.title} certificate`}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.025]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <FiAward
                            size={48}
                            className="text-gray-300 dark:text-[#27405E]"
                          />
                        </div>
                      )}

                      {/* Category Badge */}
                      <span className="absolute left-4 top-4 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#2563EB] shadow-sm dark:border-[#27405E] dark:bg-[#0A192F]/95 dark:text-[#64FFDA]">
                        {getCategoryLabel(certificate.category)}
                      </span>

                      {/* Preview Overlay */}
                      {viewUrl && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCertificate(certificate)
                          }
                          className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 hover:bg-black/40 hover:opacity-100 focus-visible:bg-black/40 focus-visible:opacity-100"
                          aria-label={`Preview ${certificate.title}`}
                        >
                          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105">
                            <FiEye size={18} />
                            Preview
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Certificate Information */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">

                      {/* Issuer */}
                      <p className="mb-3 line-clamp-2 text-xs font-semibold uppercase tracking-wide text-[#2563EB] dark:text-[#64FFDA]">
                        {certificate.issuer}
                      </p>

                      {/* Title */}
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-7 text-[#111827] dark:text-[#CCD6F6]">
                        {certificate.title}
                      </h3>

                      {/* Description */}
                      {certificate.description && (
                        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-[#9FB0CA]">
                          {certificate.description}
                        </p>
                      )}

                      {/* Issue Date */}
                      {certificate.issued && (
                        <div className="mb-5 flex items-center gap-2 text-xs text-gray-500 dark:text-[#9FB0CA]">
                          <FiCalendar size={15} />
                          <span>
                            Issued {certificate.issued}
                          </span>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-[#27405E]">

                        {viewUrl ? (
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedCertificate(certificate)
                            }
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#64FFDA] dark:hover:text-[#4CE9C3]"
                          >
                            <FiEye size={17} />
                            Preview Certificate
                          </button>
                        ) : (
                          <span className="text-xs text-gray-400 dark:text-[#9FB0CA]">
                            Preview unavailable
                          </span>
                        )}

                        {certificate.verifyUrl && (
                          <Link
                            href={certificate.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/30 px-3 py-2 text-xs font-semibold text-[#2563EB] transition-colors hover:bg-blue-50 dark:border-[#64FFDA]/30 dark:text-[#64FFDA] dark:hover:bg-[#0A192F]"
                          >
                            Verify
                            <FiExternalLink size={15} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (

            /* Empty State */
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-14 text-center dark:border-[#27405E] dark:bg-[#112442]">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] dark:bg-[#0A192F] dark:text-[#64FFDA]">
                <FiAward size={28} />
              </div>

              <h3 className="text-lg font-semibold text-[#111827] dark:text-[#CCD6F6]">
                {activeCategory === "all"
                  ? "Certificates Coming Soon"
                  : "No Certificates Found"}
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 dark:text-[#9FB0CA]">
                {activeCategory === "all"
                  ? "My certificates will be showcased here."
                  : "There are no certificates in this category yet."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================
          CERTIFICATE PREVIEW MODAL
      ======================================== */}

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-[#27405E] dark:bg-[#0A192F]"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-emerald-500"
            >
              <FiX size={24} />
            </button>

            <div className="overflow-y-auto p-4 sm:p-7">

              {/* Certificate Image Preview */}
              {selectedCertificate.image ? (
                <div className="relative mb-7 h-[45vh] min-h-[240px] max-h-[650px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-[#27405E] dark:bg-[#112442]">

                  <Image
                    src={selectedCertificate.image}
                    alt={`${selectedCertificate.title} full certificate preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1100px"
                    className="object-contain"
                    priority
                  />

                </div>
              ) : selectedCertificate.fileUrl ? (
                <iframe
                  src={selectedCertificate.fileUrl}
                  title={`${selectedCertificate.title} certificate`}
                  className="mb-7 h-[55vh] w-full rounded-2xl border border-gray-200 dark:border-[#27405E]"
                />
              ) : (
                <div className="mb-7 flex h-64 items-center justify-center rounded-2xl bg-gray-100 dark:bg-[#112442]">
                  <FiAward size={64} className="text-gray-400" />
                </div>
              )}

              {/* Certificate Details */}
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                {/* Information */}
                <div className="min-w-0 flex-1">

                  <span className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-[#64FFDA]">
                    {getCategoryLabel(selectedCertificate.category)}
                  </span>

                  <h2
                    id="certificate-modal-title"
                    className="mb-3 text-xl font-bold text-[#111827] sm:text-2xl dark:text-[#CCD6F6]"
                  >
                    {selectedCertificate.title}
                  </h2>

                  <p className="text-sm leading-7 text-gray-600 dark:text-[#9FB0CA]">
                    Issued by {selectedCertificate.issuer}
                  </p>

                  {selectedCertificate.issued && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-[#9FB0CA]">
                      <FiCalendar size={15} />
                      Issued {selectedCertificate.issued}
                    </p>
                  )}

                  {selectedCertificate.credentialId && (
                    <p className="mt-2 break-all text-sm text-gray-500 dark:text-[#9FB0CA]">
                      Credential ID: {selectedCertificate.credentialId}
                    </p>
                  )}

                </div>

                {/* Verification Button */}
                {selectedCertificate.verifyUrl && (
                  <Link
                    href={selectedCertificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-600"
                  >
                    Open Verification
                    <FiExternalLink size={18} />
                  </Link>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
