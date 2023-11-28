module.exports = {
  rootDir: "./",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.test.ts"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverage: false,
  collectCoverageFrom: ["__tests__/**/*.ts"],
  passWithNoTests: false,
  projects: [
    {
      displayName: "packages",
      testEnvironment: "node",
      preset: "ts-jest",
      testMatch: ["<rootDir>/packages/**/__tests__/**/*.test.ts"],
    },
    {
      displayName: "actions",
      testEnvironment: "node",
      preset: "ts-jest",
      testMatch: ["<rootDir>/actions/**/__tests__/**/*.test.ts"],
    },
    {
      displayName: "services",
      testEnvironment: "node",
      preset: "ts-jest",
      testMatch: ["<rootDir>/services/**/__tests__/**/*.test.ts"],
    },
  ],
};
