export default {
    // 設定為根目錄，ESLint 不會往上層目錄尋找設定檔
    root: true,
    // 執行環境設定
    env: {
        node: true,      // Node.js 環境
        browser: true,   // 瀏覽器環境
        es2021: true     // ES2021 語法支援
    },
    // 繼承的規則集合
    extends: [
        'eslint:recommended',                // ESLint 推薦規則
        '@typescript-eslint/recommended'    // TypeScript 推薦規則
    ],
    // 解析器選項
    parserOptions: {
        ecmaVersion: 'latest',              // 支援最新的 ECMAScript 版本
        parser: '@typescript-eslint/parser', // TypeScript 解析器
        sourceType: 'module'                // 使用 ES 模組語法
    },
    // 使用的插件
    plugins: [
        '@typescript-eslint' // TypeScript 插件
    ],
    // 自訂規則
    rules: {
        'no-console': 'warn',                        // console 語句警告
        'no-debugger': 'warn',                       // debugger 語句警告
        '@typescript-eslint/no-unused-vars': 'error', // 未使用變數錯誤
        '@typescript-eslint/explicit-function-return-type': 'warn', // 建議明確函數返回類型
        '@typescript-eslint/no-explicit-any': 'warn' // 避免使用 any 類型
    }
}
