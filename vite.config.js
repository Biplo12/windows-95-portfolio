import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/deploying-vite/windows-95-portfolio/",
  plugins: [react()],
});
