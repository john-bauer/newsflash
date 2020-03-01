# Newsflash

## About
Newsflash is a simple way to get relevant news from thousands of sources.

## Goals


## Live Demo
The live demo can be found at [newsflash-demo.netlify.com](https://newsflash-demo.netlify.com/).

## Installations Required
You'll need a recent installation of [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). That's it.

## Technologies Used
- [Vue.js](https://vuejs.org/): Scaffolded with vue CLI 3.
- [Vue Router](https://router.vuejs.org/): Using history mode.
- [Vuex](https://vuex.vuejs.org/): For state management, set up with module pattern.
- [SCSS](https://sass-lang.com/documentation/syntax): with [dart-sass](https://sass-lang.com/dart-sass).
- [ESLint](https://eslint.org/): Linter and style enforcer, configured to follow standard style.
- [Babel](https://babeljs.io/): Compiles es6 to work in older browsers.
- [Buefy](https://buefy.org/): A lightweight UI Library based on [Bulma](https://bulma.io/).
- [Animate.css](https://daneden.github.io/animate.css/): Simplifies transitions.
- [News API](https://newsapi.org/): A fantastic, free (with limitations) api for curating news articles. 
- [Axios](https://www.npmjs.com/package/axios): A simpler way to make http requests. 

## Backlog

### Features
- Set up country and language filtering process.
- Gather country flags as icons.
- Animate scroll to top on page change
- Break down search form into multiple components.
- Implement search by category.

### Defects
- Update page on forward/backwards navigation on search page ✅
- If keyword is changed, set current page to 1. 

## Note on Rate Limits
Currently, this app is limited to 500 requests per day. 