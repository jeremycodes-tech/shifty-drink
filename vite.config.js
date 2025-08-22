import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/shifty-drink/",   // ✅ must match the GitHub repo name exactly (case-sensitive!)
  server: { host: "0.0.0.0", port: 5173 },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]", // ✅ keeps your /public structure
      },
    },
  },
});
