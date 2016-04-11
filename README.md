# yaopai-m

YAOPAI移动端 Redux 版

## 一、开发前的准备步骤

1. 克隆项目：`git clone https://github.com/2remote/yaopai-m.git`
2. 安装 [Node.js](https://nodejs.org/)
3. 安装依赖项：`npm install`
4. 启动dev-server：`npm start`

## 二、npm依赖项说明

### Express related

```
npm i -S express express-session
```

### React, Redux, Router and related

```
npm i -S react react-dom
npm i -S redux react-redux
npm i -S react-router react-router-redux
```

### Webpack

```
# 写好几行只是为了好看
npm i -D webpack webpack-dev-server
npm i -D webpack-merge clean-webpack-plugin
npm i -D open-browser-webpack-plugin html-webpack-plugin
npm i -D eslint-loader
```

解释说明：

* webpack, wepack-dev-server: webpack两件套
* webpapck-merge: 合并webpack中的配置
* clean-webpack-plugin: 清空之前的builds
* open-browser-webpack-plugin: webpack处理完之后自动在浏览器中打开
* html-webpack-plugin: HTML模板预处理（之前用的版本1，现在升级到2）
* eslint-loader：这货给Webpack加载ESLint

### babel

```
npm i -D babel-core babel-loader
npm i -D babel-preset-es2015 babel-preset-react
```

### ESLint

```
npm i -D eslint eslint-plugin-react # ESLint两件套
npm i -D eslint-config-airbnb # airbnb的规范
```

## 三、项目组织结构

按照feature区分（[参考文档](http://jaysoo.ca/2016/02/28/organizing-redux-application/)）

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

## 四、Route配置

* /: 跳转 /main
  * /main: 主页，有下面fixed菜单
    * /: 跳转 /work
    * /work: 作品列表
    * /discovery: 发现
    * /grapher: 摄影师列表
    * /user: 用户
  * /work: 作品模块
    * /:
    * /:wid: 作品详情
  * /grapher: 摄影师模块
    * /:
    * /gid: 摄影师详情
  * /user: 用户模块
    * /: 跳转 /login
    * login: 登陆相关
    * order: 订单
  * /about: 关于模块

## 零、辣么多TODO

* 整理webpack config
* 测试相关
* ESLint和各种编码规范
* more to come
