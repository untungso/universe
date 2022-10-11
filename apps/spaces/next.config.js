const withTM = require("next-transpile-modules")(["@instead/facades"]);

module.exports = withTM({
  reactStrictMode: true,
});
