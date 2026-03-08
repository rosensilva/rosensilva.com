"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCES = [
  {
    role: "Technical Lead",
    period: "Feb 2024 – Present",
    description:
      "Product Lead for WSO2 Micro Integrator — driving roadmap, feature prioritization, and release cycles for a $20M+ ARR product. Built Integration Studio (VS Code extension), patch distribution pipelines, and customer issue triaging systems.",
  },
  {
    role: "Associate Technical Lead",
    period: "Nov 2020 – Feb 2024",
    description:
      "Led key product areas in WSO2 API Manager and Enterprise Integrator, driving customer-centric feature development and resolving critical technical challenges.",
  },
  {
    role: "Senior Software Engineer",
    period: "Apr 2019 – Oct 2020",
    description:
      "Drove feature development and technical improvements across WSO2's enterprise integration product suite.",
  },
  {
    role: "Software Engineer",
    period: "Dec 2017 – Mar 2019",
    description:
      "Built and maintained enterprise integration features for WSO2's core product line.",
  },
  {
    role: "Software Engineering Intern",
    period: "Oct 2016 – Feb 2017",
    description:
      "Worked with the WSO2 IoT team implementing Smart Building concepts at the WSO2 office.",
  },
];

const SKILLS = [
  "C",
  "Product Management",
  "Team Leadership",
  "Software Architecture",
  "Enterprise Integration",
  "API Management",
  "VS Code Extensions",
  "WSO2 Micro Integrator",
  "WSO2 API Manager",
  "Release Management",
  "Customer Engineering",
  "IoT",
];

const PUBLICATIONS = [
  "Real-time Video Enhancement Using Graphical Processing Units",
  "Visual Design Platform for Wireless Sensor Network",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#080808] text-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            RS
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:rosen@live.com"
            className="hidden md:inline-flex text-sm text-indigo-400 border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 px-4 py-2 rounded-full transition-colors duration-200"
          >
            Get in touch
          </a>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#080808] px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:rosen@live.com"
              className="block text-sm text-indigo-400"
            >
              rosen@live.com
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(168,85,247,0.06),transparent)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-8 border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 rounded-full">
            Technical Lead · WSO2
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white via-gray-100 to-gray-500 bg-clip-text text-transparent">
              Rosen Silva
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building enterprise-grade integration software at{" "}
            <span className="text-gray-300">WSO2</span>, trusted by 350+
            enterprises worldwide — including Fortune 500 companies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:rosen@live.com"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200"
            >
              Say hello
            </a>
            <a
              href="https://www.linkedin.com/in/rosensilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3 rounded-full transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-700 animate-bounce">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Label>About</Label>
          <div className="grid md:grid-cols-5 gap-12 mt-8">
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-3xl font-bold text-white">
                A builder at heart
              </h2>
              <p className="text-gray-400 leading-relaxed">
                A technical leader with 7+ years of expertise building and
                leading large-scale enterprise software. I lead the WSO2 Micro
                Integrator ($20M+ ARR), an integration solution powering 350+
                enterprise customers worldwide, including Fortune 500 companies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Previously, I led key product areas in WSO2 API Manager and
                Enterprise Integrator, drove customer-centric feature
                development, and resolved critical technical challenges.
                Passionate about software architecture, enterprise integration,
                and API management.
              </p>
            </div>
            <div className="md:col-span-2 space-y-0 divide-y divide-white/5">
              <InfoRow label="Location" value="Sri Lanka" />
              <InfoRow label="Languages" value="English, Sinhala" />
              <InfoRow label="Email" value="rosen@live.com" />
              <InfoRow label="LinkedIn" value="/in/rosensilva" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Label>Experience</Label>
          <h2 className="text-3xl font-bold text-white mt-2 mb-16">
            8+ years at WSO2
          </h2>

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[180px_1fr] gap-4 md:gap-8"
              >
                <p className="text-xs font-mono text-gray-600 md:text-right md:pt-1 shrink-0">
                  {exp.period}
                </p>
                <div className="relative pl-5 border-l border-white/10 group-hover:border-indigo-500/50 transition-colors duration-300">
                  <div className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-gray-700 group-hover:border-indigo-500 group-hover:bg-indigo-500/20 transition-colors duration-300" />
                  <p className="text-white font-semibold">{exp.role}</p>
                  <p className="text-xs text-indigo-400/60 mt-0.5 mb-3 font-mono">
                    WSO2
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Label>Skills</Label>
          <h2 className="text-3xl font-bold text-white mt-2 mb-8">
            What I work with
          </h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-sm text-gray-400 bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 px-4 py-2 rounded-full transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Label>Education</Label>
          <h2 className="text-3xl font-bold text-white mt-2 mb-8">
            Academic background
          </h2>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-200">
            <p className="text-xs font-mono text-gray-600 mb-3">2014 – 2017</p>
            <h3 className="text-white font-semibold text-lg">
              University of Peradeniya
            </h3>
            <p className="text-gray-400 mt-1">
              Bachelor of Science in Computer Engineering
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-14 mb-6">Awards</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[2018, 2019, 2020].map((year) => (
              <div
                key={year}
                className="bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 rounded-2xl p-5 transition-colors duration-200"
              >
                <div className="text-indigo-500 text-lg mb-3 font-bold">✦</div>
                <p className="text-white text-sm font-medium leading-snug">
                  Sustained Outstanding Contribution Award
                </p>
                <p className="text-xs text-gray-600 mt-2">WSO2 · {year}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-14 mb-6">
            Publications
          </h2>
          <div className="space-y-3">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub}
                className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl p-5 flex items-start gap-4 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-gray-600 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-sm text-gray-400">{pub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Label>Contact</Label>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10">
            Whether it&apos;s a project, a question, or just a hello — my inbox
            is always open.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:rosen@live.com"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-200"
            >
              rosen@live.com
            </a>
            <a
              href="https://www.linkedin.com/in/rosensilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-8 py-3 rounded-full transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-700 text-sm">
          <p>© 2026 Rosen Silva</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/rosensilva"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rosen@live.com"
              className="hover:text-gray-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-mono text-indigo-400 tracking-widest uppercase border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 py-3">
      <p className="text-xs text-gray-600 w-20 shrink-0 mt-0.5">{label}</p>
      <p className="text-sm text-gray-400">{value}</p>
    </div>
  );
}
