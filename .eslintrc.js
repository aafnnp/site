module.exports = {
  root:true,
  extends: [
    'next/core-web-vitals'
  ],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "@next/next/no-img-element":"off"
  }
}
