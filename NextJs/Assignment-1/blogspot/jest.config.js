const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

// const customJestConfig = {
//   moduleDirectories: ["node_modules", "blogspot/"],
//   testEnvironment: "jest-environment-jsdom",
// };

// // export createJestConfig(customJestConfig);
// createJestConfig(customJestConfig);

// module.exports = {
//   moduleNameMapper: {
//     "^next-auth/react": "blogspot/node_modules/next-auth/react",
//   },
// };
