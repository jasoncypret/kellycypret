# Kelly Cypret
The Middleman Site for kellycypret.com

## Getting started

This site runs on asdf. Make sure you have that installed with ruby and run:

```sh
asdf install
```

Once run you can bundle like normal.

```sh
bundle install
```

## Middleman (Legacy)

### Build the site

```sh
bundle exec middleman server
```

### Test Build before Publishing to GitHub Pages

```sh
bundle exec rake build # Compile all files into the build directory
```

### Publish to GitHub Pages

Clear build folder before this step

```sh
bundle exec rake publish ALLOW_DIRTY=true # Build and publish to Github Pages
```

## Eleventy (New Implementation)

### Prerequisites

This project uses yarn managed by asdf. Ensure you have yarn installed:

```sh
asdf plugin add yarn
asdf install yarn latest
asdf local yarn <version>
```

### Getting started

Install dependencies:

```sh
yarn install
```

### Development

Start the Eleventy development server:

```sh
yarn dev
```

The site will be available at `http://localhost:8080/`

### Build

Build the site for production:

```sh
yarn build
```

The output will be in the `_site/` directory.
