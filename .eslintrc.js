module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Puedes agregar reglas personalizadas aquí
    "no-unused-vars": "warn",
    "indent": ["error", 2],
  },
};
