import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node, // <- Node.js
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-expressions": ["error", { allowShortCircuit: true }],
      "no-irregular-whitespace": "off",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^NOTE" }],
    },
  },
  tseslint.configs.recommended,
]);

