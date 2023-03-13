/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const value = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const movies = await response.json();
  return `
ENV=wanker
CORE_VALUE=${movies.data[0].name}
  `;
};

(async function () {
  fs.writeFile(".env", await value(), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
})();
