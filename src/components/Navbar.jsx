
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Projects", "/#projects"],
  ["Education", "/#education"],
  ["Leadership", "/#experience"],
  ["Contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();
  const activeSection =
    pathname === "/"
      ? active
      : pathname.startsWith("/projects")
        ? "Projects"
        : "";

  // Detect active section while scrolling
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      let current = "Home";

      links.slice(1).forEach(([name, href]) => {
        const id = href.split("#")[1];
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <=
            window.innerHeight * 0.3
        ) {
          current = name;
        }
      });

      setActive(current);
    };

    const frame = window.requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-[#27405E] dark:bg-[#0A192F]/95">
      <div className="mx-auto grid h-18 max-w-6xl grid-cols-2 items-center px-6 lg:grid-cols-3">

        {/* Logo */}
        <Link
          href="/"
          className="justify-self-start text-xl font-bold text-[#111827] dark:text-[#CCD6F6]"
        >
          HA <span className="text-amber-600">R</span> UN
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-6 lg:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setActive(name)}
              aria-current={
                activeSection === name ? "location" : undefined
              }
              className={`whitespace-nowrap border-b-2 py-2 text-sm transition-all duration-200 ${
                activeSection === name
                  ? "border-[#2563EB] font-semibold text-[#2563EB] dark:border-[#64FFDA] dark:text-[#64FFDA]"
                  : "border-transparent text-gray-600 hover:text-[#2563EB] dark:text-[#CCD6F6] dark:hover:text-[#64FFDA]"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center justify-self-end gap-3">
          <ThemeToggle />

          <button
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 dark:border-[#27405E] dark:text-[#CCD6F6] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="flex flex-col gap-2 border-t border-gray-200 bg-white px-6 py-5 dark:border-[#27405E] dark:bg-[#0A192F] lg:hidden">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => {
                setActive(name);
                setOpen(false);
              }}
              aria-current={
                activeSection === name ? "location" : undefined
              }
              className={`border-l-2 px-4 py-2 text-sm transition ${
                activeSection === name
                  ? "border-[#2563EB] bg-gray-50 font-semibold text-[#2563EB] dark:border-[#64FFDA] dark:bg-[#112442] dark:text-[#64FFDA]"
                  : "border-transparent text-gray-600 dark:text-[#CCD6F6]"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
