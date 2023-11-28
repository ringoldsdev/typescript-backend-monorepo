const PROJECTS = ["packages/test", "services/test"];

module.exports = {
  verbose: true,
  projects: PROJECTS.map((project) => ({
    displayName: project,
    ...require(`./${project}/jest.config.js`),
    rootDir: `./${project}`,
  })),
};
