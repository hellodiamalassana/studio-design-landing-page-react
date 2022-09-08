import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://Innovage-Labs.github.io/",
  build: {
    outDir: "./build",
  },
  plugins: [react()],
});
