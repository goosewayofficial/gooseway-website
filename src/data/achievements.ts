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
      th: "BIT Social Scale Up 2024: โครงการบ่มเพาะธุรกิจและนวัตกรรมสังคม",
      en: "BIT Social Scale Up 2024: Business and Social Innovation Incubation",
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
      th: "HealthTech X 2 The Future: รางวัลรองชนะเลิศอันดับ 1 และทุนสนับสนุน",
      en: "HealthTech X 2 The Future: 1st Runner-up and Development Funding",
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
      th: "TED Youth Startup 2026: ผ่านการคัดเลือกรอบ IDEA และได้รับทุนสนับสนุน",
      en: "TED Youth Startup 2026: IDEA Track Selection and Funding",
    },
    description: {
      th: "ได้รับการคัดเลือกผ่านรอบ IDEA โครงการ TED Youth Startup 2026 พร้อมทุนสนับสนุนการพัฒนาเบื้องต้นจำนวน 150,000 บาท",
      en: "Selected for the TED Youth Startup 2026 IDEA track and awarded 150,000 THB in initial development funding.",
    },
    longDescription: {
      th: "เราภูมิใจที่ผ่านการคัดเลือกในรอบ IDEA ของโครงการ TED Youth Startup 2026 ซึ่งเป็นโครงการสนับสนุนและพัฒนาผู้ประกอบการรุ่นใหม่ที่ใช้นวัตกรรมในการขับเคลื่อนธุรกิจ โดยเราได้รับทุนสนับสนุนจำนวน 150,000 บาท เพื่อนำมาใช้ในการพัฒนาผลิตภัณฑ์ต้นแบบ (Prototype) และพิสูจน์แนวคิดเชิงธุรกิจ ถือเป็นก้าวสำคัญที่ช่วยเตรียมความพร้อมให้เราก้าวสู่รอบการระดมทุนที่ใหญ่ขึ้นในอนาคต",
      en: "We are proud to have passed the IDEA track of the TED Youth Startup 2026 program, which supports and develops new entrepreneurs using innovation to drive business. We have been awarded 150,000 THB in funding to develop our prototype and prove our business concept. This is a significant milestone that helps prepare us for larger funding tracks in the future.",
    },
    date: "2026",
    icon: "💵",
    category: {
      th: "การได้รับทุน",
      en: "Funding",
    },
    organizer: {
      th: "TED Youth Startup (กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม)",
      en: "TED Youth Startup (Ministry of Higher Education, Science, Research and Innovation)",
    },
    coverImage: "/achievements/achievement03/achievement03.jpg",
    images: ["/achievements/achievement03/achievement03_01.jpg"],
  },
  {
    id: 4,
    title: {
      th: "Hack for Rights 2026: พลังเยาวชน สร้างสรรค์นวัตกรรมสิทธิมนุษยชน",
      en: "Hack for Rights 2026: Youth Power for Human Rights Innovation",
    },
    description: {
      th: "ได้รับคัดเลือกเป็น 1 ใน 62 ทีม จากทั้งหมด 537 ทีม เข้าร่วมโครงการ Hack for Rights โดยสำนักงานคณะกรรมการสิทธิมนุษยชนแห่งชาติ (กสม.)",
      en: "Selected as one of the top 62 teams from a total of 537 teams in the Hack for Rights program by the National Human Rights Commission of Thailand (NHRC)",
    },
    longDescription: {
      th: "เราภูมิใจที่ได้รับการคัดเลือกให้เป็นหนึ่งใน 62 ทีม จากผู้สมัครทั้งหมด 537 ทีมทั่วประเทศเข้าร่วมโครงการ Hack for Rights ซึ่งจัดโดยสำนักงานคณะกรรมการสิทธิมนุษยชนแห่งชาติ (กสม.) โครงการนี้มุ่งเน้นการปลุกพลังเยาวชนคนรุ่นใหม่ในการสร้างสรรค์นวัตกรรมเพื่อส่งเสริมสิทธิมนุษยชนและการไม่เลือกปฏิบัติ ภายใต้หัวข้อ 'เมืองที่ไม่เลือกปฏิบัต่อผู้สูงอายุ' (Age-Friendly and Non-Discriminatory City) โดยเราได้ร่วมระดมไอเดียเพื่อสร้างสังคมที่โอบรับความหลากหลายและสร้างความเท่าเทียมให้กับทุกคน",
      en: "We are honored to be selected as one of the top 62 teams from a total of 537 applicants nationwide for the Hack for Rights project, organized by the National Human Rights Commission of Thailand (NHRC). This initiative empowers the younger generation to create innovations that promote human rights and combat discrimination. Under the theme 'Age-Friendly and Non-Discriminatory City,' we worked on brainstorming and developing solutions to foster an inclusive society that embraces diversity and ensures equality for all.",
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
  {
    id: 5,
    title: {
      th: "S-Impact 2026: โครงการบ่มเพาะวิสาหกิจเพื่อสังคม",
      en: "S-Impact 2026: Social Enterprise Incubation Program",
    },
    description: {
      th: "ได้รับคัดเลือกเป็น 1 ใน 62 ทีม จากผู้สมัครมากกว่า 100 ทีม เข้าร่วมโครงการ S-Impact 2026 เพื่อพัฒนาศักยภาพและขยายผลกระทบทางสังคม",
      en: "Selected as one of the top 62 teams from more than 100 applicants in the S-Impact 2026 program to enhance capacity and scale social impact.",
    },
    longDescription: {
      th: "GOOSEWAY ได้รับคัดเลือกให้เป็น 1 ใน 62 ทีมสุดท้าย จากผู้สมัครมากกว่า 100 ทีมทั่วประเทศ เพื่อเข้าร่วมโครงการ S-Impact 2026 ซึ่งเป็นโครงการบ่มเพาะวิสาหกิจเพื่อสังคมระดับเข้มข้น โดยเราได้รับการสนับสนุนด้านองค์ความรู้ การให้คำปรึกษาจากผู้เชี่ยวชาญ และการสร้างเครือข่ายกับพันธมิตรในภาคส่วนต่างๆ เพื่อมุ่งเน้นการแก้ปัญหาการเดินทางเข้าถึงของผู้ใช้วีลแชร์อย่างเป็นระบบและยั่งยืน ถือเป็นก้าวสำคัญในการเปลี่ยนผ่านจากโครงการนวัตกรรมสู่การเป็นวิสาหกิจเพื่อสังคมที่แข็งแกร่ง",
      en: "GOOSEWAY has been selected as one of the top 62 teams from more than 100 applicants nationwide for the S-Impact 2026 program, an intensive incubation initiative for social enterprises. Through this program, we receive specialized knowledge, expert mentoring, and networking opportunities with various partners. Our focus is on systematically and sustainably addressing accessibility challenges for wheelchair users. This participation marks a significant milestone in our transition from an innovation project to a robust social enterprise.",
    },
    date: "2026",
    icon: "🌱",
    category: {
      th: "โครงการบ่มเพาะ",
      en: "Incubation",
    },
    organizer: {
      th: "S-Impact",
      en: "S-Impact",
    },
    coverImage: "/achievements/achievement05/achievement05.jpg",
    images: ["/achievements/achievement05/achievement05_01.jpg"],
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
