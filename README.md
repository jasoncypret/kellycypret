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

## Build the site

```sh
bundle exec middleman server
```

## Publish to GitHub Pages

```sh
bundle exec rake build # Compile all files into the build directory
bundle exec rake publish ALLOW_DIRTY=true # Build and publish to Github Pages
```
