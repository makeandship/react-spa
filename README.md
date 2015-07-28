# React Single Page Application

Bare bones starter example of a [React](http://facebook.github.io/react/) single page application using [React Router](http://rackt.github.io/react-router/) with browser history.

## Install

```
npm install
```

## Start local server

```
npm start
```

You can access the example on [http://localhost:8080/](http://localhost:8080/)

## Build

```
npm run build
```

Outputs a single `bundle.js` in the `build` directory. This can be run alongside `index.html`

## TODO

- Create production Express server that routes fall-back requests to the app
- Create a demo working against a KeystoneJS API
- Implement handling of static assets (currently css is bundled into the js file)
