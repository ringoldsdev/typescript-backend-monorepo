module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  roots: ["./__tests__"],
  transform: {
    "^.+\\.[tj]s$": [
      "ts-jest",
      {
        tsconfig: {
          allowJs: true,
        },
      },
    ],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(@packages|@actions|@services)/)"],
  moduleNameMapper: {
    "^@src$": "<rootDir>/src",
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
};
