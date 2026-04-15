import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default {
  server: {
    proxy: {
      "/api": {
        target: "https://syangkan.petik.or.id",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
