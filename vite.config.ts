import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    // Vite 插件配置
    plugins: [
        // TypeScript 宣告檔案生成插件
        dts({
            include: 'src/**/*',
            tsconfigPath: './tsconfig.build.json', // 指定這份專門用來產生 dts 的 tsconfig
            exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
            outDir: 'dist',
            staticImport: true,
            rollupTypes: true
        }),
    ],
    // 建置配置
    build: {
        // 函式庫建置配置
        lib: {
            entry: resolve(__dirname, 'src/index.ts'), // 入口檔案
            name: 'chiYumVue3Composables',                 // 全域變數名稱（用於 UMD 格式）
            formats: ['es', 'cjs'],                    // 輸出格式：ES Module 和 CommonJS
            fileName: (format) => `index.${format}.js` // 輸出檔名
        },
        // Rollup 建置選項
        rollupOptions: {
            // 外部依賴，不會被打包進最終檔案
            external: ['vue'],
            // 輸出配置
            output: {
                // 全域變數對應（用於 UMD 格式）
                globals: {
                    vue: 'Vue'
                },
                // 保留原始檔案結構，方便 tree-shaking
                preserveModules: false
            }
        },
        // 縮小化設定
        minify: 'terser',
        // Source map 生成
        sourcemap: true
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)), // 設定 `@` 指向 `src` 資料夾
        }
    },
})
