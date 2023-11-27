module.exports = {
  rootDir: "./",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.test.ts"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverage: false,
  collectCoverageFrom: ["__tests__/**/*.ts"],
  passWithNoTests: false,
};
