// .prettierrc.cjs
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  // ... other Prettier options ...

  // Override for .astro files
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "html", // or "astro" if that's the correct parser
      },
    },
  ],
};
