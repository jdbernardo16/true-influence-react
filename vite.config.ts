import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Copy PHP files to dist during build
        copyPublicDir: true,
    },
    server: {
        // Proxy PHP requests to a PHP server during development
        proxy: {
            "/send-email.php": {
                target: "http://localhost:8000",
                changeOrigin: true,
            },
        },
    },
});
