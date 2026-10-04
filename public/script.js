function greet(name) {
  return `Hello, ${name}!`;
}

const heading =
  typeof document !== "undefined" && document.getElementById("greeting");
if (heading) {
  heading.textContent = greet("World");
}

if (typeof module !== "undefined") {
  module.exports = { greet };
}
