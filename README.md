# yaopai-m

YAOPAI移动端 Redux 版

## npm dependencies

### Express related

* npm i -S express express-session

### React, Redux, Router and related

* npm i -S react react-dom redux react-redux react-router react-router-redux

### Webpack

npm i -D webpack webpack-dev-server webpack-merge clean-webpack-plugin open-browser-webpack-plugin html-webpack-plugin

* webpack, wepack-dev-server: basic webpack stfuff
* webpapck-merge: merges weebpack config obj
* clean-webpack-plugin: cleans builds
* open-browser-webpack-plugin: opens browser after webpack build
* html-webpack-plugin: HTML preprocessing plugin

### babel

* npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react

### ESLint

* TODO

## project structure

按照feature区分

* /app: 放置前端代码的地方
  * work: 作品组件
    * actions:
    * reducers:
    * layouts:
  * grapher: 摄影师组件
  * user: 用户组件
  * common: 通用组件
  * util: 工具类
  * config:
  * index.js: 主入口