const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../public/script.js");

test("greet returns the greeting text", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
