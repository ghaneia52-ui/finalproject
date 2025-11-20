import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    // این خط باعث می‌شود همه‌ی مسیرها به index.html بازگردند
    fs: {
      strict: false,
    },
  },
  appType: "spa", // این مهم‌ترین خط برای History API است
});