/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "import",
        "jsx-a11y",
        "tailwindcss",
        "prettier"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:tailwindcss/recommended",
        "plugin:prettier/recommended"
    ],
    settings: {react: {version: "detect"}},
    env: {browser: true, es2022: true, node: true},
    rules: {
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off",      // React 18 JSX transform
        "@typescript-eslint/no-unused-vars": ["warn", {argsIgnorePattern: "^_"}]
    },
    ignorePatterns: ["dist", "build", "*.css.d.ts"]
};
