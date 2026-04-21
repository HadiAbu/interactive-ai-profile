import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        sand: "#f4efe6",
        ember: "#d97706",
        moss: "#40634b",
        slate: "#546173",
      },
      boxShadow: {
        panel: "0 18px 40px rgba(15, 23, 42, 0.12)",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
