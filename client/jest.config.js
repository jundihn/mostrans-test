module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
};
