/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

// Finds all packages, actions, and services in the monorepo and sets up a Jest project for each one.
const PACKAGES_DIR = path.resolve(__dirname, "packages");
const SERVICES_DIR = path.resolve(__dirname, "services");

const PACKAGES = fs.readdirSync(PACKAGES_DIR).map((dir) => `packages/${dir}`);
const ACTIONS = fs.readdirSync(SERVICES_DIR).map((dir) => `services/${dir}`);

const PROJECTS = [...PACKAGES, ...ACTIONS];

module.exports = {
  verbose: true,
  projects: PROJECTS.filter((project) =>
    fs.existsSync(path.resolve(project, "jest.config.js")),
  ).map((project) => ({
    displayName: project,
    ...require(`./${project}/jest.config.js`),
    rootDir: `./${project}`,
  })),
};
