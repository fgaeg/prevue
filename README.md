# prevue

> Vue with Nuxt.js

## How to run

Install all dependencies at first

``` bash
# install dependencies
$ npm install
```

## Commands

### Development

Running in your local environment. It will open the browser at localhost:3700 and serve with hot reload. This will watch every changes you've made.

``` bash
$ npm run dev
```

### Lint

For lint purpose, you can run this command in through your terminal.

``` bash
$ npm run lint
```

### Generate static project

Generate everything you have from your local environment into static site. 

``` bash
$ npm run generate
```

Then you can preview your static site using internal server (thanks to `http-server` package) within this command, it will open your browser at localhost:3800.

``` bash
$ npm run generate:preview
```

### Build for production and launch server

Build your SSR project and launch server for preview purpose in your local machine.

``` bash
$ npm run build
$ npm run start
```
