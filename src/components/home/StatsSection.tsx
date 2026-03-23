"use client";
// src/components/home/StatsSection.tsx
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [totalLocations, setTotalLocations] = useState<number | null>(null);
  const [satisfactionPercent, setSatisfactionPercent] = useState<number | null>(
    null,
  );
  const [totalDistanceKm, setTotalDistanceKm] = useState<number | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://api.gooseway.co/dashboard/public-stats",
        );
        const data = await res.json();
        setTotalUsers(data.totalUsers);
        setTotalLocations(data.totalLocations);
        setSatisfactionPercent(data.satisfactionPercent);
        setTotalDistanceKm(Math.round(data.totalDistanceMeters / 1000));
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    {
      value: "80.7%",
      label: t("stats_satisfaction"),
    },
    {
      value: totalLocations !== null ? `${totalLocations}` : "—",
      label: t("stats_accessible_places"),
    },
    {
      value: totalUsers !== null ? `${totalUsers}` : "—",
      label: t("stats_users"),
    },
    {
      value:
        totalDistanceKm !== null
          ? `${totalDistanceKm.toLocaleString()} km`
          : "—",
      label: t("stats_total_distance"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl overflow-hidden my-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
