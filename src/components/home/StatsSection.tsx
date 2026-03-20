"use client";
// src/components/home/StatsSection.tsx
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; // ใส่ใน .env ของ repo อีกอัน

export default function StatsSection() {
  const { t } = useLanguage();
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [totalLocations, setTotalLocations] = useState<number | null>(null);
  const [satisfactionPercent, setSatisfactionPercent] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/dashboard`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ day: "All" }),
        });
        const data = await res.json();

        setTotalUsers(data.user.totalUsers);
        setTotalLocations(data.location.totalLocation);

        const levelStats = data.locationCategoryAccessLevel;
        const totalCount = levelStats.reduce(
          (sum: number, item: any) => sum + Number(item.count),
          0,
        );
        const easyCount = levelStats
          .filter((item: any) => item.accessLevelId === 1)
          .reduce((sum: number, item: any) => sum + Number(item.count), 0);

        if (totalCount > 0) {
          setSatisfactionPercent(
            Math.round((easyCount / totalCount) * 1000) / 10,
          );
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      value: satisfactionPercent !== null ? `${satisfactionPercent}%` : "—",
      label: t("stats_satisfaction"),
    },
    {
      value: totalLocations !== null ? `${totalLocations}+` : "—",
      label: t("stats_accessible_places"),
    },
    {
      value: totalUsers !== null ? `${totalUsers}+` : "—",
      label: t("stats_users"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl overflow-hidden my-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
