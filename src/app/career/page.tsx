// src/app/career/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react";
import { Career } from "../interfaces";
import CommonHeroSection from "@/components/CommonHeroSection";
import JobDetailsModal from "@/components/career/JobDetailsModal";
import { getCareers } from "../../data/career";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [careers, setCareers] = useState<Career[]>([]);
  const { t, language } = useLanguage();

  useEffect(() => {
    const updatedCareers = getCareers(language as "th" | "en");
    setCareers(updatedCareers);
    if (selectedJob) {
      const updatedSelectedJob = updatedCareers.find((c) => c.id === selectedJob.id);
      if (updatedSelectedJob) setSelectedJob(updatedSelectedJob);
    }
  }, [language, selectedJob?.id]);

  const filteredJobs = careers.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <CommonHeroSection
        title={t("career_title")}
        subtitle={t("career_subtitle")}
        mascotImage="/mascot/White/GooseMascotWhite-5.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Culture Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-extrabold text-[#231F20]">{t("our_culture")}</h2>
            <p className="text-gray-500 leading-relaxed">{t("culture_desc")}</p>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{t(`culture_point${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Job Listings */}
        <section>
          <h2 className="text-3xl font-extrabold text-[#231F20] mb-8">{t("open_positions")}</h2>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t("search_positions")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent bg-white shadow-sm text-[#231F20] placeholder-gray-400"
            />
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-0.5"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#231F20] mb-1">{job.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#2563EB]" />{job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#4DB7AB]" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#F9C423]" />{job.type}</span>
                      <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-[#DE5050]" />{job.salary}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-[#2563EB] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors"
                      onClick={(e) => { e.stopPropagation(); setSelectedJob(job); }}
                    >
                      {t("view_details")}
                    </button>
                    {job.applicationUrl && (
                      <a
                        href={job.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F9C423] text-[#231F20] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("apply_now")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <JobDetailsModal selectedJob={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
