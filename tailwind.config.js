/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // 启用 class-based 的暗模式支持
  theme: {
    extend: {
      colors: {
        // 默认模式颜色（light 模式）
        bg: {
          DEFAULT: "#ffffff", // 默认背景色 --bg: white;
          light: "#ffffff", // 亮模式背景色
          dark: "#0f172a", // 暗模式背景色
        },
        textColor: {
          DEFAULT: "#000000", // 默认文本色 --textColor: black;
          light: "#000000", // 亮模式文本色
          dark: "#dddddd", // 暗模式文本色
        },
        softBg: {
          DEFAULT: "#f0f0f0", // 默认软背景色 --softBg: #f0f0f0;
          light: "#f0f0f0", // 亮模式软背景色
          dark: "#1f273a", // 暗模式软背景色
        },
        softTextColor: {
          DEFAULT: "#626262", // 默认软文本色 --softTextColor: #626262;
          light: "#626262", // 亮模式软文本色
          dark: "#a6a6a6", // 暗模式软文本色
        },
      },
    },
  },
  plugins: [],
};
