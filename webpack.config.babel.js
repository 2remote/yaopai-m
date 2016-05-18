/* 用于定位路径 */
import path from 'path'
/* HTML template 处理 */
import HtmlwebpackPlugin from 'html-webpack-plugin'
/* 处理完自动打开浏览器 */
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
/* The Webpack */
import webpack from 'webpack'
/* 合并配置 */
import merge from 'webpack-merge'
/* 清理build用 */
import Clean from 'clean-webpack-plugin'

// 配置思路
// 4个环境：
// 1. dev环境 - user端
// 2. dev环境 - grapher端
// 3. prod环境 - user端
// 4. prod环境 - grapher端

// HACK: Temporary hack fix. But what on earth is this?
// import { TITLE } from './app/components/Tools.js';
const TITLE = {
  indexPage: 'TODO',
}

const APP_TITLE = TITLE.indexPage

/* 1. 基本常量 */
const ROOT_PATH = path.resolve(__dirname) // 根路径
const APP_PATH = path.resolve(ROOT_PATH, 'app') // 源码路径
const USER_PATH = path.resolve(APP_PATH, 'user') // user端路径
const GRAPHER_PATH = path.resolve(APP_PATH, 'grapher') // grapher端路径
/* 2. 决定环境的变量 */
const TARGET = process.env.npm_lifecycle_event // 从npm中获取目标环境
// 从target转换成env和app信息
console.log('************************************************************')
console.log('GOT TARGET:', TARGET, typeof TARGET)
console.log('************************************************************')
const target_env = // startsWith('dev')
  TARGET.lastIndexOf('dev') === 0 ?
  'dev' : 'prod'
const target_app = // endsWith('user')
  TARGET.lastIndexOf('user') + 'user'.length == TARGET.length ?
  'user' : 'grapher'
// 这些变量存设置
let contentPath = undefined // 用这个变量存当前是USER_PATH还是GRAPHER_PATH
let settingConfig = { // user || grapher
  resolve: {},
  module: {},
}
let common = { }// 通用
let envConfig = { // dev || prod
  resolve: {},
  module: {},
  plugins: [],
}
/* 3. 用户 || 摄影师 */
if (target_app === 'user') { // user
  contentPath = USER_PATH
  settingConfig = {
    /* ================================================================ */
    /* 关联: alias */
    /* ================================================================ */
    resolve: {
      alias: {
        main: path.resolve(contentPath, 'main'), // 主页
        work: path.resolve(contentPath, 'work'), // 作品
        grapher: path.resolve(contentPath, 'grapher'), // 摄影师
        model: path.resolve(contentPath, 'model'), // 纯数据
        user: path.resolve(contentPath, 'user'), // 用户
        about: path.resolve(contentPath, 'about'), // 关于
      },
    },
  }
}
if (target_app === 'grapher') { // grapher
  contentPath = GRAPHER_PATH
  settingConfig = {
    resolve: {
      alias: {
        model: path.resolve(contentPath, 'model'), // 纯数据
        user: path.resolve(contentPath, 'user'), // 用户
      },
    },
  }
}

/* 4. 通用配置 */
common = {
  /* ================================================================ */
  /* 入口: entry */
  /* ================================================================ */
  entry: contentPath,
  /* ================================================================ */
  /* 输出 */
  /* ================================================================ */
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  /* ================================================================ */
  /* 增强debug: 全环境都要有source-map */
  /* ================================================================ */
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    /* ================================================================ */
    /* 通用的module alias */
    /* ================================================================ */
    alias: {
      app: APP_PATH, // app root
      common: path.resolve(APP_PATH, 'common'), // 通用组件
      tool: path.resolve(APP_PATH, 'tool'),
    },
  },
  module: {
    /* ================================================================ */
    /* XXX: 这是啥 */
    /* ================================================================ */
    noParse: /validate\.js/,
    loaders: [
      /* ================================================================ */
      /* babel transcompiles React code (js & jsx) */
      /* ================================================================ */
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        // include: path.resolve(contentPath, 'app'),
      },
      /* ================================================================ */
      /* 处理scss代码 IDEA: @可乐 这个要不要增加处理sass, css的扩展名 */
      /* ================================================================ */
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      /* ================================================================ */
      /* XXX: 这个是什么鬼 */
      /* ================================================================ */
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    /* ================================================================ */
    /* HTML模板处理 */
    /* ================================================================ */
    new HtmlwebpackPlugin({
      title: APP_TITLE,
      template: path.resolve(contentPath, 'index.tpl'),
      minify: {
        removeComments: true, // 移除注释
      },
    }),
  ],
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  // },
}
/* 5. 开发 || 正式 */
if (target_env === 'dev') { // dev
  envConfig = {
    /* ================================================================ */
    /* 预处理: preLoader */
    /* ================================================================ */
    module: {
      preLoaders: [{
        test: /\.jsx?$/,
        loaders: ['eslint'],
      }],
    },
    /* ================================================================ */
    /* 插件: plugins */
    /* ================================================================ */
    plugins: [
      // 热替换
      new webpack.HotModuleReplacementPlugin(),
      // 自动打开浏览器
      new OpenBrowserPlugin({
        url: 'http://localhost:8000', // IDEA: 这个port能不能import进来？
        // 这里写要打开的浏览器名字，若不填，会打开默认浏览器
        // Mac系统下可以选：Safari, Google Chrome, Firefox
        // browser: 'Google Chrome',
      })
    ],
    /* ================================================================ */
    /* 开发服务器: devServer */
    /* ================================================================ */
    devServer: {
      histroyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 8000, // IDEA: 这个port能不能import进来？
      proxy: { // IDEA: 这个port能不能import进来？
        '/imgs/*': 'http://localhost:5000/',
      },
      host: '0.0.0.0', // 允许局域网访问
    },
  }
}
if (target_env === 'prod') { // prod
  envConfig = {
    /* ================================================================ */
    /* 入口分为app和vendor */
    /* 参考：http://webpack.github.io/docs/code-splitting.html */
    /* ================================================================ */
    entry: {
      app: contentPath,
      vendor: [
        'jquery',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux',
        'redux-thunk'
      ],
    },
    /* ================================================================ */
    /* app -> bundle.js */
    /* ================================================================ */
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: 'bundle.js?[chunkhash]',
    },
    plugins: [
      /* ================================================================ */
      /* IDEA: 这个要不要配置成路径？ */
      /* ================================================================ */
      new Clean(['build']),
      /* ================================================================ */
      /* 把公用的module抽出来放进vendor里 */
      /* （然后原本bundle.js中的这些来源于vendor的module就抽出来了） */
      /* ================================================================ */
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        'vendor.bundle.js'
      ),
      /* ================================================================ */
      /*  Uglify */
      /* ================================================================ */
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      /* ================================================================ */
      /* 注入环境变量 NODE_ENV 为 production */
      /* 不用这个的时候，Redux会报错说用的版本不是生产版本 */
      /* 参考：https://github.com/reactjs/redux/issues/1029 */
      /* ================================================================ */
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }),
    ],
  }
}

/**
 * 根据前面的逻辑做完config配置，合并一下输出
 * envConfig放最后：prod环境下envConfig的配置要覆盖前面(common)的配置
 * @param: settingConfig: 根据是user版还是grapher版的配置定制
 * @param: common: 通用配置
 * @param: envConfig: 根据是dev还是prod的配置定制
**/
module.exports = merge(settingConfig, common, envConfig)
