# Static Site

A bootstrap for building static sites hosted in GitHub Pages.

Builds and compiles then serves the following:

- Scss (by default from `src/styles`) into `dist/css`
- ES6 JS (by default from `src/scripts`) into `dist/js`
- Jade templates (by default from `src/views`) into `dist`
- Static assets (by default from `assets`) into `dist`
- Served on `0.0.0.0:8080` by default

Deploy to github pages with `npm run-script deploy`.

See [emarref.github.io/static-site](https://emarref.github.io/static-site/) for
the result of deploying this repository.

## Development

Clone this repository then delete the .git dir. Run `npm run-script watch` to
build and watch, then serve the contents of `dist`. Visit
[http://localhost:8080](http://localhost:8080).

## Todo

- Optimise images during asset build
- Optional React lib
