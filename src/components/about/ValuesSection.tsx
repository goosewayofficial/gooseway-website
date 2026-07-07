// src/components/about/ValuesSection.tsx
import { Users, Target, Heart, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ValuesSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Users,
      title: t("value_inclusivity"),
      description: t("value_inclusivity_desc"),
      colorClass: "bg-brand-blue/10 text-brand-blue",
      borderHover: "hover:border-brand-blue/30 hover:shadow-brand-blue/5",
    },
    {
      icon: Heart,
      title: t("value_community"),
      description: t("value_community_desc"),
      colorClass: "bg-brand-red/10 text-brand-red",
      borderHover: "hover:border-brand-red/30 hover:shadow-brand-red/5",
    },
    {
      icon: Target,
      title: t("value_accessibility"),
      description: t("value_accessibility_desc"),
      colorClass: "bg-brand-teal/10 text-brand-teal",
      borderHover: "hover:border-brand-teal/30 hover:shadow-brand-teal/5",
    },
    {
      icon: Zap,
      title: t("value_empowerment"),
      description: t("value_empowerment_desc"),
      colorClass: "bg-brand-yellow/15 text-[#D97706]",
      borderHover: "hover:border-brand-yellow/30 hover:shadow-brand-yellow/5",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-[#E7EFF3]/20 via-white to-[#E7EFF3]/20 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
      {/* Subtle decorative glows */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-extrabold text-[#231F20] tracking-tight">
          {t("our_values")}
        </h2>
        <div className="mt-3.5 w-10 h-1 bg-brand-blue rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className={`group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${value.borderHover}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${value.colorClass}`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#231F20] mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
