module.exports = {
  rootDir: "./..",
  roots: ["./e2e"],
  transform: { "^.+\\.js?$": "babel-jest" },
  testMatch: ["**/?(*.)+(spec|test).[jt]s"],
  testPathIgnorePatterns: ["/node_modules/", "dist"],
  testTimeout: 200000,
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:8080"
  }
};
