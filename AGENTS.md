# AGENTS.md

## Cursor Cloud specific instructions

### Repository state

This repository (`portiflio-website`) is currently empty — it contains only a `README.md` placeholder. There is no source code, no package manager configuration, no build system, and no application to run.

### Development environment

- **Node.js** is available via `nvm` if/when the project adds JavaScript/TypeScript code.
- **No dependencies** need to be installed at this time.
- **No services** need to be started.

### When code is added

Once source code and a package manager lockfile are committed, the update script (`SetupVmEnvironment`) should be updated to install dependencies (e.g., `npm install`, `pnpm install`, etc.) based on the lockfile present.
