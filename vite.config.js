// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api/openai": {
        target: "https://api.openai.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/openai/, "/v1"),
        secure: false,
      },
    },
  },
  base: "/",
  build: {
    chunkSizeWarningLimit: 1100, // 경고 기준을 1000KB로 조정
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "redux",
            "react-redux",
          ], // 주요 라이브러리들을 별도의 청크로 분리
        },
      },
    },
  },
});
