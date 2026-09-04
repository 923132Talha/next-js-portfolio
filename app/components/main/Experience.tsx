"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Building } from "lucide-react";

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Full-Stack Developer Intern",
    organization: "Developers Hub Corporation",
    location: "Remote",
    period: "Dec 2025 – Jan 2026",
    roleType: "Internship",
    description: [
      "Engineered responsive React UI interfaces paired with Tailwind CSS for scalable performance.",
      "Constructed REST APIs with Express.js and integrated Multer middleware for media file processing.",
      "Managed Git version control workflows, feature branching, and resolved complex merge conflicts.",
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "Multer", "Git"],
  },
  {
    id: 2,
    type: "education",
    title: "BS in Computer Science",
    organization: "COMSATS University",
    location: "Pakistan",
    period: "2022 – 2026",
    roleType: "Bachelor's Degree",
    description: [
      "Core focus in Web Engineering, Software Architecture, Data Structures, and Database Systems.",
      "Built a capstone AI-integrated scholarship recommendation platform using Next.js & Node.js.",
    ],
    tags: ["Web Engineering", "Data Structures", "MySQL", "MongoDB", "Next.js", "AI Integration"],
  },
  {
    id: 3,
    type: "work",
    title: "Freelance Full-Stack Developer",
    organization: "Self-Employed",
    location: "Remote",
    period: "2025 – Present",
    roleType: "Contract / Freelance",
    description: [
      "Built production-ready MERN & Next.js applications, including e-commerce platforms and chat systems.",
      "Integrated Stripe payment gateways, admin dashboards, and JWT authentication pipelines.",
    ],
    tags: ["Next.js", "React", "MongoDB", "Redux", "Stripe API", "Vercel"],
  },
];

export default function ExperienceCards() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredData =
    activeTab === "all"
      ? experienceData
      : experienceData.filter((item) => item.type === activeTab);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="experience">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-blue-500">Education</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            My professional journey, technical roles, and academic foundation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 w-fit">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "work"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Briefcase size={14} /> Work
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "education"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <GraduationCap size={16} /> Education
          </button>
        </div>
      </div>

      {/* Grid Layout - Cards in Rows */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col justify-between bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Top Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === "work"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {item.type === "work" ? <Briefcase size={12} /> : <GraduationCap size={14} />}
                    {item.roleType}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} className="text-blue-400" />
                    {item.period}
                  </span>
                </div>

                {/* Job / Degree Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                {/* Organization & Location */}
                <div className="flex items-center justify-between text-xs text-gray-400 mt-1 mb-4 pb-3 border-b border-slate-800">
                  <span className="flex items-center gap-1 font-medium text-gray-300">
                    <Building size={12} className="text-blue-400" /> {item.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300 mb-6 list-disc list-inside marker:text-blue-500 leading-relaxed">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 text-gray-300 border border-slate-700/50 group-hover:border-blue-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}