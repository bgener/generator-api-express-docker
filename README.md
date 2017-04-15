# generator-api-express-docker [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> An express template suiting my needs and maybe yours.

## What you'll get

A minimalist express app with:
- [winston](https://github.com/winstonjs/winston) for logging
- [babel](https://babeljs.io/) for latest JS features
- [eslint](http://eslint.org/) with [airbnb rules](https://github.com/airbnb/javascript)
- [nodemon](https://nodemon.io/) to autorestart the server on file change

To launch your server for development

```bash
yarn docker
```

The src directory is mounted inside the docker image, so any change to this directory restart the server. At each restart, eslint is triggered and babel-node converts js files. You'll only need to relaunch the commande if you add dependencies to your package.json.

For production the default command inside the Dockerfile is
```bash
yarn start
```
Which use babel to convert js files inside the dist directory, and launch dist/app.js with the default node binary.
By default the Docker image is launched with this command.

## Installation

You'll need [Docker](https://docs.docker.com/engine/getstarted/) and [yarn](https://yarnpkg.com/en/docs/getting-started) to fully appreciate this template.

Then, install [Yeoman](http://yeoman.io) and generator-api-express-docker using [yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
yarn global add yo
yarn global add generator-api-express-docker
```
or
```bash
npm install -g yo
npm install -g generator-api-express-docker
```

Then generate your new project:

```bash
yo node-4-me
```
## Next

- Add [Jest](https://facebook.github.io/jest/)
- Use [generator-license](https://github.com/jozefizso/generator-license)
- Add basic tests that run inside a Docker image
- Add some tests for the generator
- Add Winston console colors 🤗
- Better README
- Add [Travis.ci](https://travis-ci.org/) 
- Use Yarn cache to speed up Docker build
- Add [nsp](https://www.npmjs.com/package/nsp)
- Add WebStorm meta ?
- Add [Flow](https://flow.org/) ?

## License

MIT © [Pierre-Etienne Cherière](https://www.linkedin.com/in/pecheriere/)


[npm-image]: https://badge.fury.io/js/generator-api-express-docker.svg
[npm-url]: https://npmjs.org/package/generator-api-express-docker
[travis-image]: https://travis-ci.org/pecheriere/generator-api-express-docker.svg?branch=master
[travis-url]: https://travis-ci.org/pecheriere/generator-api-express-docker
[daviddm-image]: https://david-dm.org/pecheriere/generator-api-express-docker.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/pecheriere/generator-api-express-docker
