import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import shadcn from "shadcn-react/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
