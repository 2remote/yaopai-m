import path from 'path';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import Clean from 'clean-webpack-plugin';


// TODO: temporary hack fix
// import { TITLE } from './app/components/Tools.js';
const TITLE = {
  indexPage: 'TODO',
};

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');

const APP_TITLE = TITLE.indexPage;

const common = {
  entry: path.resolve(ROOT_PATH, 'app'),
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: { // 目测这个选项不过是赤果果的替换
      app: APP_PATH,
      common: path.resolve(APP_PATH, 'common'),
      main: path.resolve(APP_PATH, 'main'),
      work: path.resolve(APP_PATH, 'work'),
      model: path.resolve(APP_PATH, 'model'),
    },
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: path.resolve(ROOT_PATH, 'app'),
    }],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'app'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      /**
       *  CSS Modules 配置方法
      {
        test: /\.scss$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]!sass?sourceMap=true'
      }*/
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: APP_TITLE,
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.resolve(ROOT_PATH, 'app'),
      }],
    },
    devServer: {
      histroyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 8000,
      proxy: {
        '/imgs/*': 'http://localhost:5000/',
      },
      host: '0.0.0.0', // 允许局域网访问
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: 'app/index.tpl',
        minify: {
          removeComments: true,
        },
      }),
      new OpenBrowserPlugin({
        url: 'http://localhost:8000',
        // 这里写要打开的浏览器名字，若不填，会打开默认浏览器
        // Mac系统下可以选：Safari, Google Chrome, Firefox
        // browser: 'Google Chrome',
      }),
    ],
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: path.resolve(ROOT_PATH, 'app'),
    },
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: '[name].js?[chunkhash]',
    },
    devtool: 'source-map',
    module: {
      noParse: /validate\.js/,
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.resolve(ROOT_PATH, 'app'),
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }],
    },
    plugins: [
      new Clean(['build']),
      /* important! */
      new webpack.optimize.CommonsChunkPlugin(
        '[name].js?[chunkhash]'
      ),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: 'app/index.tpl',
      }),
    ],
  });
}
