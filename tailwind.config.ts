import type { Config } from "tailwindcss";

const config: Config = {
  // 1. QUAN TRỌNG: Nơi Tailwind sẽ quét các class để tạo CSS
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Quét tất cả file trong thư mục app (bao gồm cả Route Groups)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Quét tất cả file trong thư mục components
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // (Nếu bạn có dùng thư mục pages cũ)
  ],
  
  theme: {
    extend: {
      // 2. Nơi bạn có thể thêm các cấu hình riêng (màu sắc, font chữ...)
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Bạn có thể thêm màu chủ đạo cho Portfolio ở đây
        primary: "#2563eb", // Màu xanh blue-600
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  plugins: [],
};

export default config;