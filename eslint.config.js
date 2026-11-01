import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  { ignores: ["dist/**", "node_modules/**"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
      } 
    } 
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    },
  },
]);
