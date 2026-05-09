// src/data/achievements.ts

import { Achievement } from "../app/interfaces";

interface BilingualText {
  th: string;
  en: string;
}

interface BilingualAchievement {
  id: number;
  title: BilingualText;
  description: BilingualText;
  longDescription: BilingualText;
  date: string;
  icon: string;
  category: BilingualText;
  organizer: BilingualText;
  coverImage: string;
  images: string[];
}

const achievementsData: BilingualAchievement[] = [
  {
    id: 1,
    title: {
      th: "BIT Social Scale Up 2024",
      en: "BIT Social Scale Up 2024",
    },
    description: {
      th: "ได้รับคัดเลือกให้เข้าร่วมการฝึกอบรมด้านธุรกิจ การบริหารโครงการ และทักษะทางสังคมใน BIT Social Scale Up 2024: โครงการบ่มเพาะโดย Edvisory และ NIA",
      en: "Selected for business, project management, and soft skills training in BIT Social Scale Up 2024: Incubation Program by Edvisory and NIA",
    },
    longDescription: {
      th: "ได้รับคัดเลือกให้เข้าร่วมโครงการ BIT Social Scale Up ที่มีชื่อเสียง ซึ่งให้การฝึกอบรมอย่างครอบคลุมในด้านการพัฒนาธุรกิจ ระเบียบวิธีการบริหารโครงการ และทักษะทางสังคมที่จำเป็น โครงการนี้มีจุดมุ่งหมายเพื่อเสริมสร้างความรู้และความสามารถให้ผู้เข้าร่วมสามารถแก้ไขปัญหาในโลกแห่งความจริงและขับเคลื่อนโซลูชันที่สร้างผลกระทบในสาขาต่างๆ ได้อย่างมีประสิทธิภาพ",
      en: "Selected as a participant in the prestigious BIT Social Scale Up program, which provided extensive training in business development, project management methodologies, and essential soft skills. This program aimed to equip participants with the knowledge and capabilities to effectively address real-world challenges and drive impactful solutions within their respective fields.",
    },
    date: "2024",
    icon: "🚀",
    category: {
      th: "โครงการบ่มเพาะ",
      en: "Incubation",
    },
    organizer: {
      th: "Edvisory และ NIA",
      en: "Edvisory and NIA",
    },
    coverImage: "/achievements/achievement01/achievement01.jpg",
    images: [
      "/achievements/achievement01/achievement01_01.png",
      "/achievements/achievement01/achievement01_02.png",
    ],
  },
  {
    id: 2,
    title: {
      th: "HealthTech X 2 The Future",
      en: "HealthTech X 2 The Future",
    },
    description: {
      th: "รางวัลรองชนะเลิศอันดับ 1 และทุนสนับสนุนการพัฒนาจาก HealthTech X 2 The Future โดย ThaiHealth",
      en: "1st Runner-up (2nd Place) and recipient of development funding from HealthTech X 2 The Future by ThaiHealth",
    },
    longDescription: {
      th: "GOOSEWAY ได้รับคัดเลือกเป็นหนึ่งใน 22 ทีมสุดท้ายจากทั้งหมด 234 ทีม และสามารถคว้ารางวัลรองชนะเลิศอันดับ 1 (2nd Place) ในการแข่งขัน HealthTech X 2 The Future ซึ่งเป็นเวทีที่สนับสนุนโซลูชันด้านเทคโนโลยีเพื่อสุขภาพที่มีศักยภาพสูง พร้อมรับทุนสนับสนุนการพัฒนาจำนวน 500,000 บาท เพื่อยกระดับโครงการให้สามารถสร้างผลกระทบในวงกว้าง การได้รับการยอมรับในครั้งนี้สะท้อนถึงความมุ่งมั่น ความคิดสร้างสรรค์ และความสามารถของทีมในการพัฒนาแพลตฟอร์มที่ตอบโจทย์ความท้าทายด้านการเข้าถึงและความเท่าเทียมในการเดินทางของผู้ใช้วีลแชร์ ทุนที่ได้รับช่วยเสริมศักยภาพให้เราสามารถต่อยอดฟีเจอร์สำคัญ ปรับปรุงประสบการณ์การใช้งาน และเดินหน้าสร้างสรรค์สังคมที่ครอบคลุมและเข้าถึงได้สำหรับทุกคน",
      en: "GOOSEWAY was selected as one of the top 22 finalist teams out of 234 entries and successfully achieved 1st Runner-up (2nd Place) in HealthTech X 2 The Future, a prestigious platform supporting high-potential health technology solutions. The project was awarded 500,000 THB in development funding to further enhance its impact and scalability. This recognition reflects our team’s commitment, creativity, and capability in addressing critical challenges related to accessibility and equity in transportation for wheelchair users. The funding has empowered us to expand key features, improve user experience, and continue building a more inclusive and accessible society for everyone.",
    },
    date: "2025",
    icon: "💵",
    category: {
      th: "การได้รับทุน",
      en: "Funding",
    },
    organizer: {
      th: "ThaiHealth",
      en: "ThaiHealth",
    },
    coverImage: "/achievements/achievement02/achievement02.jpg",
    images: [
      "/achievements/achievement02/achievement02_01.jpg",
      "/achievements/achievement02/achievement02_02.jpg",
      "/achievements/achievement02/achievement02_03.jpg",
    ],
  },
  {
    id: 3,
    title: {
      th: "ผ่านการคัดเลือก 10 ทีมสุดท้าย เข้าสู่รอบ Pre-Pitching 1/2569 โครงการ SYNHUB TED Fellow ในฐานะตัวแทนศูนย์",
      en: "Selected as a Top 10 Finalist for Pre-Pitching Round 1/2026, SYNHUB TED Fellow (Center Representative)",
    },
    description: {
      th: "ตัวแทนศูนย์ผู้ผ่านเข้ารอบ 10 ทีมสุดท้าย ในการนำเสนอแผนธุรกิจโครงการ SYNHUB TED Fellow",
      en: "Representing the center as one of the top 10 finalists in the SYNHUB TED Fellow business pitching.",
    },
    longDescription: {
      th: "เราได้รับคัดเลือกให้เป็น 1 ใน 10 ทีมสุดท้ายในฐานะตัวแทนศูนย์ เพื่อเข้าสู่รอบ Pre-Pitching ของโครงการ SYNHUB TED Fellow รอบที่ 1/2569 ซึ่งเป็นโครงการบ่มเพาะและพัฒนาผู้ประกอบการเทคโนโลยีและนวัตกรรม ภายใต้การสนับสนุนจาก TED Fund โดยเราได้เข้าร่วมกิจกรรมเตรียมความพร้อม การให้คำปรึกษาจากผู้เชี่ยวชาญ (Mentoring) และการขัดเกลาแผนธุรกิจเพื่อเตรียมนำเสนอต่อคณะกรรมการในระดับประเทศ ถือเป็นก้าวสำคัญในการขับเคลื่อนนวัตกรรมของเราสู่เชิงพาณิชย์",
      en: "We have been selected as one of the top 10 finalists representing the center to enter the Pre-Pitching round of the SYNHUB TED Fellow Program (Batch 1/2026). This program, supported by the TED Fund, focuses on nurturing technology and innovation-driven entrepreneurs. We participated in intensive preparation sessions, received professional mentoring, and refined our business model to meet national standards, marking a significant milestone in transitioning our innovation into a viable commercial reality.",
    },
    date: "2026",
    icon: "🚀",
    category: {
      th: "โครงการบ่มเพาะ",
      en: "Incubation",
    },
    organizer: {
      th: "SynHub TED Fellow ร่วมกับ TED Fund",
      en: "SynHub TED Fellow in collaboration with TED Fund",
    },
    coverImage: "/achievements/achievement03/achievement03.jpg",
    images: ["/achievements/achievement03/achievement03_01.jpg"],
  },
  {
    id: 4,
    title: {
      th: "Hack for Rights: พลังเยาวชน สร้างสรรค์นวัตกรรมสิทธิมนุษยชน",
      en: "Hack for Rights: Youth Power for Human Rights Innovation",
    },
    description: {
      th: "ได้รับคัดเลือกเป็น 1 ใน 70 ทีมเข้าร่วมโครงการ Hack for Rights โดยสำนักงานคณะกรรมการสิทธิมนุษยชนแห่งชาติ (กสม.)",
      en: "Selected as one of the top 70 teams in the Hack for Rights program by the National Human Rights Commission of Thailand (NHRC)",
    },
    longDescription: {
      th: "เราภูมิใจที่ได้รับการคัดเลือกให้เป็นหนึ่งใน 70 ทีมจากทั่วประเทศเข้าร่วมโครงการ Hack for Rights ซึ่งจัดโดยสำนักงานคณะกรรมการสิทธิมนุษยชนแห่งชาติ (กสม.) โครงการนี้มุ่งเน้นการปลุกพลังเยาวชนคนรุ่นใหม่ในการสร้างสรรค์นวัตกรรมเพื่อส่งเสริมสิทธิมนุษยชนและการไม่เลือกปฏิบัติ ภายใต้หัวข้อ 'เมืองที่ไม่เลือกปฏิบัต่อผู้สูงอายุ' (Age-Friendly and Non-Discriminatory City) โดยเราได้ร่วมระดมไอเดียเพื่อสร้างสังคมที่โอบรับความหลากหลายและสร้างความเท่าเทียมให้กับทุกคน",
      en: "We are honored to be selected as one of the top 70 teams nationwide for the Hack for Rights project, organized by the National Human Rights Commission of Thailand (NHRC). This initiative empowers the younger generation to create innovations that promote human rights and combat discrimination. Under the theme 'Age-Friendly and Non-Discriminatory City,' we worked on brainstorming and developing solutions to foster an inclusive society that embraces diversity and ensures equality for all.",
    },
    date: "2026",
    icon: "⚖️",
    category: {
      th: "การแข่งขัน",
      en: "Competition",
    },
    organizer: {
      th: "สำนักงานคณะกรรมการสิทธิมนุษยชนแห่งชาติ (กสม.)",
      en: "National Human Rights Commission of Thailand (NHRC)",
    },
    coverImage: "/achievements/achievement04/achievement04.jpg",
    images: [
      "/achievements/achievement04/achievement04_01.jpg",
      "/achievements/achievement04/achievement04_02.jpg",
    ],
  },
];

// Function สำหรับแปลงข้อมูลตามภาษาที่เลือก
export const getAchievements = (language: "th" | "en"): Achievement[] => {
  return achievementsData
    .map((achievement) => ({
      id: achievement.id,
      title: achievement.title[language],
      description: achievement.description[language],
      longDescription: achievement.longDescription[language],
      date: achievement.date,
      icon: achievement.icon,
      category: achievement.category[language],
      organizer: achievement.organizer[language],
      coverImage: achievement.coverImage,
      images: achievement.images,
    }))
    .reverse();
};

// Function สำหรับดึงหมวดหมู่ที่ไม่ซ้ำกันในภาษาที่เลือก
export const getCategories = (language: "th" | "en"): string[] => {
  const categories = achievementsData.map(
    (achievement) => achievement.category[language],
  );
  return [...new Set(categories)];
};

// สำหรับ backward compatibility - ถ้ามีการใช้งานแบบเก่า
export const achievements = getAchievements("en");
