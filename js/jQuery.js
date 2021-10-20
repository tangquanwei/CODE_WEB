const { JSDOM } = require("jsdom");
const { windows } = new JSDOM("");
const $ = require("jquery")(windows);
console.log($);