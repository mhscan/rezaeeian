/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: "",
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
