import type { Config } from "tailwindcss";

export default {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // สแกนทุกไฟล์ใน src
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
