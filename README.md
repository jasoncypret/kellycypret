# Kelly Cypret
The Middleman Site for kellycypret.com

## Build the site

```sh
bundle exec middleman server
```

## Publish to GitHub Pages

```sh
bundle exec rake build # Compile all files into the build directory
bundle exec rake publish ALLOW_DIRTY=true # Build and publish to Github Pages
```
