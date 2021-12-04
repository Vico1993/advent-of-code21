module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "babel"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "tsconfig.eslint.json",
    },
    ignorePatterns: ["**/build/*", "node_modules/*"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    overrides: [
        {
            files: ["tests/**/*.spec.ts"],
            rules: {
                // you should turn the original rule off *only* for test files
                "@typescript-eslint/unbound-method": "off",
            },
        },
    ],
    rules: {
        "babel/valid-typeof": 1,
        "babel/no-invalid-this": 1,
        quotes: [2, "double", { avoidEscape: true }],
    },
};
