module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "max-line-length": [128, { ignore: ["non-comments"] }],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};
