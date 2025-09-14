import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "public/sw.js",
      "public/workbox-*.js",
      "public/fallback-*.js",
    ],
  },
  {
    rules: {
      // Allow console.log in PWA installer for debugging
      "no-console": "off",
      // Allow empty dependency arrays in useEffect when appropriate
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
