module.exports = {
  extends: '@mate-academy/eslint-config-react',
  rules: {
    "object-curly-newline": ["error", {
        "ObjectExpression":  { "multiline": true, "minProperties": 3 }
    }]
  }
};
