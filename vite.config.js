import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import laravel from "laravel-vite-plugin";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/app.js",
                "resources/css/light.css",
                "resources/css/dark.css",
            ],
            publicDirectory: "public",
            buildDirectory: ".",
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm.js",
            "@": resolve(__dirname, "resources/js"),
        },
    },
    build: {
        manifest: true,
        outDir: "public",
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
});
