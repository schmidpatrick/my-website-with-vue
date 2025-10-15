import eslintPluginVue from "eslint-plugin-vue";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.vue"],
    ignores: ["dist", "node_modules"],

    languageOptions: {
      parser: require("vue-eslint-parser"), // Vue parses first ...
      parserOptions: {
        parser: tsParser, // ... then TS for <script lang="ts">
        ecmaVersion: 2020,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },

    plugins: {
      vue: eslintPluginVue,
      "@typescript-eslint": tseslint,
    },

    rules: {
      ...eslintPluginVue.configs["vue3-recommended"].rules,
      ...tseslint.configs.recommended.rules,

      // 👇 Optional relaxations / tuning
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },

  prettierConfig,
];
