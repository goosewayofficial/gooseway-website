import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // นำค่าสีจาก Color.jpg มาใส่ที่นี่ครับ
        brand: {
          50: "#f0f9ff", // สีพื้นหลังอ่อนๆ
          100: "#e0f2fe",
          500: "#0ea5e9", // Primary Color (สมมติเป็นสีฟ้า Gooseway)
          600: "#0284c7", // Hover state
          900: "#0c4a6e", // Text color
          accent: "#fbbf24", // Secondary Color (เช่น สีเหลือง/ส้ม เพื่อความสดใส)
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
