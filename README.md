# Modern typescript monorepo
This is my take on a typescript monorepo that uses all of the best patterns I've used.

## Used technologies:

Node v20, Typescript, Jest, TestContainers, Github Actions, Postgres, Knex, Pulumi, Plop, Husky, Nock, Docker, Eslint, Prettier, and [Github Actions testing library I forgot the name of].

## Setup

1. From the project root run `pnpm prepare`. You need to run it from the root so that husky gets set up properly

## Linting
This repo uses husky with @commitlint/cli so all your commit messages must follow the [conventional commit format](https://www.conventionalcommits.org/).

Since this a monorepo, every commit must contain the modified workspace name. It forces you to create one commit for one workspace so that your work becomes more trackable.

## Code generation
I very much favour code generation as it saves time and helps onboard people much faster. This is very different from, for example, cookiecutter or yeoman where you're able generate entire projects. Plop focuses on generating very specific parts of the codebase.

## Testing

You'll notice there are two test scripts: `test` and `test:e2e`. The reason for the distinction is performance. Before every push husky will run the `test` script. The E2E script is reserved for the CI pipeline.

Initially you'll be able to run all tests locally without issues, but once your test suite contains hundreds of tests, including a lot of E2E ones, you might want to offload running these tests to the CI pipeline.

### TestContainers
I've tried going down the road of mocking my way through tests but you can only do that much. I'm talking about mocking databases. That becomes incredibly challenging when you have business logic in the database owned by a different team, because you're either always playing catchup or you're introducing bugs without you knowing. If you use TestContainers you can easily launch a fully functional copy of the database with all migrations and seeds applied and run your tests. Then it's a matter of pulling in the latest version of the database and running your tests against it.

