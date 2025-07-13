module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'  // 注意這裡的格式：plugin: 前綴
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint'
    ],
    ignorePatterns: [
        'dist/**/*',
        'node_modules/**/*',
        '*.config.js',
        '*.config.ts'
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': false
        }]
    }
};
