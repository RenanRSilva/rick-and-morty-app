const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
    "^/main/(.*)": "<rootDir>/main/$1",
    "~/hooks/(.*)": "<rootDir>/src/hooks/$1",
    "~/components/(.*)": "<rootDir>/src/components/$1",
    "~/__tests__/(.*)": "<rootDir>/src/__tests__/$1",
    "~/ui/(.*)": "<rootDir>/src/ui/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
