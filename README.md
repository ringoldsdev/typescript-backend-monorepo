# Modern typescript monorepo
This is my take on a typescript monorepo that uses all of the best patterns I've used.

## Used technologies:

Node v20, Typescript, Jest, TestContainers, Github Actions, Postgres, Knex, Pulumi, Plop, Husky, Nock, Docker, Eslint, Prettier, and [Github Actions testing library I forgot the name of].

## Setup

0. Install `nvm` ([see here](https://github.com/nvm-sh/nvm#installing-and-updating))
1. From the project root run `pnpm prepare`. You need to run it from the root so that husky gets set up properly
2. Run `nvm use`

## Structure
This monorepo tries to separate concerns so there are 4 core folders:
1. `infrastructure`
2. `packages`
3. `actions`
4. `services`

**Infrastructure** contains Pulumi setup. Currently it contains an example Hetzner setup.
**packages** are what the name says - small packages that get used in this project. Each package should do only one thing and it shouldn't rely on other packages.
**actions** are packages that combine and call other packages. This is where the business logic resides. This is also the place where you would cache your function calls, handle logging, sending metrics, etc. Actions should not rely on other actions.
**services** are packages that call actions and can be run as a HTTP server, a serverless function, or as a CLI script. This is where authorization and authentication should happen. Services should not rely on other services.

## Code generation
I very much favour code generation as it saves time and helps onboard people much faster. This is very different from, for example, cookiecutter or yeoman where you're able generate entire projects. Plop focuses on generating very specific parts of the codebase.

## Testing

You'll notice there are two test scripts: `test` and `test:e2e`. The reason for the distinction is performance. Before every push husky will run the `test` script. The E2E script is reserved for the CI pipeline.

Initially you'll be able to run all tests locally without issues, but once your test suite contains hundreds of tests, including a lot of E2E ones, you might want to offload running these tests to the CI pipeline.

### TestContainers
I've tried going down the road of mocking my way through tests but you can only do that much. I'm talking about mocking databases. That becomes incredibly challenging when you have business logic in the database owned by a different team, because you're either always playing catchup or you're introducing bugs without you knowing. If you use TestContainers you can easily launch a fully functional copy of the database with all migrations and seeds applied and run your tests. Then it's a matter of pulling in the latest version of the database and running your tests against it.

## Linting
This repo uses husky with @commitlint/cli so all your commit messages must follow the [conventional commit format](https://www.conventionalcommits.org/).

Since this a monorepo, every commit must contain the modified workspace name. It forces you to create one commit for one workspace so that your work becomes more trackable.

