# Kelly Cypret

Kelly Cypret's real estate website — built with [Eleventy](https://www.11ty.dev/) and deployed to Netlify.

## Getting started

This project uses Node.js managed by [asdf](https://asdf-vm.com/). Install the correct version and dependencies:

```sh
asdf install
yarn install
```

## Development

Start the local dev server (available at `http://localhost:8080/`):

```sh
yarn dev
```

## Build

Build for production (output goes to `_site/`):

```sh
yarn build
```

Netlify runs `yarn build` automatically on deploy.

---

## Legacy: Middleman

The original site used Middleman (Ruby). Those files still exist (`Gemfile`, `Rakefile`, `source/`, `build/`) but are no longer used. The Eleventy implementation in `src-11ty/` is the active codebase.
